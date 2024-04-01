import { type Image } from "@prisma/client";

interface Product {
  id: string;
  name: string;
  price: number;
  brand: string;
  category: string;
  gender: string;
  size: string;
  description: string;
  about: string;
  createdAt: Date;
  images: {
    image: Image;
  }[];
}

export default Product;
