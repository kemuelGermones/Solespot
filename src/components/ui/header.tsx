"use client";

import { useState } from "react";
import {
  Navbar,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { BsPerson } from "react-icons/bs";
import Link from "next/link";
import SearchModal from "@/components/search/search-modal";
import CartModal from "@/components/cart/cart-modal";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle className="md:hidden" />
        <NavbarItem>
          <Link className="text-lg font-bold" href="/">
            SOLESPOT
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden md:block">
          <Link className="hover:underline" href="/products">
            SHOP ALL
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden md:block">
          <Link
            className="hover:underline"
            href="/products?page=1&sort=createdAt%3Adesc&gender=in%3Amen"
          >
            MEN
          </Link>
        </NavbarItem>
        <NavbarItem className="hidden md:block">
          <Link
            className="hover:underline"
            href="/products?page=1&sort=createdAt%3Adesc&gender=in%3Awomen"
          >
            WOMEN
          </Link>
        </NavbarItem>
        <NavbarItem className="grow">
          <SearchModal />
        </NavbarItem>
        <NavbarItem>
          <CartModal />
        </NavbarItem>
        <NavbarItem>
          <Link href="/sign_in">
            <BsPerson size="1.5em" />
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link
            className="inline-block w-full px-2 py-1.5 hover:bg-default"
            href="/products"
            onClick={handleCloseMenu}
          >
            SHOP ALL
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="inline-block w-full px-2 py-1.5 hover:bg-default"
            href="/products?page=1&sort=createdAt%3Adesc&gender=in%3Amen"
            onClick={handleCloseMenu}
          >
            MEN
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="inline-block w-full px-2 py-1.5 hover:bg-default"
            href="/products?page=1&sort=createdAt%3Adesc&gender=in%3Awomen"
            onClick={handleCloseMenu}
          >
            WOMEN
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
