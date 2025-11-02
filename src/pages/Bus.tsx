import React, { useEffect, useState } from "react";
import { Wind, Wifi, Tv, ShowerHead, Utensils, Armchair, BatteryCharging, Coffee, ChevronLeft, ChevronRight, Users, Star, Clock, Shield, FireExtinguisher, Locate, FireExtinguisherIcon, MapPin, Map, UserCheck, Lock, Plus } from "lucide-react";

import bus1 from "../assets/hero.jpg";
import bus2 from "../assets/volvo.png";
import bus3 from "../assets/mercedez-removebg-preview.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BusShowcase = () => {
  const [currentExperienceSlide, setCurrentExperienceSlide] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const buses = [
    {
      name: "Super Top SHD",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80",
      description: "Bus premium dengan fasilitas bintang 5 untuk perjalanan jarak jauh yang mewah dan nyaman",
      capacity: "30 seats",
      rating: "4.9",
      facilities: [
        { icon: <Wind />, label: "AC Premium" },
        { icon: <Wifi />, label: "WiFi Unlimited" },
        { icon: <ShowerHead />, label: "Toilet Bersih" },
        { icon: <Armchair />, label: "Reclining Seat" },
        { icon: <Utensils />, label: "Snack Premium" },
        { icon: <BatteryCharging />, label: "Fast Charging" },
        { icon: <Tv />, label: "Entertainment" },
        { icon: <Coffee />, label: "Welcome Drink" },
      ],
    },
    {
      name: "Executive Plus",
      image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80",
      description: "Pilihan terbaik untuk perjalanan bisnis dengan kenyamanan ekstra dan harga kompetitif",
      capacity: "24 seats",
      rating: "4.7",
      facilities: [
        { icon: <Wind />, label: "AC Double Blower" },
        { icon: <Wifi />, label: "WiFi Gratis" },
        { icon: <Armchair />, label: "Leg Rest" },
        { icon: <Utensils />, label: "Snack & Drink" },
        { icon: <BatteryCharging />, label: "USB Port" },
      ],
    },
    {
      name: "Travel Hiace",
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80",
      description: "Solusi travel ekonomis untuk keluarga dan grup dengan fleksibilitas tinggi",
      capacity: "12 seats",
      rating: "4.5",
      facilities: [
        { icon: <Wind />, label: "AC Dingin" },
        { icon: <Armchair />, label: "Comfort Seat" },
        { icon: <BatteryCharging />, label: "Charging Port" },
      ],
    },
  ];

  const experienceSlides = [
    {
      img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=900&q=60",
      title: "Keramahan Awak Bus",
      desc: "Tim pramugara/i profesional yang telah terlatih siap memberikan pelayanan terbaik sepanjang perjalanan Anda.",
      subtitle: "Pelayanan 24/7",
    },
    {
      img: "https://images.unsplash.com/photo-1531771686035-25f47595c87b?auto=format&fit=crop&w=900&q=60",
      title: "Kenyamanan Armada",
      desc: "Armada terawat dengan kursi empuk, AC optimal, dan kebersihan yang selalu terjaga untuk kenyamanan maksimal.",
      subtitle: "Perawatan Rutin",
    },
    {
      img: "https://images.unsplash.com/photo-1501746877-14782df58970?auto=format&fit=crop&w=900&q=60",
      title: "Ketepatan Waktu",
      desc: "Komitmen kami untuk selalu on-time dengan sistem tracking GPS dan manajemen rute yang efisien.",
      subtitle: "99% On-Time",
    },
  ];

  const safetyFeatures = [
    {
      title: "Sabuk Pengaman",
      desc: "Setiap kursi dilengkapi sabuk pengaman berkualitas tinggi",
      icon: Lock,
    },
    {
      title: "APAR Lengkap",
      desc: "Alat pemadam api tersedia di setiap sudut bus",
      icon: FireExtinguisherIcon,
    },
    {
      title: "GPS Tracking",
      desc: "Monitoring perjalanan real-time untuk keamanan maksimal",
      icon: MapPin,
    },
    {
      title: "P3K Standar",
      desc: "Kotak P3K lengkap untuk pertolongan pertama",
      icon: Plus,
    },
    {
      title: "Driver Bersertifikat",
      desc: "Pengemudi profesional dengan lisensi lengkap",
      icon: UserCheck,
    },
    {
      title: "Asuransi Perjalanan",
      desc: "Dilindungi asuransi untuk ketenangan pikiran Anda",
      icon: Shield,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExperienceSlide((prev) => (prev + 1) % experienceSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [experienceSlides.length]);

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev === 0 ? buses.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev === buses.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const activeBus = buses[activeIndex];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-8 md:pt-12 pb-6 md:pb-8 text-center px-4 bg-white">
        <div className="max-w-4xl mx-auto mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600">Armada Premium Kami</h1>
          <p className="text-sm md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">Pilih armada yang sesuai dengan kebutuhan perjalanan Anda. Semua armada kami dilengkapi dengan fasilitas modern dan standar keamanan tertinggi.</p>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 md:mb-12 max-w-4xl mx-auto">
          <div className="flex items-center gap-2 bg-amber-50 px-4 md:px-6 py-2 md:py-3 rounded-full border border-amber-200">
            <Users className="text-amber-600 h-4 w-4 md:h-5 md:w-5" />
            <span className="text-xs md:text-sm text-gray-700">
              <strong className="text-amber-600">500K+</strong> Penumpang
            </span>
          </div>
          <div className="flex items-center gap-2 bg-amber-50 px-4 md:px-6 py-2 md:py-3 rounded-full border border-amber-200">
            <Star className="text-amber-600 h-4 w-4 md:h-5 md:w-5" />
            <span className="text-xs md:text-sm text-gray-700">
              <strong className="text-amber-600">4.8/5</strong> Rating
            </span>
          </div>
          <div className="flex items-center gap-2 bg-amber-50 px-4 md:px-6 py-2 md:py-3 rounded-full border border-amber-200">
            <Clock className="text-amber-600 h-4 w-4 md:h-5 md:w-5" />
            <span className="text-xs md:text-sm text-gray-700">
              <strong className="text-amber-600">99%</strong> On-Time
            </span>
          </div>
        </div>
      </section>

      {/* Bus Type Selector */}
      <section className="pb-8 md:pb-16 text-center px-4 md:px-6 relative bg-white">
        <div className="relative flex items-center justify-center w-full max-w-7xl mx-auto min-h-[50px] md:min-h-[80px]">
          {/* Center button (aktif) */}
          <button className="px-4 py-2 md:px-16 md:py-4 rounded-full border-2 border-amber-500 text-amber-600 font-bold bg-amber-50 text-xs md:text-xl whitespace-nowrap transform scale-100 md:scale-125 animate-scaleIn z-10 shadow-md">
            {buses[activeIndex].name}
          </button>

          {/* Previous button */}
          {activeIndex > 0 && (
            <button
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setActiveIndex(activeIndex - 1);
                  setTimeout(() => setIsTransitioning(false), 500);
                }
              }}
              className="absolute left-[2%] md:left-[15%] px-2 py-1 md:px-10 md:py-3 rounded-full border-2 border-gray-300 text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-all duration-500 ease-out text-[10px] md:text-sm whitespace-nowrap transform hover:scale-105 animate-slideInLeft bg-white"
            >
              {buses[activeIndex - 1].name}
            </button>
          )}

          {/* Next button */}
          {activeIndex < buses.length - 1 && (
            <button
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setActiveIndex(activeIndex + 1);
                  setTimeout(() => setIsTransitioning(false), 500);
                }
              }}
              className="absolute right-[2%] md:right-[15%] px-2 py-1 md:px-10 md:py-3 rounded-full border-2 border-gray-300 text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-all duration-500 ease-out text-[10px] md:text-sm whitespace-nowrap transform hover:scale-105 animate-slideInRight bg-white"
            >
              {buses[activeIndex + 1].name}
            </button>
          )}

          {/* Previous & Next arrows */}
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="absolute left-[-10px] md:left-[2%] p-1.5 md:p-4 rounded-full bg-gray-100 hover:bg-gray-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
            aria-label="Previous bus"
          >
            <ChevronLeft className="text-amber-600 h-4 md:h-7 w-4 md:w-7" />
          </button>

          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="absolute right-[-10px] md:right-[2%] p-1.5 md:p-4 rounded-full bg-gray-100 hover:bg-gray-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
            aria-label="Next bus"
          >
            <ChevronRight className="text-amber-600 h-4 md:h-7 w-4 md:w-7" />
          </button>
        </div>

        <style>{`
          @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-20px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes slideInRight {
            from { opacity: 0; transform: translateX(20px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes scaleIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1.25); }
          }

          .animate-slideInLeft { animation: slideInLeft 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) forwards; }
          .animate-slideInRight { animation: slideInRight 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) forwards; }
          .animate-scaleIn { animation: scaleIn 0.5s cubic-bezier(0.25, 0.8, 0.25, 1) forwards; }
        `}</style>
      </section>

      {/* Bus Image & Info */}
      <section className="relative w-full px-4 md:px-6 mb-8 md:mb-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
            <img
              key={activeBus.image}
              src={activeBus.image}
              alt={activeBus.name}
              className="w-full h-[250px] sm:h-[350px] md:h-[500px] object-cover transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 md:gap-4">
                <div>
                  <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">{activeBus.name}</h2>
                  <p className="text-xs md:text-base text-gray-200 max-w-xl leading-relaxed">{activeBus.description}</p>
                </div>
                <div className="flex gap-3 md:gap-4 items-center">
                  <div className="bg-white/20 backdrop-blur-sm px-3 md:px-4 py-2 rounded-lg border border-white/30">
                    <p className="text-xs text-gray-200">Kapasitas</p>
                    <p className="text-sm md:text-lg font-bold text-amber-300">{activeBus.capacity}</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm px-3 md:px-4 py-2 rounded-lg border border-white/30">
                    <p className="text-xs text-gray-200">Rating</p>
                    <p className="text-sm md:text-lg font-bold text-amber-300">⭐ {activeBus.rating}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fasilitas */}
      <section className="max-w-6xl mx-auto mt-8 md:mt-16 px-4 md:px-6 text-center bg-white py-12">
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-3 text-amber-600 tracking-wide">Fasilitas Premium</h2>
          <p className="text-xs md:text-base text-gray-600">Nikmati berbagai fasilitas modern di armada {activeBus.name}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 justify-items-center">
          {activeBus.facilities.map((f, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center gap-2 md:gap-3 bg-gradient-to-br from-amber-50 to-yellow-50 p-4 md:p-6 rounded-xl md:rounded-2xl border border-amber-200 hover:border-amber-400 hover:bg-amber-100 hover:scale-105 transition-all duration-300 w-full shadow-sm"
            >
              <div className="text-amber-600 text-xl md:text-3xl">{f.icon}</div>
              <span className="text-xs md:text-base font-medium text-gray-800">{f.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-12 bg-amber-50 border border-amber-300 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-sm">
          <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
            💡 <strong className="text-amber-700">Pro Tip:</strong> Semua fasilitas tersedia tanpa biaya tambahan! Kami berkomitmen memberikan pengalaman perjalanan terbaik untuk Anda.
          </p>
        </div>
      </section>

      {/* Experience Slider */}
      <section className="container mx-auto px-4 md:px-6 py-12 md:py-24 max-w-full bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-3 text-amber-600">Pengalaman Perjalanan</h2>
            <p className="text-xs md:text-base text-gray-600">Testimoni nyata dari penumpang setia kami</p>
          </div>

          <div className="relative h-[300px] sm:h-[400px] md:h-[480px] rounded-xl md:rounded-2xl overflow-hidden">
            {experienceSlides.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${index === currentExperienceSlide ? "opacity-100" : "opacity-0"}`}
              >
                <div className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border border-gray-200 h-full">
                  <div className="relative h-48 sm:h-60 md:h-72 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-black/40 to-transparent" />
                    <div className="absolute top-4 right-4 bg-amber-500 backdrop-blur-sm px-3 py-1 rounded-full shadow-md">
                      <span className="text-xs font-semibold text-white">{item.subtitle}</span>
                    </div>
                  </div>
                  <div className="p-4 md:p-8 text-center">
                    <h3 className="text-xl md:text-3xl font-bold text-amber-600 mb-2 md:mb-4">{item.title}</h3>
                    <p className="text-sm md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-4 md:mt-8 gap-2">
            {experienceSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentExperienceSlide(i)}
                className={`h-2 rounded-full transition-all ${i === currentExperienceSlide ? "bg-amber-500 w-8" : "bg-gray-400 w-2 hover:bg-gray-500"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Perlengkapan Keselamatan */}
      <section className="max-w-6xl mx-auto px-4 md:px-6 text-center pb-12 md:pb-20 bg-white">
        <div className="mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-300 px-4 py-2 rounded-full mb-4 shadow-sm">
            <Shield className="text-amber-600 h-4 w-4 md:h-5 md:w-5" />
            <span className="text-xs md:text-sm text-amber-700 font-semibold">Sertifikasi Standar Internasional</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-3 text-amber-600">Perlengkapan Keselamatan</h2>
          <p className="text-xs md:text-base text-gray-600 max-w-2xl mx-auto">Keamanan adalah prioritas utama kami. Semua armada dilengkapi dengan standar keselamatan tertinggi.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {safetyFeatures.map((feature, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl md:rounded-2xl p-5 md:p-8 border border-amber-200 hover:border-amber-400 transition-all duration-300 hover:scale-105 shadow-sm"
            >
              <div className="text-4xl md:text-5xl mb-3 md:mb-4 flex justify-center items-center">
                <feature.icon className="text-amber-600" />
              </div>

              <h3 className="text-base md:text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-12 bg-green-50 border border-green-300 rounded-xl md:rounded-2xl p-4 md:p-6 max-w-3xl mx-auto shadow-sm">
          <p className="text-xs md:text-base text-gray-700">
            <strong className="text-green-700">✓ Teruji & Tersertifikasi</strong> - Semua armada kami telah lulus uji kelayakan berkala dan memiliki sertifikasi dari Kementerian Perhubungan RI.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusShowcase;
