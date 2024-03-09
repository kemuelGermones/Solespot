import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center gap-4 px-4 py-8">
      <div className="text-center text-4xl font-bold">OOPS! PAGE NOT FOUND</div>
      <div className="text-center">
        The page you are looking for doesn't exist or an other error occured. Go
        back, or head over to the homepage.
      </div>
      <Link href="/">
        <Button
          className="bg-foreground font-bold text-white"
          radius="none"
          type="button"
        >
          HOMEPAGE
        </Button>
      </Link>
    </div>
  );
}
