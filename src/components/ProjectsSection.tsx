
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Modern Elegance Residence",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 2,
    title: "Harrington Office Space",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80"
  },
  {
    id: 3,
    title: "The Luxe Hotel Suite",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 4,
    title: "Crestwood Apartment",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 5,
    title: "Riverfront Restaurant",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1173&q=80"
  },
  {
    id: 6,
    title: "Tranquil Spa Retreat",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
  }
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { ref: titleRef, inView: titleInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <section id="projects" ref={sectionRef} className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className={cn(
            "text-center max-w-2xl mx-auto mb-16 transition-all duration-700",
            titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-4">Our Projects</h2>
          <p className="text-gray-700">
            Explore our portfolio of exceptional interior design projects across residential, commercial, and hospitality spaces.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const { ref, inView } = useInView({
              threshold: 0.2,
              triggerOnce: true,
              delay: 100 * index,
            });
            
            return (
              <div 
                key={project.id}
                ref={ref}
                className={cn(
                  "group relative overflow-hidden rounded-lg transition-all duration-700",
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
                )}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-sm text-manterior-beige font-medium">{project.category}</span>
                  <h3 className="text-xl font-playfair font-bold">{project.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="inline-block px-8 py-3 bg-manterior-beige text-manterior-dark rounded hover:bg-manterior-gold transition-all"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
