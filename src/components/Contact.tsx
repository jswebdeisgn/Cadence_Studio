import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-brand-primary">
            Let's Create Together
          </h2>
          <p className="text-xl text-brand-muted max-w-2xl mx-auto leading-relaxed">
            Ready to transform your vision into digital reality? 
            We'd love to discuss your project and find the perfect rhythm for success.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-brand-primary mb-2">
                    First Name
                  </label>
                  <Input 
                    placeholder="Your first name"
                    className="border-brand-muted focus:border-brand-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-primary mb-2">
                    Last Name
                  </label>
                  <Input 
                    placeholder="Your last name"
                    className="border-brand-muted focus:border-brand-accent transition-colors"
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
                  className="border-brand-muted focus:border-brand-accent transition-colors"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-brand-primary mb-2">
                  Project Details
                </label>
                <Textarea 
                  placeholder="Tell us about your project, goals, and how we can help bring your vision to life..."
                  rows={6}
                  className="border-brand-muted focus:border-brand-accent transition-colors resize-none"
                />
              </div>
              
              <Button 
                className="w-full bg-brand-primary hover:bg-brand-secondary text-primary-foreground py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
                size="lg"
              >
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-brand-light rounded-3xl p-8 relative overflow-hidden">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-accent opacity-10 rounded-full blur-xl"></div>
              <h3 className="text-2xl font-light mb-6 text-brand-primary">Get In Touch</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-brand-primary mb-2">Email</h4>
                  <p className="text-brand-muted">hello@cadencestudio.com</p>
                </div>
                <div>
                  <h4 className="font-medium text-brand-primary mb-2">Response Time</h4>
                  <p className="text-brand-muted">We typically respond within 24 hours</p>
                </div>
                <div>
                  <h4 className="font-medium text-brand-primary mb-2">Project Consultation</h4>
                  <p className="text-brand-muted">Free initial consultation for all new projects</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-brand-accent to-yellow-400 rounded-3xl p-8 text-center">
              <h3 className="text-2xl font-light mb-4 text-white">Ready to Start?</h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Every great digital product begins with a conversation. 
                Let's discuss your vision and create something extraordinary together.
              </p>
              <Button 
                variant="secondary"
                className="bg-white text-brand-primary hover:bg-gray-50 rounded-full px-8"
              >
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;