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

export default function CategoryCards() {
  return (
    <div className="h-[calc(100vh-4rem)] grid md:grid-cols-3">
      {CATEGORIES.map((category) => (
        <div className="relative" key={category.id}>
          <Image
            className="object-cover"
            fill={true}
            draggable={false}
            src={category.filename}
            alt={category.name}
          />
          <Link
            href={`/products?page=1&sort=createdAt%3Adesc&category=in%3A${category.name.toLowerCase()}`}
          >
            <Button
              className="bg-foreground text-white font-bold absolute top-4 left-4"
              radius="full"
              type="button"
            >
              SHOP {category.name.toUpperCase()}
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
}
