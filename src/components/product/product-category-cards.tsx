import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

const CATEGORIES = [
  {
    id: 1,
    name: "Basketball",
    filename: "/basketball.webp",
    path: "/products?page=1&category=in%3A$basketball",
  },
  {
    id: 2,
    name: "Lifestyle",
    filename: "/lifestyle.webp",
    path: "/products?page=1&category=in%3A$lifestyle",
  },
  {
    id: 3,
    name: "Apparel",
    filename: "/apparel.webp",
    path: "/products?page=1&category=in%3A$apparel",
  },
];

export default function ProductCategoryCards() {
  return (
    <div className="grid h-[calc(100vh-4rem)] md:grid-cols-3">
      {CATEGORIES.map((category) => (
        <div className="relative" key={category.id}>
          <Image
            className="object-cover"
            fill={true}
            quality={100}
            draggable={false}
            alt={category.name}
            src={category.filename}
          />
          <Button
            className="absolute left-4 top-4 bg-foreground font-bold text-white"
            type="button"
            radius="full"
            as={Link}
            href={category.path}
          >
            {`SHOP ${category.name.toUpperCase()}`}
          </Button>
        </div>
      ))}
    </div>
  );
}
