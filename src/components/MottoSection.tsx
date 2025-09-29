import { Leaf, Heart, Users, Globe } from "lucide-react";

const MottoSection = () => {
  return (
    <section className="py-16 bg-gradient-primary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary-foreground/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-accent/40 rounded-full animate-bounce-gentle"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* ARET Motto */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4 animate-fade-in-up">
              <span className="text-accent">Motto</span>
            </h2>
            <p className="text-2xl md:text-3xl text-primary-foreground/90 max-w-4xl mx-auto animate-fade-in-up font-medium">
              Partnering for sustainable solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MottoSection;