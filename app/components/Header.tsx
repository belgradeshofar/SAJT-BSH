"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
  FaBars,
  FaXmark,    // Icon for closing the menu
  FaXTwitter, // Icon for X (formerly Twitter)
} from "react-icons/fa6";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="custom-header text-white">
      <div className="container mx-auto flex justify-between items-center py-2 px-4">
        {/* Logo */}
        <Link href="/" legacyBehavior>
          <a
            className="flex items-center"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <img
              src="/logo.png"
              alt="Belgrade Shofar Logo"
              className="h-10 mr-2"
            />
          </a>
        </Link>

        {/* Desktop menu */}
        <div className="hidden lg:flex items-center space-x-3">
          <div className="flex space-x-2">
            <a
              href="https://www.instagram.com/izraelsrbija/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-gray-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61573469193373"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-gray-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com/izraelsrbija"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-gray-300"
            >
              <FaXTwitter />
            </a>
          </div>
          <Link href="/o-nama" legacyBehavior>
            <a className="text-white hover:text-gray-300 text-sm font-bold">
              About
            </a>
          </Link>
          <Link href="/kontakt" legacyBehavior>
            <a className="text-white hover:text-gray-300 text-sm font-bold">
              Contact
            </a>
          </Link>
          <a
            href="/doniraj"
            className="bg-yellow-300 text-black py-1 px-2 rounded hover:bg-yellow-400 text-sm font-bold"
          >
            Donate
          </a>
        </div>

        {/* Mobile menu icon */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <FaXmark className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile/tablet menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[var(--primary-color)]">
          <div className="container mx-auto flex flex-col items-center space-y-4 py-4">
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-gray-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-gray-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-gray-300"
              >
                <FaXTwitter />
              </a>
            </div>
            <Link href="/o-nama" legacyBehavior>
              <a className="text-white hover:text-gray-300 text-sm font-bold">
                About
              </a>
            </Link>
            <Link href="/kontakt" legacyBehavior>
              <a className="text-white hover:text-gray-300 text-sm font-bold">
                Contact
              </a>
            </Link>
            <a
              href="/doniraj"
              className="bg-yellow-300 text-black py-1 px-2 rounded hover:bg-yellow-400 text-sm font-bold"
            >
              Donate
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
