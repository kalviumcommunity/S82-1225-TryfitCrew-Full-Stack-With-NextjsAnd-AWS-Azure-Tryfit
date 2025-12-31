"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Truck, RotateCcw, ShieldCheck } from 'lucide-react';

export default function ConciergeService() {
  return (
    <section className="concierge-section">
      <style>{`
        .concierge-section { padding: 160px 40px; background: #111; position: relative; overflow: hidden; color: #FFF; }
        .concierge-section::before { content: ''; position: absolute; top: 20%; left: 50%; transform: translate(-50%, -50%); width: 600px; height: 600px; background: radial-gradient(circle, rgba(197, 163, 134, 0.15) 0%, transparent 70%); z-index: 0; pointer-events: none; }
        .concierge-header { text-align: center; margin-bottom: 120px; max-width: 800px; margin-left: auto; margin-right: auto; position: relative; z-index: 2; }
        .concierge-header h2 { font-family: 'Italiana', serif; font-size: 72px; line-height: 1.1; margin-bottom: 24px; color: #FFF; }
        .concierge-header p { font-size: 16px; color: rgba(255,255,255,0.7); line-height: 1.7; max-width: 600px; margin: 0 auto; }
        .concierge-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 40px; max-width: 1400px; margin: 0 auto; align-items: center; position: relative; z-index: 2; }
        .glass-card { background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 40px; padding: 60px 40px; text-align: center; position: relative; transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1); height: 420px; display: flex; flex-direction: column; justify-content: center; align-items: center; overflow: hidden; }
        .glass-card:hover { transform: translateY(-15px); border-color: rgba(197, 163, 134, 0.4); background: rgba(255, 255, 255, 0.05); box-shadow: 0 20px 50px rgba(0,0,0,0.3); }
        .step-floater { position: absolute; top: 20px; left: 50%; transform: translateX(-50%); font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 3px; color: rgba(255,255,255,0.3); border: 1px solid rgba(255,255,255,0.1); padding: 6px 14px; border-radius: 20px; }
        .icon-glow { width: 80px; height: 80px; border-radius: 50%; background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1), transparent); border: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; justify-content: center; margin-bottom: 40px; color: #C5A386; box-shadow: 0 10px 30px rgba(0,0,0,0.2); transition: 0.4s ease; }
        .glass-card:hover .icon-glow { transform: scale(1.1); border-color: #C5A386; background: rgba(197, 163, 134, 0.1); }
        .con-title { font-family: 'Italiana', serif; font-size: 32px; margin-bottom: 15px; color: #FFF; }
        .con-desc { font-size: 13px; color: rgba(255,255,255,0.6); line-height: 1.7; }
        .glass-line { position: absolute; top: 50%; left: 10%; right: 10%; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent); z-index: 0; }
        @media (max-width: 1024px) { .concierge-grid { grid-template-columns: 1fr; gap: 60px; } .glass-line { display: none; } }
      `}</style>

      <div className="concierge-header">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>The Private Fitting Room</motion.h2>
        <p>Experience the boutique without leaving your sanctuary. Bridging the gap between digital ease and physical luxury.</p>
      </div>

      <div className="concierge-grid">
        <div className="glass-line"></div>
        <motion.div className="glass-card" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="step-floater">Step 01</span>
          <div className="icon-glow"><Truck size={32} strokeWidth={1} /></div>
          <h3 className="con-title">Swift Arrival</h3>
          <p className="con-desc">Curate your look online. Our white-glove courier delivers your selection within 2 hours.</p>
        </motion.div>
        <motion.div className="glass-card" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
          <span className="step-floater" style={{ borderColor: '#C5A386', color: '#C5A386' }}>Signature</span>
          <div className="icon-glow" style={{ width: 100, height: 100, borderColor: '#C5A386' }}>
            <RotateCcw size={48} strokeWidth={1} />
          </div>
          <h3 className="con-title" style={{ color: '#C5A386' }}>30-Min Trial</h3>
          <p className="con-desc">Your home becomes the fitting room. The courier waits while you find your perfect fit in total comfort.</p>
        </motion.div>
        <motion.div className="glass-card" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}>
          <span className="step-floater">Step 03</span>
          <div className="icon-glow"><ShieldCheck size={32} strokeWidth={1} /></div>
          <h3 className="con-title">Instant Returns</h3>
          <p className="con-desc">Keep only what you love. Hand back the rest immediately—no packaging, no labels, no hassle.</p>
        </motion.div>
      </div>
    </section>
  );
}