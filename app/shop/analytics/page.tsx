"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  TrendingUp, Users, ShoppingCart, Percent, ArrowDownRight, ArrowUpRight, 
  Zap, LayoutDashboard, ShoppingBag, Package, Activity, Settings, 
  Search, Bell, Calendar, Download, Filter, MousePointer2, Target
} from 'lucide-react';

export default function AnalysisPage() {
  const [timeRange, setTimeRange] = useState("Last 30 Days");

  const stats = [
    { label: 'Avg Order Value', val: '$312.40', trend: '+5.2%', icon: <ShoppingCart size={20}/> },
    { label: 'Customer LTV', val: '$1,840', trend: '+12.8%', icon: <Users size={20}/> },
    { label: 'Conversion Rate', val: '3.42%', trend: '-0.4%', icon: <Percent size={20}/> },
    { label: 'Return Rate', val: '1.2%', trend: '-2.1%', icon: <TrendingUp size={20}/> },
  ];

  return (
    <div className="analysis-wrapper">
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

        .analysis-wrapper { display: flex; min-height: 100vh; }

        /* --- Sidebar --- */
        .sidebar {
          width: 280px; background: #FFF; border-right: 1px solid var(--border);
          padding: 40px 24px; position: fixed; height: 100vh; display: flex; flex-direction: column;
          z-index: 100; transition: all 0.4s ease;
        }
        .brand { font-family: var(--font-fashion); font-size: 28px; letter-spacing: 2px; margin-bottom: 50px; display: flex; align-items: center; gap: 12px; }
        .logo-dot { width: 8px; height: 8px; background: var(--gold); border-radius: 50%; }
        
        .nav-link { 
          display: flex; align-items: center; gap: 14px; padding: 16px 20px; 
          border-radius: 16px; color: var(--text-muted); text-decoration: none; 
          font-size: 14px; font-weight: 600; margin-bottom: 6px; transition: 0.3s;
        }
        .nav-link:hover { color: var(--noir); background: #F9F9F9; }
        .nav-link.active { background: var(--noir); color: #FFF; box-shadow: 0 10px 20px rgba(0,0,0,0.1); }

        /* --- Main Content --- */
        .main-content { margin-left: 280px; flex-grow: 1; padding: 40px 60px; width: calc(100% - 280px); transition: margin 0.4s ease; }

        .page-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 50px; flex-wrap: wrap; gap: 20px; }
        .title-area h1 { font-family: var(--font-fashion); font-size: 48px; font-weight: 400; }
        
        .action-bar { display: flex; gap: 12px; }
        .btn-glass { background: #FFF; border: 1px solid var(--border); padding: 12px 20px; border-radius: 12px; font-weight: 700; font-size: 13px; display: flex; align-items: center; gap: 8px; cursor: pointer; transition: 0.3s; }
        .btn-glass:hover { background: var(--noir); color: #FFF; }

        /* --- Cards --- */
        .grid-stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px; margin-bottom: 40px; }
        .stat-card { background: #FFF; padding: 30px; border-radius: 32px; border: 1px solid var(--border); position: relative; }
        
        /* --- Graph Visual --- */
        .revenue-panel { background: #FFF; padding: 40px; border-radius: 40px; border: 1px solid var(--border); margin-bottom: 30px; }
        .chart-placeholder { width: 100%; height: 300px; position: relative; margin-top: 30px; }
        .svg-curve { width: 100%; height: 100%; overflow: visible; }
        .path-line { fill: none; stroke: var(--gold); stroke-width: 3; stroke-linecap: round; }
        .path-area { fill: url(#grad); opacity: 0.1; }

        /* --- Category & Insights --- */
        .split-grid { display: grid; grid-template-columns: 1.6fr 1fr; gap: 30px; }

        .cat-panel { background: var(--noir); color: #FFF; padding: 40px; border-radius: 40px; }
        .progress-track { height: 8px; background: rgba(255,255,255,0.1); border-radius: 10px; margin-top: 10px; overflow: hidden; }
        .progress-fill { height: 100%; background: var(--gold); border-radius: 10px; }

        .insight-card { background: var(--mint); padding: 40px; border-radius: 40px; border: 1px solid #D1E5E0; display: flex; flex-direction: column; }

        /* --- Responsive Queries --- */
        @media (max-width: 1200px) {
          .sidebar { width: 88px; padding: 40px 18px; }
          .main-content { margin-left: 88px; width: calc(100% - 88px); padding: 40px; }
          .nav-label, .brand-text { display: none; }
          .sidebar .brand { justify-content: center; }
        }

        @media (max-width: 992px) {
          .split-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 640px) {
          .main-content { padding: 20px; }
          .page-header h1 { font-size: 32px; }
        }
      `}</style>

      {/* --- Sidebar --- */}
      <aside className="sidebar">
        <div className="brand">
          <div className="logo-dot"></div> <span className="brand-text">TryFit</span>
        </div>
        
        <nav style={{ flexGrow: 1 }}>
          <Link href="/shop/dashboard" className="nav-link">
            <LayoutDashboard size={20}/> <span className="nav-label">Dashboard</span>
          </Link>
          <Link href="/shop/boutique" className="nav-link">
            <ShoppingBag size={20}/> <span className="nav-label">Boutique</span>
          </Link>
          <Link href="/shop/collections" className="nav-link">
            <Package size={20}/> <span className="nav-label">Collections</span>
          </Link>
          <Link href="/shop/analytics" className="nav-link active">
            <Activity size={20}/> <span className="nav-label">Analytics</span>
          </Link>
          <Link href="/shop/settings" className="nav-link">
            <Settings size={20}/> <span className="nav-label">Settings</span>
          </Link>
        </nav>

        <div className="nav-link" style={{ marginTop: 'auto', background: 'var(--cream)', color: 'var(--noir)' }}>
           <Target size={18} color="var(--gold)"/> <span className="nav-label" style={{fontSize: '12px'}}>V.2.0.4 Stable</span>
        </div>
      </aside>

      {/* --- Main Area --- */}
      <main className="main-content">
        <header className="page-header">
          <div className="title-area">
            <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>TryFit Intelligence</motion.h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Deep dive into your boutique's performance DNA.</p>
          </div>
          <div className="action-bar">
            <button className="btn-glass"><Calendar size={16}/> {timeRange}</button>
            <button className="btn-glass"><Download size={16}/> Export Report</button>
          </div>
        </header>

        {/* --- KPI Grid --- */}
        <div className="grid-stats">
          {stats.map((s, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="stat-card"
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--gold)' }}>{s.icon}</div>
                <span style={{ fontSize: '11px', fontWeight: 800, color: s.trend.startsWith('+') ? '#14BA6D' : '#FF4D4D', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  {s.trend} {s.trend.startsWith('+') ? <ArrowUpRight size={12}/> : <ArrowDownRight size={12}/>}
                </span>
              </div>
              <p style={{ fontSize: '11px', fontWeight: 800, color: '#AAA', textTransform: 'uppercase', marginTop: '15px' }}>{s.label}</p>
              <p style={{ fontSize: '28px', fontWeight: 800, marginTop: '5px' }}>{s.val}</p>
            </motion.div>
          ))}
        </div>

        {/* --- Revenue Trend Curve --- */}
        <section className="revenue-panel">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontFamily: 'var(--font-fashion)', fontSize: '24px' }}>Revenue Velocity</h3>
            <div style={{ display: 'flex', gap: '15px', fontSize: '12px', fontWeight: 700, color: '#AAA' }}>
                <span>Mon</span><span>Tue</span><span>Wed</span><span style={{color: 'var(--noir)'}}>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>
          </div>
          
          <div className="chart-placeholder">
            <svg viewBox="0 0 1000 300" className="svg-curve">
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{stopColor:'var(--gold)', stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:'var(--gold)', stopOpacity:0}} />
                </linearGradient>
              </defs>
              <motion.path 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="path-line" 
                d="M0,250 C150,220 200,280 350,180 C500,80 600,200 750,120 C900,40 1000,100 1000,80" 
              />
              <path className="path-area" d="M0,250 C150,220 200,280 350,180 C500,80 600,200 750,120 C900,40 1000,100 1000,80 V300 H0 Z" />
              <circle cx="750" cy="120" r="6" fill="var(--noir)" stroke="white" strokeWidth="3" />
            </svg>
          </div>
        </section>

        {/* --- Bottom Intelligence Grid --- */}
        <div className="split-grid">
          <div className="cat-panel">
            <h3 style={{ fontFamily: 'var(--font-fashion)', fontSize: '26px', marginBottom: '30px' }}>Category Performance</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              {[ { n: 'Activewear', v: '85%' }, { n: 'Dresses', v: '62%' }, { n: 'Suits & Tailoring', v: '48%' }, { n: 'Accessories', v: '31%' } ].map((item, idx) => (
                <div key={idx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: 700 }}>
                    <span>{item.n}</span><span>{item.v}</span>
                  </div>
                  <div className="progress-track">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: item.v }}
                      transition={{ duration: 1.2, delay: idx * 0.1 }}
                      className="progress-fill"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="insight-card">
            <div style={{ background: '#FFF', width: '50px', height: '50px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '25px' }}>
              <Zap color="#2D4A43" size={24} />
            </div>
            <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#2D4A43', marginBottom: '15px' }}>Smart Insight</h3>
            <p style={{ fontSize: '14px', color: '#4A6B63', lineHeight: 1.7, fontWeight: 500 }}>
              Your **Noir Series** collection has a **92% lower return rate** compared to the industry average. 
              <br/><br/>
              Data suggests that the "Atelier Fit" technology is accurately predicting sizes for 9 out of 10 customers in this segment.
            </p>
            <div style={{ marginTop: 'auto', paddingTop: '30px' }}>
               <button style={{ width: '100%', background: '#2D4A43', color: '#FFF', border: 'none', padding: '16px', borderRadius: '100px', fontWeight: 800, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                 Optimize Stock <MousePointer2 size={16}/>
               </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}