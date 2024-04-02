import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Small Projects",
  description: "Small Javascript and React Projects for leaning purposes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="p-5">{children}</div>;
}
