import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-zinc-950 w-full py-16 border-t border-zinc-900 tonal-layering-surface-container-low">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-12 max-w-screen-2xl mx-auto">
        <div className="md:col-span-1 flex flex-col gap-6">
          <div className="text-zinc-200 font-headline font-black text-2xl tracking-tighter">PORSCHE</div>
          <p className="font-inter text-xs tracking-widest uppercase text-zinc-500 leading-relaxed">
            © {new Date().getFullYear()} PORSCHE AG. LEGAL NOTICE. PRIVACY POLICY.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-zinc-100 font-headline text-xs font-bold uppercase tracking-widest mb-2">Company</span>
          <Link to="/contact" className="font-inter text-xs tracking-widest uppercase text-zinc-500 hover:text-zinc-100 transition-colors">Contact</Link>
          <a href="#" className="font-inter text-xs tracking-widest uppercase text-zinc-500 hover:text-zinc-100 transition-colors">Careers</a>
          <a href="#" className="font-inter text-xs tracking-widest uppercase text-zinc-500 hover:text-zinc-100 transition-colors">Press</a>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-zinc-100 font-headline text-xs font-bold uppercase tracking-widest mb-2">Services</span>
          <a href="#" className="font-inter text-xs tracking-widest uppercase text-zinc-500 hover:text-zinc-100 transition-colors">Newsletter</a>
          <a href="#" className="font-inter text-xs tracking-widest uppercase text-zinc-500 hover:text-zinc-100 transition-colors">Dealer Search</a>
          <a href="#" className="font-inter text-xs tracking-widest uppercase text-zinc-500 hover:text-zinc-100 transition-colors">Porsche Drive</a>
        </div>
        <div className="flex flex-col gap-6">
          <span className="text-zinc-100 font-headline text-xs font-bold uppercase tracking-widest mb-2">Follow Us</span>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-zinc-500 hover:text-secondary cursor-pointer transition-colors" data-icon="language">language</span>
            <span className="material-symbols-outlined text-zinc-500 hover:text-secondary cursor-pointer transition-colors" data-icon="share">share</span>
            <span className="material-symbols-outlined text-zinc-500 hover:text-secondary cursor-pointer transition-colors" data-icon="location_on">location_on</span>
          </div>
          <div className="mt-4 pt-4 border-t border-zinc-900 hidden md:block">
            <p className="text-[10px] text-zinc-600 uppercase tracking-widest">Current Region</p>
            <p className="text-xs text-zinc-300 font-bold mt-1">United States / English</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
