"use client";

import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import ToastProvider from "@/providers/toast-provider";

interface ProvidersProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

export default function Providers({ children }: ProvidersProps) {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <NextUIProvider>
          <ToastProvider>{children}</ToastProvider>
        </NextUIProvider>
      </QueryClientProvider>
    </SessionProvider>
  );
}
