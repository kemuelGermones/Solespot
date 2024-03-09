import Image from "next/image";
import Link from "next/link";
import { Pagination } from "@nextui-org/react";

export default function OrderList() {
  return (
    <div className="mx-auto flex flex-col gap-4 px-4 py-8 lg:container">
      <div className="text-4xl font-bold">ORDERS</div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <Link className="flex flex-col gap-2" href="/products/1">
          <Image
            width={500}
            height={500}
            quality={100}
            draggable={false}
            src="/shoe.webp"
            alt="shoe"
          />
          <div className="text-sm text-foreground-500">UNDER ARMOUR</div>
          <div className="font-bold">
            Under Armour Curry 11 "Champion Mindset"
          </div>
          <div className="text-sm text-foreground-500">SIZE: 7.5 / MEN</div>
          <div>₱9,195.00</div>
          <div className="font-bold text-success">DELIVERED</div>
        </Link>
        <Link className="flex flex-col gap-2" href="/products/1">
          <Image
            width={500}
            height={500}
            quality={100}
            draggable={false}
            src="/shoe.webp"
            alt="shoe"
          />
          <div className="text-sm text-foreground-500">UNDER ARMOUR</div>
          <div className="font-bold">
            Under Armour Curry 11 "Champion Mindset"
          </div>
          <div className="text-sm text-foreground-500">SIZE: 7.5 / MEN</div>
          <div>₱9,195.00</div>
          <div className="font-bold text-success">DELIVERED</div>
        </Link>{" "}
        <Link className="flex flex-col gap-2" href="/products/1">
          <Image
            width={500}
            height={500}
            quality={100}
            draggable={false}
            src="/shoe.webp"
            alt="shoe"
          />
          <div className="text-sm text-foreground-500">UNDER ARMOUR</div>
          <div className="font-bold">
            Under Armour Curry 11 "Champion Mindset"
          </div>
          <div className="text-sm text-foreground-500">SIZE: 7.5 / MEN</div>
          <div>₱9,195.00</div>
          <div className="font-bold text-success">DELIVERED</div>
        </Link>{" "}
        <Link className="flex flex-col gap-2" href="/products/1">
          <Image
            width={500}
            height={500}
            quality={100}
            draggable={false}
            src="/shoe.webp"
            alt="shoe"
          />
          <div className="text-sm text-foreground-500">UNDER ARMOUR</div>
          <div className="font-bold">
            Under Armour Curry 11 "Champion Mindset"
          </div>
          <div className="text-sm text-foreground-500">SIZE: 7.5 / MEN</div>
          <div>₱9,195.00</div>
          <div className="font-bold text-success">DELIVERED</div>
        </Link>{" "}
        <Link className="flex flex-col gap-2" href="/products/1">
          <Image
            width={500}
            height={500}
            quality={100}
            draggable={false}
            src="/shoe.webp"
            alt="shoe"
          />
          <div className="text-sm text-foreground-500">UNDER ARMOUR</div>
          <div className="font-bold">
            Under Armour Curry 11 "Champion Mindset"
          </div>
          <div className="text-sm text-foreground-500">SIZE: 7.5 / MEN</div>
          <div>₱9,195.00</div>
          <div className="font-bold text-success">DELIVERED</div>
        </Link>{" "}
        <Link className="flex flex-col gap-2" href="/products/1">
          <Image
            width={500}
            height={500}
            quality={100}
            draggable={false}
            src="/shoe.webp"
            alt="shoe"
          />
          <div className="text-sm text-foreground-500">UNDER ARMOUR</div>
          <div className="font-bold">
            Under Armour Curry 11 "Champion Mindset"
          </div>
          <div className="text-sm text-foreground-500">SIZE: 7.5 / MEN</div>
          <div>₱9,195.00</div>
          <div className="font-bold text-success">DELIVERED</div>
        </Link>{" "}
        <Link className="flex flex-col gap-2" href="/products/1">
          <Image
            width={500}
            height={500}
            quality={100}
            draggable={false}
            src="/shoe.webp"
            alt="shoe"
          />
          <div className="text-sm text-foreground-500">UNDER ARMOUR</div>
          <div className="font-bold">
            Under Armour Curry 11 "Champion Mindset"
          </div>
          <div className="text-sm text-foreground-500">SIZE: 7.5 / MEN</div>
          <div>₱9,195.00</div>
          <div className="font-bold text-success">DELIVERED</div>
        </Link>{" "}
        <Link className="flex flex-col gap-2" href="/products/1">
          <Image
            width={500}
            height={500}
            quality={100}
            draggable={false}
            src="/shoe.webp"
            alt="shoe"
          />
          <div className="text-sm text-foreground-500">UNDER ARMOUR</div>
          <div className="font-bold">
            Under Armour Curry 11 "Champion Mindset"
          </div>
          <div className="text-sm text-foreground-500">SIZE: 7.5 / MEN</div>
          <div>₱9,195.00</div>
          <div className="font-bold text-success">DELIVERED</div>
        </Link>{" "}
        <Link className="flex flex-col gap-2" href="/products/1">
          <Image
            width={500}
            height={500}
            quality={100}
            draggable={false}
            src="/shoe.webp"
            alt="shoe"
          />
          <div className="text-sm text-foreground-500">UNDER ARMOUR</div>
          <div className="font-bold">
            Under Armour Curry 11 "Champion Mindset"
          </div>
          <div className="text-sm text-foreground-500">SIZE: 7.5 / MEN</div>
          <div>₱9,195.00</div>
          <div className="font-bold text-success">DELIVERED</div>
        </Link>{" "}
        <Link className="flex flex-col gap-2" href="/products/1">
          <Image
            width={500}
            height={500}
            quality={100}
            draggable={false}
            src="/shoe.webp"
            alt="shoe"
          />
          <div className="text-sm text-foreground-500">UNDER ARMOUR</div>
          <div className="font-bold">
            Under Armour Curry 11 "Champion Mindset"
          </div>
          <div className="text-sm text-foreground-500">SIZE: 7.5 / MEN</div>
          <div>₱9,195.00</div>
          <div className="font-bold text-success">DELIVERED</div>
        </Link>{" "}
        <Link className="flex flex-col gap-2" href="/products/1">
          <Image
            width={500}
            height={500}
            quality={100}
            draggable={false}
            src="/shoe.webp"
            alt="shoe"
          />
          <div className="text-sm text-foreground-500">UNDER ARMOUR</div>
          <div className="font-bold">
            Under Armour Curry 11 "Champion Mindset"
          </div>
          <div className="text-sm text-foreground-500">SIZE: 7.5 / MEN</div>
          <div>₱9,195.00</div>
          <div className="font-bold text-success">DELIVERED</div>
        </Link>{" "}
        <Link className="flex flex-col gap-2" href="/products/1">
          <Image
            width={500}
            height={500}
            quality={100}
            draggable={false}
            src="/shoe.webp"
            alt="shoe"
          />
          <div className="text-sm text-foreground-500">UNDER ARMOUR</div>
          <div className="font-bold">
            Under Armour Curry 11 "Champion Mindset"
          </div>
          <div className="text-sm text-foreground-500">SIZE: 7.5 / MEN</div>
          <div>₱9,195.00</div>
          <div className="font-bold text-success">DELIVERED</div>
        </Link>
      </div>
      <Pagination
        className="px-0 pt-12"
        radius="none"
        total={10}
        initialPage={1}
        classNames={{
          wrapper: "mx-auto",
          item: "font-bold",
          cursor: "bg-foreground text-white font-bold",
        }}
      />
    </div>
  );
}
