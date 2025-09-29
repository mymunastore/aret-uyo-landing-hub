import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AretCaresSection from "@/components/AretCaresSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import AnimatedSection from "@/components/AnimatedSection";
import PerformanceOptimizer from "@/components/PerformanceOptimizer";
import AccessibilityEnhancer from "@/components/AccessibilityEnhancer";
import SEOHead from "@/components/SEOHead";
import { LiveChat } from "@/components/LiveChat";
import MottoSection from "@/components/MottoSection";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showTestimonials, setShowTestimonials] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.slice(1);
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  if (isLoading) {
    return (
      <>
        <SEOHead />
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEOHead />
      <PerformanceOptimizer />
      <AccessibilityEnhancer />
      <ScrollProgress />
      <Header 
        showTestimonials={showTestimonials}
        onToggleTestimonials={setShowTestimonials}
      />
      
      <main id="main-content">
        <Hero />
        
        <AnimatedSection delay={50}>
          <AretCaresSection />
        </AnimatedSection>
        
        <AnimatedSection delay={100}>
          <MottoSection />
        </AnimatedSection>
        
        <AnimatedSection delay={150}>
          <WhyChooseUs />
        </AnimatedSection>
        
        {showTestimonials && (
          <AnimatedSection delay={200}>
            <Testimonials />
          </AnimatedSection>
        )}
        
        <AnimatedSection delay={250}>
          <FAQ />
        </AnimatedSection>
      </main>
      
      <Footer />
      <ScrollToTop />
      <LiveChat />
    </div>
  );
};

export default Index;
