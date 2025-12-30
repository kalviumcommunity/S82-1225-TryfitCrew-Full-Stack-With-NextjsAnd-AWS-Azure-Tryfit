"use client";
import OrbitSystem from "./components/home/Testimonals";
import CircularText from "./components/home/CircularText";

import Footer from "./components/home/Footer";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Truck,
  RotateCcw,
  Gem,
  ShieldCheck,
  ArrowRight,
  Play,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Navbar from "./components/navbar";

export default function CompleteFashionLandingPage() {
  // Animation Settings
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] },
    viewport: { once: true },
  } as const;

  return (
    <main className="container">
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Italiana&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');

        :root {
          --primary-black: #1a1a1a;
          --mint-bg: #e9f4f1;
          --text-gray: #666;
          --border-light: #ececec;
          --font-heading: 'Italiana', serif;
          --font-body: 'Plus Jakarta Sans', sans-serif;
          --glass: rgba(255, 255, 255, 0.75);
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background-color: #ffffff;
          font-family: var(--font-body);
          color: var(--primary-black);
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
        }

        .container { width: 100%; max-width: 1440px; margin: 0 auto; padding: 0 20px; position: relative; }
        @media (min-width: 1024px) { .container { padding: 0 60px; } }

        /* --- Navbar --- */
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 0;
          font-size: 11px;
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .nav-links { display: none; gap: 32px; list-style: none; }
        .logo { font-size: 20px; font-weight: 800; letter-spacing: 3px; text-decoration: none; color: inherit; }
        
        @media (min-width: 1024px) {
            .nav-links { display: flex; }
        }

        /* --- Hero --- */
        .hero { text-align: center; padding: 40px 0; position: relative; z-index: 10; }
        .hero-title { 
          font-family: var(--font-heading); 
          font-size: clamp(40px, 8vw, 88px); 
          line-height: 1; 
          margin-bottom: 50px; 
          text-transform: uppercase; 
        }
        .hero-title .icon-inline { 
          width: 50px; height: 50px; display: inline-flex; align-items: center; justify-content: center; 
          background: #a3d1c6; border-radius: 50%; vertical-align: middle; margin: 0 10px; 
        }

        .hero-grid { display: grid; grid-template-columns: 1fr; gap: 24px; }
        @media (min-width: 768px) { .hero-grid { grid-template-columns: 1.2fr 1fr 1.2fr; height: 620px; } }

        .card { border-radius: 32px; overflow: hidden; position: relative; background: #f9f9f9; height: 450px; }
        @media (min-width: 768px) { .card { height: 100%; } }
        
        .card img { width: 100%; height: 100%; object-fit: cover; transition: transform 1.2s cubic-bezier(0.2, 1, 0.3, 1); }
        .card:hover img { transform: scale(1.08); }

        .price-tag { 
          position: absolute; background: var(--glass); backdrop-filter: blur(10px); 
          padding: 8px 18px; border-radius: 30px; font-size: 11px; font-weight: 700; 
          border: 1px solid rgba(255,255,255,0.4); box-shadow: 0 8px 20px rgba(0,0,0,0.06);
        }

        /* --- Buttons --- */
        .hero-controls { display: flex; flex-direction: column; gap: 16px; justify-content: center; }
        .btn-black { 
          background: var(--primary-black); color: white; padding: 22px 30px; border-radius: 100px; 
          text-decoration: none; display: flex; justify-content: space-between; align-items: center; 
          font-weight: 600; font-size: 14px; transition: transform 0.3s ease;
        }
        .btn-black:hover { transform: translateY(-3px); }
        .btn-outline { 
          border: 1px solid #ddd; padding: 18px; border-radius: 100px; text-decoration: none; 
          color: var(--primary-black); font-size: 12px; text-transform: uppercase; font-weight: 600; text-align: center;
        }

        /* --- Enhanced Benefits Marquee --- */
        .benefits-wrapper {
          width: 100vw;
          margin-left: calc(-50vw + 50%);
          background: var(--primary-black);
          padding: 24px 0;
          overflow: hidden;
          margin-top: 80px;
          margin-bottom: 80px;
          display: flex;
        }

        .benefits-marquee {
          display: flex;
          gap: 60px;
          white-space: nowrap;
          animation: scroll 30s linear infinite;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .benefit-item { 
          display: flex; align-items: center; gap: 14px; color: white; 
          font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 2px;
        }
        .benefit-icon { color: #a3d1c6; }

       
        /* --- 3. FEATURED COLLECTION (Enhanced Fan Carousel) --- */
        .featured { padding: 120px 0; text-align: center; position: relative; overflow: hidden; background: #FAFAFA; }
        .section-label { font-family: var(--font-fashion); font-size: 48px; margin-bottom: 20px; color: var(--noir); }
        .section-sub { color: var(--text-muted); font-size: 14px; margin-bottom: 60px; letter-spacing: 1px; text-transform: uppercase; }

        .fan-carousel {
          display: flex; justify-content: center; align-items: center; height: 500px;
          perspective: 1200px; position: relative;
        }
        .fan-item {
          width: 260px; height: 400px; border-radius: 20px; overflow: hidden;
          position: relative; transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          box-shadow: 0 15px 40px rgba(0,0,0,0.15); border: 1px solid #FFF; cursor: pointer;
          margin-left: -80px; /* Negative margin creates the overlap */
        }
        .fan-item:first-child { margin-left: 0; }
        .fan-item img { width: 100%; height: 100%; object-fit: cover; }
        
        .fan-item:hover {
          transform: translateY(-30px) rotate(0deg) scale(1.1) !important;
          z-index: 100 !important;
          margin-right: 40px; margin-left: 40px; /* Expands space on hover */
          box-shadow: 0 30px 60px rgba(0,0,0,0.3);
          border-color: var(--gold);
        }

        .item-overlay {
          position: absolute; bottom: 0; left: 0; width: 100%; padding: 20px;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
          color: white; opacity: 0; transition: 0.3s; transform: translateY(10px);
        }
        .fan-item:hover .item-overlay { opacity: 1; transform: translateY(0); }
        .item-price { font-size: 16px; font-weight: 700; color: var(--gold); font-family: var(--font-fashion); }
        .item-name { font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
      `}
      </style>

      {/* --- Navbar --- */}

      {/* --- Hero --- */}
      <section className="hero">
        <motion.h1 className="hero-title" {...fadeInUp}>
          Dive into a <span className="icon-inline">✴️</span> world of endless{" "}
          <br /> fashion possibilities
        </motion.h1>

        <div className="hero-grid">
          <motion.div className="card" {...fadeInUp}>
            <img
              src="https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1964&auto=format&fit=crop"
              alt="Model A"
            />
            <span className="price-tag" style={{ top: "25%", right: "10%" }}>
              $ 200.00
            </span>
            <span className="price-tag" style={{ bottom: "20%", left: "15%" }}>
              $ 125.00
            </span>
          </motion.div>

          <div className="hero-controls">
            <Link
              href="/products/all-products"
              style={{ textDecoration: "none" }}
            >
              <motion.div
                className="btn-black"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                SHOP NOW <ArrowRight size={20} />
              </motion.div>
            </Link>
            <Link href="/product" className="btn-outline">
              Browse Catalog
            </Link>
            <div
              className="card"
              style={{ flexGrow: 1, background: "#f5f5f5", height: "220px" }}
            >
              <img
                src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1974&auto=format&fit=crop"
                alt="Season Drop"
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 24,
                  left: 24,
                  color: "white",
                  textAlign: "left",
                }}
              >
                <p
                  style={{
                    fontSize: "10px",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    opacity: 0.8,
                  }}
                >
                  Summer 2025
                </p>
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    marginTop: "4px",
                  }}
                >
                  Linen Essentials
                </p>
              </div>
            </div>
          </div>

          <motion.div className="card" {...fadeInUp}>
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop"
              alt="Model B"
            />
            <div
              style={{
                position: "absolute",
                bottom: 30,
                width: "100%",
                padding: "0 30px",
              }}
            >
              <div
                className="btn-outline"
                style={{
                  background: "rgba(255,255,255,0.9)",
                  border: "none",
                  fontSize: "11px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                }}
              >
                Limited Edition — $ 480
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Enhanced Benefits Bar (Marquee) --- */}
      <div className="benefits-wrapper">
        <div className="benefits-marquee">
          {[...Array(4)].map((_, i) => (
            <React.Fragment key={i}>
              <div className="benefit-item">
                <Truck size={18} className="benefit-icon" /> Free Global
                Shipping
              </div>
              <div className="benefit-item">
                <RotateCcw size={18} className="benefit-icon" /> 30-Day Easy
                Returns
              </div>
              <div className="benefit-item">
                <Gem size={18} className="benefit-icon" /> Premium Craftsmanship
              </div>
              <div className="benefit-item">
                <ShieldCheck size={18} className="benefit-icon" /> Secure
                Checkout
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* --- Featured Collection (Optimized Layering) --- */}

      <section className="featured">
        <motion.h2 className="section-label" {...fadeInUp}>
          The Curated Edit
        </motion.h2>
        <p className="section-sub">
          Handpicked essentials for the modern wardrobe
        </p>
        <div className="fan-carousel">
          {[
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
          ].map((item) => (
            <motion.div
              key={item.id}
              className={`fan-item ${item.center ? "center" : ""}`}
              initial={{ rotate: item.rot, y: 50, opacity: 0 }}
              whileInView={{ rotate: item.rot, y: item.y, opacity: 1 }}
              viewport={{ once: true }}
              style={{ zIndex: item.z }}
            >
              <img src={item.img} alt={item.name} />
              <div className="item-overlay">
                <p className="item-name">{item.name}</p>
                <p className="item-price">{item.price}</p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: 8,
                    fontSize: 10,
                    fontWeight: 700,
                    gap: 5,
                  }}
                >
                  SHOP LOOK <ArrowRight size={14} color="var(--gold)" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* --- 4. GENDER / CATEGORY SECTION (ENHANCED ATELIER EDIT) --- */}
      <section className="category-section">
        <style>{`
          .category-section { 
            padding: 120px 40px; 
            background: #FFF; 
          }
          
          .cat-header {
            text-align: center;
            margin-bottom: 80px;
          }

          .cat-grid { 
            display: grid; 
            grid-template-columns: repeat(3, 1fr); 
            gap: 20px; 
            max-width: 1600px; 
            margin: 0 auto; 
          }

          .cat-card { 
            position: relative; 
            height: 750px; /* Taller, editorial height */
            overflow: hidden; 
            cursor: pointer; 
            background: var(--noir);
          }

          .cat-card img { 
            width: 100%; 
            height: 100%; 
            object-fit: cover; 
            transition: transform 1.2s cubic-bezier(0.2, 1, 0.3, 1), opacity 0.5s ease; 
            opacity: 0.9;
          }

          .cat-card:hover img { 
            transform: scale(1.1); 
            opacity: 0.7;
          }

          /* Gradient Overlay */
          .cat-overlay {
            position: absolute; 
            inset: 0; 
            background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%); 
            display: flex; 
            flex-direction: column; 
            justify-content: flex-end; 
            align-items: center;
            padding-bottom: 60px;
            z-index: 2;
          }

          /* Border Frame Effect */
          .cat-frame {
            position: absolute;
            inset: 20px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            z-index: 3;
            pointer-events: none;
            transition: border-color 0.4s ease;
          }
          .cat-card:hover .cat-frame {
            border-color: rgba(197, 163, 134, 0.6); /* Gold tint on hover */
          }

          .cat-subtitle {
            font-family: var(--font-main);
            font-size: 11px;
            font-weight: 700;
            color: var(--gold);
            text-transform: uppercase;
            letter-spacing: 3px;
            margin-bottom: 15px;
            transform: translateY(20px);
            opacity: 0;
            transition: all 0.5s ease;
          }

          .cat-title { 
            color: #FFF; 
            font-family: var(--font-fashion); 
            font-size: 64px; 
            line-height: 1;
            margin-bottom: 30px; 
            transform: translateY(10px);
            transition: transform 0.5s ease;
          }

          .btn-cat-explore {
            background: #FFF; 
            color: var(--noir); 
            padding: 16px 42px; 
            font-size: 11px; 
            font-weight: 800; 
            text-transform: uppercase; 
            letter-spacing: 2px;
            border: none; 
            border-radius: 100px;
            opacity: 0; 
            transform: translateY(20px); 
            transition: all 0.4s cubic-bezier(0.2, 1, 0.3, 1);
          }

          /* Hover States */
          .cat-card:hover .cat-subtitle { opacity: 1; transform: translateY(0); }
          .cat-card:hover .cat-title { transform: translateY(-10px); }
          .cat-card:hover .btn-cat-explore { opacity: 1; transform: translateY(0); }
          .btn-cat-explore:hover { background: var(--gold); color: #FFF; }

          @media (max-width: 1024px) {
            .cat-grid { grid-template-columns: 1fr; }
            .cat-card { height: 500px; }
          }
        `}</style>

        <div className="cat-header">
          <motion.h2 className="section-label" {...fadeInUp}>
            Shop By Category
          </motion.h2>
          <p className="section-sub">Define your silhouette</p>
        </div>

        <div className="cat-grid">
          {[
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
          ].map((cat, i) => (
            <motion.div
              key={i}
              className="cat-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <img src={cat.img} alt={cat.title} />
              <div className="cat-frame"></div>

              <div className="cat-overlay">
                <span className="cat-subtitle">{cat.sub}</span>
                <h3 className="cat-title">{cat.title}</h3>

                {/* Updated Button with Link */}
                <Link href={cat.path}>
                  <button className="btn-cat-explore">
                    Explore Collection
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* --- 5. THE SERVICE MODEL (Delivery + Trial) --- */}
      <section className="service-section">
        <style>{`
          .service-section { 
            padding: 120px 40px; 
            background: #FAFAFA; 
            position: relative;
            overflow: hidden;
          }
          
          .service-header {
            text-align: center;
            margin-bottom: 80px;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
          }

          .service-header h2 {
            font-family: var(--font-fashion);
            font-size: 56px;
            line-height: 1.1;
            margin-bottom: 20px;
            color: var(--noir);
          }
          
          .service-header p {
            font-size: 15px;
            color: var(--text-muted);
            line-height: 1.6;
          }

          /* Timeline Layout */
          .process-grid {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 40px;
            max-width: 1200px;
            margin: 0 auto;
            position: relative;
          }

          /* The Connecting Gold Line */
          .process-line {
            position: absolute;
            top: 60px;
            left: 15%;
            right: 15%;
            height: 1px;
            background: rgba(197, 163, 134, 0.3); /* Gold low opacity */
            z-index: 0;
          }

          .process-card {
            background: #FFF;
            padding: 50px 30px;
            border-radius: 30px;
            text-align: center;
            position: relative;
            z-index: 1;
            border: 1px solid rgba(0,0,0,0.05);
            transition: transform 0.4s ease, box-shadow 0.4s ease;
          }

          .process-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.05);
            border-color: var(--gold);
          }

          /* Icon Circle */
          .icon-ring {
            width: 80px;
            height: 80px;
            background: #FFF;
            border: 1px solid var(--border-light);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 30px;
            position: relative;
            z-index: 2;
            box-shadow: 0 10px 20px rgba(0,0,0,0.03);
          }
          
          /* Special styling for the center (30 min) card */
          .process-card.highlight .icon-ring {
            border-color: var(--gold);
            background: var(--noir);
            color: var(--gold);
          }

          .step-num {
            font-family: var(--font-fashion);
            font-size: 60px;
            color: rgba(0,0,0,0.03);
            position: absolute;
            top: 20px;
            right: 30px;
            line-height: 1;
          }

          .proc-title {
            font-size: 18px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 15px;
            color: var(--noir);
          }

          .proc-desc {
            font-size: 13px;
            color: var(--text-muted);
            line-height: 1.6;
          }

          /* Unique: The 30 Min Timer Animation */
          .timer-badge {
            background: var(--gold);
            color: #FFF;
            font-size: 10px;
            font-weight: 800;
            padding: 4px 10px;
            border-radius: 20px;
            position: absolute;
            bottom: -12px;
            left: 50%;
            transform: translateX(-50%);
            white-space: nowrap;
          }

          @media (max-width: 1024px) {
            .process-grid { grid-template-columns: 1fr; gap: 30px; }
            .process-line { display: none; } /* Hide line on mobile */
            .service-header h2 { font-size: 42px; }
          }
        `}</style>

        <div className="service-header">
          <motion.h2 {...fadeInUp}>The Private Fitting Room</motion.h2>
          <motion.p {...fadeInUp}>
            Skip the changing room queues. We bring the boutique experience
            directly to your doorstep with our signature 30-minute trial
            service.
          </motion.p>
        </div>

        <div className="process-grid">
          <div className="process-line"></div>

          {/* Step 1 */}
          <motion.div
            className="process-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="step-num">01</span>
            <div className="icon-ring">
              <Truck size={32} strokeWidth={1.5} />
            </div>
            <h3 className="proc-title">Swift Delivery</h3>
            <p className="proc-desc">
              Select your favorites online. Our courier delivers them to your
              door within hours.
            </p>
          </motion.div>

          {/* Step 2 - Highlighted */}
          <motion.div
            className="process-card highlight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            viewport={{ once: true }}
          >
            <span className="step-num">02</span>
            <div className="icon-ring">
              <RotateCcw size={32} strokeWidth={1.5} />
              <div className="timer-badge">30 MIN TRIAL</div>
            </div>
            <h3 className="proc-title">Try In Comfort</h3>
            <p className="proc-desc">
              The courier waits for 30 minutes while you try on your pieces in
              the comfort of your own home.
            </p>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            className="process-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="step-num">03</span>
            <div className="icon-ring">
              <ShieldCheck size={32} strokeWidth={1.5} />
            </div>
            <h3 className="proc-title">Instant Returns</h3>
            <p className="proc-desc">
              Keep what you love. Hand back what doesn't fit immediately. No
              packaging, no printing labels.
            </p>
          </motion.div>
        </div>
      </section>

      
      {/* --- 6. COMMUNITY VOICES (Interactive Orbital Swap) --- */}
      <section className="testimonials-section">
        <style>{`
          .testimonials-section {
            padding: 10px 20px;
            background: #FDFCFB;
            position: relative;
            overflow: hidden;
            text-align: center;
            min-height: 800px;
          }

          .testi-header {
            margin-bottom: 60px;
            position: relative;
            z-index: 2;
          }

          .testi-header h2 {
            font-family: var(--font-fashion);
            font-size: 56px;
            color: var(--noir);
            margin-bottom: 15px;
            letter-spacing: 1px;
          }

          /* --- ORBIT CONTAINER --- */
          .orbit-container {
            position: relative;
            max-width: 1200px;
            height: 600px;
            margin: 0 auto;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          /* --- SATELLITE AVATARS --- */
          .satellite-wrapper {
            position: absolute;
            z-index: 10;
            cursor: pointer;
            transition: transform 0.3s ease;
             /* Add floating animation here */
            animation: float 6s ease-in-out infinite; 
          }
          
          /* Stagger the floating animation for natural feel */
          .pos-0 { animation-delay: 0s; }
          .pos-1 { animation-delay: 1s; }
          .pos-2 { animation-delay: 2s; }
          .pos-3 { animation-delay: 3s; }
          .pos-4 { animation-delay: 4s; }
          .pos-5 { animation-delay: 5s; }

           @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          
          .satellite-wrapper:hover {
            transform: scale(1.15); /* Scale on hover */
            z-index: 15;
            animation-play-state: paused; /* Pause float on hover */
          }

          .satellite-img-box {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            overflow: hidden;
            border: 2px solid #FFF;
            box-shadow: 0 15px 30px rgba(0,0,0,0.1);
            position: relative;
          }
          
          .satellite-img-box img {
            width: 100%; height: 100%; object-fit: cover;
            filter: grayscale(100%);
            transition: 0.4s;
          }
          .satellite-wrapper:hover img { filter: grayscale(0%); }

          /* Fixed Positions for the 6 Slots */
          .pos-0 { top: 10%; left: 20%; }
          .pos-1 { top: 45%; left: 5%; transform: scale(1.1); }
          .pos-2 { bottom: 15%; left: 20%; }
          
          .pos-3 { top: 10%; right: 20%; }
          .pos-4 { top: 45%; right: 5%; transform: scale(1.1); }
          .pos-5 { bottom: 15%; right: 20%; }

          /* --- CENTER CARD --- */
          .center-stage {
            position: relative;
            z-index: 5;
            width: 100%;
            max-width: 550px;
            perspective: 1000px;
          }

          .review-card {
            background: #FFF;
            padding: 60px 40px;
            border-radius: 4px;
            box-shadow: 0 40px 80px rgba(197, 163, 134, 0.15);
            border: 1px solid rgba(0,0,0,0.03);
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          /* The Avatar Spot on Card */
          .avatar-dock {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            border: 4px solid #FFF;
            box-shadow: 0 10px 40px rgba(0,0,0,0.15);
            position: absolute;
            top: -60px;
            left: 50%;
            transform: translateX(-50%);
            overflow: hidden;
            z-index: 20;
            background: #FAFAFA;
          }
          
          .avatar-dock img {
            width: 100%; height: 100%; object-fit: cover;
          }

          .quote-icon {
            font-family: var(--font-fashion);
            font-size: 80px;
            color: var(--gold);
            line-height: 1;
            margin-top: 40px;
            opacity: 0.4;
          }

          .text-content {
            min-height: 140px; /* Prevents jumping */
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .review-p {
            font-size: 18px;
            font-family: var(--font-fashion);
            line-height: 1.6;
            color: var(--text-muted);
            margin: 10px 0 20px;
            font-style: italic;
          }

          .meta-info h3 {
            font-size: 13px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 2px;
            color: var(--noir);
            margin-bottom: 5px;
          }

          .meta-info span {
            font-size: 11px;
            color: #AAA;
            font-weight: 600;
          }
          
           /* Navigation Buttons */
          .nav-btn {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: 1px solid #ECECEC; /* using variable directly if not defined in scope */
            background: #FFF;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
            z-index: 20;
            color: #1a1a1a;
          }
          .nav-btn:hover {
            background: #1a1a1a;
            color: #FFF;
            border-color: #1a1a1a;
          }
          .prev-btn { left: -80px; }
          .next-btn { right: -80px; }


          @media (max-width: 768px) {
            .satellite-wrapper { display: none; } /* Hide orbit on mobile */
            .orbit-container { height: auto; }
            .review-card { margin-top: 60px; }
             .nav-btn { width: 40px; height: 40px; }
            .prev-btn { left: -10px; }
            .next-btn { right: -10px; }
          }
        `}</style>

        <div className="testi-header">
          <motion.h2 {...fadeInUp}>The Atelier Community</motion.h2>
          <p
            style={{
              fontSize: "12px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#888",
            }}
          >
            Real stories from our patrons
          </p>
        </div>

       <section>
       <div className="testi-header">
         {/* ... Your existing header code ... */}
       </div>

       <div className="orbit-container">
         <OrbitSystem />
       </div>

       {/* --- NEW CIRCULAR TEXT SECTION --- */}
       <div style={{ 
           display: 'flex', 
           justifyContent: 'center', 
           alignItems: 'center', 
           padding: '0px 0' 
       }}>
           <CircularText  
               text="TRYFIT * SHOP * NOW * " 
               spinDuration={8} 
           />
       </div>

    </section>
      </section>
      {/* 7. Footer */}
      <Footer />
    </main>
  );
}

// "use client";

// import React from 'react';
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import {
//   ArrowRight, ChevronLeft, ChevronRight, Instagram, Twitter, Facebook, Linkedin,
//   Truck, RotateCcw, Gem, ShieldCheck, Play, ShoppingBag
// } from 'lucide-react';

// export default function TryFitLandingPage() {
//   // --- Animation Variants ---
//   const fadeUp = {
//     initial: { opacity: 0, y: 30 },
//     whileInView: { opacity: 1, y: 0 },
//     transition: { duration: 0.8, ease: "easeOut" },
//     viewport: { once: true }
//   };

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1 }
//     }
//   };

//   const cardVariant = {
//     hidden: { opacity: 0, y: 50 },
//     show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
//   };

//   return (
//     <main className="landing-wrapper">
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Italiana&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');

//         :root {
//           --noir: #0A0A0A;
//           --cream: #FDFCFB;
//           --gold: #C5A386;
//           --mint: #E9F4F1;
//           --text-muted: #666;
//           --font-fashion: 'Italiana', serif;
//           --font-main: 'Plus Jakarta Sans', sans-serif;
//         }

//         * { margin: 0; padding: 0; box-sizing: border-box; }
//         body { background-color: #FFF; color: var(--noir); font-family: var(--font-main); overflow-x: hidden; }

//         /* --- 1. HERO SECTION --- */
//         .hero-section { position: relative; height: 90vh; width: 100%; overflow: hidden; }
//         .hero-bg { width: 100%; height: 100%; object-fit: cover; filter: brightness(0.85); }
//         .hero-content {
//           position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
//           text-align: center; color: #FFF; z-index: 10; width: 100%; padding: 0 20px;
//         }
//         .hero-title {
//           font-family: var(--font-fashion); font-size: clamp(48px, 6vw, 80px);
//           margin-bottom: 20px; letter-spacing: 1px; line-height: 1.1;
//         }
//         .hero-subtitle {
//           font-size: 16px; text-transform: uppercase; letter-spacing: 3px;
//           margin-bottom: 40px; opacity: 0.9; font-weight: 500;
//         }
//         .hero-btn-group { display: flex; gap: 20px; justify-content: center; }
//         .btn-hero {
//           padding: 16px 36px; background: transparent; border: 1px solid #FFF; color: #FFF;
//           text-transform: uppercase; font-size: 12px; font-weight: 700; letter-spacing: 1.5px;
//           transition: 0.3s; cursor: pointer;
//         }
//         .btn-hero.filled { background: #FFF; color: var(--noir); }
//         .btn-hero:hover { transform: translateY(-3px); }

//         /* --- 2. SALE BANNER --- */
//         .sale-banner {
//           background: #F4F1EE; padding: 25px 0; display: flex; justify-content: center;
//           align-items: center; gap: 40px; text-transform: uppercase; border-bottom: 1px solid #EEE;
//         }
//         .sale-text { font-family: var(--font-main); font-weight: 800; letter-spacing: 2px; font-size: 14px; }
//         .timer-box { font-family: monospace; font-size: 16px; color: var(--text-muted); display: flex; align-items: baseline; gap: 10px; }
//         .btn-dark { background: var(--noir); color: #FFF; padding: 12px 28px; font-size: 11px; font-weight: 700; border: none; cursor: pointer; text-transform: uppercase; letter-spacing: 1px; transition: 0.3s; }
//         .btn-dark:hover { background: var(--gold); }

// /* --- 3. FEATURED COLLECTION (Enhanced Fan Carousel) --- */
// .featured { padding: 120px 0; text-align: center; position: relative; overflow: hidden; background: #FAFAFA; }
// .section-label { font-family: var(--font-fashion); font-size: 48px; margin-bottom: 20px; color: var(--noir); }
// .section-sub { color: var(--text-muted); font-size: 14px; margin-bottom: 60px; letter-spacing: 1px; text-transform: uppercase; }

// .fan-carousel {
//   display: flex; justify-content: center; align-items: center; height: 500px;
//   perspective: 1200px; position: relative;
// }
// .fan-item {
//   width: 260px; height: 400px; border-radius: 20px; overflow: hidden;
//   position: relative; transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
//   box-shadow: 0 15px 40px rgba(0,0,0,0.15); border: 1px solid #FFF; cursor: pointer;
//   margin-left: -80px; /* Negative margin creates the overlap */
// }
// .fan-item:first-child { margin-left: 0; }
// .fan-item img { width: 100%; height: 100%; object-fit: cover; }

// .fan-item:hover {
//   transform: translateY(-30px) rotate(0deg) scale(1.1) !important;
//   z-index: 100 !important;
//   margin-right: 40px; margin-left: 40px; /* Expands space on hover */
//   box-shadow: 0 30px 60px rgba(0,0,0,0.3);
//   border-color: var(--gold);
// }

// .item-overlay {
//   position: absolute; bottom: 0; left: 0; width: 100%; padding: 20px;
//   background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
//   color: white; opacity: 0; transition: 0.3s; transform: translateY(10px);
// }
// .fan-item:hover .item-overlay { opacity: 1; transform: translateY(0); }
// .item-price { font-size: 16px; font-weight: 700; color: var(--gold); font-family: var(--font-fashion); }
// .item-name { font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }

//         /* --- 4. SHOP BY COLLECTION --- */
//         .collection-section { padding: 100px 40px; text-align: center; background: #FFF; }
//         .collection-grid {
//           display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px;
//           max-width: 1300px; margin: 0 auto;
//         }
//         .col-card { cursor: pointer; transition: 0.4s ease; position: relative; }
//         .col-card img { width: 100%; height: 600px; object-fit: cover; margin-bottom: 25px; transition: 0.4s ease; }
//         .col-card:hover img { filter: brightness(0.9); }
//         .col-title { font-size: 14px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 6px; }
//         .col-count { font-size: 12px; color: var(--text-muted); }

//         /* --- 5. WINTER SALE BLOCK --- */
//         .winter-block {
//           background: #F4F1EE; padding: 100px 0; text-align: center;
//           display: flex; justify-content: center; align-items: center; gap: 80px;
//         }
//         .winter-title { font-family: var(--font-main); font-size: 56px; font-weight: 300; line-height: 1; letter-spacing: 2px; text-transform: uppercase; text-align: right; }
//         .winter-desc { max-width: 320px; text-align: left; font-size: 13px; color: var(--text-muted); line-height: 1.7; border-left: 1px solid #CCC; padding-left: 30px; }
//         .btn-beige { background: #C5A386; color: #FFF; padding: 16px 36px; border: none; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; cursor: pointer; margin-top: 25px; display: inline-block; transition: 0.3s; }
//         .btn-beige:hover { background: var(--noir); }

//         /* --- 6. NEWEST ARRIVALS --- */
//         .arrivals-section { padding: 100px 40px; text-align: center; background: #FFF; }
//         .product-carousel {
//           display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px;
//           max-width: 1400px; margin: 0 auto;
//         }
//         .prod-card { position: relative; text-align: center; cursor: pointer; }
//         .prod-img-wrap { position: relative; height: 500px; overflow: hidden; margin-bottom: 20px; background: #F9F9F9; }
//         .prod-img-wrap img { width: 100%; height: 100%; object-fit: cover; transition: 0.5s ease; }
//         .prod-card:hover .prod-img-wrap img { transform: scale(1.05); }
//         .prod-badge { position: absolute; top: 15px; left: 15px; background: #FF4D4D; color: #FFF; font-size: 10px; font-weight: 700; padding: 5px 10px; text-transform: uppercase; letter-spacing: 1px; }
//         .prod-name { font-size: 14px; font-weight: 600; margin-bottom: 8px; letter-spacing: 0.5px; }
//         .prod-price { font-size: 13px; color: var(--noir); font-weight: 700; }
//         .prod-old-price { text-decoration: line-through; color: #BBB; margin-right: 8px; font-weight: 400; }
//         .color-swatch { display: inline-block; width: 12px; height: 12px; border-radius: 50%; margin: 0 4px; border: 1px solid #DDD; cursor: pointer; }

//         /* --- 7. ELEVATE SECTION --- */
//         .elevate-box {
//           background-color: var(--mint-bg); margin: 0 40px 100px; border-radius: 0; padding: 100px 60px;
//           position: relative; z-index: 1; display: flex; align-items: center; justify-content: space-between; gap: 60px;
//         }
//         .elevate-header { max-width: 500px; text-align: left; }
//         .elevate-header h2 { font-family: var(--font-fashion); font-size: 56px; margin-bottom: 20px; line-height: 1.1; }
//         .elevate-header p { font-size: 15px; color: var(--text-muted); line-height: 1.6; margin-bottom: 30px; }
//         .video-wrapper { width: 50%; height: 500px; position: relative; cursor: pointer; overflow: hidden; }
//         .video-wrapper img { width: 100%; height: 100%; object-fit: cover; }
//         .play-circle {
//           position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
//           width: 80px; height: 80px; background: rgba(255,255,255,0.2);
//           backdrop-filter: blur(10px); border-radius: 50%; display: flex;
//           align-items: center; justify-content: center; border: 1px solid rgba(255,255,255,0.4);
//           transition: 0.3s;
//         }
//         .video-wrapper:hover .play-circle { transform: translate(-50%, -50%) scale(1.1); background: rgba(255,255,255,0.3); }

//         /* --- 8. BENEFITS & FOOTER --- */
//         .benefits-bar {
//           background: var(--noir); color: white; padding: 25px 0;
//           display: flex; justify-content: center; gap: 60px;
//           text-transform: uppercase; font-size: 11px; font-weight: 700; letter-spacing: 2px;
//         }
//         .benefit-item { display: flex; align-items: center; gap: 10px; }

//         .footer { padding: 80px 40px 40px; border-top: 1px solid #EEE; background: #FFF; }
//         .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 40px; margin-bottom: 60px; }
//         .footer-logo { font-family: var(--font-fashion); font-size: 32px; margin-bottom: 20px; }
//         .footer-desc { font-size: 13px; color: var(--text-muted); line-height: 1.6; max-width: 300px; }
//         .footer-col h4 { font-size: 13px; font-weight: 800; text-transform: uppercase; margin-bottom: 25px; letter-spacing: 1px; }
//         .footer-col li { list-style: none; font-size: 13px; color: var(--text-muted); margin-bottom: 12px; cursor: pointer; transition: 0.2s; }
//         .footer-col li:hover { color: var(--noir); }
//         .footer-bottom { border-top: 1px solid #F5F5F5; padding-top: 30px; display: flex; justify-content: space-between; align-items: center; font-size: 11px; color: #AAA; text-transform: uppercase; letter-spacing: 1px; }

//         @media (max-width: 1024px) {
//           .collection-grid, .product-carousel, .footer-grid { grid-template-columns: repeat(2, 1fr); }
//           .winter-block { flex-direction: column; gap: 30px; padding: 60px 20px; }
//           .winter-title { text-align: center; }
//           .winter-desc { border: none; padding: 0; text-align: center; }
//           .elevate-box { flex-direction: column; padding: 60px 30px; }
//           .video-wrapper { width: 100%; height: 400px; }
//           .fan-carousel { height: auto; flex-wrap: wrap; gap: 20px; }
//           .fan-item { margin: 0; width: 45%; height: 350px; }
//           .benefits-bar { flex-wrap: wrap; gap: 30px; padding: 40px 20px; }
//         }
//         @media (max-width: 600px) {
//           .collection-grid, .product-carousel, .footer-grid { grid-template-columns: 1fr; }
//           .hero-title { font-size: 42px; }
//           .sale-banner { flex-direction: column; gap: 15px; text-align: center; }
//           .fan-item { width: 100%; height: 450px; }
//         }
//       `}</style>

//       {/* --- 1. HERO SECTION --- */}
//       <section className="hero-section">
//         <img src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2073&auto=format&fit=crop" className="hero-bg" alt="Campaign" />
//         <motion.div className="hero-content" {...fadeUp}>
//           <h1 className="hero-title">Fresh New Arrivals</h1>
//           <p className="hero-subtitle">Explore the latest range</p>
//           <div className="hero-btn-group">
//             <button className="btn-hero">Shop Latest</button>
//             <button className="btn-hero filled">Best Selling</button>
//           </div>
//         </motion.div>

//         <div style={{ position: 'absolute', top: '50%', left: 40, color: 'white', cursor: 'pointer', opacity: 0.8 }}><ChevronLeft size={40}/></div>
//         <div style={{ position: 'absolute', top: '50%', right: 40, color: 'white', cursor: 'pointer', opacity: 0.8 }}><ChevronRight size={40}/></div>
//       </section>

//       {/* --- 2. SALE BANNER --- */}
//       <div className="sale-banner">
//         <span className="sale-text">Sale Now On</span>
//         <span className="timer-box">29 : 22 : 33 : 40 <span style={{fontSize: '10px', color:'#AAA', marginLeft: 5}}>Days Hours Mins Secs</span></span>
//         <button className="btn-dark">Shop Now</button>
//       </div>

// {/* --- 3. FEATURED COLLECTION (Enhanced Fan) --- */}
// <section className="featured">
//   <motion.h2 className="section-label" {...fadeUp}>The Curated Edit</motion.h2>
//   <p className="section-sub">Handpicked essentials for the modern wardrobe</p>
//   <div className="fan-carousel">
//     {[
//       { id: 1, rot: -10, y: 30, z: 5, img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000', name: 'Editorial Coat', price: '$240' },
//       { id: 2, rot: -5, y: 15, z: 10, img: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1000', name: 'Velvet Dress', price: '$180' },
//       { id: 3, rot: 0, y: 0, z: 20, center: true, img: 'https://images.unsplash.com/photo-1596783074918-c84cb06531ca?q=80&w=1000', name: 'Silk Slip', price: '$150' },
//       { id: 4, rot: 5, y: 15, z: 10, img: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=1000', name: 'Summer Linen', price: '$120' },
//       { id: 5, rot: 10, y: 30, z: 5, img: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1000', name: 'Atelier Suit', price: '$350' }
//     ].map((item) => (
//       <motion.div
//         key={item.id}
//         className={`fan-item ${item.center ? 'center' : ''}`}
//         initial={{ rotate: item.rot, y: 50, opacity: 0 }}
//         whileInView={{ rotate: item.rot, y: item.y, opacity: 1 }}
//         viewport={{ once: true }}
//         style={{ zIndex: item.z }}
//       >
//         <img src={item.img} alt={item.name} />
//         <div className="item-overlay">
//           <p className="item-name">{item.name}</p>
//           <p className="item-price">{item.price}</p>
//           <div style={{ display: 'flex', alignItems: 'center', marginTop: 8, fontSize: 10, fontWeight: 700, gap: 5 }}>
//             SHOP LOOK <ArrowRight size={14} color="var(--gold)" />
//           </div>
//         </div>
//       </motion.div>
//     ))}
//   </div>
// </section>

//       {/* --- 4. SHOP BY COLLECTION --- */}
//       <section className="collection-section">
//         <h2 className="section-header">Shop by Collection</h2>
//         <div className="collection-grid">
//           {[
//             { t: 'Tops', c: '14 Items', img: 'https://images.unsplash.com/photo-1551163943-3f6a29e39454?q=80&w=600' },
//             { t: 'Rompers & Playsuits', c: '9 Items', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600' },
//             { t: 'Dresses', c: '12 Items', img: 'https://images.unsplash.com/photo-1596783074918-c84cb06531ca?q=80&w=600' }
//           ].map((item, i) => (
//             <motion.div key={i} className="col-card" whileHover={{ y: -5 }}>
//               <img src={item.img} alt={item.t} />
//               <p className="col-title">{item.t}</p>
//               <p className="col-count">{item.c}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* --- 5. WINTER SALE BLOCK --- */}
//       <section className="winter-block">
//         <div className="winter-title">
//           Winter <br/> <span style={{fontWeight: 700}}>Sale</span>
//         </div>
//         <div className="winter-desc">
//           <p>Take 50% off a range of goods in our end of season sale.</p>
//           <p style={{ marginTop: '10px', fontWeight: 700, color: 'var(--noir)' }}>All sales Final - ends soon!</p>
//           <button className="btn-beige">Shop Sale</button>
//         </div>
//       </section>

//       {/* --- 6. NEWEST ARRIVALS --- */}
//       <section className="arrivals-section">
//         <h2 className="section-header">Newest Arrivals</h2>
//         <div className="product-carousel">
//           {[
//             { n: 'Arielle Dress', p: 69.99, o: 89.99, img: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=600', sale: true },
//             { n: 'Noelle Dress', p: 79.99, img: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=600' },
//             { n: 'Ivy Dress', p: 79.99, img: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=600' },
//             { n: 'April Dress', p: 59.99, img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600' }
//           ].map((prod, i) => (
//             <motion.div key={i} className="prod-card" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: i * 0.1 }}>
//               <div className="prod-img-wrap">
//                 <img src={prod.img} alt={prod.n} />
//                 {prod.sale && <span className="prod-badge">Sale -20%</span>}
//               </div>
//               <p className="prod-name">{prod.n}</p>
//               <p className="prod-price">
//                 {prod.o && <span className="prod-old-price">${prod.o}</span>}
//                 ${prod.p}
//               </p>
//               <div style={{ marginTop: '10px' }}>
//                 <span className="color-swatch" style={{ background: '#D4A373' }}></span>
//                 <span className="color-swatch" style={{ background: '#F0F0F0', border: '1px solid #CCC' }}></span>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* --- 7. ELEVATE SECTION --- */}
//       <section className="elevate-box">
//         <div className="elevate-header">
//           <motion.h2 {...fadeUp}>Elevate your wardrobe</motion.h2>
//           <motion.p {...fadeUp}>Discover pieces that define modern luxury. Our curated collections bring the TryFit Atelier experience directly to your door.</motion.p>
//           <div style={{ marginTop: '20px' }}>
//              <button className="btn-dark" style={{padding: '14px 32px'}}>Explore Editorial</button>
//           </div>
//         </div>
//         <motion.div className="video-wrapper" whileHover={{ scale: 1.01 }} {...fadeUp}>
//           <img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2048&auto=format&fit=crop" alt="TryFit" />
//           <div className="play-circle">
//             <Play fill="white" color="white" size={24} style={{ marginLeft: '4px' }} />
//           </div>
//         </motion.div>
//       </section>

//       {/* --- 8. BENEFITS BAR --- */}
//       <div className="benefits-bar">
//         <div className="benefit-item"><Truck size={18} color="var(--gold)" /> Free Global Shipping</div>
//         <div className="benefit-item"><RotateCcw size={18} color="var(--gold)" /> 30-Day Easy Returns</div>
//         <div className="benefit-item"><Gem size={18} color="var(--gold)" /> Premium Quality</div>
//         <div className="benefit-item"><ShieldCheck size={18} color="var(--gold)" /> Secure Checkout</div>
//       </div>

//       {/* --- 9. FOOTER --- */}
//       <footer className="footer">
//         <div className="footer-grid">
//           <div>
//             <div className="footer-logo">TRYFIT</div>
//             <p className="footer-desc">Sustainable luxury for the modern individual. Redefining fashion since 2025.</p>
//           </div>
//           <div className="footer-col">
//             <h4>Shop</h4>
//             <ul>
//               <li>New Arrivals</li>
//               <li>Atelier Collection</li>
//               <li>Accessories</li>
//               <li>Gift Cards</li>
//             </ul>
//           </div>
//           <div className="footer-col">
//             <h4>Support</h4>
//             <ul>
//               <li>Contact Us</li>
//               <li>Shipping Policy</li>
//               <li>Returns & Exchanges</li>
//               <li>Size Guide</li>
//             </ul>
//           </div>
//           <div className="footer-col">
//             <h4>Stay Updated</h4>
//             <div style={{ display: 'flex', borderBottom: '1px solid #DDD', paddingBottom: '10px' }}>
//                <input placeholder="Enter your email" style={{ border: 'none', outline: 'none', width: '100%', fontSize: '13px' }} />
//                <ArrowRight size={16} />
//             </div>
//           </div>
//         </div>
//         <div className="footer-bottom">
//           <p>© 2025 TryFit Atelier. All rights reserved.</p>
//           <div style={{ display: 'flex', gap: '20px' }}>
//             <Instagram size={18} /> <Twitter size={18} /> <Facebook size={18} /> <Linkedin size={18} />
//           </div>
//         </div>
//       </footer>
//     </main>
//   );
// }
