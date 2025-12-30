"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, 
  Share2, 
  Instagram, 
  Twitter, 
  Facebook,
  Minus,
  Plus,
  Heart
} from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function ProductDetailsPage() {
  const params = useParams();
  const id = params?.id; // Get the ID from the URL

  // State for interactive elements
  const [selectedSize, setSelectedSize] = useState('S');
  const [selectedColor, setSelectedColor] = useState('teal');
  const [quantity, setQuantity] = useState(1);
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [product, setProduct] = useState<any>(null); // State to hold the current product

  // FULL PRODUCT DATABASE (Moved here so we can find the right one)
  const allProducts = [
    // --- DRESSES ---
    { id: 1, name: 'Y2K Mesh Mini Dress', price: 45.00, cat: 'Dresses', img: 'https://images.unsplash.com/photo-1605763240004-7e93b172d754?q=80&w=1200&auto=format&fit=crop' },
    { id: 2, name: 'Elegant Evening Gown', price: 120.00, cat: 'Dresses', img: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1200&auto=format&fit=crop' },
    
    // --- TOPS ---
    { id: 3, name: 'Corset Top', price: 45.00, cat: 'Tops', img: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?q=80&w=1200&auto=format&fit=crop' },
    
    // --- BOTTOMS ---
    { id: 4, name: 'Parachute Cargo Pants', price: 62.00, cat: 'Bottoms', img: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=1200&auto=format&fit=crop' },
    
    // --- OUTERWEAR ---
    { id: 5, name: 'Vintage Varsity Jacket', price: 120.00, cat: 'Outerwear', img: 'https://images.unsplash.com/photo-1559551409-dadc959f76b8?q=80&w=1200&auto=format&fit=crop' },
    
    // Default Fallback Item
    { id: 0, name: "The Sculpt & Motion Active Set", price: 149.00, cat: 'Set', img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1200&auto=format&fit=crop" }
  ];

  useEffect(() => {
    if (id) {
      // Find the product that matches the ID from URL
      const foundProduct = allProducts.find(p => p.id === Number(id));
      
      if (foundProduct) {
        // Construct the full product object with details
        setProduct({
          ...foundProduct,
          sku: `TF-GENZ-${foundProduct.id}`,
          description: "Engineered for the modern aesthetic. This piece combines high-fashion streetwear vibes with everyday comfort. Made from premium, durable fabrics that move with you.",
          colors: [
            { id: 'teal', hex: '#2F4F4F', name: 'Deep Teal' },
            { id: 'black', hex: '#1A1A1A', name: 'Midnight' },
            { id: 'cream', hex: '#FDF4E3', name: 'Oatmilk' }
          ],
          sizes: ['XS', 'S', 'M', 'L', 'XL'],
          highlights: [
            'Premium fabric blend',
            'Designed for versatility',
            'True to size fit',
            'Limited edition Gen Z collection'
          ],
          // Use the main image 4 times for gallery since we don't have multiple angles for all
          images: [
            foundProduct.img,
            foundProduct.img, 
            foundProduct.img,
            foundProduct.img
          ]
        });
      }
    } else {
        // Fallback if no ID found
        setProduct({
            id: 0,
            name: "The Sculpt & Motion Active Set",
            price: 149.00,
            sku: "TF-7140-21573",
            description: "Engineered for movement and designed for style...",
            colors: [{ id: 'teal', hex: '#2F4F4F', name: 'Deep Teal' }],
            sizes: ['XS', 'S', 'M', 'L', 'XL'],
            highlights: ['Seamless fit', '4-way stretch'],
            images: ["https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1200&auto=format&fit=crop"]
        });
    }
  }, [id]);

  if (!product) return <div style={{padding: 100, textAlign: 'center'}}>Loading...</div>;

  const recommendations = [
    { name: 'Performance Knit Runner', price: 120, img: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=400' },
    { name: 'Tech Fleece Hoodie', price: 85, img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=400' },
    { name: 'Everyday Gym Duffel', price: 65, img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=400' },
    { name: 'Stainless Steel Hydration Bottle', price: 35, img: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=400' },
  ];

  const handleQuantity = (type: 'inc' | 'dec') => {
    if (type === 'dec' && quantity > 1) setQuantity(quantity - 1);
    if (type === 'inc') setQuantity(quantity + 1);
  };

  return (
    <div className="product-page-wrapper">
      {/* ... (Keep your existing CSS-in-JS styles here) ... */}
      <style>{`
        /* ... existing styles ... */
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Italiana&display=swap');

        :root {
          --noir: #111111;
          --slate: #666666;
          --cream-bg: #FAFAF9;
          --border-color: #E5E5E5;
          --font-serif: 'Italiana', serif;
          --font-sans: 'Plus Jakarta Sans', sans-serif;
        }

        body {
          background-color: #fff;
          font-family: var(--font-sans);
          color: var(--noir);
          overflow-x: hidden;
        }

        .container { max-width: 1340px; margin: 0 auto; padding: 0 30px; }

        /* --- Breadcrumbs --- */
        .breadcrumb { 
          padding: 40px 0; 
          font-size: 11px; 
          text-transform: uppercase; 
          letter-spacing: 1.5px; 
          color: var(--slate);
          font-weight: 600;
        }
        .breadcrumb a { text-decoration: none; color: inherit; transition: color 0.2s; }
        .breadcrumb a:hover { color: var(--noir); }
        .breadcrumb .current { color: var(--noir); }

        /* --- Main Grid Layout --- */
        .product-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr 140px; /* Info - Main Image - Thumbnails */
          gap: 60px;
          align-items: start;
          margin-bottom: 120px;
        }

        @media (max-width: 1024px) {
          .product-grid { grid-template-columns: 1fr; gap: 40px; }
          .gallery-col { flex-direction: row; order: -1; justify-content: center; }
          .main-img-col { order: -2; }
        }

        /* --- Left Column: Product Info --- */
        .info-col { padding-top: 20px; }
        .product-title {
          font-family: var(--font-serif);
          font-size: 48px;
          line-height: 1.1;
          margin-bottom: 15px;
          font-weight: 400;
        }
        .price-row {
          display: flex; justify-content: space-between; align-items: center;
          margin-bottom: 30px; border-bottom: 1px solid var(--border-color); padding-bottom: 20px;
        }
        .price { font-size: 24px; font-weight: 500; }
        .sku { font-size: 11px; color: var(--slate); letter-spacing: 1px; text-transform: uppercase; }

        .description { font-size: 14px; line-height: 1.8; color: var(--slate); margin-bottom: 40px; }

        /* Selectors */
        .selector-block { margin-bottom: 35px; }
        .label-row { display: flex; justify-content: space-between; margin-bottom: 12px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; }
        .selected-val { color: var(--slate); font-weight: 500; text-transform: none; letter-spacing: 0; }

        /* Colors */
        .color-options { display: flex; gap: 15px; }
        .color-swatch {
          width: 32px; height: 32px; border-radius: 50%; cursor: pointer;
          border: 1px solid var(--border-color); padding: 3px; transition: all 0.2s;
        }
        .color-swatch.active { border-color: var(--noir); }
        .swatch-fill { width: 100%; height: 100%; border-radius: 50%; }

        /* Sizes */
        .size-options { display: flex; gap: 10px; flex-wrap: wrap; }
        .size-btn {
          width: 48px; height: 48px; display: flex; align-items: center; justify-content: center;
          border: 1px solid var(--border-color); background: #fff; font-size: 12px; font-weight: 600;
          cursor: pointer; transition: all 0.2s;
        }
        .size-btn:hover { border-color: var(--noir); }
        .size-btn.active { background: var(--noir); color: white; border-color: var(--noir); }

        /* Actions */
        .actions-block { display: flex; gap: 15px; margin-top: 50px; }
        .qty-selector {
          display: flex; align-items: center; border: 1px solid var(--border-color);
          padding: 0 15px; height: 54px; gap: 20px;
        }
        .qty-btn { cursor: pointer; display: flex; align-items: center; color: var(--slate); transition: 0.2s; }
        .qty-btn:hover { color: var(--noir); }
        .qty-val { font-weight: 600; width: 20px; text-align: center; }

        .add-to-cart-btn {
          flex: 1; background: var(--noir); color: white; height: 54px; border: none;
          font-family: var(--font-sans); font-size: 13px; font-weight: 800; text-transform: uppercase;
          letter-spacing: 2px; cursor: pointer; transition: 0.3s;
        }
        .add-to-cart-btn:hover { background: #333; }
        .wishlist-btn {
          width: 54px; height: 54px; border: 1px solid var(--border-color); display: flex;
          align-items: center; justify-content: center; cursor: pointer; transition: 0.2s;
        }
        .wishlist-btn:hover { border-color: var(--noir); }

        /* Highlights */
        .highlights-list { margin-top: 40px; list-style: none; border-top: 1px solid var(--border-color); padding-top: 25px; }
        .highlights-list li { font-size: 12px; color: var(--slate); margin-bottom: 10px; display: flex; align-items: center; gap: 10px; }
        .highlights-list li::before { content: '•'; color: var(--noir); }

        /* --- Center Column: Main Image --- */
        .main-img-container {
          aspect-ratio: 3/4; background: var(--cream-bg); overflow: hidden; cursor: crosshair;
        }
        .main-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.8s cubic-bezier(0.2, 1, 0.3, 1); }
        .main-img-container:hover .main-img { transform: scale(1.2); }

        /* --- Right Column: Thumbnails --- */
        .gallery-col { display: flex; flex-direction: column; gap: 20px; }
        .thumb-container {
          aspect-ratio: 3/4; cursor: pointer; border-bottom: 3px solid transparent; transition: all 0.3s; opacity: 0.6;
        }
        .thumb-container.active { border-color: var(--noir); opacity: 1; }
        .thumb-img { width: 100%; height: 100%; object-fit: cover; }

        /* --- Recommendations Section --- */
        .rec-section { padding: 80px 0 120px; text-align: center; border-top: 1px solid var(--border-color); }
        .rec-heading { font-family: var(--font-serif); font-size: 36px; margin-bottom: 60px; text-transform: uppercase; }
        .rec-heading span { font-style: italic; text-transform: lowercase; color: var(--slate); }
        
        .rec-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px; }
        @media (max-width: 768px) { .rec-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; } }
        
        .rec-card { text-align: left; cursor: pointer; }
        .rec-img-wrap { aspect-ratio: 3/4; background: var(--cream-bg); margin-bottom: 20px; overflow: hidden; }
        .rec-img-wrap img { width: 100%; height: 100%; object-fit: cover; transition: 0.6s; }
        .rec-card:hover img { transform: scale(1.05); }
        .rec-title { font-size: 14px; font-weight: 600; margin-bottom: 8px; }
        .rec-price { font-size: 14px; color: var(--slate); }

        /* --- Footer --- */
        .simple-footer { padding: 60px 0; border-top: 1px solid var(--border-color); text-align: center; display: flex; flex-direction: column; align-items: center; gap: 30px; }
        .social-links { display: flex; gap: 25px; color: var(--noir); }
        .copy { font-size: 10px; text-transform: uppercase; letter-spacing: 2px; color: var(--slate); }
      `}</style>

      <div className="container">
        <nav className="breadcrumb">
          <Link href="/">Home</Link> <ChevronRight size={10} />
          <Link href="/shop">TryFit Collection</Link> <ChevronRight size={10} />
          <span className="current">{product.name}</span>
        </nav>

        <div className="product-grid">
          {/* --- COL 1: Info & Actions --- */}
          <motion.div className="info-col" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="product-title">{product.name}</h1>
            <div className="price-row">
              <span className="price">${product.price.toFixed(2)}</span>
              <span className="sku">Item No. {product.sku}</span>
            </div>

            <p className="description">{product.description}</p>

            {/* Color Selector */}
            <div className="selector-block">
              <div className="label-row">
                <span>Color</span>
                <span className="selected-val">{product.colors.find((c: any) => c.id === selectedColor)?.name}</span>
              </div>
              <div className="color-options">
                {product.colors.map((color: any) => (
                  <motion.div 
                    key={color.id}
                    className={`color-swatch ${selectedColor === color.id ? 'active' : ''}`}
                    onClick={() => setSelectedColor(color.id)}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div className="swatch-fill" style={{ background: color.hex }}></div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="selector-block">
              <div className="label-row">
                <span>Size</span>
                <span className="selected-val">{selectedSize}</span>
              </div>
              <div className="size-options">
                {product.sizes.map((size: any) => (
                  <motion.button 
                    key={size}
                    className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                    onClick={() => setSelectedSize(size)}
                    whileTap={{ scale: 0.95 }}
                  >
                    {size}
                  </motion.button>
                ))}
              </div>
              <div style={{ marginTop: 10, fontSize: 11, textDecoration: 'underline', cursor: 'pointer' }}>TryFit Size Guide</div>
            </div>

            {/* Add to Cart Actions */}
            <div className="actions-block">
              <div className="qty-selector">
                <div className="qty-btn" onClick={() => handleQuantity('dec')}><Minus size={16} /></div>
                <span className="qty-val">{quantity}</span>
                <div className="qty-btn" onClick={() => handleQuantity('inc')}><Plus size={16} /></div>
              </div>
              <motion.button className="add-to-cart-btn" whileTap={{ scale: 0.98 }}>
                Add to Bag — ${(product.price * quantity).toFixed(2)}
              </motion.button>
              <motion.button 
                className="wishlist-btn" 
                onClick={() => setIsWishlisted(!isWishlisted)}
                whileTap={{ scale: 0.9 }}
              >
                <Heart size={20} fill={isWishlisted ? "black" : "none"} />
              </motion.button>
            </div>

            <ul className="highlights-list">
              {product.highlights.map((highlight: any, i: number) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>
          </motion.div>

          {/* --- COL 2: Main Image Display --- */}
          <div className="main-img-col">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeImgIndex}
                className="main-img-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <img src={product.images[activeImgIndex]} className="main-img" alt="Main product view" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* --- COL 3: Vertical Thumbnails --- */}
          <div className="gallery-col">
            {product.images.map((img: string, idx: number) => (
              <motion.div 
                key={idx}
                className={`thumb-container ${activeImgIndex === idx ? 'active' : ''}`}
                onClick={() => setActiveImgIndex(idx)}
                whileHover={{ opacity: 1 }}
              >
                <img src={img} className="thumb-img" alt={`Thumbnail ${idx + 1}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= RECOMMENDATIONS ================= */}
      <section className="rec-section">
        <div className="container">
          <h2 className="rec-heading">Complete The Look <span>with</span> TryFit</h2>
          <div className="rec-grid">
            {recommendations.map((item, i) => (
              <motion.div 
                className="rec-card" 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="rec-img-wrap">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="rec-title">{item.name}</div>
                <div className="rec-price">${item.price.toFixed(2)}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SIMPLE FOOTER ================= */}
      <footer className="simple-footer">
        <div className="logo" style={{ fontFamily: 'var(--font-serif)', fontSize: 24, letterSpacing: 3 }}>TryFit Studio</div>
        <div className="social-links">
          <Share2 size={20} cursor="pointer" />
          <Instagram size={20} cursor="pointer" />
          <Twitter size={20} cursor="pointer" />
          <Facebook size={20} cursor="pointer" />
        </div>
        <p className="copy">© 2025 TryFit. All rights reserved.</p>
      </footer>
    </div>
  );
}