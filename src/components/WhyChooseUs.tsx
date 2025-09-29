import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, Users, Award, Leaf, Phone, CircleCheck as CheckCircle, Star, Zap } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Reliable & Professional",
    description: "Over 1 year of trusted service with a proven track record of reliability and professional excellence in waste management.",
    stats: "98% Customer Satisfaction",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Clock,
    title: "Punctual Service",
    description: "Consistent and timely waste collection services with scheduled pickups that you can depend on every week.",
    stats: "On-Time Guarantee",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Highly trained and experienced professionals dedicated to providing exceptional waste management solutions.",
    stats: "Certified Professionals",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Approach",
    description: "Committed to sustainable practices with advanced recycling programs and environmentally responsible disposal methods.",
    stats: "50+ Tons Recycled",
    color: "from-teal-500 to-green-500"
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Rigorous quality control processes ensure consistent service delivery and customer satisfaction across all operations.",
    stats: "Quality Certified",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Zap,
    title: "24/7 Support",
    description: "Round-the-clock customer support for emergencies and inquiries, ensuring you're never left without assistance.",
    stats: "Always Available",
    color: "from-indigo-500 to-purple-500"
  }
];

const achievements = [
  { number: "100+", label: "Happy Clients", icon: Users },
  { number: "50+", label: "Tons Recycled", icon: Leaf },
  { number: "98%", label: "Success Rate", icon: CheckCircle },
  { number: "24/7", label: "Support", icon: Phone }
];

const WhyChooseUs = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      const headerHeight = 120;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - headerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="why-choose-us" className="py-32 bg-gradient-subtle relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-primary-glow rounded-full blur-3xl animate-bounce-gentle"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent rounded-full blur-2xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-scale">
          <div className="inline-flex items-center gap-3 bg-primary/15 border-2 border-primary/30 rounded-full px-8 py-4 mb-10 shadow-card">
            <Star className="text-primary" size={24} />
            <span className="text-primary font-bold text-base tracking-wide">WHY CHOOSE US</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-foreground mb-8 tracking-tight">
            Why <span className="text-gradient">ARET</span> is Different
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto font-medium leading-relaxed">
            Discover what makes ARET Environmental Services the preferred choice for waste management 
            solutions in Uyo, Akwa Ibom State.
          </p>
        </div>

        {/* Achievements Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 animate-fade-in-scale">
          {achievements.map((achievement, index) => (
            <Card key={index} className="card-modern shadow-hover hover:scale-105 transition-all duration-500 text-center">
              <CardContent className="p-8">
                <div className="bg-gradient-primary p-4 rounded-2xl w-16 h-16 mx-auto mb-4 shadow-card">
                  <achievement.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-3xl font-black text-foreground mb-2 group-hover:scale-110 transition-transform duration-500">
                  {achievement.number}
                </div>
                <div className="text-muted-foreground font-medium">
                  {achievement.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {reasons.map((reason, index) => (
            <Card 
              key={index} 
              className="group card-modern shadow-hover hover:scale-105 transition-all duration-700 animate-fade-in-scale relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <CardContent className="p-10 relative z-10">
                {/* Icon with Animated Background */}
                <div className="relative mb-8">
                  <div className={`absolute inset-0 bg-gradient-to-br ${reason.color} rounded-2xl blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                  <div className={`relative bg-gradient-to-br ${reason.color} p-4 rounded-2xl w-20 h-20 mx-auto flex items-center justify-center shadow-card group-hover:shadow-hover transition-all duration-500`}>
                    <reason.icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black text-foreground mb-4 group-hover:text-primary transition-colors duration-300 text-center">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6 text-center">
                  {reason.description}
                </p>

                {/* Stats Badge */}
                <div className="text-center">
                  <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold">
                    <CheckCircle size={16} />
                    {reason.stats}
                  </span>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in-scale" style={{ animationDelay: '0.8s' }}>
          <div className="card-modern p-12 max-w-4xl mx-auto shadow-hover">
            <h3 className="text-3xl font-black text-foreground mb-6">
              Ready to Experience the ARET Difference?
            </h3>
            <p className="text-muted-foreground mb-8 text-lg font-medium max-w-2xl mx-auto">
              Join over 100 satisfied customers who trust ARET Environmental Services for their waste management needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={scrollToContact}
                className="btn-modern"
              >
                Get Started Today
              </button>
              <button 
                onClick={() => window.open('tel:09152870616', '_self')}
                className="bg-background text-primary border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-4 rounded-xl font-semibold"
              >
                <Phone className="mr-2" size={16} />
                Call Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;