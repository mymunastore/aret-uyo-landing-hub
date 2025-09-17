import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import StatsSection from "@/components/StatsSection";
import FAQ from "@/components/FAQ";
import Policies from "@/components/Policies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";
import ScrollToTop from "@/components/ScrollToTop";
import AnimatedSection from "@/components/AnimatedSection";
import PerformanceOptimizer from "@/components/PerformanceOptimizer";
import AccessibilityEnhancer from "@/components/AccessibilityEnhancer";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

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
      <Header />
      
      <main id="main-content">
        <Hero />
        
        <AnimatedSection delay={100}>
          <Services />
        </AnimatedSection>
        
        <AnimatedSection delay={200}>
          <Pricing />
        </AnimatedSection>
        
        <AnimatedSection delay={100}>
          <About />
        </AnimatedSection>
        
        <AnimatedSection delay={200}>
          <WhyChooseUs />
        </AnimatedSection>
        
        <AnimatedSection delay={100}>
          <StatsSection />
        </AnimatedSection>
        
        <AnimatedSection delay={200}>
          <FAQ />
        </AnimatedSection>
        
        <AnimatedSection delay={100}>
          <Policies />
        </AnimatedSection>
        
        <AnimatedSection delay={100}>
          <Contact />
        </AnimatedSection>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
