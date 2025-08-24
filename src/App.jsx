import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './Pages/Home';
import About from './Pages/About';
import OurDoctors from './Pages/OurDoctors';
import FAQsPage from './Pages/FAQsPage';
import ContactUs from "./Pages/ContactUs";
import { ArrowRight } from "lucide-react";

function FloatingButton() {
  const location = useLocation();

  // Hide button on Contact Us page
  if (location.pathname === "/contact") return null;

  return (
    <Link
      to="/contact"
      className="
        fixed bottom-4 
        right-1/2 translate-x-1/2
        sm:right-6 sm:translate-x-0 
        bg-[#FCD9A1] hover:bg-yellow-500 
        text-[#3C2031] font-semibold 
        px-6 py-3 rounded-2xl text-lg 
        flex items-center justify-center gap-2 
        shadow-xl z-50 whitespace-nowrap
      "
    >
      Book Free Consultation
      <ArrowRight className="w-5 h-5" />
    </Link>
  );
}

function App() {
  const location = useLocation();

  // Hide button on Contact Us page
  if (location.pathname === "/contact") return null;

  return (
    <div>
      <Router>
        <div className="w-screen min-h-screen overflow-x-hidden">
          {/* Navbar always visible */}
          <Navbar />

          {/* Page Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/doctors" element={<OurDoctors />} />
            <Route path="/faqs" element={<FAQsPage />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>

          {/* Floating Button (hidden on contact page) */}
          <FloatingButton />
        </div>
      </Router>
    </div>
  )
}

export default App
