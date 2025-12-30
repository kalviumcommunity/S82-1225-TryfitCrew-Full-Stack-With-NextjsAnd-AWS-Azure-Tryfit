import React from 'react';

// --- SVG Icons ---

const IconInstagram = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const IconLinkedIn = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const IconX = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const IconYoutube = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
  </svg>
);

const IconDiscord = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.118.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

// --- Component ---

const Footer = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@1,600&display=swap');

        /* RESET: Ensure no global margins interfere */
        body, html {
            margin: 0;
            padding: 0;
            overflow-x: hidden;
            width: 100%;
        }

        /* WRAPPER: Forces the footer to break out of any parent container 
           to be truly full width (100vw) on all devices.
        */
        .footer-wrapper {
          background-color: #fffdfdff; 
          padding-top: 0px; 
          font-family: 'Inter', sans-serif;
          
          /* Force Full Width Strategy */
          width: 100vw;
          position: relative;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
          box-sizing: border-box;
        }

        .footer-container {
          background-color: #421213; /* Dark Maroon */
          color: white;
          padding: 80px 40px 40px 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          width: 100%; /* Fills the 100vw wrapper */
          box-sizing: border-box;
          
          /* Footer Shape: Chamfered Corners + Middle Dip */
          clip-path: polygon(
            0% 40px,                 
            40px 0%,                 
            35% 0%,                  
            40% 30px,                
            60% 30px,                
            65% 0%,                  
            calc(100% - 40px) 0%,    
            100% 40px,               
            100% 100%,               
            0% 100%                  
          );
        }

        .footer-content-wrapper {
            width: 100%;
            max-width: 1400px; 
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .footer-top-grid {
          width: 100%;
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 40px;
          margin-bottom: 40px;
          padding: 0 20px;
        }

        .brand-col .logo {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 2rem;
          margin-bottom: 15px;
          display: block;
        }

        .brand-col .slogan {
          font-size: 1rem;
          line-height: 1.5;
          opacity: 0.9;
          max-width: 200px;
        }

        .link-col {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .link-col a {
          color: white;
          text-decoration: none;
          font-size: 0.95rem;
          transition: opacity 0.2s;
        }
        .link-col a:hover { opacity: 0.7; }

        .mid-bar {
          width: 100%;
          text-align: right;
          font-size: 0.75rem;
          margin-bottom: 10px;
          opacity: 0.8;
          color: rgba(255,255,255,0.7);
        }

        /* NEWSLETTER CARD */
        .newsletter-card {
          background-color: #F3EFE0;
          width: 100%;
          max-width: 1200px;
          border-radius: 40px; /* Fallback */
          padding: 50px;
          box-sizing: border-box;
          color: #421213;
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 30px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1); 
          
          /* CLIP-PATH CONFIGURATION:
             1. Top-Left: Rounded
             2. Top-Right: Curved/Dip Cut
             3. Bottom-Right: Rounded
             4. Bottom-Left: SHARP DIAGONAL CUT (Opposite of radius)
          */
          clip-path: polygon(
            /* --- Top Left Radius (approx 30px) --- */
            0px 30px, 5px 15px, 15px 5px, 30px 0px,
            
            /* --- Top Cut/Dip (Curve) --- */
            60% 0%, 
            65% 30px, 
            calc(100% - 30px) 30px,
            
            /* --- Top Right Radius --- */
            calc(100% - 15px) 35px, calc(100% - 5px) 45px, 100% 60px,
            
            /* --- Bottom Right Radius --- */
            100% calc(100% - 30px), calc(100% - 5px) calc(100% - 15px), calc(100% - 15px) calc(100% - 5px), calc(100% - 30px) 100%,
            
            /* --- Bottom Left: SHARP DIAGONAL CUT --- */
            80px 100%,            /* Cut ends 80px from left edge */
            0px calc(100% - 80px) /* Cut starts 80px from bottom edge */
          );
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .card-header .logo-large {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 4rem;
          font-weight: 600;
          margin: 0;
          color: #421213;
          line-height: 1;
        }
        .card-header .logo-large sup {
          font-size: 1rem;
          font-style: normal;
          vertical-align: super;
        }

        .work-btn {
          background-color: #E53935;
          color: white;
          border: none;
          padding: 12px 28px;
          border-radius: 50px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: transform 0.2s;
          box-shadow: 0 2px 10px rgba(229, 57, 53, 0.3);
        }
        .work-btn:hover { transform: scale(1.05); }

        .newsletter-title {
          font-size: 3rem;
          font-weight: 700;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .input-row {
          display: flex;
          align-items: center;
          gap: 40px;
          flex-wrap: wrap;
        }

        .input-container {
          position: relative;
          width: 100%;
          max-width: 450px;
        }

        .email-input {
          width: 100%;
          background-color: #421213;
          color: rgba(255, 255, 255, 0.9);
          border: none;
          padding: 20px 24px;
          border-radius: 50px;
          font-size: 1.1rem;
          outline: none;
          box-sizing: border-box;
        }

        .email-input::placeholder {
          color: rgba(255, 255, 255, 0.4);
          text-transform: lowercase;
        }

        .input-arrow-btn {
          position: absolute;
          right: 8px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: #E53935;
          cursor: pointer;
          padding: 8px;
          transition: transform 0.2s;
        }
        .input-arrow-btn:hover { transform: translateY(-50%) translateX(3px); }

        .helper-text {
          font-size: 0.9rem;
          line-height: 1.5;
          max-width: 380px;
          font-weight: 500;
          color: #421213;
        }

        .card-footer-row {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            margin-top: 20px;
            width: 100%;
        }

        .spam-promise {
            font-size: 0.8rem;
            font-weight: 600;
            max-width: 200px;
            line-height: 1.4;
        }

        .social-icons {
            display: flex;
            gap: 20px;
            color: #421213;
        }
        .social-icons a {
            color: inherit;
            transition: transform 0.2s;
        }
        .social-icons a:hover { transform: translateY(-3px); }

        /* Responsive Adjustments */
        @media (max-width: 900px) {
          .footer-top-grid { grid-template-columns: 1fr 1fr; }
          .card-header { flex-direction: column; gap: 20px; align-items: flex-start; }
          .card-footer-row { flex-direction: column-reverse; gap: 20px; align-items: flex-start; }
          .input-row { flex-direction: column; align-items: flex-start; gap: 20px; }
        }
        @media (max-width: 600px) {
           .footer-container {
               /* Simplified clip path for mobile */
               clip-path: polygon(0% 30px, 30px 0%, 100% 0%, 100% 100%, 0% 100%);
               padding: 40px 20px;
           }
           .newsletter-card {
               padding: 30px 20px;
               /* Simplified symmetric cut for mobile */
               clip-path: polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 40px 100%, 0 calc(100% - 40px));
           }
           .footer-top-grid { grid-template-columns: 1fr; text-align: center; }
           .brand-col .slogan { margin: 0 auto; }
           .newsletter-title { font-size: 2rem; }
           .card-header .logo-large { font-size: 3rem; }
        }
      `}</style>

      <div className="footer-wrapper">
        <div className="footer-container">
          <div className="footer-content-wrapper">
          
            {/* Top Section: Links & Branding */}
            <div className="footer-top-grid">
              <div className="brand-col">
                <span className="logo">TryFit.</span>
                <div className="slogan">Inspire, educate and entertain entrepreneurs.</div>
              </div>
              
              <div className="link-col">
                <a href="#">Channels</a>
                <a href="#">The Vision</a>
                <a href="#">Gallery</a>
              </div>

              <div className="link-col">
                <a href="#">Events</a>
                <a href="#">Partners</a>
              </div>

              <div className="link-col">
                <a href="#">Cookies</a>
              </div>
            </div>

            {/* Middle Text */}
            <div className="mid-bar">
              Website Made by Digidop, the best Webflow agency in the world!
            </div>

            {/* Bottom Beige Card */}
            <div className="newsletter-card">
              
              <div className="card-header">
                <h1 className="logo-large">TryFit<sup>r</sup></h1>
                <button className="work-btn">
                  Work together?
                </button>
              </div>

              <h2 className="newsletter-title">Newsletter</h2>

              <div className="input-row">
                <div className="input-container">
                  <input type="email" className="email-input" placeholder="email" />
                  <button className="input-arrow-btn">
                    <ArrowRightIcon />
                  </button>
                </div>
                <div className="helper-text">
                  Every week, we share a ton of content to help you grow your business. If you don't want to miss a thing, drop us your e-mail. 💌
                </div>
              </div>

              <div className="card-footer-row">
                  <div className="spam-promise">
                      We promise, no spaaaaaaam (f*ck the spammers)
                  </div>
                  <div className="social-icons">
                      <a href="#"><IconInstagram /></a>
                      <a href="#"><IconLinkedIn /></a>
                      <a href="#"><IconX /></a>
                      <a href="#"><IconYoutube /></a>
                      <a href="#"><IconDiscord /></a>
                  </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer; 