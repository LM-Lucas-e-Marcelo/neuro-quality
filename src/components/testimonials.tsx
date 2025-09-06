import { Card, CardContent } from "@/components/ui/card";
import { TESTIMONIALS } from "@/data/testimonials";
import { Star } from "lucide-react";
import { Reveal } from "./Reveal";


export const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">Depoimentos</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 mt-4">
            O que nossos pacientes dizem
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <Reveal delay={index * 50}>
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
