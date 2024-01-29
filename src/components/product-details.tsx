"use client";

import { useState } from "react";
import { Button, Accordion, AccordionItem } from "@nextui-org/react";
import Image from "next/image";

const images = [
  {
    id: 1,
    name: "shoe",
    filename: "/shoe-left.webp",
  },
  {
    id: 2,
    name: "shoe",
    filename: "/shoe-bottom.webp",
  },
  {
    id: 3,
    name: "shoe",
    filename: "/shoe-right.webp",
  },
  {
    id: 4,
    name: "shoe",
    filename: "/shoe-top.webp",
  },
  {
    id: 5,
    name: "shoe",
    filename: "/shoe-front.webp",
  },
];

export default function ProductDetails() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleChangeSlide = (slide: number) => {
    setCurrentSlide(slide);
  };

  return (
    <div className="py-8 px-4 max-w-5xl mx-auto grid md:grid-cols-[1.5fr_1fr] gap-4">
      <div className="grid grid-cols-5 gap-4">
        <div className="overflow-hidden col-span-5">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {images.map((image) => (
              <Image
                className="min-w-0 flex-[0_0_100%]"
                width={500}
                height={500}
                draggable={false}
                src={image.filename}
                alt={image.name}
              />
            ))}
          </div>
        </div>
        {images.map((image, index) => (
          <Image
            className={`cursor-pointer transition-all ${
              currentSlide === index ? "bg-default-100" : ""
            }`}
            width={500}
            height={500}
            draggable={false}
            src={image.filename}
            alt={image.name}
            key={image.id}
            onClick={handleChangeSlide.bind(null, index)}
          />
        ))}
      </div>
      <div className="flex flex-col gap-4">
        <div className="text-foreground-500 text-sm">UNDER ARMOUR</div>
        <div className="font-bold text-2xl">
          Under Armour Curry 11 "Champion Mindset"
        </div>
        <div className="text-foreground-500 text-sm">MEN'S</div>
        <div>₱9,195.00</div>
        <div>
          Stephen Curry makes you believe you can do anything. And the Curry 11
          is specifically designed with ultimate bounce, grip, and stability to
          allow everyone to do their thing.
        </div>
        <form className="flex flex-col gap-4">
          <div className="grid grid-cols-4 gap-2">
            <div className="font-bold col-span-4">CHOOSE A SIZE</div>
            <div>
              <input
                className="hidden peer"
                type="radio"
                id="7.5"
                name="size"
                value="7.5"
              />
              <label
                className="min-w-min min-h-10 flex items-center justify-center text-sm font-bold px-4 border border-foreground cursor-pointer peer-checked:text-white peer-checked:bg-foreground"
                htmlFor="7.5"
              >
                7.5
              </label>
            </div>
            <div>
              <input
                className="hidden peer"
                type="radio"
                id="8"
                name="size"
                value="8"
              />
              <label
                className="min-w-min min-h-10 flex items-center justify-center text-sm font-bold px-4 border border-foreground cursor-pointer peer-checked:text-white peer-checked:bg-foreground"
                htmlFor="8"
              >
                8
              </label>
            </div>
          </div>
          <Button
            className="bg-foreground text-white font-bold"
            radius="none"
            type="button"
          >
            ADD TO CART
          </Button>
        </form>
        <Accordion
          itemClasses={{
            title: "text-base font-bold",
          }}
        >
          <AccordionItem title="PRODUCT DESCRIPTION">
            UA Warp upper technology provides enhanced comfort & control
            throughout dynamic basketball movements Lightweight, comfortable UA
            IntelliKnit is breathable & gives you stretch & support where you
            need it External 3D-molded TPU heel counter for enhanced fit &
            support Molded sockliner for long-lasting, step-in comfort
            Dual-density UA Flow cushioning for premium comfort that is super
            light, bouncy & provides insane grip Forefoot Pebax® plate allows
            for additional flex & agility with lateral support Internal midfoot
            shank adds stability to every move Durable UA Flow outsole provides
            better court feel so you can cut & stop/start faster than ever
            before
          </AccordionItem>
          <AccordionItem title="SHIPPING & RETURNS">
            TITAN22.COM currently offers nationwide shipping in the Philippines.
            Orders amounting to PHP7,000 or more qualify for free shipping.
            Metro Manila Orders: 5-7 business days Provincial Orders: 7-20
            business days Any order (regular priced and sale items) made through
            TITAN22.COM or the TITAN App is eligible for return within seven (7)
            days from the date the item was delivered. Orders must be returned
            with a dated sales invoice/receipt and the product’s original and
            complete packaging for it to be accepted. For more information you
            may view our Returns and Exchanges Policy here.
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
