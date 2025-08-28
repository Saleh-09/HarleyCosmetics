import React ,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ArrowRight, X } from "lucide-react";
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import OurDoctors from './Pages/OurDoctors';
import FAQsPage from './Pages/FAQsPage';
import ContactUs from './Pages/ContactUs';
import Blogs from './Pages/Blogs';
import BlogsDetailsPage from './Pages/BlogDetailsPage';
import FueHairTransplant from './Pages/FueHairTransplant';
import ContactFormModal from './components/ContactFormModal';

function FloatingButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="fixed right-6 bottom-6 bg-[#3C2031] text-[#FCD9A1] px-6 py-3 rounded-full shadow-lg hover:bg-[#4a2d4a] transition z-50"
    >
      Book Free Consultation
    </button>
  );
}

function App() {
  const location = useLocation(); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <Router>
        <div className="w-screen min-h-screen overflow-x-hidden">
          {/* Navbar always visible */}
          <Navbar/>

          {/* Page Routes */}
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
          {/* Floating Button (hidden only on /contact page) */}
          {location.pathname !== "/contact" && (
            <FloatingButton onClick={() => setIsModalOpen(true)} />
          )}

          {/* Contact Form Modal */}
          <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
      </Router>
    </div>
  )
}

export default App
