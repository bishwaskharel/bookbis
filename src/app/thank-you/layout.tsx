import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | Bishu Graphis Design",
  description: "Thanks for your purchase. Your ebook is on its way.",
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
