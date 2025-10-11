import React from "react";
import Logo from "../assets/Logo.svg"
import { Facebook, Instagram, Linkedin, Star } from "lucide-react"
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <footer className="bg-stone-100 py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
              
              {/* Left section - Logo and Social Icons */}
              <div className="flex flex-col gap-8">
                <div className="flex-shrink-0">
                    <Link to="/">
                        <img src={Logo} alt="Logo" className="h-10 w-auto" />
                    </Link>
                </div>
                <div className="text-gray-600 text-[16px] max-w-xs"> 
                  Harley Cosmetics is one of the largest hair re-growth centres, equipped with the latest technology and an expert medical and non-medical team.
                </div>
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

              {/* Right section - Navigation Links + Clinics */}
              <div className="flex flex-col sm:flex-row gap-8 md:gap-16">
                
                {/* Explore Column */}
                <div className="flex flex-col gap-3">
                  <h3 className="font-semibold text-gray-900 mb-2">Explore</h3>
                  <Link to="/about" className="text-gray-700 hover:text-gray-900">About Us</Link>
                  <Link to="/doctors" className="text-gray-700 hover:text-gray-900">Our Doctors</Link>
                  <Link to="/blog" className="text-gray-700 hover:text-gray-900">Blog</Link>
                  <Link to="/faqs" className="text-gray-700 hover:text-gray-900">FAQs</Link>
                </div>

                {/* Clinics Section */}
                <div className="flex flex-col gap-3">
                  <h3 className="font-semibold text-gray-900 mb-2">Clinics</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">

                    {/* Column 1 */}
                    <div className="flex flex-col gap-3">
                      <div className="hover:text-gray-900 cursor-pointer">
                        <p className="font-semibold">Birmingham</p>
                        <p className="text-sm">8 George road, Edgbaston, Birmingham, B15 1NP</p>
                        <p className="text-sm">Contact : 0121 389 4898</p>
                      </div>

                      <div className="hover:text-gray-900 cursor-pointer">
                        <p className="font-semibold">Bromley</p>
                        <p className="text-sm">38/40 High Street, West Wickham, BR4 0NJ</p>
                        <p className="text-sm">Contact : 0208 916 9882</p>
                      </div>

                      <div className="hover:text-gray-900 cursor-pointer">
                        <p className="font-semibold">Leeds</p>
                        <p className="text-sm">29 Park Place, Leeds, LS1 2SP</p>
                        <p className="text-sm">Contact : 0113 531 7531</p>
                      </div>

                      <div className="hover:text-gray-900 cursor-pointer">
                        <p className="font-semibold">London</p>
                        <p className="text-sm">44 Chippenham Road, London, W9 2AF</p>
                        <p className="text-sm">Contact : 0208 902 2270</p>
                      </div>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-3">
                      <div className="hover:text-gray-900 cursor-pointer">
                        <p className="font-semibold">Manchester</p>
                        <p className="text-sm">4th Floor Speakers House, 39 Deansgate, Manchester, M3 2AB</p>
                        <p className="text-sm">Contact : 0161 470 4504</p>
                      </div>

                      <div className="hover:text-gray-900 cursor-pointer">
                        <p className="font-semibold">Romford</p>
                        <p className="text-sm">48-50 South Street, Romford, RM1 1RB</p>
                        <p className="text-sm">Contact : 0170 857 2674</p>
                      </div>

                      <div className="hover:text-gray-900 cursor-pointer">
                        <p className="font-semibold">Glasgow</p>
                        <p className="text-sm">97 Douglas Street, Glasgow, G2 4EU</p>
                        <p className="text-sm">Contact : 0141 378 509</p>
                      </div>
                    </div>

                  </div>
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

export default Footer;
