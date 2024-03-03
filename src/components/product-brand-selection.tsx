"use client";

import { Select, SelectItem } from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { Selection } from "@nextui-org/react";

interface ProductBrandSelectionProps {
  brand: string[];
}

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

export default function ProductBrandSelection({
  brand,
}: ProductBrandSelectionProps) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleNextPage = (values: Selection) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if ((values as Set<string>).size > 0) {
      params.set("brand", `in:${Array.from(values).join(",")}`);
    } else {
      params.delete("brand");
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <Select
      size="sm"
      radius="none"
      selectionMode="multiple"
      label="BRAND"
      placeholder="SELECT A BRAND"
      popoverProps={{
        radius: "none",
      }}
      listboxProps={{
        itemClasses: {
          base: ["rounded-none"],
        },
      }}
      selectedKeys={new Set(brand)}
      onSelectionChange={handleNextPage}
    >
      {BRANDS.map((brand) => (
        <SelectItem value={brand.value} key={brand.value}>
          {brand.name.toUpperCase()}
        </SelectItem>
      ))}
    </Select>
  );
}
