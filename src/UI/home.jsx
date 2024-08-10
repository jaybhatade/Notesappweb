import React, { useState, useEffect } from 'react';
import { HiMenu, HiSearch, HiPlus, HiHome, HiViewGrid, HiUser, HiOutlineChevronRight, HiSun, HiMoon } from 'react-icons/hi';
import AddBtn from './AddBtn';
import AddNoteForm from './AddNote';

// Theme toggle component
const ThemeToggle = ({ isDark, toggleTheme }) => (
  <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
    {isDark ? <HiSun className="text-yellow-400" /> : <HiMoon className="text-gray-700" />}
  </button>
);

// Header Component
const Header = ({ isDark, toggleTheme }) => (
  <header className="flex items-center justify-between px-4 py-3 border-b bg-white dark:bg-gray-800 dark:border-gray-700 transition-colors duration-200 fixed w-full z-[999]">
    <div className="flex items-center gap-4">
      <button className="text-2xl text-gray-700 dark:text-gray-200 transition-colors duration-200"><HiMenu /></button>
      <a href="#" className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-200">Notes</a>
    </div>
    <div className="flex items-center gap-4">
      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      <div className="relative">
        <button className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 transition-colors duration-200"></button>
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg hidden transition-colors duration-200">
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200">Profile</a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200">Settings</a>
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200">Logout</a>
        </div>
      </div>
    </div>
  </header>
);

// Note Card Component
const NoteCard = ({ title, date, content }) => (
  <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow transition-colors duration-200">
    <div className="flex items-center justify-between">
      <div className="text-sm font-medium text-gray-900 dark:text-white transition-colors duration-200">{title}</div>
      <div className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-200">{date}</div>
    </div>
    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-2 transition-colors duration-200">{content}</p>
  </div>
);

// Category Link Component
const CategoryLink = ({ name }) => (
  <a href="#" className="bg-white shadow  dark:bg-gray-700 rounded-lg px-4 py-3 flex items-center justify-between transition-colors duration-200">
    <div className="text-sm font-medium text-gray-700 dark:text-gray-200 transition-colors duration-200">{name}</div>
    <HiOutlineChevronRight className="text-gray-400 dark:text-gray-500 transition-colors duration-200" />
  </a>
);



// Main App Component
const NotesApp = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="flex flex-col min-h-screen h-[200vh] bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200">
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <main className="flex-1 px-4 py-6 overflow-y-auto mt-14">
        <div className="relative mb-6">
          <input 
            type="search" 
            placeholder="Search notes..." 
            className="pl-8 w-full rounded-lg bg-white dark:bg-gray-700 p-2 border-gray-300 dark:border-gray-600 border-2 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-200" 
          />
          <HiSearch className="absolute left-2.5 top-3.5 text-gray-400 dark:text-gray-500 transition-colors duration-200" />
        </div>  
        
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Recent Notes</h2>
            <a href="#" className="text-sm text-blue-600 dark:text-blue-400 transition-colors duration-200">View all</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <NoteCard title="React Hooks" date="2 days ago" content="Learn how to use React Hooks to build powerful and reusable components." />
            <NoteCard title="Java Streams" date="5 days ago" content="Explore the power of Java Streams to write concise and efficient code." />
            <NoteCard title="Tailwind CSS" date="1 week ago" content="Lorem ipsum" />
          </div>
        </section>
        
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Note Categories</h2>
            <a href="#" className="text-sm text-blue-600 dark:text-blue-400 transition-colors duration-200">View all</a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            <CategoryLink name="React" />
            <CategoryLink name="Java" />
            <CategoryLink name="Tailwind CSS" />
            <CategoryLink name="JavaScript" />
          </div>
        </section>

        <section>
              <AddBtn/>
        </section>
      </main>

    </div>
  );
};

export default NotesApp;