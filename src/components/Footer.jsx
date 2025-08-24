import React from "react";
import { Facebook, Instagram, Linkedin, Star } from "lucide-react"

const Footer = () => {
    return(
        <footer className="bg-stone-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left section - Logo and Social Icons */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-gray-900 tracking-wide">HARLEY</h2>
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                <Facebook className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                <Instagram className="w-5 h-5 text-white" />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                <Linkedin className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Right section - Navigation Links */}
          <div className="flex flex-col sm:flex-row gap-8 md:gap-16">
            {/* Explore Column */}
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-gray-900 mb-2">Explore</h3>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                About Us
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                Our Doctors
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                Blog
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                FAQs
              </a>
            </div>

            {/* Legal Links Column */}
            <div className="flex flex-col gap-3">
              <h3 className="font-semibold text-gray-900 mb-2">Legal Links</h3>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                Disclaimer
              </a>
            </div>
          </div>
        </div>

        {/* Decorative divider with star */}
        <div className="flex items-center justify-center my-8">
          <div className="flex-1 border-t border-dotted border-gray-400"></div>
          <div className="mx-4">
            <Star className="w-6 h-6 text-gray-400" />
          </div>
          <div className="flex-1 border-t border-dotted border-gray-400"></div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-500 text-sm">© Harley Cosmetics Inc. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
    )
}
export default Footer