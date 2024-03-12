"use client";

import { Select, SelectItem } from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { Selection } from "@nextui-org/react";

interface ProductSortSelectProps {
  sort: string;
}

const ORDERS = [
  {
    id: 1,
    name: "Newest to Oldest",
    value: "createdAt:desc",
  },
  {
    id: 2,
    name: "Oldest to Newest",
    value: "createdAt:asc",
  },
  {
    id: 3,
    name: "Price (High to Low)",
    value: "price:desc",
  },
  {
    id: 4,
    name: "Price (Low to High)",
    value: "price:asc",
  },
];

export default function ProductSortSelect({ sort }: ProductSortSelectProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleNextPage = (values: Selection) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if ((values as Set<string>).size > 0) {
      params.set("sort", Array.from(values).join(","));
    } else {
      params.delete("sort");
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <Select
      size="sm"
      radius="none"
      label="SORT"
      placeholder="SELECT AN ORDER"
      popoverProps={{
        radius: "none",
      }}
      listboxProps={{
        itemClasses: {
          base: ["rounded-none"],
        },
      }}
      selectedKeys={new Set([sort])}
      onSelectionChange={handleNextPage}
    >
      {ORDERS.map((order) => (
        <SelectItem value={order.value} key={order.value}>
          {order.name.toUpperCase()}
        </SelectItem>
      ))}
    </Select>
  );
}
