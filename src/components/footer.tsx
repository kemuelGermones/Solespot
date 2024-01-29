import Link from "next/link";
import {
  BsFacebook,
  BsInstagram,
  BsTwitterX,
  BsLinkedin,
} from "react-icons/bs";

export default function Footer() {
  return (
    <div className="bg-foreground px-4 py-8 text-white flex flex-col gap-16 items-center">
      <div className="flex flex-col gap-4 items-center max-w-xl">
        <div className="font-bold text-lg">SOLESPOT</div>
        <div className="text-center">
          A web application store specializing in offering a diverse selection
          of the latest sneakers from renowned brands. The platform provides a
          seamless shopping experience, allowing users to browse, explore, and
          purchase the most sought-after sneakers in the market.
        </div>
        <div className="flex gap-4">
          <Link href="https://www.facebook.com/" target="_blank">
            <BsFacebook size="1.5em" />
          </Link>
          <Link href="https://www.instagram.com/" target="_blank">
            <BsInstagram size="1.5em" />
          </Link>
          <Link href="https://twitter.com/" target="_blank">
            <BsTwitterX size="1.5em" />
          </Link>
          <Link href="https://www.linkedin.com/" target="_blank">
            <BsLinkedin size="1.5em" />
          </Link>
        </div>
      </div>
      <div className="text-sm text-center">
        Solespot Inc © 2024. All rights reserved.
      </div>
    </div>
  );
}
