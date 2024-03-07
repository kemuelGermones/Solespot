import ProductBrandCarousel from "@/components/products/product-brand-carousel";
import ProductList from "@/components//products/product-list";
import ProductCategoryCards from "@/components/products/product-category-cards";
import getProducts from "@/queries/get-products";

export default function Home() {
  return (
    <>
      <ProductBrandCarousel />
      <div className="lg:container mx-auto py-8 px-4 flex flex-col gap-4">
        <div className="font-bold text-4xl">NEW ARRIVALS</div>
        <ProductList
          query={getProducts.bind(null, {
            take: 8,
            createdAt: "desc",
            distinct: ["name", "gender"],
          })}
        />
      </div>
      <ProductCategoryCards />
      <div className="lg:container mx-auto py-8 px-4 flex flex-col gap-4">
        <div className="font-bold text-4xl">APPAREL NEW ARRIVALS</div>
        <ProductList
          query={getProducts.bind(null, {
            take: 4,
            createdAt: "desc",
            distinct: ["name", "gender"],
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
            distinct: ["name", "gender"],
            category: ["basketball", "lifestyle"],
          })}
        />
      </div>
    </>
  );
}
