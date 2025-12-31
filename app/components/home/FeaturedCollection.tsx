"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function FeaturedCollection() {
  return (
    <section className="featured">
      <style>{`
        .featured { padding: 120px 0; text-align: center; position: relative; overflow: hidden; background: #FAFAFA; }
        .section-label { font-family: 'Italiana', serif; font-size: 48px; margin-bottom: 20px; color: #0A0A0A; }
        .section-sub { color: #666; font-size: 14px; margin-bottom: 60px; letter-spacing: 1px; text-transform: uppercase; }
        .fan-carousel { display: flex; justify-content: center; align-items: center; height: 500px; perspective: 1200px; position: relative; }
        .fan-item { width: 260px; height: 400px; border-radius: 20px; overflow: hidden; position: relative; transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94); box-shadow: 0 15px 40px rgba(0,0,0,0.15); border: 1px solid #FFF; cursor: pointer; margin-left: -80px; }
        .fan-item:first-child { margin-left: 0; }
        .fan-item img { width: 100%; height: 100%; object-fit: cover; }
        .fan-item:hover { transform: translateY(-30px) rotate(0deg) scale(1.1) !important; z-index: 100 !important; margin-right: 40px; margin-left: 40px; box-shadow: 0 30px 60px rgba(0,0,0,0.3); border-color: #C5A386; }
        .item-overlay { position: absolute; bottom: 0; left: 0; width: 100%; padding: 20px; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); color: white; opacity: 0; transition: 0.3s; transform: translateY(10px); }
        .fan-item:hover .item-overlay { opacity: 1; transform: translateY(0); }
      `}</style>

      <motion.h2 className="section-label" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>The Curated Edit</motion.h2>
      <p className="section-sub">Handpicked essentials for the modern wardrobe</p>
      <div className="fan-carousel">
        {[
          { id: 1, rot: -10, y: 30, z: 5, img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000', name: 'Editorial Coat', price: '$240' },
          { id: 2, rot: -5, y: 15, z: 10, img: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1000', name: 'Velvet Dress', price: '$180' },
          { id: 3, rot: 0, y: 0, z: 20, center: true, img: 'https://images.unsplash.com/photo-1596783074918-c84cb06531ca?q=80&w=1000', name: 'Silk Slip', price: '$150' },
          { id: 4, rot: 5, y: 15, z: 10, img: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=1000', name: 'Summer Linen', price: '$120' },
          { id: 5, rot: 10, y: 30, z: 5, img: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1000', name: 'Atelier Suit', price: '$350' }
        ].map((item) => (
          <motion.div 
            key={item.id} 
            className={`fan-item ${item.center ? 'center' : ''}`}
            initial={{ rotate: item.rot, y: 50, opacity: 0 }}
            whileInView={{ rotate: item.rot, y: item.y, opacity: 1 }}
            viewport={{ once: true }}
            style={{ zIndex: item.z }}
          >
            <img src={item.img} alt={item.name} />
            <div className="item-overlay">
              <p style={{fontSize: 12, fontWeight: 600, textTransform: 'uppercase'}}>{item.name}</p>
              <p style={{fontSize: 16, fontWeight: 700, color: '#C5A386', fontFamily: 'Italiana, serif'}}>{item.price}</p>
              <div style={{ display: 'flex', alignItems: 'center', marginTop: 8, fontSize: 10, fontWeight: 700, gap: 5 }}>
                SHOP LOOK <ArrowRight size={14} color="#C5A386" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}