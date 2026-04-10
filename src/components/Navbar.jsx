import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const getLinkClasses = (path) => {
    const isActive = location.pathname === path;
    return `font-headline tracking-tighter uppercase text-sm transition-all duration-300 ${
      isActive
        ? 'text-zinc-100 border-b-2 border-zinc-100 pb-1'
        : 'text-zinc-400 hover:text-zinc-100'
    }`;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-zinc-950/60 backdrop-blur-xl flex justify-between items-center px-6 md:px-12 h-20 no-line-rule tonal-transition">
      <div className="flex items-center gap-12">
        <Link to="/" className="text-2xl font-bold tracking-[-0.02em] text-zinc-100 font-headline uppercase">
          PORSCHE
        </Link>
        <div className="hidden md:flex gap-8 items-center h-full pt-1">
          <Link to="/models" className={getLinkClasses('/models')}>Models</Link>
          <Link to="/discover" className={getLinkClasses('/discover')}>Discover</Link>
          <Link to="/ownership" className={getLinkClasses('/ownership')}>Ownership</Link>
          <Link to="/motorsport" className={getLinkClasses('/motorsport')}>Motorsport</Link>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <Link to="/configurator" className="hidden md:block bg-primary text-on-primary font-headline uppercase text-xs px-6 py-2.5 rounded-lg font-bold tracking-widest hover:bg-primary-container transition-all duration-300">
          Configure
        </Link>
        <Link to="/contact" className="material-symbols-outlined text-zinc-300 cursor-pointer hover:bg-zinc-800/40 p-2 transition-all duration-300 rounded">
          person
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
