import React from "react";
import { useState } from "react";
import { X, ChevronDown } from "lucide-react";

const FloatingConsultationButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postcode: "",
    treatment: "",
    consultationMedium: "",
    heardAboutUs: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsModalOpen(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      postcode: "",
      treatment: "",
      consultationMedium: "",
      heardAboutUs: "",
      preferredDate: "",
      preferredTime: "",
      message: "",
    });
  };

  return (
    <>
      {!isModalOpen && (
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 
          md:right-6 md:left-auto md:translate-x-0 
          bg-[#3C2031] hover:bg-[#533547] text-[#FCD9A1] border-3 border-[#FCD9A1]
          px-8 md:px-10 py-4 md:py-5 rounded-full shadow-lg hover:shadow-xl 
          transition-all duration-300 z-50 font-medium text-[16px] md:text-[17px] lg:text-[18px]
          hover:cursor-pointer whitespace-nowrap text-center"
      >
        Book Free Consultation
      </button>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center p-4
          md:inset-auto md:bottom-6 md:right-6 md:block md:p-0 z-50">
          <div className="bg-white rounded-xl w-full max-w-md md:w-96 shadow-2xl border border-gray-200 max-h-[90vh] md:max-h-[calc(100vh-3rem)]">
            
            {/* Header */}
            <div className="flex justify-between items-center p-6 pb-4 border-b border-gray-100">
              <h2 className="text-gray-800 text-xl font-bold text-center flex-1">
                Book Free Consultation
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-600 hover:text-gray-800 transition-colors ml-4"
              >
                <X size={24} />
              </button>
            </div>

            {/* Form */}
            <form 
              onSubmit={handleSubmit} 
              className="px-6 pb-6 space-y-4 overflow-y-auto"
              style={{ maxHeight: "calc(90vh - 120px)" }}
            >
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 
                    bg-gray-50 text-gray-800 placeholder-[#38363D] 
                    focus:outline-none focus:ring-2 focus:ring-[#5d3a5d] focus:border-transparent"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 
                    bg-gray-50 text-gray-800 placeholder-[#38363D] 
                    focus:outline-none focus:ring-2 focus:ring-[#5d3a5d] focus:border-transparent"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 
                    bg-gray-50 text-gray-800 placeholder-[#38363D] 
                    focus:outline-none focus:ring-2 focus:ring-[#5d3a5d] focus:border-transparent"
                />
              </div>

              {/* Postcode */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Postcode</label>
                <input
                  type="text"
                  name="postcode"
                  placeholder="Postcode"
                  value={formData.postcode}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 
                    bg-gray-50 text-gray-800 placeholder-[#38363D] 
                    focus:outline-none focus:ring-2 focus:ring-[#5d3a5d] focus:border-transparent"
                />
              </div>

              {/* Preferred Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 
                    bg-gray-50 text-gray-800 focus:outline-none 
                    focus:ring-2 focus:ring-[#5d3a5d] focus:border-transparent"
                />
              </div>

              {/* Preferred Time */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
                <input
                  type="time"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 
                    bg-gray-50 text-gray-800 focus:outline-none 
                    focus:ring-2 focus:ring-[#5d3a5d] focus:border-transparent"
                />
              </div>

              {/* Treatment */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Treatment</label>
                <div className="relative">
                  <select
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 
                      bg-gray-50 text-gray-800 focus:outline-none 
                      focus:ring-2 focus:ring-[#5d3a5d] focus:border-transparent 
                      appearance-none cursor-pointer"
                  >
                    <option value="">Select Treatment</option>
                    <option value="fue-hair-transplant">Fue Hair Transplant</option>
                    <option value="beard-transplant">Beard Transplant</option>
                    <option value="eyebrow-transplant">Eyebrow Transplant</option>
                    <option value="afro-hair-transplant">Afro Hair Transplant</option>
                    <option value="female-hair-loss">Female Hair Loss</option>
                    <option value="un-shaven-hair-transplant">Un-Shaven Hair Transplant</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 
                    text-gray-500 pointer-events-none" size={20} />
                </div>
              </div>

              {/* Consultation Medium */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Consultation Medium</label>
                <div className="relative">
                  <select
                    name="consultationMedium"
                    value={formData.consultationMedium}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 
                      bg-gray-50 text-gray-800 focus:outline-none 
                      focus:ring-2 focus:ring-[#5d3a5d] focus:border-transparent 
                      appearance-none cursor-pointer"
                  >
                    <option value="">Select Medium</option>
                    <option value="whatsapp">WhatsApp</option>
                    <option value="zoom">Zoom</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 
                    text-gray-500 pointer-events-none" size={20} />
                </div>
              </div>

              {/* Heard About Us */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">How did you hear about us?</label>
                <div className="relative">
                  <select
                    name="heardAboutUs"
                    value={formData.heardAboutUs}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 
                      bg-gray-50 text-gray-800 focus:outline-none 
                      focus:ring-2 focus:ring-[#5d3a5d] focus:border-transparent 
                      appearance-none cursor-pointer"
                  >
                    <option value="">Select an option</option>
                    <option value="google-ads">Google Ads</option>
                    <option value="twitter">Twitter</option>
                    <option value="instagram">Instagram</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 
                    text-gray-500 pointer-events-none" size={20} />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 
                    bg-gray-50 text-gray-800 placeholder-[#38363D] 
                    focus:outline-none focus:ring-2 focus:ring-[#5d3a5d] 
                    focus:border-transparent resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#3C2031] hover:bg-[#533547] 
                  text-white font-semibold py-3 px-4 rounded-lg 
                  transition-colors duration-200 mt-6"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingConsultationButton;