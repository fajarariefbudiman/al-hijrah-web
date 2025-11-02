import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Bus, Users, Award, ShieldCheck } from "lucide-react";
import bgHero from "../assets/more.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900 font-sans">
      <Navbar />

      {/* ===== HERO SECTION ===== */}
      <section
        className="relative pt-24 md:pt-32 pb-16 md:pb-24 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgHero})` }}
      >
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center px-4 md:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-amber-500 via-yellow-400 to-orange-500 bg-clip-text text-transparent"
          >
            Tentang Kami
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-2xl mx-auto text-gray-700 text-sm sm:text-base md:text-lg"
          >
            <strong>Al-Hijrah Bus</strong> hadir untuk memberikan pengalaman perjalanan yang aman, nyaman, dan berkelas bagi seluruh penumpang di Indonesia.
          </motion.p>
        </div>
      </section>

      {/* ===== CERITA KAMI ===== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14 md:py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold text-amber-600 mb-6 md:mb-8"
        >
          Cerita Kami
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-gray-700 leading-relaxed space-y-3 sm:space-y-4 text-sm sm:text-base"
        >
          <p>
            Berdiri sejak <span className="text-amber-500 font-semibold">2015</span>, <strong>Al-Hijrah Bus</strong> memulai perjalanan dengan satu tujuan: menghadirkan layanan transportasi darat yang nyaman dan terpercaya.
          </p>
          <p>Kami percaya setiap perjalanan bukan hanya tentang jarak, tapi juga pengalaman. Karena itu, seluruh armada kami dilengkapi fasilitas modern dan kru profesional.</p>
          <p>
            Kini, <strong>Al-Hijrah Bus</strong> melayani berbagai rute populer antar-kota di Pulau Jawa dan Sumatra dengan standar keselamatan tinggi.
          </p>
        </motion.div>
      </section>

      {/* ===== STATISTIK ===== */}
      <section className="bg-gray-100 py-14 md:py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-6 text-center">
          {[
            {
              icon: (
                <Bus
                  size={36}
                  className="text-amber-500"
                />
              ),
              label: "Armada Aktif",
              value: "120+",
            },
            {
              icon: (
                <Users
                  size={36}
                  className="text-amber-500"
                />
              ),
              label: "Penumpang Setia",
              value: "50.000+",
            },
            {
              icon: (
                <Award
                  size={36}
                  className="text-amber-500"
                />
              ),
              label: "Kepuasan Pelanggan",
              value: "98%",
            },
            {
              icon: (
                <ShieldCheck
                  size={36}
                  className="text-amber-500"
                />
              ),
              label: "Tingkat Keamanan",
              value: "100%",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 shadow-md hover:shadow-amber-300/30 transition"
            >
              <div className="mb-3 sm:mb-4 flex justify-center">{item.icon}</div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{item.value}</div>
              <p className="text-gray-600 text-xs sm:text-sm">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== NILAI KAMI ===== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-amber-600 mb-8 sm:mb-12">Nilai yang Kami Junjung</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              icon: (
                <Users
                  size={28}
                  className="text-amber-500"
                />
              ),
              title: "Kenyamanan",
              desc: "Setiap kursi dan fasilitas kami rancang untuk memastikan kenyamanan maksimal di setiap perjalanan.",
            },
            {
              icon: (
                <ShieldCheck
                  size={28}
                  className="text-amber-500"
                />
              ),
              title: "Keselamatan",
              desc: "Kami mengutamakan keselamatan penumpang melalui pemeriksaan armada rutin dan sopir berpengalaman.",
            },
            {
              icon: (
                <Award
                  size={28}
                  className="text-amber-500"
                />
              ),
              title: "Profesionalisme",
              desc: "Layanan ramah, jadwal tepat waktu, dan pengalaman pelanggan adalah prioritas utama kami.",
            },
          ].map((v, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-6 sm:p-8 bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-amber-300/30 transition"
            >
              <div className="flex justify-center items-center mb-3 sm:mb-4">{v.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">{v.title}</h3>
              <p className="text-gray-700 text-sm sm:text-base">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="text-center py-14 md:py-20 bg-gray-50 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-amber-600 mb-3 sm:mb-4">Siap Berangkat Bersama Al-Hijrah Bus?</h2>
        <p className="text-gray-700 text-sm sm:text-base max-w-xl mx-auto mb-6 sm:mb-8">Nikmati perjalanan aman dan berkelas dengan armada terbaik kami. Pesan tiket sekarang dan rasakan bedanya!</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-6 sm:px-8 py-2.5 sm:py-3 bg-amber-500 text-white font-semibold rounded-full hover:bg-amber-600 transition shadow-md"
        >
          Pesan Sekarang
        </motion.button>
      </section>

      <Footer />
    </div>
  );
};

export default About;
