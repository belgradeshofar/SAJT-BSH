"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "NASLOVNA" },
    { href: "/najnovije-vesti", label: "NAJNOVIJE VESTI" },
    { href: "/kultura", label: "KULTURA" },
    { href: "/istorija", label: "ISTORIJA" },
    { href: "/holokaust", label: "HOLOKAUST" },
    { href: "/religija", label: "RELIGIJA" },
    { href: "/umetnost", label: "UMETNOST" },
    { href: "/blog", label: "BLOG" },
    { href: "/bsh-newsletter", label: "SH NEWSLETTER" },
  ];

  return (
    <nav className="bg-gray-100 py-3">
      <div className="overflow-x-auto no-scrollbar">
        <ul className="flex space-x-4 whitespace-nowrap px-4 justify-start lg:justify-center">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;
            let baseClasses = "text-base font-bold ";

            if (link.label === "SH NEWSLETTER") {
              baseClasses += "bg-[#002855] text-white py-1 px-2 rounded hover:bg-[#002855] hover:text-white";
            } else {
              baseClasses += "text-[var(--primary-color)] hover:text-[var(--primary-color)]";
              if (isActive) {
                baseClasses += " border-b-4 border-[var(--primary-color)]";
              }
            }

            return (
              <li key={index}>
                <Link href={link.href} legacyBehavior>
                  <a className={baseClasses}>{link.label}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
