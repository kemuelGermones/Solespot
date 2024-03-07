import { Button } from "@nextui-org/react";
import type { Product } from "@prisma/client";

interface AddToCartFormProps {
  products: Product[];
}

export default function AddToCartForm({ products }: AddToCartFormProps) {
  return (
    <form className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="font-bold">CHOOSE A SIZE</div>
        <div className="grid grid-cols-4 gap-2">
          {products.map((product) => (
            <div key={product.id}>
              <input
                className="hidden peer"
                type="radio"
                name="product"
                id={product.id.toString()}
                value={JSON.stringify(product)}
              />
              <label
                className="min-w-min min-h-10 flex items-center justify-center text-sm font-bold px-4 border border-foreground cursor-pointer peer-checked:text-white peer-checked:bg-foreground"
                htmlFor={product.id.toString()}
              >
                {product.size.toUpperCase()}
              </label>
            </div>
          ))}
        </div>
      </div>
      <Button
        className="bg-foreground text-white font-bold"
        radius="none"
        type="button"
      >
        ADD TO CART
      </Button>
    </form>
  );
}
