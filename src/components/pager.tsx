"use client";

import { Pagination } from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface PagerProps {
  page: number;
  total: number;
}

export default function Pager({ page, total }: PagerProps) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleNextPage = (value: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", value.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <Pagination
      className="pt-12 px-0"
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
