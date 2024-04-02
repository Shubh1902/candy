"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Projects() {
  const pathname = usePathname();
  return (
    <div className="flex flex-col items-center  text-2xl  text-slate-200 *:p-2">
      <Link href={`${pathname}/file-explorer`}>File Explorer</Link>
      <Link href={`${pathname}/autocomplete`}>Autocomplete</Link>
    </div>
  );
}
