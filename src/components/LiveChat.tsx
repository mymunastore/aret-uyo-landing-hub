import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Minimize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface Message {
  id: string;
  content: string;
  sender_type: 'customer' | 'agent';
  created_at: string;
  sender_id: string;
}

interface Conversation {
  id: string;
  status: string;
  created_at: string;
  customer_id: string;
}

export const LiveChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [conversation, setConversation] = useState<Conversation | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [showContactForm, setShowContactForm] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const createConversation = async () => {
    if (!customerName.trim() || !customerEmail.trim()) {
      toast({
        title: "Required Information",
        description: "Please provide your name and email to start the chat.",
        variant: "destructive",
      });
      return;
    }

    try {
      // Generate a session ID for anonymous users
      const sessionId = crypto.randomUUID();
      
      // Store session ID in localStorage for persistence
      localStorage.setItem('chat_session_id', sessionId);
      
      const { data, error } = await supabase
        .from('support_conversations')
        .insert({
          customer_id: sessionId, // Use session ID as customer ID for anonymous users
          subject: 'Live Chat Support',
          status: 'open',
          priority: 'medium',
          metadata: {
            customer_name: customerName,
            customer_email: customerEmail,
            channel: 'live_chat',
            session_id: sessionId,
            is_anonymous: true
          }
        })
        .select()
        .single();

      if (error) throw error;

      setConversation(data);
      setShowContactForm(false);
      setIsConnected(true);

      // Send welcome message
      await sendSystemMessage(data.id, `Hello ${customerName}! Welcome to ARET Environmental Services live chat. How can we help you today?`);

      // Set up real-time subscription
      setupRealtimeSubscription(data.id);

      toast({
        title: "Chat Started",
        description: "You're now connected with our support team.",
      });
    } catch (error) {
      console.error('Error creating conversation:', error);
      toast({
        title: "Connection Error",
        description: "Failed to start chat. Please try again.",
        variant: "destructive",
      });
    }
  };

  const sendSystemMessage = async (conversationId: string, content: string) => {
    const systemUserId = '00000000-0000-0000-0000-000000000000'; // System user ID
    
    await supabase
      .from('support_messages')
      .insert({
        conversation_id: conversationId,
        sender_id: systemUserId,
        sender_type: 'agent',
        content,
        message_type: 'text'
      });
  };

  const setupRealtimeSubscription = (conversationId: string) => {
    const channel = supabase
      .channel('chat-messages')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'support_messages',
          filter: `conversation_id=eq.${conversationId}`
        },
        (payload) => {
          const newMessage = payload.new as Message;
          setMessages(prev => [...prev, newMessage]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  };

  const sendMessage = async () => {
    if (!inputMessage.trim() || !conversation) return;

    try {
      const sessionId = localStorage.getItem('chat_session_id') || conversation.customer_id;
      
      await supabase
        .from('support_messages')
        .insert({
          conversation_id: conversation.id,
          sender_id: sessionId,
          sender_type: 'customer',
          content: inputMessage.trim(),
          message_type: 'text'
        });

      setInputMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Message Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const ChatButton = () => (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={() => setIsOpen(true)}
        className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );

  const ChatWindow = () => (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className={`w-80 h-96 flex flex-col transition-all duration-300 ${isMinimized ? 'h-12' : 'h-96'}`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-primary text-primary-foreground rounded-t-lg">
          <div className="flex items-center gap-2">
            <MessageCircle className="h-4 w-4" />
            <span className="font-medium">Live Support</span>
            {isConnected && <Badge variant="secondary" className="text-xs">Online</Badge>}
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-primary-foreground hover:bg-primary-foreground/20"
              onClick={() => setIsMinimized(!isMinimized)}
            >
              <Minimize2 className="h-3 w-3" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-primary-foreground hover:bg-primary-foreground/20"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-3 w-3" />
            </Button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Contact Form */}
            {showContactForm && (
              <div className="flex-1 p-4 space-y-4">
                <div className="text-sm text-muted-foreground">
                  Please provide your details to start the chat:
                </div>
                <div className="space-y-3">
                  <Input
                    placeholder="Your name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                  />
                  <Input
                    placeholder="Your email"
                    type="email"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                  />
                  <Button onClick={createConversation} className="w-full">
                    Start Chat
                  </Button>
                </div>
              </div>
            )}

            {/* Messages */}
            {!showContactForm && (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender_type === 'customer' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg text-sm ${
                          message.sender_type === 'customer'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted'
                        }`}
                      >
                        {message.content}
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-4 border-t">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Type your message..."
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="flex-1"
                    />
                    <Button onClick={sendMessage} size="icon">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </Card>
    </div>
  );

  return (
    <>
      {!isOpen && <ChatButton />}
      {isOpen && <ChatWindow />}
    </>
  );
};