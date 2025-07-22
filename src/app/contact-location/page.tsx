'use client';

import React, { useState } from 'react';
import { ChevronDown, MapPin, Clock, Phone, Mail, MessageCircle, Menu, X } from 'lucide-react';
import Link from 'next/link';

type BranchKey = 'main' | 'second';

interface Branch {
  name: string;
  address: string;
  hours: string;
  mapEmbed: string;
  googleMapsLink: string;
}

const ContactLocationPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState<BranchKey>('main');

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Parts & Supplies', href: '/electrical-supplies' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'FAQs', href: '/faqs' },
  ];

    const branches: Record<BranchKey, Branch> = {
    main: {
        name: 'Main Branch',
        address: 'Darasa II, Tanauan City, Batangas',
        hours: '8:00 AM – 6:00 PM',
        mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.2890786234907!2d121.15156767407002!3d14.060099490083115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd6f3b596dc885%3A0xaf689dd4a8f9b9bb!2sArif%20Motors%20Electrical!5e0!3m2!1sen!2sph!4v1753165886191!5m2!1sen!2sph',
        googleMapsLink: 'https://maps.app.goo.gl/WAfCBNQY3Hm98cjf8'
    },
    second: {
        name: 'Second Branch',
        address: 'Near Tanauan South Central School, Tanauan City, Batangas',
        hours: '8:00 AM – 5:00 PM',
        mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.910818438692!2d121.14764617407043!3d14.082441589554584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd6f5d0f440b77%3A0x206093884d1f041f!2sArif%20Motor\'s%20Electrical%20Supply!5e0!3m2!1sen!2sph!4v1753165835623!5m2!1sen!2sph',
        googleMapsLink: 'https://maps.app.goo.gl/qrYKF9xJkihvz2rt7'
    }
    };


  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
      {/* Header with enhanced styling */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-900 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <h1 className="text-center text-sm font-semibold text-white tracking-wider uppercase">
            ARIF MOTORS ELECTRICAL
          </h1>
        </div>
      </div>

      {/* Navigation with improved styling */}
      <nav className="max-w-7xl mx-auto px-4 py-3 bg-white/80 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div className="text-3xl font-bold text-blue-800 tracking-tight"></div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-800 transition-all duration-300 font-medium text-sm tracking-wide relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-800 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-800 transition-colors duration-300 p-2 rounded-lg hover:bg-blue-50 touch-manipulation"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 py-4 border-t border-gray-200 bg-white rounded-lg shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 px-4 text-gray-700 hover:text-blue-800 hover:bg-blue-50 transition-all duration-300 font-medium rounded-lg mx-2 touch-manipulation"
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Page Header */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-red-50 rounded-full px-6 py-2 border border-blue-200 mb-6">
            <span className="text-blue-700 text-sm font-semibold">📍 Find Us & Get In Touch</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-blue-800 mb-6 tracking-tight">
            Contact & Location
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Visit us at either of our convenient locations in Tanauan City, Batangas. We're here to help with all your electrical motor needs.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side - Location Info */}
          <div className="space-y-12">
            {/* Our Locations Section */}
            <div>
              <h2 className="text-3xl font-bold text-blue-800 mb-8 flex items-center">
                <MapPin className="w-8 h-8 mr-3 text-red-700" />
                Our Locations
              </h2>
              
              <div className="space-y-6">
                {/* Main Branch */}
                <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-800 to-blue-900 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-blue-800 mb-2">{branches.main.name}</h3>
                      <p className="text-gray-700 text-lg mb-3">{branches.main.address}</p>
                      <div className="flex items-center text-gray-600 mb-4">
                        <Clock className="w-5 h-5 mr-2 text-red-700" />
                        <span className="font-medium"> Open: {branches.main.hours}</span>
                      </div>
                      <a
                        href={branches.main.googleMapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-gradient-to-r from-red-700 to-red-800 text-white px-6 py-3 rounded-2xl font-semibold hover:from-red-800 hover:to-red-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 touch-manipulation"
                      >
                         Find us on Google Maps
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Second Branch */}
                <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-700 to-red-800 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-red-700 mb-2">{branches.second.name}</h3>
                      <p className="text-gray-700 text-lg mb-3">{branches.second.address}</p>
                      <div className="flex items-center text-gray-600 mb-4">
                        <Clock className="w-5 h-5 mr-2 text-blue-800" />
                        <span className="font-medium"> Open: {branches.second.hours}</span>
                      </div>
                      <a
                        href={branches.second.googleMapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-gradient-to-r from-blue-800 to-blue-900 text-white px-6 py-3 rounded-2xl font-semibold hover:from-blue-900 hover:to-blue-950 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 touch-manipulation"
                      >
                         Find us on Google Maps
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Us Section */}
            <div>
              <h2 className="text-3xl font-bold text-blue-800 mb-8 flex items-center">
                <Phone className="w-8 h-8 mr-3 text-red-700" />
                Contact Us
              </h2>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-800 to-blue-900 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 text-lg"> Phone</div>
                    <a href="tel:+639495738232" className="text-blue-800 hover:text-blue-900 transition-colors duration-300 text-xl font-medium">
                      0949 573 8232
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-700 to-red-800 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 text-lg"> Email</div>
                    <a href="mailto:arifmotorselectrical@gmail.com" className="text-red-700 hover:text-red-800 transition-colors duration-300 text-xl font-medium">
                      arifmotorselectrical@gmail.com
                    </a>
                  </div>
                </div>

                {/* Facebook */}
                <div className="flex items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 text-lg">Facebook</div>
                    <a 
                      href="https://facebook.com/arifmotorselectrical" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 transition-colors duration-300 text-xl font-medium"
                    >
                      Arif Motors Electrical
                    </a>
                    <p className="text-gray-600 text-sm mt-1"> Message us anytime via Facebook</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Map */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-blue-800 mb-8 flex items-center">
                <MapPin className="w-8 h-8 mr-3 text-red-700" />
                 Find Us on the Map
              </h2>

              {/* Branch Toggle */}
              <div className="mb-6">
                <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200 inline-flex">
                  <button
                    onClick={() => setSelectedBranch('main')}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      selectedBranch === 'main'
                        ? 'bg-gradient-to-r from-blue-800 to-blue-900 text-white shadow-lg'
                        : 'text-blue-800 hover:bg-blue-50'
                    }`}
                  >
                    Main Branch
                  </button>
                  <button
                    onClick={() => setSelectedBranch('second')}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      selectedBranch === 'second'
                        ? 'bg-gradient-to-r from-red-700 to-red-800 text-white shadow-lg'
                        : 'text-red-700 hover:bg-red-50'
                    }`}
                  >
                    Second Branch
                  </button>
                </div>
              </div>

              {/* Map Container */}
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
                <div className="p-6 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 flex items-center">
                    <MapPin className="w-6 h-6 mr-2 text-red-700" />
                    {branches[selectedBranch].name}
                  </h3>
                  <p className="text-gray-600 mt-1">{branches[selectedBranch].address}</p>
                </div>
                
                <div className="relative">
                  <iframe
                    src={branches[selectedBranch].mapEmbed}
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="transition-all duration-500"
                  ></iframe>
                  
                  {/* Map Overlay for Better UX */}
                  <div className="absolute top-4 right-4">
                    <a
                      href={branches[selectedBranch].googleMapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg hover:bg-white transition-all duration-300 group touch-manipulation"
                    >
                      <svg className="w-6 h-6 text-blue-800 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <a
                  href="tel:+639495738232"
                  className="bg-gradient-to-r from-blue-800 to-blue-900 text-white p-4 rounded-2xl text-center font-semibold hover:from-blue-900 hover:to-blue-950 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 touch-manipulation"
                >
                   Call Now
                </a>
                <a
                  href="mailto:arifmotorselectrical@gmail.com"
                  className="bg-gradient-to-r from-red-700 to-red-800 text-white p-4 rounded-2xl text-center font-semibold hover:from-red-800 hover:to-red-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 touch-manipulation"
                >
                   Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Business Hours Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-blue-800 mb-6">Business Hours</h2>
            <p className="text-xl text-gray-600">We're here to serve you during these hours</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Main Branch Hours */}
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-800 to-blue-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-800 mb-4">Main Branch</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Monday - Saturday:</span>
                    <span className="text-blue-800 font-semibold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Sunday:</span>
                    <span className="text-blue-800 font-semibold">8:00 AM - 1:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Branch Hours */}
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-700 to-red-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-red-700 mb-4">Second Branch</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Monday - Saturday:</span>
                    <span className="text-red-700 font-semibold">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Sunday:</span>
                    <span className="text-red-700 font-semibold">8:00 AM - 1:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section - Same as homepage */}
      <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                  ARIF MOTORS ELECTRICAL
                </h3>
                <p className="text-blue-200 leading-relaxed text-lg">
                  Your trusted partner for electrical motor services and supplies since 1999. Quality, reliability, and expertise you can count on.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center group touch-manipulation">
                      <ChevronDown className="w-4 h-4 mr-2 rotate-[-90deg] group-hover:text-red-400 transition-colors duration-300" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h4 className="text-xl font-bold text-white mb-6">Get In Touch</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-red-400 mr-3" />
                    <div>
                      <div className="font-semibold text-white">Phone</div>
                      <div className="text-blue-200">+63 949 573 8232</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-red-400 mr-3" />
                    <div>
                      <div className="font-semibold text-white">Email</div>
                      <div className="text-blue-200">arifmotorselectrical@gmail.com</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-red-400 mr-3 mt-1" />
                    <div>
                      <div className="font-semibold text-white">Main Branch</div>
                      <div className="text-blue-200 text-sm">Darasa II, Tanauan City, Batangas</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-red-400 mr-3 mt-1" />
                    <div>
                      <div className="font-semibold text-white">Business Hours</div>
                      <div className="text-blue-200 text-sm">Mon-Sat: 8AM-6PM | Sun: 8AM-1PM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-blue-800 mt-16 pt-8 text-center">
            <div className="text-blue-200 text-sm">
              © 2025 Arif Motors Electrical. All rights reserved.
            </div>
            <div className="flex justify-center items-center mt-3 space-x-2">
              <div className="w-2 h-2 bg-red-700 rounded-full animate-pulse"></div>
              <span className="text-blue-200 text-xs">Proudly serving Tanauan, Batangas since 1999</span>
              <div className="w-2 h-2 bg-red-700 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactLocationPage;