"use client";

import { Select, SelectItem } from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { type Selection } from "@nextui-org/react";

const BRANDS = [
  {
    id: 1,
    name: "Jordan",
    value: "jordan",
  },
  {
    id: 2,
    name: "Nike",
    value: "nike",
  },
  {
    id: 3,
    name: "Adidas",
    value: "adidas",
  },
  {
    id: 4,
    name: "Under Armour",
    value: "under armour",
  },
  {
    id: 5,
    name: "Puma",
    value: "puma",
  },
];

export default function ProductBrandSelect() {
  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const brand = searchParams.get("brand");
  const brands = brand
    ? new Set<string>(brand.replace("in:", "").split(","))
    : new Set<string>();

  const handleNextPage = (values: Selection) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if ((values as Set<string>).size > 0) {
      params.set("brand", `in:${Array.from(values).join(",")}`);
    } else {
      params.delete("brand");
    }
    push(`${pathname}?${params.toString()}`);
  };

  return (
    <Select
      size="sm"
      label="BRAND"
      radius="none"
      selectionMode="multiple"
      placeholder="SELECT A BRAND"
      selectedKeys={brands}
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
      {BRANDS.map((make) => (
        <SelectItem key={make.value} value={make.value}>
          {make.name.toUpperCase()}
        </SelectItem>
      ))}
    </Select>
  );
}
