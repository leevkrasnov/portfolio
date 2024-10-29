"use client";

import { SunMedium, Moon } from "lucide-react";
import { useState } from "react";

const ThemeToggleSwitch = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div>
      <button
        onClick={toggleTheme}
        aria-label="Toggle Theme"
        className={`relative hidden h-8 w-16 items-center justify-center rounded-full px-3 transition-all duration-700 hover:border-orange-500 md:flex ${
          isDark
            ? "border border-orange-500 bg-gray-100 shadow-md"
            : "border border-gray-300 bg-gray-100 shadow-sm"
        }`}
      >
        <div
          className={`absolute left-1 transform transition-transform duration-700 ${
            isDark ? "translate-x-7" : "translate-x-1"
          }`}
        >
          {isDark ? (
            <Moon strokeWidth={1.5} className="h-6 w-6 text-gray-800" />
          ) : (
            <SunMedium strokeWidth={1.5} className="h-6 w-6 text-gray-800" />
          )}
        </div>
      </button>
      <button
        onClick={toggleTheme}
        aria-label="Toggle Theme"
        className="flex h-4 w-4 items-center justify-center rounded-full transition-colors duration-500 md:hidden"
      >
        {isDark ? (
          <Moon strokeWidth={1.5} className="rounded-full text-gray-700" />
        ) : (
          <SunMedium strokeWidth={1.5} className="text-gray-700" />
        )}
      </button>
    </div>
  );
};

export default ThemeToggleSwitch;
