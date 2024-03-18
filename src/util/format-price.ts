import { Prisma } from "@prisma/client";
import * as runtime from "@prisma/client/runtime/library.js";

export default function formatPrice(price: runtime.Decimal | Prisma.Decimal) {
  if (!(price instanceof Prisma.Decimal)) {
    price = new Prisma.Decimal(price);
  }

  return (
    "₱" +
    price.toNumber().toLocaleString("en", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  );
}
