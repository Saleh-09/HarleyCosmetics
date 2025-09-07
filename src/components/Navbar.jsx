import React from "react";
import Logo from "../assets/HarleyCosmticsLogo.svg"
import { Phone, ChevronDown, Menu, X, ArrowRight} from "lucide-react"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react"

const Navbar = () =>{
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [maleDropdownOpen, setMaleDropdownOpen] = useState(false)
    const [femaleDropdownOpen, setFemaleDropdownOpen] = useState(false)
    const [mobileMaleDropdownOpen, setMobileMaleDropdownOpen] = useState(false)
    const [mobileFemaleDropdownOpen, setMobileFemaleDropdownOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }
    // Scroll handler for navbar visibility
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            
            // Show navbar when scrolling up, hide when scrolling down
            if (currentScrollY < lastScrollY || currentScrollY < 100) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
            
            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        
        return () => window.removeEventListener('scroll', handleScroll)
    }, [lastScrollY])

    const maletreatments = [
        { name: "FUE Hair Transplant", path: "/male/fue-hair-transplant" },
        { name: "Beard Transplant", path: "/male/beard-transplant" },
        { name: "Eyebrow Transplant", path: "/male/eyebrow-transplant" },
        { name: "Afro Hair Transplant", path: "/male/afro-hair-transplant" },
        { name: "Un-Shaven Hair Transplant", path: "/male/unshaven-hair-transplant" },
    ]

    const femaletreatments = [
        { name: "FUE Hair Transplant", path: "/female/fue-hair-transplant" },
        { name: "Female Hair Transplant", path: "/female/female-hair-transplant" },
        { name: "Eyebrow Transplant", path: "/female/eyebrow-transplant" },
        { name: "Afro Hair Transplant", path: "/female/afro-hair-transplant" },
        { name: "Un-Shaven Hair Transplant", path: "/female/unshaven-hair-transplant" },
    ]
    return(
        <header className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
            isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}>
             {/* Top Contact Bar 
             <div className="bg-[#3C2031] text-[#FCD9A1] py-4">
                <div className="max-w-7xl mx-auto px-4 flex justify-center items-center gap-8 whitespace-nowrap overflow-x-auto">
                    <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 flex-shrink-0" />
                        <span className="text-[13px] lg:text-[17px]">+44 565 6721</span>
                    </div>
                    <Link to="/contact" className="flex items-center gap-2 no-underline">
                        <span className="text-[13px] lg:text-[17px] underline underline-offset-2">Book free Consulation</span>
                        <ArrowRight className="w-4 h-4 flex-shrink-0"/>
                    </Link>
                </div>
            </div>                 
            */}
           
            <nav className="bg-white w-full shadow-md no-underline">
                <div className="mx-4 lg:mx-10">
                    <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div>
                        <Link to="/">
                        <img src={Logo} alt="Logo" className="h-10 w-auto" />
                        </Link>
                    </div>

                    {/* Desktop Navigation Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <div
                        className="relative"
                        onMouseEnter={() => setMaleDropdownOpen(true)}
                        onMouseLeave={() => setMaleDropdownOpen(false)}
                        >
                        <div className="flex items-center gap-1 text-gray-700 hover:text-[#3C2031] cursor-pointer">
                            <span>Male Treatment</span>
                            <ChevronDown className="w-4 h-4" />
                        </div>
                        {maleDropdownOpen && (
                            <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                            <div className="py-2">
                                {maletreatments.map((treatment, index) => (
                                <Link
                                    key={index}
                                    to={treatment.path}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#3C2031]"
                                >
                                    {treatment.name}
                                </Link>
                                ))}
                            </div>
                            </div>
                        )}
                        </div>

                        <div
                        className="relative"
                        onMouseEnter={() => setFemaleDropdownOpen(true)}
                        onMouseLeave={() => setFemaleDropdownOpen(false)}
                        >
                        <div className="flex items-center gap-1 text-gray-700 hover:text-gray-900 cursor-pointer">
                            <span>Female Treatment</span>
                            <ChevronDown className="w-4 h-4" />
                        </div>
                        {femaleDropdownOpen && (
                            <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                            <div className="py-2">
                                {femaletreatments.map((treatment, index) => (
                                <Link
                                    key={index}
                                    to={treatment.path}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                >
                                    {treatment.name}
                                </Link>
                                ))}
                            </div>
                            </div>
                        )}
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
                        {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                        </button>
                    </div>
                    </div>

                    {isMobileMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
                        {/* Mobile Male Treatment Dropdown */}
                        <div>
                            <div
                            className="flex items-center justify-between text-gray-700 hover:text-[#3C2031] cursor-pointer px-3 py-2 rounded-md"
                            onClick={() => setMobileMaleDropdownOpen(!mobileMaleDropdownOpen)}
                            >
                            <span>Male Treatment</span>
                            <ChevronDown
                                className={`w-4 h-4 transition-transform ${mobileMaleDropdownOpen ? "rotate-180" : ""}`}
                            />
                            </div>
                            {mobileMaleDropdownOpen && (
                            <div className="ml-4 space-y-1">
                                {maletreatments.map((treatment, index) => (
                                <Link
                                    key={index}
                                    to={treatment.path}
                                    className="block text-sm text-gray-600 hover:text-[#3C2031] px-3 py-2 rounded-md"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {treatment.name}
                                </Link>
                                ))}
                            </div>
                            )}
                        </div>

                        {/* Mobile Female Treatment Dropdown */}
                        <div>
                            <div
                            className="flex items-center justify-between text-gray-700 hover:text-gray-900 cursor-pointer px-3 py-2 rounded-md"
                            onClick={() => setMobileFemaleDropdownOpen(!mobileFemaleDropdownOpen)}
                            >
                            <span>Female Treatment</span>
                            <ChevronDown
                                className={`w-4 h-4 transition-transform ${mobileFemaleDropdownOpen ? "rotate-180" : ""}`}
                            />
                            </div>
                            {mobileFemaleDropdownOpen && (
                            <div className="ml-4 space-y-1">
                                {femaletreatments.map((treatment, index) => (
                                <Link
                                    key={index}
                                    to={treatment.path}
                                    className="block text-sm text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {treatment.name}
                                </Link>
                                ))}
                            </div>
                            )}
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