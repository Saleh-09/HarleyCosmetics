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
  const [open, setOpen] = useState(false);

  // Hide button on Contact Us page
  if (location.pathname === "/contact") return null;

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
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

      {/* Popup Form */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-[90%] max-w-lg relative">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
              onClick={() => setOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-xl font-semibold text-[#3C2031] mb-4">
              Book Your Free Consultation
            </h2>

            <form className="space-y-4">
              {/* Name */}
              <input
                type="text"
                placeholder="Name"
                className="w-full border rounded-lg px-4 py-2"
              />
              {/* Email */}
              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded-lg px-4 py-2"
              />
              {/* Phone */}
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border rounded-lg px-4 py-2"
              />
              {/* Postal Code */}
              <input
                type="text"
                placeholder="Postal Code"
                className="w-full border rounded-lg px-4 py-2"
              />
              {/* Treatment Dropdown */}
              <select className="w-full border rounded-lg px-4 py-2">
                <option value="">Select Treatment</option>
                <option>Fue Hair Transplant</option>
                <option>Beard Transplant</option>
                <option>Eyebrow Transplant</option>
                <option>Afro Hair Transplant</option>
                <option>Female Hair Loss</option>
                <option>Un-Shaven Hair Transplant</option>
              </select>
              {/* Consultation Medium */}
              <select className="w-full border rounded-lg px-4 py-2">
                <option value="">Preferred Medium</option>
                <option>Whatsapp</option>
                <option>Zoom</option>
              </select>
              {/* Heard About Us */}
              <select className="w-full border rounded-lg px-4 py-2">
                <option value="">How did you hear about us?</option>
                <option>Google Ads</option>
                <option>Twitter</option>
                <option>Instagram</option>
              </select>
              {/* Message */}
              <textarea
                placeholder="Message"
                className="w-full border rounded-lg px-4 py-2"
                rows="3"
              ></textarea>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#3C2031] text-white font-semibold py-2 rounded-lg hover:bg-[#5a2f47]"
              >
                Submit
              </button>
            </form>
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
