'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, Zap, Wrench, Package, Info, MapPin, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const ArifMotorsLanding = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const wordData = [
    { word: 'supplies', sentence: 'tailored to meet your needs.' },
    { word: 'services', sentence: 'designed for your success.' },
    { word: 'repairs', sentence: 'that restore your equipment.' },
    { word: 'parts', sentence: 'built for lasting performance.' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % wordData.length);
        setIsVisible(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [wordData.length]);

  const dropdownItems = [
    { icon: Zap, text: 'Understanding Your Parts', color: 'text-blue-800', href: '/parts' },
    { icon: Wrench, text: 'Repair Services We Offer', color: 'text-red-700', href: '/services' },
    { icon: Package, text: 'Electrical Supplies We Carry', color: 'text-blue-800', href: '/electrical-supplies' },
    { icon: Info, text: 'About', color: 'text-red-700', href: '/about-us' },
    { icon: MapPin, text: 'Contact & Location', color: 'text-blue-800', href: '/contact-location' },
  ];

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Parts & Supplies', href: '/electrical-supplies' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'FAQs', href: '/faqs' },
  ];

  return (
    <div className="min-h-screen w-full bg-white flex flex-col" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-800 to-blue-900 shadow-lg sticky top-0 z-50 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <h1 className="text-center text-sm font-semibold text-white tracking-wider uppercase">
            ARIF MOTORS ELECTRICAL
          </h1>
        </div>
      </header>

      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 bg-white/80 backdrop-blur-sm w-full">
        <div className="flex items-center justify-between">
          <div className="text-3xl font-bold text-blue-800 tracking-tight"></div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
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
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 py-4 border-t border-gray-200 bg-white rounded-lg shadow-lg w-full">
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

      {/* Hero Section - Fixed Typography */}
      <section className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-8 sm:py-12 flex-grow">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 sm:space-y-10">
            <div>
              {/* Badge */}
              <div className="mb-8">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-blue-100 rounded-full px-5 sm:px-6 py-3 border border-blue-200">
                  <span className="text-blue-700 text-sm sm:text-sm font-semibold leading-relaxed">
                    Explore our range of{' '}
                    <span
                      className={`font-bold transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                    >
                      {wordData[currentWordIndex].word}
                    </span>
                    {' '}
                    <span
                      className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                    >
                      {wordData[currentWordIndex].sentence}
                    </span>
                  </span>
                </div>
              </div>

              {/* Main heading - Significantly improved mobile typography */}
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800 leading-[1.2] sm:leading-tight mb-8 sm:mb-6 tracking-tight">
                Trusted Repair Rewinding Services and Electrical Supplies
              </h2>

              {/* Subheading - Better spacing and sizing */}
              <div className="bg-gradient-to-r from-red-700 to-red-800 bg-clip-text text-transparent mb-8">
                <p className="text-xl sm:text-lg md:text-xl font-bold leading-relaxed">
                  Specialized in Motor Rewinding Since 1996
                </p>
              </div>

              {/* Description - Improved readability */}
              <p className="text-base sm:text-base md:text-lg text-gray-700 leading-[1.6] font-light">
                Serving with reliability, technical precision, and decades of experience. Your trusted partner for all electrical motor needs.
              </p>
            </div>

            {/* Dropdown Section - Better mobile touch target */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full bg-gradient-to-r from-blue-800 to-blue-900 text-white px-8 sm:px-8 py-5 sm:py-5 rounded-2xl font-semibold text-lg sm:text-lg flex items-center justify-between hover:from-blue-900 hover:to-blue-950 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 active:translate-y-0 touch-manipulation"
                aria-expanded={isDropdownOpen}
              >
                Find What You&apos;re Looking For
                <ChevronDown
                  className={`w-6 sm:w-6 h-6 sm:h-6 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Dropdown Menu - Better mobile spacing */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-3 bg-white border border-gray-200 rounded-2xl shadow-2xl z-40 overflow-hidden backdrop-blur-sm">
                  {dropdownItems.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <Link
                        key={index}
                        href={item.href}
                        className="flex items-center px-8 sm:px-8 py-5 sm:py-5 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition-all duration-300 border-b border-gray-100 last:border-b-0 group touch-manipulation"
                      >
                        <div className="w-12 sm:w-10 h-12 sm:h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4 sm:mr-4 group-hover:bg-white transition-colors duration-300">
                          <IconComponent className={`w-6 sm:w-5 h-6 sm:h-5 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                        </div>
                        <span className="text-gray-800 font-medium text-lg sm:text-lg group-hover:text-blue-800 transition-colors duration-300">
                          {item.text}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Stats - Better mobile hierarchy */}
            <div className="grid grid-cols-3 gap-6 sm:gap-6 pt-10 sm:pt-10 border-t border-gray-200">
              <div className="text-center group">
                <div className="text-3xl sm:text-3xl md:text-4xl font-bold text-blue-800 mb-3 group-hover:scale-110 transition-transform duration-300">29+</div>
                <div className="text-gray-600 font-medium text-sm sm:text-sm leading-tight">Years Experience</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl sm:text-3xl md:text-4xl font-bold text-red-700 mb-3 group-hover:scale-110 transition-transform duration-300">1000+</div>
                <div className="text-gray-600 font-medium text-sm sm:text-sm leading-tight">Motors Repaired</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl sm:text-3xl md:text-4xl font-bold text-blue-800 mb-3 group-hover:scale-110 transition-transform duration-300">2</div>
                <div className="text-gray-600 font-medium text-sm sm:text-sm leading-tight">Branches</div>
              </div>
            </div>
          </div>

          {/* Right Image - hidden on mobile */}
          <div className="relative hidden md:block">
            <Image
              src="/arif.png"
              alt="Electrical Services"
              width={500}
              height={400}
              className="w-full h-auto rounded-3xl object-cover max-h-[400px] sm:max-h-[500px]"
              priority
            />
            {/* Floating Elements */}
            <div className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-red-700 to-red-800 rounded-full animate-pulse shadow-lg"></div>
            <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-r from-blue-800 to-blue-900 rounded-full animate-bounce shadow-lg"></div>
            <div className="absolute top-1/2 -right-8 sm:-right-10 w-5 sm:w-6 h-5 sm:h-6 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full animate-ping shadow-lg"></div>
          </div>
        </div>
      </section>

      {/* Service Overview Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-8 sm:py-12 lg:py-20 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-red-50 to-blue-50 rounded-full px-4 sm:px-6 py-2 border border-red-200 mb-4 sm:mb-6">
              <span className="text-red-700 text-xs sm:text-sm font-semibold">Our Core Services</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800 mb-4 sm:mb-6 tracking-tight">
              Complete Electrical Motor Solutions
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From precision motor rewinding to quality electrical supplies, we provide comprehensive solutions to keep your equipment running smoothly.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
            {/* Motor Rewinding */}
            <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group">
              <div className="h-40 sm:h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center relative overflow-hidden">
                <Image
                  src="/1.jpg"
                  alt="Motor Rewinding Service"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-blue-800 mb-3 flex items-center">
                  <div className="w-5 sm:w-6 h-5 sm:h-6 bg-white rounded flex items-center justify-center mr-2">
                    <Wrench className="w-3 sm:w-4 h-3 sm:h-4 text-blue-800" />
                  </div>
                  Motor Rewinding
                </h3>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-4">
                  Professional motor rewinding services for various types of electric motors and appliances.
                </p>
                <Link
                  href="/services#motor-repair-section"
                  className="flex items-center text-red-700 font-semibold text-xs sm:text-sm hover:text-red-800 transition-colors duration-300 group touch-manipulation"
                >
                  Learn More
                  <svg
                    className="w-3 sm:w-4 h-3 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Washing Machine & Fan Repairs */}
            <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group">
              <div className="h-40 sm:h-48 bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center relative overflow-hidden">
                <Image
                  src="/2.jpg"
                  alt="Appliance Repair Service"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-red-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-red-700 mb-3 flex items-center">
                  <div className="w-5 sm:w-6 h-5 sm:h-6 bg-white rounded flex items-center justify-center mr-2">
                    <Package className="w-3 sm:w-4 h-3 sm:h-4 text-red-700" />
                  </div>
                  Appliance Repairs
                </h3>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-4">
                  Expert repair services for household appliances including washing machines and electric fans.
                </p>
                <Link
                  href="/services#appliance-repair-section"
                  className="flex items-center text-red-700 font-semibold text-xs sm:text-sm hover:text-red-800 transition-colors duration-300 group touch-manipulation"
                >
                  Learn More
                  <svg
                    className="w-3 sm:w-4 h-3 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Electrical Supply Sales */}
            <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group">
              <div className="h-40 sm:h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center relative overflow-hidden">
                <Image
                  src="/3.jpg"
                  alt="Electrical Supplies"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-blue-800 mb-3 flex items-center">
                  <div className="w-5 sm:w-6 h-5 sm:h-6 bg-white rounded flex items-center justify-center mr-2">
                    <Zap className="w-3 sm:w-4 h-3 sm:h-4 text-blue-800" />
                  </div>
                  Electrical Supplies
                </h3>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-4">
                  Wide selection of quality electrical components and motor parts for all your needs.
                </p>
                <Link
                  href="/electrical-supplies#available-products"
                  className="flex items-center text-red-700 font-semibold text-xs sm:text-sm hover:text-red-800 transition-colors duration-300 group touch-manipulation"
                >
                  Learn More
                  <svg
                    className="w-3 sm:w-4 h-3 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Appliance Spare Parts */}
            <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group">
              <div className="h-40 sm:h-48 bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center relative overflow-hidden">
                <Image
                  src="/4.jpg"
                  alt="Appliance Spare Parts"
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-red-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-red-700 mb-3 flex items-center">
                  <div className="w-5 sm:w-6 h-5 sm:h-6 bg-white rounded flex items-center justify-center mr-2">
                    <Info className="w-3 sm:w-4 h-3 sm:h-4 text-red-700" />
                  </div>
                  Spare Parts
                </h3>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-4">
                  Compatible replacement parts for household appliances, tested for quality and durability.
                </p>
                <Link
                  href="/electrical-supplies#spare-parts"
                  className="flex items-center text-red-700 font-semibold text-xs sm:text-sm hover:text-red-800 transition-colors duration-300 group touch-manipulation"
                >
                  Learn More
                  <svg
                    className="w-3 sm:w-4 h-3 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Service Features */}
          <div className="bg-white rounded-3xl shadow-lg p-4 sm:p-6 md:p-8">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-800 mb-4">Why Choose Our Services?</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600">Quality, reliability, and expertise you can trust</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <div className="text-center p-4 sm:p-6 md:p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 bg-gradient-to-b from-white to-blue-50">
                <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r from-blue-800 to-blue-900 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Wrench className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                </div>
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4">Expert Repairs</h4>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">Professional motor rewinding and electrical repairs with precision</p>
              </div>

              <div className="text-center p-4 sm:p-6 md:p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 bg-gradient-to-b from-white to-red-50">
                <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r from-red-700 to-red-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Package className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                </div>
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4">Quality Supplies</h4>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">Wide range of electrical components and motor parts in stock</p>
              </div>

              <div className="text-center p-4 sm:p-6 md:p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 bg-gradient-to-b from-white to-blue-50">
                <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r from-blue-800 to-blue-900 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Info className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                </div>
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4">Trusted Experience</h4>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">29+ years of proven expertise serving hundreds of satisfied customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-8 sm:py-12 lg:py-20 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-red-50 rounded-full px-4 sm:px-6 py-2 border border-blue-200 mb-4 sm:mb-6">
              <span className="text-blue-700 text-xs sm:text-sm font-semibold">What Our Customers Say</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800 mb-4 sm:mb-6 tracking-tight">
              Trusted by Hundreds of Satisfied Customers
            </h2>
            <p className="text-sm sm:text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Over 29 years of excellence in electrical motor services has earned us the trust and loyalty of our valued customers
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-base sm:text-xl">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 text-xs sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 italic">
                &ldquo;Arif Motors saved my business when our main motor failed. Their quick response and expert rewinding service got us back up and running in no time. Highly professional!&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-blue-800 to-blue-900 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-white font-bold text-base sm:text-lg">MR</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Muhammad Rahman</div>
                  <div className="text-gray-600 text-xs sm:text-sm">Factory Owner</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-base sm:text-xl">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 text-xs sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 italic">
                &ldquo;Been coming here for over 10 years. They have the best electrical supplies in town and their prices are very reasonable. The staff is knowledgeable and helpful.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-red-700 to-red-800 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-white font-bold text-base sm:text-lg">AS</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Ahmed Santos</div>
                  <div className="text-gray-600 text-xs sm:text-sm">Electrical Contractor</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-base sm:text-xl">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 text-xs sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 italic">
                &ldquo;Excellent service! They diagnosed and fixed our water pump motor perfectly. The quality of work is outstanding and they stand behind their repairs.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-blue-800 to-blue-900 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-white font-bold text-base sm:text-lg">JD</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Jose Dela Cruz</div>
                  <div className="text-gray-600 text-xs sm:text-sm">Homeowner</div>
                </div>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-base sm:text-xl">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 text-xs sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 italic">
                &ldquo;Fast and reliable service. When our industrial motor broke down, they had it fixed within 2 days. Their expertise in motor rewinding is unmatched.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-red-700 to-red-800 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-white font-bold text-base sm:text-lg">MC</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Maria Cruz</div>
                  <div className="text-gray-600 text-xs sm:text-sm">Manufacturing Manager</div>
                </div>
              </div>
            </div>

            {/* Testimonial 5 */}
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-base sm:text-xl">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 text-xs sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 italic">
                &ldquo;Great selection of electrical parts and very competitive prices. The owner is honest and provides good advice on which parts to buy for specific applications.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-blue-800 to-blue-900 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-white font-bold text-base sm:text-lg">RL</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Roberto Luna</div>
                  <div className="text-gray-600 text-xs sm:text-sm">Maintenance Technician</div>
                </div>
              </div>
            </div>

            {/* Testimonial 6 */}
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-4 sm:mb-6">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-base sm:text-xl">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 text-xs sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6 italic">
                &ldquo;They&apos;ve been serving our family business for years. Always dependable, fair pricing, and quality workmanship. Highly recommend for any electrical motor needs.&rdquo;
              </p>
              <div className="flex items-center">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-red-700 to-red-800 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <span className="text-white font-bold text-base sm:text-lg">TP</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm sm:text-base">Teresa Perez</div>
                  <div className="text-gray-600 text-xs sm:text-sm">Business Owner</div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
              <div className="group">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-800 mb-2 group-hover:scale-110 transition-transform duration-300">4.9/5</div>
                <div className="text-gray-600 font-medium text-xs sm:text-sm">Customer Rating</div>
              </div>
              <div className="group">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-red-700 mb-2 group-hover:scale-110 transition-transform duration-300">98%</div>
                <div className="text-gray-600 font-medium text-xs sm:text-sm">Satisfaction Rate</div>
              </div>
              <div className="group">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-800 mb-2 group-hover:scale-110 transition-transform duration-300">1000+</div>
                <div className="text-gray-600 font-medium text-xs sm:text-sm">Happy Customers</div>
              </div>
              <div className="group">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-red-700 mb-2 group-hover:scale-110 transition-transform duration-300">29+</div>
                <div className="text-gray-600 font-medium text-xs sm:text-sm">Years Trusted</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">
                  ARIF MOTORS ELECTRICAL
                </h3>
                <p className="text-blue-200 leading-relaxed text-sm sm:text-base md:text-lg">
                  Your trusted partner for electrical motor services and supplies since 1996. Quality, reliability, and expertise you can count on.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 bg-red-700 rounded-full flex items-center justify-center mr-3">
                    <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm sm:text-base">Main Branch</div>
                    <div className="text-blue-200 text-xs sm:text-sm">Darasa II, Tanauan City, Batangas</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 bg-red-700 rounded-full flex items-center justify-center mr-3">
                    <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm sm:text-base">Second Branch</div>
                    <div className="text-blue-200 text-xs sm:text-sm">Tanauan City, Batangas</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-base sm:text-lg md:text-xl font-bold text-white mb-6">Our Services</h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/services#motor-repair-section" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center group touch-manipulation">
                    <Wrench className="w-4 h-4 mr-2 group-hover:text-red-400 transition-colors duration-300" />
                    Motor Rewinding
                  </Link>
                </li>
                <li>
                  <Link href="/services#appliance-repair-section" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center group touch-manipulation">
                    <Package className="w-4 h-4 mr-2 group-hover:text-red-400 transition-colors duration-300" />
                    Appliance Repairs
                  </Link>
                </li>
                <li>
                  <Link href="/electrical-supplies#available-products" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center group touch-manipulation">
                    <Zap className="w-4 h-4 mr-2 group-hover:text-red-400 transition-colors duration-300" />
                    Electrical Supplies
                  </Link>
                </li>
                <li>
                  <Link href="/electrical-supplies#spare-parts" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center group touch-manipulation">
                    <Info className="w-4 h-4 mr-2 group-hover:text-red-400 transition-colors duration-300" />
                    Spare Parts
                  </Link>
                </li>
                <li>
                  <Link href="/services#appliance-repair-section" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center group touch-manipulation">
                    <Wrench className="w-4 h-4 mr-2 group-hover:text-red-400 transition-colors duration-300" />
                    Washing Machine Repair
                  </Link>
                </li>
                <li>
                  <Link href="/services#appliance-repair-section" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center group touch-manipulation">
                    <Package className="w-4 h-4 mr-2 group-hover:text-red-400 transition-colors duration-300" />
                    Electric Fan Repair
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-base sm:text-lg md:text-xl font-bold text-white mb-6">Quick Links</h4>
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
            <div>
              <h4 className="text-base sm:text-lg md:text-xl font-bold text-white mb-6">Get In Touch</h4>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 bg-red-700 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 sm:w-5 h-4 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm sm:text-base">Phone</div>
                    <div className="text-blue-200 text-xs sm:text-sm">+63 949 573 8232</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 bg-red-700 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 sm:w-5 h-4 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm sm:text-base">Email</div>
                    <div className="text-blue-200 text-xs sm:text-sm">arifmotorselectrical@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 bg-red-700 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-4 sm:w-5 h-4 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm sm:text-base">Business Hours</div>
                    <div className="text-blue-200 text-xs sm:text-sm">
                      <div>Mon-Sat: 8:00 AM - 6:00 PM</div>
                      <div>Sunday: 8:00 AM - 1:00 PM</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Social Media */}
              <div className="mt-6 sm:mt-8">
                <h5 className="font-semibold text-white text-sm sm:text-base mb-4">Follow Us</h5>
                <div className="flex space-x-4">
                  <Link href="https://www.facebook.com/profile.php?id=100069031163344" className="w-8 sm:w-10 h-8 sm:h-10 bg-blue-800 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors duration-300 group touch-manipulation">
                    <svg className="w-4 sm:w-5 h-4 sm:h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                    </svg>
                  </Link>
                  <Link href="https://www.instagram.com/arifmotors" className="w-8 sm:w-10 h-8 sm:h-10 bg-blue-800 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors duration-300 group touch-manipulation">
                    <svg className="w-4 sm:w-5 h-4 sm:h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.148 3.227-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.849 0-3.205.012-3.584.069-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.849-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </Link>
                  <Link href="https://www.tiktok.com/@arifmotors" className="w-8 sm:w-10 h-8 sm:h-10 bg-blue-800 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors duration-300 group touch-manipulation">
                    <svg className="w-4 sm:w-5 h-4 sm:h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V0h-3.445v13.672a2.896 2.896 0 0 1-2.878 2.876 2.897 2.897 0 0 1-2.876-2.876 2.897 2.897 0 0 1 2.876-2.877c.294 0 .58.042.855.122V6.656a6.338 6.338 0 0 0-6.315 6.315 6.338 6.338 0 0 0 6.315 6.316 6.338 6.338 0 0 0 6.315-6.316V8.279a8.233 8.233 0 0 0 4.921 1.658V6.514a4.782 4.782 0 0 1-1.998-.295z"/>
                    </svg>
                  </Link>
                  <Link href="mailto:arifmotorselectrical@gmail.com" className="w-8 sm:w-10 h-8 sm:h-10 bg-blue-800 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors duration-300 group touch-manipulation">
                    <svg className="w-4 sm:w-5 h-4 sm:h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-blue-800 mt-8 sm:mt-12 lg:mt-16 pt-6 sm:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-blue-200 text-xs sm:text-sm mb-4 md:mb-0">
                © 2025 Arif Motors Electrical. All rights reserved.
              </div>
              <div className="flex space-x-4 sm:space-x-6 text-xs sm:text-sm">
                <Link href="#" className="text-blue-200 hover:text-white transition-colors duration-300 touch-manipulation">Privacy Policy</Link>
                <Link href="#" className="text-blue-200 hover:text-white transition-colors duration-300 touch-manipulation">Terms of Service</Link>
                <Link href="#" className="text-blue-200 hover:text-white transition-colors duration-300 touch-manipulation">Warranty Info</Link>
              </div>
            </div>
            <div className="text-center mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-blue-800">
              <div className="text-blue-200 text-xs sm:text-sm">
                Proudly serving Tanauan, Batangas and surrounding areas since 1996
              </div>
              <div className="flex justify-center items-center mt-3 space-x-2">
                <div className="w-2 h-2 bg-red-700 rounded-full animate-pulse"></div>
                <span className="text-blue-200 text-xs">Trusted by over 1000+ satisfied customers</span>
                <div className="w-2 h-2 bg-red-700 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ArifMotorsLanding;