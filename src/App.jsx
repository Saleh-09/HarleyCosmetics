import React ,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import OurDoctors from './Pages/OurDoctors';
import FAQsPage from './Pages/FAQsPage';
import ContactUs from './Pages/ContactUs';
import Blogs from './Pages/Blogs';
import BlogsDetailsPage from './Pages/BlogDetailsPage';
import FueHairTransplant from './Pages/FueHairTransplant';
import FloatingConsultationButton from './components/FloatingConsultajtionButton';


function App() {
  return (
    <div>
      <Router>
        <div className="w-screen min-h-screen overflow-x-hidden">
          {/* Navbar always visible */}
          <Navbar/>
          {/* Page Routes */}
          <main className="pt-[120px]">
             <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={< About />} />
                <Route path="/doctors" element={< OurDoctors />} />
                <Route path="/faqs" element={<FAQsPage/>} />
                <Route path="/contact" element={<ContactUs/>} />
                <Route path="/blog" element={<Blogs/>} />
                <Route path="/blog/:id" element={<BlogsDetailsPage />} />
                <Route path="/male/fue-hair-transplant" element={<FueHairTransplant />} />
              </Routes>
          </main>
        </div>
        <FloatingConsultationButton/>
      </Router>
    </div>
  )
}

export default App
