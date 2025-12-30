"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Plus, 
  ArrowRight, 
  LayoutDashboard, 
  ShoppingBag, 
  Package, 
  Activity, 
  Settings,
  MoreHorizontal,
  Calendar,
  Layers,
  Search
} from 'lucide-react';

export default function CollectionsPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const collections = [
    { 
      title: "Summer Drop '25", 
      items: 24, 
      reach: "High", 
      status: "Active", 
      date: "Oct 12, 2025",
      img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=400" 
    },
    { 
      title: "The Noir TryFit", 
      items: 12, 
      reach: "Elite", 
      status: "Upcoming", 
      date: "Nov 01, 2025",
      img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=400" 
    },
    { 
      title: "Core Essentials", 
      items: 45, 
      reach: "Stable", 
      status: "Active", 
      date: "Sept 20, 2025",
      img: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=400" 
    },
    { 
      title: "Yoga Sculpt Series", 
      items: 18, 
      reach: "Moderate", 
      status: "Archived", 
      date: "Aug 15, 2025",
      img: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=400" 
    },
  ];

  return (
    <div className="collections-wrapper">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Italiana&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

        :root {
          --noir: #0A0A0A;
          --cream: #FDFCFB;
          --gold: #C5A386;
          --mint: #E9F4F1;
          --text-muted: #888888;
          --border: #F0F0F0;
          --font-fashion: 'Italiana', serif;
          --font-main: 'Plus Jakarta Sans', sans-serif;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background-color: var(--cream); font-family: var(--font-main); color: var(--noir); }

        .collections-wrapper { display: flex; min-height: 100vh; }

        /* --- Sidebar --- */
        .sidebar {
          width: 280px; background: #FFF; border-right: 1px solid var(--border);
          padding: 40px 24px; position: fixed; height: 100vh; display: flex; flex-direction: column;
          z-index: 100; transition: width 0.4s ease;
        }
        .brand { font-family: var(--font-fashion); font-size: 28px; letter-spacing: 2px; margin-bottom: 50px; display: flex; align-items: center; gap: 12px; white-space: nowrap; }
        .logo-dot { width: 8px; height: 8px; background: var(--gold); border-radius: 50%; }
        
        .nav-link { 
          display: flex; align-items: center; gap: 14px; padding: 16px 20px; 
          border-radius: 16px; color: var(--text-muted); text-decoration: none; 
          font-size: 14px; font-weight: 600; margin-bottom: 6px; transition: 0.3s;
          white-space: nowrap;
        }
        .nav-link:hover { color: var(--noir); background: #F9F9F9; }
        .nav-link.active { background: var(--noir); color: #FFF; box-shadow: 0 10px 20px rgba(0,0,0,0.1); }

        /* --- Main Content --- */
        .main-content { margin-left: 280px; flex-grow: 1; padding: 40px 60px; width: calc(100% - 280px); transition: margin 0.4s ease; }

        .page-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 50px; }
        .title-area h1 { font-family: var(--font-fashion); font-size: 48px; font-weight: 400; }
        .title-area p { color: var(--text-muted); font-size: 14px; margin-top: 5px; }

        .btn-gold { background: var(--gold); color: #FFF; border: none; padding: 14px 28px; border-radius: 100px; font-weight: 700; font-size: 13px; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: 0.3s; }
        .btn-gold:hover { transform: translateY(-2px); box-shadow: 0 10px 20px rgba(197, 163, 134, 0.2); }

        /* --- Collection Grid --- */
        .collection-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 30px; }
        .collection-card { background: #FFF; border-radius: 40px; border: 1px solid var(--border); overflow: hidden; position: relative; }
        
        .img-container { height: 260px; overflow: hidden; position: relative; }
        .img-container img { width: 100%; height: 100%; object-fit: cover; transition: 0.8s cubic-bezier(0.2, 1, 0.3, 1); }
        .collection-card:hover .img-container img { transform: scale(1.1); }
        
        .badge-overlay { position: absolute; top: 20px; right: 20px; display: flex; gap: 8px; }
        .badge { background: rgba(255,255,255,0.9); backdrop-filter: blur(10px); padding: 6px 14px; border-radius: 100px; font-size: 10px; font-weight: 800; text-transform: uppercase; color: var(--noir); }
        .badge.status { background: var(--noir); color: #FFF; }

        .card-content { padding: 30px; }
        .card-content h3 { font-family: var(--font-fashion); font-size: 28px; margin-bottom: 15px; }
        
        .meta-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid var(--border); }
        .meta-item { display: flex; align-items: center; gap: 8px; color: var(--text-muted); font-size: 12px; font-weight: 600; }

        .card-footer { display: flex; justify-content: space-between; align-items: center; }
        .reach-tag { font-size: 11px; font-weight: 800; color: var(--gold); text-transform: uppercase; letter-spacing: 1px; }

        /* --- Responsive --- */
        @media (max-width: 1200px) {
          .sidebar { width: 88px; padding: 40px 18px; }
          .main-content { margin-left: 88px; width: calc(100% - 88px); padding: 40px; }
          .brand span, .nav-link span { display: none; }
          .sidebar .brand { justify-content: center; }
        }

        @media (max-width: 768px) {
          .page-header { flex-direction: column; align-items: flex-start; gap: 20px; }
          .collection-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* --- Sidebar --- */}
      <aside className="sidebar">
        <div className="brand">
          TryFit <div className="logo-dot"></div>
        </div>
        
        <nav style={{ flexGrow: 1 }}>
          <Link href="/shop/dashboard" className="nav-link">
            <LayoutDashboard size={20}/> <span>Dashboard</span>
          </Link>
          <Link href="/shop/boutique" className="nav-link">
            <ShoppingBag size={20}/> <span>Boutique</span>
          </Link>
          <Link href="/shop/collections" className="nav-link active">
            <Package size={20}/> <span>Collections</span>
          </Link>
          <Link href="/shop/analytics" className="nav-link">
            <Activity size={20}/> <span>Analytics</span>
          </Link>
          <Link href="/shop/settings" className="nav-link">
            <Settings size={20}/> <span>Settings</span>
          </Link>
        </nav>
      </aside>

      {/* --- Main Area --- */}
      <main className="main-content">
        <header className="page-header">
          <div className="title-area">
            <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>Atelier Collections</motion.h1>
            <p>Curate and group your high-fashion releases.</p>
          </div>
          <button className="btn-gold">
            <Plus size={18}/> Create Collection
          </button>
        </header>

        {/* Collection Filter/Search Bar */}
        <div style={{ marginBottom: '30px', display: 'flex', gap: '15px' }}>
            <div style={{ flex: 1, background: '#FFF', border: '1px solid #EEE', borderRadius: '15px', padding: '12px 20px', display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Search size={18} color="#AAA" />
                <input placeholder="Search Collections..." style={{ border: 'none', outline: 'none', width: '100%', fontVariant: 'var(--font-main)', fontWeight: 500 }} />
            </div>
            <div style={{ background: '#FFF', border: '1px solid #EEE', borderRadius: '15px', padding: '12px 25px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px', fontWeight: 700, cursor: 'pointer' }}>
                Latest <ChevronDown size={16} />
            </div>
        </div>

        <div className="collection-grid">
          {collections.map((c, i) => (
            <motion.div 
              key={i} 
              className="collection-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="img-container">
                <img src={c.img} alt={c.title} />
                <div className="badge-overlay">
                  <div className="badge">{c.items} Items</div>
                  <div className="badge status" style={{ 
                    background: c.status === 'Active' ? 'var(--gold)' : 
                                c.status === 'Upcoming' ? 'var(--noir)' : '#AAA' 
                  }}>
                    {c.status}
                  </div>
                </div>
              </div>

              <div className="card-content">
                <h3>{c.title}</h3>
                
                <div className="meta-row">
                  <div className="meta-item">
                    <Calendar size={14} color="var(--gold)" />
                    {c.date}
                  </div>
                  <div className="meta-item">
                    <Layers size={14} color="var(--gold)" />
                    Atelier Series
                  </div>
                </div>

                <div className="card-footer">
                  <span className="reach-tag">Engagement: {c.reach}</span>
                  <motion.div 
                    whileHover={{ x: 5 }} 
                    style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 800, fontSize: '12px', textTransform: 'uppercase' }}
                  >
                    Manage <ArrowRight size={18} color="var(--gold)" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Add New Collection Blank Card */}
          <motion.div 
            className="collection-card" 
            style={{ border: '2px dashed #DDD', background: 'transparent', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '400px', cursor: 'pointer' }}
            whileHover={{ background: '#FFF', borderColor: 'var(--gold)' }}
          >
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                <Plus size={24} color="#AAA" />
            </div>
            <p style={{ fontWeight: 800, fontSize: '12px', color: '#AAA', textTransform: 'uppercase', letterSpacing: '1px' }}>Initialize New Set</p>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

// Sub-component for simple Dropdown icon
function ChevronDown({ size, ...props }: any) {
    return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m6 9 6 6 6-6"/></svg>
}