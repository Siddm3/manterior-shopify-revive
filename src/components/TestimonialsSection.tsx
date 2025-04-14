
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Homeowner",
    content: "Manterior transformed our house into our dream home. Their attention to detail and ability to understand our vision was truly impressive. The team was professional, responsive, and a joy to work with throughout the entire process.",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    id: 2,
    name: "James Wilson",
    position: "CEO, Wilson Enterprises",
    content: "Our office redesign by Manterior has completely changed how our team works. The space is not only beautiful but incredibly functional. Our staff productivity has improved, and clients are always impressed when they visit.",
    avatar: "https://randomuser.me/api/portraits/men/42.jpg"
  },
  {
    id: 3,
    name: "Emma Thompson",
    position: "Restaurant Owner",
    content: "The design Manterior created for our restaurant perfectly captured our brand essence. They balanced aesthetics with practicality, creating a space that delights our customers while being efficient for our staff.",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    id: 4,
    name: "Michael Chen",
    position: "Property Developer",
    content: "We've worked with Manterior on multiple projects, and they consistently deliver exceptional results. Their designs have helped our properties stand out in a competitive market and achieve premium selling prices.",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { ref: titleRef, inView: titleInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setCurrentIndex(prev => (prev + 1) % testimonials.length);
        setTimeout(() => setIsAnimating(false), 500);
      }
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isAnimating]);

  const handleDotClick = (index: number) => {
    if (index !== currentIndex && !isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 lg:py-32 bg-manterior-dark text-white">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className={cn(
            "text-center max-w-2xl mx-auto mb-16 transition-all duration-700",
            titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">Client Testimonials</h2>
          <p className="text-white/80">
            Don't just take our word for it. Here's what our clients have to say about working with Manterior.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="relative overflow-hidden min-h-[300px]">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={cn(
                  "absolute w-full transition-all duration-500",
                  index === currentIndex ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
                )}
              >
                <div className="bg-manterior-dark/50 backdrop-blur-sm p-8 rounded-lg border border-white/10">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-lg italic mb-6">"{testimonial.content}"</p>
                      <div>
                        <h4 className="font-playfair font-bold text-xl">{testimonial.name}</h4>
                        <p className="text-manterior-beige">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === currentIndex ? "bg-manterior-gold w-8" : "bg-white/40 hover:bg-white/60"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
