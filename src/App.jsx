import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import PageTransition from './components/PageTransition';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const Products = lazy(() => import('./pages/Products'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const DesignStudio = lazy(() => import('./pages/DesignStudio'));
const Catalogues = lazy(() => import('./pages/Catalogues'));
const E1Standards = lazy(() => import('./pages/E1Standards'));
const Sustainability = lazy(() => import('./pages/Sustainability'));

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/designstudio" element={<DesignStudio />} />
        <Route path="/catalogues" element={<Catalogues />} />
        <Route path="/e1" element={<E1Standards />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-industrial-light dark:bg-industrial-dark text-industrial-dark dark:text-industrial-light font-sans uppercase tracking-widest text-sm">Loading...</div>}>
          <AnimatedRoutes />
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
