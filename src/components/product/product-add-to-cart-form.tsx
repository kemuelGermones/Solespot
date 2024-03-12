import { Button } from "@nextui-org/react";
import type { Product } from "@prisma/client";

interface AddToCartFormProps {
  products: Product[];
}

export default function ProductAddToCartForm({ products }: AddToCartFormProps) {
  return (
    <form className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="font-bold">CHOOSE A SIZE</div>
        <div className="grid grid-cols-4 gap-2">
          {products.map((product) => (
            <div key={product.id}>
              <input
                className="peer hidden"
                type="radio"
                name="product"
                id={product.id.toString()}
              />
              <label
                className="flex min-h-10 min-w-min cursor-pointer items-center justify-center border-2 border-foreground px-4 text-sm font-bold peer-checked:bg-foreground peer-checked:text-white"
                htmlFor={product.id.toString()}
              >
                {product.size.toUpperCase()}
              </label>
            </div>
          ))}
        </div>
      </div>
      <Button
        className="bg-foreground font-bold text-white"
        radius="none"
        type="button"
      >
        ADD TO CART
      </Button>
    </form>
  );
}
