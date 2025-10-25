import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Card } from "../components/ui/card";
import { Calendar, Users, CreditCard } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import roomSingle from "@/assets/room-single.jpg";

const Booking = () => {
  const [searchParams] = useSearchParams();
  const roomId = searchParams.get("room") || "1";
  const navigate = useNavigate();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    guests: "1",
    fullName: "",
    email: "",
    phone: "",
    specialRequests: "",
    paymentMethod: "credit-card",
  });

  const roomsData = {
    "1": { name: "Deluxe King Room", image: roomDeluxe, price: 299 },
    "2": { name: "Executive Suite", image: roomSuite, price: 499 },
    "3": { name: "Single Comfort Room", image: roomSingle, price: 149 },
    "4": { name: "Premium Double Room", image: roomDeluxe, price: 249 },
    "5": { name: "Presidential Suite", image: roomSuite, price: 799 },
    "6": { name: "Standard Twin Room", image: roomSingle, price: 179 },
  };

  const room = roomsData[roomId as keyof typeof roomsData];

  const calculateNights = () => {
    if (!formData.checkIn || !formData.checkOut) return 0;
    const start = new Date(formData.checkIn);
    const end = new Date(formData.checkOut);
    const diff = end.getTime() - start.getTime();
    return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
  };

  const nights = calculateNights();
  const subtotal = room.price * nights;
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.checkIn || !formData.checkOut) {
      toast({
        title: "Error",
        description: "Please select check-in and check-out dates",
        variant: "destructive",
      });
      return;
    }

    if (new Date(formData.checkIn) >= new Date(formData.checkOut)) {
      toast({
        title: "Error",
        description: "Check-out date must be after check-in date",
        variant: "destructive",
      });
      return;
    }

    if (!formData.fullName || !formData.email || !formData.phone) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    navigate(`/payment?room=${roomId}&total=${total.toFixed(2)}&nights=${nights}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section className="bg-gradient-hero py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-navy-blue mb-2">Complete Your Booking</h1>
          <p className="text-muted-foreground">Just a few more steps to confirm your reservation</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Dates & Guests */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold text-navy-blue mb-4 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-sky-blue" />
                  Booking Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="checkIn">Check-in Date *</Label>
                    <Input
                      id="checkIn"
                      type="date"
                      value={formData.checkIn}
                      onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                      className="mt-1"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div>
                    <Label htmlFor="checkOut">Check-out Date *</Label>
                    <Input
                      id="checkOut"
                      type="date"
                      value={formData.checkOut}
                      onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                      className="mt-1"
                      min={formData.checkIn || new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div>
                    <Label htmlFor="guests">Number of Guests *</Label>
                    <Input
                      id="guests"
                      type="number"
                      min="1"
                      max="10"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="mt-1"
                    />
                  </div>
                </div>
              </Card>

              {/* Guest Information */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold text-navy-blue mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5 text-sky-blue" />
                  Guest Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="mt-1"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="specialRequests">Special Requests (Optional)</Label>
                    <Textarea
                      id="specialRequests"
                      placeholder="Any special requests or preferences?"
                      value={formData.specialRequests}
                      onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                      className="mt-1"
                      rows={3}
                    />
                  </div>
                </div>
              </Card>

              {/* Payment Method */}
              <Card className="p-6">
                <h2 className="text-xl font-semibold text-navy-blue mb-4 flex items-center gap-2">
                  <CreditCard className="h-5 w-5 text-sky-blue" />
                  Payment Method
                </h2>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="credit-card"
                      checked={formData.paymentMethod === "credit-card"}
                      onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                      className="text-sky-blue"
                    />
                    <span className="font-medium">Credit / Debit Card</span>
                  </label>
                  <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="bank-transfer"
                      checked={formData.paymentMethod === "bank-transfer"}
                      onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                      className="text-sky-blue"
                    />
                    <span className="font-medium">Bank Transfer</span>
                  </label>
                  <label className="flex items-center gap-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="e-wallet"
                      checked={formData.paymentMethod === "e-wallet"}
                      onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                      className="text-sky-blue"
                    />
                    <span className="font-medium">E-Wallet</span>
                  </label>
                </div>
              </Card>

              <Button type="submit" className="w-full bg-sky-blue hover:bg-sky-blue/90 text-white h-12 text-lg">
                Proceed to Payment
              </Button>
            </form>
          </div>

          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24 shadow-hover">
              <h2 className="text-xl font-semibold text-navy-blue mb-4">Booking Summary</h2>
              
              <div className="mb-4">
                <img src={room.image} alt={room.name} className="w-full h-40 object-cover rounded-lg mb-3" />
                <h3 className="font-semibold text-lg">{room.name}</h3>
              </div>

              <div className="space-y-3 border-t pt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Check-in</span>
                  <span className="font-medium">{formData.checkIn || "Not selected"}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Check-out</span>
                  <span className="font-medium">{formData.checkOut || "Not selected"}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Guests</span>
                  <span className="font-medium">{formData.guests}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Nights</span>
                  <span className="font-medium">{nights}</span>
                </div>
              </div>

              <div className="space-y-2 border-t mt-4 pt-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Tax (10%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-navy-blue border-t pt-2">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
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

export default Booking;
