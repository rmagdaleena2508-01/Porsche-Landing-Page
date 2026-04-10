import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Models from './pages/Models';
import Configurator from './pages/Configurator';
import PreBooking from './pages/PreBooking';
import Contact from './pages/Contact';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/models" element={<Models />} />
        <Route path="/configurator" element={<Configurator />} />
        <Route path="/prebooking" element={<PreBooking />} />
        <Route path="/contact" element={<Contact />} />

        {/* Fallbacks */}
        <Route path="/discover" element={<Home />} />
        <Route path="/ownership" element={<Home />} />
        <Route path="/motorsport" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <AnimatedRoutes />
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
