"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const OrbitSystem = () => {
  // 1. Data Source
  const reviewsData = [
    { id: 'r1', name: "Becky Nelson", role: "Fashion Editor", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400", text: "From the fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded." },
    { id: 'r2', name: "Julian Reed", role: "Architect", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400", text: "The 30-minute trial is a game changer. I've never experienced such a seamless blend of digital convenience and physical luxury." },
    { id: 'r3', name: "Elena K.", role: "Creative Director", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400", text: "TryFit understands modern silhouettes like no other. The fabrics breathe, and the fit is consistently impeccable." },
    { id: 'r4', name: "Marcus T.", role: "Designer", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400", text: "Finally, a brand that respects the art of tailoring. The return process was invisible, but I kept almost everything." },
    { id: 'r5', name: "Sophia V.", role: "Stylist", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=400", text: "The curation is divine. It feels less like shopping and more like consulting with a personal atelier." },
    { id: 'r6', name: "David Chen", role: "Entrepreneur", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400", text: "White glove service at its finest. The packaging alone is worth the order. Highly recommended for the busy professional." },
    { id: 'r7', name: "Isabella R.", role: "Model", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400", text: "I wear TryFit to castings and always get compliments. It's effortless elegance that actually fits." },
  ];

  // 2. State
  const [activeReview, setActiveReview] = useState(reviewsData[0]);
  const [satellites, setSatellites] = useState(reviewsData.slice(1));

  // 3. Swap Logic (Core)
  const handleSwap = (clickedReview: any, index: number) => {
    const oldCenter = activeReview;
    const newSatellites = [...satellites];
    // Swap the old center into the clicked satellite's position
    newSatellites[index] = oldCenter;
    
    setSatellites(newSatellites);
    setActiveReview(clickedReview);
  };

  // 4. Random Button Logic
  const triggerRandomSwap = () => {
    // Pick a random index from the available satellites
    const randomIndex = Math.floor(Math.random() * satellites.length);
    handleSwap(satellites[randomIndex], randomIndex);
  };

  return (
    <>
      <style>{`
        /* --- ORBIT CONTAINER --- */
        .orbit-container {
          position: relative;
          max-width: 1400px; /* Wider to fit random scatter */
          height: 650px;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* --- SATELLITE AVATARS --- */
        .satellite-wrapper {
          position: absolute;
          z-index: 10;
          cursor: pointer;
          transition: transform 0.3s ease;
          animation: float 6s ease-in-out infinite;
        }
        
        .satellite-wrapper:hover {
          transform: scale(1.2) !important; /* Pop effect */
          z-index: 20;
          animation-play-state: paused;
        }

        .satellite-img-box {
          width: 65px;
          height: 65px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid #FFF;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          position: relative;
          background: #f0f0f0;
        }
        
        .satellite-img-box img {
          width: 100%; height: 100%; object-fit: cover;
          filter: grayscale(100%);
          transition: 0.4s;
        }
        .satellite-wrapper:hover img { filter: grayscale(0%); }

        /* --- RANDOM SCATTERED POSITIONS --- */
        /* Designed to avoid the absolute center-left and center-right where arrows live */
        
        /* Left Side Cluster */
        .pos-0 { top: 45%; left: 1%; animation-delay: 0s; } /* Top Left */
        .pos-1 { top: 70%; left: 15%; animation-delay: 1.2s; } /* Mid-Upper Left */
        .pos-2 { top: 70%; left: 81%; animation-delay: 2.5s; } /* Bottom Left */
        
        /* Right Side Cluster */
        .pos-3 { top: 20%; right: 80%; animation-delay: 0.5s; } /* Top Right */
        .pos-4 { top: 40%; right: 0%; animation-delay: 3s; } /* Mid-Upper Right */
        .pos-5 { top: 15%; right: 15%; animation-delay: 1.8s; } /* Bottom Right */

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }

        /* --- CENTER STAGE --- */
        .center-stage {
          position: relative;
          z-index: 5;
          width: 100%;
          max-width: 550px;
          perspective: 1000px;
        }

        /* --- NAVIGATION BUTTONS --- */
        /* Positioned absolutely within center stage, pushed outward */
        .nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: #FFF;
          border: 1px solid rgba(0,0,0,0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 50;
          color: #0A0A0A;
          box-shadow: 0 15px 30px rgba(0,0,0,0.08);
          transition: all 0.3s cubic-bezier(0.2, 1, 0.3, 1);
        }

        .nav-btn:hover {
          background: #0A0A0A;
          color: #FFF;
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        
        .nav-btn:active { transform: translateY(-50%) scale(0.95); }

        .prev-btn { left: -100px; }
        .next-btn { right: -100px; }

        /* --- REVIEW CARD --- */
        .review-card {
          background: #FFF;
          padding: 70px 50px;
          border-radius: 4px;
          box-shadow: 0 40px 90px rgba(197, 163, 134, 0.12); /* Subtle Gold Shadow */
          border: 1px solid rgba(0,0,0,0.02);
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .avatar-dock {
          width: 130px;
          height: 130px;
          border-radius: 50%;
          border: 5px solid #FFF;
          box-shadow: 0 15px 40px rgba(0,0,0,0.15);
          position: absolute;
          top: -65px;
          left: 50%;
          transform: translateX(-50%);
          overflow: hidden;
          z-index: 20;
          background: #FAFAFA;
        }
        
        .avatar-dock img { width: 100%; height: 100%; object-fit: cover; }

        .quote-icon {
          font-family: 'Italiana', serif;
          font-size: 100px;
          color: #C5A386;
          line-height: 0.5;
          margin-top: 50px;
          opacity: 0.3;
        }

        .text-content {
          min-height: 150px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .review-p {
          font-size: 20px;
          font-family: 'Italiana', serif;
          line-height: 1.5;
          color: #444;
          margin: 20px 0 30px;
          font-style: italic;
        }

        .meta-info h3 {
          font-size: 14px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #0A0A0A;
          margin-bottom: 6px;
        }

        .meta-info span {
          font-size: 11px;
          color: #999;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        @media (max-width: 1024px) {
           .orbit-container { height: auto; padding: 40px 0; }
           .satellite-wrapper { display: none; } /* Hide clutter on mobile */
           .review-card { margin-top: 50px; padding: 50px 20px; }
           .prev-btn { left: 0px; }
           .next-btn { right: 0px; }
           .nav-btn { width: 45px; height: 45px; }
        }
      `}</style>

      {/* --- Satellites (Clickable & Floating) --- */}
      {satellites.map((review, i) => (
        <motion.div
          key={review.id} // Essential for Framer Motion tracking
          layoutId={`avatar-${review.id}`} // Connects this satellite to the center dock
          className={`satellite-wrapper pos-${i}`}
          onClick={() => handleSwap(review, i)}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
        >
          <div className="satellite-img-box">
            <motion.img src={review.img} alt={review.name} />
          </div>
        </motion.div>
      ))}

      {/* --- Center Card --- */}
      <div className="center-stage">
        {/* Navigation Arrows - Triggers Random Swap */}
        <button className="nav-btn prev-btn" onClick={triggerRandomSwap} aria-label="Random Review">
          <ChevronLeft size={28} strokeWidth={1.5} />
        </button>
        <button className="nav-btn next-btn" onClick={triggerRandomSwap} aria-label="Random Review">
          <ChevronRight size={28} strokeWidth={1.5} />
        </button>

        <motion.div 
          className="review-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* The Active Avatar Dock */}
          <div className="avatar-dock">
            <motion.img 
              layoutId={`avatar-${activeReview.id}`} // Matches the ID of the clicked/swapped satellite
              src={activeReview.img} 
              alt={activeReview.name} 
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
            />
          </div>

          <span className="quote-icon">“</span>

          <div className="text-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeReview.id}
                initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -15, filter: 'blur(4px)' }}
                transition={{ duration: 0.4 }}
              >
                <p className="review-p">"{activeReview.text}"</p>
                <div className="meta-info">
                  <h3>{activeReview.name}</h3>
                  <span>{activeReview.role}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div style={{display:'flex', gap:6, marginTop: 25, color:'#C5A386'}}>
             {[1,2,3,4,5].map(s => <span key={s} style={{fontSize:14}}>★</span>)}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default OrbitSystem;