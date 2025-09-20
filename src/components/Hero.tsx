import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import cadenceLogo from "@/assets/cadence-logo.png";

const Hero = () => {
  return (
    <section className="pt-20 pb-16 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img 
              src={cadenceLogo} 
              alt="Cadence Studio" 
              className="h-16 md:h-20 object-contain"
            />
          </div>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold mb-6 text-brand-primary leading-tight">
            Your premier space for
            <span className="block text-brand-accent">everything you are.</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-brand-muted mb-10 max-w-2xl mx-auto leading-relaxed">
            We craft elegant, functional digital experiences through orchestrated precision 
            and creative synergy. Transform your vision into digital reality.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-brand-primary hover:bg-brand-secondary text-primary-foreground px-8 py-4 text-base rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Get started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="lg"
              className="text-brand-primary hover:bg-brand-light px-8 py-4 text-base rounded-lg transition-all duration-300"
            >
              <Play className="mr-2 h-4 w-4" /> Watch demo
            </Button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
          <div className="text-sm text-brand-muted">Trusted by teams at</div>
          <div className="flex flex-wrap justify-center gap-8">
            {["Microsoft", "Google", "Adobe", "Shopify", "Slack"].map((company) => (
              <div key={company} className="text-brand-muted font-medium">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;