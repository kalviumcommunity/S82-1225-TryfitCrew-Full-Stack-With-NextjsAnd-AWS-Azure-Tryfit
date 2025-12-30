"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Chrome,
  User,
  Store, 
  Smartphone, 
  Globe, 
  BarChart3, 
  Truck, 
  Users 
} from 'lucide-react';

export default function ShopOwnerSignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const containerStagger = {
    animate: { transition: { staggerChildren: 0.05 } }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: [0.6, 0.05, 0.01, 0.9] }
  } as const;

  return (
    <main className="signup-wrapper">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Italiana&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

        :root {
          --noir: #0a0a0a;
          --cream: #fdfcfb;
          --gold: #C5A386;
          --mint: #a3d1c6;
          --font-main: 'Plus Jakarta Sans', sans-serif;
          --font-serif: 'Italiana', serif;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body, html {
          height: 100vh;
          width: 100vw;
          overflow: hidden;
          background-color: var(--cream);
          font-family: var(--font-main);
          color: var(--noir);
        }

        .signup-wrapper {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          height: 100vh;
          width: 100vw;
          overflow: hidden;
        }

        /* --- Left Side: Business Visuals --- */
        .brand-side {
          position: relative;
          background: url('https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1470&auto=format&fit=crop') center/cover no-repeat;
          color: white;
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
        }

        .brand-side::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.4));
          z-index: 1;
        }

        .brand-logo {
          font-family: var(--font-serif);
          font-size: 28px;
          letter-spacing: 4px;
          text-decoration: none;
          color: white;
          z-index: 2;
        }

        .perks-container { z-index: 2; position: relative; }
        .perks-container h2 {
          font-family: var(--font-serif);
          font-size: 42px;
          line-height: 1.1;
          margin-bottom: 20px;
        }

        .perk-row {
          display: flex;
          gap: 15px;
          margin-bottom: 12px;
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(8px);
          padding: 15px;
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.15);
        }
        .perk-icon-box {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--mint);
          flex-shrink: 0;
        }
        .perk-text h4 { font-size: 14px; font-weight: 700; margin-bottom: 2px; }
        .perk-text p { font-size: 12px; opacity: 0.8; line-height: 1.4; }

        .copyright { font-size: 10px; font-weight: 600; opacity: 0.5; z-index: 2; }

        /* --- Right Side: Partner Form --- */
        .form-side {
          background: white;
          padding: 0 10%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          height: 100vh;
          overflow-y: auto; 
        }

        .login-link {
          position: absolute;
          top: 30px;
          right: 40px;
          font-size: 12px;
          font-weight: 700;
        }
        .login-link a { color: var(--gold); text-decoration: none; border-bottom: 1px solid transparent; }

        .form-header { margin-bottom: 25px; }
        .form-header h1 { font-family: var(--font-serif); font-size: 36px; margin-bottom: 4px; }
        .form-header p { color: #666; font-size: 14px; }

        .input-row { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 15px; }
        .input-group { margin-bottom: 15px; }
        .label { display: block; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 6px; color: #999; }
        
        .field-wrap {
          display: flex; align-items: center; border: 1.5px solid #f2f2f2; border-radius: 12px;
          padding: 0 16px; height: 48px; transition: 0.3s;
        }
        .field-wrap:focus-within { border-color: var(--noir); background: #fafafa; }
        .field-wrap input {
          border: none; outline: none; background: transparent; width: 100%;
          font-size: 14px; font-weight: 600; margin-left: 10px;
        }

        .strength-bar { height: 3px; background: #eee; border-radius: 2px; margin-top: 6px; overflow: hidden; }
        .strength-fill { height: 100%; width: 0%; transition: 0.5s; }

        .consent-box {
          display: flex; gap: 10px; align-items: flex-start; margin: 20px 0;
          padding: 15px; background: var(--cream); border-radius: 12px;
        }
        .consent-text { font-size: 11px; line-height: 1.5; color: #555; }

        /* --- UPDATED BUTTON ACTIONS --- */
        .actions-row {
          display: flex;
          gap: 12px;
          margin-top: 10px;
        }

        .btn-join {
          flex: 2; /* Takes up 2/3 of space */
          height: 50px; 
          background: var(--noir); color: white;
          border: none; border-radius: 50px; font-weight: 800; font-size: 13px;
          text-transform: uppercase; letter-spacing: 1px; cursor: pointer;
          display: flex; align-items: center; justify-content: center; gap: 10px;
          transition: 0.2s;
        }
        .btn-join:hover { background: #333; transform: translateY(-1px); }

        .google-btn {
          flex: 1; /* Takes up 1/3 of space */
          height: 50px; 
          border: 1.5px solid #f0f0f0; background: white;
          border-radius: 50px; display: flex; align-items: center; justify-content: center;
          gap: 8px; font-size: 13px; font-weight: 700; cursor: pointer;
          color: #555; transition: 0.2s;
        }
        .google-btn:hover { border-color: #ccc; background: #fafafa; }

        @media (max-width: 1024px) {
          .signup-wrapper { grid-template-columns: 1fr; }
          .brand-side { display: none; }
          .form-side { padding: 40px 20px; }
        }
      `}</style>

      {/* --- Left Column: Business Value Proposition --- */}
      <section className="brand-side">
        <Link href="/" className="brand-logo">TRYFIT PARTNER</Link>

        <motion.div 
          className="perks-container"
          variants={containerStagger}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={fadeInUp}>Scale Your Brand <br/>With TryFit</motion.h2>
          
          <motion.div className="perk-row" variants={fadeInUp}>
            <div className="perk-icon-box"><Users size={16} /></div>
            <div className="perk-text">
              <h4>Global Audience</h4>
              <p>Showcase your collection to millions of active shoppers.</p>
            </div>
          </motion.div>

          <motion.div className="perk-row" variants={fadeInUp}>
            <div className="perk-icon-box"><BarChart3 size={16} /></div>
            <div className="perk-text">
              <h4>Seller Analytics</h4>
              <p>Real-time insights on sales, trends, and customer behavior.</p>
            </div>
          </motion.div>

          <motion.div className="perk-row" variants={fadeInUp}>
            <div className="perk-icon-box"><Truck size={16} /></div>
            <div className="perk-text">
              <h4>Zero-Hassle Logistics</h4>
              <p>We handle the 'Try-at-Home' delivery and returns for you.</p>
            </div>
          </motion.div>
        </motion.div>

        <div className="copyright">
          © 2025 TRYFIT STUDIO INTERNATIONALE
        </div>
      </section>

      {/* --- Right Column: Shop Owner Form --- */}
      <section className="form-side">
        <div className="login-link">
          Already a partner? <Link href="/seller-login">Seller Login</Link>
        </div>

        <motion.div 
          className="form-container"
          initial={fadeInUp.initial}
          animate={fadeInUp.animate}
        >
          <div className="form-header">
            <h1>Partner Registration</h1>
            <p>Join the future of fashion retail. Register your business below.</p>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            
            {/* Owner Name */}
            <div className="input-row">
              <div className="input-group">
                <label className="label">Owner First Name</label>
                <div className="field-wrap">
                  <User size={16} color="#ccc" />
                  <input type="text" placeholder="John" required />
                </div>
              </div>
              <div className="input-group">
                <label className="label">Owner Last Name</label>
                <div className="field-wrap">
                  <input type="text" placeholder="Doe" required />
                </div>
              </div>
            </div>

            {/* Business Contact Info */}
            <div className="input-row">
              <div className="input-group">
                <label className="label">Business Email</label>
                <div className="field-wrap">
                  <Mail size={16} color="#ccc" />
                  <input type="email" placeholder="contact@brand.com" required />
                </div>
              </div>
              <div className="input-group">
                <label className="label">Phone Number</label>
                <div className="field-wrap">
                  <Smartphone size={16} color="#ccc" />
                  <input type="tel" placeholder="+1 555-000-0000" required />
                </div>
              </div>
            </div>

            {/* Shop Details */}
            <div className="input-group">
              <label className="label">Shop / Brand Name</label>
              <div className="field-wrap">
                <Store size={16} color="#ccc" />
                <input type="text" placeholder="e.g. Urban Threads Studio" required />
              </div>
            </div>

            

            {/* Password */}
            <div className="input-group">
              <label className="label">Create Password</label>
              <div className="field-wrap">
                <Lock size={16} color="#ccc" />
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="Secure password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
                <div onClick={() => setShowPassword(!showPassword)} style={{ cursor: 'pointer', padding: '5px' }}>
                  {showPassword ? <EyeOff size={16} color="#ccc" /> : <Eye size={16} color="#ccc" />}
                </div>
              </div>
              <div className="strength-bar">
                <div 
                  className="strength-fill" 
                  style={{ 
                    width: password.length > 0 ? `${Math.min(password.length * 12, 100)}%` : '0%',
                    background: password.length < 6 ? '#ff4d4d' : password.length < 10 ? '#ffd700' : '#4ade80'
                  }}
                ></div>
              </div>
            </div>

            <div className="consent-box">
              <input type="checkbox" required style={{ marginTop: '3px', accentColor: 'black' }} />
              <div className="consent-text">
                I confirm I am an authorized representative of this business and agree to the <b>Vendor Terms of Service</b>.
              </div>
            </div>

            {/* --- UPDATED: SINGLE LINE BUTTONS --- */}
            <div className="actions-row">
              <motion.button 
                className="btn-join"
                whileTap={{ scale: 0.98 }}
                type="submit"
              >
                Register Shop <ArrowRight size={16} />
              </motion.button>

              <button className="google-btn" type="button">
                <Chrome size={16} /> Google
              </button>
            </div>

          </form>
        </motion.div>
      </section>
    </main>
  );
}