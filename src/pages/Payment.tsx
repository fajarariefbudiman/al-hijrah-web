import { useSearchParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Wallet, Store, Banknote, X, CheckCircle2, XCircle } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

interface PaymentInfo {
  bus: {
    name: string;
    departure: string;
    arrival: string;
    time: string;
    price: number;
  };
  passenger: {
    name: string;
    age: string;
    phone: string;
    seat: number;
  };
}

const Payment = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const bookingData: PaymentInfo = JSON.parse(sessionStorage.getItem("bookingData") || "{}");

  const bus = bookingData.bus || {
    name: "Bus Pariwisata Default",
    departure: "Tangerang",
    arrival: "Jakarta",
    time: "08:00",
    price: 150000,
  };

  const passenger = bookingData.passenger || {
    name: "Penumpang",
    age: "0",
    phone: "08xxxx",
    seat: 0,
  };

  const [selectedMethod, setSelectedMethod] = useState<string>("");
  const [showModal, setShowModal] = useState(false);
  const [accountNumber, setAccountNumber] = useState("");
  const [statusModal, setStatusModal] = useState<"success" | "failed" | null>(null);
  const [userBalance, setUserBalance] = useState<number | null>(null);

  const paymentOptions = [
    { id: "dana", name: "DANA", icon: <Wallet className="w-5 h-5 text-white" /> },
    { id: "gopay", name: "GoPay", icon: <Wallet className="w-5 h-5 text-sky-500" /> },
    { id: "shopeepay", name: "ShopeePay", icon: <Wallet className="w-5 h-5 text-orange-500" /> },
    { id: "indomaret", name: "Indomaret", icon: <Store className="w-5 h-5 text-white" /> },
    { id: "alfamart", name: "Alfamart", icon: <Store className="w-5 h-5 text-red-600" /> },
    { id: "bca", name: "Transfer Bank BCA", icon: <Banknote className="w-5 h-5 text-white" /> },
    { id: "bri", name: "Transfer Bank BRI", icon: <Banknote className="w-5 h-5 text-white" /> },
  ];

  const adminFee = Math.floor(bus.price * 0.015);
  const totalWithFee = bus.price + adminFee;

  const handleSelectMethod = (method: string) => {
    setSelectedMethod(method);
    setShowModal(true);
  };

  const handleConfirmPayment = () => {
    if (!accountNumber) {
      alert("Harap isi nomor rekening atau nomor HP!");
      return;
    }

    const simulatedBalance = Math.floor(Math.random() * 500000);
    setUserBalance(simulatedBalance);

    setTimeout(() => {
      if (simulatedBalance < totalWithFee) {
        setStatusModal("failed");
        return;
      }

      setStatusModal("success");
      toast.success("Pembayaran berhasil! 🎉");

      setTimeout(() => {
        navigate("/");
      }, 2000);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0f0f0f] text-white">
      <Navbar />

      <section className="flex-1 py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-3xl font-bold mb-8 text-center text-white">Pembayaran Tiket Bus</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Kolom kiri - Metode Pembayaran */}
            <Card className="p-6 bg-[#1a1a1a] border border-[#2b2b2b]">
              <h2 className="text-xl font-semibold mb-4 text-white">Pilih Metode Pembayaran</h2>
              <div className="space-y-3 text-white">
                {paymentOptions.map((opt) => (
                  <div
                    key={opt.id}
                    onClick={() => handleSelectMethod(opt.id)}
                    className={`flex items-center gap-3 p-4 rounded-lg cursor-pointer border transition-all
                      ${selectedMethod === opt.id ? "border-red-600 bg-red-600/10" : "border-[#2b2b2b] hover:border-red-500 hover:bg-red-500/5"}`}
                  >
                    {opt.icon}
                    <div>
                      <p className="font-semibold">{opt.name}</p>
                      <p className="text-xs text-gray-400">{["indomaret", "alfamart"].includes(opt.id) ? "Bayar di gerai terdekat" : opt.id.startsWith("b") ? "Transfer via rekening" : "Gunakan saldo e-wallet"}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Kolom kanan - Detail Tiket */}
            <Card className="p-6 bg-[#1a1a1a] border border-[#2b2b2b] space-y-4 text-wh">
              <h2 className="text-xl font-semibold text-white">Detail Tiket</h2>
              <div className="border-b border-[#2b2b2b] pb-4 space-y-2">
                <p className="font-medium">{bus.name}</p>
                <p className="text-sm text-gray-400">
                  {bus.departure} → {bus.arrival}
                </p>
                <p className="text-xs text-gray-500">Berangkat: {bus.time}</p>
              </div>

              <div className="space-y-1 text-sm">
                <p>
                  Nama Penumpang: <span className="font-semibold text-white">{passenger.name}</span>
                </p>
                <p>
                  Nomor Kursi: <span className="font-semibold text-white">{passenger.seat}</span>
                </p>
                <p>
                  No. HP: <span className="text-gray-300">{passenger.phone}</span>
                </p>
              </div>

              <hr className="border-[#2b2b2b]" />

              <div className="text-sm space-y-1 text-white">
                <div className="flex justify-between">
                  <span>Harga Tiket</span>
                  <span>Rp {bus.price.toLocaleString("id-ID")}</span>
                </div>
                <div className="flex justify-between">
                  <span>Biaya Admin (1.5%)</span>
                  <span>Rp {adminFee.toLocaleString("id-ID")}</span>
                </div>
                <div className="flex justify-between font-semibold text-red-500 border-t border-[#2b2b2b] pt-2">
                  <span>Total Bayar</span>
                  <span>Rp {totalWithFee.toLocaleString("id-ID")}</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Modal Input Nomor */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div className="bg-[#1a1a1a] border border-[#2b2b2b] rounded-lg p-6 w-[90%] max-w-md relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-red-500"
              onClick={() => setShowModal(false)}
            >
              <X size={20} />
            </button>

            <h3 className="text-lg font-semibold text-white mb-3">{selectedMethod.startsWith("b") ? "Transfer Bank" : "E-Wallet / Gerai"}</h3>
            <p className="text-xs text-gray-400 mb-3">Masukkan {selectedMethod.startsWith("b") ? "nomor rekening kamu" : "nomor HP / kode pelanggan"} untuk melanjutkan pembayaran.</p>

            <input
              type="text"
              placeholder="Contoh: 0812xxxx / 1234567890"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              className="w-full bg-[#2b2b2b] text-white rounded px-3 py-2 mb-4 text-sm focus:outline-none focus:ring-1 focus:ring-red-600"
            />

            <Button
              onClick={handleConfirmPayment}
              className="w-full bg-red-600 hover:bg-red-700"
            >
              Konfirmasi Pembayaran
            </Button>
          </div>
        </div>
      )}

      {/* Modal Status */}
      {statusModal && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div className="bg-[#1a1a1a] border border-[#2b2b2b] rounded-lg p-8 text-center w-[90%] max-w-sm">
            {statusModal === "success" ? (
              <>
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-green-500 mb-2">Pembayaran Berhasil!</h3>
                <p className="text-sm text-gray-400">E-ticket telah dikirim ke email kamu.</p>
              </>
            ) : (
              <>
                <XCircle className="w-16 h-16 text-red-500 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-red-500 mb-2">Pembayaran Gagal!</h3>
                <p className="text-sm text-gray-400 mb-3">Saldo kamu tidak mencukupi.</p>
                <Button
                  onClick={() => setStatusModal(null)}
                  className="bg-red-600 hover:bg-red-700"
                >
                  Coba Lagi
                </Button>
              </>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Payment;
