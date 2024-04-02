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
  return (
    <div className="p-5">
      <div className="mb-2 ">
        <Link
          className="p-1 mb-2 cursor-pointer border border-slate-800"
          href={"/small-problems"}
        >
          Back
        </Link>
      </div>
      {children}
    </div>
  );
}
