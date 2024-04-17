"use client";

import { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const BRANDS = [
  {
    id: 1,
    name: "Jordan",
    filename: "/jordan.webp",
    path: "/products?page=1&brand=in%3Ajordan",
  },
  {
    id: 2,
    name: "Nike",
    filename: "/nike.webp",
    path: "/products?page=1&brand=in%3Anike",
  },
  {
    id: 3,
    name: "Adidas",
    filename: "/adidas.webp",
    path: "/products?page=1&brand=in%3Aadidas",
  },
  {
    id: 4,
    name: "Under Armour",
    filename: "/under-armour.webp",
    path: "/products?page=1&brand=in%3Aunder%20armour",
  },
  {
    id: 5,
    name: "Puma",
    filename: "/puma.webp",
    path: "/products?page=1&brand=in%3Apuma",
  },
];

export default function ProductBrandCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      handleNextSlide();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [currentSlide]);

  const handlePreviousSlide = () => {
    setCurrentSlide((state) => (state === 0 ? BRANDS.length - 1 : state - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((state) => (state === BRANDS.length - 1 ? 0 : state + 1));
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex h-[calc(100vh-4rem)] transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {BRANDS.map((brand) => (
          <div className="relative shrink-0 grow-0 basis-full" key={brand.id}>
            <Image
              className="object-cover"
              fill={true}
              quality={100}
              alt={brand.name}
              draggable={false}
              src={brand.filename}
            />
            <Button
              className="absolute left-4 top-4 bg-foreground font-bold text-white"
              type="button"
              radius="full"
              as={Link}
              href={brand.path}
            >
              {`SHOP ${brand.name.toUpperCase()}`}
            </Button>
          </div>
        ))}
      </div>
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1 shadow hover:bg-white"
        type="button"
        onClick={handlePreviousSlide}
      >
        <BsChevronLeft />
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1 shadow hover:bg-white"
        type="button"
        onClick={handleNextSlide}
      >
        <BsChevronRight />
      </button>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
        {BRANDS.map((brand, index) => (
          <div
            className={`
              h-3 w-3 rounded-full bg-white transition-all
              ${currentSlide === index ? "p-2" : "bg-opacity-50"}
            `}
            key={brand.id}
          />
        ))}
      </div>
    </div>
  );
}
