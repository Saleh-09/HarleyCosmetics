import React from "react";
import Logo from "../assets/Logo.svg"
import { Mail, Phone, ChevronDown, Menu, X} from "lucide-react"
import { Link } from "react-router-dom";
import { useState } from "react"

const Navbar = () =>{
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }
    return(
        <header>
             {/* Top Contact Bar */}
            <div className="bg-[#3C2031] text-white py-3">
                <div className="max-w-7xl mx-auto px-4 flex justify-center items-center gap-8">
                <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">harleycosmetics@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                     <Phone className="w-4 h-4" />
                    <span className="text-sm">+44 565 6721</span>
                </div>
                </div>
            </div>
            <nav className="bg-white w-full shadow-sm">
                <div className="mx-10">
                    <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/">
                        <Logo />
                        </Link>
                    </div>

                    {/* Desktop Navigation Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <div className="flex items-center gap-1 text-gray-700 hover:text-[#3C2031] cursor-pointer">
                        <span>Male Treatment</span>
                        <ChevronDown className="w-4 h-4" />
                        </div>
                        <div className="flex items-center gap-1 text-gray-700 hover:text-gray-900 cursor-pointer">
                        <span>Female Treatment</span>
                        <ChevronDown className="w-4 h-4" />
                        </div>
                        <Link to="/about" className="text-gray-700 hover:text-gray-900">
                        About Us
                        </Link>
                        <Link to="/doctors" className="text-gray-700 hover:text-gray-900">
                        Our Doctors
                        </Link>
                        <Link to="/blog" className="text-gray-700 hover:text-gray-900">
                        Blog
                        </Link>
                        <Link to="/faqs" className="text-gray-700 hover:text-gray-900">
                        FAQs
                        </Link>
                    </div>

                    <div className="md:hidden">
                        <button
                        onClick={toggleMobileMenu}
                        className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
                        aria-label="Toggle mobile menu"
                        >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                    </div>

                    {isMobileMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
                        <div className="flex items-center gap-1 text-gray-700 hover:text-[#3C2031] cursor-pointer px-3 py-2 rounded-md">
                            <span>Male Treatment</span>
                            <ChevronDown className="w-4 h-4" />
                        </div>
                        <div className="flex items-center gap-1 text-gray-700 hover:text-gray-900 cursor-pointer px-3 py-2 rounded-md">
                            <span>Female Treatment</span>
                            <ChevronDown className="w-4 h-4" />
                        </div>
                        <Link
                            to="/about"
                            className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            About Us
                        </Link>
                        <Link
                            to="/doctors"
                            className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Our Doctors
                        </Link>
                        <Link
                            to="/blog"
                            className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Blog
                        </Link>
                        <Link
                            to="/faqs"
                            className="block text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            FAQs
                        </Link>
                        </div>
                    </div>
                    )}
                </div>
            </nav>
        </header>
       
    )
}
export default Navbar