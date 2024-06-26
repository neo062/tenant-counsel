import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loading from './components/Loading';
import { Toaster } from "@/components/ui/toaster"
const Home = React.lazy(() => import('./pages/Home'));
const TenantRight = React.lazy(() => import('./pages/TenantRight/TenantRight'));
const ResourcesAndNews = React.lazy(() => import('./pages/ResourcesAndNews./ResourcesAndNews'))
const ContactUs = React.lazy(() => import('./pages/ContactUs/ContactUs'));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tenant-right" element={<TenantRight />} />
            <Route path="/resources-and-news" element={<ResourcesAndNews />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </Suspense>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
