/**
 * Identitas & kontak DiGiat yang ditampilkan di prototype.
 * Isi sesuai kebutuhan; kolom yang dikosongkan otomatis tidak ditampilkan.
 */
export const DIGIAT = {
  name: "DiGiat",
  /** Nomor WhatsApp format internasional tanpa +, contoh: "6281234567890" */
  whatsapp: "",
  /** Username Instagram tanpa @, contoh: "digiat.id" */
  instagram: "",
  /** Email, contoh: "halo@digiat.id" */
  email: "",
};

export const digiatLinks = () =>
  [
    DIGIAT.whatsapp && { label: "WhatsApp", href: `https://wa.me/${DIGIAT.whatsapp}` },
    DIGIAT.instagram && { label: "Instagram", href: `https://instagram.com/${DIGIAT.instagram}` },
    DIGIAT.email && { label: "Email", href: `mailto:${DIGIAT.email}` },
  ].filter(Boolean) as { label: string; href: string }[];
