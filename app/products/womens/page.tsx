"use client";
import Footer from '@/app/components/Footer1';
import React, { useState, useMemo, useEffect } from 'react';
import { useRouter } from 'next/navigation'; 
import { 
  Search, 
  User, 
  ChevronRight, 
  ChevronLeft, 
  Star, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Twitter,
  LayoutGrid,
  Shirt,
  Heart,
  X // Added X icon to clear search
} from 'lucide-react';

export default function FashionShopPage() {
  const router = useRouter();
  
  // --- State ---
  const [activeCategory, setActiveCategory] = useState('Women');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState(''); // NEW: Search State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  // --- Categories ---
  const categories = [
    { name: 'All Product', path: '/products/all-product', icon: <LayoutGrid size={16} /> },
    { name: 'Women', path: '/products/womens', icon: <User size={16} /> },
    { name: 'Men', path: '/products/mens', icon: <User size={16} /> },
    { name: 'Gen Z', path: '/products/genzs', icon: <Shirt size={16} /> },
  ];

  // --- Filter Options ---
  const filterOptions = ['Outerwear', 'Tops', 'Bottoms', 'Dresses'];

  // --- Product Data ---
  const productsData = [
    // --- WOMEN'S DRESSES ---
    { id: 701, name: 'Floral Maxi Dress', price: 79.00, rating: 4.8, reviews: '520', cat: 'Dresses', gender: 'Women', img: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=400&auto=format&fit=crop' },
    { id: 702, name: 'Satin Slip Dress', price: 55.00, rating: 4.9, reviews: '800', cat: 'Dresses', gender: 'Women', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=400&auto=format&fit=crop' },
    { id: 703, name: 'Knitted Bodycon', price: 45.00, rating: 4.7, reviews: '340', cat: 'Dresses', gender: 'Women', img: 'https://images.unsplash.com/photo-1612336307429-8a898d10e223?q=80&w=400&auto=format&fit=crop' },
    { id: 704, name: 'Summer Wrap Dress', price: 62.00, rating: 4.6, reviews: '210', cat: 'Dresses', gender: 'Women', img: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=400&auto=format&fit=crop' },
    { id: 705, name: 'Elegant Evening Gown', price: 120.00, rating: 5.0, reviews: '150', cat: 'Dresses', gender: 'Women', img: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=400&auto=format&fit=crop' },
    { id: 706, name: 'Boho Mini Dress', price: 38.00, rating: 4.5, reviews: '400', cat: 'Dresses', gender: 'Women', img: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=400&auto=format&fit=crop' },
    { id: 707, name: 'Denim Shirt Dress', price: 52.00, rating: 4.7, reviews: '300', cat: 'Dresses', gender: 'Women', img: 'https://images.unsplash.com/photo-1591369045385-115fe25d718b?q=80&w=400&auto=format&fit=crop' },
    { id: 708, name: 'Velvet Cocktail Dress', price: 85.00, rating: 4.8, reviews: '180', cat: 'Dresses', gender: 'Women', img: 'https://images.unsplash.com/photo-1574621100236-d25b64cfd647?q=80&w=400&auto=format&fit=crop' },
    { id: 709, name: 'Linen Sundress', price: 40.00, rating: 4.6, reviews: '600', cat: 'Dresses', gender: 'Women', img: 'https://images.unsplash.com/photo-1596783439305-70e60f23dbee?q=80&w=400&auto=format&fit=crop' },
    { id: 710, name: 'Puff Sleeve Midi', price: 68.00, rating: 4.9, reviews: '250', cat: 'Dresses', gender: 'Women', img: 'https://images.unsplash.com/photo-1623945465563-128a3f57242d?q=80&w=400&auto=format&fit=crop' },

    // --- WOMEN'S OUTERWEAR ---
    { id: 101, name: 'Classic Beige Trench', price: 129.00, rating: 4.9, reviews: '2.3k', cat: 'Outerwear', gender: 'Women', img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=400&auto=format&fit=crop' },
    { id: 102, name: 'Oversized Denim Jacket', price: 85.50, rating: 4.7, reviews: '850', cat: 'Outerwear', gender: 'Women', img: 'https://images.unsplash.com/photo-1545594861-3bef43ff2288?q=80&w=400&auto=format&fit=crop' },
    { id: 103, name: 'Quilted Puffer Vest', price: 65.00, rating: 4.8, reviews: '500', cat: 'Outerwear', gender: 'Women', img: 'https://images.unsplash.com/photo-1552874869-5c39ec9288dc?q=80&w=400&auto=format&fit=crop' },
    { id: 104, name: 'Wool Blend Blazer', price: 110.00, rating: 4.9, reviews: '1.1k', cat: 'Outerwear', gender: 'Women', img: 'https://images.unsplash.com/photo-1548624149-f321689bd48c?q=80&w=400&auto=format&fit=crop' },
    { id: 105, name: 'Cropped Leather Jacket', price: 150.00, rating: 5.0, reviews: '320', cat: 'Outerwear', gender: 'Women', img: 'https://images.unsplash.com/photo-1550614000-4b9519e0034a?q=80&w=400&auto=format&fit=crop' },
    { id: 106, name: 'Teddy Faux Fur Coat', price: 95.00, rating: 4.6, reviews: '410', cat: 'Outerwear', gender: 'Women', img: 'https://images.unsplash.com/photo-1578978738328-91e843f5505d?q=80&w=400&auto=format&fit=crop' },
    { id: 107, name: 'Rainproof Windbreaker', price: 75.00, rating: 4.5, reviews: '200', cat: 'Outerwear', gender: 'Women', img: 'https://images.unsplash.com/photo-1605763240004-7e93b172d754?q=80&w=400&auto=format&fit=crop' },
    { id: 108, name: 'Long Knit Cardigan', price: 55.00, rating: 4.8, reviews: '600', cat: 'Outerwear', gender: 'Women', img: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=400&auto=format&fit=crop' },

    // --- WOMEN'S TOPS ---
    { id: 201, name: 'Silk Satin Blouse', price: 59.90, rating: 4.8, reviews: '900', cat: 'Tops', gender: 'Women', img: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?q=80&w=400&auto=format&fit=crop' },
    { id: 202, name: 'White Cotton Tee', price: 25.00, rating: 4.9, reviews: '3.5k', cat: 'Tops', gender: 'Women', img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=400&auto=format&fit=crop' },
    { id: 203, name: 'Ribbed Turtle Neck', price: 45.00, rating: 4.7, reviews: '750', cat: 'Tops', gender: 'Women', img: 'https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?q=80&w=400&auto=format&fit=crop' },
    { id: 204, name: 'Floral Summer Top', price: 35.00, rating: 4.6, reviews: '400', cat: 'Tops', gender: 'Women', img: 'https://images.unsplash.com/photo-1551163943-3f6a29e3945a?q=80&w=400&auto=format&fit=crop' },
    { id: 205, name: 'Graphic Hoodie', price: 60.00, rating: 5.0, reviews: '1.2k', cat: 'Tops', gender: 'Women', img: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=400&auto=format&fit=crop' },
    { id: 206, name: 'Striped Long Sleeve', price: 32.00, rating: 4.5, reviews: '300', cat: 'Tops', gender: 'Women', img: 'https://images.unsplash.com/photo-1503342394128-c104d54dba01?q=80&w=400&auto=format&fit=crop' },
    { id: 207, name: 'Lace Trim Cami', price: 28.00, rating: 4.7, reviews: '150', cat: 'Tops', gender: 'Women', img: 'https://images.unsplash.com/photo-1602574044810-6395dc898d9e?q=80&w=400&auto=format&fit=crop' },
    { id: 208, name: 'Off-Shoulder Knit', price: 52.00, rating: 4.8, reviews: '620', cat: 'Tops', gender: 'Women', img: 'https://images.unsplash.com/photo-1620799140408-ed5341cd2431?q=80&w=400&auto=format&fit=crop' },

    // --- WOMEN'S BOTTOMS ---
    { id: 301, name: 'High-Waist Mom Jeans', price: 49.90, rating: 4.8, reviews: '2.1k', cat: 'Bottoms', gender: 'Women', img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=400&auto=format&fit=crop' },
    { id: 302, name: 'Pleated Midi Skirt', price: 42.00, rating: 4.9, reviews: '800', cat: 'Bottoms', gender: 'Women', img: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=400&auto=format&fit=crop' },
    { id: 303, name: 'Wide Leg Linen Pants', price: 55.00, rating: 4.7, reviews: '550', cat: 'Bottoms', gender: 'Women', img: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=400&auto=format&fit=crop' },
    { id: 304, name: 'Yoga Leggings', price: 38.00, rating: 5.0, reviews: '1.5k', cat: 'Bottoms', gender: 'Women', img: 'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?q=80&w=400&auto=format&fit=crop' },
    { id: 305, name: 'Tailored Office Pants', price: 65.00, rating: 4.6, reviews: '300', cat: 'Bottoms', gender: 'Women', img: 'https://images.unsplash.com/photo-1485230946387-43302e564883?q=80&w=400&auto=format&fit=crop' },
    { id: 306, name: 'Denim Shorts', price: 35.00, rating: 4.7, reviews: '900', cat: 'Bottoms', gender: 'Women', img: 'https://images.unsplash.com/photo-1565084888279-aca607ecce0c?q=80&w=400&auto=format&fit=crop' },
    { id: 307, name: 'Velvet Mini Skirt', price: 40.00, rating: 4.5, reviews: '210', cat: 'Bottoms', gender: 'Women', img: 'https://images.unsplash.com/photo-1516575150278-77136aed6920?q=80&w=400&auto=format&fit=crop' },
    { id: 308, name: 'Cargo Joggers', price: 48.00, rating: 4.8, reviews: '450', cat: 'Bottoms', gender: 'Women', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=400&auto=format&fit=crop' },

    // --- OTHER CATEGORIES ---
    { id: 501, name: 'Men Denim Jacket', price: 89.90, rating: 5.0, reviews: '2.1k', cat: 'Outerwear', gender: 'WoMen', img: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=400&auto=format&fit=crop' },
    { id: 502, name: 'Men Relaxed Chinos', price: 55.10, rating: 4.7, reviews: '320', cat: 'Bottoms', gender: 'WoMen', img: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=400&auto=format&fit=crop' },
  ];

  // --- Search & Filter Logic ---
  const filteredProducts = useMemo(() => {
    return productsData.filter(product => {
      // 1. Category Match (Gender)
      const categoryMatch = activeCategory === 'All Product' || product.gender === activeCategory;

      // 2. Filter Match (Checkbox)
      const typeMatch = activeFilters.length === 0 || activeFilters.includes(product.cat);

      // 3. Search Match (Text)
      const searchMatch = product.name.toLowerCase().includes(searchQuery.toLowerCase());

      return categoryMatch && typeMatch && searchMatch;
    });
  }, [activeCategory, activeFilters, searchQuery]); // Re-run when any of these change

  // --- Pagination Logic ---
  const totalItems = filteredProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Reset to Page 1 if filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, activeFilters, searchQuery]);

  const currentProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredProducts, currentPage]);

  const handlePageChange = (pageNum: number) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }
  };

  // --- Handlers ---
  const handleCategoryClick = (category: any) => {
    setActiveCategory(category.name); 
    setActiveFilters([]); 
    setSearchQuery(''); // Clear search on category change
    router.push(category.path); 
  };

  const toggleFilter = (filter: string) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter(f => f !== filter));
    } else {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  const clearSearch = () => setSearchQuery('');

  // --- Counters ---
  const getCountForFilter = (filterName: string) => {
    return productsData.filter(p => {
      const catMatch = activeCategory === 'All Product' || p.gender === activeCategory;
      const typeMatch = p.cat === filterName;
      const searchMatch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      return catMatch && typeMatch && searchMatch;
    }).length;
  };

  const getCategoryCount = (catName: string) => {
    if (catName === 'All Product') return productsData.length;
    return productsData.filter(p => p.gender === catName).length;
  };

  return (
    <div className="shop-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

        :root {
          --primary-black: #1A1A1A;
          --text-gray: #717171;
          --bg-light: #F9F9F9;
          --border-color: #EFEFEF;
          --accent-red: #EF4444;
          --accent-yellow: #FFB800;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: 'Plus Jakarta Sans', sans-serif;
          background-color: #fff;
          color: var(--primary-black);
        }

        .container { max-width: 1320px; margin: 0 auto; padding: 0 40px; }

        /* Navbar */
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 60px;
          background: #fff;
          border-bottom: 1px solid var(--border-color);
        }
        .nav-brand { font-weight: 800; font-size: 20px; display: flex; align-items: center; gap: 8px; letter-spacing: -0.5px; }
        .nav-links { display: flex; gap: 40px; list-style: none; font-size: 14px; font-weight: 600; color: var(--text-gray); }
        .nav-links li { cursor: pointer; transition: 0.2s; }
        .nav-links li.active { color: var(--primary-black); }
        .nav-actions { display: flex; align-items: center; gap: 24px; color: var(--primary-black); }

        /* Hero */
        .hero {
          height: 400px;
          background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .hero-title {
          font-size: 200px;
          font-weight: 800;
          color: #fff;
          letter-spacing: -8px;
          line-height: 1;
          pointer-events: none;
        }

        /* --- UPDATED SEARCH UI --- */
        .search-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 40px 0;
        }
        .section-title { font-size: 24px; font-weight: 700; letter-spacing: -0.5px; }
        
        /* New Modern Search Bar */
        .search-container {
          display: flex;
          align-items: center;
          background: #fff;
          border-radius: 50px;
          padding: 6px 8px 6px 24px;
          width: 500px;
          border: 1px solid var(--border-color);
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
          transition: 0.3s ease;
        }
        .search-container:focus-within {
          border-color: var(--primary-black);
          box-shadow: 0 4px 25px rgba(0,0,0,0.08);
          transform: translateY(-1px);
        }
        .search-container input {
          border: none;
          background: transparent;
          padding: 12px;
          width: 100%;
          outline: none;
          font-size: 15px;
          font-weight: 500;
          color: var(--primary-black);
        }
        .search-container input::placeholder {
          color: #9CA3AF;
        }
        .search-btn {
          background: var(--primary-black);
          color: white;
          border: none;
          padding: 12px 28px;
          border-radius: 30px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: 0.2s;
        }
        .search-btn:hover {
          background: #333;
          transform: scale(1.02);
        }
        .clear-btn {
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 8px;
          display: flex;
          align-items: center;
          color: #9CA3AF;
          margin-right: 8px;
        }
        .clear-btn:hover { color: var(--accent-red); }

        /* Main Layout */
        .main-grid {
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 60px;
        }

        /* Sidebar */
        .sidebar-title { font-size: 16px; font-weight: 700; margin-bottom: 24px; color: var(--primary-black); }
        .category-list { list-style: none; margin-bottom: 40px; }
        .category-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          border-radius: 12px;
          font-size: 14px;
          cursor: pointer;
          margin-bottom: 6px;
          transition: 0.2s;
          color: var(--text-gray);
        }
        .category-item.active { background: #FEF2F2; color: var(--accent-red); font-weight: 700; }
        .category-count { 
          background: var(--accent-red); color: white; padding: 2px 8px; border-radius: 6px; font-size: 10px; font-weight: 700;
        }

        .filter-options { list-style: none; }
        .filter-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          padding: 12px 0;
          color: var(--text-gray);
          cursor: pointer;
        }
        
        .checkbox { 
          width: 18px; height: 18px; border: 2.5px solid #DDD; border-radius: 5px; 
          transition: 0.2s;
          display: flex; align-items: center; justify-content: center;
        }
        .filter-item.selected .checkbox {
          background: var(--accent-red);
          border-color: var(--accent-red);
        }
        .filter-item.selected .checkbox::after {
            content: '';
            width: 8px; height: 4px;
            border-left: 2px solid white;
            border-bottom: 2px solid white;
            transform: rotate(-45deg) translate(1px, -1px);
        }
        .filter-item.selected {
          color: var(--primary-black);
          font-weight: 600;
        }

        /* Product Grid */
        .products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
        }
        .product-card { border-radius: 24px; background: #fff; transition: 0.3s; }
        .image-box {
          background: var(--bg-light);
          border-radius: 24px;
          height: 240px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .image-box img { width: 100%; height: 100%; object-fit: cover; transition: 0.5s; }
        .product-card:hover .image-box img { transform: scale(1.08); }
        .cat-pill {
          position: absolute; top: 16px; right: 16px;
          background: #fff; padding: 6px 14px; border-radius: 20px; font-size: 10px; font-weight: 700;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }

        .product-info { padding: 20px 0; }
        .product-name { font-weight: 700; font-size: 17px; margin-bottom: 10px; letter-spacing: -0.3px; }
        .rating-row { display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--text-gray); margin-bottom: 18px; }
        .price-text { font-weight: 800; font-size: 18px; margin-left: auto; color: var(--primary-black); }
        
        .card-actions { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .btn {
          padding: 12px;
          border-radius: 40px;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          border: none;
          transition: 0.2s;
        }
        .btn-cart { background: var(--bg-light); color: var(--primary-black); }
        .btn-buy { background: var(--primary-black); color: white; }
        .btn:hover { opacity: 0.8; transform: translateY(-1px); }

        /* Pagination */
        .pagination {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 80px 0;
          border-top: 1px solid var(--border-color);
          margin-top: 60px;
        }
        .page-nums { display: flex; gap: 20px; list-style: none; font-size: 14px; color: var(--text-gray); font-weight: 600; }
        .page-nums li { cursor: pointer; padding: 8px 12px; border-radius: 8px; transition: 0.2s; }
        .page-nums li:hover { background: #f0f0f0; }
        .page-nums li.active { color: white; background: var(--primary-black); font-weight: 800; }
        .page-nav { 
          display: flex; align-items: center; gap: 8px; font-size: 14px; font-weight: 700; cursor: pointer; color: var(--primary-black); 
          user-select: none;
        }
        .page-nav.disabled { opacity: 0.3; pointer-events: none; }

        /* Recommendations */
        .rec-section { padding: 80px 0; }
        .rec-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 40px; }
        .rec-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }

        /* Newsletter */
        .newsletter {
          background: var(--primary-black);
          border-radius: 40px;
          padding: 80px;
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 40px 0 80px 0;
        }
        .news-left h2 { font-size: 40px; font-weight: 800; line-height: 1.1; letter-spacing: -1px; }
        .news-right { text-align: right; }
        .news-input {
          display: flex;
          background: rgba(255,255,255,0.08);
          border-radius: 50px;
          padding: 6px 6px 6px 24px;
          width: 380px;
          border: 1px solid rgba(255,255,255,0.15);
          margin-top: 20px;
        }
        .news-input input { background: transparent; border: none; color: white; outline: none; width: 100%; font-size: 14px; }
        .send-btn { background: white; border-radius: 50%; width: 44px; height: 44px; border: none; display: flex; align-items: center; justify-content: center; cursor: pointer; }

        /* Footer */
        .footer { padding-bottom: 80px; }
        .footer-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 60px; }
        .footer-col h4 { margin-bottom: 28px; font-size: 16px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; }
        .footer-col ul { list-style: none; }
        .footer-col li { color: var(--text-gray); font-size: 14px; margin-bottom: 14px; cursor: pointer; font-weight: 500; }
        .social-links { display: flex; gap: 12px; margin-top: 24px; }
        .social-icon { width: 40px; height: 40px; border: 1px solid var(--border-color); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--primary-black); transition: 0.2s; cursor: pointer; }
        .social-icon:hover { background: var(--primary-black); color: #fff; }

        .no-products {
          grid-column: span 3;
          text-align: center;
          padding: 60px;
          color: var(--text-gray);
          font-size: 16px;
          background: var(--bg-light);
          border-radius: 20px;
          border: 1px dashed var(--border-color);
        }

      `}</style>

      {/* --- Hero --- */}
      <div className="hero">
        <h1 className="hero-title">{activeCategory === 'All Product' ? 'Fashion' : activeCategory}</h1>
      </div>

      <div className="container">
        {/* --- Search Section (Updated UI) --- */}
        <div className="search-section">
          <h2 className="section-title">Upgrade Your Style</h2>
          <div className="search-container">
            <Search size={20} color="var(--primary-black)" />
            <input 
              type="text" 
              placeholder="Search by name, category, or style..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button className="clear-btn" onClick={clearSearch}>
                <X size={18} />
              </button>
            )}
            <button className="search-btn">Search Now</button>
          </div>
        </div>

        {/* --- Main Grid --- */}
        <div className="main-grid">
          {/* Sidebar */}
          <aside className="sidebar">
            <h3 className="sidebar-title">Category</h3>
            <ul className="category-list">
              {categories.map((cat) => (
                <li 
                  key={cat.name} 
                  className={`category-item ${activeCategory === cat.name ? 'active' : ''}`}
                  onClick={() => handleCategoryClick(cat)}
                >
                  <div style={{display:'flex', alignItems:'center', gap:'12px'}}>
                    {cat.icon}
                    {cat.name}
                  </div>
                  <span className="category-count">{getCategoryCount(cat.name)}</span>
                </li>
              ))}
            </ul>
            
            <h3 className="sidebar-title" style={{marginTop: '40px'}}>Filter</h3>
            <ul className="filter-options">
              {filterOptions.map(opt => (
                <li 
                  key={opt} 
                  className={`filter-item ${activeFilters.includes(opt) ? 'selected' : ''}`}
                  onClick={() => toggleFilter(opt)}
                >
                  <div className="checkbox"></div>
                  {opt}
                  {/* Dynamic Count */}
                  <span style={{marginLeft: 'auto', fontSize:'10px', opacity:0.6}}>
                    {getCountForFilter(opt)}
                  </span>
                </li>
              ))}
            </ul>
          </aside>

          {/* Product Feed */}
          <main>
            <div className="products-grid">
              {currentProducts.length > 0 ? (
                currentProducts.map(product => (
                  <div className="product-card" key={product.id}>
                    <div className="image-box">
                      <span className="cat-pill">{product.cat}</span>
                      <img src={product.img} alt={product.name} />
                    </div>
                    <div className="product-info">
                      <h4 className="product-name">{product.name}</h4>
                      <div className="rating-row">
                        <Star size={14} fill="var(--accent-yellow)" color="var(--accent-yellow)" />
                        <span>{product.rating} ({product.reviews} Reviews)</span>
                        <span className="price-text">${product.price.toFixed(2)}</span>
                      </div>
                      <div className="card-actions">
                        <button className="btn btn-cart">Add to Cart</button>
                        <button className="btn btn-buy">Buy Now</button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-products">
                  No products found for <b>{searchQuery || activeCategory}</b> with these filters.
                </div>
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="pagination">
                <div 
                  className={`page-nav ${currentPage === 1 ? 'disabled' : ''}`} 
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  <ChevronLeft size={18} /> Previous
                </div>
                
                <ul className="page-nums">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                    <li 
                      key={num} 
                      className={currentPage === num ? 'active' : ''}
                      onClick={() => handlePageChange(num)}
                    >
                      {num}
                    </li>
                  ))}
                </ul>

                <div 
                  className={`page-nav ${currentPage === totalPages ? 'disabled' : ''}`} 
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  Next <ChevronRight size={18} />
                </div>
              </div>
            )}
          </main>
        </div>

        {/* --- Recommendations --- */}
        <section className="rec-section">
          <div className="rec-header">
            <h2 className="section-title">Explore our recommendations</h2>
            <div style={{display:'flex', gap:'12px'}}>
              <div className="social-icon"><ChevronLeft size={20}/></div>
              <div className="social-icon"><ChevronRight size={20}/></div>
            </div>
          </div>
          <div className="rec-grid">
            {productsData.slice(0, 4).map(product => (
              <div className="product-card" key={`rec-${product.id}`}>
                <div className="image-box">
                  <img src={product.img} alt={product.name} />
                  <div style={{position: 'absolute', top: 12, left: 12, background: '#fff', borderRadius: '50%', padding: '6px', cursor: 'pointer'}}>
                    <Heart size={14} color="var(--accent-red)" />
                  </div>
                </div>
                <div className="product-info">
                  <h4 className="product-name">{product.name}</h4>
                  <div className="rating-row">
                    <Star size={14} fill="var(--accent-yellow)" color="var(--accent-yellow)" />
                    <span>{product.rating}</span>
                    <span className="price-text">${product.price.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Newsletter --- */}
        <section className="newsletter">
          <div className="news-left">
            <h2>Ready to Refresh <br/> Your Wardrobe?</h2>
          </div>
          <div className="news-right">
            <p style={{fontSize:'14px', opacity: 0.8}}>Sign up for our newsletter to get early access <br/> and exclusive discounts.</p>
            <div className="news-input">
              <input type="text" placeholder="Your Email Address" />
              <button className="send-btn"><ChevronRight size={22} color="black" strokeWidth={3} /></button>
            </div>
          </div>
        </section>

        {/* --- Footer --- */}
        <Footer/>
      </div>
    </div>
  );
}