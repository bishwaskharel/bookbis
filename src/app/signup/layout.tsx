import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get the Ebook | Bishu Graphis Design",
  description: "Enter your email to receive the free Bishu Graphis Design ebook.",
};

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
