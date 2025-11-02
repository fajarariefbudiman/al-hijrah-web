import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Bus, Clock, Star } from "lucide-react";
import bgBus from "../assets/more.jpg";

const Rute = () => {
  const ruteData = [
    { asal: "Jakarta", tujuan: "Bandung", waktu: "Setiap 2 Jam", harga: "Rp 120.000", estimasi: "3 Jam" },
    { asal: "Jakarta", tujuan: "Yogyakarta", waktu: "Pagi & Malam", harga: "Rp 350.000", estimasi: "8 Jam" },
    { asal: "Bandung", tujuan: "Surabaya", waktu: "Malam", harga: "Rp 480.000", estimasi: "11 Jam" },
    { asal: "Yogyakarta", tujuan: "Malang", waktu: "Malam", harga: "Rp 300.000", estimasi: "6 Jam" },
  ];

  const fiturKami = [
    {
      icon: <Bus size={32} className="text-amber-600" />,
      title: "Armada Premium",
      desc: "Kenyamanan maksimal dengan kursi ergonomis dan AC sejuk.",
    },
    {
      icon: <Clock size={32} className="text-amber-600" />,
      title: "Tepat Waktu",
      desc: "Keberangkatan selalu sesuai jadwal tanpa penundaan.",
    },
    {
      icon: <Star size={32} className="text-amber-600" />,
      title: "Pelayanan Terbaik",
      desc: "Driver profesional & ramah siap membantu setiap penumpang.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900 font-sans">
      <Navbar />

      {/* HERO */}
      <section
        className="relative pt-24 sm:pt-28 pb-16 sm:pb-24 text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${bgBus})` }}
      >
        <div className="absolute inset-0 bg-white/85 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-8">
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-3 sm:mb-4 bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
            Rute & Jadwal Keberangkatan
          </h1>
          <p className="text-gray-700 text-sm sm:text-lg leading-relaxed">
            Jelajahi berbagai destinasi populer dengan armada bus terbaik kami. Aman, nyaman, dan tepat waktu.
          </p>
        </div>
      </section>

      {/* FITUR KAMI */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-8 text-center">
        {fiturKami.map((f, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-8 shadow-md hover:shadow-amber-400/30 transition"
          >
            <div className="flex justify-center mb-3 sm:mb-4">{f.icon}</div>
            <h3 className="text-base sm:text-xl font-semibold text-amber-600 mb-1 sm:mb-2">{f.title}</h3>
            <p className="text-gray-600 text-sm sm:text-base">{f.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* DAFTAR RUTE */}
      <section className="max-w-6xl mx-auto px-3 sm:px-8 mt-4 sm:mt-6 mb-16 sm:mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-amber-600">
          Daftar Rute Lengkap
        </h2>

        <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-lg">
          <table className="min-w-full text-xs sm:text-base text-center">
            <thead className="bg-gradient-to-r from-amber-50 to-yellow-50 text-amber-700 uppercase tracking-wide">
              <tr>
                <th className="py-3 sm:py-5 px-2 sm:px-4 font-semibold">Asal</th>
                <th className="py-3 sm:py-5 px-2 sm:px-4 font-semibold">Tujuan</th>
                <th className="py-3 sm:py-5 px-2 sm:px-4 font-semibold">Waktu</th>
                <th className="py-3 sm:py-5 px-2 sm:px-4 font-semibold">Estimasi</th>
                <th className="py-3 sm:py-5 px-2 sm:px-4 font-semibold">Harga</th>
              </tr>
            </thead>
            <tbody>
              {ruteData.map((r, i) => (
                <tr key={i} className="border-t border-gray-200 hover:bg-amber-50 transition">
                  <td className="py-3 sm:py-5 px-2 sm:px-4 text-gray-800">{r.asal}</td>
                  <td className="py-3 sm:py-5 px-2 sm:px-4 text-amber-600 font-medium">{r.tujuan}</td>
                  <td className="py-3 sm:py-5 px-2 sm:px-4 text-gray-700">{r.waktu}</td>
                  <td className="py-3 sm:py-5 px-2 sm:px-4 text-gray-700">{r.estimasi}</td>
                  <td className="py-3 sm:py-5 px-2 sm:px-4 font-semibold text-amber-600">{r.harga}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-12 sm:py-20 bg-gradient-to-t from-gray-100 via-gray-50 to-white px-4 sm:px-8">
        <h2 className="text-xl sm:text-3xl font-bold text-amber-600 mb-3 sm:mb-4">
          Siap Berangkat Bersama Kami?
        </h2>
        <p className="text-gray-700 mb-6 sm:mb-8 text-sm sm:text-base max-w-2xl mx-auto">
          Pesan tiket bus favoritmu sekarang dan nikmati perjalanan yang tak terlupakan dengan armada terbaik dan pelayanan maksimal.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="px-6 sm:px-8 py-2.5 sm:py-3 bg-amber-500 text-white font-semibold rounded-full hover:bg-amber-600 transition shadow-lg text-sm sm:text-base"
        >
          Pesan Sekarang
        </motion.button>
      </section>

      <Footer />
    </div>
  );
};

export default Rute;
