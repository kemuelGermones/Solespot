"use client";

import { useState } from "react";
import {
  Navbar,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Input,
} from "@nextui-org/react";
import { BsPerson, BsSearch } from "react-icons/bs";
import Link from "next/link";
import Cart from "@/components/cart";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle className="md:hidden" />
        <NavbarItem>
          <Link className="font-bold text-lg" href="#">
            SOLESPOT
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden md:block">
          <Link className="hover:underline" href="#">
            MEN'S
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden md:block">
          <Link className="hover:underline" href="#">
            WOMEN'S
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden md:block">
          <Link className="hover:underline" href="#">
            KID'S
          </Link>
        </NavbarItem>
        <NavbarItem className="grow">
          <Input
            radius="none"
            size="sm"
            type="search"
            placeholder="Search"
            startContent={<BsSearch />}
          />
        </NavbarItem>
        <NavbarItem>
          <Cart />
        </NavbarItem>
        <NavbarItem>
          <Link href="#">
            <BsPerson size="1.5em" />
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link className="inline-block w-full hover:underline" href="#">
            MEN'S
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="inline-block w-full hover:underline" href="#">
            WOMEN'S
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link className="inline-block w-full hover:underline" href="#">
            KID'S
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
