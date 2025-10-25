import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";/ui/card
import { Card, CardConte./ui/button@/components/ui/card";
import { Users, Maximize2, Wifi, Coffee, Star } from "lucide-react";

interface RoomCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  capacity: number;
  size: number;
  rating: number;
  amenities?: string[];
}

const RoomCard = ({ id, name, image, price, capacity, size, rating }: RoomCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="group overflow-hidden hover:shadow-hover transition-smooth">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">{rating}</span>
        </div>
      </div>

      <CardContent className="p-5">
        <h3 className="text-xl font-semibold text-secondary mb-3">{name}</h3>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{capacity} Guests</span>
          </div>
          <div className="flex items-center gap-1">
            <Maximize2 className="h-4 w-4" />
            <span>{size}m²</span>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <Wifi className="h-4 w-4 text-primary" />
          <Coffee className="h-4 w-4 text-primary" />
          <span className="text-sm text-muted-foreground">+5 amenities</span>
        </div>

        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold text-primary">${price}</span>
          <span className="text-sm text-muted-foreground">/night</span>
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-0 gap-2">
        <Button
          variant="outline"
          className="flex-1 border-sky-blue text-sky-blue hover:bg-sky-blue hover:text-white"
          onClick={() => navigate(`/room/${id}`)}
        >
          View Details
        </Button>
        <Button
          className="flex-1 bg-sky-blue hover:bg-sky-blue/90 text-white"
          onClick={() => navigate(`/booking?room=${id}`)}
        >
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RoomCard;
