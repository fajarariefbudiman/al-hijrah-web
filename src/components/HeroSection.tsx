import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroBike1 from "../assets/hero-bike-1.jpg";
import heroBike2 from "../assets/hero-bike-2.jpg";
import heroBike3 from "../assets/hero-bike-3.jpg";

const slides = [
  {
    image: heroBike1,
    title: "Find Your Dream Motorcycle",
    subtitle: "Discover the latest collection with top performance",
  },
  {
    image: heroBike2,
    title: "Unleash The Power",
    subtitle: "Experience ultimate performance and style",
  },
  {
    image: heroBike3,
    title: "Ride With Confidence",
    subtitle: "Premium quality meets exceptional design",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl animate-in fade-in duration-700">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
            {slides[currentSlide].subtitle}
          </p>
          <Link to="/products">
            <Button size="lg" className="text-lg px-8 py-6">
              View Products
            </Button>
          </Link>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-card/50 hover:bg-card p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-8 w-8 text-foreground" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-card/50 hover:bg-card p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-8 w-8 text-foreground" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-primary w-8"
                : "bg-muted-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
