"use client";

import { createContext, useState, useEffect } from "react";
import type Product from "@/types/product";

interface Cart {
  products: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (product: Product) => void;
}

interface CartContextProviderProps {
  children: React.ReactNode;
}

const getInitialProducts = () => {
  const products = localStorage.getItem("_cart");
  return products ? JSON.parse(products) : [];
};

export const CartContext = createContext<Cart>({
  products: [],
  addProduct: () => {},
  removeProduct: () => {},
});

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [products, setProducts] = useState<Product[]>(getInitialProducts());

  useEffect(() => {
    localStorage.setItem("_cart", JSON.stringify(products));
  }, [products]);

  const handleAddProduct = (product: Product) => {
    setProducts((state) => [...state, product]);
  };

  const handleRemoveProduct = (product: Product) => {
    setProducts((state) => {
      const indicant = state.findIndex((value) => value.id === product.id);
      return state.filter((value, index) => index !== indicant);
    });
  };

  return (
    <CartContext.Provider
      value={{
        products,
        addProduct: handleAddProduct,
        removeProduct: handleRemoveProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
