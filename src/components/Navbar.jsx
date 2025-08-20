import React from "react";
import Logo from "../assets/Logo.svg"
import { Mail, Phone, ChevronDown} from "lucide-react"

const Navbar = () =>{
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
            <nav className="bg-white w-full ">
                <div className="mx-10">
                    <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <img
                            src={Logo}
                            alt="Logo"
                            className="h-10 w-auto" 
                        />
                    </div>

                    {/* Navigation Menu */}
                    <div className="hidden md:flex items-center space-x-8 right-5">
                        <div className="flex items-center gap-1 text-gray-700 hover:text-[#3C2031] cursor-pointer">
                        <span>Male Treatment</span>
                        <ChevronDown className="w-4 h-4" />
                        
                        </div>
                        <div className="flex items-center gap-1 text-gray-700 hover:text-gray-900 cursor-pointer">
                        <span>Female Treatment</span>
                        <ChevronDown className="w-4 h-4" />
                        
                        </div>
                        <a href="#" className="text-gray-700 hover:text-gray-900">About Us</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">Our Doctors</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">Blog</a>
                        <a href="#" className="text-gray-700 hover:text-gray-900">FAQs</a>
                    </div>
                    </div>
                </div>
            </nav>
        </header>
       
    )
}
export default Navbar