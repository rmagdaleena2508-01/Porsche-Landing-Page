import React, { useState } from 'react';
import AnimatedPage from '../components/AnimatedPage';

const PreBooking = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <AnimatedPage>
      <main className="relative min-h-screen pt-32 pb-24 overflow-hidden">
        {/* Ambient Background Image */}
        <div className="fixed inset-0 -z-10">
          <img
            className="w-full h-full object-cover opacity-40"
            alt="dramatic side profile of a dark grey sleek supercar in a minimalist dark studio with soft top-down lighting and atmospheric fog"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRVTzDsn-GWO-E90TUeCqEEWxj-eXJqgOu9FNQZr24G_PRsL6xD7-muDw_0m0oiTjSwwWdZr8Oyc5ji3TPIAU74lTVFQbiZ4vIEGqDkxz_s92B2wnpVYwOPHwKqmvKhtER6lPhz3NvMYUUqTxWX75yvtKe_nFVrTqDV55a02NBgN0Sh05Fyb8ErgLfJjiRCAv_gnwOqVbD1wKDzGNRuev8RL1Xp6qXQliShshh0cw_kyF30uTFAwauOqTqDNxeHIAFeEHYIZ8lKRA"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface/20 via-surface/80 to-surface"></div>
        </div>

        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Editorial Content */}
          <div className="lg:col-span-5 pt-12">
            <p className="font-headline text-secondary tracking-[0.2em] uppercase text-xs mb-4">Securing Excellence</p>
            <h1 className="font-headline text-6xl md:text-7xl font-extrabold tracking-tighter text-on-surface mb-8 leading-none">
              PRE-BOOKING <br/>EXCLUSIVITY.
            </h1>
            <p className="text-on-surface-variant text-lg max-w-md leading-relaxed mb-12">
              Enter the inner circle. By submitting your pre-booking request, you gain priority access to our production queue and bespoke consultation services.
            </p>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-outline-variant"></div>
                <span className="font-label text-[0.65rem] tracking-[0.3em] uppercase text-outline">Technical Priority 01</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-outline-variant"></div>
                <span className="font-label text-[0.65rem] tracking-[0.3em] uppercase text-outline">Global Logistics Network</span>
              </div>
            </div>
          </div>

          {/* Right Side: The Kinetic Form Container */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="glass-panel w-full max-w-xl p-8 md:p-12 rounded-xl shadow-2xl border border-white/5 relative overflow-hidden bg-surface-container/50">
              {/* Subtle Glow Ornament */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-secondary/10 blur-[100px] rounded-full"></div>

              <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
                {/* Input Group: Full Name */}
                <div className="group">
                  <label htmlFor="fullname" className="block font-label text-[0.65rem] tracking-[0.2em] uppercase text-outline group-focus-within:text-secondary transition-colors duration-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    placeholder="ALEXANDER VANCE"
                    required
                    className="w-full bg-surface-container-lowest border-0 border-b border-outline-variant focus:ring-0 focus:border-secondary focus:outline-none transition-all duration-300 text-on-surface font-headline tracking-widest px-0 py-3 placeholder:text-surface-container-highest uppercase text-sm"
                  />
                </div>

                {/* Grid for Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="group">
                    <label htmlFor="email" className="block font-label text-[0.65rem] tracking-[0.2em] uppercase text-outline group-focus-within:text-secondary transition-colors duration-300 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="CLIENT@STUDIO.COM"
                      required
                      className="w-full bg-surface-container-lowest border-0 border-b border-outline-variant focus:ring-0 focus:border-secondary focus:outline-none transition-all duration-300 text-on-surface font-headline tracking-widest px-0 py-3 placeholder:text-surface-container-highest uppercase text-sm"
                    />
                  </div>
                  <div className="group">
                    <label htmlFor="phone" className="block font-label text-[0.65rem] tracking-[0.2em] uppercase text-outline group-focus-within:text-secondary transition-colors duration-300 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+1 555 0123"
                      required
                      className="w-full bg-surface-container-lowest border-0 border-b border-outline-variant focus:ring-0 focus:border-secondary focus:outline-none transition-all duration-300 text-on-surface font-headline tracking-widest px-0 py-3 placeholder:text-surface-container-highest uppercase text-sm"
                    />
                  </div>
                </div>

                {/* Input Group: City */}
                <div className="group">
                  <label htmlFor="city" className="block font-label text-[0.65rem] tracking-[0.2em] uppercase text-outline group-focus-within:text-secondary transition-colors duration-300 mb-2">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="MONACO"
                    required
                    className="w-full bg-surface-container-lowest border-0 border-b border-outline-variant focus:ring-0 focus:border-secondary focus:outline-none transition-all duration-300 text-on-surface font-headline tracking-widest px-0 py-3 placeholder:text-surface-container-highest uppercase text-sm"
                  />
                </div>

                {/* Input Group: Selected Car */}
                <div className="group">
                  <label htmlFor="car" className="block font-label text-[0.65rem] tracking-[0.2em] uppercase text-outline group-focus-within:text-secondary transition-colors duration-300 mb-2">Selected Car</label>
                  <select
                    id="car"
                    name="car"
                    defaultValue=""
                    required
                    className="w-full bg-surface-container-lowest border-0 border-b border-outline-variant focus:ring-0 focus:border-secondary focus:outline-none transition-all duration-300 text-on-surface font-headline tracking-widest px-0 py-3 uppercase text-sm cursor-pointer appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23f7bd48'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M19.5 8.25l-7.5 7.5-7.5-7.5' /%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 0.5rem center',
                      backgroundSize: '1.25rem'
                    }}
                  >
                    <option disabled value="">Select Model</option>
                    <option value="911-gt3">911 GT3 RS</option>
                    <option value="taycan">Taycan Turbo GT</option>
                    <option value="718-spyder">718 Spyder RS</option>
                    <option value="panamera">Panamera Turbo E-Hybrid</option>
                  </select>
                </div>

                {/* CTA */}
                <div className="pt-6">
                  <button
                    type="submit"
                    className="kinetic-gradient w-full py-5 text-on-primary font-headline font-extrabold tracking-[0.25em] uppercase text-xs rounded shadow-lg hover:shadow-secondary/20 transition-all duration-500 transform hover:-translate-y-1 active:scale-95"
                  >
                    Confirm Pre-Booking
                  </button>
                  <p className="text-center text-[0.6rem] text-outline mt-6 tracking-widest uppercase">By confirming, you agree to our terms of priority allocation.</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Success State Modal Overlay */}
      {isSuccess && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-surface/90 backdrop-blur-md"></div>
          <div className="relative glass-panel border border-secondary/30 p-12 max-w-2xl w-full rounded-xl text-center shadow-[0_0_80px_-20px_rgba(247,189,72,0.3)] bg-surface-container/80">
            <div className="mb-8 flex justify-center">
              <div className="w-20 h-20 rounded-full border border-secondary flex items-center justify-center">
                <span className="material-symbols-outlined text-4xl text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
            </div>
            <h2 className="font-headline text-3xl font-black tracking-tight text-on-surface mb-6 uppercase">Order Confirmed</h2>
            <p className="text-lg text-on-surface-variant font-body leading-relaxed mb-10">
              Your order has been confirmed — your supercar has been pre-booked and it’s racing fast to you.
            </p>
            <button
              onClick={() => setIsSuccess(false)}
              className="border border-outline-variant px-10 py-3 font-headline text-xs tracking-widest uppercase text-on-surface hover:bg-on-surface hover:text-surface transition-all duration-500"
            >
              View Reservation Details
            </button>
          </div>
        </div>
      )}
    </AnimatedPage>
  );
};

export default PreBooking;
