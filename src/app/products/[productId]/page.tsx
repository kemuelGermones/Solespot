import ProductDetails from "@/components/product-details";
import ProductList from "@/components/product-list";
import getProducts from "@/queries/get-products";

export default function Product() {
  return (
    <>
      <ProductDetails />
      <div className="lg:container mx-auto py-8 px-4 flex flex-col gap-4">
        <div className="font-bold text-4xl">RECOMMENDED</div>
        <ProductList
          query={getProducts.bind(null, {
            take: 4,
            createdAt: "desc",
            category: ["basketball"],
            gender: ["men"],
          })}
        />
      </div>
    </>
  );
}
