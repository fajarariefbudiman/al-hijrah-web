import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { X, Sofa } from "lucide-react";

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
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white border border-gray-200 rounded-lg w-[95%] max-w-3xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200 bg-gray-50">
          <h2 className="font-semibold text-gray-900 text-sm sm:text-base">
            {step === 1 ? "Pilih Tempat Duduk" : "Data Penumpang"} — {bus.name}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-600 transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* Konten scrollable */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {/* Step 1: Pilih kursi */}
          {step === 1 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
              {/* Kursi */}
              <div className="p-4 sm:p-6 flex flex-col items-center">
                <p className="text-xs text-red-600 text-center mb-3 font-medium">Klik kursi yang tersedia untuk melanjutkan</p>

                <div className="border-4 border-gray-300 rounded-xl p-4 bg-gray-50 relative overflow-x-auto shadow-inner">
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gray-700 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-t-lg shadow-md">Depan (Sopir)</div>

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
                                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded flex items-center justify-center text-[10px] sm:text-xs transition shadow-sm ${
                                    isBooked ? "bg-gray-300 text-gray-500 cursor-not-allowed" : isSelected ? "bg-red-600 text-white shadow-md" : "bg-white text-gray-700 border border-gray-300 hover:bg-red-600 hover:text-white hover:border-red-600"
                                  }`}
                                >
                                  <Sofa
                                    size={14}
                                    className="mr-1"
                                  />
                                  {seat}
                                </button>
                              );
                            })}
                          </div>

                          {/* Lorong */}
                          <div className="w-6 sm:w-8 border-r border-dashed border-gray-400 h-8 sm:h-10 opacity-50" />

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
                                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded flex items-center justify-center text-[10px] sm:text-xs transition shadow-sm ${
                                    isBooked ? "bg-gray-300 text-gray-500 cursor-not-allowed" : isSelected ? "bg-red-600 text-white shadow-md" : "bg-white text-gray-700 border border-gray-300 hover:bg-red-600 hover:text-white hover:border-red-600"
                                  }`}
                                >
                                  <Sofa
                                    size={14}
                                    className="mr-1"
                                  />
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
              <div className="p-4 sm:p-6 space-y-3 text-gray-700 text-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Naik Dari & Turun Di</h3>

                <div>
                  <p className="font-medium text-gray-900">{bus.departure}</p>
                  <p className="text-xs text-gray-500">{bus.time}</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900">{bus.arrival}</p>
                  <p className="text-xs text-gray-500">
                    {(() => {
                      const [hour] = bus.time.split(":");
                      const arrivalHour = (parseInt(hour) + 2) % 24;
                      return `${arrivalHour.toString().padStart(2, "0")}:30`;
                    })()}
                  </p>
                </div>

                <hr className="border-gray-200" />

                <div className="flex justify-between">
                  <span>Nomor tempat duduk</span>
                  <span className="font-semibold text-gray-900">{selectedSeat ?? "-"}</span>
                </div>
                <div className="flex justify-between">
                  <span>Harga</span>
                  <span className="font-semibold text-gray-900">Rp {bus.price.toLocaleString("id-ID")}</span>
                </div>

                <Button
                  disabled={!selectedSeat}
                  onClick={handleNext}
                  className={`w-full mt-3 ${selectedSeat ? "bg-red-600 hover:bg-red-700 text-white" : "bg-gray-300 cursor-not-allowed text-gray-500"}`}
                >
                  LANJUTKAN PEMESANAN
                </Button>
              </div>
            </div>
          )}

          {/* Step 2: Form penumpang */}
          {step === 2 && (
            <div className="space-y-4 text-sm text-gray-700">
              <h3 className="font-semibold text-gray-900 text-base mb-4">Data Penumpang</h3>

              <div className="space-y-3">
                <div>
                  <label className="block text-gray-600 text-xs mb-1 font-medium">Nama</label>
                  <input
                    type="text"
                    className="w-full bg-white border border-gray-300 text-gray-900 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-gray-600 text-xs mb-1 font-medium">Umur</label>
                  <input
                    type="number"
                    className="w-full bg-white border border-gray-300 text-gray-900 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-gray-600 text-xs mb-1 font-medium">Nomor HP</label>
                  <input
                    type="tel"
                    className="w-full bg-white border border-gray-300 text-gray-900 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <label className="flex items-center gap-2 text-xs text-gray-600 mt-3">
                  <input
                    type="checkbox"
                    checked={formData.agree}
                    onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                    className="accent-red-600 w-4 h-4"
                  />
                  Saya menyetujui syarat & ketentuan pembelian tiket.
                </label>
              </div>

              <div className="flex flex-col sm:flex-row justify-between gap-3 pt-5">
                <Button
                  variant="ghost"
                  onClick={() => setStep(1)}
                  className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 w-full sm:w-auto border border-gray-300"
                >
                  Kembali
                </Button>
                <Button
                  onClick={handlePayment}
                  className="bg-red-600 hover:bg-red-700 text-white w-full sm:w-auto"
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
