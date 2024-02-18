"use client";

import { useEffect } from "react";
import { Button } from "@nextui-org/react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const handleReset = () => {
    reset();
  };

  return (
    <div className="px-4 py-8 mx-auto max-w-lg flex flex-col items-center gap-4">
      <div className="text-4xl font-bold text-center">
        OOPS! SOMETHING WENT WRONG
      </div>
      <div className="text-center">
        Sorry, but it seems like an unexpected error has occurred. Please try
        again later.
      </div>
      <Button
        className="bg-foreground text-white font-bold"
        radius="none"
        type="button"
        onClick={handleReset}
      >
        TRY AGAIN
      </Button>
    </div>
  );
}
