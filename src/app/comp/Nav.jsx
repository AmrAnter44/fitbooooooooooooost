"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

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
      <Link href="/">
        <Image
          src="/whitelogo.png"
          alt="Logo"
          className="w-16 h-16 my-auto cursor-pointer"
          width={80}
          height={80}
        />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-amber-300 font-medium">
        <li>
          <Link 
            href="/" 
            className="cursor-pointer hover:text-white transition"
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            href="/coach" 
            className="cursor-pointer hover:text-white transition"
          >
            Coach
          </Link>
        </li>
        <li>
          <Link 
            href="/gym" 
            className="cursor-pointer hover:text-white transition"
          >
            Gym
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-amber-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 py-4 md:hidden">
          <div className="flex flex-col items-center gap-4 text-amber-300 font-medium">
            <Link 
              href="/" 
              onClick={() => setIsOpen(false)}
              className="hover:text-white transition"
            >
              Home
            </Link>
            <Link 
              href="/coach" 
              onClick={() => setIsOpen(false)}
              className="hover:text-white transition"
            >
              Coach
            </Link>
            <Link 
              href="/gym" 
              onClick={() => setIsOpen(false)}
              className="hover:text-white transition"
            >
              Gym
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}