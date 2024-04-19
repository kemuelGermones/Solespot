import { Suspense } from "react";
import { notFound } from "next/navigation";
import ProductSortSelect from "@/components/product/product-sort-select";
import ProductBrandSelect from "@/components/product/product-brand-select";
import ProductCategorySelect from "@/components/product/product-category-select";
import ProductGenderSelect from "@/components/product/product-gender-select";
import ProductList from "@/components/product/product-list";
import Pagination from "@/components/ui/pagination";
import ListSkeleton from "@/components/ui/list-skeleton";
import getProductsPages from "@/queries/get-products-pages";
import getProducts from "@/queries/get-products";

interface ProductsProps {
  searchParams?: {
    page?: string;
    sort?: string;
    brand?: string;
    gender?: string;
    category?: string;
  };
}

export const dynamic = "force-dynamic";

export default async function Products({ searchParams }: ProductsProps) {
  const {
    sort,
    brand,
    gender,
    category,
    page: part = "1",
  } = { ...searchParams };

  let price: "desc" | "asc" | undefined;
  let createdAt: "desc" | "asc" | undefined;
  if (sort) {
    switch (sort) {
      case "price:asc":
        price = "asc";
        break;
      case "price:desc":
        price = "desc";
        break;
      case "createdAt:asc":
        createdAt = "asc";
        break;
      case "createdAt:desc":
        createdAt = "desc";
        break;
      default:
        notFound();
    }
  }

  const pattern = new RegExp(/^in:\w+(\s\w+)*(,\w+(\s\w+)*)*$/);
  if (
    (brand && !pattern.test(brand)) ||
    (gender && !pattern.test(gender)) ||
    (category && !pattern.test(category))
  ) {
    notFound();
  }

  const brands = brand?.replace("in:", "").split(",");
  const genders = gender?.replace("in:", "").split(",");
  const categories = category?.replace("in:", "").split(",");

  const total = await getProductsPages({
    brands,
    genders,
    categories,
    distinct: ["name", "gender"],
  });

  const page = Number(part);
  if (
    page < 1 ||
    isNaN(page) ||
    (total === 0 && page !== 1) ||
    (total > 0 && page > total)
  ) {
    notFound();
  }

  return (
    <div className="mx-auto flex flex-col gap-8 px-4 py-8 lg:container">
      <div className="grid max-w-4xl grid-cols-2 gap-2 md:grid-cols-4">
        <ProductSortSelect />
        <ProductBrandSelect />
        <ProductCategorySelect />
        <ProductGenderSelect />
      </div>
      <Suspense fallback={<ListSkeleton length={12} />}>
        <ProductList
          query={getProducts.bind(null, {
            price,
            brands,
            genders,
            createdAt,
            categories,
            take: 12,
            skip: (page - 1) * 12,
            distinct: ["name", "gender"],
          })}
        />
      </Suspense>
      <Pagination total={total} />
    </div>
  );
}
