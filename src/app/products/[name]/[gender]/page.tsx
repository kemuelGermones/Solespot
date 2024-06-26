import { Suspense } from "react";
import { notFound } from "next/navigation";
import ProductImageCarousel from "@/components/product/product-image-carousel";
import ProductAddToCartForm from "@/components/product/product-add-to-cart-form";
import ProductAccordion from "@/components/product/product-accordion";
import ProductList from "@/components/product/product-list";
import ListSkeleton from "@/components/ui/list-skeleton";
import getProducts from "@/queries/get-products";
import formatPrice from "@/utils/format-price";

interface ProductProps {
  params: {
    name: string;
    gender: string;
  };
}

export const revalidate = 180;

export default async function Product({ params }: ProductProps) {
  const { name, gender } = params;

  const products = await getProducts({
    genders: [gender],
    name: name.replaceAll("_", " "),
  });

  if (!products.length) {
    notFound();
  }

  return (
    <>
      <div className="mx-auto grid max-w-5xl gap-4 px-4 py-8 md:grid-cols-[1.5fr_1fr]">
        <ProductImageCarousel images={products[0].images} />
        <div className="flex flex-col gap-4">
          <div className="text-sm text-foreground-500">
            {products[0].brand.toUpperCase()}
          </div>
          <div className="text-2xl font-bold">{products[0].name}</div>
          <div className="text-sm text-foreground-500">
            {products[0].gender.toUpperCase()}
          </div>
          <div>{formatPrice(products[0].price)}</div>
          <div>{products[0].about}</div>
          <ProductAddToCartForm products={products} />
          <ProductAccordion description={products[0].description} />
        </div>
      </div>
      <div className="mx-auto flex flex-col gap-8 px-4 py-8 lg:container">
        <div className="text-4xl font-bold">RECOMMENDED</div>
        <Suspense fallback={<ListSkeleton length={4} />}>
          <ProductList
            query={getProducts.bind(null, {
              take: 4,
              createdAt: "desc",
              distinct: ["name", "gender"],
              genders: [products[0].gender],
              categories: [products[0].category],
            })}
          />
        </Suspense>
      </div>
    </>
  );
}

export async function generateStaticParams() {
  const products = await getProducts({
    distinct: ["name", "gender"],
  });

  const params = products.map((product) => ({
    gender: product.gender,
    name: product.name.replaceAll(" ", "_"),
  }));

  return params;
}
