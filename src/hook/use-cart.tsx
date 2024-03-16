"use client";

import { useContext } from "react";
import { CartContext } from "@/store/cart-context";

export default function useCart() {
  return useContext(CartContext);
}
