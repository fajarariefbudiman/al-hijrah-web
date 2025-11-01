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
      icon: (
        <Bus
          size={36}
          className="text-amber-400"
        />
      ),
      title: "Armada Premium",
      desc: "Kenyamanan maksimal dengan kursi ergonomis dan AC sejuk.",
    },
    {
      icon: (
        <Clock
          size={36}
          className="text-amber-400"
        />
      ),
      title: "Tepat Waktu",
      desc: "Keberangkatan selalu sesuai jadwal tanpa penundaan.",
    },
    {
      icon: (
        <Star
          size={36}
          className="text-amber-400"
        />
      ),
      title: "Pelayanan Terbaik",
      desc: "Driver profesional & ramah siap membantu setiap penumpang.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A] text-gray-100 font-sans">
      <Navbar />

      {/* HERO */}
      <section
        className="relative pt-28 pb-24 text-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgBus})`,
        }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">Rute & Jadwal Keberangkatan</h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">Jelajahi berbagai destinasi populer dengan armada bus terbaik kami. Aman, nyaman, dan tepat waktu.</p>
        </div>
      </section>

      {/* FITUR KAMI */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center">
        {fiturKami.map((f, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-amber-400/20 transition"
          >
            <div className="flex justify-center mb-4">{f.icon}</div>
            <h3 className="text-lg sm:text-xl font-semibold text-amber-400 mb-2">{f.title}</h3>
            <p className="text-gray-400 text-sm sm:text-base">{f.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* DAFTAR RUTE */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 mt-6 mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center text-amber-400">Daftar Rute Lengkap</h2>

        <div className="overflow-x-auto rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-black/20 shadow-2xl backdrop-blur-sm">
          <table className="min-w-full text-sm sm:text-base text-center">
            <thead className="bg-white/10 text-amber-400 uppercase tracking-wide">
              <tr>
                <th className="py-4 sm:py-5 px-3 sm:px-4 font-semibold">Asal</th>
                <th className="py-4 sm:py-5 px-3 sm:px-4 font-semibold">Tujuan</th>
                <th className="py-4 sm:py-5 px-3 sm:px-4 font-semibold">Waktu</th>
                <th className="py-4 sm:py-5 px-3 sm:px-4 font-semibold">Estimasi</th>
                <th className="py-4 sm:py-5 px-3 sm:px-4 font-semibold">Harga</th>
              </tr>
            </thead>
            <tbody>
              {ruteData.map((r, i) => (
                <tr
                  key={i}
                  className="border-t border-white/10 hover:bg-white/10 transition"
                >
                  <td className="py-4 sm:py-5 px-3 sm:px-4">{r.asal}</td>
                  <td className="py-4 sm:py-5 px-3 sm:px-4 text-amber-300">{r.tujuan}</td>
                  <td className="py-4 sm:py-5 px-3 sm:px-4">{r.waktu}</td>
                  <td className="py-4 sm:py-5 px-3 sm:px-4">{r.estimasi}</td>
                  <td className="py-4 sm:py-5 px-3 sm:px-4 font-semibold text-amber-400">{r.harga}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 sm:py-20 bg-gradient-to-t from-black via-[#0A0A0A] to-transparent px-6 sm:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-amber-400 mb-4">Siap Berangkat Bersama Kami?</h2>
        <p className="text-gray-300 mb-8 text-sm sm:text-base max-w-2xl mx-auto">Pesan tiket bus favoritmu sekarang dan nikmati perjalanan yang tak terlupakan dengan armada terbaik dan pelayanan maksimal.</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="px-8 py-3 bg-amber-500 text-black font-semibold rounded-full hover:bg-amber-400 transition"
        >
          Pesan Sekarang
        </motion.button>
      </section>

      <Footer />
    </div>
  );
};

export default Rute;
