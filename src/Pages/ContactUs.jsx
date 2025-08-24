import React from "react";
import Header from "@/components/header"
import { ChevronDown, Mail, Phone, MapPin } from "lucide-react"
import HeroHeader from "@/components/HeroHeader";
const ContactUs = () => {
    return(
        <div className="min-h-screen bg-white">
        <HeroHeader
            title="Trusted Experts Dedicated to Natural Hair Transformation"
            badge="Who We Are"
            height="h-[365px]"
            />
        <div className="container mx-auto px-4 py-16 max-w-6xl">
            <div className="mb-8">
                <p className="text-gray-600 text-sm mb-2">Contact us</p>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Need help ? Get in touch</h1>
                <p className="text-gray-600 text-lg">We'd love to hear from you. Please fill out this form.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                {/* Contact Form */}
                <div className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First name
                        </label>
                        <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="First name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5d3a5d] focus:border-transparent outline-none transition-all"
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last name
                        </label>
                        <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Last name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5d3a5d] focus:border-transparent outline-none transition-all"
                        />
                    </div>
                    </div>

                    {/* Email Field */}
                    <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="you@gmail.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5d3a5d] focus:border-transparent outline-none transition-all"
                    />
                    </div>

                    {/* Treatment Dropdown */}
                    <div>
                    <label htmlFor="treatment" className="block text-sm font-medium text-gray-700 mb-2">
                        Treatment
                    </label>
                    <div className="relative">
                        <select
                        id="treatment"
                        name="treatment"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5d3a5d] focus:border-transparent outline-none transition-all appearance-none bg-white"
                        >
                        <option value="">Choose Treatment</option>
                        <option value="fue-hair-transplant">Fue Hair Transplant</option>
                        <option value="beard-transplant">Beard Transplant</option>
                        <option value="eyebrow-transplant">Eyebrow Transplant</option>
                        <option value="afro-hair-transplant">Afro Hair Transplant</option>
                        <option value="female-hair-transplant">Female Hair Transplant</option>
                        <option value="un-shaven-hair-transplant">Un-Shaven Hair Transplant</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                    </div>

                    {/* Consultation Medium Dropdown */}
                    <div>
                    <label htmlFor="consultationMedium" className="block text-sm font-medium text-gray-700 mb-2">
                        Consultation Medium
                    </label>
                    <div className="relative">
                        <select
                        id="consultationMedium"
                        name="consultationMedium"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5d3a5d] focus:border-transparent outline-none transition-all appearance-none bg-white"
                        >
                        <option value="">Choose Medium</option>
                        <option value="whatsapp">WhatsApp</option>
                        <option value="zoom">Zoom</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                    </div>

                    {/* Message Field */}
                    <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={6}
                        placeholder="Write Your Message"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5d3a5d] focus:border-transparent outline-none transition-all resize-vertical"
                    />
                    </div>

                    {/* Submit Button */}
                    <button
                    type="submit"
                    className="bg-[#5d3a5d] text-white px-8 py-3 rounded-full font-medium hover:bg-[#4a2d4a] transition-colors"
                    >
                    Book Your Consultation
                    </button>
                </div>

                {/* Contact Information */}
                <div className="space-y-8">
                    <div className="flex items-start space-x-4">
                    <div className="bg-[#5d3a5d] p-3 rounded-lg">
                        <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Email:</h3>
                        <p className="text-gray-600">harleycosmetics@gmail.com</p>
                    </div>
                    </div>

                    <div className="flex items-start space-x-4">
                    <div className="bg-[#5d3a5d] p-3 rounded-lg">
                        <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Phone:</h3>
                        <p className="text-gray-600">+44 565 6721</p>
                    </div>
                    </div>

                    <div className="flex items-start space-x-4">
                    <div className="bg-[#5d3a5d] p-3 rounded-lg">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Location:</h3>
                        <p className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}