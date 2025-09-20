import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-brand-light">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-brand-primary">
            Ready to get started?
          </h2>
          <p className="text-lg text-brand-muted max-w-2xl mx-auto">
            Transform your vision into digital reality. Let's discuss your project 
            and create something extraordinary together.
          </p>
        </div>
        
        <div className="bg-background rounded-2xl p-8 md:p-12 shadow-elegant">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-brand-primary mb-2">
                  First Name
                </label>
                <Input 
                  placeholder="Your first name"
                  className="border-border focus:border-brand-accent focus:ring-brand-accent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-primary mb-2">
                  Last Name
                </label>
                <Input 
                  placeholder="Your last name"
                  className="border-border focus:border-brand-accent focus:ring-brand-accent"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-brand-primary mb-2">
                Email Address
              </label>
              <Input 
                type="email" 
                placeholder="your.email@company.com"
                className="border-border focus:border-brand-accent focus:ring-brand-accent"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-brand-primary mb-2">
                Project Details
              </label>
              <Textarea 
                placeholder="Tell us about your project, goals, and how we can help..."
                rows={5}
                className="border-border focus:border-brand-accent focus:ring-brand-accent resize-none"
              />
            </div>
            
            <Button 
              className="w-full bg-brand-primary hover:bg-brand-secondary text-primary-foreground py-4 text-base rounded-lg transition-all duration-300 hover:shadow-lg"
              size="lg"
            >
              Send Message <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-brand-muted mb-2">Prefer to email directly?</p>
          <a href="mailto:hello@cadencestudio.com" className="text-brand-primary font-medium hover:text-brand-accent transition-colors">
            hello@cadencestudio.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;