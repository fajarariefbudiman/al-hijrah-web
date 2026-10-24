import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  Bus,
  CreditCard,
  LayoutDashboard,
  Map,
  MessageCircle,
  Search,
  ShieldCheck,
  Ticket,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Card } from "../components/ui/card";
import { DIGIAT, digiatLinks } from "../config/digiat";

const AboutPrototype = () => {
  const contacts = digiatLinks();

  const purposes = [
    {
      icon: <Bus className='h-7 w-7' />,
      title: "Mengenal Armada",
      desc: "Calon penumpang dapat melihat pilihan tipe bus dan fasilitasnya dalam satu tampilan.",
    },
    {
      icon: <Map className='h-7 w-7' />,
      title: "Menjelajahi Rute",
      desc: "Informasi rute dan jadwal tersaji rapi sehingga pertanyaan berulang ke admin berpotensi berkurang.",
    },
    {
      icon: <Ticket className='h-7 w-7' />,
      title: "Mencoba Alur Pemesanan",
      desc: "Alur cari rute, pilih kursi, hingga pembayaran dapat dicoba secara interaktif sebagai simulasi.",
    },
  ];

  const demos = [
    { icon: <Bus className='h-5 w-5' />, title: "Katalog Armada", to: "/bus" },
    { icon: <Map className='h-5 w-5' />, title: "Rute & Jadwal", to: "/routes" },
    { icon: <Search className='h-5 w-5' />, title: "Cari Tiket", to: "/search" },
    {
      icon: <CreditCard className='h-5 w-5' />,
      title: "Booking & Pembayaran (Simulasi)",
      to: "/search",
    },
  ];

  const ideas = [
    {
      icon: <MessageCircle className='h-6 w-6' />,
      title: "Integrasi WhatsApp",
      desc: "Memudahkan calon penumpang menghubungi admin langsung dari halaman armada dan rute.",
    },
    {
      icon: <LayoutDashboard className='h-6 w-6' />,
      title: "Dashboard Admin",
      desc: "Pengelolaan jadwal, harga, dan ketersediaan kursi tanpa mengubah kode.",
    },
    {
      icon: <CreditCard className='h-6 w-6' />,
      title: "Pembayaran Resmi",
      desc: "Pembayaran melalui penyedia payment gateway resmi dengan persetujuan PO.",
    },
    {
      icon: <BarChart3 className='h-6 w-6' />,
      title: "Analitik Minat",
      desc: "Melihat halaman dan rute yang paling banyak dibuka untuk membantu keputusan bisnis.",
    },
  ];

  return (
    <div className='min-h-screen flex flex-col bg-white text-gray-800'>
      <Navbar />

      <main className='flex-1'>
        {/* ===== HERO ===== */}
        <section className='bg-gradient-to-br from-amber-50 via-white to-yellow-50 px-4 py-16 sm:py-24'>
          <div className='container mx-auto max-w-4xl text-center'>
            <span className='inline-block rounded-full border border-amber-300 bg-amber-50 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-amber-800'>
              Prototype Independen · By {DIGIAT.name}
            </span>
            <h1 className='mt-5 text-3xl font-extrabold text-gray-900 sm:text-5xl'>
              Konsep Website Digital{" "}
              <span className='text-amber-600'>PO Al-Hijrah</span>
            </h1>
            <p className='mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-lg'>
              Sebuah demonstrasi pengalaman digital yang membantu calon
              penumpang mengenal armada, menjelajahi rute, dan mencoba alur
              pemesanan secara interaktif.
            </p>
            <p className='mt-3 text-sm font-medium text-amber-800'>
              Bukan website resmi. Semua data perjalanan dan transaksi
              merupakan simulasi.
            </p>
            <div className='mt-8 flex flex-wrap justify-center gap-3'>
              <Link
                to='/search'
                className='inline-flex items-center gap-2 rounded-xl bg-amber-500 px-6 py-3 font-semibold text-white shadow hover:bg-amber-600 transition'
              >
                Coba Demo <ArrowRight className='h-4 w-4' />
              </Link>
              <Link
                to='/bus'
                className='inline-flex items-center rounded-xl border border-amber-400 px-6 py-3 font-semibold text-amber-700 hover:bg-amber-50 transition'
              >
                Lihat Katalog Armada
              </Link>
            </div>
          </div>
        </section>

        {/* ===== TUJUAN ===== */}
        <section className='container mx-auto max-w-6xl px-4 py-14 sm:py-20'>
          <h2 className='mb-8 text-center text-2xl font-bold text-gray-900 sm:text-3xl'>
            Tujuan Prototype
          </h2>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
            {purposes.map((p) => (
              <Card
                key={p.title}
                className='border border-gray-200 bg-white p-6 shadow-md'
              >
                <div className='mb-3 text-amber-600'>{p.icon}</div>
                <h3 className='mb-2 text-lg font-semibold text-gray-900'>
                  {p.title}
                </h3>
                <p className='text-sm text-gray-600'>{p.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* ===== YANG BISA DICOBA ===== */}
        <section className='bg-gray-50 px-4 py-14 sm:py-20'>
          <div className='container mx-auto max-w-4xl'>
            <h2 className='mb-2 text-center text-2xl font-bold text-gray-900 sm:text-3xl'>
              Yang Bisa Dicoba
            </h2>
            <p className='mb-8 text-center text-sm text-gray-600'>
              Seluruh data pada halaman berikut bersifat ilustratif.
            </p>
            <div className='grid grid-cols-1 gap-3 sm:grid-cols-2'>
              {demos.map((d) => (
                <Link
                  key={d.title}
                  to={d.to}
                  className='flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:border-amber-400 hover:shadow-md'
                >
                  <span className='flex items-center gap-3 font-medium text-gray-900'>
                    <span className='text-amber-600'>{d.icon}</span>
                    {d.title}
                  </span>
                  <ArrowRight className='h-4 w-4 text-gray-400' />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ===== POTENSI PENGEMBANGAN ===== */}
        <section className='container mx-auto max-w-6xl px-4 py-14 sm:py-20'>
          <h2 className='mb-2 text-center text-2xl font-bold text-gray-900 sm:text-3xl'>
            Peluang Pengembangan
          </h2>
          <p className='mx-auto mb-8 max-w-2xl text-center text-sm text-gray-600'>
            Arah yang dapat dibahas bersama jika PO tertarik. Manfaatnya masih
            berupa potensi dan belum terukur; prioritas disesuaikan dengan
            kebutuhan dan anggaran PO.
          </p>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
            {ideas.map((i) => (
              <Card
                key={i.title}
                className='flex gap-4 border border-gray-200 bg-white p-5 shadow-sm'
              >
                <div className='mt-1 text-amber-600'>{i.icon}</div>
                <div>
                  <h3 className='font-semibold text-gray-900'>{i.title}</h3>
                  <p className='mt-1 text-sm text-gray-600'>{i.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* ===== TRANSPARANSI ===== */}
        <section className='bg-amber-50 px-4 py-14 sm:py-16'>
          <div className='container mx-auto max-w-3xl'>
            <h2 className='mb-4 flex items-center justify-center gap-2 text-xl font-bold text-amber-900 sm:text-2xl'>
              <ShieldCheck className='h-6 w-6' /> Transparansi & Batasan
            </h2>
            <ul className='list-disc space-y-2 pl-5 text-sm text-amber-950 sm:text-base'>
              <li>
                Prototype ini dibuat secara independen oleh {DIGIAT.name},
                tanpa afiliasi atau persetujuan resmi dari PO Al-Hijrah.
              </li>
              <li>
                Nama dan elemen visual dipakai sebagai referensi konsep, bukan
                tanda kerja sama.
              </li>
              <li>
                Jadwal, harga, ketersediaan kursi, armada, ulasan, booking, dan
                pembayaran adalah data ilustratif dan simulasi.
              </li>
              <li>
                Tidak ada tiket, transaksi, akun, atau pesan yang benar-benar
                diproses. Mohon tidak memasukkan data pribadi.
              </li>
            </ul>
          </div>
        </section>

        {/* ===== KONTAK ===== */}
        <section className='px-4 py-14 text-center sm:py-20'>
          <div className='container mx-auto max-w-2xl'>
            <h2 className='text-2xl font-bold text-gray-900 sm:text-3xl'>
              Tertarik Berdiskusi?
            </h2>
            <p className='mt-3 text-sm text-gray-600 sm:text-base'>
              {DIGIAT.name} ingin mendengar kebutuhan bisnis PO terlebih
              dahulu, lalu menyesuaikan fitur, bukan sebaliknya.
            </p>
            <div className='mt-6 flex flex-wrap justify-center gap-3'>
              {contacts.length > 0 ? (
                contacts.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='rounded-xl bg-amber-500 px-6 py-3 font-semibold text-white shadow hover:bg-amber-600 transition'
                  >
                    {c.label}
                  </a>
                ))
              ) : (
                <p className='text-sm text-gray-500'>
                  Silakan hubungi {DIGIAT.name} melalui pengirim tautan
                  prototype ini.
                </p>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPrototype;
