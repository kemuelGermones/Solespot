"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import type Product from "@/types/product";

interface SearchListProps {
  search: string;
  onClose: () => void;
}

export default function SearchList({ search, onClose }: SearchListProps) {
  const {
    data: { data: products } = {},
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["api", "products", { search }],
    queryFn: () => axios.get<Product[]>(`/api/products?contains=${search}`),
  });

  if (isLoading) {
    return (
      <div className="flex flex-col gap-4">
        <div className="text-center text-4xl font-bold">LOADING...</div>
        <div className="text-center">
          "I learned that if you want to make it bad enough, no matter how bad
          it is, you can make it." -Gale Sayers
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col gap-4">
        <div className="text-center text-4xl font-bold">
          OOPS! SOMETHING WENT WRONG
        </div>
        <div className="text-center">
          Sorry, but it seems like an unexpected error has occurred. Please try
          again later.
        </div>
      </div>
    );
  }

  if (products!.length === 0) {
    return (
      <div className="flex flex-col gap-4">
        <div className="text-center text-4xl font-bold">NO RESULTS FOUND</div>
        <div className="text-center">
          We couldn't find what you're looking for.
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {products!.map((product) => (
        <Link
          className="grid grid-cols-[1fr_2fr] gap-2"
          href={`/products/${product.name.replaceAll(" ", "_")}/${
            product.gender
          }`}
          onClick={onClose}
          key={product.id}
        >
          <Image
            width={500}
            height={500}
            quality={100}
            draggable={false}
            src={product.images[0].image.url}
            alt={product.name}
          />
          <div className="flex flex-col gap-2">
            <div className="text-sm text-foreground-500">
              {product.brand.toUpperCase()}
            </div>
            <div className="font-bold">{product.name}</div>
            <div className="text-sm text-foreground-500">
              {product.gender.toUpperCase()}
            </div>
            <div>{`₱${product.price}`}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
