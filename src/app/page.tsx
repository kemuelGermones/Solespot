import BrandList from "@/components/brand-list";
import TopProductList from "@/components/top-product-list";
import CategoryList from "@/components/category-list";

export default function Home() {
  return (
    <>
      <BrandList />
      <TopProductList />
      <CategoryList />
      <TopProductList />
    </>
  );
}
