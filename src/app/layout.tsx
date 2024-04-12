import { type Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import Providers from "@/app/providers";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

interface LayoutProps {
  children: React.ReactNode;
}

const barlow = Barlow({
  weight: ["500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Solespot",
  description:
    "A web application store specializing in offering a diverse selection of the latest sneakers from renowned brands. The platform provides a seamless shopping experience, allowing users to browse, explore, and purchase the most sought-after sneakers in the market.",
};

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={barlow.className}>
        <Providers>
          <Header />
          <div className="min-h-[calc(100vh-20.5rem-4rem)]">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
