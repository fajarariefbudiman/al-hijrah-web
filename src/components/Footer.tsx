import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Facebook, Instagram, Twitter } from "lucide-react";
import logo from "../assets/al-hijrah-logo-rm.png";
import gopay from "../assets/gopay.jfif";
import dana from "../assets/dana.jfif";
import visa from "../assets/visa.jfif";
import qris from "../assets/qris-logo.png";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 border-t border-amber-300 shadow-inner">
      <div className="container mx-auto px-6 py-12 space-y-10">
        {/* ===== GRID UTAMA ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* === Kolom 1: Logo & Deskripsi === */}
          <div>
            <img
              src={logo}
              alt="Logo"
              className="h-12 w-auto mb-4"
            />
            <p className="text-sm text-gray-600 leading-relaxed">Platform pemesanan bus modern dengan pengalaman perjalanan yang nyaman dan aman. Pilih rute, pesan tiket, dan nikmati perjalanan tanpa ribet!</p>
          </div>

          {/* === Kolom 2: Navigasi === */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4 uppercase tracking-wide">Navigasi</h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "Bus", path: "/buses" },
                { name: "Rute", path: "/routes" },
                { name: "Tentang Kami", path: "/about" },
                { name: "Kontak", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="hover:text-amber-600 transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* === Kolom 3: Pembayaran + Sosial Media === */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4 uppercase tracking-wide">Pembayaran & Sosial</h3>

            {/* Logo Metode Pembayaran */}
            <div className="flex flex-wrap gap-4 mb-5">
              {[visa, qris, gopay, dana].map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt="payment-logo"
                  className="h-10 w-auto bg-gray-100 p-2 rounded-md hover:bg-amber-50 border border-amber-100 transition"
                />
              ))}
            </div>

            {/* Sosial Media */}
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="p-2 bg-amber-100 rounded-lg hover:bg-amber-200 transition"
                >
                  <Icon className="h-5 w-5 text-amber-700" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ===== Garis Bawah Pertama ===== */}
        <div className="border-t border-amber-200"></div>

        {/* ===== Nama PT & Alamat ===== */}
        <div className="text-center space-y-3">
          <h3 className="text-lg font-semibold text-amber-700">PT Al-Hijrah Transport Indonesia</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-amber-600" />
              <span>Jl. Terminal Raya No. 21, Jakarta Selatan, Indonesia</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-amber-600" />
              <span>+62 812 3456 7890</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-amber-600" />
              <span>support@alhijrahtravel.com</span>
            </div>
          </div>
        </div>

        {/* ===== Garis Bawah Kedua ===== */}
        <div className="border-t border-amber-200"></div>

        {/* ===== COPYRIGHT ===== */}
        <div className="text-center text-sm text-gray-500 space-y-2">
          <p>
            &copy; {new Date().getFullYear()} <span className="text-amber-600 font-semibold">PT Al-Hijrah Transport Indonesia</span>. Semua hak cipta dilindungi.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="hover:text-amber-600"
            >
              Kebijakan Privasi
            </a>
            <a
              href="#"
              className="hover:text-amber-600"
            >
              Syarat & Ketentuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
