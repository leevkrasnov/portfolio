'use client';

import { SunMedium, Moon } from 'lucide-react';
import { useState } from 'react';

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
        className={`hidden md:flex items-center justify-center relative px-3 w-16 h-8 rounded-full hover:border-orange-500 transition-all duration-700 ${
          isDark
            ? 'bg-gray-300 border border-gray-400 shadow-md'
            : 'bg-gray-200 border border-gray-300 shadow-sm'
        }`}
      >
        <div
          className={`absolute left-1 transition-transform duration-500 transform ${
            isDark ? 'translate-x-7' : 'translate-x-1'
          }`}
        >
          {isDark ? (
            <Moon
              strokeWidth={1.5}
              className="button-theme w-6 h-6 text-gray-700"
            />
          ) : (
            <SunMedium
              strokeWidth={1.5}
              className="button-theme w-6 h-6 text-gray-700"
            />
          )}
        </div>
      </button>
      <button
        onClick={toggleTheme}
        aria-label="Toggle Theme"
        className="md:hidden flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-500"
      >
        {isDark ? (
          <Moon
            strokeWidth={1.5}
            className="w-5 h-5 shadow-md rounded-full text-gray-700"
          />
        ) : (
          <SunMedium strokeWidth={1.5} className="w-5 h-5 text-gray-700" />
        )}
      </button>
    </div>
  );
};

export default ThemeToggleSwitch;
