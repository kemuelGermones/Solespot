import type { Product as Commodity, Image } from "@prisma/client";

type Product = Commodity & { images: { image: Image }[] };

export default Product;
