import Link from "next/link";
import Image from "next/image";
import type Product from "@/types/product";

interface TopProductListProps {
  title: string;
  query: () => Promise<Product[]>;
}

export default async function TopProductList({
  title,
  query,
}: TopProductListProps) {
  const products = await query();

  return (
    <div className="lg:container mx-auto py-8 px-4 flex flex-col gap-4">
      <div className="font-bold text-4xl">{title.toUpperCase()}</div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <Link className="flex flex-col gap-2" href="/products/1" key={index}>
            <Image
              width={500}
              height={500}
              draggable={false}
              src={product.image}
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
    </div>
  );
}
