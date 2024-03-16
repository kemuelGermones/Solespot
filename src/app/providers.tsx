"use client";

import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CartContextProvider } from "@/store/cart-context";

interface ProvidersProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

export default function Providers({ children }: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <CartContextProvider>{children}</CartContextProvider>
      </NextUIProvider>
    </QueryClientProvider>
  );
}
