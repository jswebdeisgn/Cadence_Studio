import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices for scalability and performance.",
      icon: "🌐"
    },
    {
      title: "Software Solutions",
      description: "Tailored software development that transforms your business processes and enhances operational efficiency.",
      icon: "⚡"
    },
    {
      title: "Digital Strategy",
      description: "Comprehensive digital transformation guidance to help your business thrive in the modern landscape.",
      icon: "🎯"
    },
    {
      title: "User Experience",
      description: "Intuitive, user-centric designs that create meaningful connections between your brand and your audience.",
      icon: "✨"
    }
  ];

  return (
    <section className="py-24 px-6 bg-brand-light">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 text-brand-primary">
            How We Create
            <span className="block text-brand-accent font-normal">Digital Harmony</span>
          </h2>
          <p className="text-xl text-brand-muted max-w-3xl mx-auto leading-relaxed">
            Every project is a symphony of creativity, technology, and strategic thinking, 
            orchestrated to deliver exceptional results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="border-0 bg-background shadow-elegant hover:shadow-xl transition-all duration-500 hover:scale-105 group"
            >
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-medium mb-4 text-brand-primary">
                  {service.title}
                </h3>
                <p className="text-brand-muted leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-background px-8 py-4 rounded-full shadow-elegant">
            <span className="text-brand-muted">Ready to begin?</span>
            <span className="text-brand-primary font-medium">Let's talk about your project</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;