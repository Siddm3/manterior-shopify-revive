
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';

const AboutSection = () => {
  const { ref: sectionRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div 
          ref={sectionRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className={cn(
            "transition-all duration-1000 delay-300",
            inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          )}>
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold mb-6">
              Crafting Beautiful Spaces Since 2010
            </h2>
            <p className="text-gray-700 mb-6">
              Manterior is a premier interior design studio dedicated to transforming ordinary spaces into extraordinary environments. With a passion for design excellence and an unwavering commitment to client satisfaction, we've established ourselves as industry leaders.
            </p>
            <p className="text-gray-700 mb-8">
              Our approach combines innovative design thinking with meticulous attention to detail. We believe that great design should not only look beautiful but also enhance the way you live, work, and interact with your space.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-4xl font-playfair font-bold text-manterior-gold mb-2">200+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-4xl font-playfair font-bold text-manterior-gold mb-2">15+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div>
                <h3 className="text-4xl font-playfair font-bold text-manterior-gold mb-2">50+</h3>
                <p className="text-gray-600">Design Awards</p>
              </div>
              <div>
                <h3 className="text-4xl font-playfair font-bold text-manterior-gold mb-2">98%</h3>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
            </div>
          </div>
          
          <div className={cn(
            "relative h-[500px] transition-all duration-1000 delay-500",
            inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
          )}>
            <div className="absolute top-0 right-0 w-4/5 h-4/5 bg-manterior-beige rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" 
                alt="Interior design project" 
                className="w-full h-full object-cover rounded-lg shadow-lg transform -translate-x-8 -translate-y-8"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-3/5 h-3/5">
              <img 
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" 
                alt="Designer at work" 
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
