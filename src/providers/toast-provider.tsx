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
            icon: null,
            style: {
              color: "#FFFFFF",
              borderRadius: "0px",
              padding: "12px 14px",
              background: "#F31260",
            },
          },
        }}
      />
    </>
  );
}
