"use client";

import { Select, SelectItem } from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { type Selection } from "@nextui-org/react";

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

export default function ProductCategorySelect() {
  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const category = searchParams.get("category");
  const categories = category
    ? new Set<string>(category.replace("in:", "").split(","))
    : new Set<string>();

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
      label="CATEGORY"
      selectionMode="multiple"
      placeholder="SELECT A CATEGORY"
      selectedKeys={categories}
      onSelectionChange={handleNextPage}
      popoverProps={{
        radius: "none",
      }}
      listboxProps={{
        itemClasses: {
          base: ["rounded-none"],
        },
      }}
    >
      {CATEGORIES.map((classification) => (
        <SelectItem key={classification.value} value={classification.value}>
          {classification.name.toUpperCase()}
        </SelectItem>
      ))}
    </Select>
  );
}
