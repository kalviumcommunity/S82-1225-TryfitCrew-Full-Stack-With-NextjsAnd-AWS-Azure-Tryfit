"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { 
  motion, 
  useAnimation, 
  useMotionValue 
} from 'framer-motion';

interface CircularTextProps {
  text: string;
  spinDuration?: number;
  className?: string;
}

const CircularText: React.FC<CircularTextProps> = ({
  text,
  spinDuration = 30, 
  className = ''
}) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const rotation = useMotionValue(0);
  const [currentRotation, setCurrentRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false); // Track hover state for the arrow

  // 1. Continuously track the rotation value
  useEffect(() => {
    const unsubscribe = rotation.on("change", (latest) => {
      setCurrentRotation(latest);
    });
    return () => unsubscribe();
  }, [rotation]);

  // 2. Start spinning immediately on load
  useEffect(() => {
    controls.start({
      rotate: currentRotation + 360,
      transition: {
        ease: 'linear',
        duration: spinDuration,
        repeat: Infinity,
        type: 'tween',
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spinDuration, controls]);

  // 3. Hover Handlers
  const handleHoverStart = () => {
    controls.stop(); 
    setIsHovered(true); // Trigger arrow animation
  };

  const handleHoverEnd = () => {
    setIsHovered(false); // Reset arrow animation
    controls.start({
      rotate: currentRotation + 360,
      transition: {
        ease: 'linear',
        duration: spinDuration,
        repeat: Infinity,
        type: 'tween',
      }
    });
  };

  return (
    <div className={className} style={{ position: 'relative', width: '200px', height: '200px', margin: '0 auto' }}>
      
      {/* --- CENTER BUTTON (Interactive Link) --- */}
      <Link 
        href="/products/all-products"
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
        className="center-btn-group"
        style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '96px',
            height: '96px',
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            boxShadow: '0 20px 50px -12px rgba(0,0,0,0.1)', 
            border: '1px solid rgba(0,0,0,0.06)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 20, 
            cursor: 'pointer',
            // We keep the CSS transition for the container shadow/scale as it's performant
            transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.5s ease'
        }}
      >
           {/* Animated Motion SVG Arrow */}
           <motion.svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5" 
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: '#171717' }}
              // Entrance Animation
              initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
              animate={{ 
                  rotate: isHovered ? 0 : -45, // Rotates flat on hover
                  scale: isHovered ? 1.1 : 1,  // Scales up slightly on hover
                  x: isHovered ? 2 : 0,        // Nudges right to indicate "Go"
                  opacity: 1 
              }}
              // Spring physics for a "Luxury" feel
              transition={{ 
                  type: "spring", 
                  stiffness: 260, 
                  damping: 20 
              }}
           >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
          </motion.svg>

          {/* CSS for container hover effects */}
          <style jsx>{`
            .center-btn-group:hover {
              transform: translate(-50%, -50%) scale(1.06) !important;
              box-shadow: 0 25px 60px -12px rgba(0,0,0,0.15) !important;
              border-color: rgba(0,0,0,0.1) !important;
            }
          `}</style>
      </Link>
      
      {/* --- SPINNING TEXT CONTAINER --- */}
      <motion.div
        initial={{ rotate: 0 }}
        style={{ 
          rotate: rotation,
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          transformOrigin: 'center center', 
          cursor: 'pointer',
          pointerEvents: 'none' 
        }}
        animate={controls}
      >
        {letters.map((letter, i) => {
          const rotationDeg = (360 / letters.length) * i;
          return (
            <span
              key={i}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) rotate(${rotationDeg}deg) translateY(-88px)`,
                fontSize: '20px',
                fontWeight: 1100,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                fontFamily: 'inherit', 
                color: '#171717',
                lineHeight: 1, 
              }}
            >
              {letter}
            </span>
          );
        })}
      </motion.div>
    </div>
  );
};

export default CircularText;