import BrandSlides from "@/components/brand-slides";
import ProductList from "@/components/product-list";
import CategoryCards from "@/components/category-cards";
import getProducts from "@/queries/get-products";

export default function Home() {
  return (
    <>
      <BrandSlides />
      <div className="lg:container mx-auto py-8 px-4 flex flex-col gap-4">
        <div className="font-bold text-4xl">NEW ARRIVALS</div>
        <ProductList
          query={getProducts.bind(null, { take: 8, createdAt: "desc" })}
        />
      </div>
      <CategoryCards />
      <div className="lg:container mx-auto py-8 px-4 flex flex-col gap-4">
        <div className="font-bold text-4xl">APPAREL NEW ARRIVALS</div>
        <ProductList
          query={getProducts.bind(null, {
            take: 4,
            createdAt: "desc",
            category: ["apparel"],
          })}
        />
      </div>
      <div className="lg:container mx-auto py-8 px-4 flex flex-col gap-4">
        <div className="font-bold text-4xl">SHOE NEW ARRIVALS</div>
        <ProductList
          query={getProducts.bind(null, {
            take: 8,
            createdAt: "desc",
            category: ["basketball", "lifestyle"],
          })}
        />
      </div>
    </>
  );
}
