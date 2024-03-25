"use client";

import { useState } from "react";
import {
  Navbar,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link as Anchor,
} from "@nextui-org/react";
import Link from "next/link";
import SearchModal from "@/components/search/search-modal";
import CartModal from "@/components/cart/cart-modal";
import AccountDropdown from "@/components/auth/account-dropdown";

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
          <Anchor
            className="font-bold"
            color="foreground"
            size="lg"
            href="/"
            as={Link}
          >
            SOLESPOT
          </Anchor>
        </NavbarItem>
        <NavbarItem className="hidden md:block">
          <Anchor color="foreground" href="/products" as={Link}>
            SHOP ALL
          </Anchor>
        </NavbarItem>
        <NavbarItem className="hidden md:block">
          <Anchor
            color="foreground"
            href="/products?page=1&sort=createdAt%3Adesc&gender=in%3Amen"
            as={Link}
          >
            MEN
          </Anchor>
        </NavbarItem>
        <NavbarItem className="hidden md:block">
          <Anchor
            color="foreground"
            href="/products?page=1&sort=createdAt%3Adesc&gender=in%3Awomen"
            as={Link}
          >
            WOMEN
          </Anchor>
        </NavbarItem>
        <NavbarItem className="grow">
          <SearchModal />
        </NavbarItem>
        <NavbarItem>
          <CartModal />
        </NavbarItem>
        <NavbarItem>
          <AccountDropdown />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Anchor
            className="w-full"
            color="foreground"
            href="/products"
            as={Link}
            onPress={handleCloseMenu}
          >
            SHOP ALL
          </Anchor>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Anchor
            className="w-full"
            color="foreground"
            href="/products?page=1&sort=createdAt%3Adesc&gender=in%3Amen"
            as={Link}
            onPress={handleCloseMenu}
          >
            MEN
          </Anchor>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Anchor
            className="w-full"
            color="foreground"
            href="/products?page=1&sort=createdAt%3Adesc&gender=in%3Awomen"
            as={Link}
            onPress={handleCloseMenu}
          >
            WOMEN
          </Anchor>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
