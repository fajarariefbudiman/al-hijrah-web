import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card } from "../components/ui/card";
import { Star, Users, Maximize, Wifi, Coffee, Tv, Wind, CheckCircle2 } from "lucide-react";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import roomSingle from "@/assets/room-single.jpg";

const RoomDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const roomsData = {
    "1": {
      name: "Deluxe King Room",
      image: roomDeluxe,
      price: 299,
      capacity: 2,
      size: 45,
      rating: 4.8,
      description: "Experience luxury in our spacious Deluxe King Room. Perfect for couples seeking comfort and elegance.",
      facilities: ["Free WiFi", "King Size Bed", "Smart TV", "Air Conditioning", "Mini Bar", "Coffee Maker", "Safe Box", "Bathroom Amenities"],
    },
    "2": {
      name: "Executive Suite",
      image: roomSuite,
      price: 499,
      capacity: 4,
      size: 75,
      rating: 4.9,
      description: "Our Executive Suite offers the ultimate in luxury with separate living area and premium amenities.",
      facilities: ["Free WiFi", "King Size Bed", "Smart TV", "Air Conditioning", "Mini Bar", "Coffee Maker", "Safe Box", "Bathroom Amenities", "Living Room", "Jacuzzi"],
    },
    "3": {
      name: "Single Comfort Room",
      image: roomSingle,
      price: 149,
      capacity: 1,
      size: 30,
      rating: 4.7,
      description: "Ideal for solo travelers, our Single Comfort Room provides all essentials for a pleasant stay.",
      facilities: ["Free WiFi", "Single Bed", "Smart TV", "Air Conditioning", "Coffee Maker", "Bathroom Amenities"],
    },
    "4": {
      name: "Premium Double Room",
      image: roomDeluxe,
      price: 249,
      capacity: 2,
      size: 40,
      rating: 4.6,
      description: "Our Premium Double Room combines comfort and style for a memorable stay.",
      facilities: ["Free WiFi", "Double Bed", "Smart TV", "Air Conditioning", "Mini Bar", "Coffee Maker", "Bathroom Amenities"],
    },
    "5": {
      name: "Presidential Suite",
      image: roomSuite,
      price: 799,
      capacity: 6,
      size: 120,
      rating: 5.0,
      description: "The pinnacle of luxury. Our Presidential Suite features panoramic views and world-class amenities.",
      facilities: ["Free WiFi", "King Size Bed", "Smart TV", "Air Conditioning", "Mini Bar", "Coffee Maker", "Safe Box", "Bathroom Amenities", "Living Room", "Jacuzzi", "Balcony", "Butler Service"],
    },
    "6": {
      name: "Standard Twin Room",
      image: roomSingle,
      price: 179,
      capacity: 2,
      size: 35,
      rating: 4.5,
      description: "Perfect for friends or colleagues, our Twin Room offers twin beds and modern amenities.",
      facilities: ["Free WiFi", "Twin Beds", "Smart TV", "Air Conditioning", "Coffee Maker", "Bathroom Amenities"],
    },
  };

  const room = roomsData[id as keyof typeof roomsData];

  if (!room) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Room Not Found</h1>
            <Button onClick={() => navigate("/rooms")}>Back to Rooms</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const reviews = [
    { name: "Sarah Johnson", rating: 5, comment: "Absolutely wonderful stay! The room was spotless and the service was exceptional.", date: "March 2025" },
    { name: "Michael Chen", rating: 5, comment: "Best hotel experience I've had. Highly recommend this room!", date: "February 2025" },
    { name: "Emma Williams", rating: 4, comment: "Great value for money. Would definitely stay again.", date: "February 2025" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Room Gallery */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <img src={room.image} alt={room.name} className="w-full h-[400px] object-cover rounded-lg shadow-soft" />
          <div className="grid grid-cols-2 gap-4">
            <img src={room.image} alt={room.name} className="w-full h-[192px] object-cover rounded-lg shadow-soft" />
            <img src={room.image} alt={room.name} className="w-full h-[192px] object-cover rounded-lg shadow-soft" />
            <img src={room.image} alt={room.name} className="w-full h-[192px] object-cover rounded-lg shadow-soft" />
            <img src={room.image} alt={room.name} className="w-full h-[192px] object-cover rounded-lg shadow-soft" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Room Details */}
          <div className="lg:col-span-2">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-navy-blue mb-2">{room.name}</h1>
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>{room.capacity} Guests</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Maximize className="h-4 w-4" />
                    <span>{room.size}m²</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-sky-blue text-sky-blue" />
                    <span>{room.rating} Rating</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground mb-6">{room.description}</p>

            {/* Facilities */}
            <Card className="p-6 mb-6">
              <h2 className="text-xl font-semibold text-navy-blue mb-4">Room Facilities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {room.facilities.map((facility, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-sky-blue" />
                    <span className="text-sm">{facility}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Reviews */}
            <div>
              <h2 className="text-xl font-semibold text-navy-blue mb-4">Guest Reviews</h2>
              <div className="space-y-4">
                {reviews.map((review, index) => (
                  <Card key={index} className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-semibold">{review.name}</p>
                        <p className="text-sm text-muted-foreground">{review.date}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-sky-blue text-sky-blue" />
                        <span className="font-semibold">{review.rating}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{review.comment}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24 shadow-hover">
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-bold text-navy-blue">${room.price}</span>
                  <span className="text-muted-foreground">/ night</span>
                </div>
                <Badge className="bg-sky-blue/10 text-sky-blue hover:bg-sky-blue/20">Available</Badge>
              </div>

              <Button 
                className="w-full mb-4 bg-sky-blue hover:bg-sky-blue/90 text-white"
                onClick={() => navigate(`/booking?room=${id}`)}
              >
                Book Now
              </Button>

              <div className="border-t pt-4">
                <h3 className="font-semibold mb-2">Quick Info</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Check-in</span>
                    <span className="text-secondary font-medium">2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Check-out</span>
                    <span className="text-secondary font-medium">12:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cancellation</span>
                    <span className="text-secondary font-medium">Free 24h</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RoomDetail;
