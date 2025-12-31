"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white transition-all hover:scale-110"
      aria-label="Toggle Theme"
    >
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
