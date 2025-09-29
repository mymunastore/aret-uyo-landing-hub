import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mr. George Abiam",
    role: "All Residential Clients",
    location: "Uyo",
    rating: 5,
    text: "I'm delighted with the service provided by ARET Environmental Services. They picked up and disposed of refuse from my house last week in a timely and professional manner. Everything was done neatly and without any inconvenience. Great team, reliable service—highly recommended!"
  },
  {
    name: "Mr. Enyeokpon Inyang", 
    role: "All Residential Clients",
    location: "Uyo",
    rating: 5,
    text: "Your service is excellent."
  },
  {
    name: "Bassey Emenyi",
    role: "All Residential Clients", 
    location: "Uyo",
    rating: 5,
    text: "There have been no concerns regarding the pick-up schedule on our end. I must say your services are excellent. It is also worth noting that we received our monthly allocated garbage bags today (July/August). Great job, everyone, on the value-added service."
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            Don't just take our word for it - hear from satisfied customers across Uyo 
            about their experience with ARET Environmental Services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-500 hover:scale-105 border-0 bg-card animate-fade-in-up relative overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity">
                <Quote size={40} className="text-primary" />
              </div>

              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-accent text-accent" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="text-left">
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-primary">
                    {testimonial.location}
                  </p>
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