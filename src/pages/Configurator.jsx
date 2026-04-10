import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';

const Configurator = () => {
  const [selectedColor, setSelectedColor] = useState('Guards Red');

  const paintOptions = [
    { name: 'Guards Red', bgClass: 'bg-[#D5001C]' },
    { name: 'Shark Blue', bgClass: 'bg-[#004C97]' },
    { name: 'Crayon', bgClass: 'bg-[#B1B3B3]' },
  ];

  return (
    <AnimatedPage>
      <main>
        {/* Hero Section */}
        <section className="relative h-screen w-full flex items-end overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover"
              alt="Side profile of a sleek charcoal grey Porsche 911 GT3 parked in a minimalist concrete architectural space with dramatic cinematic lighting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmMYsT3QuPwSN9oJVGpUzthc7HYKGF42wyC0LkviHUOR84x1d2lH4mjjF8LzEb3JNdiBH1hx9qdovIl_gOK8i16nC4FkduDBxaWB-pLOBKWRzUmsxzndO31CtdDcAWGZhp1brOoUnEutvtROUgWprtTpdge9MONXkP45vDHwG6edu9q3qqRv58UB-09OBhzG-UNf4SVma9uJ0Ki2Wl4DUl-06FAW-y7ysuBIo0f7WYjB8uzP6URu9FKhoeVmD3pBn5dMYO6dZucuA"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          <div className="relative z-10 w-full px-6 md:px-12 pb-24 max-w-screen-2xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl mt-20">
              <span className="font-label text-secondary uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">New Generation</span>
              <h1 className="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter text-primary-fixed mb-6 uppercase">911 GT3</h1>
              <p className="font-body text-xl md:text-2xl text-zinc-400 font-light max-w-md italic border-l-2 border-secondary pl-6">
                "The soul of the 911."
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Link to="/prebooking" className="text-center bg-gradient-to-r from-primary to-primary-container text-on-primary px-12 py-5 font-headline font-extrabold uppercase tracking-widest text-sm kinetic-transition hover:scale-105 rounded">
                Pre-Book Now
              </Link>
            </div>
          </div>
        </section>

        {/* Technical Specs Grid */}
        <section className="py-24 px-6 md:px-12 bg-surface">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-outline-variant/10">
              <div className="bg-surface-container-low p-12 kinetic-transition hover:bg-surface-container-high group">
                <span className="font-label text-zinc-500 uppercase tracking-widest text-xs block mb-2">Performance</span>
                <div className="flex items-baseline gap-2">
                  <span className="font-headline text-5xl font-black text-primary-fixed">502</span>
                  <span className="font-headline text-xl text-zinc-400 uppercase">HP</span>
                </div>
                <div className="mt-8 h-0.5 w-full bg-surface-variant relative overflow-hidden">
                  <div className="absolute left-0 top-0 h-full w-4/5 bg-secondary shadow-[0_0_10px_#f7bd48]"></div>
                </div>
              </div>
              <div className="bg-surface-container-low p-12 kinetic-transition hover:bg-surface-container-high group">
                <span className="font-label text-zinc-500 uppercase tracking-widest text-xs block mb-2">Acceleration</span>
                <div className="flex items-baseline gap-2">
                  <span className="font-headline text-5xl font-black text-primary-fixed">3.2</span>
                  <span className="font-headline text-xl text-zinc-400 uppercase">S</span>
                </div>
                <span className="font-label text-zinc-500 uppercase text-[10px] mt-2 block tracking-widest">0-60 MPH</span>
                <div className="mt-8 h-0.5 w-full bg-surface-variant relative overflow-hidden">
                  <div className="absolute left-0 top-0 h-full w-full bg-secondary shadow-[0_0_10px_#f7bd48]"></div>
                </div>
              </div>
              <div className="bg-surface-container-low p-12 kinetic-transition hover:bg-surface-container-high group">
                <span className="font-label text-zinc-500 uppercase tracking-widest text-xs block mb-2">Maximum Track Speed</span>
                <div className="flex items-baseline gap-2">
                  <span className="font-headline text-5xl font-black text-primary-fixed">197</span>
                  <span className="font-headline text-xl text-zinc-400 uppercase">MPH</span>
                </div>
                <div className="mt-8 h-0.5 w-full bg-surface-variant relative overflow-hidden">
                  <div className="absolute left-0 top-0 h-full w-[98%] bg-secondary shadow-[0_0_10px_#f7bd48]"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Color Configuration */}
        <section className="py-24 px-6 md:px-12 bg-surface-container-lowest">
          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-secondary/5 rounded-xl blur-3xl group-hover:bg-secondary/10 kinetic-transition"></div>
              <img
                className="relative rounded-lg w-full object-cover"
                alt="High-resolution close-up of the Porsche 911 GT3's rear wing and tail lights focusing on the metallic finish and precision aerodynamics"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTRuPlDDf1MLjvFuKJcYN0HktIXDqOTKxUTyLgmpLFYtu-6LSMR3RABkL5y2cRkD8AhUYPNJSTezXjdlQa2EvPu_zGSUjDaZkyRs-DtzfHCtY4VAtZXS8s1wHsUuWd9gZAdQUzlLis7Av-1wUo90O9PWh-GouvUSPSiRow1fumvZ-jwSQXPgRzHk_UXqOcUCsrPEo1j2ZHfX8IL3HR8xmfcXX1fV7shzdX4an6THpOZ9p7G1xi2ePoAHqMDmOFB0xCGEgSFDgPe5s"
              />
            </div>
            <div className="flex flex-col gap-12">
              <div>
                <h2 className="font-headline text-4xl font-bold text-primary mb-4">Personalization</h2>
                <p className="font-body text-zinc-400 max-w-md leading-relaxed">Select your expression of performance. Our heritage colors are engineered for visual impact and durability.</p>
              </div>
              <div className="flex flex-col gap-8">
                <div>
                  <span className="font-label text-zinc-500 text-xs uppercase tracking-widest mb-4 block">Paint Selection</span>
                  <div className="flex gap-4">
                    {paintOptions.map((option) => (
                      <div key={option.name} className="flex flex-col items-center gap-3">
                        <button
                          onClick={() => setSelectedColor(option.name)}
                          className={`w-12 h-12 rounded-full ${option.bgClass} kinetic-transition ${
                            selectedColor === option.name
                              ? 'ring-2 ring-offset-4 ring-offset-surface ring-secondary'
                              : 'hover:ring-2 hover:ring-offset-4 hover:ring-zinc-700'
                          }`}
                        ></button>
                        <span className={`font-label text-[10px] uppercase tracking-tighter ${
                          selectedColor === option.name ? 'text-primary' : 'text-zinc-500'
                        }`}>
                          {option.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Gallery */}
        <section className="py-24 px-6 md:px-12 bg-surface">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-12 grid-rows-2 gap-4 h-auto md:h-[800px]">
              <div className="col-span-12 md:col-span-8 row-span-1 overflow-hidden relative group h-64 md:h-auto">
                <img
                  className="w-full h-full object-cover kinetic-transition group-hover:scale-105"
                  alt="Top view of the Porsche 911 GT3 interior showing carbon fiber bucket seats and Alcantara steering wheel"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEESfpP9jNj-zzB0wmEzDmMe4LObfMK8N5iKSLkWNC1c1w-gCrKbytZcGI0gn670Q6GlCSBcIboZJ7Xpw8UuAYDkRLJfssbMt0jxXcSPJ87AeGaWcbwhtDl_oDWx9_tLG9K5vId-hsrxC0eOnHsBqbHLIsIjW9419D-ETW9-els4lqqxY24xq_W7Vy-oWK0QsgrgZfjXLoMmTKoww6_cvOMF2GEVoYFHKW7sKFagX47vSBVI--Z4d4xJA4Zet_9iVgS8G7FTt9z9Q"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent kinetic-transition"></div>
              </div>
              <div className="col-span-12 md:col-span-4 row-span-1 overflow-hidden relative group h-64 md:h-auto">
                <img
                  className="w-full h-full object-cover kinetic-transition group-hover:scale-105"
                  alt="Extreme close-up of the GT3 center-lock wheel and yellow carbon ceramic brake calipers"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCE3XUibz5g8nQJJna4S2EzH7AAsgh_IwAACC2u7WIZlFxcYG9Mr6OZfiplExo52f4U8ZSmtJU-Hi08yML8k6Tq9m8h9Dnjn7c92vfqT28WXQATx-IlLwCuBftr7fQNaCagHcN-BjW2u--TAGN9VHi6ROuYdZOn8-s84qVWtIWQuyEe6QGSx_Nez-h37aoWntQOTujhYDnd112kb6oaNByc3i-qNNd08GyRX0hNLVNjVsY2D5uiwp5aROQWbBWeOJnkyPhnpFLzju4"
                />
              </div>
              <div className="col-span-12 md:col-span-4 row-span-1 overflow-hidden relative group h-64 md:h-auto">
                <img
                  className="w-full h-full object-cover kinetic-transition group-hover:scale-105"
                  alt="Porsche 911 GT3 headlight detail with 4-point LED daytime running lights"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlA86YoLMeXjb1W0Lfw4uUi4U0vABngqId8u7nZbVCiAZnQ2N9mhP0qzBBSpJ20aWPfvs47zCVgvkSZV7_QDclaA3N4PFxByLdQiSHr9gkeQO3JjN2i1XHj3CUOdnvLDZLJjNyta9zTOtYtAxJTzJeYt8zryYH-UAmiHgRNC4hLCOmLveTKULAuB-DN_VvWctXUKW6acpE2FqH8KRdoXpPafFpkKBz5jrl83vCbVVEY0bX_50ETknJ_4EWfikil9YRXnp8u68vWak"
                />
              </div>
              <div className="col-span-12 md:col-span-8 row-span-1 overflow-hidden relative group h-64 md:h-auto">
                <img
                  className="w-full h-full object-cover kinetic-transition group-hover:scale-105"
                  alt="Full rear view of the 911 GT3 with swan-neck rear wing deployed against a misty race track backdrop"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_On7bWTgtfqQ6lfTnqKxps2SZONFqHwq0UdFis40ooeiklct5EjCxNEnjVtWcStCZzVLyYkUqSK0TqnrEQJStEoQnzYsPJkeVwgogcOcTu9x4VL4wyBnTwoo8myevNu1-cO-xZAr1-9PbrzMTaglXC6YMI0IiGUoESzqQ1uhz1QjnrBE8RScUIFDQ0k6DnborcZ9Xh-_W2Q91sPbKF_8QdEb9Fwuq2y0s6u7mINiq7Y1SkYMY6wy95XMfeoObg0r_Ohl9UBrbOzg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Footer CTA (Mobile Only) */}
        <div className="md:hidden fixed bottom-0 left-0 w-full p-4 glass-nav z-50 border-t border-white/5">
          <Link to="/prebooking" className="block text-center w-full bg-secondary text-on-secondary py-4 font-headline font-bold uppercase tracking-widest text-sm rounded-lg">
            Pre-Book Now
          </Link>
        </div>
      </main>
    </AnimatedPage>
  );
};

export default Configurator;
