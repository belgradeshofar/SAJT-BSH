"use client";

import { useState, ChangeEvent } from "react";
import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
  FaBars,
  FaXmark,      // ← umesto FaTimes
  FaXTwitter,   // ← ikona za X (bivši Twitter)
} from "react-icons/fa6";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    console.log("Language changed to:", newLang);
  };

  return (
    <header className="custom-header text-white">
      <div className="container mx-auto flex justify-between items-center py-2 px-4">
        {/* Logo */}
        <Link href="/" legacyBehavior>
          <a className="flex items-center" style={{ color: "inherit", textDecoration: "none" }}>
            <img src="/logo.png" alt="Belgrade Shofar Logo" className="h-10 mr-2" />
          </a>
        </Link>

        {/* Desktop meni */}
        <div className="hidden lg:flex items-center space-x-3">
          <div className="flex space-x-2">
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
          <select
            onChange={handleLanguageChange}
            className="bg-transparent text-white text-sm font-bold"
            defaultValue="en"
          >
            <option value="en">EN</option>
            <option value="he">HE</option>
            <option value="ru">RU</option>
          </select>
          <Link href="/o-nama" legacyBehavior>
            <a className="text-white hover:text-gray-300 text-sm font-bold">O nama</a>
          </Link>
          <Link href="/kontakt" legacyBehavior>
            <a className="text-white hover:text-gray-300 text-sm font-bold">Kontakt</a>
          </Link>
          <a
            href="/doniraj"
            className="bg-yellow-300 text-black py-1 px-2 rounded hover:bg-yellow-400 text-sm font-bold"
          >
            Donate
          </a>
        </div>

        {/* Mobilni meni toggle */}
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

      {/* Mobilni/tablet meni */}
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
            <select
              onChange={handleLanguageChange}
              className="bg-transparent text-white text-sm font-bold"
              defaultValue="en"
            >
              <option value="en">EN</option>
              <option value="he">HE</option>
              <option value="ru">RU</option>
            </select>
            <Link href="/o-nama" legacyBehavior>
              <a className="text-white hover:text-gray-300 text-sm font-bold">O nama</a>
            </Link>
            <Link href="/kontakt" legacyBehavior>
              <a className="text-white hover:text-gray-300 text-sm font-bold">Kontakt</a>
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
