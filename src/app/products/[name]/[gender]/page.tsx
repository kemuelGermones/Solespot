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
          <div>{`₱${products[0].price}`}</div>
          <div>{products[0].about}</div>
          <AddToCartForm products={products} />
          <ProductDescriptionAccordion description={products[0].description} />
        </div>
      </div>
      <div className="mx-auto flex flex-col gap-4 px-4 py-8 lg:container">
        <div className="text-4xl font-bold">RECOMMENDED</div>
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
