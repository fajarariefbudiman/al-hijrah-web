import bikeProduct1 from "../assets/bike-product-1.jpg";
import bikeProduct2 from "../assets/bike-product-2.jpg";
import bikeProduct3 from "../assets/bike-product-3.jpg";
import bikeProduct4 from "../assets/bike-product-4.jpg";
import bikeProduct5 from "../assets/bike-product-5.jpg";
import bikeProduct6 from "../assets/bike-product-6.jpg";

export interface Product {
  id: number;
  name: string;
  price: number;
  color: string;
  image: string;
  description: string;
  specifications: {
    engine: string;
    cc: number;
    colors: string[];
  };
  images: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "RedLine Racer 1000",
    price: 18999,
    color: "Red",
    image: bikeProduct1,
    description: "Experience unmatched speed and agility with the RedLine Racer 1000. Built for thrill-seekers who demand premium performance.",
    specifications: {
      engine: "V-Twin",
      cc: 1000,
      colors: ["Red", "Black"],
    },
    images: [bikeProduct1, bikeProduct2, bikeProduct3],
  },
  {
    id: 2,
    name: "Shadow Cruiser X",
    price: 16499,
    color: "Black",
    image: bikeProduct2,
    description: "The Shadow Cruiser X combines sleek design with powerful performance for the ultimate riding experience.",
    specifications: {
      engine: "Inline-4",
      cc: 900,
      colors: ["Black", "Silver"],
    },
    images: [bikeProduct2, bikeProduct1, bikeProduct4],
  },
  {
    id: 3,
    name: "Storm Rider Pro",
    price: 21999,
    color: "White",
    image: bikeProduct3,
    description: "Dominate the road with the Storm Rider Pro. Advanced technology meets aggressive styling.",
    specifications: {
      engine: "V4",
      cc: 1200,
      colors: ["White", "Black", "Red"],
    },
    images: [bikeProduct3, bikeProduct5, bikeProduct2],
  },
  {
    id: 4,
    name: "Thunder Blue Elite",
    price: 19999,
    color: "Blue",
    image: bikeProduct4,
    description: "Electrifying performance wrapped in stunning blue aesthetics. The Thunder Blue Elite is pure adrenaline.",
    specifications: {
      engine: "Parallel Twin",
      cc: 950,
      colors: ["Blue", "Black"],
    },
    images: [bikeProduct4, bikeProduct6, bikeProduct1],
  },
  {
    id: 5,
    name: "Crimson Speed GT",
    price: 22999,
    color: "Red",
    image: bikeProduct5,
    description: "Push the limits with the Crimson Speed GT. Engineered for maximum velocity and precision handling.",
    specifications: {
      engine: "V-Twin Turbo",
      cc: 1100,
      colors: ["Red", "White"],
    },
    images: [bikeProduct5, bikeProduct3, bikeProduct2],
  },
  {
    id: 6,
    name: "Midnight Phantom",
    price: 17499,
    color: "Black",
    image: bikeProduct6,
    description: "Silent power meets mysterious elegance in the Midnight Phantom. Own the night.",
    specifications: {
      engine: "Inline-3",
      cc: 850,
      colors: ["Black", "Gray"],
    },
    images: [bikeProduct6, bikeProduct2, bikeProduct4],
  },
];
