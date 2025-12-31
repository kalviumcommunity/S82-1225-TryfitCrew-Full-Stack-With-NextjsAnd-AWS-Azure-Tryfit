"use client";



import React, { useState } from 'react';

import Link from 'next/link';

import { motion, AnimatePresence } from 'framer-motion';

import { 

  LayoutDashboard, ShoppingBag, Package, Database, Users, 

  Settings, Search, Bell, Plus, TrendingUp, MoreHorizontal, 

  Star, ArrowUpRight, Activity, Zap, Globe, Target, X, 

  Upload, Sparkles, Camera, Check, Box, Sliders, Scissors, Layers, ArrowRight, ChevronRight

} from 'lucide-react';



export default function TryFitProDashboard() {

  // State Management

  const [activeKpi, setActiveKpi] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formStep, setFormStep] = useState<'basic' | 'advanced'>('basic');

  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  const [category, setCategory] = useState('Dress');



  const stats = [

    { title: 'Gross Revenue', value: '$124,592', growth: '+14.2%', color: '#C5A386' },

    { title: 'Active Members', value: '12,843', growth: '+8.4%', color: '#14BA6D' },

    { title: 'Style Quiz Comp.', value: '89.3%', growth: '+12.1%', color: '#00CFE8' },

    { title: 'Return Rate', value: '2.4%', growth: '-0.8%', color: '#FF6AB2' },

  ];



  const availableSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];



  const toggleSize = (size: string) => {

    setSelectedSizes(prev => 

      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]

    );

  };



  // Animation Variants

  const modalOverlay = {

    hidden: { opacity: 0 },

    visible: { opacity: 1 }

  };



  const modalContent = {

    hidden: { opacity: 0, scale: 0.98, y: 20 },

    visible: { 

      opacity: 1, scale: 1, y: 0,

      transition: { type: "spring" as const, damping: 30, stiffness: 400 } 

    }

  };



  const stepVariants = {

    initial: { opacity: 0, x: 10 },

    animate: { opacity: 1, x: 0, transition: { duration: 0.4 } },

    exit: { opacity: 0, x: -10, transition: { duration: 0.3 } }

  };



  return (

    <div className="dashboard-wrapper">

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

        body { background-color: var(--cream); font-family: var(--font-main); color: var(--noir); overflow-x: hidden; }



        .dashboard-wrapper { display: flex; min-height: 100vh; }



        /* --- Sidebar & Main Layout (Same as previous for consistency) --- */

        .sidebar { width: 280px; background: #FFF; border-right: 1px solid var(--border); padding: 40px 24px; position: fixed; height: 100vh; z-index: 1000; }

        .brand { font-family: var(--font-fashion); font-size: 28px; letter-spacing: 2px; margin-bottom: 50px; display: flex; align-items: center; gap: 12px; }

        .logo-dot { width: 8px; height: 8px; background: var(--gold); border-radius: 50%; }

        .nav-link { display: flex; align-items: center; gap: 14px; padding: 16px 20px; border-radius: 16px; color: var(--text-muted); text-decoration: none; font-size: 14px; font-weight: 600; margin-bottom: 6px; transition: 0.3s; }

        .nav-link.active { background: var(--noir); color: #FFF; box-shadow: 0 15px 30px rgba(0,0,0,0.1); }

        .main-content { margin-left: 280px; flex-grow: 1; padding: 60px; }

        .panel { background: #FFF; padding: 35px; border-radius: 40px; border: 1px solid var(--border); position: relative; }



        /* --- ENHANCED TryFit POPUP UI --- */

        .modal-overlay {

          position: fixed; inset: 0; background: rgba(0, 0, 0, 0.4);

          backdrop-filter: blur(15px); z-index: 10000; display: flex;

          align-items: center; justify-content: center; padding: 20px;

        }

        .TryFit-portal {

          background: #FFF; width: 100%; max-width: 1200px; height: 85vh;

          border-radius: 40px; overflow: hidden; display: grid; grid-template-columns: 38% 62%;

          box-shadow: 0 40px 100px rgba(0,0,0,0.25);

        }



        /* Portal Visual Side */

        .portal-visual { 

          background: var(--noir); color: #FFF; padding: 60px; display: flex; flex-direction: column;

          justify-content: space-between; position: relative; overflow: hidden; border-right: 1px solid var(--border);

        }

        .portal-visual::after {

          content: ''; position: absolute; inset: 0; opacity: 0.3;

          background: url('https://images.unsplash.com/photo-1490481651871-ab68624d5517?q=80&w=1200&auto=format&fit=crop');

          background-size: cover; background-position: center; z-index: 1;

        }

        .portal-visual-content { position: relative; z-index: 2; }

        .portal-visual-content h2 { font-family: var(--font-fashion); font-size: 52px; line-height: 1.1; margin-bottom: 20px; }



        /* Portal Form Side */

        .portal-form { padding: 60px 80px; overflow-y: auto; background: white; position: relative; }

        

        .progress-container { display: flex; align-items: center; gap: 15px; margin-bottom: 45px; }

        .progress-step { font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; color: #CCC; transition: 0.3s; }

        .progress-step.active { color: var(--gold); }

        .progress-line { flex: 1; height: 1px; background: #EEE; position: relative; }

        .progress-line-fill { position: absolute; left: 0; top: 0; height: 100%; background: var(--gold); transition: 0.5s ease; }



        .input-group { margin-bottom: 30px; }

        .input-label { display: block; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; color: #999; margin-bottom: 12px; }

        

        .premium-field {

          width: 100%; padding: 18px 24px; border-radius: 14px; border: 1px solid #EEE;

          font-family: var(--font-main); font-weight: 600; font-size: 15px; outline: none; transition: 0.3s;

          background: #FAFAFA;

        }

        .premium-field:focus { border-color: var(--gold); background: #FFF; box-shadow: 0 5px 15px rgba(197, 163, 134, 0.05); }



        .size-selector { display: flex; gap: 10px; flex-wrap: wrap; }

        .size-box {

          width: 54px; height: 54px; display: flex; align-items: center; justify-content: center;

          border-radius: 12px; border: 1px solid #EEE; font-size: 13px; font-weight: 700;

          cursor: pointer; transition: 0.2s;

        }

        .size-box.active { background: var(--noir); color: #FFF; border-color: var(--noir); }



        .upload-card {

          border: 2px dashed #EEE; border-radius: 24px; padding: 40px; text-align: center;

          cursor: pointer; transition: 0.3s; background: #FCFCFC;

        }

        .upload-card:hover { border-color: var(--gold); background: var(--cream); }



        .action-row { display: flex; gap: 20px; margin-top: 20px; }

        .btn-TryFit-primary {

          flex: 1; padding: 22px; background: var(--noir); color: #FFF; border: none;

          border-radius: 100px; font-weight: 800; font-size: 13px; text-transform: uppercase;

          letter-spacing: 2px; cursor: pointer; display: flex; align-items: center; 

          justify-content: center; gap: 12px; transition: 0.3s;

        }

        .btn-TryFit-primary:hover { background: var(--gold); transform: translateY(-2px); }

        

        .btn-TryFit-ghost {

          padding: 22px 35px; background: transparent; color: #AAA; border: 1px solid #EEE;

          border-radius: 100px; font-weight: 800; font-size: 13px; text-transform: uppercase;

          cursor: pointer; transition: 0.3s;

        }



        .fab-add {

          position: fixed; bottom: 50px; right: 50px; width: 68px; height: 68px;

          background: var(--noir); color: #FFF; border-radius: 50%;

          display: flex; align-items: center; justify-content: center;

          box-shadow: 0 20px 40px rgba(0,0,0,0.25); border: none; cursor: pointer; z-index: 2000;

        }

      `}</style>



      {/* --- Sidebar (Dashboard) --- */}

      <aside className="sidebar">

        <div className="brand">TryFit <div className="logo-dot"></div></div>

        <nav style={{ flexGrow: 1 }}>

          <Link href="/shop/dashboard" className="nav-link active"><LayoutDashboard size={18}/> Dashboard</Link>

          <Link href="/shop/boutique" className="nav-link"><ShoppingBag size={18}/> Boutique</Link>

          <Link href="/shop/collections" className="nav-link"><Package size={18}/> Collections</Link>

          <Link href="/shop/analytics" className="nav-link"><Activity size={18}/> Analytics</Link>
        </nav>

      </aside>



      {/* --- Main Dashboard Area --- */}

      <main className="main-content">

        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '60px' }}>

          <div>

            <h1 style={{ fontFamily: 'var(--font-fashion)', fontSize: '42px', fontWeight: 400 }}>TryFit Control</h1>

            <p style={{ color: 'var(--text-muted)', fontSize: '15px', marginTop: '8px' }}>Professional Shopkeeper Portal</p>

          </div>

          <motion.button 

            whileHover={{ scale: 1.02 }}

            onClick={() => setIsModalOpen(true)}

            className="nav-link active" 

            style={{ padding: '16px 32px', border: 'none', cursor: 'pointer', margin: 0 }}

          >

            <Plus size={18}/> New Drop

          </motion.button>

        </header>



        {/* Analytics Summary */}

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px' }}>

          {stats.map((stat, i) => (

            <div key={i} className="panel" style={{ padding: '30px', borderRadius: '32px' }}>

              <p style={{ fontSize: '11px', fontWeight: 800, color: '#AAA', textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '1px' }}>{stat.title}</p>

              <p style={{ fontSize: '32px', fontWeight: 800 }}>{stat.value}</p>

            </div>

          ))}

        </div>

      </main>



      {/* --- TryFit CURATIONS POPUP --- */}

      <AnimatePresence>

        {isModalOpen && (

          <motion.div className="modal-overlay" initial="hidden" animate="visible" exit="hidden" variants={modalOverlay}>

            <motion.div className="TryFit-portal" variants={modalContent}>

              

              {/* Left Column: Editorial Side */}

              <div className="portal-visual">

                <div className="portal-visual-content">

                  <Sparkles color="var(--gold)" size={28} style={{ marginBottom: 20 }} />

                  <h2>The TryFit <br/> Curations</h2>

                  <p style={{ marginTop: '20px', opacity: 0.7, fontSize: '14px', maxWidth: '300px', lineHeight: 1.7, fontWeight: 500 }}>

                    {formStep === 'basic' 

                      ? "Define the silhouette. Every product posted under the TryFit brand defines our commitment to excellence."

                      : "Refine the DNA. Advanced specifications ensure our members receive the perfect fit and fabric intelligence."}

                  </p>

                </div>

                

                <div style={{ zIndex: 2, background: 'rgba(255,255,255,0.08)', padding: '32px', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)' }}>

                   <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>

                      <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                         <Check color="white" size={24} />

                      </div>

                      <div>

                        <p style={{ fontWeight: 800, fontSize: '15px' }}>Quality Assurance</p>

                        <p style={{ fontSize: '12px', opacity: 0.6 }}>Verified for Boutique release</p>

                      </div>

                   </div>

                </div>

              </div>



              {/* Right Column: Form Side */}

              <div className="portal-form">

                <button 

                  className="close-btn" 

                  onClick={() => {setIsModalOpen(false); setFormStep('basic');}} 

                  style={{ position: 'absolute', top: 35, right: 35, border: 'none', background: '#F8F8F8', padding: 12, borderRadius: '50%', cursor: 'pointer', transition: '0.3s' }}

                >

                  <X size={20} color="#000" />

                </button>

                

                {/* Progress Bar */}

                <div className="progress-container">

                  <span className={`progress-step ${formStep === 'basic' ? 'active' : ''}`}>01 Basics</span>

                  <div className="progress-line">

                    <div className="progress-line-fill" style={{ width: formStep === 'basic' ? '30%' : '100%' }}></div>

                  </div>

                  <span className={`progress-step ${formStep === 'advanced' ? 'active' : ''}`}>02 Sartorial</span>

                </div>



                <AnimatePresence mode="wait">

                  {formStep === 'basic' ? (

                    <motion.div key="basic" variants={stepVariants} initial="initial" animate="animate" exit="exit">

                      <div className="input-group">

                        <label className="input-label">Release Category</label>

                        <select className="premium-field" value={category} onChange={(e) => setCategory(e.target.value)} style={{ appearance: 'none' }}>

                          <option>Dress</option>

                          <option>Shirt</option>

                          <option>Activewear</option>

                          <option>Outerwear</option>

                        </select>

                      </div>



                      <div className="input-group">

                        <label className="input-label">Product Naming</label>

                        <input className="premium-field" placeholder="e.g. Silk Flow Summer Maxi" />

                      </div>



                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>

                        <div className="input-group">

                          <label className="input-label">Market Value ($)</label>

                          <input className="premium-field" type="number" placeholder="249.00" />

                        </div>

                        <div className="input-group">

                          <label className="input-label">TryFit Stock</label>

                          <input className="premium-field" type="number" placeholder="12" />

                        </div>

                      </div>



                      <div className="input-group">

                        <label className="input-label">Size Availability</label>

                        <div className="size-selector">

                          {availableSizes.map(size => (

                            <div 

                              key={size} 

                              className={`size-box ${selectedSizes.includes(size) ? 'active' : ''}`} 

                              onClick={() => toggleSize(size)}

                            >

                              {size}

                            </div>

                          ))}

                        </div>

                      </div>



                      <button className="btn-TryFit-primary" onClick={() => setFormStep('advanced')}>

                        Define Advanced Specs <ArrowRight size={18}/>

                      </button>

                    </motion.div>

                  ) : (

                    <motion.div key="advanced" variants={stepVariants} initial="initial" animate="animate" exit="exit">

                      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '25px' }}>

                        <div className="input-group">

                          <label className="input-label">Primary Fabric / Material</label>

                          <input className="premium-field" placeholder="e.g. 100% Italian Mulberry Silk" />

                        </div>

                        <div className="input-group">

                          <label className="input-label">Fabric Weight</label>

                          <select className="premium-field">

                            <option>Lightweight</option>

                            <option>Midweight</option>

                            <option>Heavyweight</option>

                          </select>

                        </div>

                      </div>



                      <div className="input-group">

                         <label className="input-label">Silhouette / Fit Profile</label>

                         <select className="premium-field">

                            <option>Tailored / Slim</option>

                            <option>Relaxed / Oversized</option>

                            <option>Athletic Compression</option>

                         </select>

                      </div>



                      <div className="input-group">

                        <label className="input-label">Curations & Style Notes</label>

                        <textarea className="premium-field" style={{ minHeight: '110px', resize: 'none' }} placeholder="Describe the hand-feel, drape, and silhouette details..."></textarea>

                      </div>



                      <div className="input-group">

                         <label className="input-label">Editorial Media</label>

                         <div className="upload-card">

                            <Upload size={28} color="var(--gold)" style={{ margin: '0 auto 12px' }} />

                            <p style={{ fontSize: '13px', fontWeight: 700 }}>Upload High-Res Visuals</p>

                            <p style={{ fontSize: '11px', color: '#AAA', marginTop: '4px' }}>RAW, JPG or WEBP (Max 15MB)</p>

                         </div>

                      </div>



                      <div className="action-row">

                        <button className="btn-TryFit-ghost" onClick={() => setFormStep('basic')}>Back</button>

                        <button className="btn-TryFit-primary">Release to Boutique <Check size={18}/></button>

                      </div>

                    </motion.div>

                  )}

                </AnimatePresence>

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>



      {/* Floating Action Button */}

      <motion.button 

        onClick={() => setIsModalOpen(true)} 

        className="fab-add" 

        whileHover={{ scale: 1.08, rotate: 90 }} 

        whileTap={{ scale: 0.95 }}

      >

        <Plus size={32} strokeWidth={2.5} />

      </motion.button>

    </div>

  );

} 