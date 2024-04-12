import type Product from "@/types/product";

interface Order {
  id: string;
  userId: string;
  isPaid: boolean;
  orderedAt: Date;
  product: Product;
  productId: string;
  receivedAt: Date | null;
}

export default Order;
