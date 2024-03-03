import { notFound } from "next/navigation";
import ProductSortSelection from "@/components/product-sort-selection";
import ProductBrandSelection from "@/components/product-brand-selection";
import ProductCategorySelection from "@/components/product-category-selection";
import ProductGenderSelection from "@/components/product-gender-selection";
import ProductList from "@/components/product-list";
import Pager from "@/components/pager";
import getProductsPages from "@/queries/get-products-pages";
import getProducts from "@/queries/get-products";

interface ProductsProps {
  searchParams?: {
    page?: string;
    sort?: string;
    brand?: string;
    category?: string;
    gender?: string;
  };
}

const PATTERN = /^in:\w+(\s\w+)*(,\w+(\s\w+)*)*$/;

export default async function Products({ searchParams }: ProductsProps) {
  const {
    page = "1",
    sort = "createdAt:desc",
    brand,
    category,
    gender,
  } = { ...searchParams };

  let createdAt: "desc" | "asc" | undefined;
  let price: "desc" | "asc" | undefined;
  switch (sort) {
    case "createdAt:desc":
      createdAt = "desc";
      break;
    case "createdAt:asc":
      createdAt = "asc";
      break;
    case "price:desc":
      price = "desc";
      break;
    case "price:asc":
      price = "asc";
      break;
    default:
      notFound();
  }

  if (
    (brand && !PATTERN.test(brand)) ||
    (category && !PATTERN.test(category)) ||
    (gender && !PATTERN.test(gender))
  ) {
    notFound();
  }

  const total = await getProductsPages({
    brand: brand?.replace("in:", "").split(","),
    category: category?.replace("in:", "").split(","),
    gender: gender?.replace("in:", "").split(","),
  });

  if (+page > total || +page < 1) {
    notFound();
  }

  return (
    <div className="lg:container mx-auto py-8 px-4 flex flex-col gap-4">
      <div className="max-w-4xl grid grid-cols-2 gap-2 md:grid-cols-4">
        <ProductSortSelection sort={sort} />
        <ProductBrandSelection
          brand={brand?.replace("in:", "").split(",") || []}
        />
        <ProductCategorySelection
          category={category?.replace("in:", "").split(",") || []}
        />
        <ProductGenderSelection
          gender={gender?.replace("in:", "").split(",") || []}
        />
      </div>
      <ProductList
        query={getProducts.bind(null, {
          createdAt,
          price,
          take: 12,
          skip: (+page - 1) * 12,
          brand: brand?.replace("in:", "").split(","),
          category: category?.replace("in:", "").split(","),
          gender: gender?.replace("in:", "").split(","),
        })}
      />
      {total > 1 ? <Pager page={+page} total={total} /> : null}
    </div>
  );
}
