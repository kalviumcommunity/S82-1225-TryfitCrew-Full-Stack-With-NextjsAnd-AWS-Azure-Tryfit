"use client";

import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
  Truck,
  RotateCcw,
  Gem,
  ShieldCheck,
  ArrowRight,
  Menu,
  Sun,
  Moon,
} from "lucide-react";

// Components
import OrbitSystem from "./components/home/Testimonals";
import CircularText from "./components/home/CircularText";
import Footer from "./components/home/Footer";

// --- Types & Interfaces ---

interface FanItem {
  id: number;
  rot: number;
  y: number;
  z: number;
  img: string;
  name: string;
  price: string;
  center?: boolean;
}

interface CategoryItem {
  title: string;
  sub: string;
  img: string;
  path: string;
}

// --- Theme Toggle Component ---
const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {}, []);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default async function CompleteFashionLandingPage() {
  // Animation Variants typed strictly
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const fadeInUp: Variants = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] },
    viewport: { once: true },
  };

  // Data Arrays
  const fanItems: FanItem[] = [
    {
      id: 1,
      rot: -10,
      y: 30,
      z: 5,
      img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000",
      name: "Editorial Coat",
      price: "$240",
    },
    {
      id: 2,
      rot: -5,
      y: 15,
      z: 10,
      img: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1000",
      name: "Velvet Dress",
      price: "$180",
    },
    {
      id: 3,
      rot: 0,
      y: 0,
      z: 20,
      center: true,
      img: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?q=80&w=1000",
      name: "Silk Slip",
      price: "$150",
    },
    {
      id: 4,
      rot: 5,
      y: 15,
      z: 10,
      img: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=1000",
      name: "Summer Linen",
      price: "$120",
    },
    {
      id: 5,
      rot: 10,
      y: 30,
      z: 5,
      img: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1000",
      name: "Atelier Suit",
      price: "$350",
    },
  ];

  const categoryItems: CategoryItem[] = [
    {
      title: "Women",
      sub: "Elegance Redefined",
      img: "https://images.unsplash.com/photo-1581338834647-b0fb40704e21?q=80&w=1200&auto=format&fit=crop",
      path: "/products/womens",
    },
    {
      title: "Men",
      sub: "Modern Tailoring",
      img: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1200&auto=format&fit=crop",
      path: "/products/mens",
    },
    {
      title: "Gen Z",
      sub: "Street Atelier",
      img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
      path: "/products/genzs",
    },
  ];

  return (
    <main className="w-full min-h-screen font-sans text-neutral-900 bg-white dark:bg-[#0f0f0f] dark:text-gray-100 transition-colors duration-300 overflow-x-hidden">
      {/* Global Styles for Animations/Fonts */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Italiana&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap");

        .font-heading {
          font-family: "Italiana", serif;
        }
        .font-body {
          font-family: "Plus Jakarta Sans", sans-serif;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: scroll 30s linear infinite;
        }
      `}</style>

      {/* --- Theme Toggle Button --- */}
      <ThemeToggle />

      {/* --- Navbar (Placeholder) --- */}
      {/* Add your Navbar component here */}

      {/* --- Hero Section --- */}
      <section className="container mx-auto px-4 md:px-12 pt-44 pb-20 text-center relative z-10">
        <motion.h1
          className="font-heading text-4xl md:text-6xl lg:text-[88px] leading-none mb-12 uppercase text-neutral-900 dark:text-white transition-colors duration-300"
          {...fadeInUp}
        >
          Dive into a{" "}
          <span className="inline-flex items-center justify-center w-8 h-8 md:w-12 md:h-12 bg-[#a3d1c6] rounded-full mx-2 align-middle text-xl text-neutral-900">
            ✴️
          </span>{" "}
          world of <br className="hidden md:block" /> endless possibilities
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:h-[620px]">
          {/* Left Card */}
          <motion.div
            className="md:col-span-4 relative rounded-[32px] overflow-hidden bg-gray-100 dark:bg-[#1a1a1a] h-[450px] md:h-full group transition-colors duration-300"
            {...fadeInUp}
          >
            <img
              src="https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1964&auto=format&fit=crop"
              alt="Model A"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 dark:opacity-80"
            />
            <span className="absolute top-[25%] right-[10%] bg-white/70 dark:bg-black/60 backdrop-blur-md px-5 py-2 rounded-full text-[11px] font-bold border border-white/40 shadow-lg text-neutral-900 dark:text-white transition-colors duration-300">
              $ 200.00
            </span>
            <span className="absolute bottom-[20%] left-[15%] bg-white/70 dark:bg-black/60 backdrop-blur-md px-5 py-2 rounded-full text-[11px] font-bold border border-white/40 shadow-lg text-neutral-900 dark:text-white transition-colors duration-300">
              $ 125.00
            </span>
          </motion.div>

          {/* Center Controls */}
          <div className="md:col-span-3 flex flex-col justify-center gap-4">
            <Link href="/products/all-products" className="no-underline">
              <motion.div
                className="bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 py-6 px-8 rounded-full flex justify-between items-center font-semibold text-sm transition-transform hover:-translate-y-1 shadow-xl duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                SHOP NOW <ArrowRight size={20} />
              </motion.div>
            </Link>

            <Link
              href="/product"
              className="block text-center border border-gray-200 dark:border-gray-700 py-5 rounded-full text-[12px] font-bold uppercase tracking-widest text-neutral-900 dark:text-white hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors duration-300"
            >
              Browse Catalog
            </Link>

            <div className="relative flex-grow rounded-[32px] overflow-hidden bg-[#f5f5f5] dark:bg-[#1a1a1a] min-h-[220px] transition-colors duration-300">
              <img
                src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1974&auto=format&fit=crop"
                alt="Season Drop"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 text-white text-left">
                <p className="text-[10px] uppercase font-bold opacity-90">
                  Summer 2025
                </p>
                <p className="text-lg font-bold mt-1">Linen Essentials</p>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <motion.div
            className="md:col-span-5 relative rounded-[32px] overflow-hidden bg-gray-100 dark:bg-[#1a1a1a] h-[450px] md:h-full group transition-colors duration-300"
            {...fadeInUp}
          >
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop"
              alt="Model B"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 dark:opacity-80"
            />
            <div className="absolute bottom-8 w-full px-8">
              <div className="bg-white/90 dark:bg-black/80 backdrop-blur-sm py-4 rounded-full text-center text-[11px] font-bold uppercase shadow-lg text-neutral-900 dark:text-white border border-white/20 transition-colors duration-300">
                Limited Edition — $ 480
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Benefits Marquee --- */}
      <div className="w-full bg-neutral-900 text-white py-6 overflow-hidden my-20 dark:bg-neutral-800 transition-colors duration-300">
        <div className="flex whitespace-nowrap animate-marquee gap-16">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-[2px]"
            >
              <span className="text-[#a3d1c6]">
                {i % 4 === 0 && <Truck size={18} />}
                {i % 4 === 1 && <RotateCcw size={18} />}
                {i % 4 === 2 && <Gem size={18} />}
                {i % 4 === 3 && <ShieldCheck size={18} />}
              </span>
              <span>
                {i % 4 === 0 && "Free Global Shipping"}
                {i % 4 === 1 && "30-Day Easy Returns"}
                {i % 4 === 2 && "Premium Craftsmanship"}
                {i % 4 === 3 && "Secure Checkout"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* --- Featured Collection (Fan Carousel) --- */}
      <section className="py-24 text-center relative overflow-hidden bg-[#FAFAFA] dark:bg-[#141414] transition-colors duration-300">
        <motion.h2
          className="font-heading text-4xl md:text-5xl mb-4 text-neutral-900 dark:text-white transition-colors duration-300"
          {...fadeInUp}
        >
          The Curated Edit
        </motion.h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-16 tracking-widest uppercase transition-colors duration-300">
          Handpicked essentials for the modern wardrobe
        </p>

        {/* Fan Container */}
        <div className="flex justify-center items-center h-[500px] perspective-1000 relative flex-wrap md:flex-nowrap px-4">
          {fanItems.map((item) => (
            <motion.div
              key={item.id}
              className="w-[260px] h-[400px] rounded-[20px] overflow-hidden relative shadow-xl border border-white dark:border-gray-700 bg-white dark:bg-gray-800 transition-all duration-500 cursor-pointer -ml-[80px] first:ml-0"
              initial={{ rotate: item.rot, y: 50, opacity: 0 }}
              whileInView={{ rotate: item.rot, y: item.y, opacity: 1 }}
              whileHover={{
                y: -30,
                rotate: 0,
                scale: 1.1,
                zIndex: 100,
                marginRight: 40,
                marginLeft: 40,
                borderColor: "#C5A386",
              }}
              viewport={{ once: true }}
              style={{ zIndex: item.z }}
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              {/* Overlay on Hover */}
              <div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/80 to-transparent text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-xs font-semibold uppercase tracking-widest">
                  {item.name}
                </p>
                <p className="text-base font-bold font-heading text-[#C5A386]">
                  {item.price}
                </p>
                <div className="flex items-center mt-2 text-[10px] font-bold gap-1">
                  SHOP LOOK <ArrowRight size={14} className="text-[#C5A386]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Category Section (Grid) --- */}
      <section className="py-24 px-4 md:px-12 bg-white dark:bg-[#0f0f0f] transition-colors duration-300">
        <div className="text-center mb-16">
          <motion.h2
            className="font-heading text-4xl md:text-5xl mb-4 text-neutral-900 dark:text-white transition-colors duration-300"
            {...fadeInUp}
          >
            Shop By Category
          </motion.h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 tracking-widest uppercase transition-colors duration-300">
            Define your silhouette
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1600px] mx-auto">
          {categoryItems.map((cat, i) => (
            <motion.div
              key={i}
              className="relative h-[500px] md:h-[750px] overflow-hidden cursor-pointer group bg-neutral-900"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src={cat.img}
                alt={cat.title}
                className="w-full h-full object-cover opacity-90 transition-all duration-[1200ms] group-hover:scale-110 group-hover:opacity-70"
              />
              {/* Border Frame */}
              <div className="absolute inset-5 border border-white/20 z-10 pointer-events-none transition-colors duration-300 group-hover:border-[#C5A386]/60"></div>

              {/* Content Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end items-center pb-16 z-20">
                <span className="text-[11px] font-bold text-[#C5A386] uppercase tracking-[3px] mb-4 translate-y-5 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  {cat.sub}
                </span>
                <h3 className="text-white font-heading text-6xl leading-none mb-8 transition-transform duration-500 group-hover:-translate-y-2">
                  {cat.title}
                </h3>
                <Link href={cat.path}>
                  <button className="bg-white text-neutral-900 px-10 py-4 text-[11px] font-extrabold uppercase tracking-widest rounded-full opacity-0 translate-y-5 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-[#C5A386] hover:text-white">
                    Explore Collection
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- Service Model (Timeline) --- */}
      <section className="py-24 px-6 bg-[#FAFAFA] dark:bg-[#141414] relative overflow-hidden transition-colors duration-300">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2
            className="font-heading text-4xl md:text-5xl mb-4 text-neutral-900 dark:text-white transition-colors duration-300"
            {...fadeInUp}
          >
            The Private Fitting Room
          </motion.h2>
          <motion.p
            className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed transition-colors duration-300"
            {...fadeInUp}
          >
            Skip the changing room queues. We bring the boutique experience
            directly to your doorstep with our signature 30-minute trial
            service.
          </motion.p>
        </div>

        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-[1px] bg-[#C5A386]/30 z-0"></div>

          {/* Step 1 */}
          <motion.div
            className="bg-white dark:bg-[#1e1e1e] p-10 rounded-[30px] text-center relative z-10 border border-gray-100 dark:border-gray-800 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-heading text-6xl text-gray-100 dark:text-white/5 absolute top-5 right-8 transition-colors duration-300">
              01
            </span>
            <div className="w-20 h-20 bg-white dark:bg-[#2a2a2a] border border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm relative z-20 group-hover:border-[#C5A386] transition-colors duration-300">
              <Truck
                size={32}
                strokeWidth={1.5}
                className="text-neutral-900 dark:text-white transition-colors duration-300"
              />
            </div>
            <h3 className="text-lg font-extrabold uppercase tracking-widest mb-4 text-neutral-900 dark:text-white transition-colors duration-300">
              Swift Delivery
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed transition-colors duration-300">
              Select your favorites online. Our courier delivers them to your
              door within hours.
            </p>
          </motion.div>

          {/* Step 2 (Highlight) */}
          <motion.div
            className="bg-white dark:bg-[#1e1e1e] p-10 rounded-[30px] text-center relative z-10 border border-gray-100 dark:border-gray-800 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            viewport={{ once: true }}
          >
            <span className="font-heading text-6xl text-gray-100 dark:text-white/5 absolute top-5 right-8 transition-colors duration-300">
              02
            </span>
            <div className="w-20 h-20 bg-neutral-900 dark:bg-[#C5A386] border border-neutral-900 dark:border-[#C5A386] rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm relative z-20 text-[#C5A386] dark:text-black transition-colors duration-300">
              <RotateCcw size={32} strokeWidth={1.5} />
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#C5A386] text-white text-[10px] font-extrabold px-3 py-1 rounded-full whitespace-nowrap">
                30 MIN TRIAL
              </div>
            </div>
            <h3 className="text-lg font-extrabold uppercase tracking-widest mb-4 text-neutral-900 dark:text-white transition-colors duration-300">
              Try In Comfort
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed transition-colors duration-300">
              The courier waits for 30 minutes while you try on your pieces in
              the comfort of your own home.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            className="bg-white dark:bg-[#1e1e1e] p-10 rounded-[30px] text-center relative z-10 border border-gray-100 dark:border-gray-800 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="font-heading text-6xl text-gray-100 dark:text-white/5 absolute top-5 right-8 transition-colors duration-300">
              03
            </span>
            <div className="w-20 h-20 bg-white dark:bg-[#2a2a2a] border border-gray-200 dark:border-gray-700 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm relative z-20 group-hover:border-[#C5A386] transition-colors duration-300">
              <ShieldCheck
                size={32}
                strokeWidth={1.5}
                className="text-neutral-900 dark:text-white transition-colors duration-300"
              />
            </div>
            <h3 className="text-lg font-extrabold uppercase tracking-widest mb-4 text-neutral-900 dark:text-white transition-colors duration-300">
              Instant Returns
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed transition-colors duration-300">
              Keep what you love. Hand back what doesn&apos;t fit immediately.
              No packaging, no printing labels.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Community Voices (Orbit) --- */}
      <section className="py-24 px-6 bg-[#FDFCFB] dark:bg-[#0f0f0f] relative overflow-hidden min-h-[800px] text-center transition-colors duration-300">
        <div className="mb-16 relative z-10">
          <motion.h2
            className="font-heading text-4xl md:text-6xl text-neutral-900 dark:text-white mb-4 transition-colors duration-300"
            {...fadeInUp}
          >
            The Atelier Community
          </motion.h2>
          <p className="text-xs tracking-[3px] uppercase text-gray-500 dark:text-gray-400 transition-colors duration-300">
            Real stories from our patrons
          </p>
        </div>

        <div className="relative max-w-[1200px] h-auto md:h-[600px] mx-auto flex justify-center items-center">
          <OrbitSystem />
        </div>

        {/* Circular Text */}
        <div className="flex justify-center items-center py-10">
          <CircularText text="TRYFIT * SHOP * NOW * " spinDuration={8} />
        </div>
      </section>

      {/* --- Footer --- */}
      <Footer />
    </main>
  );
}
