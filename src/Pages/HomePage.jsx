import React, { useState, useEffect } from 'react';
import {HiSearch} from 'react-icons/hi';
import AddBtn from '../UI/AddBtn';
import Header from '../Components/HeaderComp';
import NoteCard from '../Components/NoteCard';
import CategoryLink from '../Components/CategoryLink';



// Home Page
const HomePage = () => {
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

export default HomePage;