import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RoomCard from "../components/RoomCard";
import { Search, Calendar, Users, Star, Shield, Clock } from "lucide-react";
import heroImage from "@/assets/hero-hotel.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import roomSingle from "@/assets/room-single.jpg";

const Index = () => {
  const featuredRooms = [
    {
      id: "1",
      name: "Deluxe King Room",
      image: roomDeluxe,
      price: 299,
      capacity: 2,
      size: 45,
      rating: 4.8,
    },
    {
      id: "2",
      name: "Executive Suite",
      image: roomSuite,
      price: 499,
      capacity: 4,
      size: 75,
      rating: 4.9,
    },
    {
      id: "3",
      name: "Single Comfort Room",
      image: roomSingle,
      price: 149,
      capacity: 1,
      size: 30,
      rating: 4.7,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          alt="Luxury hotel lobby"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-secondary/40" />

        <div className="relative z-10 container mx-auto px-4 text-center text-white animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to Luxe Stay
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Experience world-class hospitality with our premium hotel management system
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/rooms">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-hover text-lg px-8">
                Book Now
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-secondary text-lg px-8">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Search Bar */}
      <section className="container mx-auto px-4 -mt-16 relative z-20">
        <Card className="p-6 shadow-hover bg-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                Check-in
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary outline-none transition-smooth"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                Check-out
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary outline-none transition-smooth"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-secondary flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                Guests
              </label>
              <select className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary outline-none transition-smooth">
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4+ Guests</option>
              </select>
            </div>
            <div className="flex items-end">
              <Link to="/rooms" className="w-full">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white h-[42px]">
                  <Search className="h-4 w-4 mr-2" />
                  Search Rooms
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl font-bold text-secondary mb-4">Why Choose Luxe Stay?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience excellence in hospitality with our modern facilities and exceptional service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-8 text-center hover:shadow-hover transition-smooth animate-scale-in">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-secondary mb-3">Premium Quality</h3>
            <p className="text-muted-foreground">
              Top-rated rooms and suites with modern amenities and elegant design
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-hover transition-smooth animate-scale-in" style={{ animationDelay: "0.1s" }}>
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-secondary mb-3">Secure Booking</h3>
            <p className="text-muted-foreground">
              Safe and encrypted payment system for your peace of mind
            </p>
          </Card>

          <Card className="p-8 text-center hover:shadow-hover transition-smooth animate-scale-in" style={{ animationDelay: "0.2s" }}>
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-secondary mb-3">24/7 Support</h3>
            <p className="text-muted-foreground">
              Round-the-clock customer service to assist you anytime
            </p>
          </Card>
        </div>
      </section>

      {/* Featured Rooms Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-4">Featured Rooms</h2>
            <p className="text-lg text-muted-foreground">
              Discover our most popular accommodations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredRooms.map((room) => (
              <RoomCard key={room.id} {...room} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/rooms">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                View All Rooms
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary mb-4">Guest Reviews</h2>
          <p className="text-lg text-muted-foreground">
            What our guests say about their experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Johnson",
              rating: 5,
              comment: "Absolutely amazing experience! The room was spotless and the staff was incredibly helpful.",
            },
            {
              name: "Michael Chen",
              rating: 5,
              comment: "Best hotel I've stayed at. Modern facilities and excellent location. Highly recommended!",
            },
            {
              name: "Emily Davis",
              rating: 5,
              comment: "The booking process was seamless and the check-in was quick. Will definitely return!",
            },
          ].map((review, index) => (
            <Card key={index} className="p-6 hover:shadow-hover transition-smooth">
              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">"{review.comment}"</p>
              <p className="font-semibold text-secondary">{review.name}</p>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
