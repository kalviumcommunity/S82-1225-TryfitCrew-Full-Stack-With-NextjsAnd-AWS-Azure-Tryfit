"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, 
  Heart, 
  Settings, 
  ChevronRight, 
  CreditCard,
  MapPin,
  Package,
  Zap,
  Gift,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  Plus,
  Trash2,
  Bell,
  Lock,
  User,
  Edit2,
  Share2,
  Camera
} from 'lucide-react';

export default function ProMaxFashionProfile() {
  const [activeTab, setActiveTab] = useState('Overview');

  const styleDNA = ["Minimalist", "Monochrome", "Sustainable Silk", "Avant-Garde", "Tailored"];
  
  const menuItems = [
    { name: 'Overview', icon: <Zap size={18} /> },
    { name: 'My Orders', icon: <Package size={18} /> },
    { name: 'Wishlist', icon: <Heart size={18} /> },
    { name: 'Payments', icon: <CreditCard size={18} /> },
    { name: 'Addresses', icon: <MapPin size={18} /> },
    { name: 'Settings', icon: <Settings size={18} /> },
  ];

  // --- Sub-Component: Render Dynamic Content ---
  const renderContent = () => {
    switch (activeTab) {
      case 'My Orders':
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="content-pane">
            <h3 className="pane-title">Order History</h3>
            <div className="order-list">
              {[1, 2].map((i) => (
                <div key={i} className="glass-card item-row">
                  <div className="item-thumb" style={{ background: '#eee', width: 60, height: 80, borderRadius: 8 }}></div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontWeight: 700 }}>#{10293 + i} - Silk Evening Gown</p>
                    <p style={{ fontSize: 12, color: '#666' }}>Ordered on Dec 12, 2025 • <span style={{ color: '#4ADE80' }}>In Transit</span></p>
                  </div>
                  <button className="text-btn">Track Order</button>
                </div>
              ))}
            </div>
          </motion.div>
        );

      case 'Wishlist':
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="content-pane">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 30 }}>
              <h3 className="pane-title">Your Curated Selection</h3>
              <p style={{ fontSize: 14, color: 'var(--gold)' }}>48 Items</p>
            </div>
            <div className="action-grid">
              {[1, 2, 3].map((i) => (
                <div key={i} className="glass-card wishlist-card">
                  <div className="card-image-placeholder" style={{ height: 200, background: '#f5f5f5', borderRadius: 20, marginBottom: 15 }}></div>
                  <p style={{ fontWeight: 700 }}>Velvet Blazer</p>
                  <p style={{ fontSize: 14, fontWeight: 800 }}>$450.00</p>
                  <button className="add-cart-btn">Move to Bag</button>
                </div>
              ))}
            </div>
          </motion.div>
        );

      case 'Payments':
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="content-pane">
            <h3 className="pane-title">Wallet & Methods</h3>
            <div className="glass-card card-display">
               <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <CreditCard size={32} />
                  <p style={{ fontWeight: 800 }}>VISA</p>
               </div>
               <p style={{ marginTop: 40, fontSize: 18, letterSpacing: 2 }}>**** **** **** 8829</p>
               <p style={{ marginTop: 10, opacity: 0.6, fontSize: 12 }}>SOPHIA LAURENT</p>
            </div>
            <button className="secondary-btn"><Plus size={16} /> Add New Method</button>
          </motion.div>
        );

      case 'Addresses':
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="content-pane">
            <h3 className="pane-title">Saved Locations</h3>
            <div className="glass-card address-row">
                <MapPin size={20} color="var(--gold)" />
                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: 700 }}>Primary Residence (Paris)</p>
                  <p style={{ fontSize: 13, color: '#666' }}>24 Rue du Faubourg Saint-Honoré, 75008 Paris, France</p>
                </div>
                <Trash2 size={18} color="#ff4444" cursor="pointer" />
            </div>
            <button className="secondary-btn"><Plus size={16} /> New Address</button>
          </motion.div>
        );

      case 'Settings':
        return (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="content-pane">
            <h3 className="pane-title">Account Security</h3>
            <div className="settings-list">
               <div className="setting-row">
                  <div className="icon-box"><Bell size={18}/></div>
                  <p>Push Notifications</p>
                  <div className="toggle-active"></div>
               </div>
               <div className="setting-row">
                  <div className="icon-box"><Lock size={18}/></div>
                  <p>Two-Factor Authentication</p>
                  <ChevronRight size={18} />
               </div>
               <div className="setting-row">
                  <div className="icon-box"><User size={18}/></div>
                  <p>Deactivate Membership</p>
                  <p style={{ color: 'red', fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>Manage</p>
               </div>
            </div>
          </motion.div>
        );

      default:
        return (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="loyalty-card">
              <div className="progress-header">
                <span>Tier Progress: Gold to Platinum</span>
                <span style={{ color: 'var(--gold)' }}>1,250 points to go</span>
              </div>
              <div className="progress-bar-bg">
                <motion.div initial={{ width: 0 }} animate={{ width: '75%' }} transition={{ duration: 1.5 }} className="progress-fill"></motion.div>
              </div>
            </div>

            <div className="action-grid">
              <div className="glass-card">
                <div className="card-icon"><ShoppingBag size={24} /></div>
                <h3>Recent Activity</h3>
                <p>Your "Silk Evening Gown" order has left the Lyon TryFit.</p>
                <div className="card-footer">View Track <ChevronRight size={14} /></div>
              </div>
              <div className="glass-card">
                <div className="card-icon"><Gift size={24} /></div>
                <h3>Member Perks</h3>
                <p>Exclusive 20% Birthday Discount is now active.</p>
                <div className="card-footer">Claim Gift <ChevronRight size={14} /></div>
              </div>
            </div>

            <div className="dna-section">
              <h3 className="pane-title" style={{ fontSize: 32 }}>Style DNA</h3>
              <div className="tag-wrap">
                {styleDNA.map(tag => (
                  <motion.span whileHover={{ scale: 1.05 }} key={tag} className="dna-tag">{tag}</motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div className="full-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Italiana&display=swap');

        :root {
          --noir: #0A0A0A;
          --cream: #FDFCFB;
          --gold: #C5A386;
          --font-main: 'Plus Jakarta Sans', sans-serif;
          --font-serif: 'Italiana', serif;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background-color: var(--cream); font-family: var(--font-main); color: var(--noir); }

        /* --- Hero Section Enhanced --- */
        .profile-hero { 
          position: relative;
          height: 50vh; 
          background: linear-gradient(to right, rgba(0,0,0,0.4), rgba(0,0,0,0.1)), url('https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop');
          background-size: cover; 
          background-position: center; 
          background-attachment: fixed; /* Parallax effect */
          display: flex; 
          flex-direction: column;
          justify-content: flex-end; 
          color: white;
          overflow: hidden;
        }

        /* Gradient fade at bottom for smooth transition */
        .profile-hero::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 150px;
          background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
          pointer-events: none;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          padding: 0 60px 40px; /* Padding inside the hero */
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
        }

        .user-block { display: flex; align-items: flex-end; gap: 30px; }

        .avatar-container {
          position: relative;
          width: 140px; 
          height: 140px;
        }
        .avatar-img { 
          width: 100%; 
          height: 100%; 
          border-radius: 50%; 
          border: 4px solid white; 
          object-fit: cover; 
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        .edit-avatar-btn {
          position: absolute;
          bottom: 5px; right: 5px;
          background: var(--gold);
          color: white;
          width: 32px; height: 32px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          border: 2px solid white;
          cursor: pointer;
          transition: transform 0.2s;
        }
        .edit-avatar-btn:hover { transform: scale(1.1); }

        .user-info h1 { 
          font-family: var(--font-serif); 
          font-size: 52px; 
          line-height: 1;
          margin-bottom: 8px;
          text-shadow: 0 2px 10px rgba(0,0,0,0.3);
        }
        .meta-info {
          display: flex;
          align-items: center;
          gap: 15px;
          font-size: 13px;
          font-weight: 500;
          opacity: 0.9;
        }
        .tier-badge {
          background: rgba(255,255,255,0.2);
          backdrop-filter: blur(10px);
          padding: 4px 12px;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.4);
          font-weight: 700;
          text-transform: uppercase;
          font-size: 10px;
          letter-spacing: 1px;
        }

        /* Hero Stats & Actions Right Side */
        .hero-stats {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .stat-glass {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(12px);
          padding: 15px 25px;
          border-radius: 16px;
          border: 1px solid rgba(255,255,255,0.2);
          text-align: center;
          min-width: 100px;
          transition: transform 0.3s;
        }
        .stat-glass:hover { transform: translateY(-3px); background: rgba(255,255,255,0.25); }
        .stat-num { display: block; font-size: 20px; font-weight: 800; }
        .stat-label { font-size: 10px; text-transform: uppercase; letter-spacing: 1px; opacity: 0.8; }

        .action-btn-hero {
          width: 48px; height: 48px;
          background: white;
          color: var(--noir);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: 0.2s;
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
        .action-btn-hero:hover { transform: scale(1.1); }

        /* --- Main Layout --- */
        .dashboard-main { display: grid; grid-template-columns: 300px 1fr; min-height: 60vh; max-width: 1400px; margin: 0 auto; }
        .sidebar { background: white; padding: 40px; border-right: 1px solid #eee; }
        .content-area { padding: 60px; }

        /* --- Sidebar UI --- */
        .nav-item { display: flex; align-items: center; gap: 15px; padding: 16px 20px; border-radius: 12px; cursor: pointer; font-weight: 600; color: #666; transition: 0.3s; margin-bottom: 5px; }
        .nav-item:hover { background: #f9f9f9; color: var(--noir); }
        .nav-item.active { background: var(--noir); color: white; box-shadow: 0 8px 20px rgba(0,0,0,0.15); }

        /* --- Pane UI --- */
        .pane-title { font-family: var(--font-serif); font-size: 38px; margin-bottom: 30px; color: var(--noir); }
        .glass-card { background: white; padding: 30px; border-radius: 20px; border: 1px solid #eee; margin-bottom: 25px; transition: 0.3s; position: relative; overflow: hidden; }
        .glass-card:hover { transform: translateY(-5px); box-shadow: 0 15px 40px rgba(0,0,0,0.06); border-color: transparent; }

        .item-row, .address-row, .setting-row { display: flex; align-items: center; gap: 20px; }
        .setting-row { padding: 15px 0; border-bottom: 1px solid #f9f9f9; }

        .card-display { background: linear-gradient(135deg, #1a1a1a, #333); color: white; height: 220px; width: 380px; display: flex; flex-direction: column; justify-content: space-between; border: none; }
        .secondary-btn { background: var(--cream); border: 1px solid #ddd; padding: 12px 25px; border-radius: 12px; font-weight: 700; cursor: pointer; display: flex; align-items: center; gap: 8px; font-size: 13px; }
        .toggle-active { width: 40px; height: 20px; background: var(--gold); border-radius: 20px; position: relative; margin-left: auto; cursor: pointer; }
        .toggle-active::after { content: ''; width: 16px; height: 16px; background: white; border-radius: 50%; position: absolute; right: 2px; top: 2px; }

        /* --- Global Elements --- */
        .loyalty-card { background: white; padding: 35px; border-radius: 20px; border: 1px solid #eee; margin-bottom: 40px; position: relative; }
        .progress-header { display: flex; justify-content: space-between; font-weight: 700; font-size: 14px; margin-bottom: 15px; }
        .progress-bar-bg { height: 8px; background: #f0f0f0; border-radius: 10px; overflow: hidden; }
        .progress-fill { height: 100%; background: var(--gold); border-radius: 10px; }
        
        .action-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 25px; }
        .card-icon { background: #f8f8f8; width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 20px; color: var(--gold); }
        .card-footer { margin-top: 20px; font-size: 12px; font-weight: 700; text-transform: uppercase; display: flex; align-items: center; gap: 5px; color: var(--gold); cursor: pointer; }
        
        .add-cart-btn { width: 100%; background: var(--noir); color: white; border: none; padding: 12px; border-radius: 12px; margin-top: 20px; cursor: pointer; font-weight: 700; transition: 0.2s; }
        .add-cart-btn:hover { background: #333; }
        
        .tag-wrap { display: flex; flex-wrap: wrap; gap: 12px; }
        .dna-tag { padding: 10px 24px; border-radius: 50px; background: white; border: 1px solid #eee; font-size: 13px; font-weight: 600; cursor: pointer; color: #555; transition: 0.2s; }
        .dna-tag:hover { background: var(--gold); color: white; border-color: var(--gold); }

        @media (max-width: 1024px) {
          .hero-content { flex-direction: column; align-items: flex-start; gap: 20px; padding: 30px; }
          .hero-stats { width: 100%; justify-content: flex-start; margin-top: 20px; }
          .dashboard-main { grid-template-columns: 1fr; }
          .sidebar { display: none; /* In real app, make it a hamburger menu */ }
        }
      `}</style>

      {/* --- ENHANCED PROFILE HERO --- */}
      <section className="profile-hero">
        <div className="hero-content">
          
          <div className="user-block">
            {/* Avatar */}
            <div className="avatar-container">
              <img 
                src="https://images.unsplash.com/photo-1596783074918-c84cb06531ca?q=80&w=1000" 
                className="avatar-img" 
                alt="Sophia" 
              />
              <div className="edit-avatar-btn">
                <Camera size={14} />
              </div>
            </div>

            {/* Info */}
            <div className="user-info">
              <div style={{ display: 'flex', gap: '10px', marginBottom: '8px' }}>
                <span className="tier-badge">Gold Member</span>
                <span className="tier-badge" style={{ background: 'transparent' }}>Est. 2023</span>
              </div>
              <h1>Sophia Laurent</h1>
              <div className="meta-info">
                <span>@sophia_style</span>
                <span>•</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <MapPin size={14} /> Paris, France
                </span>
              </div>
            </div>
          </div>

          {/* Quick Stats & Actions */}
          <div className="hero-stats">
            <div className="stat-glass">
              <span className="stat-num">24</span>
              <span className="stat-label">Orders</span>
            </div>
            <div className="stat-glass">
              <span className="stat-num">142</span>
              <span className="stat-label">Wishlist</span>
            </div>
            <div className="stat-glass">
              <span className="stat-num">1.2k</span>
              <span className="stat-label">Points</span>
            </div>
            
            <div style={{ display: 'flex', gap: '10px', marginLeft: '10px' }}>
              <div className="action-btn-hero"><Edit2 size={18} /></div>
              <div className="action-btn-hero"><Share2 size={18} /></div>
            </div>
          </div>

        </div>
      </section>

      {/* --- DASHBOARD CONTENT --- */}
      <div className="dashboard-main">
        <aside className="sidebar">
          {menuItems.map(item => (
            <div 
              key={item.name} 
              className={`nav-item ${activeTab === item.name ? 'active' : ''}`}
              onClick={() => setActiveTab(item.name)}
            >
              {item.icon} {item.name}
            </div>
          ))}
          <div style={{ marginTop: 40, padding: 25, background: '#FFF9F2', borderRadius: 20, border: '1px solid #FFE4C4' }}>
            <p style={{ fontSize: 11, fontWeight: 900, color: 'var(--gold)', marginBottom: 8, letterSpacing: 1 }}>MEMBER EXCLUSIVE</p>
            <p style={{ fontSize: 13, lineHeight: 1.5, marginBottom: 15, fontWeight: 500 }}>Schedule your seasonal 1-on-1 fashion consultation.</p>
            <button style={{ width: '100%', background: 'black', color: 'white', border: 'none', padding: '12px', borderRadius: 10, fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>Book TryFit Session</button>
          </div>
        </aside>

        <section className="content-area">
          <AnimatePresence mode="wait">
            {renderContent()}
          </AnimatePresence>
        </section>
      </div>

      {/* --- FOOTER --- */}
      <footer style={{ padding: 60, borderTop: '1px solid #eee', background: 'white', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: 24, marginBottom: 20 }}>TryFit Studio</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 30, marginBottom: 30 }}>
            <Instagram size={20} cursor="pointer" /><Twitter size={20} cursor="pointer" /><Facebook size={20} cursor="pointer" /><Linkedin size={20} cursor="pointer" />
        </div>
        <p style={{ fontSize: 11, color: '#999', textTransform: 'uppercase', letterSpacing: 2 }}>© 2025 TRYFIT STUDIO INTERNATIONALE</p>
      </footer>
    </div>
  );
}