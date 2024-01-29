"use client";

import {
  Button,
  Pagination,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
} from "@nextui-org/react";
import { BsFilter, BsArrowDownUp } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

export default function ProductList() {
  return (
    <div className="lg:container mx-auto py-8 px-4 flex flex-col gap-4">
      <div className="flex gap-4 justify-end">
        <Dropdown radius="none">
          <DropdownTrigger>
            <Button
              className="bg-black text-white"
              radius="none"
              startContent={<BsFilter />}
            >
              FILTER
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            itemClasses={{
              base: [
                "rounded-none",
                "data-[hover=true]:text-white",
                "data-[hover=true]:bg-black",
              ],
            }}
          >
            <DropdownSection title="BRAND" showDivider>
              <DropdownItem>JORDAN</DropdownItem>
              <DropdownItem>NIKE</DropdownItem>
              <DropdownItem>ADIDAS</DropdownItem>
              <DropdownItem>UNDER ARMOUR</DropdownItem>
            </DropdownSection>
            <DropdownSection title="GENDER">
              <DropdownItem>MEN'S</DropdownItem>
              <DropdownItem>WOMEN'S</DropdownItem>
              <DropdownItem>KID'S</DropdownItem>
            </DropdownSection>
          </DropdownMenu>
        </Dropdown>
        <Dropdown radius="none">
          <DropdownTrigger>
            <Button
              className="bg-black text-white"
              radius="none"
              startContent={<BsArrowDownUp />}
            >
              SORT
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            itemClasses={{
              base: [
                "rounded-none",
                "data-[hover=true]:text-white",
                "data-[hover=true]:bg-black",
              ],
            }}
          >
            <DropdownItem>BEST SELLERS</DropdownItem>
            <DropdownItem>ALPHABETICAL (A - Z)</DropdownItem>
            <DropdownItem>ALPHABETICAL (Z - A)</DropdownItem>
            <DropdownItem>PRICE (LOW - HIGH)</DropdownItem>
            <DropdownItem>PRICE (HIGH - LOW)</DropdownItem>
            <DropdownItem>OLDEST TO NEWEST</DropdownItem>
            <DropdownItem>NEWEST TO OLDEST</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Link className="flex flex-col gap-2" href="/products/1">
          <Image src="/shoe.webp" alt="shoe" width={500} height={500} />
          <div className="text-gray-500 text-sm">UNDER ARMOUR</div>
          <div className="font-bold">
            Under Armour Curry 11 "Champion Mindset"
          </div>
          <div>₱9,195.00</div>
        </Link>
        <Link className="flex flex-col gap-2" href="/products/1">
          <Image src="/shoe.webp" alt="shoe" width={500} height={500} />
          <div className="text-gray-500 text-sm">UNDER ARMOUR</div>
          <div className="font-bold">
            Under Armour Curry 11 "Champion Mindset"
          </div>
          <div>₱9,195.00</div>
        </Link>
        <Link className="flex flex-col gap-2" href="/products/1">
          <Image src="/shoe.webp" alt="shoe" width={500} height={500} />
          <div className="text-gray-500 text-sm">UNDER ARMOUR</div>
          <div className="font-bold">
            Under Armour Curry 11 "Champion Mindset"
          </div>
          <div>₱9,195.00</div>
        </Link>
        <Link className="flex flex-col gap-2" href="/products/1">
          <Image src="/shoe.webp" alt="shoe" width={500} height={500} />
          <div className="text-gray-500 text-sm">UNDER ARMOUR</div>
          <div className="font-bold">
            Under Armour Curry 11 "Champion Mindset"
          </div>
          <div>₱9,195.00</div>
        </Link>
        <Link className="flex flex-col gap-2" href="/products/1">
          <Image src="/shoe.webp" alt="shoe" width={500} height={500} />
          <div className="text-gray-500 text-sm">UNDER ARMOUR</div>
          <div className="font-bold">
            Under Armour Curry 11 "Champion Mindset"
          </div>
          <div>₱9,195.00</div>
        </Link>
        <Link className="flex flex-col gap-2" href="/products/1">
          <Image src="/shoe.webp" alt="shoe" width={500} height={500} />
          <div className="text-gray-500 text-sm">UNDER ARMOUR</div>
          <div className="font-bold">
            Under Armour Curry 11 "Champion Mindset"
          </div>
          <div>₱9,195.00</div>
        </Link>
        <Link className="flex flex-col gap-2" href="/products/1">
          <Image src="/shoe.webp" alt="shoe" width={500} height={500} />
          <div className="text-gray-500 text-sm">UNDER ARMOUR</div>
          <div className="font-bold">
            Under Armour Curry 11 "Champion Mindset"
          </div>
          <div>₱9,195.00</div>
        </Link>
        <Link className="flex flex-col gap-2" href="/products/1">
          <Image src="/shoe.webp" alt="shoe" width={500} height={500} />
          <div className="text-gray-500 text-sm">UNDER ARMOUR</div>
          <div className="font-bold">
            Under Armour Curry 11 "Champion Mindset"
          </div>
          <div>₱9,195.00</div>
        </Link>
        <Link className="flex flex-col gap-2" href="/products/1">
          <Image src="/shoe.webp" alt="shoe" width={500} height={500} />
          <div className="text-gray-500 text-sm">UNDER ARMOUR</div>
          <div className="font-bold">
            Under Armour Curry 11 "Champion Mindset"
          </div>
          <div>₱9,195.00</div>
        </Link>
        <Link className="flex flex-col gap-2" href="/products/1">
          <Image src="/shoe.webp" alt="shoe" width={500} height={500} />
          <div className="text-gray-500 text-sm">UNDER ARMOUR</div>
          <div className="font-bold">
            Under Armour Curry 11 "Champion Mindset"
          </div>
          <div>₱9,195.00</div>
        </Link>
        <Link className="flex flex-col gap-2" href="/products/1">
          <Image src="/shoe.webp" alt="shoe" width={500} height={500} />
          <div className="text-gray-500 text-sm">UNDER ARMOUR</div>
          <div className="font-bold">
            Under Armour Curry 11 "Champion Mindset"
          </div>
          <div>₱9,195.00</div>
        </Link>
        <Link className="flex flex-col gap-2" href="/products/1">
          <Image src="/shoe.webp" alt="shoe" width={500} height={500} />
          <div className="text-gray-500 text-sm">UNDER ARMOUR</div>
          <div className="font-bold">
            Under Armour Curry 11 "Champion Mindset"
          </div>
          <div>₱9,195.00</div>
        </Link>
        <Link className="flex flex-col gap-2" href="/products/1">
          <Image src="/shoe.webp" alt="shoe" width={500} height={500} />
          <div className="text-gray-500 text-sm">UNDER ARMOUR</div>
          <div className="font-bold">
            Under Armour Curry 11 "Champion Mindset"
          </div>
          <div>₱9,195.00</div>
        </Link>
        <Link className="flex flex-col gap-2" href="/products/1">
          <Image src="/shoe.webp" alt="shoe" width={500} height={500} />
          <div className="text-gray-500 text-sm">UNDER ARMOUR</div>
          <div className="font-bold">
            Under Armour Curry 11 "Champion Mindset"
          </div>
          <div>₱9,195.00</div>
        </Link>
        <Link className="flex flex-col gap-2" href="/products/1">
          <Image src="/shoe.webp" alt="shoe" width={500} height={500} />
          <div className="text-gray-500 text-sm">UNDER ARMOUR</div>
          <div className="font-bold">
            Under Armour Curry 11 "Champion Mindset"
          </div>
          <div>₱9,195.00</div>
        </Link>
        <Link className="flex flex-col gap-2" href="/products/1">
          <Image src="/shoe.webp" alt="shoe" width={500} height={500} />
          <div className="text-gray-500 text-sm">UNDER ARMOUR</div>
          <div className="font-bold">
            Under Armour Curry 11 "Champion Mindset"
          </div>
          <div>₱9,195.00</div>
        </Link>
      </div>
      <Pagination
        className="pt-16 px-0"
        radius="none"
        total={10}
        initialPage={1}
        classNames={{
          wrapper: "mx-auto",
          cursor: "bg-black text-white",
        }}
      />
    </div>
  );
}
