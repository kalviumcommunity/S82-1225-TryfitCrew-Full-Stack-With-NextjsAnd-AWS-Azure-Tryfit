# 🧥 TryFit

![TryFit Home Page](./app/components/tryfit-snap.png)

[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://tryfit.netlify.app)
[![API Status](https://img.shields.io/badge/API-active-blue.svg)](https://tryfit-backend.onrender.com)
[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](LICENSE)

**TryFit** is a full-stack digital fashion & lifestyle platform designed to deliver a **personalized fit and style experience**. By blending **technology, aesthetics, and data**, TryFit helps users discover outfits that truly fit their body, lifestyle, and preferences.

Built with a modern web stack, TryFit focuses on **performance, scalability, and a premium user experience**.

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Live Demo](#-live-demo)
- [Key Features](#-key-features)
- [User Roles](#-core-user-roles)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Contact](#-contact)

---

## 🌟 Overview

In the era of fast fashion, finding the "perfect fit" is often a challenge. TryFit bridges the gap between e-commerce and personal styling. The platform utilizes intelligent data points to suggest sizes and styles that align with the user's unique profile, ensuring confidence in every purchase.

---

## 🌐 Live Demo

Explore the application live:

- **Frontend Application:** [https://try-fit.netlify.app](https://try-fit.netlify.app)
- **Backend API:** [https://tryfit-backend.onrender.com](https://tryfit-backend.onrender.com)

---

## ✨ Key Features

### 🛍️ For Shoppers
- **Smart Recommendations:** An AI-driven engine that suggests outfits based on past preferences and body type.
- **Size Intelligence:** Smart sizing algorithms to reduce returns and ensure the perfect fit.
- **Digital Wardrobe:** Manage your current collection and mix-and-match with new items.
- **Save Favorites:** Create collections of looks you love.

### ⚙️ Platform Capabilities
- **Secure Authentication:** Robust login/signup using JWT and Google OAuth.
- **Real-time Updates:** Socket.IO integration for instant notifications and preference updates.
- **Responsive Design:** A fluid UI that works perfectly on desktop, tablet, and mobile.
- **Performance Optimized:** Utilizing Redis caching for fast data retrieval.

---

## 👥 Core User Roles

| Role | Responsibilities |
| :--- | :--- |
| **👤 Users** | Create profiles, save outfits, receive recommendations, manage digital wardrobe. |
| **🧑‍💼 Admins / Stylists** | Curate collections, manage style content, analyze user trends and engagement data. |
| **🏷️ Brand Partners** | (Optional) Showcase collections and track engagement insights on their products. |

---

## 🧰 Tech Stack

This project uses a high-performance MERN+ architecture.

| Category | Technology |
| :--- | :--- |
| **Frontend** | React.js, Next.js, CSS3 (Custom/Modules), Framer Motion |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose |
| **Authentication** | JSON Web Tokens (JWT), Google OAuth |
| **Realtime** | Socket.IO |
| **Caching** | Redis |
| **DevOps** | Docker, Vercel (Frontend), Render (Backend) |
| **Testing** | Jest, Mocha |

---

## 🚀 Getting Started

Follow these instructions to set up the project locally.

### Prerequisites
- Node.js (v16+)
- npm or yarn
- MongoDB (Local or Atlas URI)
- Redis (Optional, for caching)

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/your-username/tryfit.git](https://github.com/your-username/tryfit.git)
    cd tryfit
    ```

2.  **Install Dependencies (Root/Backend)**
    ```bash
    npm install
    ```

3.  **Install Dependencies (Frontend)**
    ```bash
    cd client
    npm install
    ```

4.  **Environment Variables**
    Create a `.env` file in the root directory and add the following:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    GOOGLE_CLIENT_ID=your_google_id
    GOOGLE_CLIENT_SECRET=your_google_secret
    REDIS_URL=your_redis_url
    ```

5.  **Run the Application**
    *Development Mode:*
    ```bash
    # Run Backend
    npm run dev

    # Run Frontend (in a separate terminal)
    cd client && npm run dev
    ```

---
