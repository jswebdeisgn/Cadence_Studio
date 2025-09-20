const About = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-light mb-8 text-brand-primary">
              Our Brand Story & Purpose
            </h2>
            <div className="space-y-6 text-lg text-brand-muted leading-relaxed">
              <p>
                Cadence Studio believes that exceptional digital solutions are built on a foundation of 
                <span className="text-brand-primary font-medium"> rhythm, flow, and harmonious collaboration</span>. 
                We are a software and web solutions agency dedicated to crafting elegant, functional, 
                and user-centric digital experiences.
              </p>
              <p>
                Our purpose is to infuse every project with a sense of orchestrated precision and creative synergy, 
                transforming complex challenges into seamless, impactful digital realities.
              </p>
              <p>
                We strive to be the steady, reliable partner that helps businesses find their perfect 
                <span className="text-brand-accent font-medium"> digital rhythm</span> and realize their 
                fullest online potential.
              </p>
            </div>
          </div>
          
          {/* Logo Story */}
          <div className="bg-brand-light rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent opacity-10 rounded-full blur-2xl"></div>
            <h3 className="text-2xl md:text-3xl font-light mb-6 text-brand-primary">
              The Story Behind Our Symbol
            </h3>
            <div className="space-y-4 text-brand-muted">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-brand-accent rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-medium text-brand-primary mb-2">Orchestrated Vision</h4>
                  <p className="text-sm leading-relaxed">
                    The central convergence represents your vision, with segments radiating outward as our 
                    methodical process transforms ideas into reality.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-brand-accent rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-medium text-brand-primary mb-2">Dynamic Growth</h4>
                  <p className="text-sm leading-relaxed">
                    The outward movement signifies creation, growth, innovation, and the far-reaching 
                    impact of our solutions.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-brand-accent rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="font-medium text-brand-primary mb-2">Harmony in Collaboration</h4>
                  <p className="text-sm leading-relaxed">
                    Individual elements working in perfect balance, representing seamless integration of 
                    ideas, expertise, and technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;