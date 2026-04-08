"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const navItems = [
    { href: "#features", label: "Features" },
    { href: "#resources", label: "Resources" },
    { href: "/pricing", label: "Pricing" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-foreground shadow-md" : "bg-foreground"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-4">
        {/* LOGO */}
        <Image
          src="/img/logo/logo fluensy dark.svg"
          alt="Fluensy Logo"
          width={120}
          height={40}
          className="object-contain"
        />

        {/* MENU CENTER - DESKTOP */}
        <ul className="hidden md:flex gap-10 items-center">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-sm font-medium text-black hover:text-main-blue hover:font-semibold transition"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* RIGHT BUTTONS - DESKTOP */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/login"
            className="text-sm font-medium text-main-blue hover:text-white hover:bg-main-blue px-5 py-2 rounded-full border border-main-blue transition"
          >
            Login
          </a>

          <a
            href="#"
            className="px-5 py-2 rounded-full bg-main-blue text-white text-sm font-semibold hover:bg-blue-700 transition"
          >
            Try for Free
          </a>
        </div>

        {/* HAMBURGER MENU - MOBILE */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 justify-center items-center w-8 h-8"
        >
          <span
            className={`block h-0.5 w-6 bg-black transition-all duration-300 ${
              mobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-black transition-all duration-300 ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-black transition-all duration-300 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-foreground border-t border-gray-200 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex flex-col px-4 py-4 gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMobileMenu}
                className="text-sm font-medium text-black hover:text-main-blue transition"
              >
                {item.label}
              </a>
            ))}

            <div className="border-t border-gray-200 pt-4 flex flex-col gap-3">
              <a
                href="#login"
                onClick={closeMobileMenu}
                className="text-sm font-medium text-main-blue hover:text-white hover:bg-main-blue px-5 py-2 rounded-full border border-main-blue transition text-center"
              >
                Login
              </a>

              <a
                href="#"
                onClick={closeMobileMenu}
                className="px-5 py-2 rounded-full bg-main-blue text-white text-sm font-semibold hover:bg-blue-700 transition text-center"
              >
                Try for Free
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
