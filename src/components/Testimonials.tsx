import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechFlow",
      content: "Cadence Studio transformed our digital presence completely. Their attention to detail and technical expertise is unmatched.",
      rating: 5
    },
    {
      name: "Marcus Johnson", 
      role: "CTO, InnovateLab",
      content: "Working with Cadence Studio was seamless. They understood our vision and delivered beyond our expectations.",
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      role: "Founder, DesignCo",
      content: "The team's collaborative approach and creative solutions helped us achieve our business goals faster than anticipated.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-brand-primary">
            What our clients say
          </h2>
          <p className="text-lg text-brand-muted max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-border bg-background hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brand-accent text-brand-accent" />
                  ))}
                </div>
                <p className="text-brand-muted mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-brand-primary">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-brand-muted">
                    {testimonial.role}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;