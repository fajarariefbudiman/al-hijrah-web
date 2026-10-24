import { useState } from "react";
import { Link } from "react-router-dom";
import { Info } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { DIGIAT } from "../config/digiat";

/**
 * Lapisan 1: badge ringkas yang selalu terlihat.
 * Lapisan 2: penjelasan lengkap di dalam dialog "Info lengkap".
 */
const PrototypeNotice = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      role='note'
      aria-label='Informasi prototype'
      className='relative z-[60] border-b border-amber-200 bg-amber-50 text-amber-950'
    >
      <div className='container mx-auto flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 px-4 py-1.5 text-[11px] leading-snug sm:text-xs'>
        <Info className='h-3.5 w-3.5 shrink-0' aria-hidden='true' />
        <p>
          <strong className='font-semibold'>Prototype Konsep</strong>
          <span className='mx-1.5 opacity-50'>·</span>
          Dikembangkan oleh {DIGIAT.name}
          <span className='mx-1.5 opacity-50'>·</span>
          Bukan Website Resmi
        </p>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button
              type='button'
              className='font-semibold underline underline-offset-2 hover:text-amber-700'
            >
              Info lengkap
            </button>
          </DialogTrigger>
          <DialogContent className='max-w-lg'>
            <DialogHeader>
              <DialogTitle>Tentang Prototype Ini</DialogTitle>
              <DialogDescription>
                Penjelasan singkat agar tidak ada kesalahpahaman.
              </DialogDescription>
            </DialogHeader>
            <ul className='list-disc space-y-2 pl-5 text-sm text-gray-700'>
              <li>
                Ini adalah prototype konsep independen yang dibuat oleh{" "}
                {DIGIAT.name} untuk mendemonstrasikan pengalaman digital
                layanan bus.
              </li>
              <li>
                Tidak berafiliasi dan belum mendapat persetujuan resmi dari PO
                Al-Hijrah. Nama dan visual dipakai hanya sebagai referensi
                konsep.
              </li>
              <li>
                Jadwal, harga, armada, ulasan, booking, dan pembayaran adalah
                data ilustratif dan simulasi. Tidak ada tiket atau transaksi
                sungguhan.
              </li>
              <li>
                Jangan memasukkan data pribadi atau data pembayaran asli. Tidak
                ada data yang dikirim ke server.
              </li>
            </ul>
            <Link
              to='/about-prototype'
              onClick={() => setOpen(false)}
              className='inline-flex w-fit items-center rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-600'
            >
              Baca selengkapnya
            </Link>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default PrototypeNotice;
