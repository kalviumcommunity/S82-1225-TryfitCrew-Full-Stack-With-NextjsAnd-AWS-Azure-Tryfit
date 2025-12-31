"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import {
  ShoppingBag,
  Search,
  Menu,
  X,
  Sparkles,
  ChevronRight,
  Sun,
  Moon,
} from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Arrivals", href: "/new-arrival" },
    { name: "Boutique", href: "/products" },
    { name: "Editorial", href: "/editorial" },
    { name: "Atelier Control", href: "/shop/dashboard", special: true },
  ];

  if (!mounted) return <div className="h-20" />; // Prevents layout shift during hydration

  return (
    // NAVBAR WRAPPER: Uses Tailwind dark classes for background and text
    <nav
      className={`fixed top-0 w-full z-[10000] transition-all duration-300 font-sans 
      ${
        isScrolled
          ? "bg-[#FDFCFB]/90 dark:bg-[#0A0A0A]/90 backdrop-blur-md py-4 border-b border-black/5 dark:border-white/10"
          : "bg-transparent py-6"
      } text-neutral-900 dark:text-white`}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Italiana&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        .font-fashion { font-family: 'Italiana', serif; }
      `}</style>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 grid grid-cols-[1fr_auto_1fr] items-center">
        {/* Left: Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[10px] font-bold uppercase tracking-[2.5px] opacity-80 hover:opacity-100 hover:text-[#C5A386] transition-all
                ${link.special ? "text-[#C5A386] border border-[#C5A386]/30 px-3 py-1.5 rounded" : "text-inherit"}
              `}
            >
              <motion.span whileHover={{ y: -1 }}>{link.name}</motion.span>
            </Link>
          ))}
        </div>

        {/* Center: Logo */}
        <div className="text-center perspective-1000">
          <Link
            href="/"
            className="font-fashion text-4xl tracking-[10px] text-inherit transition-transform block"
          >
            TRYFIT
            <span className="text-xs tracking-normal text-[#C5A386] absolute top-0 -right-4">
              ®
            </span>
          </Link>
        </div>

        {/* Right: Functional Actions */}
        <div className="flex items-center gap-5 justify-end">
          {/* THEME TOGGLE BUTTON */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            className="hidden lg:flex items-center gap-2 px-6 py-2.5 rounded-full text-[9px] font-extrabold uppercase tracking-widest border border-current hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
          >
            <Sparkles size={12} className="text-[#C5A386]" />
            <Link href="/shop/signup">Collab</Link>
          </motion.button>

          <button className="p-1 hover:text-[#C5A386] transition-colors">
            <Search size={19} strokeWidth={1.5} />
          </button>

          <Link
            href="/cart"
            className="p-1 hover:text-[#C5A386] transition-colors relative"
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="absolute -top-1 -right-1.5 bg-[#C5A386] text-white text-[8px] w-3.5 h-3.5 flex items-center justify-center rounded-full font-bold">
              0
            </span>
          </Link>

          <Link href="/login" className="hidden lg:block">
            <button className="px-7 py-3 bg-neutral-900 text-white dark:bg-white dark:text-black rounded-full text-[10px] font-extrabold uppercase tracking-widest hover:bg-[#C5A386] dark:hover:bg-[#C5A386] hover:text-white dark:hover:text-white hover:-translate-y-0.5 shadow-lg transition-all">
              Sign In
            </button>
          </Link>

          {/* Hamburger (Mobile) */}
          <button
            className="lg:hidden p-1"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={26} strokeWidth={1.2} />
          </button>
        </div>
      </div>

      {/* --- Mobile Fullscreen Drawer --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 w-full h-screen bg-[#FDFCFB] dark:bg-[#0A0A0A] z-[10001] p-10 flex flex-col gap-10 text-neutral-900 dark:text-white"
          >
            <button
              className="absolute top-8 right-8 p-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} strokeWidth={1.2} />
            </button>

            <div className="flex flex-col gap-8 mt-10">
              <p className="text-[10px] font-extrabold tracking-[3px] text-[#C5A386]">
                NAVIGATION
              </p>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-fashion text-4xl flex items-center justify-between"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}{" "}
                  <ChevronRight size={24} className="text-[#C5A386]" />
                </Link>
              ))}
            </div>

            <div className="mt-auto">
              <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="w-full py-5 bg-neutral-900 text-white dark:bg-white dark:text-black rounded-full text-xs font-bold uppercase tracking-widest mb-8">
                  Member Login
                </button>
              </Link>
              <div className="flex justify-center gap-6 text-[9px] font-bold uppercase tracking-widest opacity-60">
                <Link href="#">Instagram</Link>
                <Link href="#">Atelier Journal</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
