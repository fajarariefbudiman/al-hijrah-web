import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { Card } from "../components/ui/card";
import { Calendar, MapPin, Users, Tag } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import bus1 from "../assets/mercedez.png";
import bus2 from "../assets/volvo.png";
import bus3 from "../assets/more.jpg";

const BookingBus = () => {
  const [searchParams] = useSearchParams();
  const busId = searchParams.get("bus") || "1";
  const navigate = useNavigate();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    travelDate: "",
    departureTime: "",
    fullName: "",
    email: "",
    phone: "",
    notes: "",
    discountCode: "",
  });

  // Dummy data bus
  const busData = {
    "1": { name: "Bus GreenLine", image: bus1, departure: "Tangerang", arrival: "Jakarta", price: 1500000, seatAvailable: 12 },
    "2": { name: "Bus Executive Sudirman", image: bus2, departure: "Jakarta Pusat", arrival: "Bandung", price: 2500000, seatAvailable: 0 },
    "3": { name: "Bus Grand Boulevard", image: bus3, departure: "Bekasi", arrival: "Semarang", price: 3500000, seatAvailable: 8 },
  };

  const bus = busData[busId as keyof typeof busData];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.travelDate || !formData.fullName || !formData.email || !formData.phone) {
      toast({
        title: "Error",
        description: "Lengkapi semua data perjalanan dan penumpang.",
        variant: "destructive",
      });
      return;
    }

    sessionStorage.setItem(
      "bookingData",
      JSON.stringify({
        ...formData,
        bus,
        total: bus.price,
      })
    );

    navigate(`/payment?bus=${busId}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar theme="dark" />

      {/* Header */}
      <section className="bg-gradient-to-r from-red-700 to-black py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-yellow-400 mb-2 animate-fade-in">Booking Bus</h1>
          <p className="text-white/80 animate-slide-up">Isi data perjalanan dan penumpang untuk memesan tiket bus</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Booking */}
          <div className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Detail Perjalanan */}
              <Card className="p-6 bg-gray-900 border-red-700 border">
                <h2 className="text-xl font-semibold text-red-500 mb-4 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-yellow-400" />
                  Detail Perjalanan
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="travelDate">Tanggal Perjalanan *</Label>
                    <Input
                      id="travelDate"
                      type="date"
                      value={formData.travelDate}
                      onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                      className="mt-1 bg-black border-red-500 text-white"
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>
                  <div>
                    <Label htmlFor="departureTime">Jam Keberangkatan *</Label>
                    <Input
                      id="departureTime"
                      type="time"
                      value={formData.departureTime}
                      onChange={(e) => setFormData({ ...formData, departureTime: e.target.value })}
                      className="mt-1 bg-black border-red-500 text-white"
                    />
                  </div>
                </div>
              </Card>

              {/* Data Penumpang */}
              <Card className="p-6 bg-gray-900 border-red-700 border">
                <h2 className="text-xl font-semibold text-red-500 mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5 text-yellow-400" />
                  Data Penumpang
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <Label htmlFor="fullName">Nama Lengkap *</Label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Masukkan nama lengkap"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="mt-1 bg-black border-red-500 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="emailkamu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-1 bg-black border-red-500 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Nomor Telepon *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+62 812-xxxx-xxxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="mt-1 bg-black border-red-500 text-white"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="notes">Catatan Tambahan</Label>
                    <Textarea
                      id="notes"
                      placeholder="Tambahkan catatan jika ada..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="mt-1 bg-black border-red-500 text-white"
                      rows={3}
                    />
                  </div>
                </div>
              </Card>

              {/* Kode Promo */}
              <Card className="p-6 bg-gray-900 border-red-700 border">
                <h2 className="text-xl font-semibold text-red-500 mb-4 flex items-center gap-2">
                  <Tag className="h-5 w-5 text-yellow-400" />
                  Kode Promo / Diskon
                </h2>
                <div className="flex gap-2">
                  <Input
                    placeholder="Masukkan kode promo"
                    value={formData.discountCode}
                    onChange={(e) => setFormData({ ...formData, discountCode: e.target.value })}
                    className="bg-black border-red-500 text-white"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                    onClick={() => {
                      if (formData.discountCode.toUpperCase() === "PROMO10") {
                        toast({
                          title: "Diskon berhasil diterapkan!",
                          description: "Anda mendapatkan potongan 10%.",
                        });
                      } else {
                        toast({
                          title: "Kode tidak valid",
                          description: "Gunakan kode promo yang benar.",
                          variant: "destructive",
                        });
                      }
                    }}
                  >
                    Terapkan
                  </Button>
                </div>
              </Card>

              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white h-12 text-lg"
              >
                Lanjut ke Pembayaran
              </Button>
            </form>
          </div>

          {/* Ringkasan Booking */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24 bg-gray-900 border-red-700 border">
              <h2 className="text-xl font-semibold text-red-500 mb-4">Ringkasan Tiket</h2>

              <div className="mb-4">
                <img
                  src={bus.image}
                  alt={bus.name}
                  className="w-full h-40 object-cover rounded-lg mb-3"
                />
                <h3 className="font-semibold text-lg">{bus.name}</h3>
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <MapPin className="h-4 w-4" />
                  <span>
                    {bus.departure} → {bus.arrival}
                  </span>
                </div>
              </div>

              <div className="space-y-2 border-t pt-4 text-sm text-white/80">
                <div className="flex justify-between">
                  <span>Tanggal</span>
                  <span>{formData.travelDate || "-"}</span>
                </div>
                <div className="flex justify-between">
                  <span>Jam</span>
                  <span>{formData.departureTime || "-"}</span>
                </div>
                <div className="flex justify-between">
                  <span>Kursi Tersedia</span>
                  <span>{bus.seatAvailable}</span>
                </div>
                <div className="flex justify-between font-bold text-yellow-400 mt-2">
                  <span>Total Harga</span>
                  <span>Rp{bus.price.toLocaleString()}</span>
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

export default BookingBus;
