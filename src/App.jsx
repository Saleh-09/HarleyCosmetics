import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './Pages/Home';
import About from './Pages/About';
import OurDoctors from './Pages/OurDoctors';
import FAQs from './components/FAQs';
import FAQsPage from './Pages/FAQsPage';

function App() {
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
            <Route path="/doctors" element={<OurDoctors/>} />
            <Route path="/faqs" element={<FAQsPage/>} />
            <Route path="/contact" element={<ContactUs/>} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
