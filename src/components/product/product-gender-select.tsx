"use client";

import { Select, SelectItem } from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { type Selection } from "@nextui-org/react";

const GENDERS = [
  {
    id: 1,
    name: "Men",
    value: "men",
  },
  {
    id: 2,
    name: "Women",
    value: "women",
  },
];

export default function ProductGenderSelect() {
  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const gender = searchParams.get("gender");
  const genders = gender
    ? new Set<string>(gender.replace("in:", "").split(","))
    : new Set<string>();

  const handleNextPage = (values: Selection) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if ((values as Set<string>).size > 0) {
      params.set("gender", `in:${Array.from(values).join(",")}`);
    } else {
      params.delete("gender");
    }
    push(`${pathname}?${params.toString()}`);
  };

  return (
    <Select
      size="sm"
      radius="none"
      label="GENDER"
      selectionMode="multiple"
      placeholder="SELECT A GENDER"
      selectedKeys={genders}
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
      {GENDERS.map((sex) => (
        <SelectItem key={sex.value} value={sex.value}>
          {sex.name.toUpperCase()}
        </SelectItem>
      ))}
    </Select>
  );
}
