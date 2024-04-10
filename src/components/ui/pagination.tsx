"use client";

import { Pagination as Pager } from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  page: number;
  total: number;
}

export default function Pagination({ page, total }: PaginationProps) {
  const { push } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleNextPage = (value: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", value.toString());
    push(`${pathname}?${params.toString()}`);
  };

  return (
    <Pager
      radius="none"
      classNames={{
        wrapper: "mx-auto",
        item: "font-bold",
        cursor: "bg-foreground text-white font-bold",
      }}
      total={total}
      page={page}
      onChange={handleNextPage}
    />
  );
}
