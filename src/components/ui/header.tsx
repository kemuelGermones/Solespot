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

const LINKS = [
  {
    id: 1,
    name: "Shop All",
    path: "/products",
  },
  {
    id: 2,
    name: "Men",
    path: "/products?page=1&gender=in%3Amen",
  },
  {
    id: 3,
    name: "Women",
    path: "/products?page=1&gender=in%3Awomen",
  },
];

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
            href="/"
            size="lg"
            color="foreground"
            as={Link}
          >
            SOLESPOT
          </Anchor>
        </NavbarItem>
        {LINKS.map((link) => (
          <NavbarItem className="hidden md:block" key={link.id}>
            <Anchor color="foreground" as={Link} href={link.path}>
              {link.name.toUpperCase()}
            </Anchor>
          </NavbarItem>
        ))}
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
        {LINKS.map((link) => (
          <NavbarMenuItem key={link.id}>
            <Anchor
              className="w-full"
              color="foreground"
              as={Link}
              href={link.path}
              onPress={handleCloseMenu}
            >
              {link.name.toUpperCase()}
            </Anchor>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
