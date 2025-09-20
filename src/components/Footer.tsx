import cadenceLogo from "@/assets/cadence-logo.png";

const Footer = () => {
  return (
    <footer className="bg-brand-primary text-primary-foreground py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <img 
              src={cadenceLogo} 
              alt="Cadence Studio" 
              className="h-16 object-contain mb-6 invert"
            />
            <p className="text-gray-300 leading-relaxed">
              Crafting elegant digital experiences through orchestrated precision 
              and creative synergy.
            </p>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-medium mb-6">Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Software Solutions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Digital Strategy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">User Experience</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium mb-6">Contact</h3>
            <div className="space-y-3 text-gray-300">
              <p>hello@cadencestudio.com</p>
              <p>Free consultation available</p>
              <p>Response within 24 hours</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Cadence Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;