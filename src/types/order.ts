import type Product from "@/types/product";

interface Order {
  id: string;
  isPaid: boolean;
  orderedAt: Date;
  product: Product;
  receivedAt: Date | null;
}

export default Order;
