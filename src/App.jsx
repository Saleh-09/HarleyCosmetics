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

function FloatingButton() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  if (location.pathname === "/contact") return null;

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
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
      </button>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl">
            {/* Header (fixed at top of modal) */}
            <div className="flex justify-between items-center border-b px-6 py-4 sticky top-0 bg-white rounded-t-2xl z-10">
              <h2 className="text-xl font-semibold text-[#3C2031]">
                Book Free Consultation
              </h2>
              <button onClick={() => setIsOpen(false)}>
                <X className="w-6 h-6 text-gray-500 hover:text-gray-700" />
              </button>
            </div>

            {/* Scrollable form */}
            <div className="px-6 py-4 space-y-4 max-h-[70vh] overflow-y-auto">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-[#7985A0]">Name</label>
                <input type="text" className="mt-1 w-full border rounded-lg px-3 py-2" />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-[#7985A0]">Email</label>
                <input type="email" className="mt-1 w-full border rounded-lg px-3 py-2" />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-[#7985A0]">Phone Number</label>
                <input type="tel" className="mt-1 w-full border rounded-lg px-3 py-2" />
              </div>

              {/* Postal Code */}
              <div>
                <label className="block text-sm font-medium text-[#7985A0]">Postal Code</label>
                <input type="text" className="mt-1 w-full border rounded-lg px-3 py-2" />
              </div>

              {/* Treatment Dropdown */}
              <div>
                <label className="block text-sm font-medium text-[#7985A0]">Treatment</label>
                <select className="mt-1 w-full border rounded-lg px-3 py-2">
                  <option>Fue Hair Transplant</option>
                  <option>Beard Transplant</option>
                  <option>Eyebrow Transplant</option>
                  <option>Afro Hair Transplant</option>
                  <option>Female Hair Loss</option>
                  <option>Un-Shaven Hair Transplant</option>
                </select>
              </div>

              {/* Consultation Medium */}
              <div>
                <label className="block text-sm font-medium text-[#7985A0]">Consultation Medium</label>
                <select className="mt-1 w-full border rounded-lg px-3 py-2">
                  <option>Whatsapp</option>
                  <option>Zoom</option>
                </select>
              </div>

              {/* Heard About Us */}
              <div>
                <label className="block text-sm font-medium text-[#7985A0]">How did you hear about us?</label>
                <select className="mt-1 w-full border rounded-lg px-3 py-2">
                  <option>Google Ads</option>
                  <option>Twitter</option>
                  <option>Instagram</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-[#7985A0]">Message</label>
                <textarea className="mt-1 w-full border rounded-lg px-3 py-2" rows="4"></textarea>
              </div>

              {/* Submit Button */}
              <button className="w-full bg-[#3C2031] text-white py-3 rounded-lg hover:bg-[#5a2e47]">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function App() {
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

          {/* Floating Button (hidden on contact page) */}
          <FloatingButton />
        </div>
      </Router>
    </div>
  )
}

export default App
