import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import clientEmeka from "@/assets/client-emeka.jpg";
import clientGrace from "@/assets/client-grace.jpg";
import clientMichael from "@/assets/client-michael.jpg";

const testimonials = [
  {
    name: "Chief Emeka Okafor",
    role: "Business Owner",
    location: "Uyo Central",
    rating: 5,
    text: "ARET Environmental Services has transformed how we handle waste in our commercial complex. Their professionalism and reliability are unmatched in Akwa Ibom State.",
    image: clientEmeka
  },
  {
    name: "Mrs. Grace Udoh", 
    role: "Residential Client",
    location: "Ewet Housing Estate",
    rating: 5,
    text: "Finally, a waste management company that keeps their promises! Regular pickups, fair pricing, and excellent customer service. Highly recommend ARET.",
    image: clientGrace
  },
  {
    name: "Engr. Michael Bassey",
    role: "Factory Manager", 
    location: "Uyo Industrial Layout",
    rating: 5,
    text: "ARET handles our industrial waste with such expertise and care for environmental compliance. Their team is knowledgeable and always professional.",
    image: clientMichael
  }
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
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/20">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
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