import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Filter, Search, Star, Clock, MapPin, TrendingUp, Zap, Shield, Award, ChevronRight, Sparkles } from "lucide-react";
import busSmall from "../assets/mercedez.png";
import busMedium from "../assets/volvo.png";
import busLarge from "../assets/more.jpg";
import SeatSelectionModal from "../components/SeatSelectionModal";

// =====================
// TYPES
// =====================
interface Bus {
  id: string;
  name: string;
  image: string;
  departure: string;
  arrival: string;
  time: string;
  seatAvailable: number;
  price: number;
  rating: number;
  discount: number;
  available: boolean;
}

const Buses: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedPrice, setSelectedPrice] = useState<string>("all");
  const [selectedBus, setSelectedBus] = useState<Bus | null>(null);

  const allBuses: Bus[] = [
    {
      id: "1",
      name: "Bus A",
      image: busSmall,
      departure: "Tangerang",
      arrival: "Jakarta",
      time: "08:00 WIB",
      seatAvailable: 12,
      price: 1500000,
      rating: 4.6,
      discount: 10,
      available: true,
    },
    {
      id: "2",
      name: "Bus B",
      image: busMedium,
      departure: "Jakarta Pusat",
      arrival: "Bandung",
      time: "09:30 WIB",
      seatAvailable: 0,
      price: 2500000,
      rating: 4.8,
      discount: 0,
      available: false,
    },
    {
      id: "3",
      name: "Bus C",
      image: busLarge,
      departure: "Bekasi",
      arrival: "Padang",
      time: "07:00 WIB",
      seatAvailable: 8,
      price: 3500000,
      rating: 4.9,
      discount: 15,
      available: true,
    },
    {
      id: "4",
      name: "Bus D",
      image: busMedium,
      departure: "Pondok Pinang",
      arrival: "Solok",
      time: "06:00 WIB",
      seatAvailable: 5,
      price: 2000000,
      rating: 4.5,
      discount: 0,
      available: true,
    },
  ];

  const filteredBuses = allBuses.filter((bus) => {
    const matchesSearch = bus.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = selectedPrice === "all" || (selectedPrice === "under2" && bus.price < 2000000) || (selectedPrice === "2-3" && bus.price >= 2000000 && bus.price <= 3000000) || (selectedPrice === "above3" && bus.price > 3000000);
    return matchesSearch && matchesPrice;
  });

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900 font-sans antialiased">
      <Navbar />

      {/* Hero Banner with Gradient */}
      <section className="relative bg-white py-8 md:py-12 border-b border-gray-200 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI0YzRjRGNiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-50"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 text-amber-500 animate-pulse" />
            <span className="text-xs md:text-sm text-amber-600 font-semibold uppercase tracking-wide">Temukan Bus Terbaik</span>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
            Cari & Pesan Bus <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-red-600">Impianmu</span>
          </h1>

          <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8 max-w-2xl">Ribuan pilihan bus premium dengan harga terbaik. Pesan sekarang dan nikmati perjalanan nyaman!</p>

          {/* Search Bar */}
          <div className="flex flex-col md:flex-row gap-3 max-w-4xl">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Cari bus berdasarkan nama atau rute..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 md:h-14 bg-white text-gray-900 border-2 border-gray-300 focus:border-amber-500 placeholder-gray-400 text-sm md:text-base rounded-xl shadow-md"
              />
            </div>
            <Button className="bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-white px-8 h-12 md:h-14 text-sm md:text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Search className="h-5 w-5 mr-2" />
              Cari Bus
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 md:py-8 flex-1">
        <div className="flex gap-6">
          {/* Desktop Sidebar Filter */}
          <aside className="hidden md:block w-72 flex-shrink-0">
            <div className="bg-white rounded-xl border border-gray-200 shadow-lg">
              <div className="p-5 border-b border-gray-200 flex items-center justify-between bg-gray-50">
                <div className="flex items-center gap-2">
                  <Filter className="h-5 w-5 text-amber-500" />
                  <h2 className="font-bold text-base text-gray-900">Filter Bus</h2>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedPrice("all");
                  }}
                  className="text-xs text-red-600 hover:text-red-700 hover:bg-red-50 h-auto p-2 transition-all duration-200 rounded-lg"
                >
                  Reset
                </Button>
              </div>

              <div className="p-5 space-y-6">
                {/* Price Filter */}
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-all duration-200">
                    <input
                      type="radio"
                      name="price"
                      checked={selectedPrice === "all"}
                      onChange={() => setSelectedPrice("all")}
                      className="w-4 h-4 accent-amber-500"
                    />
                    <span className="text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200">Semua Harga</span>
                  </label>

                  {[
                    { label: "Di bawah 2jt", value: "under2", color: "text-green-600" },
                    { label: "2-3jt/hari", value: "2-3", color: "text-blue-600" },
                    { label: "Di atas 3jt", value: "above3", color: "text-purple-600" },
                  ].map((item) => (
                    <label
                      key={item.value}
                      className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-all duration-200"
                    >
                      <input
                        type="radio"
                        name="price"
                        checked={selectedPrice === item.value}
                        onChange={() => setSelectedPrice(item.value)}
                        className="w-4 h-4 accent-amber-500"
                      />
                      <span className={`text-sm hover:text-gray-900 transition-colors duration-200 ${item.color}`}>{item.label}</span>
                    </label>
                  ))}
                </div>

                {/* Promo Banner */}
                <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                  <h4 className="text-sm font-bold text-gray-900 mb-1">Promo Spesial!</h4>
                  <p className="text-xs text-gray-700 leading-relaxed">Diskon hingga 25% untuk pemesanan hari ini</p>
                  <Button className="w-full mt-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold text-xs h-8">Lihat Promo</Button>
                </div>

                {/* Info Tips */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <p className="text-xs text-blue-700 leading-relaxed">
                    <strong className="text-blue-800">💡 Tips:</strong> Pesan lebih awal untuk mendapatkan harga terbaik dan pilihan kursi favorit!
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* Bus List */}
          <main className="flex-1 min-w-0">
            {/* Results Header */}
            <div className="mb-4 md:mb-6 bg-white p-4 md:p-5 rounded-xl border border-gray-200 shadow-md">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div>
                  <h2 className="font-bold text-base md:text-lg text-gray-900 mb-1">
                    <span className="text-amber-600">{filteredBuses.length}</span> Bus Tersedia
                  </h2>
                  <p className="text-xs text-gray-600">Pilih bus yang sesuai dengan kebutuhanmu</p>
                </div>

                {/* Mobile Filter Button */}
                <Button className="md:hidden bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-white px-4 h-10">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>

            {filteredBuses.length > 0 ? (
              <div className="space-y-4">
                {filteredBuses.map((bus, index) => (
                  <div
                    key={bus.id}
                    className="group bg-white border border-gray-200 rounded-xl hover:border-amber-400 hover:shadow-xl transition-all duration-300 overflow-hidden"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Discount Badge */}
                    {bus.discount > 0 && (
                      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white text-xs font-bold px-4 py-1.5 flex items-center gap-2">
                        <Zap className="h-3 w-3" />
                        DISKON {bus.discount}% - HEMAT Rp {((bus.price * bus.discount) / 100).toLocaleString("id-ID")}
                      </div>
                    )}

                    <div className="p-4 md:p-5">
                      {/* Mobile Layout */}
                      <div className="md:hidden space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="relative">
                            <img
                              src={bus.image}
                              alt={bus.name}
                              className="h-16 w-16 object-contain flex-shrink-0 rounded-lg bg-gray-100 p-2"
                            />
                            {bus.rating >= 4.5 && (
                              <div className="absolute -top-1 -right-1 bg-amber-500 rounded-full p-1">
                                <Award className="h-3 w-3 text-white" />
                              </div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-base text-gray-900 mb-1.5 truncate">{bus.name}</h3>
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="bg-gradient-to-r from-green-600 to-green-700 text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
                                <Star className="h-3 w-3 fill-current" />
                                {bus.rating}
                              </span>
                              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${bus.seatAvailable > 5 ? "bg-green-100 text-green-700" : bus.seatAvailable > 0 ? "bg-orange-100 text-orange-700" : "bg-red-100 text-red-700"}`}>
                                {bus.seatAvailable > 0 ? `${bus.seatAvailable} Kursi` : "Penuh"}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Route Info */}
                        <div className="flex items-center justify-between bg-gray-50 rounded-xl p-4 border border-gray-200">
                          <div className="text-center flex-1">
                            <p className="text-2xl font-bold text-gray-900 mb-1">{bus.time.split(" ")[0]}</p>
                            <p className="text-xs text-gray-600 flex items-center justify-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {bus.departure}
                            </p>
                          </div>
                          <div className="flex flex-col items-center px-3">
                            <Clock className="h-4 w-4 text-amber-500 mb-1" />
                            <div className="text-xs text-gray-600">~2j 30m</div>
                            <ChevronRight className="h-4 w-4 text-gray-400 mt-1" />
                          </div>
                          <div className="text-center flex-1">
                            <p className="text-2xl font-bold text-gray-900 mb-1">
                              {(() => {
                                const [hour] = bus.time.split(":");
                                const arrivalHour = (parseInt(hour) + 2) % 24;
                                return `${arrivalHour.toString().padStart(2, "0")}:30`;
                              })()}
                            </p>
                            <p className="text-xs text-gray-600 flex items-center justify-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {bus.arrival}
                            </p>
                          </div>
                        </div>

                        {/* Price & CTA */}
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs text-gray-500 mb-1">Mulai dari</p>
                            <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-red-600">Rp {(bus.price / 1000).toFixed(0)}rb</p>
                            {bus.discount > 0 && <p className="text-xs text-gray-500 line-through">Rp {(bus.price / (1 - bus.discount / 100) / 1000).toFixed(0)}rb</p>}
                          </div>
                          <Button
                            className="bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-white px-6 h-11 text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                            onClick={() => setSelectedBus(bus)}
                            disabled={!bus.available}
                          >
                            PILIH BUS
                          </Button>
                        </div>
                      </div>

                      {/* Desktop Layout */}
                      <div className="hidden md:block">
                        <div className="flex items-start gap-5">
                          <div className="relative">
                            <img
                              src={bus.image}
                              alt={bus.name}
                              className="h-20 w-20 object-contain rounded-xl bg-gray-100 p-2"
                            />
                            {bus.rating >= 4.5 && (
                              <div className="absolute -top-2 -right-2 bg-amber-500 rounded-full p-1.5 shadow-lg">
                                <Award className="h-4 w-4 text-white" />
                              </div>
                            )}
                          </div>

                          <div className="flex-1 grid grid-cols-12 gap-6 items-center">
                            <div className="col-span-3">
                              <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">{bus.name}</h3>
                              <p className="text-sm text-gray-600 mb-1 flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                {bus.departure} → {bus.arrival}
                              </p>
                              <p className="text-xs text-gray-500">{bus.seatAvailable} dari 30 kursi tersedia</p>
                            </div>

                            <div className="col-span-2 text-center">
                              <p className="text-3xl font-bold text-gray-900 mb-1">{bus.time.split(" ")[0]}</p>
                              <p className="text-xs text-gray-600">{bus.departure}</p>
                            </div>

                            <div className="col-span-2 text-center">
                              <Clock className="h-5 w-5 text-amber-500 mx-auto mb-1" />
                              <div className="text-sm text-gray-600 font-medium">~2j 30m</div>
                            </div>

                            <div className="col-span-2 text-center">
                              <p className="text-3xl font-bold text-gray-900 mb-1">
                                {(() => {
                                  const [hour] = bus.time.split(":");
                                  const arrivalHour = (parseInt(hour) + 2) % 24;
                                  return `${arrivalHour.toString().padStart(2, "0")}:30`;
                                })()}
                              </p>
                              <p className="text-xs text-gray-600">{bus.arrival}</p>
                            </div>

                            <div className="col-span-3 text-right">
                              <div className="flex items-center justify-end gap-2 mb-2">
                                <span className="bg-gradient-to-r from-green-600 to-green-700 text-white text-sm font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                                  <Star className="h-4 w-4 fill-current" />
                                  {bus.rating}
                                </span>
                                <span className={`text-sm font-bold px-3 py-1.5 rounded-full ${bus.seatAvailable > 5 ? "bg-green-100 text-green-700" : bus.seatAvailable > 0 ? "bg-orange-100 text-orange-700" : "bg-red-100 text-red-700"}`}>
                                  {bus.seatAvailable > 0 ? `${bus.seatAvailable} Seat` : "Penuh"}
                                </span>
                              </div>
                              <p className="text-xs text-gray-500 mb-1">Mulai dari</p>
                              <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-red-600">Rp {bus.price.toLocaleString("id-ID")}</p>
                              {bus.discount > 0 && <p className="text-sm text-gray-500 line-through">Rp {(bus.price / (1 - bus.discount / 100)).toLocaleString("id-ID")}</p>}
                            </div>
                          </div>
                        </div>

                        {/* Preview Images */}
                        <div className="flex mt-4 gap-2 overflow-x-auto pb-2">
                          {[1, 2, 3].map((i) => (
                            <img
                              key={i}
                              src={bus.image}
                              alt="preview"
                              className="h-16 w-24 object-cover rounded-lg border border-gray-200 hover:border-amber-400 transition-all cursor-pointer"
                            />
                          ))}
                          <div className="h-16 w-24 bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center rounded-lg text-sm text-gray-700 font-semibold border border-gray-200 hover:border-amber-400 transition-all cursor-pointer">
                            +5 Foto
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="border-t border-gray-200 px-4 md:px-5 py-3 flex items-center justify-between bg-gray-50">
                      <div className="flex items-center gap-4 flex-wrap">
                        <span className="flex items-center gap-1.5 text-xs text-green-600 font-medium">
                          <Shield className="h-4 w-4" />
                          Uang bisa dikembalikan
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-blue-600 font-medium">
                          <Zap className="h-4 w-4" />
                          Konfirmasi Instan
                        </span>
                      </div>
                      <Button
                        className="hidden md:flex bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-white px-8 h-11 text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                        onClick={() => setSelectedBus(bus)}
                        disabled={!bus.available}
                      >
                        LIHAT TEMPAT DUDUK
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-xl border border-gray-200 shadow-md">
                <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-10 w-10 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Tidak Ada Bus Ditemukan</h3>
                <p className="text-sm text-gray-600 mb-6">Coba ubah filter atau kata kunci pencarian</p>
                <Button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedPrice("all");
                  }}
                  className="bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-white px-6 h-11 font-semibold"
                >
                  Reset Filter
                </Button>
              </div>
            )}
          </main>
        </div>
      </div>

      <Footer />

      {selectedBus && (
        <SeatSelectionModal
          bus={selectedBus}
          onClose={() => setSelectedBus(null)}
        />
      )}
    </div>
  );
};

export default Buses;
