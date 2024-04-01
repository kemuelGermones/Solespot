"use client";

import { useState } from "react";
import Image from "next/image";
import { type Image as Picture } from "@prisma/client";

interface ProductImageCarouselProps {
  images: {
    image: Picture;
  }[];
}

export default function ProductImageCarousel({
  images,
}: ProductImageCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleChangeSlide = (slide: number) => {
    setCurrentSlide(slide);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map(({ image }) => (
            <Image
              className="min-w-0 flex-[0_0_100%]"
              width={500}
              height={500}
              quality={100}
              draggable={false}
              src={image.url}
              alt={image.name}
              key={image.id}
            />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-5 gap-2">
        {images.map(({ image }, index) => (
          <Image
            className={`cursor-pointer border-2 transition-all ${
              currentSlide === index
                ? "border-foreground"
                : "border-transparent"
            }`}
            width={500}
            height={500}
            quality={100}
            draggable={false}
            src={image.url}
            alt={image.name}
            key={image.id}
            onClick={handleChangeSlide.bind(null, index)}
          />
        ))}
      </div>
    </div>
  );
}
