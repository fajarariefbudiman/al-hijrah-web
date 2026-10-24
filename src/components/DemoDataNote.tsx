import { Info } from "lucide-react";

/** Label kecil penanda bahwa data di sekitarnya hanya ilustrasi. */
const DemoDataNote = ({
  label = "Data ilustratif · simulasi",
  className = "",
}: {
  label?: string;
  className?: string;
}) => (
  <span
    className={`inline-flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-900 ${className}`}
  >
    <Info className='h-3.5 w-3.5 shrink-0' aria-hidden='true' />
    {label}
  </span>
);

export default DemoDataNote;
