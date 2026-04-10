import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';

const Home = () => {
  return (
    <AnimatedPage>
      <main>
        {/* Hero Section */}
        <section className="relative h-screen w-full flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover object-center"
              alt="Cinematic night shot of a metallic silver Porsche 911 parked under city lights with wet pavement reflections and dramatic shadows"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDtsIoCFxzqD0zF_PyeSp3-SDYXQjGfcYG7EO2UCznHTWcEzN-De3VGedHZAPnjbxQzz_l-njus3rueR17x9fEx2wMHISXql7aWCJK9t20iiXO_lHP-H3wPv0KC3x-ACOJhxO6Mvyt0oEcGVgBVSiujYU7PsmXX_Dohs6E0-FJqeDgEOXDpC47zopkg1dn4iQRRXDGjIswL7Wfsv251pg6VD58wu2LcICbPq6RPQ1HUCZ3WR7Lp3x2RgopDwcD96gjelwRSybAT6M"
            />
            <div className="absolute inset-0 hero-gradient-overlay"></div>
          </div>

          <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full mt-20">
            <div className="max-w-3xl">
              <h1 className="font-headline font-extrabold text-5xl md:text-8xl tracking-tight text-primary-fixed mb-6 uppercase">
                Engineering<br/>Dreams
              </h1>
              <p className="text-lg md:text-2xl font-light text-on-surface-variant mb-10 max-w-xl leading-relaxed">
                Experience the pinnacle of automotive excellence. A legacy forged in performance and refined by obsession.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/models" className="text-center bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline font-bold uppercase tracking-widest px-10 py-5 rounded transition-all hover:brightness-110">
                  Explore Models
                </Link>
                <Link to="/prebooking" className="text-center border border-primary/30 text-primary font-headline font-bold uppercase tracking-widest px-10 py-5 rounded hover:bg-primary hover:text-on-primary transition-all duration-500">
                  Pre-Book Now
                </Link>
              </div>
            </div>
          </div>

          {/* Performance Indicator */}
          <div className="absolute bottom-12 right-12 hidden lg:flex flex-col gap-4 items-end">
            <div className="text-right">
              <p className="font-label text-[0.65rem] tracking-[0.2em] text-secondary uppercase mb-1">Acceleration</p>
              <p className="font-headline text-3xl font-bold text-primary-fixed">0-60 MPH IN 2.7S</p>
            </div>
            <div className="w-64 h-[2px] bg-surface-variant relative">
              <div className="absolute top-0 left-0 h-full w-4/5 bg-secondary shadow-[0_0_8px_#f7bd48]"></div>
            </div>
          </div>
        </section>

        {/* Kinetic Gallery Bento */}
        <section className="py-32 px-6 md:px-12 bg-surface">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Large Feature */}
              <div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-low h-[600px]">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
                  alt="Close-up of high-performance Porsche brake calipers and wheel rims with metallic texture and sharp focus"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-HnZrzyzJIqo06HrlHx63ZzPydn1rhTbvviyo1wa1SWgEnzqywRh0tRWViHbbgfLb0S0Bh6fYtiPRI6KFAa-QlShbTag2dier22a88iutMsiLxLYKRPxceLrI3FLeH5NSzS9DpAceDCFEiSY7HrEpI95dkij96ABYDL05TD6knnZQMRooln4__WHnVt8hirufik9YHBgvlfLCO4uFKC9VnPwvLe5mxyT3YZDaP7GY4AoWOwyoMso6P-YyQ_MfF3Q2LkiZT06mjW4"
                />
                <div className="absolute inset-0 p-12 flex flex-col justify-end">
                  <span className="font-label text-secondary tracking-[0.3em] uppercase text-xs mb-4">The Interior</span>
                  <h3 className="font-headline text-4xl font-bold text-zinc-100 mb-4">Cockpit Precision</h3>
                  <p className="text-zinc-400 max-w-md">Every control is exactly where you expect it. Ergonomics meets high-end luxury in a layout designed for the driver.</p>
                </div>
              </div>

              {/* Side Stats */}
              <div className="md:col-span-4 flex flex-col gap-8">
                <div className="flex-1 bg-surface-container-highest p-10 flex flex-col justify-center rounded-xl hover:bg-surface-bright transition-colors duration-500 group">
                  <span className="material-symbols-outlined text-secondary text-4xl mb-6 group-hover:scale-110 transition-transform">bolt</span>
                  <h4 className="font-headline text-2xl font-bold mb-2">Electric DNA</h4>
                  <p className="text-zinc-400 text-sm">Embracing the future without compromising the soul of the drive.</p>
                </div>
                <div className="flex-1 bg-surface-container-low p-1 p-px relative rounded-xl overflow-hidden">
                  <div className="w-full h-full bg-surface-container-low p-10 flex flex-col justify-center">
                    <span className="material-symbols-outlined text-secondary text-4xl mb-6">mode_fan</span>
                    <h4 className="font-headline text-2xl font-bold mb-2">Advanced Aero</h4>
                    <p className="text-zinc-400 text-sm">Sculpted by the wind for unmatched stability at extreme speeds.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specification Overlay */}
        <section className="relative py-48 bg-surface-container-lowest overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20 pointer-events-none">
            <img
              className="w-full h-full object-cover grayscale"
              alt="Extreme low angle shot of a Porsche silhouette in a dark studio with rim lighting highlighting its aerodynamic curves"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpFE7DTDm5USj5flzg1Xs0oBUNQ_4-E8XspCEjJ4062pwyfU05Gy-38ad2yrY_Op3wvR_ivQfcWfSw2KcIKOx8sk2C_sbFSbtHxqUcnY8xmW42rzQDa9S-gS_njioXTHqgWl5km2eemNMUIZBylBfkwryCFESCb8sdJxhDjvsht_GDMz-zxaDcVlJaOo3nLxhU3Ntw8JqFZbUou1vvoBAXGsEWBYlFipQWMzAqPuHy4XoURvbbLJlQQtBeprkEwgjZcg-qwZEtM1g"
            />
          </div>
          <div className="relative z-10 px-6 md:px-12 max-w-screen-xl mx-auto text-center">
            <h2 className="font-headline text-secondary text-sm tracking-[0.4em] uppercase mb-16">Uncompromising Performance</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24">
              <div className="flex flex-col items-center">
                <p className="font-headline text-5xl md:text-7xl font-light text-primary-fixed mb-2">473</p>
                <p className="font-label text-xs tracking-widest text-zinc-500 uppercase">Horsepower</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="font-headline text-5xl md:text-7xl font-light text-primary-fixed mb-2">3.2s</p>
                <p className="font-label text-xs tracking-widest text-zinc-500 uppercase">0-100 km/h</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="font-headline text-5xl md:text-7xl font-light text-primary-fixed mb-2">193</p>
                <p className="font-label text-xs tracking-widest text-zinc-500 uppercase">Top Speed MPH</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="font-headline text-5xl md:text-7xl font-light text-primary-fixed mb-2">Twin</p>
                <p className="font-label text-xs tracking-widest text-zinc-500 uppercase">Turbocharged</p>
              </div>
            </div>

            <Link to="/models" className="mt-24 text-secondary font-headline font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 mx-auto hover:gap-5 transition-all w-fit group">
              Discover Engineering <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
            </Link>
          </div>
        </section>
      </main>
    </AnimatedPage>
  );
};

export default Home;
