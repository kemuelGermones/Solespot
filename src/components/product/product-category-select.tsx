"use client";

import { Select, SelectItem } from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { Selection } from "@nextui-org/react";

interface ProductCategorySelectProps {
  categories: string[];
}

const CATEGORIES = [
  {
    id: 1,
    name: "Basketball",
    value: "basketball",
  },
  {
    id: 2,
    name: "Lifestyle",
    value: "lifestyle",
  },
  {
    id: 3,
    name: "Apparel",
    value: "apparel",
  },
];

export default function ProductCategorySelect({
  categories,
}: ProductCategorySelectProps) {
  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleNextPage = (values: Selection) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if ((values as Set<string>).size > 0) {
      params.set("category", `in:${Array.from(values).join(",")}`);
    } else {
      params.delete("category");
    }
    push(`${pathname}?${params.toString()}`);
  };

  return (
    <Select
      size="sm"
      radius="none"
      selectionMode="multiple"
      label="CATEGORY"
      placeholder="SELECT A CATEGORY"
      popoverProps={{
        radius: "none",
      }}
      listboxProps={{
        itemClasses: {
          base: ["rounded-none"],
        },
      }}
      selectedKeys={new Set(categories)}
      onSelectionChange={handleNextPage}
    >
      {CATEGORIES.map((category) => (
        <SelectItem value={category.value} key={category.value}>
          {category.name.toUpperCase()}
        </SelectItem>
      ))}
    </Select>
  );
}
