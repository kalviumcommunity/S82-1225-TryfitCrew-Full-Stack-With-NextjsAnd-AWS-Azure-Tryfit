"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function CategorySection() {
  return (
    <section className="category-section">
      <style>{`
        .category-section { padding: 140px 40px; background: #FAFAFA; position: relative; }
        .cat-header { text-align: center; margin-bottom: 100px; }
        .cat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; max-width: 1600px; margin: 0 auto; }
        .cat-card { position: relative; height: 800px; overflow: hidden; cursor: pointer; background: #0A0A0A; }
        .cat-card img { width: 100%; height: 100%; object-fit: cover; transition: transform 1.4s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.5s ease; opacity: 0.85; scale: 1.05; }
        .cat-card:hover img { transform: scale(1); opacity: 0.6; }
        .cat-inner-frame { position: absolute; inset: 40px; border: 1px solid rgba(255,255,255,0.3); transition: all 0.8s cubic-bezier(0.19, 1, 0.22, 1); z-index: 1; }
        .cat-card:hover .cat-inner-frame { inset: 20px; border-color: #C5A386; }
        .cat-num { font-family: 'Italiana', serif; font-size: 120px; color: rgba(255,255,255,0.1); position: absolute; top: 20px; right: 40px; line-height: 1; transition: 0.5s ease; }
        .cat-card:hover .cat-num { transform: translateY(-20px); color: rgba(197, 163, 134, 0.2); }
        .cat-overlay { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; z-index: 2; }
        .cat-title { color: #FFF; font-family: 'Italiana', serif; font-size: 72px; line-height: 1; margin-bottom: 20px; transform: translateY(20px); transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1); }
        .cat-card:hover .cat-title { transform: translateY(-10px); }
        .btn-line { position: relative; font-size: 12px; font-weight: 700; color: #FFF; text-transform: uppercase; letter-spacing: 3px; padding-bottom: 10px; overflow: hidden; }
        .btn-line::after { content: ''; position: absolute; bottom: 0; left: 0; width: 100%; height: 1px; background: #C5A386; transform: scaleX(0); transform-origin: right; transition: transform 0.4s ease; }
        .cat-card:hover .btn-line::after { transform: scaleX(1); transform-origin: left; }
        @media (max-width: 1024px) { .cat-grid { grid-template-columns: 1fr; } .cat-card { height: 600px; } }
      `}</style>

      <div className="cat-header">
        <motion.h2 style={{fontFamily: 'Italiana, serif', fontSize: '48px'}} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>The Atelier Categories</motion.h2>
        <p style={{color: '#666', fontSize: '14px', letterSpacing: '1px', textTransform: 'uppercase'}}>Curated for the modern silhouette</p>
      </div>

      <div className="cat-grid">
        {[
          { id: "01", title: "Women", img: "https://images.unsplash.com/photo-1581338834647-b0fb40704e21?q=80&w=1200&auto=format&fit=crop" },
          { id: "02", title: "Men", img: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1200&auto=format&fit=crop" },
          { id: "03", title: "Gen-Z", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop" }
        ].map((cat, i) => (
          <motion.div key={i} className="cat-card" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }} viewport={{ once: true }}>
            <img src={cat.img} alt={cat.title} />
            <div className="cat-inner-frame"></div>
            <span className="cat-num">{cat.id}</span>
            <div className="cat-overlay">
              <h3 className="cat-title">{cat.title}</h3>
              <div className="btn-line">View Collection</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}