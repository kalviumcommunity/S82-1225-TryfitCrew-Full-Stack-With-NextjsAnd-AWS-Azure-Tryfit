"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { User, ShoppingBag, Search, Menu, X, Sparkles, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for glassmorphism refinement
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Arrivals', href: '/new-arrival' },
    { name: 'Boutique', href: '/products' },
    { name: 'Editorial', href: '/editorial' },
    { name: 'Atelier Control', href: '/shop/dashboard', special: true },
  ];

  return (
    <nav className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Italiana&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

        :root {
          --noir: #0A0A0A;
          --cream: #FDFCFB;
          --gold: #C5A386;
          --text-muted: #717171;
          --font-fashion: 'Italiana', serif;
          --font-main: 'Plus Jakarta Sans', sans-serif;
        }

        .navbar-wrapper {
          position: sticky;
          top: 0;
          width: 100%;
          background: transparent;
          z-index: 10000;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          padding: 20px 0;
          font-family: var(--font-main);
        }

        .navbar-wrapper.scrolled {
          background: rgba(253, 252, 251, 0.8);
          backdrop-filter: blur(20px);
          padding: 14px 0;
          border-bottom: 1px solid rgba(0, 0, 0, 0.04);
        }

        .nav-container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 60px;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
        }

        /* Left: Navigation Group */
        .nav-links-group {
          display: flex;
          align-items: center;
          gap: 35px;
        }

        .nav-link-item {
          text-decoration: none;
          color: var(--noir);
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 2.5px;
          position: relative;
          opacity: 0.8;
          transition: all 0.3s ease;
        }

        .nav-link-item:hover {
          opacity: 1;
          color: var(--gold);
        }

        .nav-link-item.special {
          color: var(--gold);
          border: 1px solid rgba(197, 163, 134, 0.3);
          padding: 6px 12px;
          border-radius: 4px;
        }

        /* Center: Logo */
        .logo-wrapper {
          perspective: 1000px;
        }

        .logo {
          font-family: var(--font-fashion);
          font-size: 34px;
          font-weight: 400;
          letter-spacing: 10px;
          text-decoration: none;
          color: var(--noir);
          transition: transform 0.5s ease;
          display: block;
        }

        .logo span {
          font-size: 12px;
          letter-spacing: normal;
          color: var(--gold);
          position: absolute;
          top: 0;
          right: -15px;
        }

        /* Right: Actions */
        .nav-right-stack {
          display: flex;
          align-items: center;
          gap: 28px;
          justify-content: flex-end;
        }

        .icon-btn {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--noir);
          transition: all 0.3s ease;
          padding: 4px;
        }

        .icon-btn:hover {
          color: var(--gold);
          transform: translateY(-2px);
        }

        .btn-collab {
          padding: 10px 24px;
          border-radius: 100px;
          font-size: 9px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 2px;
          cursor: pointer;
          transition: all 0.4s ease;
          background: transparent;
          border: 1px solid var(--noir);
          color: var(--noir);
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .btn-collab:hover {
          background: var(--noir);
          color: var(--cream);
          padding-right: 30px;
        }

        .btn-login {
          padding: 12px 28px;
          background: var(--noir);
          color: white;
          border: none;
          border-radius: 100px;
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 2px;
          cursor: pointer;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
        }

        .btn-login:hover {
          background: var(--gold);
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(197, 163, 134, 0.2);
        }

        .cart-indicator {
          position: relative;
        }

        .cart-badge {
          position: absolute;
          top: -4px;
          right: -6px;
          background: var(--gold);
          color: white;
          font-size: 8px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
        }
.login-link a { color: var(--gold); text-decoration: none; border-bottom: 1px solid transparent; }

        /* Mobile Drawer */
        .mobile-drawer {
          position: fixed;
          top: 0;
          right: 0;
          width: 100%;
          height: 100vh;
          background: var(--cream);
          z-index: 10001;
          padding: 100px 40px;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .mobile-link {
          font-family: var(--font-fashion);
          font-size: 40px;
          color: var(--noir);
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        @media (max-width: 1150px) {
          .nav-links-group, .btn-collab, .btn-login { display: none; }
          .nav-container { grid-template-columns: 1fr auto 1fr; padding: 0 30px; }
          .logo { font-size: 26px; }
        }
      `}</style>

      <div className="nav-container">
        {/* Left: Desktop Nav Links */}
        <div className="nav-links-group">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={`nav-link-item ${link.special ? 'special' : ''}`}
            >
              <motion.span whileHover={{ y: -1 }}>{link.name}</motion.span>
            </Link>
          ))}
        </div>

        {/* Center: Logo */}
        <div className="logo-wrapper">
          <Link href="/" className="logo">
            TRYFIT<span>®</span>
          </Link>
        </div>

        {/* Right: Functional Actions */}
        <div className="nav-right-stack">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            className="btn-collab"
          >
            <Sparkles size={12} color="var(--gold)" />
            <div className="login-link"><Link href="/shop/signup">Collab</Link></div>
            
          </motion.button>

          <button className="icon-btn"><Search size={19} strokeWidth={1.5} /></button>

          <Link href="/cart" className="icon-btn cart-indicator">
            <ShoppingBag size={20} strokeWidth={1.5} />
            <span className="cart-badge">0</span>
          </Link>

          <Link href="/login">
            <button className="btn-login">Sign In</button>
          </Link>

          {/* Hamburger (Only visible on mobile/tablet) */}
          <button 
            className="icon-btn lg:hidden" 
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
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="mobile-drawer"
          >
            <button 
              className="icon-btn" 
              style={{ position: 'absolute', top: 30, right: 30 }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={32} strokeWidth={1.2} />
            </button>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              <p style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '3px', color: 'var(--gold)' }}>NAVIGATION</p>
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className="mobile-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name} <ChevronRight size={24} color="var(--gold)" />
                </Link>
              ))}
            </div>

            <div style={{ marginTop: 'auto' }}>
              <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="btn-login" style={{ width: '100%', fontSize: '12px', padding: '20px' }}>
                  Member Login
                </button>
              </Link>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
                <Link href="#" className="nav-link-item" style={{ fontSize: '9px' }}>Instagram</Link>
                <Link href="#" className="nav-link-item" style={{ fontSize: '9px' }}>Atelier Journal</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;