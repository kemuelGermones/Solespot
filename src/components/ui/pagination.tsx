"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Pagination as Pager } from "@nextui-org/react";

interface PaginationProps {
  total: number;
}

export default function Pagination({ total }: PaginationProps) {
  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const page = searchParams.get("page") ?? "1";

  const handleNextPage = (value: number) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", value.toString());
    push(`${pathname}?${params.toString()}`);
  };

  if (total < 1) {
    return null;
  }

  return (
    <Pager
      radius="none"
      total={total}
      page={Number(page)}
      onChange={handleNextPage}
      classNames={{
        item: "font-bold",
        wrapper: "mx-auto",
        cursor: "bg-foreground text-white font-bold",
      }}
    />
  );
}
