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
  ChevronLeft,
  Chrome,
  ShieldCheck,
  Gem
} from 'lucide-react';

export default function TryFitLoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }
  } as const;

  return (
    <main className="login-wrapper">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Italiana&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

        :root {
          --noir: #0a0a0a;
          --cream: #fdfcfb;
          --gold: #C5A386;
          --border: #e5e5e5;
          --font-main: 'Plus Jakarta Sans', sans-serif;
          --font-serif: 'Italiana', serif;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background-color: var(--cream);
          font-family: var(--font-main);
          color: var(--noir);
          overflow: hidden;
        }

        .login-wrapper {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          min-height: 100vh;
          width: 100%;
        }

        /* --- Left Side: Visual/Branding --- */
        .visual-side {
          position: relative;
          background: url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop') center/cover;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 60px;
          color: white;
        }

        .visual-side::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
          z-index: 1;
        }

        .brand-logo-white {
          font-family: var(--font-serif);
          font-size: 32px;
          letter-spacing: 4px;
          z-index: 2;
          text-decoration: none;
          color: white;
        }

        .visual-content {
          position: relative;
          z-index: 2;
          max-width: 480px;
        }

        .visual-content h2 {
          font-family: var(--font-serif);
          font-size: 56px;
          line-height: 1.1;
          margin-bottom: 24px;
        }

        .perks-list {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .perk-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.5px;
          opacity: 0.9;
        }

        /* --- Right Side: Form --- */
        .form-side {
          background: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 10%;
          position: relative;
        }

        .back-home {
          position: absolute;
          top: 40px;
          right: 40px;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--noir);
          text-decoration: none;
          opacity: 0.6;
          transition: opacity 0.3s;
        }

        .back-home:hover { opacity: 1; }

        .form-header { margin-bottom: 40px; }
        .form-header h1 { font-family: var(--font-serif); font-size: 42px; margin-bottom: 8px; }
        .form-header p { color: #666; font-size: 14px; }

        /* Input Styles */
        .input-group { margin-bottom: 24px; position: relative; }
        .input-label { 
          display: block; font-size: 11px; font-weight: 800; 
          text-transform: uppercase; margin-bottom: 8px; color: #999;
        }

        .input-field-wrap {
          display: flex; align-items: center; border: 1.5px solid #f0f0f0; 
          border-radius: 12px; padding: 0 20px; height: 56px; transition: 0.3s;
        }

        .input-field-wrap:focus-within { border-color: var(--noir); background: #fcfcfc; }
        .input-field-wrap input {
          border: none; outline: none; background: transparent; 
          width: 100%; font-size: 14px; font-weight: 500; margin-left: 12px;
        }

        .password-toggle { cursor: pointer; color: #ccc; transition: 0.2s; }
        .password-toggle:hover { color: var(--noir); }

        .form-options {
          display: flex; justify-content: space-between; align-items: center;
          margin-bottom: 32px; font-size: 13px; font-weight: 600;
        }

        .forgot-pass { color: var(--gold); text-decoration: none; }

        /* Button UI */
        .btn-submit {
          width: 100%; height: 60px; background: var(--noir); color: white;
          border: none; border-radius: 50px; font-weight: 800; font-size: 14px;
          text-transform: uppercase; letter-spacing: 2px; cursor: pointer;
          display: flex; align-items: center; justify-content: center; gap: 12px;
          transition: 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .btn-submit:hover { transform: translateY(-3px); box-shadow: 0 20px 40px rgba(0,0,0,0.1); }

        .divider {
          display: flex; align-items: center; text-align: center;
          margin: 32px 0; color: #ccc; font-size: 11px; font-weight: 800;
          text-transform: uppercase; letter-spacing: 1px;
        }
        .divider::before, .divider::after { content: ''; flex: 1; border-bottom: 1px solid #f0f0f0; }
        .divider span { padding: 0 15px; }

        .btn-google {
          width: 100%; height: 56px; border: 1.5px solid #eee; background: white;
          border-radius: 50px; display: flex; align-items: center; justify-content: center;
          gap: 12px; font-size: 14px; font-weight: 700; cursor: pointer; transition: 0.2s;
        }
        .btn-google:hover { background: #f9f9f9; border-color: #ddd; }

        .signup-prompt {
          text-align: center; margin-top: 40px; font-size: 14px; color: #666; font-weight: 500;
        }
        .signup-prompt a { color: var(--noir); font-weight: 800; text-decoration: none; }

        @media (max-width: 1024px) {
          .login-wrapper { grid-template-columns: 1fr; }
          .visual-side { display: none; }
          .form-side { padding: 40px 24px; }
        }
      `}</style>

      {/* --- Visual Column --- */}
      <section className="visual-side">
        <Link href="/" className="brand-logo-white">TRYFIT</Link>
        
        <motion.div 
          className="visual-content"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2>The TryFit <br/>Awaits You</h2>
          <div className="perks-list">
            <div className="perk-item"><ShieldCheck size={18} className="perk-icon" /> Early access to seasonal drops</div>
            <div className="perk-item"><Gem size={18} className="perk-icon" /> Complimentary tailored fitting</div>
            <div className="perk-item"><ArrowRight size={18} className="perk-icon" /> Managed Closet & Style Analytics</div>
          </div>
        </motion.div>

        <div style={{ position: 'relative', zIndex: 2, fontSize: '11px', fontWeight: 600, opacity: 0.6 }}>
          © 2025 TRYFIT STUDIO INTERNATIONALE
        </div>
      </section>

      {/* --- Form Column --- */}
      <section className="form-side">
        <Link href="/" className="back-home">
          <ChevronLeft size={14} /> Back to Home
        </Link>

        <motion.div 
          className="form-container"
          initial={fadeInUp.initial}
          animate={fadeInUp.animate}
          transition={fadeInUp.transition}
        >
          <div className="form-header">
            <h1>Welcome Back</h1>
            <p>Log in to access your bespoke fitness wardrobe.</p>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <label className="input-label">Email Address</label>
              <div className="input-field-wrap">
                <Mail size={18} color="#aaa" />
                <input type="email" placeholder="name@tryfit.com" required />
              </div>
            </div>

            <div className="input-group">
              <label className="input-label">Password</label>
              <div className="input-field-wrap">
                <Lock size={18} color="#aaa" />
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="••••••••" 
                  required 
                />
                <div 
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </div>
              </div>
            </div>

            <div className="form-options">
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <input type="checkbox" style={{ accentColor: 'black' }} /> Remember me
              </label>
              <Link href="/signup" className="forgot-pass">Sign Up ?</Link>
            </div>

            <motion.button 
              type="submit" 
              className="btn-submit"
              whileTap={{ scale: 0.98 }}
            >
              Sign In <ArrowRight size={18} />
            </motion.button>

            <div className="divider">
              <span>Or continue with</span>
            </div>

            <button type="button" className="btn-google">
              <Chrome size={18} /> Continue with Google
            </button>
          </form>

          
        </motion.div>
      </section>
    </main>
  );
}