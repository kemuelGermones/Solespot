import Link from "next/link";
import Image from "next/image";
import type Product from "@/types/product";

interface ProductListProps {
  query: () => Promise<Product[]>;
}

export default async function ProductList({ query }: ProductListProps) {
  const products = await query();

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {products.map((product) => (
        <Link
          className="flex flex-col gap-2"
          href={`/products/${product.name.replaceAll(" ", "_")}/${
            product.gender
          }`}
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
          <div className="text-sm text-foreground-500">
            {product.brand.toUpperCase()}
          </div>
          <div className="font-bold">{product.name}</div>
          <div className="text-sm text-foreground-500">
            {product.gender.toUpperCase()}
          </div>
          <div>{`₱${product.price}`}</div>
        </Link>
      ))}
    </div>
  );
}
