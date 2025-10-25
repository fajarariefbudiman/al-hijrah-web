import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RoomCard from "../components/RoomCard";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Search, SlidersHorizontal } from "lucide-react";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import roomSingle from "@/assets/room-single.jpg";

const Rooms = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedPrice, setSelectedPrice] = useState("all");

  const allRooms = [
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
    {
      id: "4",
      name: "Premium Double Room",
      image: roomDeluxe,
      price: 249,
      capacity: 2,
      size: 40,
      rating: 4.6,
    },
    {
      id: "5",
      name: "Presidential Suite",
      image: roomSuite,
      price: 799,
      capacity: 6,
      size: 120,
      rating: 5.0,
    },
    {
      id: "6",
      name: "Standard Twin Room",
      image: roomSingle,
      price: 179,
      capacity: 2,
      size: 35,
      rating: 4.5,
    },
  ];

  const filteredRooms = allRooms.filter((room) => {
    const matchesSearch = room.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = selectedType === "all" || 
      (selectedType === "single" && room.capacity === 1) ||
      (selectedType === "double" && room.capacity === 2 && !room.name.toLowerCase().includes("suite")) ||
      (selectedType === "suite" && room.name.toLowerCase().includes("suite"));
    
    const matchesPrice = selectedPrice === "all" ||
      (selectedPrice === "under200" && room.price < 200) ||
      (selectedPrice === "200-400" && room.price >= 200 && room.price <= 400) ||
      (selectedPrice === "above400" && room.price > 400);

    return matchesSearch && matchesType && matchesPrice;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4 animate-fade-in">
            Our Rooms & Suites
          </h1>
          <p className="text-lg text-muted-foreground animate-slide-up">
            Find your perfect accommodation from our collection of premium rooms
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search rooms..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12"
            />
          </div>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white w-full md:w-auto">
            <SlidersHorizontal className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>

        <div className="flex gap-2 mt-4 flex-wrap">
          <Button 
            variant={selectedType === "all" ? "default" : "outline"} 
            size="sm" 
            className={selectedType === "all" ? "rounded-full bg-sky-blue hover:bg-sky-blue/90" : "rounded-full"}
            onClick={() => setSelectedType("all")}
          >
            All Rooms
          </Button>
          <Button 
            variant={selectedType === "single" ? "default" : "outline"} 
            size="sm" 
            className={selectedType === "single" ? "rounded-full bg-sky-blue hover:bg-sky-blue/90" : "rounded-full"}
            onClick={() => setSelectedType("single")}
          >
            Single
          </Button>
          <Button 
            variant={selectedType === "double" ? "default" : "outline"} 
            size="sm" 
            className={selectedType === "double" ? "rounded-full bg-sky-blue hover:bg-sky-blue/90" : "rounded-full"}
            onClick={() => setSelectedType("double")}
          >
            Double
          </Button>
          <Button 
            variant={selectedType === "suite" ? "default" : "outline"} 
            size="sm" 
            className={selectedType === "suite" ? "rounded-full bg-sky-blue hover:bg-sky-blue/90" : "rounded-full"}
            onClick={() => setSelectedType("suite")}
          >
            Suite
          </Button>
          <Button 
            variant={selectedPrice === "under200" ? "default" : "outline"} 
            size="sm" 
            className={selectedPrice === "under200" ? "rounded-full bg-sky-blue hover:bg-sky-blue/90" : "rounded-full"}
            onClick={() => setSelectedPrice("under200")}
          >
            Under $200
          </Button>
          <Button 
            variant={selectedPrice === "200-400" ? "default" : "outline"} 
            size="sm" 
            className={selectedPrice === "200-400" ? "rounded-full bg-sky-blue hover:bg-sky-blue/90" : "rounded-full"}
            onClick={() => setSelectedPrice("200-400")}
          >
            $200 - $400
          </Button>
          <Button 
            variant={selectedPrice === "above400" ? "default" : "outline"} 
            size="sm" 
            className={selectedPrice === "above400" ? "rounded-full bg-sky-blue hover:bg-sky-blue/90" : "rounded-full"}
            onClick={() => setSelectedPrice("above400")}
          >
            Above $400
          </Button>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing <span className="font-semibold text-secondary">{filteredRooms.length}</span> rooms
          </p>
        </div>

        {filteredRooms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRooms.map((room) => (
              <RoomCard key={room.id} {...room} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">No rooms found matching your criteria.</p>
            <Button 
              onClick={() => {
                setSearchTerm("");
                setSelectedType("all");
                setSelectedPrice("all");
              }}
              className="mt-4 bg-sky-blue hover:bg-sky-blue/90 text-white"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default Rooms;
