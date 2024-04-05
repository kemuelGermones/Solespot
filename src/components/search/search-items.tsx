"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "@/configs/axios";
import Link from "next/link";
import Image from "next/image";
import formatPrice from "@/utils/format-price";
import type Product from "@/types/product";

interface SearchListProps {
  search: string;
  onClose: () => void;
}

export default function SearchItems({ search, onClose }: SearchListProps) {
  const {
    data: response,
    error,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["api", "products", { search }],
    queryFn: () => axios.get<Product[]>(`/api/products?search=${search}`),
  });

  if (isLoading) {
    return (
      <>
        <div className="text-center text-4xl font-bold">LOADING...</div>
        <div className="text-center">
          "I learned that if you want to make it bad enough, no matter how bad
          it is, you can make it." -Gale Sayers
        </div>
      </>
    );
  }

  if (isError) {
    return (
      <>
        <div className="text-center text-4xl font-bold">
          OOPS! SOMETHING WENT WRONG
        </div>
        <div className="text-center">{error.message}</div>
      </>
    );
  }

  if (!response!.data.length) {
    return (
      <>
        <div className="text-center text-4xl font-bold">NO RESULTS FOUND</div>
        <div className="text-center">
          We couldn't find what you're looking for.
        </div>
      </>
    );
  }

  return response!.data.map((product) => (
    <Link
      className="grid grid-cols-[1fr_2fr] gap-2"
      href={`/products/${product.name.replaceAll(" ", "_")}/${product.gender}`}
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
        <div>{formatPrice(product.price)}</div>
      </div>
    </Link>
  ));
}
