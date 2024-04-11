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

  const page = searchParams.get("page") || "1";

  const handleNextPage = (value: number) => {
    const params = new URLSearchParams(window.location.search);
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
      page={Number(page)}
      onChange={handleNextPage}
    />
  );
}
