
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        const offset = scrollY * 0.5; // Adjust the parallax effect speed
        parallaxRef.current.style.transform = `translateY(${offset}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="parallax-section h-screen relative overflow-hidden">
      <div
        ref={parallaxRef}
        className="parallax-bg"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')",
        }}
      ></div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-start relative z-10">
        <div className="max-w-xl animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
            Transforming Spaces into Experiences
          </h1>
          <p className="text-lg text-white/90 mb-8">
            At Manterior, we blend aesthetic vision with functional design to create interior spaces that inspire and elevate your lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-manterior-gold hover:bg-manterior-beige text-manterior-dark">
              Explore Our Work
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Book a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
