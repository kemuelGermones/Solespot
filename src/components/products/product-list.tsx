import Link from "next/link";
import Image from "next/image";
import type Product from "@/types/product";

interface ProductListProps {
  query: () => Promise<Product[]>;
}

export default async function ProductList({ query }: ProductListProps) {
  const products = await query();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
            draggable={false}
            src={product.images[0].image.url}
            alt={product.name}
          />
          <div className="text-foreground-500 text-sm">
            {product.brand.toUpperCase()}
          </div>
          <div className="font-bold">{product.name}</div>
          <div className="text-foreground-500 text-sm">
            {product.gender.toUpperCase()}
          </div>
          <div>{`₱${product.price}`}</div>
        </Link>
      ))}
    </div>
  );
}