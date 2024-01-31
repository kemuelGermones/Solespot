import Link from "next/link";
import Image from "next/image";

export default function TopProductList() {
  return (
    <div className="lg:container mx-auto py-8 px-4 flex flex-col gap-4">
      <div className="font-bold text-4xl">NEW ARRIVALS</div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Link className="flex flex-col gap-2" href="/products/1">
          <Image
            width={500}
            height={500}
            draggable={false}
            src="/shoe.webp"
            alt="shoe"
          />
          <div className="text-foreground-500 text-sm">UNDER ARMOUR</div>
          <div className="font-bold">
            Under Armour Curry 11 "Champion Mindset"
          </div>
          <div>₱9,195.00</div>
        </Link>
        <Link className="flex flex-col gap-2" href="/products/1">
          <Image
            width={500}
            height={500}
            draggable={false}
            src="/shoe.webp"
            alt="shoe"
          />
          <div className="text-foreground-500 text-sm">UNDER ARMOUR</div>
          <div className="font-bold">
            Under Armour Curry 11 "Champion Mindset"
          </div>
          <div>₱9,195.00</div>
        </Link>
        <Link className="flex flex-col gap-2" href="/products/1">
          <Image
            width={500}
            height={500}
            draggable={false}
            src="/shoe.webp"
            alt="shoe"
          />
          <div className="text-foreground-500 text-sm">UNDER ARMOUR</div>
          <div className="font-bold">
            Under Armour Curry 11 "Champion Mindset"
          </div>
          <div>₱9,195.00</div>
        </Link>
        <Link className="flex flex-col gap-2" href="/products/1">
          <Image
            width={500}
            height={500}
            draggable={false}
            src="/shoe.webp"
            alt="shoe"
          />
          <div className="text-foreground-500 text-sm">UNDER ARMOUR</div>
          <div className="font-bold">
            Under Armour Curry 11 "Champion Mindset"
          </div>
          <div>₱9,195.00</div>
        </Link>
        <Link className="flex flex-col gap-2" href="/products/1">
          <Image
            width={500}
            height={500}
            draggable={false}
            src="/shoe.webp"
            alt="shoe"
          />
          <div className="text-foreground-500 text-sm">UNDER ARMOUR</div>
          <div className="font-bold">
            Under Armour Curry 11 "Champion Mindset"
          </div>
          <div>₱9,195.00</div>
        </Link>
        <Link className="flex flex-col gap-2" href="/products/1">
          <Image
            width={500}
            height={500}
            draggable={false}
            src="/shoe.webp"
            alt="shoe"
          />
          <div className="text-foreground-500 text-sm">UNDER ARMOUR</div>
          <div className="font-bold">
            Under Armour Curry 11 "Champion Mindset"
          </div>
          <div>₱9,195.00</div>
        </Link>
        <Link className="flex flex-col gap-2" href="/products/1">
          <Image
            width={500}
            height={500}
            draggable={false}
            src="/shoe.webp"
            alt="shoe"
          />
          <div className="text-foreground-500 text-sm">UNDER ARMOUR</div>
          <div className="font-bold">
            Under Armour Curry 11 "Champion Mindset"
          </div>
          <div>₱9,195.00</div>
        </Link>
        <Link className="flex flex-col gap-2" href="/products/1">
          <Image
            width={500}
            height={500}
            draggable={false}
            src="/shoe.webp"
            alt="shoe"
          />
          <div className="text-foreground-500 text-sm">UNDER ARMOUR</div>
          <div className="font-bold">
            Under Armour Curry 11 "Champion Mindset"
          </div>
          <div>₱9,195.00</div>
        </Link>
      </div>
    </div>
  );
}
