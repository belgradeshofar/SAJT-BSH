"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#102854] text-white text-sm py-6">
      <div className="container mx-auto px-4 flex flex-wrap items-center justify-center space-x-4 text-center">
        {/* Kratka © poruka */}
        <p className="whitespace-nowrap">
          © {currentYear} Shalom.rs & Metapolis Center. All rights reserved.
        </p>

        {/* Dva mala žuta dugmeta */}
        <Link
          href="/o-nama-srpski"
          className="bg-yellow-300 text-black px-3 py-1 rounded hover:bg-yellow-400"
        >
          O nama
        </Link>
        <Link
          href="/kontakt-srpski"
          className="bg-yellow-300 text-black px-3 py-1 rounded hover:bg-yellow-400"
        >
          Kontakt
        </Link>
      </div>
    </footer>
  );
}
