import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';

const Models = () => {
  return (
    <AnimatedPage>
      <main className="min-h-screen pt-32 pb-24 px-12 relative overflow-hidden grid-bg">
        {/* Hero Section Title */}
        <header className="max-w-screen-2xl mx-auto mb-16">
          <div className="flex flex-col gap-2">
            <span className="font-label text-secondary tracking-[0.2em] text-xs uppercase font-bold">Engineering Excellence</span>
            <h1 className="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter text-primary-fixed">MODELS</h1>
          </div>
        </header>

        {/* Catalog Filter UI */}
        <section className="max-w-screen-2xl mx-auto mb-12 flex flex-wrap gap-4 items-center">
          <button className="bg-primary text-on-primary px-8 py-3 font-label text-xs font-bold uppercase tracking-widest rounded-lg transition-all duration-500 hover:opacity-90">All Models</button>
          <button className="border border-outline-variant/30 text-on-surface-variant px-8 py-3 font-label text-xs font-bold uppercase tracking-widest rounded-lg hover:border-primary transition-all duration-500">Electric</button>
          <button className="border border-outline-variant/30 text-on-surface-variant px-8 py-3 font-label text-xs font-bold uppercase tracking-widest rounded-lg hover:border-primary transition-all duration-500">Sports</button>
          <button className="border border-outline-variant/30 text-on-surface-variant px-8 py-3 font-label text-xs font-bold uppercase tracking-widest rounded-lg hover:border-primary transition-all duration-500">SUV</button>
        </section>

        {/* Bento Grid Catalog */}
        <section className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 911 Card */}
          <Link to="/configurator" className="glass-card group overflow-hidden border border-white/5 flex flex-col transition-all duration-500 hover:bg-surface-bright">
            <div className="aspect-[16/9] overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Sleek silver Porsche 911 Carrera parked on a dark moody coastal road during twilight with sharp lighting accents"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6EO-im1gFXj1e2TYtLXlESFPZy1KdT9ZPpxhsLuJBWH9H6dIpcseZr3TOpEzAQd26mhmt4uLHrok8cd5yrbZsfH4bYIK_QYDz-nC_AybYeQwP5-73Q6o9WxVAbSPuoZci9e4NtD7pCR1rek7auRaxAbt1Zgr6PpM6An6aeQTyQmInzvd-oA9oLgKgitMN64eGIhzN1VQf2gGwaDZ3MZx52OzlDlypx8gi_uZ37eempIyEsxmVZMJBI-TrJaeO-alicFGGs0lMCn8"
              />
            </div>
            <div className="p-8 flex flex-col gap-6">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="font-headline text-3xl font-bold tracking-tight text-zinc-100">911</h3>
                  <p className="font-label text-zinc-500 text-xs uppercase tracking-widest mt-1">The Icon</p>
                </div>
                <span className="font-headline text-xl text-secondary font-light">From $114,400</span>
              </div>
              <div className="flex gap-4 border-t border-white/5 pt-6">
                <div className="flex flex-col">
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest">0-60 MPH</span>
                  <span className="text-sm font-bold text-zinc-200">3.4s</span>
                </div>
                <div className="flex flex-col border-l border-white/5 pl-4">
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Top Speed</span>
                  <span className="text-sm font-bold text-zinc-200">182 mph</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Taycan Card */}
          <Link to="/configurator" className="glass-card group overflow-hidden border border-white/5 flex flex-col transition-all duration-500 hover:bg-surface-bright">
            <div className="aspect-[16/9] overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Futuristic black Porsche Taycan electric sedan inside a minimalist concrete garage with dramatic neon linear lighting"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyyAQuqGalgiYwk05fVTnhUBJM0ooA3YfLbUvZAsasBVmVoeFEpl7843_cajbJVxP9B9-twYgNnhdvVLKr7PANBTy9t8V42Sx5mlYP92pfMxnakVEUYPdf7aLfsQR2ccAz3S37t-98xzfG8zDHcZqMDW9O9-nPw_4iEOhD_49-ONTYYZOn-hmtAohtoRbWpH_FXPpStb8tBPxYIy-SJoZWO-Dr0_EWSHjkIMtZTqqsNdwrRqWaf9IhCQb132vBpmvCUpLE8RDygko"
              />
            </div>
            <div className="p-8 flex flex-col gap-6">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="font-headline text-3xl font-bold tracking-tight text-zinc-100">Taycan</h3>
                  <p className="font-label text-zinc-500 text-xs uppercase tracking-widest mt-1">Electric Performance</p>
                </div>
                <span className="font-headline text-xl text-secondary font-light">From $90,900</span>
              </div>
              <div className="flex gap-4 border-t border-white/5 pt-6">
                <div className="flex flex-col">
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Charge Time</span>
                  <span className="text-sm font-bold text-zinc-200">22.5 min</span>
                </div>
                <div className="flex flex-col border-l border-white/5 pl-4">
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Power</span>
                  <span className="text-sm font-bold text-zinc-200">402 hp</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Panamera Card */}
          <Link to="/configurator" className="glass-card group overflow-hidden border border-white/5 flex flex-col transition-all duration-500 hover:bg-surface-bright">
            <div className="aspect-[16/9] overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Elegant metallic grey Porsche Panamera luxury sedan in front of a modern glass architecture building at dusk"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5qXGgomMI51BoJJrLMu7oVkrm_YIx6Pf0KVkpexoaaprAY91edvD4h05EaoMyEzZZNy2oHSLhC1aOC10KIbtkjyVErK9-CFHZyIMwyFnVbc2zXsLHaPMcWrRW8hSf7DCwBLZ2IyXfSHrgapUnsb7HFPCMOiujYwn58TcObMqMkhaDbYk1PiSzsIYN4zhuc1itexdfS5ICGTIO7uD9AyBV-ufiCoLC1ZTl6Qh3DjGnyArgl6DG7jacgQAsNZjUyjRLsrUylewFXdU"
              />
            </div>
            <div className="p-8 flex flex-col gap-6">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="font-headline text-3xl font-bold tracking-tight text-zinc-100">Panamera</h3>
                  <p className="font-label text-zinc-500 text-xs uppercase tracking-widest mt-1">Luxury Sport Sedan</p>
                </div>
                <span className="font-headline text-xl text-secondary font-light">From $92,400</span>
              </div>
              <div className="flex gap-4 border-t border-white/5 pt-6">
                <div className="flex flex-col">
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Horsepower</span>
                  <span className="text-sm font-bold text-zinc-200">325 hp</span>
                </div>
                <div className="flex flex-col border-l border-white/5 pl-4">
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Body Style</span>
                  <span className="text-sm font-bold text-zinc-200">Saloon</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Cayenne Card */}
          <Link to="/configurator" className="glass-card group overflow-hidden border border-white/5 flex flex-col transition-all duration-500 hover:bg-surface-bright">
            <div className="aspect-[16/9] overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Powerful Porsche Cayenne SUV driving through a misty forest road, headlights illuminating the fog, high contrast"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCauAN3_s1vOARYgRBUzqPOBR7aUoYuj86AvUdCCbkEW-oLKjy1oKy1d9ly0A2xtX0DcQK4I-vgVP09MECH3TZCgjic_4C-Z9D19semQZh02ScozEwvktb17czKMuv9US6hZqQCrVcteXdakxwmwfO_t5St_cKKAvmGY26qG0rymDy6AOkYvVMMzcOqpGZj_611XleBlnSGzcMIL5j4oFC_vJ9uu2yLird7y3aEyACcs9mdbGD6mHlMeBXwEJm1L8qRp1UJIeZC3uA"
              />
            </div>
            <div className="p-8 flex flex-col gap-6">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="font-headline text-3xl font-bold tracking-tight text-zinc-100">Cayenne</h3>
                  <p className="font-label text-zinc-500 text-xs uppercase tracking-widest mt-1">Versatile Performance</p>
                </div>
                <span className="font-headline text-xl text-secondary font-light">From $79,200</span>
              </div>
              <div className="flex gap-4 border-t border-white/5 pt-6">
                <div className="flex flex-col">
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Storage</span>
                  <span className="text-sm font-bold text-zinc-200">27.2 ft³</span>
                </div>
                <div className="flex flex-col border-l border-white/5 pl-4">
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Drivetrain</span>
                  <span className="text-sm font-bold text-zinc-200">AWD</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Macan Card */}
          <Link to="/configurator" className="glass-card group overflow-hidden border border-white/5 flex flex-col transition-all duration-500 hover:bg-surface-bright">
            <div className="aspect-[16/9] overflow-hidden">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Compact white Porsche Macan SUV parked in an urban setting with geometric concrete shadows and bright morning light"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8lEzSRC5zTbcuxzJvhPVcCaVX7pNVnvTgq7i-cdQ4gmkn5xRk7Lq46r0SFa7MTh36WTYcq0O4tCBQfqUIlbBQzrax_UEtlMV8cgjvbyyUO9QYrHlJ1lUY31dlSKT9jJf81qdjO-Luzn_bqZ-F4yrCfoVXrDchAZLu4nbDPPz1yf3Op97X8jmV7qGiIC_MjQ79_bpazdOBH-pwhYYB36_hdDx-9L7vXID0a7gTmNrSHyMu8f-Z2QYVjlzY8ypslOmE164SC-T_bmo"
              />
            </div>
            <div className="p-8 flex flex-col gap-6">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="font-headline text-3xl font-bold tracking-tight text-zinc-100">Macan</h3>
                  <p className="font-label text-zinc-500 text-xs uppercase tracking-widest mt-1">Compact SUV</p>
                </div>
                <span className="font-headline text-xl text-secondary font-light">From $60,900</span>
              </div>
              <div className="flex gap-4 border-t border-white/5 pt-6">
                <div className="flex flex-col">
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Weight</span>
                  <span className="text-sm font-bold text-zinc-200">4,151 lbs</span>
                </div>
                <div className="flex flex-col border-l border-white/5 pl-4">
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest">Agility</span>
                  <span className="text-sm font-bold text-zinc-200">High</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Custom Build Card */}
          <div className="relative group overflow-hidden border border-white/10 flex flex-col transition-all duration-500 bg-zinc-900 justify-center items-center p-12 text-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/10 to-transparent"></div>
            <span className="material-symbols-outlined text-secondary text-5xl mb-6">auto_awesome</span>
            <h3 className="font-headline text-3xl font-bold text-zinc-100 mb-4">Build Your Own</h3>
            <p className="font-body text-zinc-400 text-sm mb-8 max-w-[240px]">Create a bespoke masterpiece tailored to your exact driving specifications.</p>
            <Link to="/configurator" className="bg-transparent border border-secondary text-secondary px-8 py-3 font-label text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-secondary hover:text-on-secondary transition-all duration-500">
              Launch Configurator
            </Link>
          </div>
        </section>
      </main>
    </AnimatedPage>
  );
};

export default Models;
