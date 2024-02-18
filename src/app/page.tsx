import BrandList from "@/components/brand-list";
import TopProductList from "@/components/top-product-list";
import CategoryList from "@/components/category-list";
import getTopNewProducts from "@/queries/get-top-new-products";
import getTopNewApparels from "@/queries/get-top-new-apparels";
import getTopNewShoes from "@/queries/get-top-new-shoes";

export default function Home() {
  return (
    <>
      <BrandList />
      <TopProductList title="New Arrivals" query={getTopNewProducts} />
      <CategoryList />
      <TopProductList title="Apparel New Arrivals" query={getTopNewApparels} />
      <TopProductList title="Shoe New Arrivals" query={getTopNewShoes} />
    </>
  );
}
