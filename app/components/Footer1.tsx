"use client";

import React from 'react';
import { Share2, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer1 = () => {
  return (
    <>
      <style>{`
        /* Default variables in case they aren't defined globally */
        :root {
          --border-color: #EFEFEF;
          --noir: #1A1A1A;
          --slate: #717171;
          --font-serif: serif;
        }

        .simple-footer { 
          padding: 60px 0; 
          border-top: 1px solid var(--border-color); 
          text-align: center; 
          display: flex; 
          flex-direction: column; 
          align-items: center; 
          gap: 30px; 
          background: #fff;
        }
        
        .social-links { 
          display: flex; 
          gap: 25px; 
          color: var(--noir); 
        }
        
        .copy { 
          font-size: 10px; 
          text-transform: uppercase; 
          letter-spacing: 2px; 
          color: var(--slate); 
        }
      `}</style>

      <footer className="simple-footer">
        <div 
          className="logo" 
          style={{ 
            fontFamily: 'var(--font-serif)', 
            fontSize: 24, 
            letterSpacing: 3,
            fontWeight: 600 // Added slightly for better visibility
          }}
        >
          TryFit.
        </div>
        
        <div className="social-links">
          <Share2 size={20} cursor="pointer" />
          <Instagram size={20} cursor="pointer" />
          <Twitter size={20} cursor="pointer" />
          <Facebook size={20} cursor="pointer" />
        </div>
        
        <p className="copy">© 2025 TryFit. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Footer1;