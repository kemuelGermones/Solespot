import Link from "next/link";
import Image from "next/image";

export default function ProductsSection() {
  return (
    <div className="lg:container mx-auto p-4 flex flex-col gap-4">
      <div className="font-bold text-4xl">NEW ARRIVALS</div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Link className="flex flex-col gap-2" href="#">
          <Image src="/shoe.webp" alt="shoe" width={500} height={500} />
          <div className="text-gray-500 text-sm">UNDER ARMOUR</div>
          <div className="font-bold">
            Under Armour Curry 11 "Champion Mindset"
          </div>
          <div>₱9,195.00</div>
        </Link>
        <Link className="flex flex-col gap-2" href="#">
          <Image src="/shoe.webp" alt="shoe" width={500} height={500} />
          <div className="text-gray-500 text-sm">UNDER ARMOUR</div>
          <div className="font-bold">
            Under Armour Curry 11 "Champion Mindset"
          </div>
          <div>₱9,195.00</div>
        </Link>
        <Link className="flex flex-col gap-2" href="#">
          <Image src="/shoe.webp" alt="shoe" width={500} height={500} />
          <div className="text-gray-500 text-sm">UNDER ARMOUR</div>
          <div className="font-bold">
            Under Armour Curry 11 "Champion Mindset"
          </div>
          <div>₱9,195.00</div>
        </Link>
        <Link className="flex flex-col gap-2" href="#">
          <Image src="/shoe.webp" alt="shoe" width={500} height={500} />
          <div className="text-gray-500 text-sm">UNDER ARMOUR</div>
          <div className="font-bold">
            Under Armour Curry 11 "Champion Mindset"
          </div>
          <div>₱9,195.00</div>
        </Link>
        <Link className="flex flex-col gap-2" href="#">
          <Image src="/shoe.webp" alt="shoe" width={500} height={500} />
          <div className="text-gray-500 text-sm">UNDER ARMOUR</div>
          <div className="font-bold">
            Under Armour Curry 11 "Champion Mindset"
          </div>
          <div>₱9,195.00</div>
        </Link>
        <Link className="flex flex-col gap-2" href="#">
          <Image src="/shoe.webp" alt="shoe" width={500} height={500} />
          <div className="text-gray-500 text-sm">UNDER ARMOUR</div>
          <div className="font-bold">
            Under Armour Curry 11 "Champion Mindset"
          </div>
          <div>₱9,195.00</div>
        </Link>
        <Link className="flex flex-col gap-2" href="#">
          <Image src="/shoe.webp" alt="shoe" width={500} height={500} />
          <div className="text-gray-500 text-sm">UNDER ARMOUR</div>
          <div className="font-bold">
            Under Armour Curry 11 "Champion Mindset"
          </div>
          <div>₱9,195.00</div>
        </Link>
        <Link className="flex flex-col gap-2" href="#">
          <Image src="/shoe.webp" alt="shoe" width={500} height={500} />
          <div className="text-gray-500 text-sm">UNDER ARMOUR</div>
          <div className="font-bold">
            Under Armour Curry 11 "Champion Mindset"
          </div>
          <div>₱9,195.00</div>
        </Link>
      </div>
    </div>
  );
}
