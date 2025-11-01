import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Card } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import bgBus from "../assets/more.jpg"; 


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A] text-gray-200">
      <Navbar />

      {/* Header */}
      {/* HERO */}
      <section
        className="relative pt-28 pb-24 text-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgBus})`,
        }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">Hubungi Kami</h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">Tim Al-Hijrah siap membantu Anda untuk pemesanan, kerja sama, atau informasi seputar layanan transportasi kami.</p>
        </div>
      </section>

      {/* Konten */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Formulir */}
          <div>
            <h2 className="text-2xl font-bold text-amber-400 mb-6">Kirim Pesan</h2>
            <Card className="p-6 bg-white/5 border border-white/10 backdrop-blur-md">
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div>
                  <Label htmlFor="name">Nama</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Nama lengkap Anda"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-transparent border-amber-400/30 focus:border-amber-400"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="emailanda@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-transparent border-amber-400/30 focus:border-amber-400"
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Subjek</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Subjek pesan Anda"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-transparent border-amber-400/30 focus:border-amber-400"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Pesan</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tulis pesan Anda di sini..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-transparent border-amber-400/30 focus:border-amber-400"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold transition-all"
                >
                  Kirim Pesan
                </Button>
              </form>
            </Card>
          </div>

          {/* Informasi Kontak */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-amber-400 mb-4">Informasi Kontak</h2>

            <Card className="p-6 bg-white/5 border border-white/10 flex items-start gap-4">
              <MapPin className="h-6 w-6 text-amber-400 mt-1" />
              <div>
                <h3 className="font-semibold text-white mb-1">Alamat Kantor</h3>
                <p className="text-gray-400">
                  Jl. Raya Pondok Cabe No. 89 <br />
                  Tangerang Selatan, Banten 15418 <br />
                  Indonesia
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-white/5 border border-white/10 flex items-start gap-4">
              <Phone className="h-6 w-6 text-amber-400 mt-1" />
              <div>
                <h3 className="font-semibold text-white mb-1">Telepon</h3>
                <p className="text-gray-400">
                  Admin: +62 812-1234-5678 <br />
                  Reservasi: +62 811-9876-5432
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-white/5 border border-white/10 flex items-start gap-4">
              <Mail className="h-6 w-6 text-amber-400 mt-1" />
              <div>
                <h3 className="font-semibold text-white mb-1">Email</h3>
                <p className="text-gray-400">
                  info@alhijrahbus.co.id <br />
                  support@alhijrahbus.co.id
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-white/5 border border-white/10 flex items-start gap-4">
              <Clock className="h-6 w-6 text-amber-400 mt-1" />
              <div>
                <h3 className="font-semibold text-white mb-1">Jam Operasional</h3>
                <p className="text-gray-400">
                  Senin - Jumat: 08.00 - 21.00 <br />
                  Sabtu: 09.00 - 18.00 <br />
                  Minggu & Hari Libur: Tutup
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
