"use client";

import { Toaster } from "react-hot-toast";

interface ToastProviderProps {
  children: React.ReactNode;
}

export default function ToastProvider({ children }: ToastProviderProps) {
  return (
    <>
      {children}
      <Toaster
        toastOptions={{
          position: "top-right",
          error: {
            style: {
              color: "#FFFFFF",
              background: "#F31260",
              borderRadius: "0px",
              padding: "12px 14px",
            },
            icon: null,
          },
        }}
      />
    </>
  );
}
