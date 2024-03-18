import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const CATEGORIES = [
  {
    id: 1,
    name: "Basketball",
    filename: "/basketball.webp",
  },
  {
    id: 2,
    name: "Lifestyle",
    filename: "/lifestyle.webp",
  },
  {
    id: 3,
    name: "Apparel",
    filename: "/apparel.webp",
  },
];

export default function ProductCategoryCards() {
  return (
    <div className="grid h-[calc(100vh-4rem)] md:grid-cols-3">
      {CATEGORIES.map((category) => (
        <div className="relative" key={category.id}>
          <Image
            className="object-cover"
            quality={100}
            fill={true}
            draggable={false}
            src={category.filename}
            alt={category.name}
          />
          <Button
            className="absolute left-4 top-4 bg-foreground font-bold text-white"
            radius="full"
            type="button"
            as={Link}
            href={`/products?page=1&sort=createdAt%3Adesc&category=in%3A${category.name.toLowerCase()}`}
          >
            SHOP {category.name.toUpperCase()}
          </Button>
        </div>
      ))}
    </div>
  );
}