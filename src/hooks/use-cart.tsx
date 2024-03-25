"use client";

import { useContext } from "react";
import { CartContext } from "@/stores/cart-context";

export default function useCart() {
  return useContext(CartContext);
}
