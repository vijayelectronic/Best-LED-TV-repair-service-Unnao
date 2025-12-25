import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { Helmet } from 'react-helmet-async';

// Lazy loading pages for performance
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Gallery = lazy(() => import('./pages/Gallery'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <>
      <Helmet>
        <title>LED TV Repair in Unnao | Best TV Repair Service Near Me | Vijay Electronics</title>
        <meta name="description" content="Best LED TV repair service Unnao. We provide Samsung, Sony, LG, MI LED TV repair in Unnao near me. Home service available for LCD TV repair Unnao. Call 8090090051 for Smart TV repair & services." />
        <meta name="keywords" content="LED TV repair services in Unnao, LED TV repair in Unnao, LED TV repair near me, TV repair service in Unnao, LCD TV repair Unnao, Best LED TV repair service Unnao, Led tv repair in unnao near me, Samsung led tv repair in unnao, LED And LCD TV Repair Services, Led tv repair in unnao near me home service, Smart Tv Repair & Services in Unnao" />
        <meta property="og:title" content="LED TV Repair in Unnao | Best TV Repair Service Near Me" />
        <meta property="og:description" content="Expert LED/LCD TV Repair Services in Unnao. Doorstep service for all brands. Screen replacement, motherboard repair & more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vijayelectronics.netlify.app/" />
        <meta name="robots" content="index, follow" />
        {/* Placeholder for Google Site Verification - User can replace content with their own code later if needed, but the tag structure is ready */}
        <meta name="google-site-verification" content="google-site-verification-code-goes-here" />
      </Helmet>

      <Layout>
        <Suspense fallback={
          <div className="flex h-screen w-full items-center justify-center bg-background text-primary">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </Layout>
    </>
  );
}

export default App;
