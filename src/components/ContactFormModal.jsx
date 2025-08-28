import React from "react";
import { X } from "lucide-react";

const ContactFormModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Background overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-40"
        onClick={onClose}
      ></div>

      {/* Form Container */}
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-3xl mx-4 p-8 z-50 overflow-y-auto max-h-[90vh]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>

        {/* === Your Form Here === */}
        <h2 className="text-2xl font-bold mb-6">Book Free Consultation</h2>
        
        {/* Example field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            First name
          </label>
          <input
            type="text"
            placeholder="First name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5d3a5d] outline-none"
          />
        </div>
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
  );
};

export default ContactFormModal;
