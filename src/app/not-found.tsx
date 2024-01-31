import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="px-4 py-8 mx-auto max-w-xl flex flex-col items-center gap-4">
      <div className="text-4xl font-bold text-center">OOPS! PAGE NOT FOUND</div>
      <div className="text-center">
        The page you are looking for doesn't exist or an other error occured. Go
        back, or head over to the homepage.
      </div>
      <Link href="/">
        <Button
          className="bg-foreground text-white font-bold"
          radius="none"
          type="button"
        >
          HOMEPAGE
        </Button>
      </Link>
    </div>
  );
}