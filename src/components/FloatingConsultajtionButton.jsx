import React from "react";
import { useState } from "react";
import { X, ChevronDown } from "lucide-react";
const FloatingConsultationButton = () => {
const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postcode: "",
    treatment: "",
    consultationMedium: "",
    heardAboutUs: "",
    message: "",
  })

  // ✅ Fixed: No TypeScript annotations
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
    setIsModalOpen(false);
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      postcode: "",
      treatment: "",
      consultationMedium: "",
      heardAboutUs: "",
      message: "",
    });
  };

    return(
        <>
      {/* Floating Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="
          fixed bottom-6 left-1/2 -translate-x-1/2 
          md:right-6 md:left-auto md:translate-x-0
          bg-[#3C2031] hover:bg-[#533547] text-[#FCD9A1] 
          px-9 py-7 rounded-full shadow-lg hover:shadow-xl 
          transition-all duration-300 z-50 font-medium text-base
        "
      >
        Book Free Consultation
      </button>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="
          fixed inset-0 flex items-center justify-center 
          md:inset-auto bottom-10 md:bottom-20 md:right-6 md:block 
          z-50 md:max-h-[calc(100vh-8rem)]
        ">
          {/* Modal Content */}
          <div className="bg-white rounded-xl w-96 max-w-[calc(100vw-2rem)] shadow-2xl border border-gray-200">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 pb-4">
              <h2 className="text-gray-800 text-xl font-bold text-center flex-1">Book Free Consultation</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-600 hover:text-gray-800 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleSubmit} className="px-6 pb-6 space-y-4 max-h-80 overflow-y-auto">
              {/* Full Name */}
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#5d3a5d] focus:border-transparent"
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#5d3a5d] focus:border-transparent"
              />

              {/* Phone Number */}
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#5d3a5d] focus:border-transparent"
              />

              {/* Postcode */}
              <input
                type="text"
                name="postcode"
                placeholder="Postcode"
                value={formData.postcode}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#5d3a5d] focus:border-transparent"
              />

              {/* Treatment Dropdown */}
              <div className="relative">
                <select
                name="treatment"
                value={formData.treatment}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#5d3a5d] focus:border-transparent appearance-none cursor-pointer"
              >
                <option value="">Select Treatment</option>
                <option value="fue-hair-transplant">Fue Hair Transplant</option>
                <option value="beard-transplant">Beard Transplant</option>
                <option value="eyebrow-transplant">Eyebrow Transplant</option>
                <option value="afro-hair-transplant">Afro Hair Transplant</option>
                <option value="female-hair-loss">Female Hair Loss</option>
                <option value="un-shaven-hair-transplant">Un-Shaven Hair Transplant</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>

              {/* Consultation Medium */}
              <div className="relative">
                <select
                  name="consultationMedium"
                  value={formData.consultationMedium}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#5d3a5d] focus:border-transparent appearance-none cursor-pointer"
                >
                  <option value="">Preferred Consultation Medium</option>
                  <option value="whatsapp">WhatsApp</option>
                  <option value="zoom">Zoom</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
             
              {/* Heard About Us */}
              <div className="relative">
                <select
                  name="heardAboutUs"
                  value={formData.heardAboutUs}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#5d3a5d] focus:border-transparent appearance-none cursor-pointer"
                >
                  <option value="">How did you hear about us?</option>
                  <option value="google-ads">Google Ads</option>
                  <option value="twitter">Twitter</option>
                  <option value="instagram">Instagram</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
             

              {/* Message */}
              <textarea
                name="message"
                placeholder="Your Message (Optional)"
                value={formData.message}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#5d3a5d] focus:border-transparent resize-none"
              />

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#3C2031] hover:bg-[#533547] text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 mt-6"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
    )
}
export default FloatingConsultationButton