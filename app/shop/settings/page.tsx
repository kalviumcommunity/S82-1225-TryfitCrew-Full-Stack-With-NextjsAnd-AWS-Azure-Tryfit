"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, ShoppingBag, Package, Activity, Settings, 
  User, Lock, Bell, CreditCard, ShieldCheck, Globe, 
  Camera, Check, ChevronRight, Save, Trash2, Moon, Sun, 
  Mail, Store, Share2
} from 'lucide-react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<'profile' | 'atelier' | 'security' | 'notifications'>('profile');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Animation Variants
  const tabVariants = {
    initial: { opacity: 0, x: 10 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, x: -10, transition: { duration: 0.2 } }
  };

  return (
    <div className="settings-wrapper">
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

        .settings-wrapper { display: flex; min-height: 100vh; }

        /* --- Sidebar --- */
        .sidebar {
          width: 280px; background: #FFF; border-right: 1px solid var(--border);
          padding: 40px 24px; position: fixed; height: 100vh; display: flex; flex-direction: column;
          z-index: 100; transition: width 0.4s ease;
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
        .page-header { margin-bottom: 45px; display: flex; justify-content: space-between; align-items: flex-end; }
        .page-header h1 { font-family: var(--font-fashion); font-size: 48px; font-weight: 400; }

        /* --- Settings Layout --- */
        .settings-container { display: grid; grid-template-columns: 280px 1fr; gap: 60px; }

        /* Sub-navigation (Inside Settings) */
        .settings-nav { display: flex; flex-direction: column; gap: 5px; }
        .s-nav-item { 
          display: flex; align-items: center; gap: 12px; padding: 15px 20px; border-radius: 14px;
          cursor: pointer; font-size: 14px; font-weight: 700; color: #AAA; transition: 0.3s;
        }
        .s-nav-item.active { background: #FFF; color: var(--noir); box-shadow: 0 4px 15px rgba(0,0,0,0.03); border: 1px solid var(--border); }
        .s-nav-item:hover:not(.active) { color: var(--noir); transform: translateX(5px); }

        /* Form Area */
        .settings-card { background: #FFF; border-radius: 40px; border: 1px solid var(--border); padding: 50px; }
        .section-title { font-family: var(--font-fashion); font-size: 28px; margin-bottom: 30px; display: flex; align-items: center; gap: 12px; }

        .profile-upload { display: flex; align-items: center; gap: 30px; margin-bottom: 40px; }
        .avatar-preview { width: 100px; height: 100px; border-radius: 50%; background: var(--cream); border: 2px solid var(--border); overflow: hidden; display: flex; align-items: center; justify-content: center; }
        .btn-upload { background: #F5F5F5; border: none; padding: 10px 20px; border-radius: 10px; font-size: 12px; font-weight: 800; cursor: pointer; display: flex; align-items: center; gap: 8px; }

        .input-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 25px; margin-bottom: 25px; }
        .input-group { margin-bottom: 25px; }
        .input-group label { display: block; font-size: 11px; font-weight: 800; text-transform: uppercase; color: #AAA; margin-bottom: 10px; letter-spacing: 1px; }
        
        .premium-input {
          width: 100%; padding: 18px 24px; border-radius: 16px; border: 1px solid var(--border);
          font-family: var(--font-main); font-weight: 600; font-size: 15px; outline: none; transition: 0.3s;
          background: #FAFAFA;
        }
        .premium-input:focus { border-color: var(--gold); background: #FFF; box-shadow: 0 5px 15px rgba(197, 163, 134, 0.05); }

        .toggle-row { display: flex; justify-content: space-between; align-items: center; padding: 20px 0; border-bottom: 1px solid var(--border); }
        .toggle-text h4 { font-size: 15px; font-weight: 700; margin-bottom: 4px; }
        .toggle-text p { font-size: 13px; color: var(--text-muted); }

        .switch { position: relative; display: inline-block; width: 44px; height: 24px; }
        .switch input { opacity: 0; width: 0; height: 0; }
        .slider { position: absolute; cursor: pointer; inset: 0; background-color: #EEE; transition: .4s; border-radius: 34px; }
        .slider:before { position: absolute; content: ""; height: 18px; width: 18px; left: 3px; bottom: 3px; background-color: white; transition: .4s; border-radius: 50%; }
        input:checked + .slider { background-color: var(--gold); }
        input:checked + .slider:before { transform: translateX(20px); }

        .footer-actions { display: flex; gap: 15px; margin-top: 20px; justify-content: flex-end; }
        .btn-save { background: var(--noir); color: #FFF; border: none; padding: 18px 40px; border-radius: 100px; font-weight: 800; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; cursor: pointer; display: flex; align-items: center; gap: 10px; transition: 0.3s; }
        .btn-save:hover { background: var(--gold); transform: translateY(-2px); }

        .danger-zone { margin-top: 50px; padding-top: 40px; border-top: 1px dashed #FF4D4D; }
        .btn-danger { background: transparent; color: #FF4D4D; border: 1px solid #FF4D4D; padding: 15px 30px; border-radius: 100px; font-weight: 800; font-size: 12px; text-transform: uppercase; cursor: pointer; }

        @media (max-width: 1200px) {
          .sidebar { width: 88px; }
          .main-content { margin-left: 88px; width: calc(100% - 88px); padding: 40px; }
          .settings-container { grid-template-columns: 1fr; }
          .settings-nav { flex-direction: row; overflow-x: auto; padding-bottom: 10px; }
          .nav-label, .brand-text { display: none; }
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
          <Link href="/shop/analytics" className="nav-link">
            <Activity size={20}/> <span className="nav-label">Analytics</span>
          </Link>
          <Link href="/shop/settings" className="nav-link active">
            <Settings size={20}/> <span className="nav-label">Settings</span>
          </Link>
        </nav>
      </aside>

      {/* --- Main Workspace --- */}
      <main className="main-content">
        <header className="page-header">
          <div className="title-area">
            <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>Atelier Settings</motion.h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginTop: '8px' }}>Configure your profile and store preferences.</p>
          </div>
        </header>

        <div className="settings-container">
          {/* Sub-Navigation */}
          <div className="settings-nav">
            <div className={`s-nav-item ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => setActiveTab('profile')}>
              <User size={18} /> My Profile
            </div>
            <div className={`s-nav-item ${activeTab === 'atelier' ? 'active' : ''}`} onClick={() => setActiveTab('atelier')}>
              <Store size={18} /> Boutique Config
            </div>
            <div className={`s-nav-item ${activeTab === 'security' ? 'active' : ''}`} onClick={() => setActiveTab('security')}>
              <Lock size={18} /> Security
            </div>
            <div className={`s-nav-item ${activeTab === 'notifications' ? 'active' : ''}`} onClick={() => setActiveTab('notifications')}>
              <Bell size={18} /> Notifications
            </div>
          </div>

          {/* Form Content */}
          <div className="settings-card">
            <AnimatePresence mode="wait">
              {activeTab === 'profile' && (
                <motion.div key="profile" variants={tabVariants} initial="initial" animate="animate" exit="exit">
                  <h3 className="section-title">Personal Profile</h3>
                  <div className="profile-upload">
                    <div className="avatar-preview">
                      <User size={40} color="#DDD" />
                    </div>
                    <div>
                      <button className="btn-upload"><Camera size={16}/> Update Portrait</button>
                      <p style={{ fontSize: '12px', color: '#AAA', marginTop: '10px' }}>JPG, PNG or WEBP. Max 2MB.</p>
                    </div>
                  </div>

                  <div className="input-grid">
                    <div className="input-group">
                      <label>First Name</label>
                      <input className="premium-input" defaultValue="Khandoker" />
                    </div>
                    <div className="input-group">
                      <label>Last Name</label>
                      <input className="premium-input" defaultValue="Rezvi" />
                    </div>
                  </div>

                  <div className="input-group">
                    <label>Email Address</label>
                    <input className="premium-input" defaultValue="rezvi@tryfit.atelier" />
                  </div>

                  <div className="input-group">
                    <label>Professional Bio</label>
                    <textarea className="premium-input" style={{ minHeight: '100px', resize: 'none' }} placeholder="Curator and Shopkeeper at TryFit..." />
                  </div>
                </motion.div>
              )}

              {activeTab === 'atelier' && (
                <motion.div key="atelier" variants={tabVariants} initial="initial" animate="animate" exit="exit">
                  <h3 className="section-title">Boutique Configuration</h3>
                  <div className="input-group">
                    <label>Boutique Display Name</label>
                    <input className="premium-input" defaultValue="TryFit Premier Studio" />
                  </div>

                  <div className="input-grid">
                    <div className="input-group">
                      <label>Store Currency</label>
                      <select className="premium-input" style={{ appearance: 'none' }}>
                        <option>USD ($)</option>
                        <option>EUR (€)</option>
                        <option>GBP (£)</option>
                      </select>
                    </div>
                    <div className="input-group">
                      <label>Region</label>
                      <input className="premium-input" defaultValue="Global / Europe" />
                    </div>
                  </div>

                  <div className="toggle-row">
                    <div className="toggle-text">
                      <h4>Boutique Visibility</h4>
                      <p>Turn off to put your store in "Maintenance Mode".</p>
                    </div>
                    <label className="switch">
                      <input type="checkbox" defaultChecked />
                      <span className="slider"></span>
                    </label>
                  </div>

                  <div className="toggle-row">
                    <div className="toggle-text">
                      <h4>Style DNA Engine</h4>
                      <p>Enable AI size recommendations for customers.</p>
                    </div>
                    <label className="switch">
                      <input type="checkbox" defaultChecked />
                      <span className="slider"></span>
                    </label>
                  </div>
                </motion.div>
              )}

              {activeTab === 'security' && (
                <motion.div key="security" variants={tabVariants} initial="initial" animate="animate" exit="exit">
                  <h3 className="section-title">Account Security</h3>
                  <div className="input-group">
                    <label>Current Password</label>
                    <input className="premium-input" type="password" placeholder="••••••••" />
                  </div>
                  <div className="input-grid">
                    <div className="input-group">
                      <label>New Password</label>
                      <input className="premium-input" type="password" placeholder="Min. 8 chars" />
                    </div>
                    <div className="input-group">
                      <label>Confirm Password</label>
                      <input className="premium-input" type="password" placeholder="••••••••" />
                    </div>
                  </div>

                  <div className="toggle-row" style={{ borderBottom: 'none' }}>
                    <div className="toggle-text">
                      <h4>Two-Factor Authentication</h4>
                      <p>Secure your atelier with an additional login step.</p>
                    </div>
                    <button className="btn-upload" style={{ background: 'var(--noir)', color: '#FFF' }}>Setup 2FA</button>
                  </div>

                  <div className="danger-zone">
                    <h4 style={{ color: '#FF4D4D', marginBottom: '10px' }}>Deactivate Atelier</h4>
                    <p style={{ fontSize: '13px', color: '#AAA', marginBottom: '20px' }}>This will permanently remove your boutique from the TryFit network.</p>
                    <button className="btn-danger"><Trash2 size={14} style={{marginRight: 8}}/> Terminate Account</button>
                  </div>
                </motion.div>
              )}

              {activeTab === 'notifications' && (
                <motion.div key="notifications" variants={tabVariants} initial="initial" animate="animate" exit="exit">
                  <h3 className="section-title">Notification DNA</h3>
                  {[
                    { t: "Sales Alerts", d: "Get notified every time a new order is placed." },
                    { t: "Stock Alerts", d: "Receive warnings when inventory drops below 5 units." },
                    { t: "Member Activity", d: "Alert when a member completes a new Style Quiz." },
                    { t: "Newsletter", d: "Monthly insights from TryFit Headquarters." }
                  ].map((item, i) => (
                    <div className="toggle-row" key={i}>
                      <div className="toggle-text">
                        <h4>{item.t}</h4>
                        <p>{item.d}</p>
                      </div>
                      <label className="switch">
                        <input type="checkbox" defaultChecked={i < 2} />
                        <span className="slider"></span>
                      </label>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Save Button Container */}
            <div className="footer-actions">
               <button className="btn-save">
                 Save Atelier DNA <Save size={18}/>
               </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}