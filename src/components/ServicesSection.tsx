
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Residential Design",
    description: "Transform your home into a personalized sanctuary that reflects your style and meets your functional needs.",
    icon: "🏠",
    image: "https://images.unsplash.com/photo-1616137466211-f939a420be84?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 2,
    title: "Commercial Interiors",
    description: "Create productive and inspiring workspaces that embody your brand identity and company culture.",
    icon: "🏢",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 3,
    title: "Hospitality Design",
    description: "Develop immersive experiences for hotels, restaurants, and leisure spaces that delight guests.",
    icon: "🍽️",
    image: "https://images.unsplash.com/photo-1606402179428-a57976d71fa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1174&q=80"
  },
  {
    id: 4,
    title: "Renovation & Remodeling",
    description: "Breathe new life into existing spaces with thoughtful renovation and remodeling solutions.",
    icon: "🔨",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80"
  },
  {
    id: 5,
    title: "Space Planning",
    description: "Optimize your layout for better flow, functionality, and spatial harmony in any environment.",
    icon: "📐",
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80"
  },
  {
    id: 6,
    title: "Custom Furniture Design",
    description: "Commission bespoke furniture pieces tailored to your specific needs and aesthetic preferences.",
    icon: "🪑",
    image: "https://images.unsplash.com/photo-1551298370-9d3d53740c72?ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80"
  }
];

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const { ref: titleRef, inView: titleInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        setActiveIndex(prev => (prev + 1) % services.length);
        setTimeout(() => setIsAnimating(false), 500);
      }
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isAnimating]);

  return (
    <section id="services" ref={sectionRef} className="py-20 lg:py-32 bg-manterior-offwhite relative">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className={cn(
          "text-center max-w-2xl mx-auto mb-16 transition-all duration-700",
          titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">Our Services</h2>
          <p className="text-gray-700">
            We offer a comprehensive range of interior design services to meet any need, from concept development to execution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const { ref, inView } = useInView({
              threshold: 0.2,
              triggerOnce: true,
              delay: 100 * index,
            });
            
            return (
              <div 
                key={service.id}
                ref={ref}
                className={cn(
                  "service-card h-80 transition-all duration-700",
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                )}
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="service-card-content text-white">
                  <span className="text-4xl mb-2 block">{service.icon}</span>
                  <h3 className="text-xl font-playfair font-bold mb-2">{service.title}</h3>
                  <p className="text-sm text-white/90">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-block px-8 py-3 bg-manterior-dark text-white rounded hover:bg-opacity-90 transition-all"
          >
            Let's Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
