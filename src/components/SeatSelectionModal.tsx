import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { X, Sofa } from "lucide-react"; // ganti Armchair → Sofa (lebih mirip kursi/sofa)

interface Bus {
  name: string;
  departure: string;
  arrival: string;
  time: string;
  price: number;
}

interface SeatSelectionModalProps {
  bus: Bus;
  onClose: () => void;
}

export default function SeatSelectionModal({ bus, onClose }: SeatSelectionModalProps) {
  const navigate = useNavigate();
  const [step, setStep] = useState<1 | 2>(1);
  const [selectedSeat, setSelectedSeat] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    agree: false,
  });

  const seats = Array.from({ length: 40 }, (_, i) => i + 1);
  const isSeatBooked = (seat: number) => [5, 8, 15].includes(seat);

  const handleNext = () => {
    if (!selectedSeat) return;
    setStep(2);
  };

  const handlePayment = () => {
    if (!formData.name || !formData.age || !formData.phone || !formData.agree) {
      alert("Mohon lengkapi semua data dan setujui syarat & ketentuan.");
      return;
    }

    const bookingData = { seat: selectedSeat, ...formData, bus };
    localStorage.setItem("bookingData", JSON.stringify(bookingData));
    navigate("/payment", { state: bookingData });
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-[#1a1a1a] border border-[#2b2b2b] rounded-lg w-[95%] max-w-3xl max-h-[90vh] overflow-hidden flex flex-col shadow-xl">
        {/* Header */}
        <div className="flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 border-b border-[#2b2b2b]">
          <h2 className="font-semibold text-white text-sm sm:text-base">
            {step === 1 ? "Pilih Tempat Duduk" : "Data Penumpang"} — {bus.name}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-red-500 transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* Konten scrollable */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {/* Step 1: Pilih kursi */}
          {step === 1 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[#2b2b2b]">
              {/* Kursi */}
              <div className="p-4 sm:p-6 flex flex-col items-center">
                <p className="text-xs text-red-400 text-center mb-3">
                  Klik kursi yang tersedia untuk melanjutkan
                </p>

                <div className="border-4 border-gray-600 rounded-xl p-4 bg-[#121212] relative overflow-x-auto">
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gray-700 text-gray-300 text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-t-lg">
                    Depan (Sopir)
                  </div>

                  <div className="grid grid-rows-10 gap-3">
                    {[...Array(10)].map((_, rowIndex) => {
                      const leftSeats = seats.slice(rowIndex * 4, rowIndex * 4 + 2);
                      const rightSeats = seats.slice(rowIndex * 4 + 2, rowIndex * 4 + 4);

                      return (
                        <div
                          key={rowIndex}
                          className="flex justify-between items-center gap-4 sm:gap-6"
                        >
                          {/* Kursi kiri */}
                          <div className="flex gap-2 sm:gap-3">
                            {leftSeats.map((seat) => {
                              const isBooked = isSeatBooked(seat);
                              const isSelected = seat === selectedSeat;
                              return (
                                <button
                                  key={seat}
                                  disabled={isBooked}
                                  onClick={() => setSelectedSeat(seat)}
                                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded flex items-center justify-center text-[10px] sm:text-xs transition ${
                                    isBooked
                                      ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                                      : isSelected
                                      ? "bg-red-600 text-white"
                                      : "bg-[#2b2b2b] text-gray-300 hover:bg-red-700 hover:text-white"
                                  }`}
                                >
                                  <Sofa size={14} className="mr-1" />
                                  {seat}
                                </button>
                              );
                            })}
                          </div>

                          {/* Lorong */}
                          <div className="w-6 sm:w-8 border-r border-dashed border-gray-600 h-8 sm:h-10 opacity-50" />

                          {/* Kursi kanan */}
                          <div className="flex gap-2 sm:gap-3">
                            {rightSeats.map((seat) => {
                              const isBooked = isSeatBooked(seat);
                              const isSelected = seat === selectedSeat;
                              return (
                                <button
                                  key={seat}
                                  disabled={isBooked}
                                  onClick={() => setSelectedSeat(seat)}
                                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded flex items-center justify-center text-[10px] sm:text-xs transition ${
                                    isBooked
                                      ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                                      : isSelected
                                      ? "bg-red-600 text-white"
                                      : "bg-[#2b2b2b] text-gray-300 hover:bg-red-700 hover:text-white"
                                  }`}
                                >
                                  <Sofa size={14} className="mr-1" />
                                  {seat}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Detail */}
              <div className="p-4 sm:p-6 space-y-3 text-gray-300 text-sm">
                <h3 className="font-semibold text-white mb-2">Naik Dari & Turun Di</h3>

                <div>
                  <p className="font-medium">{bus.departure}</p>
                  <p className="text-xs text-gray-500">{bus.time}</p>
                </div>
                <div>
                  <p className="font-medium">{bus.arrival}</p>
                  <p className="text-xs text-gray-500">
                    {(() => {
                      const [hour] = bus.time.split(":");
                      const arrivalHour = (parseInt(hour) + 2) % 24;
                      return `${arrivalHour.toString().padStart(2, "0")}:30`;
                    })()}
                  </p>
                </div>

                <hr className="border-[#2b2b2b]" />

                <div className="flex justify-between">
                  <span>Nomor tempat duduk</span>
                  <span className="font-semibold text-white">{selectedSeat ?? "-"}</span>
                </div>
                <div className="flex justify-between">
                  <span>Harga</span>
                  <span className="font-semibold text-white">
                    Rp {bus.price.toLocaleString("id-ID")}
                  </span>
                </div>

                <Button
                  disabled={!selectedSeat}
                  onClick={handleNext}
                  className={`w-full mt-3 ${
                    selectedSeat
                      ? "bg-red-600 hover:bg-red-700"
                      : "bg-gray-700 cursor-not-allowed"
                  }`}
                >
                  LANJUTKAN PEMESANAN
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Form penumpang */}
          {step === 2 && (
            <div className="space-y-4 text-sm text-gray-300">
              <h3 className="font-semibold text-white text-base mb-4">
                Data Penumpang
              </h3>

              <div className="space-y-3">
                <div>
                  <label className="block text-gray-400 text-xs mb-1">Nama</label>
                  <input
                    type="text"
                    className="w-full bg-[#2b2b2b] text-white rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-600"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-xs mb-1">Umur</label>
                  <input
                    type="number"
                    className="w-full bg-[#2b2b2b] text-white rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-600"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-gray-400 text-xs mb-1">Nomor HP</label>
                  <input
                    type="tel"
                    className="w-full bg-[#2b2b2b] text-white rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-red-600"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <label className="flex items-center gap-2 text-xs text-gray-400 mt-3">
                  <input
                    type="checkbox"
                    checked={formData.agree}
                    onChange={(e) =>
                      setFormData({ ...formData, agree: e.target.checked })
                    }
                    className="accent-red-600 w-4 h-4"
                  />
                  Saya menyetujui syarat & ketentuan pembelian tiket.
                </label>
              </div>

              <div className="flex flex-col sm:flex-row justify-between gap-3 pt-5">
                <Button
                  variant="ghost"
                  onClick={() => setStep(1)}
                  className="text-gray-400 hover:text-white hover:bg-[#2b2b2b] w-full sm:w-auto"
                >
                  Kembali
                </Button>
                <Button
                  onClick={handlePayment}
                  className="bg-red-600 hover:bg-red-700 w-full sm:w-auto"
                >
                  Lanjutkan Pembayaran
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
