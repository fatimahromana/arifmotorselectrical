'use client';

import React, { useState } from 'react';
import { ChevronDown, MapPin, Clock, Phone, Mail, MessageCircle, Menu, X } from 'lucide-react';
import Link from 'next/link';

type BranchKey = 'main' | 'second';

interface Branch {
  name: string;
  address: string;
  hours: {
    weekday: string;
    sunday: string;
  };
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
      address: 'Darasa II, Tanauan City, Batangas — in front of BMEG Darasa.',
      hours: {
        weekday: '8:00 AM – 6:00 PM',
        sunday: '8:00 AM – 1:00 PM',
      },
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.2890786234907!2d121.15156767407002!3d14.060099490083115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd6f3b596dc885%3A0xaf689dd4a8f9b9bb!2sArif%20Motors%20Electrical!5e0!3m2!1sen!2sph!4v1753165886191!5m2!1sen!2sph',
      googleMapsLink: 'https://maps.app.goo.gl/WAfCBNQY3Hm98cjf8'
    },
    second: {
      name: 'Second Branch',
      address: 'Beside BPI (Bank of the Philippine Islands), Tanauan City, Batangas.',
      hours: {
        weekday: '8:00 AM – 5:00 PM',
        sunday: '8:00 AM – 1:00 PM',
      },
      mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.910818438692!2d121.14764617407043!3d14.082441589554584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd6f5d0f440b77%3A0x206093884d1f041f!2sArif%20Motor&apos;s%20Electrical%20Supply!5e0!3m2!1sen!2sph!4v1753165835623!5m2!1sen!2sph',
      googleMapsLink: 'https://maps.app.goo.gl/qrYKF9xJkihvz2rt7'
    }
  };

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
      {/* Header with enhanced styling */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-900 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2 sm:py-3">
          <h1 className="text-center text-xs sm:text-sm font-semibold text-white tracking-wider uppercase">
            ARIF MOTORS ELECTRICAL
          </h1>
        </div>
      </div>

      {/* Navigation with improved styling */}
      <nav className="max-w-7xl mx-auto px-3 sm:px-4 py-2 sm:py-3 bg-white/80 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div className="text-2xl sm:text-3xl font-bold text-blue-800 tracking-tight"></div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
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
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 sm:mt-6 py-3 sm:py-4 border-t border-gray-200 bg-white rounded-lg shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 sm:py-3 px-3 sm:px-4 text-gray-700 hover:text-blue-800 hover:bg-blue-50 transition-all duration-300 font-medium rounded-lg mx-2 touch-manipulation text-sm sm:text-base"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Page Header */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-red-50 rounded-full px-4 sm:px-6 py-1.5 sm:py-2 border border-blue-200 mb-4 sm:mb-6">
            <span className="text-blue-700 text-xs sm:text-sm font-semibold">📍 Find Us & Get In Touch</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800 mb-4 sm:mb-6 tracking-tight px-2">
            Contact & Location
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Visit us at either of our convenient locations in Tanauan City, Batangas. We&apos;re here to help with all your electrical motor needs.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-8 sm:py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Left Side - Location Info */}
          <div className="space-y-8 sm:space-y-12">
            {/* Our Locations Section */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-6 sm:mb-8 flex items-center px-2 sm:px-0">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 mr-4 sm:mr-6 text-red-700 flex-shrink-0" />
                Our Locations
              </h2>
              
              <div className="space-y-4 sm:space-y-6">
                {/* Main Branch */}
                <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group mx-2 sm:mx-0">
                  <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-800 to-blue-900 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 self-center sm:self-start">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col items-center sm:items-start justify-center sm:justify-start text-center sm:text-left">
                      <h3 className="text-xl sm:text-2xl font-bold text-blue-800 mb-2">{branches.main.name}</h3>
                      <p className="text-gray-700 text-base sm:text-lg mb-3 break-words">{branches.main.address}</p>
                      <div className="flex items-center text-gray-600 mb-4 flex-wrap justify-center sm:justify-start">
                        <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-4 sm:mr-6 text-red-700 flex-shrink-0" />
                        <span className="font-medium text-sm sm:text-base">Open: {branches.main.hours.weekday}</span>
                      </div>
                      <a
                        href={branches.main.googleMapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-gradient-to-r from-red-700 to-red-800 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl font-semibold hover:from-red-800 hover:to-red-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 touch-manipulation text-sm sm:text-base"
                      >
                        Find us on Google Maps
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Second Branch */}
                <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group mx-2 sm:mx-0">
                  <div className="flex flex-col sm:flex-row sm:items-start space-y-3 sm:space-y-0 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-red-700 to-red-800 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 self-center sm:self-start">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col items-center sm:items-start justify-center sm:justify-start text-center sm:text-left">
                      <h3 className="text-xl sm:text-2xl font-bold text-red-700 mb-2">{branches.second.name}</h3>
                      <p className="text-gray-700 text-base sm:text-lg mb-3 break-words">{branches.second.address}</p>
                      <div className="flex items-center text-gray-600 mb-4 flex-wrap justify-center sm:justify-start">
                        <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-4 sm:mr-6 text-blue-800 flex-shrink-0" />
                        <span className="font-medium text-sm sm:text-base">Open: {branches.second.hours.weekday}</span>
                      </div>
                      <a
                        href={branches.second.googleMapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-gradient-to-r from-blue-800 to-blue-900 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl font-semibold hover:from-blue-900 hover:to-blue-950 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 touch-manipulation text-sm sm:text-base"
                      >
                        Find us on Google Maps
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-6 sm:mb-8 flex items-center px-2 sm:px-0">
                <Phone className="w-6 h-6 sm:w-8 sm:h-8 mr-4 sm:mr-6 text-red-700 flex-shrink-0" />
                Contact Us
              </h2>
              
              <div className="space-y-4 sm:space-y-6">
                {/* Phone */}
                <div className="flex items-center p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group mx-2 sm:mx-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-800 to-blue-900 rounded-full flex items-center justify-center mr-4 sm:mr-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-gray-900 text-base sm:text-lg">Phone</div>
                    <a href="tel:+639495738232" className="text-blue-800 hover:text-blue-900 transition-colors duration-300 text-lg sm:text-xl font-medium break-all">
                      0949 573 8232
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group mx-2 sm:mx-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-red-700 to-red-800 rounded-full flex items-center justify-center mr-4 sm:mr-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-gray-900 text-base sm:text-lg">Email</div>
                    <a href="mailto:arifmotorselectrical@gmail.com" className="text-red-700 hover:text-red-800 transition-colors duration-300 text-base sm:text-xl font-medium break-all">
                      arifmotorselectrical@gmail.com
                    </a>
                  </div>
                </div>

                {/* Facebook */}
                <div className="flex items-start p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group mx-2 sm:mx-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mr-4 sm:mr-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-gray-900 text-base sm:text-lg">Facebook</div>
                    <a 
                      href="https://r.search.yahoo.com/_ylt=Awr1QdsvqH9oFwIABNOzRwx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1754406192/RO=10/RU=https%3a%2f%2fwww.facebook.com%2fprofile.php%2f%3fid%3d100069031163344/RK=2/RS=8gBIB1btuERVwtTxgzGpUbjra8I-" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 transition-colors duration-300 text-lg sm:text-xl font-medium break-words"
                    >
                      Arif Motors Electrical
                    </a>
                    <p className="text-gray-600 text-xs sm:text-sm mt-1">Message us anytime via Facebook</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Map */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-6 sm:mb-8 flex items-center px-2 sm:px-0">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 mr-4 sm:mr-6 text-red-700 flex-shrink-0" />
                Find Us on the Map
              </h2>

              {/* Branch Toggle */}
              <div className="mb-4 sm:mb-6 px-2 sm:px-0">
                <div className="bg-white rounded-xl sm:rounded-2xl p-1.5 sm:p-2 shadow-lg border border-gray-200 inline-flex w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedBranch('main')}
                    className={`flex-1 sm:flex-initial px-3 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 text-xs sm:text-base ${selectedBranch === 'main' ? 'bg-gradient-to-r from-blue-800 to-blue-900 text-white shadow-lg' : 'text-blue-800 hover:bg-blue-50'}`}
                  >
                    Main Branch
                  </button>
                  <button
                    onClick={() => setSelectedBranch('second')}
                    className={`flex-1 sm:flex-initial px-3 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 text-xs sm:text-base ${selectedBranch === 'second' ? 'bg-gradient-to-r from-red-700 to-red-800 text-white shadow-lg' : 'text-red-700 hover:bg-red-50'}`}
                  >
                    Second Branch
                  </button>
                </div>
              </div>

              {/* Map Container */}
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-gray-200 mx-2 sm:mx-0">
                <div className="p-4 sm:p-6 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex items-start">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 mr-4 sm:mr-6 text-red-700 flex-shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <div>{branches[selectedBranch].name}</div>
                      <p className="text-sm sm:text-base text-gray-600 mt-1 font-normal break-words">{branches[selectedBranch].address}</p>
                    </div>
                  </h3>
                </div>
                
                <div className="relative">
                  <iframe
                    src={branches[selectedBranch].mapEmbed}
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="transition-all duration-500 sm:h-[400px]"
                    title={`Map of ${branches[selectedBranch].name}`}
                  ></iframe>
                  
                  {/* Map Overlay for Better UX */}
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                    <a
                      href={branches[selectedBranch].googleMapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 backdrop-blur-sm p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-lg hover:bg-white transition-all duration-300 group touch-manipulation"
                    >
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-800 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8 px-2 sm:px-0">
                <a
                  href="tel:+639495738232"
                  className="bg-gradient-to-r from-blue-800 to-blue-900 text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl text-center font-semibold hover:from-blue-900 hover:to-blue-950 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 touch-manipulation text-sm sm:text-base"
                >
                  📞 Call Now
                </a>
                <a
                  href="mailto:arifmotorselectrical@gmail.com"
                  className="bg-gradient-to-r from-red-700 to-red-800 text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl text-center font-semibold hover:from-red-800 hover:to-red-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 touch-manipulation text-sm sm:text-base"
                >
                  ✉️ Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Business Hours Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-800 mb-4 sm:mb-6">Business Hours</h2>
            <p className="text-lg sm:text-xl text-gray-600">We&apos;re here to serve you during these hours</p>
          </div>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {/* Main Branch Hours */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 mx-2 sm:mx-0">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-800 to-blue-900 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-blue-800 mb-3 sm:mb-4">Main Branch</h3>
                <div className="space-y-2 sm:space-y-3 text-gray-700">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-1 sm:space-y-0">
                    <span className="font-medium text-sm sm:text-base">Monday - Saturday:</span>
                    <span className="text-blue-800 font-semibold text-sm sm:text-base">{branches.main.hours.weekday}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-1 sm:space-y-0">
                    <span className="font-medium text-sm sm:text-base">Sunday:</span>
                    <span className="text-blue-800 font-semibold text-sm sm:text-base">{branches.main.hours.sunday}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Second Branch Hours */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 mx-2 sm:mx-0">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-red-700 to-red-800 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-red-700 mb-3 sm:mb-4">Second Branch</h3>
                <div className="space-y-2 sm:space-y-3 text-gray-700">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-1 sm:space-y-0">
                    <span className="font-medium text-sm sm:text-base">Monday - Saturday:</span>
                    <span className="text-red-700 font-semibold text-sm sm:text-base">{branches.second.hours.weekday}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-1 sm:space-y-0">
                    <span className="font-medium text-sm sm:text-base">Sunday:</span>
                    <span className="text-red-700 font-semibold text-sm sm:text-base">{branches.second.hours.sunday}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1 text-left sm:text-left">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
                  ARIF MOTORS ELECTRICAL
                </h3>
                <p className="text-blue-200 leading-relaxed text-sm sm:text-base lg:text-lg">
                  Your trusted partner for electrical motor services and supplies since 1996. Quality, reliability, and expertise you can count on.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-left sm:text-left">
              <h4 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Quick Links</h4>
              <ul className="space-y-3 sm:space-y-4">
                {navItems.map((item) => (
                  <li key={item.name} className="text-left sm:text-left">
                    <Link href={item.href} className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center justify-start group touch-manipulation text-sm sm:text-base">
                      <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 mr-2 rotate-[-90deg] group-hover:text-red-400 transition-colors duration-300 flex-shrink-0" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h4 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6 text-left sm:text-left">Get In Touch</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-3 sm:space-y-4 text-left sm:text-left">
                  <div className="flex items-start justify-start">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 mr-4 sm:mr-6 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-white text-sm sm:text-base">Phone</div>
                      <div className="text-blue-200 text-sm sm:text-base">+63 949 573 8232</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start justify-start">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 mr-4 sm:mr-6 flex-shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <div className="font-semibold text-white text-sm sm:text-base">Email</div>
                      <div className="text-blue-200 text-xs sm:text-sm break-all">arifmotorselectrical@gmail.com</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 sm:space-y-4 text-left sm:text-left">
                  <div className="flex items-start justify-start">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 mr-4 sm:mr-6 flex-shrink-0 mt-1" />
                    <div className="min-w-0">
                      <div className="font-semibold text-white text-sm sm:text-base">Main Branch</div>
                      <div className="text-blue-200 text-xs sm:text-sm break-words">Darasa II, Tanauan City, Batangas</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start justify-start">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 mr-4 sm:mr-6 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-white text-sm sm:text-base">Business Hours</div>
                      <div className="text-blue-200 text-xs sm:text-sm">Mon-Sat: 8AM-6PM | Sun: 8AM-1PM</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-blue-800 mt-12 sm:mt-16 pt-6 sm:pt-8 text-left sm:text-center">
            <div className="text-blue-200 text-xs sm:text-sm">
              © 2025 Arif Motors Electrical. All rights reserved.
            </div>
            <div className="flex justify-start sm:justify-center items-center mt-2 sm:mt-3 space-x-2 flex-wrap">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-700 rounded-full animate-pulse flex-shrink-0"></div>
              <span className="text-blue-200 text-xs sm:text-sm">Proudly serving Tanauan, Batangas since 1996</span>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-700 rounded-full animate-pulse flex-shrink-0"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactLocationPage;