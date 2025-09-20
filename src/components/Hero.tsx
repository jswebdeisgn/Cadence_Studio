import { Button } from "@/components/ui/button";
import cadenceLogo from "@/assets/cadence-logo.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-accent rounded-full blur-3xl floating-animation"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-primary rounded-full blur-3xl floating-animation" style={{ animationDelay: "-3s" }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Logo */}
          <div className="mb-12 flex justify-center">
            <img 
              src={cadenceLogo} 
              alt="Cadence Studio" 
              className="h-24 md:h-32 object-contain pulse-glow"
            />
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-8 text-balance leading-tight">
            Where Vision Meets
            <span className="block bg-gradient-to-r from-brand-primary to-brand-accent bg-clip-text text-transparent font-normal">
              Digital Reality
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-brand-muted mb-12 max-w-3xl mx-auto leading-relaxed text-balance">
            We craft elegant, functional digital experiences through orchestrated precision 
            and creative synergy. Your vision, our rhythm.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-brand-primary hover:bg-brand-secondary text-primary-foreground px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Start Your Project
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-primary-foreground px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
            >
              View Our Work
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-brand-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-brand-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;