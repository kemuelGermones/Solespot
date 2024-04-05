import type Product from "@/types/product";

interface Order {
  id: string;
  userId: string;
  productId: string;
  isPaid: boolean;
  orderedAt: Date;
  receivedAt: Date | null;
  product: Product;
}

export default Order;
