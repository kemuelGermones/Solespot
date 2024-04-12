import { Button } from "@nextui-org/react";
import Link from "next/link";
import {
  BsFacebook,
  BsInstagram,
  BsTwitterX,
  BsLinkedin,
} from "react-icons/bs";

const LINKS = [
  {
    id: 1,
    url: "https://www.facebook.com/",
    icon: <BsFacebook size="1.5em" />,
  },
  {
    id: 2,
    url: "https://www.instagram.com/",
    icon: <BsInstagram size="1.5em" />,
  },
  {
    id: 3,
    url: "https://twitter.com/",
    icon: <BsTwitterX size="1.5em" />,
  },
  {
    id: 4,
    url: "https://www.linkedin.com/",
    icon: <BsLinkedin size="1.5em" />,
  },
];

export default function Footer() {
  return (
    <div className="flex flex-col items-center gap-16 bg-foreground px-4 py-8">
      <div className="flex max-w-lg flex-col items-center gap-4">
        <div className="text-lg font-bold text-white">SOLESPOT</div>
        <div className="text-center text-white">
          A web application store specializing in offering a diverse selection
          of the latest sneakers from renowned brands. The platform provides a
          seamless shopping experience, allowing users to browse, explore, and
          purchase the most sought-after sneakers in the market.
        </div>
        <div className="flex gap-4">
          {LINKS.map((link) => (
            <Button
              className="text-white"
              type="button"
              radius="full"
              target="_blank"
              variant="light"
              as={Link}
              key={link.id}
              href={link.url}
              isIconOnly={true}
            >
              {link.icon}
            </Button>
          ))}
        </div>
      </div>
      <div className="text-center text-sm text-white">
        Solespot Inc &copy; 2024. All rights reserved.
      </div>
    </div>
  );
}
