import { Suspense } from "react";
import ProductBrandCarousel from "@/components/product/product-brand-carousel";
import ProductList from "@/components/product/product-list";
import ProductCategoryCards from "@/components/product/product-category-cards";
import ListSkeleton from "@/components/ui/list-skeleton";
import getProducts from "@/queries/get-products";

export const revalidate = 180;

export default function Home() {
  return (
    <>
      <ProductBrandCarousel />
      <div className="mx-auto flex flex-col gap-8 px-4 py-8 lg:container">
        <div className="text-4xl font-bold">NEW ARRIVALS</div>
        <Suspense fallback={<ListSkeleton length={8} />}>
          <ProductList
            query={getProducts.bind(null, {
              take: 8,
              createdAt: "desc",
              distinct: ["name", "gender"],
            })}
          />
        </Suspense>
      </div>
      <ProductCategoryCards />
      <div className="mx-auto flex flex-col gap-8 px-4 py-8 lg:container">
        <div className="text-4xl font-bold">APPAREL NEW ARRIVALS</div>
        <Suspense fallback={<ListSkeleton length={4} />}>
          <ProductList
            query={getProducts.bind(null, {
              take: 4,
              createdAt: "desc",
              categories: ["apparel"],
              distinct: ["name", "gender"],
            })}
          />
        </Suspense>
      </div>
      <div className="mx-auto flex flex-col gap-8 px-4 py-8 lg:container">
        <div className="text-4xl font-bold">SHOE NEW ARRIVALS</div>
        <Suspense fallback={<ListSkeleton length={8} />}>
          <ProductList
            query={getProducts.bind(null, {
              take: 8,
              createdAt: "desc",
              distinct: ["name", "gender"],
              categories: ["basketball", "lifestyle"],
            })}
          />
        </Suspense>
      </div>
    </>
  );
}
