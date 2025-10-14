import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "../components/ui/card";
import { Button } from "../components/ui/button";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  color: string;
}

const ProductCard = ({ id, name, price, image, color }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-border bg-card">
      <Link to={`/product/${id}`}>
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-card-foreground">{name}</h3>
        <p className="text-2xl font-bold text-primary">${price.toLocaleString()}</p>
        <p className="text-sm text-muted-foreground mt-1">Color: {color}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link to={`/product/${id}`} className="w-full">
          <Button variant="outline" className="w-full">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
