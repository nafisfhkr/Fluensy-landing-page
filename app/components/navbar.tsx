"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#features", label: "Features" },
    { href: "#resources", label: "Resources" },
    { href: "#pricing", label: "Pricing" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-foreground shadow-md" : "bg-foreground"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        {/* LOGO */}
        <Image
          src="/img/logo-fluensy.png"
          alt="Fluensy Logo"
          width={120}
          height={40}
          className="object-contain"
        />

        {/* MENU CENTER */}
        <ul className="flex gap-10 items-center">
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

        {/* RIGHT BUTTONS */}
        <div className="flex items-center gap-3">
          <a
            href="#login"
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
      </div>
    </nav>
  );
}
