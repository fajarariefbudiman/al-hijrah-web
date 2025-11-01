import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { MapPin, Clock, Star, Bus } from "lucide-react";

interface BusCardProps {
  id: string;
  name: string;
  image: string;
  departure: string;
  arrival: string;
  time: string;
  seatAvailable: number;
  price: number;
  rating: number;
  discount?: number;
  available?: boolean;
}

const BusCard = ({ id, name, image, departure, arrival, time, seatAvailable, price, rating, discount = 0, available = true }: BusCardProps) => {
  const navigate = useNavigate();

  const finalPrice = discount > 0 ? price - (price * discount) / 100 : price;

  return (
    <Card className={`group overflow-hidden relative transition-all duration-300 ${!available ? "opacity-60 grayscale" : "hover:shadow-[0_0_20px_rgba(255,0,0,0.5)]"} bg-[#111] border border-red-700`}>
      {/* Gambar Bus */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Diskon */}
        {discount > 0 && <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">-{discount}%</div>}

        {/* Rating */}
        <div className="absolute top-4 right-4 bg-black/70 text-yellow-400 px-3 py-1 rounded-full flex items-center gap-1">
          <Star className="h-4 w-4 fill-yellow-400" />
          <span className="text-sm font-medium">{rating}</span>
        </div>

        {/* Status */}
        {!available && (
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
            <span className="text-white font-semibold text-lg">Kursi Habis</span>
          </div>
        )}
      </div>

      {/* Konten */}
      <CardContent className="p-5 text-white">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-2xl font-bold text-red-500">{name}</h3>
          <Bus className="h-6 w-6 text-yellow-400" />
        </div>

        {/* Tujuan */}
        <div className="flex items-center gap-2 text-gray-300 mb-2">
          <MapPin className="h-4 w-4 text-yellow-400" />
          <span className="text-sm">
            {departure} → {arrival}
          </span>
        </div>

        {/* Waktu & Kursi */}
        <div className="flex items-center justify-between text-gray-400 text-sm mb-4">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-yellow-400" />
            <span>{time}</span>
          </div>
          <span>{seatAvailable > 0 ? `${seatAvailable} kursi tersisa` : "Penuh"}</span>
        </div>

        {/* Harga */}
        <div className="mb-4">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-yellow-400">Rp {finalPrice.toLocaleString("id-ID")}</span>
            {discount > 0 && <span className="text-sm line-through text-gray-500">Rp {price.toLocaleString("id-ID")}</span>}
          </div>
          <span className="text-xs text-gray-400">per tiket</span>
        </div>

        {/* Tombol Aksi */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            className="flex-1 border-red-600 text-red-500 hover:bg-red-600 hover:text-white"
            onClick={() => navigate(`/bus/${id}`)}
          >
            Detail
          </Button>
          <Button
            disabled={!available}
            className={`flex-1 ${available ? "bg-red-600 hover:bg-red-700 text-white" : "bg-gray-700 text-gray-400"}`}
            onClick={() => navigate(`/booking?bus=${id}`)}
          >
            {available ? "Pesan Sekarang" : "Tidak Tersedia"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BusCard;
