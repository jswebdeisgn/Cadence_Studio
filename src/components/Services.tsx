import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices for scalability and performance.",
      icon: Code
    },
    {
      title: "Software Solutions", 
      description: "Tailored software development that transforms your business processes and enhances operational efficiency.",
      icon: Zap
    },
    {
      title: "Digital Strategy",
      description: "Comprehensive digital transformation guidance to help your business thrive in the modern landscape.",
      icon: Users
    },
    {
      title: "User Experience",
      description: "Intuitive, user-centric designs that create meaningful connections between your brand and your audience.",
      icon: Palette
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-brand-primary">
            How We Create Digital Harmony
          </h2>
          <p className="text-lg text-brand-muted max-w-2xl mx-auto leading-relaxed">
            Every project is a symphony of creativity, technology, and strategic thinking, 
            orchestrated to deliver exceptional results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index}
                className="border border-border bg-background hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group p-6"
              >
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-brand-light rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-accent transition-colors duration-300">
                    <IconComponent className="h-6 w-6 text-brand-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-brand-primary">
                    {service.title}
                  </h3>
                  <p className="text-brand-muted text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;