import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Bus, Users, Award, ShieldCheck } from "lucide-react";
import bgHero from "../assets/more.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A] text-gray-100 font-sans">
      <Navbar />

      {/* HERO SECTION */}
      <section
        className="relative pt-28 pb-24 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgHero})`,
        }}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent"
          >
            Tentang Kami
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-2xl mx-auto text-gray-300 text-lg"
          >
            <strong>Al-Hijrah Bus</strong> hadir untuk memberikan pengalaman perjalanan yang aman, nyaman, dan berkelas bagi seluruh penumpang di Indonesia.
          </motion.p>
        </div>
      </section>

      {/* CERITA KAMI */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-amber-400 mb-8"
        >
          Cerita Kami
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-gray-400 leading-relaxed space-y-4"
        >
          <p>
            Berdiri sejak <span className="text-amber-300 font-semibold">2015</span>, <strong>Al-Hijrah Bus</strong> memulai perjalanan dengan satu tujuan: menghadirkan layanan transportasi darat yang nyaman dan terpercaya.
          </p>
          <p>Kami percaya setiap perjalanan bukan hanya tentang jarak, tapi juga pengalaman. Karena itu, seluruh armada kami dilengkapi fasilitas modern dan kru profesional.</p>
          <p>
            Kini, <strong>Al-Hijrah Bus</strong> melayani berbagai rute populer antar-kota di Pulau Jawa dan Sumatra dengan standar keselamatan tinggi.
          </p>
        </motion.div>
      </section>

      {/* STATISTIK */}
      <section className="bg-gradient-to-br from-white/5 to-black/30 py-20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6 text-center">
          {[
            { icon: <Bus size={40} />, label: "Armada Aktif", value: "120+" },
            { icon: <Users size={40} />, label: "Penumpang Setia", value: "50.000+" },
            { icon: <Award size={40} />, label: "Kepuasan Pelanggan", value: "98%" },
            { icon: <ShieldCheck size={40} />, label: "Tingkat Keamanan", value: "100%" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-400/50 transition shadow-lg hover:shadow-amber-400/20"
            >
              <div className="text-amber-400 mb-4 flex justify-center">{item.icon}</div>
              <div className="text-4xl font-bold text-white mb-1">{item.value}</div>
              <p className="text-gray-400 text-sm">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* NILAI KAMI */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-amber-400 mb-12">Nilai yang Kami Junjung</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Users size={32} />,
              title: "Kenyamanan",
              desc: "Setiap kursi dan fasilitas kami rancang untuk memastikan kenyamanan maksimal di setiap perjalanan.",
            },
            {
              icon: <ShieldCheck size={32} />,
              title: "Keselamatan",
              desc: "Kami mengutamakan keselamatan penumpang melalui pemeriksaan armada rutin dan sopir berpengalaman.",
            },
            {
              icon: <Award size={32} />,
              title: "Profesionalisme",
              desc: "Layanan ramah, jadwal tepat waktu, dan pengalaman pelanggan adalah prioritas utama kami.",
            },
          ].map((v, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-amber-400/50 transition"
            >
              <div className="flex justify-center items-center mb-4 text-amber-400">{v.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{v.title}</h3>
              <p className="text-gray-400">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 bg-gradient-to-t from-black via-[#0A0A0A] to-transparent">
        <h2 className="text-3xl font-bold text-amber-400 mb-4">Siap Berangkat Bersama Al-Hijrah Bus?</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-8">Nikmati perjalanan aman dan berkelas dengan armada terbaik kami. Pesan tiket sekarang dan rasakan bedanya!</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="px-8 py-3 bg-amber-500 text-black font-semibold rounded-full hover:bg-amber-400 transition"
        >
          Pesan Sekarang
        </motion.button>
      </section>

      <Footer />
    </div>
  );
};

export default About;
