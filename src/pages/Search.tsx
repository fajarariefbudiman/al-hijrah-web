import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Filter, Search } from "lucide-react";
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

// =====================
// MODAL COMPONENT
// =====================
interface SeatSelectionModalProps {
  bus: Bus;
  onClose: () => void;
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

  // FILTER LOGIC
  const filteredBuses = allBuses.filter((bus) => {
    const matchesSearch = bus.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = selectedPrice === "all" || (selectedPrice === "under2" && bus.price < 2000000) || (selectedPrice === "2-3" && bus.price >= 2000000 && bus.price <= 3000000) || (selectedPrice === "above3" && bus.price > 3000000);
    return matchesSearch && matchesPrice;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#0d0d0d] text-gray-200 font-sans antialiased">
      <Navbar />

      {/* Header with Search */}
      <section className="bg-[#1a1a1a] py-4 md:py-6 border-b border-[#2b2b2b] shadow-sm">
        <div className="container mx-auto px-4">
          <h1 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4">Cari Bus</h1>
          <div className="flex gap-2">
            <div className="relative flex-1 max-w-full md:max-w-2xl">
              <Search className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 h-4 w-4 md:h-5 md:w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Cari bus berdasarkan nama..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 md:pl-12 h-10 md:h-11 bg-[#2b2b2b] text-white border border-[#3a3a3a] placeholder-gray-500 text-sm"
              />
            </div>
            {/* Mobile Filter Button */}
            <Button
              // onClick={() => setShowFilters(true)}
              className="md:hidden bg-[#2b2b2b] hover:bg-[#3a3a3a] text-white border border-[#3a3a3a] h-10 px-3"
            >
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-4 md:py-6 flex-1">
        <div className="flex gap-6">
          {/* Desktop Sidebar Filter */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-[#1a1a1a] rounded-xl border border-[#2b2b2b] text-gray-200 shadow-md">
              <div className="p-4 border-b border-[#2b2b2b] flex items-center justify-between">
                <h2 className="font-semibold text-base text-white">Filter</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedPrice("all");
                  }}
                  className="text-xs text-red-500 hover:text-red-400 hover:bg-[#2b2b2b] h-auto p-1 transition-all duration-200"
                >
                  Reset
                </Button>
              </div>

              <div className="p-5 space-y-6">
                <div>
                  <h3 className="font-medium text-sm mb-3 text-gray-300 uppercase tracking-wide">Harga</h3>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="radio"
                        name="price"
                        checked={selectedPrice === "all"}
                        onChange={() => setSelectedPrice("all")}
                        className="w-4 h-4 accent-red-600"
                      />
                      <span className="text-xs text-gray-400 group-hover:text-gray-200 transition-colors duration-200">Semua Harga</span>
                    </label>

                    {[
                      { label: "Di bawah 2jt/hari", value: "under2" },
                      { label: "2-3jt/hari", value: "2-3" },
                      { label: "Di atas 3jt/hari", value: "above3" },
                    ].map((item) => (
                      <label
                        key={item.value}
                        className="flex items-center gap-2 cursor-pointer group"
                      >
                        <input
                          type="radio"
                          name="price"
                          checked={selectedPrice === item.value}
                          onChange={() => setSelectedPrice(item.value)}
                          className="w-4 h-4 accent-red-600"
                        />
                        <span className="text-xs text-gray-400 group-hover:text-gray-200 transition-colors duration-200">{item.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile Filter Modal */}
          

          {/* Bus List */}
          <main className="flex-1 min-w-0">
            <div className="mb-3 md:mb-4 bg-[#1a1a1a] p-3 md:p-4 rounded border border-[#2b2b2b]">
              <h2 className="font-semibold text-sm md:text-base text-gray-200">
                <span className="text-red-500">{filteredBuses.length}</span> Bus ditemukan
              </h2>
            </div>

            {filteredBuses.length > 0 ? (
              <div className="space-y-3">
                {filteredBuses.map((bus) => (
                  <div
                    key={bus.id}
                    className="bg-[#1a1a1a] border border-[#2b2b2b] rounded hover:shadow-md hover:shadow-red-900/20 transition"
                  >
                    <div className="p-3 md:p-4">
                      {/* Mobile Layout */}
                      <div className="md:hidden space-y-3">
                        <div className="flex items-start gap-3">
                          <img
                            src={bus.image}
                            alt={bus.name}
                            className="h-12 w-12 object-contain flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-sm text-white mb-1 truncate">{bus.name}</h3>
                            <div className="flex items-center gap-2">
                              <span className="bg-green-700 text-white text-xs font-semibold px-2 py-0.5 rounded">★ {bus.rating}</span>
                              <span className={`text-xs font-medium ${bus.seatAvailable > 0 ? "text-orange-400" : "text-red-500"}`}>{bus.seatAvailable > 0 ? `${bus.seatAvailable} seat` : "Penuh"}</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between bg-[#121212] rounded p-3">
                          <div className="text-center flex-1">
                            <p className="text-lg font-bold text-gray-100">{bus.time.split(" ")[0]}</p>
                            <p className="text-xs text-gray-400 mt-0.5">{bus.departure}</p>
                          </div>
                          <div className="text-xs text-gray-400 px-2">~2j 30m</div>
                          <div className="text-center flex-1">
                            <p className="text-lg font-bold text-gray-100">
                              {(() => {
                                const [hour] = bus.time.split(":");
                                const arrivalHour = (parseInt(hour) + 2) % 24;
                                return `${arrivalHour.toString().padStart(2, "0")}:30`;
                              })()}
                            </p>
                            <p className="text-xs text-gray-400 mt-0.5">{bus.arrival}</p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs text-gray-500">Mulai dari</p>
                            <p className="text-lg font-bold text-white">Rp {(bus.price / 1000).toFixed(0)}rb</p>
                          </div>
                          <Button
                            className="bg-red-600 hover:bg-red-700 text-white px-4 h-9 text-sm"
                            onClick={() => setSelectedBus(bus)}
                          >
                            PILIH
                          </Button>
                        </div>
                      </div>

                      {/* Desktop Layout */}
                      <div className="hidden md:flex items-start gap-4">
                        <img
                          src={bus.image}
                          alt={bus.name}
                          className="h-12 w-12 object-contain"
                        />
                        <div className="flex-1 grid grid-cols-12 gap-4 items-center">
                          <div className="col-span-3">
                            <h3 className="font-semibold text-sm text-white mb-1">{bus.name}</h3>
                            <p className="text-xs text-gray-400">
                              {bus.departure} - {bus.arrival}
                            </p>
                            <p className="text-xs text-gray-400">{bus.seatAvailable} dari 30 kursi tersedia</p>
                          </div>

                          <div className="col-span-2 text-center">
                            <p className="text-xl font-bold text-gray-100">{bus.time.split(" ")[0]}</p>
                            <p className="text-xs text-gray-400 mt-1">{bus.departure}</p>
                          </div>

                          <div className="col-span-2 text-center text-xs text-gray-400">~2j 30m</div>

                          <div className="col-span-2 text-center">
                            <p className="text-xl font-bold text-gray-100">
                              {(() => {
                                const [hour] = bus.time.split(":");
                                const arrivalHour = (parseInt(hour) + 2) % 24;
                                return `${arrivalHour.toString().padStart(2, "0")}:30`;
                              })()}
                            </p>
                            <p className="text-xs text-gray-400 mt-1">{bus.arrival}</p>
                          </div>

                          <div className="col-span-2 text-right">
                            <span className="bg-green-700 text-white text-xs font-semibold px-2 py-0.5 rounded">★ {bus.rating}</span>
                            <p className="text-xs text-gray-500 mt-1">Mulai dari</p>
                            <p className="text-lg font-bold text-white">Rp {bus.price.toLocaleString("id-ID")}</p>
                          </div>

                          <div className="col-span-1 text-right">
                            <div className={`text-xs font-medium ${bus.seatAvailable > 0 ? "text-orange-400" : "text-red-500"}`}>{bus.seatAvailable > 0 ? `${bus.seatAvailable} seat` : "Penuh"}</div>
                          </div>
                        </div>
                      </div>

                      {/* Preview gambar - Desktop only */}
                      <div className="hidden md:flex mt-3 gap-2 overflow-x-auto">
                        <img
                          src={bus.image}
                          alt="preview"
                          className="h-12 w-20 object-cover rounded"
                        />
                        <img
                          src={bus.image}
                          alt="preview"
                          className="h-12 w-20 object-cover rounded"
                        />
                        <div className="h-12 w-20 bg-gray-700 flex items-center justify-center rounded text-xs text-gray-200">+5</div>
                      </div>
                    </div>

                    <div className="border-t border-[#2b2b2b] px-3 md:px-4 py-2 md:py-3 flex items-center justify-between bg-[#121212]">
                      <span className="flex items-center gap-1 text-xs text-gray-400">🎫 Uang bisa dikembalikan</span>
                      <Button
                        className="hidden md:block bg-red-600 hover:bg-red-700 text-white px-6 h-9 text-sm"
                        onClick={() => setSelectedBus(bus)}
                      >
                        LIHAT TEMPAT DUDUK
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-[#1a1a1a] rounded border border-[#2b2b2b]">
                <p className="text-sm text-gray-400">Tidak ada bus yang cocok dengan filter.</p>
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
