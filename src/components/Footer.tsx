import cadenceLogo from "@/assets/cadence-logo.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <img 
              src={cadenceLogo} 
              alt="Cadence Studio" 
              className="h-12 object-contain mb-4"
            />
            <p className="text-brand-muted leading-relaxed max-w-md">
              Crafting elegant digital experiences through orchestrated precision 
              and creative synergy. Your trusted partner for digital transformation.
            </p>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-semibold text-brand-primary mb-4">Services</h3>
            <ul className="space-y-2 text-brand-muted">
              <li><a href="#" className="hover:text-brand-primary transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Software Solutions</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Digital Strategy</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">User Experience</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-semibold text-brand-primary mb-4">Contact</h3>
            <div className="space-y-2 text-brand-muted">
              <p>hello@cadencestudio.com</p>
              <p>Free consultation</p>
              <p>24h response time</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-brand-muted text-sm">
            © 2024 Cadence Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="text-brand-muted hover:text-brand-primary transition-colors text-sm">Privacy</a>
            <a href="#" className="text-brand-muted hover:text-brand-primary transition-colors text-sm">Terms</a>
            <a href="#" className="text-brand-muted hover:text-brand-primary transition-colors text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;