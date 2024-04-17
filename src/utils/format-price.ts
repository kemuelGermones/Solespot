export default function formatPrice(price: number) {
  const amount = price.toLocaleString("en", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  
  return "₱" + amount;
}
