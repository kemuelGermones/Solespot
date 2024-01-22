"use client";

import { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Image from "next/image";

const images = [
  { id: 1, name: "Jordan", filename: "/jordan.webp" },
  { id: 2, name: "Nike", filename: "/nike.webp" },
  { id: 3, name: "Adidas", filename: "/adidas.webp" },
  { id: 4, name: "Under Armour", filename: "/under-armour.webp" },
];

export default function Carousel() {
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
    setCurrentSlide((state) => (state === 0 ? images.length - 1 : state - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((state) => (state === images.length - 1 ? 0 : state + 1));
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className="h-[calc(100vh-4rem)] flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((image) => (
          <div className="grow-0 shrink-0 basis-full relative" key={image.id}>
            <Image
              className="object-cover"
              src={image.filename}
              alt={image.name}
              fill={true}
            />
            <Button
              type="button"
              className="bg-black text-white absolute top-4 left-4"
              radius="full"
            >
              SHOP {image.name.toUpperCase()}
            </Button>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={handlePreviousSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1 text-gray-800 shadow hover:bg-white"
      >
        <BsChevronLeft />
      </button>
      <button
        type="button"
        onClick={handleNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1 text-gray-800 shadow hover:bg-white"
      >
        <BsChevronRight />
      </button>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
        {images.map((image, index) => (
          <div
            className={`
              h-3 w-3 rounded-full bg-white transition-all
              ${currentSlide === index ? "p-2" : "bg-opacity-50"}
            `}
            key={image.id}
          />
        ))}
      </div>
    </div>
  );
}
