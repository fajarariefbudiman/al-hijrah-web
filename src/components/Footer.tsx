import { Link } from "react-router-dom";
import logo from "../assets/al-hijrah-logo-rm.png";
import { DIGIAT, digiatLinks } from "../config/digiat";

const Footer = () => {
  const contacts = digiatLinks();

  return (
    <footer className='bg-white text-gray-700 border-t border-amber-300 shadow-inner'>
      <div className='container mx-auto px-6 py-12 space-y-10'>
        {/* ===== GRID UTAMA ===== */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
          {/* === Kolom 1: Logo & Deskripsi === */}
          <div>
            <img src={logo} alt='Logo' className='h-12 w-auto mb-4' />
            <p className='text-sm text-gray-600 leading-relaxed'>
              Prototype konsep website layanan transportasi untuk menunjukkan
              pengalaman pencarian rute, armada, dan simulasi pemesanan. Bukan
              layanan operasional atau website resmi PO.
            </p>
          </div>

          {/* === Kolom 2: Navigasi === */}
          <div>
            <h3 className='text-gray-900 font-semibold mb-4 uppercase tracking-wide'>
              Navigasi
            </h3>
            <ul className='space-y-2 text-sm'>
              {[
                { name: "Home", path: "/" },
                { name: "Bus", path: "/bus" },
                { name: "Rute", path: "/routes" },
                { name: "Tentang Kami", path: "/about" },
                { name: "Kontak", path: "/contact" },
                { name: "Tentang Prototype", path: "/about-prototype" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className='hover:text-amber-600 transition'
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* === Kolom 3: Developer === */}
          <div>
            <h3 className='text-gray-900 font-semibold mb-4 uppercase tracking-wide'>
              Dikembangkan oleh
            </h3>
            <p className='text-lg font-semibold text-amber-700 mb-2'>
              {DIGIAT.name}
            </p>
            <p className='text-sm text-gray-600 leading-relaxed mb-4'>
              Prototype independen untuk mendemonstrasikan konsep website
              digital layanan bus.
            </p>
            <div className='flex flex-wrap gap-2'>
              <Link
                to='/about-prototype'
                className='rounded-lg bg-amber-100 px-3 py-2 text-sm font-medium text-amber-800 hover:bg-amber-200 transition'
              >
                Tentang Prototype Ini
              </Link>
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='rounded-lg border border-amber-200 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-amber-50 transition'
                >
                  {c.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className='border-t border-amber-200'></div>

        {/* ===== Disclaimer ===== */}
        <div className='text-center space-y-3'>
          <p className='mx-auto max-w-3xl text-sm leading-relaxed text-gray-600'>
            Proyek demonstrasi tidak resmi dan tidak berafiliasi dengan PO
            Al-Hijrah. Nama serta elemen visual digunakan sebagai referensi
            konsep, bukan tanda persetujuan atau kerja sama. Seluruh informasi
            layanan adalah data ilustratif.
          </p>
        </div>

        <div className='border-t border-amber-200'></div>

        {/* ===== COPYRIGHT ===== */}
        <div className='text-center text-sm text-gray-500'>
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className='text-amber-600 font-semibold'>{DIGIAT.name}</span>
            . Prototype demonstrasi independen — bukan website resmi PO
            Al-Hijrah.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
