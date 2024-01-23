import Header from "@/components/header";
import Carousel from "@/components/carousel";
import ProductsSection from "@/components/products-section";
import CategoriesSection from "@/components/categories-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <ProductsSection />
      <CategoriesSection />
      <ProductsSection />
      <Footer />
    </>
  );
}
