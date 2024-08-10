import React from 'react'
import { HiSun, HiMoon } from 'react-icons/hi';

// Theme toggle component
const ThemeToggle = ({ isDark, toggleTheme }) => 
    (
    <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
      {isDark ? <HiSun className="text-yellow-400" /> : <HiMoon className="text-gray-700" />}
    </button>
  );
  
  export default ThemeToggle