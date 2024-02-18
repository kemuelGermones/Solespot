import { Button } from "@nextui-org/react";
import Image from "next/image";

const images = [
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

export default function CategoryList() {
  return (
    <div className="h-[calc(100vh-4rem)] grid md:grid-cols-3">
      {images.map((image) => (
        <div className="relative" key={image.id}>
          <Image
            className="object-cover"
            fill={true}
            draggable={false}
            src={image.filename}
            alt={image.name}
          />
          <Button
            className="bg-foreground text-white font-bold absolute top-4 left-4"
            radius="full"
            type="button"
          >
            SHOP {image.name.toUpperCase()}
          </Button>
        </div>
      ))}
    </div>
  );
}
