import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Search, Star, BusFront, ArrowRight } from "lucide-react";
import mercedez from "../assets/mercedez.png";
import volvo from "../assets/volvo.png";
import hero from "../assets/hero.jpg";
import news1 from "../assets/1.png";
import news2 from "../assets/2.png";
import news3 from "../assets/3.png";
import more from "../assets/more.jpg";
import Select, { StylesConfig } from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentExperienceSlide, setCurrentExperienceSlide] = useState(0);
  const [errors, setErrors] = useState<{ departure?: string; arrival?: string }>({});

  const heroSlides = [hero, mercedez, more];

  const experienceSlides = [
    {
      img: { more },
      title: "Keramahan Awak Bus",
      desc: "Layanan pramugara/i yang ramah siap menemani perjalanan kamu.",
    },
    {
      img: { volvo },
      title: "Kenyamanan Armada",
      desc: "Kursi empuk, AC dingin, dan fasilitas lengkap di setiap perjalanan.",
    },
    {
      img: { mercedez },
      title: "Ketepatan Waktu",
      desc: "Jadwal keberangkatan yang disiplin dan tepat waktu ke setiap tujuan.",
    },
  ];
  const featuredNews = [
    {
      id: 1,
      img: news1,
      title: "Keramahan Awak Bus",
      desc: "Layanan pramugara/i yang ramah siap menemani perjalanan kamu.",
    },
    {
      id: 2,
      img: news2,
      title: "Kenyamanan Armada",
      desc: "Kursi empuk, AC dingin, dan fasilitas lengkap di setiap perjalanan.",
    },
    {
      id: 3,
      img: news3,
      title: "Ketepatan Waktu",
      desc: "Jadwal keberangkatan yang disiplin dan tepat waktu ke setiap tujuan.",
    },
  ];

  const navigate = useNavigate();

  const cities = [
    { value: "tangerang", label: "Tangerang" },
    { value: "jakarta", label: "Jakarta" },
    { value: "bandung", label: "Bandung" },
    { value: "Bogor", label: "Bogor" },
    { value: "Pariaman", label: "Pariaman" },
    { value: "Bukittinggi", label: "Bukittinggi" },
    { value: "Padang", label: "Padang" },
    { value: "Solok", label: "Solok" },
  ];

  const seatOptions = [
    { value: 1, label: "1 Kursi" },
    { value: 2, label: "2 Kursi" },
    { value: 3, label: "3 Kursi" },
    { value: 4, label: "4 Kursi" },
  ];

  const classOptions = [
    { value: "ekonomi", label: "Ekonomi" },
    { value: "bisnis", label: "Bisnis" },
    { value: "eksekutif", label: "Eksekutif" },
  ];

  const customSelectStyles: StylesConfig<{ value: string; label: string }, false> = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "#2A2A2A",
      borderColor: state.isFocused ? "#FBBF24" : "#2A2A2A",
      boxShadow: "none",
      "&:hover": { borderColor: "#FBBF24" },
      color: "#E5E7EB",
    }),
    singleValue: (provided) => ({ ...provided, color: "#E5E7EB" }),
    menu: (provided) => ({ ...provided, backgroundColor: "#1A1A1A" }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#3B3B3B" : "#1A1A1A",
      color: "#E5E7EB",
      cursor: "pointer",
    }),
  };

  const [departureCity, setDepartureCity] = useState<any>(null);
  const [arrivalCity, setArrivalCity] = useState<any>(null);
  const [seatCount, setSeatCount] = useState<any>(seatOptions[0]);
  const [busClass, setBusClass] = useState<any>(classOptions[0]);
  const [departureDate, setDepartureDate] = useState<Date>(new Date());

  const handleSearch = () => {
    let newErrors: { departure?: string; arrival?: string } = {};

    if (!departureCity) newErrors.departure = "Kota Asal wajib diisi";
    if (!arrivalCity) newErrors.arrival = "Kota Tujuan wajib diisi";

    setErrors(newErrors);

    // Jika ada error, jangan lanjut
    if (Object.keys(newErrors).length > 0) return;

    const params = new URLSearchParams({
      from: departureCity.value,
      to: arrivalCity.value,
      date: departureDate.toISOString().split("T")[0],
      seat: String(seatCount.value),
      class: busClass.value,
    });

    navigate(`/search`);
  };

  // Hero Carousel Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  return (
    <div className="min-h-screen flex flex-col bg-[#0F0F0F] text-white font-sans antialiased">
      <Navbar />

      {/* Hero Section - Fade Carousel */}
      <section className="relative h-[400px] md:h-[700px] overflow-hidden">
        {heroSlides.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Overlay gradasi */}
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-br from-black/95 via-black/80 to-red-900/40 z-[1]" />

        {/* Teks utama */}
        <div className="relative z-10 container mx-auto px-4 md:px-6 max-w-6xl flex flex-col justify-center h-full text-center md:text-left">
          <div className="max-w-3xl mx-auto md:mx-0">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-12 md:mb-60">
              Booking Tiket Bus
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 mt-2">Cepat & Nyaman</span>
            </h1>
          </div>
        </div>
      </section>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2 block">Asal</label>
                <Select
                  value={departureCity}
                  onChange={setDepartureCity}
                  options={cities}
                  styles={customSelectStyles}
                  placeholder="Pilih Kota Asal"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2 block">Tujuan</label>
                <Select
                  value={arrivalCity}
                  onChange={setArrivalCity}
                  options={cities}
                  styles={customSelectStyles}
                  placeholder="Pilih Kota Tujuan"
                />
              </div>
            </div> */}
      {/* Search Bar */}
      <section className="container mx-auto px-4 sm:px-6 -mt-32 sm:-mt-60 relative z-20 max-w-7xl">
        <Card className="p-4 sm:p-8 bg-[#1A1A1A] shadow-lg rounded-2xl border border-gray-800">
          <div className="space-y-6 text-white">
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2 block">Asal</label>
                <Select
                  value={departureCity}
                  onChange={(val) => {
                    setDepartureCity(val);
                    setErrors({ ...errors, departure: undefined });
                  }}
                  options={cities}
                  styles={customSelectStyles}
                  placeholder="Pilih Kota Asal"
                />
                {errors.departure && <p className="text-red-500 text-xs mt-1">{errors.departure}</p>}
              </div>

              {/* Tujuan */}
              <div>
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2 block">Tujuan</label>
                <Select
                  value={arrivalCity}
                  onChange={(val) => {
                    setArrivalCity(val);
                    setErrors({ ...errors, arrival: undefined });
                  }}
                  options={cities}
                  styles={customSelectStyles}
                  placeholder="Pilih Kota Tujuan"
                />
                {errors.arrival && <p className="text-red-500 text-xs mt-1">{errors.arrival}</p>}
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 items-end">
              {/* Tanggal */}
              <div className="flex flex-col">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2 block">Tanggal Keberangkatan</label>
                <DatePicker
                  selected={departureDate}
                  onChange={(date) => setDepartureDate(date!)}
                  className="w-full h-[48px] sm:h-[56px] px-4 rounded-xl bg-[#2A2A2A] border border-gray-700 text-gray-200 focus:border-yellow-400 focus:outline-none text-sm"
                  minDate={new Date()}
                  dateFormat="dd/MM/yyyy"
                />
              </div>

              {/* Jumlah Kursi */}
              <div className="flex flex-col">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2 block">Jumlah Kursi</label>
                <Select
                  value={seatCount}
                  onChange={setSeatCount}
                  options={seatOptions}
                  styles={customSelectStyles}
                />
              </div>

              {/* Kelas */}
              <div className="flex flex-col">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2 block">Kelas</label>
                <Select
                  value={busClass}
                  onChange={setBusClass}
                  options={classOptions}
                  styles={customSelectStyles}
                />
              </div>

              {/* Tombol Cari */}
              <div className="flex flex-col">
                <label className="text-xs font-semibold text-transparent mb-2 block select-none">Cari</label>
                <Button
                  onClick={handleSearch}
                  className="w-full h-[48px] sm:h-[56px] rounded-xl bg-gradient-to-r from-red-600 to-yellow-500 hover:from-red-700 hover:to-yellow-400 text-white font-semibold shadow-lg transition-all text-sm sm:text-base"
                >
                  <Search className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Cari Tiket
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Experience Carousel - Fade Effect */}
      {/* <section className="bg-[#d1d1d1] container mx-auto px-6 py-24 max-w-full">
        <div className="relative max-w-6xl mx-auto">
          <div className="relative h-[200px] rounded-2xl overflow-hidden">
            {experienceSlides.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${index === currentExperienceSlide ? "opacity-100" : "opacity-0"}`}
              >
                <div className="bg-[#1A1A1A] rounded-2xl overflow-hidden shadow-xl border border-gray-800 h-full">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />
                  </div>
                  <div className="p-8 text-center">
                    <h3 className="text-2xl font-bold text-yellow-400 mb-3">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed text-lg">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {experienceSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentExperienceSlide(i)}
                className={`h-2 rounded-full transition-all ${i === currentExperienceSlide ? "bg-yellow-400 w-8" : "bg-gray-600 w-2 hover:bg-gray-500"}`}
              />
            ))}
          </div>
        </div>

      </section> */}

      {/* Berita Terbaru */}
      <section className="bg-[#1d1d1d] py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1b1b1b] mb-8 text-center md:text-left">Berita Terbaru</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredNews.map((news) => (
              <div
                key={news.id}
                className="bg-[#303030] rounded-2xl overflow-hidden shadow-md flex flex-col hover:-translate-y-1 hover:shadow-xl transition-all"
              >
                {/* Gambar responsif */}
                <div className="h-52 sm:h-56 md:h-full overflow-hidden">
                  <img
                    src={news.img}
                    alt={news.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Konten */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 sm:mb-3">{news.title}</h3>
                    <p className="text-gray-300 text-sm sm:text-base mb-4 line-clamp-3">{news.desc}</p>
                  </div>

                  <Link
                    to={`/news/${news.id}`}
                    className="text-red-500 font-semibold hover:underline flex items-center gap-1 text-sm sm:text-base"
                  >
                    Lihat Selengkapnya <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Agen */}
      <section className=" container mx-auto px-4 sm:px-6 py-16 sm:py-24 max-w-7xl">
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-yellow-400 font-semibold text-xs sm:text-sm uppercase tracking-wider">Agen Resmi</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-2">Temukan Agen Kami</h2>
          <p className="text-gray-400 mt-2 text-sm sm:text-lg max-w-2xl mx-auto">Daftar lokasi agen resmi BusTicket di seluruh Indonesia</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            {
              id: 1,
              name: "Agen Tangerang",
              city: "Tangerang",
              address: "Jl. Merdeka No.12, Tangerang",
              img: mercedez,
            },
            {
              id: 2,
              name: "Agen Jakarta",
              city: "Jakarta",
              address: "Jl. Sudirman No.45, Jakarta Pusat",
              img: volvo,
            },
            {
              id: 3,
              name: "Agen Bandung",
              city: "Bandung",
              address: "Jl. Asia Afrika No.88, Bandung",
              img: more,
            },
            {
              id: 4,
              name: "Agen Bogor",
              city: "Bogor",
              address: "Jl. Malioboro No.77, Bogor",
              img: hero,
            },
          ].map((agent) => (
            <Card
              key={agent.id}
              className="bg-[#1A1A1A] border border-gray-800 rounded-2xl shadow-lg hover:border-yellow-400 transition-all overflow-hidden"
            >
              {/* Gambar Agen */}
              <div className="h-40 sm:h-48 md:h-56 overflow-hidden">
                <img
                  src={agent.img}
                  alt={agent.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Detail Agen */}
              <div className="p-5 sm:p-6 text-center sm:text-left">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">{agent.name}</h3>
                <p className="text-gray-300 text-sm">{agent.city}</p>
                <p className="text-gray-400 text-xs mt-1">{agent.address}</p>
                <Link
                  to={`/agents/${agent.id}`}
                  className="inline-block mt-4 text-red-500 font-semibold hover:underline text-sm sm:text-base"
                >
                  Lihat Detail
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials - Enhanced */}
      <section className="bg-[#d1d1d1] px-6 py-24">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#1b1b1b] font-semibold text-sm uppercase tracking-wider">Testimoni</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1b1b1b] mb-4">
            Kata <span className="text-yellow-400">Penumpang</span>
          </h2>
          <p className="text-[#1d1d1d] text-lg">Cerita nyata dari pelanggan BusTicket</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Dewi Lestari",
              rating: 5,
              comment: "Pelayanan cepat, bus nyaman, dan on-time banget. Recommended!",
            },
            {
              name: "Rizky Pratama",
              rating: 5,
              comment: "Booking gampang, bisa pilih kursi langsung. Prosesnya cepet banget!",
            },
            {
              name: "Fadhil Ananda",
              rating: 4,
              comment: "Bus bersih dan supirnya ramah. Pengalaman menyenangkan!",
            },
          ].map((review, index) => (
            <Card
              key={index}
              className="p-8 bg-[#1A1A1A] border-2 border-gray-800 hover:border-yellow-400 transition-all rounded-2xl group"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-700 text-gray-700"}`}
                  />
                ))}
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed text-lg">"{review.comment}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold">{review.name.charAt(0)}</div>
                <div>
                  <p className="font-semibold text-white">{review.name}</p>
                  <p className="text-sm text-gray-500">Penumpang Setia</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
