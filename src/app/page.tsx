import ProductBrandCarousel from "@/components/products/product-brand-carousel";
import ProductList from "@/components//products/product-list";
import ProductCategoryCards from "@/components/products/product-category-cards";
import getProducts from "@/queries/get-products";

export default function Home() {
  return (
    <>
      <ProductBrandCarousel />
      <div className="mx-auto flex flex-col gap-4 px-4 py-8 lg:container">
        <div className="text-4xl font-bold">NEW ARRIVALS</div>
        <ProductList
          query={getProducts.bind(null, {
            take: 8,
            createdAt: "desc",
            distinct: ["name", "gender"],
          })}
        />
      </div>
      <ProductCategoryCards />
      <div className="mx-auto flex flex-col gap-4 px-4 py-8 lg:container">
        <div className="text-4xl font-bold">APPAREL NEW ARRIVALS</div>
        <ProductList
          query={getProducts.bind(null, {
            take: 4,
            createdAt: "desc",
            distinct: ["name", "gender"],
            category: ["apparel"],
          })}
        />
      </div>
      <div className="mx-auto flex flex-col gap-4 px-4 py-8 lg:container">
        <div className="text-4xl font-bold">SHOE NEW ARRIVALS</div>
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
