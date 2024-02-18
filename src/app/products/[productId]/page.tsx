import ProductDetails from "@/components/product-details";
import TopProductList from "@/components/top-product-list";
import getTopRecommendedProducts from "@/queries/get-top-recommended-products";

export default function Product() {
  return (
    <>
      <ProductDetails />
      <TopProductList
        title="Recommended"
        query={getTopRecommendedProducts.bind(
          null,
          "Jordan Air Ship PE SP 'Diffused Blue'"
        )}
      />
    </>
  );
}
