import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const Features = () => {
  const features = [
    "Custom web applications",
    "Modern technology stack", 
    "Scalable architecture",
    "Performance optimization",
    "Responsive design",
    "SEO optimization"
  ];

  return (
    <section className="py-20 px-6 bg-brand-light">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-brand-primary leading-tight">
              A global network for your
              <span className="block text-brand-accent">entire business purpose.</span>
            </h2>
            <p className="text-lg text-brand-muted mb-8 leading-relaxed">
              From concept to deployment, we provide comprehensive solutions that 
              scale with your business and adapt to your changing needs.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-brand-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-brand-primary">{feature}</span>
                </div>
              ))}
            </div>
            
            <Button className="bg-brand-primary hover:bg-brand-secondary text-primary-foreground px-6 py-3 rounded-lg">
              Learn more <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          {/* Right Visual */}
          <div className="relative">
            <div className="bg-background rounded-2xl p-8 shadow-elegant">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-accent rounded-full"></div>
                  <div>
                    <div className="h-4 bg-brand-light rounded w-32 mb-2"></div>
                    <div className="h-3 bg-brand-light rounded w-24"></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="h-3 bg-brand-light rounded w-full"></div>
                  <div className="h-3 bg-brand-light rounded w-4/5"></div>
                  <div className="h-3 bg-brand-light rounded w-3/5"></div>
                </div>
                <div className="flex gap-3">
                  <div className="h-8 bg-brand-primary rounded w-20"></div>
                  <div className="h-8 bg-brand-light rounded w-16"></div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-accent rounded-2xl opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-brand-primary rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;