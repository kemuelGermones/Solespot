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
    <div className="mx-auto flex max-w-lg flex-col items-center gap-4 px-4 py-8">
      <div className="text-center text-4xl font-bold">
        OOPS! SOMETHING WENT WRONG
      </div>
      <div className="text-center">
        Sorry, but it seems like an unexpected error has occurred. Please try
        again later.
      </div>
      <Button
        className="bg-foreground font-bold text-white"
        radius="none"
        type="button"
        onPress={handleReset}
      >
        TRY AGAIN
      </Button>
    </div>
  );
}
