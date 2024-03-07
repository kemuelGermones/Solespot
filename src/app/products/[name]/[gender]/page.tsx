import { notFound } from "next/navigation";
import ProductImageCarousel from "@/components/products/product-image-carousel";
import AddToCartForm from "@/components/forms/add-to-cart-form";
import ProductDescriptionAccordion from "@/components/products/product-description-accordion";
import ProductList from "@/components/products/product-list";
import getProducts from "@/queries/get-products";

interface ProductProps {
  params: {
    name: string;
    gender: string;
  };
}

export default async function Product({ params }: ProductProps) {
  const { name, gender } = params;

  const products = await getProducts({
    name: name.replaceAll("_", " "),
    gender: [gender],
  });

  if (products.length === 0) {
    notFound();
  }

  return (
    <>
      <div className="py-8 px-4 max-w-5xl mx-auto grid md:grid-cols-[1.5fr_1fr] gap-4">
        <ProductImageCarousel images={products[0].images} />
        <div className="flex flex-col gap-4">
          <div className="text-foreground-500 text-sm">
            {products[0].brand.toUpperCase()}
          </div>
          <div className="font-bold text-2xl">{products[0].name}</div>
          <div className="text-foreground-500 text-sm">
            {products[0].gender.toUpperCase()}
          </div>
          <div>{`₱${products[0].price}`}</div>
          <div>{products[0].about}</div>
          <AddToCartForm products={products} />
          <ProductDescriptionAccordion description={products[0].description} />
        </div>
      </div>
      <div className="lg:container mx-auto py-8 px-4 flex flex-col gap-4">
        <div className="font-bold text-4xl">RECOMMENDED</div>
        <ProductList
          query={getProducts.bind(null, {
            take: 4,
            createdAt: "desc",
            distinct: ["name", "gender"],
            gender: [products[0].gender],
            category: [products[0].category],
          })}
        />
      </div>
    </>
  );
}
