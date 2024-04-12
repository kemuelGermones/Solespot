import { type Image } from "@prisma/client";

interface Product {
  id: string;
  name: string;
  size: string;
  price: number;
  brand: string;
  about: string;
  gender: string;
  createdAt: Date;
  category: string;
  description: string;
  images: {
    image: Image;
  }[];
}

export default Product;
