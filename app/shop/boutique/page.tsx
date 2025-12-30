"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Eye, 
  Edit3, 
  Trash2, 
  Globe, 
  LayoutDashboard, 
  ShoppingBag, 
  Package, 
  Activity, 
  MoreVertical,
  ChevronDown,
  ArrowUpRight,
  Plus,
  Settings
} from 'lucide-react';

export default function BoutiquePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const products = [
    { id: 1, name: "Midnight Silk Wrap", category: "Dress", price: 249, stock: 12, sales: 142, status: "Live", img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=200" },
    { id: 2, name: "Aero-Lift Runners", category: "Activewear", price: 180, stock: 45, sales: 890, status: "Live", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=200" },
    { id: 3, name: "Compression Tech Tee", category: "Shirt", price: 85, stock: 0, sales: 320, status: "Sold Out", img: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=200" },
    { id: 4, name: "Elements Yoga Mat", category: "Accessories", price: 95, stock: 8, sales: 110, status: "Low Stock", img: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?q=80&w=200" },
  ];

  return (
    <div className="boutique-wrapper">
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

        .boutique-wrapper { display: flex; min-height: 100vh; }

        /* --- Sidebar --- */
        .sidebar {
          width: 280px; background: #FFF; border-right: 1px solid var(--border);
          padding: 40px 24px; position: fixed; height: 100vh; display: flex; flex-direction: column;
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
        .main-content { margin-left: 280px; flex-grow: 1; padding: 40px 60px; width: calc(100% - 280px); }

        .page-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 40px; }
        .title-area h1 { font-family: var(--font-fashion); font-size: 48px; font-weight: 400; margin-bottom: 5px; }
        .title-area p { color: var(--text-muted); font-size: 14px; }

        .header-actions { display: flex; gap: 12px; }
        .btn-noir { background: var(--noir); color: #FFF; border: none; padding: 14px 28px; border-radius: 100px; font-weight: 700; font-size: 13px; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: 0.3s; }
        .btn-noir:hover { background: #333; transform: translateY(-2px); }
        .btn-outline { background: #FFF; color: var(--noir); border: 1px solid var(--border); padding: 14px 24px; border-radius: 100px; font-weight: 700; font-size: 13px; cursor: pointer; transition: 0.3s; }

        /* --- Table Styling --- */
        .table-container { background: #FFF; border-radius: 32px; border: 1px solid var(--border); overflow: hidden; box-shadow: 0 4px 25px rgba(0,0,0,0.02); }
        .toolbar { padding: 25px 35px; border-bottom: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; }
        .search-bar { background: #F9F9F9; border-radius: 12px; padding: 10px 18px; display: flex; align-items: center; gap: 12px; width: 320px; }
        .search-bar input { border: none; background: none; outline: none; width: 100%; font-family: var(--font-main); font-weight: 500; font-size: 14px; }

        .boutique-table { width: 100%; border-collapse: collapse; }
        .boutique-table th { padding: 20px 35px; background: #FCFCFC; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; color: #AAA; text-align: left; border-bottom: 1px solid var(--border); }
        .boutique-table td { padding: 20px 35px; border-bottom: 1px solid var(--border); font-size: 14px; vertical-align: middle; transition: 0.2s; }
        .boutique-table tr:hover td { background: #FAFAFA; }

        .prod-info { display: flex; align-items: center; gap: 15px; }
        .prod-img { width: 52px; height: 52px; border-radius: 14px; object-fit: cover; background: var(--cream); }
        .prod-name { font-weight: 700; color: var(--noir); display: block; }
        .prod-id { font-size: 11px; color: #BBB; font-weight: 600; margin-top: 2px; }

        .status-pill { padding: 6px 14px; border-radius: 100px; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; }
        .status-live { background: var(--mint); color: #2D4A43; }
        .status-soldout { background: #FFF0F0; color: #FF4D4D; }
        .status-low { background: #FFF9E6; color: #B28900; }

        .action-btns { display: flex; gap: 8px; color: #BBB; }
        .icon-btn { padding: 8px; border-radius: 10px; cursor: pointer; transition: 0.2s; display: flex; align-items: center; justify-content: center; }
        .icon-btn:hover { background: #F0F0F0; color: var(--noir); }
        .icon-btn.delete:hover { background: #FFF0F0; color: #FF4D4D; }

        /* --- Responsive --- */
        @media (max-width: 1200px) {
          .main-content { padding: 40px; }
          .sidebar { width: 88px; padding: 40px 18px; }
          .main-content { margin-left: 88px; width: calc(100% - 88px); }
          .brand-text, .nav-label { display: none; }
          .sidebar .brand { justify-content: center; margin-left: 0; }
        }

        @media (max-width: 768px) {
          .boutique-table th:nth-child(4), .boutique-table td:nth-child(4) { display: none; }
          .header-actions { display: none; }
          .search-bar { width: 100%; }
        }
      `}</style>

      {/* --- Sidebar --- */}
      <aside className="sidebar">
        <div className="brand">
          TryFit <div className="logo-dot"></div>
        </div>
        
        <nav style={{ flexGrow: 1 }}>
          <Link href="/shop/dashboard" className="nav-link">
            <LayoutDashboard size={20}/> <span className="nav-label">Dashboard</span>
          </Link>
          <Link href="/shop/boutique" className="nav-link active">
            <ShoppingBag size={20}/> <span className="nav-label">Boutique</span>
          </Link>
          <Link href="/shop/collections" className="nav-link">
            <Package size={20}/> <span className="nav-label">Collections</span>
          </Link>
          <Link href="/shop/analytics" className="nav-link">
            <Activity size={20}/> <span className="nav-label">Analytics</span>
          </Link>
          <Link href="/shop/settings" className="nav-link">
            <Settings size={20}/> <span className="nav-label">Settings</span>
          </Link>
        </nav>

        <div style={{ background: 'var(--mint)', padding: '20px', borderRadius: '20px' }}>
          <p style={{ fontSize: '10px', fontWeight: 800, color: '#4A6B63', letterSpacing: '1px' }}>PRO PLAN</p>
          <p style={{ fontSize: '12px', fontWeight: 700, marginTop: '5px' }}>Atelier Unlimited</p>
        </div>
      </aside>

      {/* --- Main Workspace --- */}
      <main className="main-content">
        <header className="page-header">
          <div className="title-area">
            <motion.h1 initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>Boutique Inventory</motion.h1>
            <p>Manage pricing, stock levels, and publication status.</p>
          </div>
          <div className="header-actions">
            <button className="btn-outline"><Globe size={16} style={{marginRight: 8, verticalAlign: 'middle'}}/> Preview Store</button>
            <button className="btn-noir"><Plus size={18}/> New Product</button>
          </div>
        </header>

        <div className="table-container">
          <div className="toolbar">
            <div className="search-bar">
              <Search size={18} color="#AAA" />
              <input 
                placeholder="Search products, SKU or category..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
               <button className="btn-outline" style={{ padding: '10px 20px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                 <Filter size={14} /> Filters
               </button>
               <button className="btn-outline" style={{ padding: '10px 20px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                 Newest <ChevronDown size={14} />
               </button>
            </div>
          </div>

          <table className="boutique-table">
            <thead>
              <tr>
                <th>Product Information</th>
                <th>Category</th>
                <th>Retail Price</th>
                <th>Total Sales</th>
                <th>Stock Status</th>
                <th>Management</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, idx) => (
                <motion.tr 
                  key={p.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <td>
                    <div className="prod-info">
                      <img src={p.img} className="prod-img" alt={p.name} />
                      <div>
                        <span className="prod-name">{p.name}</span>
                        <span className="prod-id">SKU: TF-00{p.id}92</span>
                      </div>
                    </div>
                  </td>
                  <td style={{ fontWeight: 600 }}>{p.category}</td>
                  <td style={{ fontWeight: 800 }}>${p.price.toFixed(2)}</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 700 }}>
                      {p.sales} <span style={{ color: '#14BA6D', fontSize: '10px' }}><ArrowUpRight size={10} /></span>
                    </div>
                  </td>
                  <td>
                    <span className={`status-pill ${
                      p.status === 'Live' ? 'status-live' : 
                      p.status === 'Sold Out' ? 'status-soldout' : 'status-low'
                    }`}>
                      {p.status}
                    </span>
                    <p style={{ fontSize: '11px', color: '#AAA', marginTop: '5px', fontWeight: 600 }}>{p.stock} in atelier</p>
                  </td>
                  <td>
                    <div className="action-btns">
                      <div className="icon-btn"><Eye size={18} /></div>
                      <div className="icon-btn"><Edit3 size={18} /></div>
                      <div className="icon-btn delete"><Trash2 size={18} /></div>
                      <div className="icon-btn"><MoreVertical size={18} /></div>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
          
          {/* Pagination Footer */}
          <div style={{ padding: '20px 35px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#FCFCFC' }}>
            <p style={{ fontSize: '12px', color: '#AAA', fontWeight: 600 }}>Showing 4 of 24 boutique items</p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button className="btn-outline" style={{ padding: '8px 16px' }}>Previous</button>
              <button className="btn-noir" style={{ padding: '8px 16px' }}>Next Page</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}