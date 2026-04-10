import React from 'react';
import AnimatedPage from '../components/AnimatedPage';

const Contact = () => {
  return (
    <AnimatedPage>
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[614px] w-full overflow-hidden flex items-end px-12 pb-24">
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover brightness-50"
              alt="Close-up of a sleek silver luxury sports car parked in a minimalist dark concrete architectural garage with dramatic overhead strip lighting"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO86VicWlVpCnC7-ljz0tNrFDRzPckyLxNuGeWAbRQjpOvnKPwV1FAe-BxH-EI0qHDmRJudIBAemEm58ia7ECmi5VnOf6rqzoggmukohplW2f0RVYZfYSgo6WNMibNHvV82nTEiVc3TBWlXS3m21dXawVwWUCv2FGY-a5AXd1oeByZcXB5ADb6hJfHyE8AIoQHtSlGQ0Pvq2S_aomn4UpOf_7jJ312DPFQ_An4VOtKHNpwIT3oUsui3U5yF9E6TZXzBg1rTRmKvRk"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-4xl">
            <p className="font-label text-secondary uppercase tracking-[0.2em] mb-4 text-xs font-semibold">Get in Touch</p>
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface mb-6 uppercase leading-none">
              Excellence <br/>Begins with a Dialogue
            </h1>
            <p className="font-body text-zinc-400 text-lg max-w-xl leading-relaxed">
              Whether you are seeking technical specifications, scheduling a private consultation, or exploring fleet opportunities, our specialists are at your disposal.
            </p>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="px-6 md:px-12 py-32 bg-surface max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-surface-container-low p-8 md:p-12 rounded-xl relative overflow-hidden">
                <h2 className="font-headline text-3xl font-bold uppercase tracking-tight mb-12">General Inquiry</h2>
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2 group">
                      <label className="font-label text-[10px] uppercase tracking-widest text-zinc-500 group-focus-within:text-secondary transition-colors">First Name</label>
                      <input
                        className="w-full bg-transparent border-b border-outline-variant focus:border-secondary focus:outline-none transition-colors py-2 text-on-surface font-body"
                        type="text"
                        required
                      />
                    </div>
                    <div className="space-y-2 group">
                      <label className="font-label text-[10px] uppercase tracking-widest text-zinc-500 group-focus-within:text-secondary transition-colors">Last Name</label>
                      <input
                        className="w-full bg-transparent border-b border-outline-variant focus:border-secondary focus:outline-none transition-colors py-2 text-on-surface font-body"
                        type="text"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2 group">
                    <label className="font-label text-[10px] uppercase tracking-widest text-zinc-500 group-focus-within:text-secondary transition-colors">Email Address</label>
                    <input
                      className="w-full bg-transparent border-b border-outline-variant focus:border-secondary focus:outline-none transition-colors py-2 text-on-surface font-body"
                      type="email"
                      required
                    />
                  </div>
                  <div className="space-y-2 group">
                    <label className="font-label text-[10px] uppercase tracking-widest text-zinc-500 group-focus-within:text-secondary transition-colors">Topic of Interest</label>
                    <select
                      className="w-full bg-transparent border-b border-outline-variant focus:border-secondary focus:outline-none transition-colors py-2 text-on-surface font-body appearance-none cursor-pointer"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23f7bd48'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M19.5 8.25l-7.5 7.5-7.5-7.5' /%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 0.5rem center',
                        backgroundSize: '1.25rem'
                      }}
                    >
                      <option className="bg-surface">Model Inquiry</option>
                      <option className="bg-surface">After Sales & Service</option>
                      <option className="bg-surface">Classic Restoration</option>
                      <option className="bg-surface">Corporate Relations</option>
                    </select>
                  </div>
                  <div className="space-y-2 group">
                    <label className="font-label text-[10px] uppercase tracking-widest text-zinc-500 group-focus-within:text-secondary transition-colors">Message</label>
                    <textarea
                      className="w-full bg-transparent border-b border-outline-variant focus:border-secondary focus:outline-none transition-colors py-2 text-on-surface font-body resize-none"
                      rows="4"
                      required
                    ></textarea>
                  </div>
                  <div className="pt-8">
                    <button
                      type="submit"
                      className="metal-sheen text-on-primary font-headline uppercase text-xs px-12 py-4 rounded-lg font-bold tracking-widest hover:brightness-110 transition-all duration-300 w-full sm:w-auto transform hover:-translate-y-1 active:scale-95"
                    >
                      Send Inquiry
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Support Details Column */}
            <div className="lg:col-span-5 space-y-16">
              <div>
                <h3 className="font-headline text-xs font-bold uppercase tracking-[0.3em] text-secondary mb-8">Customer Assistance</h3>
                <div className="space-y-12">
                  <div className="flex gap-6 group cursor-pointer">
                    <span className="material-symbols-outlined text-zinc-500 group-hover:text-secondary transition-colors text-2xl">phone_in_talk</span>
                    <div>
                      <p className="font-label text-[10px] uppercase tracking-widest text-zinc-500 mb-1 group-hover:text-zinc-300 transition-colors">Global Support Line</p>
                      <p className="text-xl font-headline font-bold">1 (800) PORSCHE</p>
                      <p className="text-xs text-zinc-500 mt-1 uppercase group-hover:text-zinc-400 transition-colors">Available 24/7 for Roadside Assistance</p>
                    </div>
                  </div>
                  <div className="flex gap-6 group cursor-pointer">
                    <span className="material-symbols-outlined text-zinc-500 group-hover:text-secondary transition-colors text-2xl">mail</span>
                    <div>
                      <p className="font-label text-[10px] uppercase tracking-widest text-zinc-500 mb-1 group-hover:text-zinc-300 transition-colors">Electronic Correspondence</p>
                      <p className="text-xl font-headline font-bold">concierge@porsche.com</p>
                    </div>
                  </div>
                  <div className="flex gap-6 group cursor-pointer">
                    <span className="material-symbols-outlined text-zinc-500 group-hover:text-secondary transition-colors text-2xl">chat_bubble</span>
                    <div>
                      <p className="font-label text-[10px] uppercase tracking-widest text-zinc-500 mb-1 group-hover:text-zinc-300 transition-colors">Digital Consultation</p>
                      <p className="text-xl font-headline font-bold">Live Chat</p>
                      <p className="text-xs text-zinc-500 mt-1 uppercase group-hover:text-zinc-400 transition-colors">Avg. Response: 2 Minutes</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-surface-container-high p-8 rounded-xl border-l-2 border-secondary">
                <h4 className="font-headline text-lg font-bold uppercase tracking-tight mb-4">Press & Media</h4>
                <p className="text-sm text-zinc-400 font-body leading-relaxed mb-6">For media inquiries, high-resolution assets, and corporate communications, please visit our dedicated newsroom portal.</p>
                <a href="#" className="text-secondary text-xs font-bold uppercase tracking-widest hover:underline flex items-center gap-2 group">
                  Access Newsroom <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Showroom Locations */}
        <section className="bg-surface-container-low py-32 px-6 md:px-12">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
              <div>
                <h2 className="font-headline text-xs font-bold uppercase tracking-[0.3em] text-secondary mb-4">Experience Centers</h2>
                <h3 className="font-headline text-4xl font-extrabold uppercase tracking-tighter">Global Showrooms</h3>
              </div>
              <div className="flex gap-4">
                <button className="bg-surface-bright p-4 rounded-full hover:bg-zinc-700 transition-colors text-zinc-300 hover:text-white">
                  <span className="material-symbols-outlined">west</span>
                </button>
                <button className="bg-surface-bright p-4 rounded-full hover:bg-zinc-700 transition-colors text-zinc-300 hover:text-white">
                  <span className="material-symbols-outlined">east</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Location 1 */}
              <div className="group cursor-pointer">
                <div className="aspect-[4/5] relative overflow-hidden rounded-xl mb-6">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt="Ultra-modern architectural flagship car showroom with floor to ceiling glass walls and minimalist grey interior during evening twilight"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmVaN_CHZhs6UgXjHpQBS4i3aVh2YLArDhtqykYWKtMCw1Y71qO1mt9twjahYnr2WdHdIYUS_kXSBL5qc45tc5dBox7g9hwGvLr1jcyHwZvqOaLhX7woyIE5fpEq_0RyAq-6vqw7FenUm8WGE2RC229lvrU8FRjg7of9kN2T9geMU8ZTqdUkSKUQR2JPcKtaCXl7u3vnJzJ7SmYxhHqZG3UhsH7zT7-igxVA4Xitkt7WwoT2-zh4JnXGZnQxXp2qn5-bZyBr_xVMs"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <span className="bg-secondary text-on-secondary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 inline-block">Flagship</span>
                    <p className="font-headline text-2xl font-bold uppercase">Stuttgart</p>
                  </div>
                </div>
                <div className="flex items-center justify-between opacity-60 group-hover:opacity-100 transition-opacity">
                  <p className="text-sm font-body">Porscheplatz 1, 70435 Stuttgart, DE</p>
                  <span className="material-symbols-outlined text-secondary">arrow_outward</span>
                </div>
              </div>

              {/* Location 2 */}
              <div className="group cursor-pointer">
                <div className="aspect-[4/5] relative overflow-hidden rounded-xl mb-6">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt="Modern geometric skyscraper facade with reflective dark glass panels at sunset with warm orange reflections"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnrUnopvFBzEXF2IlsIgeGZP7JECPwh29FS-UQs6iE_3enaiJzJu4iSUGFs9rxqFYbFmISdle872lAf8iYOOHUPiTi0wQn_qp6xU78oP3e0Nt0GbXZI0IU3EcAYXzFym3CLU5v4BQh8Q30npzx_Jc8TC4VSpyLBdzc9lhnYBfkpZkO_vfXTThEEwMcvsd8DEelgVrtukT20FFaZYjnUQiaetWTgBVcfTb-3uxKElyRd58LrqKD8Mqhfc42tCqhhlDzF3PII4cs9rY"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <span className="bg-zinc-800 text-zinc-300 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 inline-block">Consultation</span>
                    <p className="font-headline text-2xl font-bold uppercase">Atlanta</p>
                  </div>
                </div>
                <div className="flex items-center justify-between opacity-60 group-hover:opacity-100 transition-opacity">
                  <p className="text-sm font-body">One Porsche Dr, Atlanta, GA 30354</p>
                  <span className="material-symbols-outlined text-secondary">arrow_outward</span>
                </div>
              </div>

              {/* Location 3 */}
              <div className="group cursor-pointer">
                <div className="aspect-[4/5] relative overflow-hidden rounded-xl mb-6">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt="Sleek glass high-rise office building in a dense urban environment with deep blue sky reflections"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgg_SInOO1kJL_11Ozr7w6715m-rGB8rwcK24IpW5yNgyrz5U3AfcI33SjGs8cVoVPCkLyJ9AsBz-Y1PbS699hBaeSICmRWfcu0sPZvIkxMWm_xEuWdNzoRhGFKhWm24Inn9gIMuYTAmWGjW-zJLRtfk9wr8bt250z2OTmP_JBS3wCHLq1afJxUdHZsrFVHwznY7sDDKxO1L4eGUZeu9RJGKHH6OBPbl20EE9SmB8k5EQTl32Zl0PxQ6BQyukw9WrXUqeSD8I9IOQ"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <span className="bg-zinc-800 text-zinc-300 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 inline-block">Experience</span>
                    <p className="font-headline text-2xl font-bold uppercase">Shanghai</p>
                  </div>
                </div>
                <div className="flex items-center justify-between opacity-60 group-hover:opacity-100 transition-opacity">
                  <p className="text-sm font-body">No. 1838, Shiji Avenue, Pudong New Area</p>
                  <span className="material-symbols-outlined text-secondary">arrow_outward</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="h-[500px] w-full relative">
          <div className="absolute inset-0 grayscale contrast-125 opacity-40">
            <div className="w-full h-full bg-zinc-900 flex items-center justify-center overflow-hidden">
              <img
                className="w-full h-full object-cover"
                alt="Highly detailed minimalist dark grey world map texture with glowing golden dots marking major metropolitan areas"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP8RXQyumaNhz1n89wcFjyS4q8HqIPlSEzqlCCJD8Pl8Go4RxSbbq-QzIsszYPIFbXwF-2cV9Hst1aEXGQc1GEu2bsvJQkpiH7XNmQ2F4z7rzEveh8rL6tHZ6tg-dtY7A0MVeSz2NnGjIxd93XajuY0E6nUkuosVj00Ta_cDO-vZtYfiZqwf_8YngprfPProU40czzPSFvmpJnkeOmpoHQxpyvKqD7xyTaGwwXQ7an02jto1mmmr1NeYibPunlU1Q8pgHc7XB7iR0"
              />
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="bg-surface-container-highest/80 backdrop-blur-xl p-8 md:p-12 rounded-xl text-center border border-outline-variant/30 max-w-lg w-full">
              <span className="material-symbols-outlined text-secondary text-5xl mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              <h4 className="font-headline text-2xl font-bold uppercase mb-4">Find your nearest center</h4>
              <p className="font-body text-zinc-400 mb-8 max-w-xs mx-auto">Access our network of authorized dealers and experience centers worldwide.</p>
              <button className="bg-transparent border border-primary text-primary px-8 py-3 uppercase text-xs font-bold tracking-widest hover:bg-primary hover:text-on-primary transition-all rounded">
                Launch Dealer Locator
              </button>
            </div>
          </div>
        </section>
      </main>
    </AnimatedPage>
  );
};

export default Contact;
