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
import BeardTransplant from './Pages/BeardTransplant';
import AfroHairTransplant from './Pages/AfroHairTransplant';
import EyeBrowTransplant from './Pages/EyeBrowTransplant';
import UnShavenHairTransplant from './Pages/UnShavenHairTransplant';
import FemaleHairTransplant from './Pages/FemaleHairTransplant';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <div>
      <Router>
        <div className="w-screen min-h-screen overflow-x-hidden">
          <ScrollToTop/>
          {/* Navbar always visible */}
          <Navbar/>          
          {/* Page Routes */}
          <main className="pt-16">
             <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={< About />} />
                <Route path="/doctors" element={< OurDoctors />} />
                <Route path="/faqs" element={<FAQsPage/>} />
                <Route path="/contact" element={<ContactUs/>} />
                <Route path="/blog" element={<Blogs/>} />
                <Route path="/blog/:id" element={<BlogsDetailsPage />} />
                <Route path="/male/fue-hair-transplant" element={<FueHairTransplant />} />
                <Route path="/male/beard-transplant" element={<BeardTransplant/>} />
                <Route path='/male/afro-hair-transplant' element={<AfroHairTransplant/>} />
                <Route path='/male/eyebrow-transplant' element={<EyeBrowTransplant/>} />
                <Route path='/male/unshaven-hair-transplant' element={<UnShavenHairTransplant/>} />
                <Route path="/female/fue-hair-transplant" element={<FueHairTransplant />} />
                <Route path="/female/beard-transplant" element={<BeardTransplant/>} />
                <Route path='/female/afro-hair-transplant' element={<AfroHairTransplant/>} />
                <Route path='/female/eyebrow-transplant' element={<EyeBrowTransplant/>} />
                <Route path='/female/unshaven-hair-transplant' element={<UnShavenHairTransplant/>} />
                <Route path='/female/female-hair-transplant' element={<FemaleHairTransplant/>} />
              </Routes>
          </main>
        </div>
        <FloatingConsultationButton/>
      </Router>
    </div>
  )
}

export default App
