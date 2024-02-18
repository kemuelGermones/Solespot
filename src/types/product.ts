import type { Prisma } from "@prisma/client";

type Product = Prisma.PickEnumerable<
  Prisma.ProductGroupByOutputType,
  "name" | "price" | "brand" | "gender" | "createdAt"
> & { image: string };

export default Product;
