"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // أيقونات المنيو من lucide-react

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // effect بتاع الـ scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed right-0 left-0 top-0 z-20 flex items-center justify-between w-full px-4 py-2 transition-colors duration-300 ${
        isScrolled ? "bg-black/90 shadow-md" : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <Image
        src="/whitelogo.png"
        alt="Logo"
        className="w-16 h-16 my-auto"
        width={80}
        height={80}
      />

      {/* Desktop menu */}
      <ul className="hidden md:flex gap-6 text-amber-300 font-medium">
        <li className="cursor-pointer hover:text-white transition">Home</li>
        <li className="cursor-pointer hover:text-white transition">sec one</li>
        <li className="cursor-pointer hover:text-white transition">sec two</li>
      </ul>

      {/* Mobile button */}
      <button
        className="md:hidden text-amber-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full  flex flex-row justify-center items-center bg-black gap-4 py-3 text-amber-300 font-medium md:hiddentransition-all duration-300 ease-in-out  px-4 rounded hover:scale-105">
          <a href="#home" onClick={() => setIsOpen(false)}>
            Home
          </a>
          <a href="#sec1" onClick={() => setIsOpen(false)}>
            sec one
          </a>
          <a href="#sec2" onClick={() => setIsOpen(false)}>
            sec two
          </a>
        </div>
      )}
    </div>
  );
}
