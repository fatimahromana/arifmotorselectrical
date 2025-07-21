'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, Zap, Wrench, Package, Info, MapPin, Menu, X } from 'lucide-react';

const ArifMotorsLanding = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const words = ['supplies', 'services', 'repairs', 'parts'];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsVisible(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const dropdownItems = [
    { icon: Zap, text: 'Understanding Your Parts', color: 'text-blue-800' },
    { icon: Wrench, text: 'Repair Services We Offer', color: 'text-red-700' },
    { icon: Package, text: 'Electrical Supplies We Carry', color: 'text-blue-800' },
    { icon: Info, text: 'About', color: 'text-red-700' },
    { icon: MapPin, text: 'Contact & Location', color: 'text-blue-800' },
  ];

  const navItems = ['Home', 'About Us', 'Parts & Supplies', 'Services', 'Gallery', 'FAQs'];

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
              <a
                key={item}
                href="#"
                className="text-gray-700 hover:text-blue-800 transition-all duration-300 font-medium text-sm tracking-wide relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-800 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-800 transition-colors duration-300 p-2 rounded-lg hover:bg-blue-50"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 py-4 border-t border-gray-200 bg-white rounded-lg shadow-lg">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="block py-3 px-4 text-gray-700 hover:text-blue-800 hover:bg-blue-50 transition-all duration-300 font-medium rounded-lg mx-2"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section with enhanced design */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            <div>
              {/* Enhanced badge */}
              <div className="mb-6">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-blue-100 rounded-full px-6 py-2 border border-blue-200">
                  <span className="text-blue-700 text-sm font-semibold">
                    Explore our range of{' '}
                    <span
                      className={`font-bold transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                      style={{ display: 'inline-block', minWidth: '60px' }}
                    >
                      {words[currentWordIndex]}
                    </span>
                    {' tailored to meet your needs.'}
                  </span>
                </div>
              </div>

              {/* Main heading - all blue as requested */}
              <h2 className="text-4xl lg:text-5xl font-bold text-blue-800 leading-tight mb-6 tracking-tight">
                Trusted Repair Services and Electrical Supplies
              </h2>

              {/* Enhanced subheading */}
              <div className="bg-gradient-to-r from-red-700 to-red-800 bg-clip-text text-transparent">
                <p className="text-xl font-bold mb-4">
                  Specialized in Motor Rewinding Since 1999
                </p>
              </div>

              {/* Enhanced description */}
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                Serving with reliability, technical precision, and decades of experience. Your trusted partner for all electrical motor needs.
              </p>
            </div>

            {/* Enhanced Dropdown Section */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full bg-gradient-to-r from-blue-800 to-blue-900 text-white px-8 py-5 rounded-2xl font-semibold text-lg flex items-center justify-between hover:from-blue-900 hover:to-blue-950 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 active:translate-y-0"
              >
                Find What You&apos;re Looking For
                <ChevronDown
                  className={`w-6 h-6 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Enhanced Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-3 bg-white border border-gray-200 rounded-2xl shadow-2xl z-40 overflow-hidden backdrop-blur-sm">
                  {dropdownItems.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <a
                        key={index}
                        href="#"
                        className="flex items-center px-8 py-5 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 transition-all duration-300 border-b border-gray-100 last:border-b-0 group"
                      >
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4 group-hover:bg-white transition-colors duration-300">
                          <IconComponent className={`w-5 h-5 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                        </div>
                        <span className="text-gray-800 font-medium text-lg group-hover:text-blue-800 transition-colors duration-300">
                          {item.text}
                        </span>
                      </a>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-gray-200">
              <div className="text-center group">
                <div className="text-4xl font-bold text-blue-800 mb-2 group-hover:scale-110 transition-transform duration-300">25+</div>
                <div className="text-gray-600 font-medium text-sm">Years Experience</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-red-700 mb-2 group-hover:scale-110 transition-transform duration-300">1000+</div>
                <div className="text-gray-600 font-medium text-sm">Motors Repaired</div>
              </div>
              <div className="text-center group">
                <div className="text-4xl font-bold text-blue-800 mb-2 group-hover:scale-110 transition-transform duration-300">2</div>
                <div className="text-gray-600 font-medium text-sm">Branches</div>
              </div>
            </div>
          </div>

          {/* Right Image with clean styling */}
          <div className="relative">
            <img
              src="/arif.png"
              alt="Electrical Services"
              className="w-full h-auto rounded-3xl"
            />

            {/* Enhanced Floating Elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-red-700 to-red-800 rounded-full animate-pulse shadow-lg"></div>
            <div className="absolute -bottom-6 -right-6 w-10 h-10 bg-gradient-to-r from-blue-800 to-blue-900 rounded-full animate-bounce shadow-lg"></div>
            <div className="absolute top-1/2 -right-10 w-6 h-6 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full animate-ping shadow-lg"></div>
          </div>
        </div>
      </div>

      {/* Service Overview Section */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-red-50 to-blue-50 rounded-full px-6 py-2 border border-red-200 mb-6">
              <span className="text-red-700 text-sm font-semibold">Our Core Services</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-800 mb-6 tracking-tight">
              Complete Electrical Motor Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From precision motor rewinding to quality electrical supplies, we provide comprehensive services to keep your equipment running smoothly
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
            {/* Motor Rewinding */}
            <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center relative overflow-hidden">
                <img
                  src="/1.jpg"
                  alt="Motor Rewinding Service"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center">
                  <div className="w-6 h-6 bg-white rounded flex items-center justify-center mr-2">
                    <Wrench className="w-4 h-4 text-blue-800" />
                  </div>
                  Motor Rewinding
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Professional motor rewinding services for various types of electric motors and appliances.
                </p>
                <button className="flex items-center text-red-700 font-semibold text-sm hover:text-red-800 transition-colors duration-300 group">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Washing Machine & Fan Repairs */}
            <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center relative overflow-hidden">
                <img
                  src="/2.jpg"
                  alt="Appliance Repair Service"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-red-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-red-700 mb-3 flex items-center">
                  <div className="w-6 h-6 bg-white rounded flex items-center justify-center mr-2">
                    <Package className="w-4 h-4 text-red-700" />
                  </div>
                  Appliance Repairs
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Expert repair services for household appliances including washing machines and electric fans.
                </p>
                <button className="flex items-center text-red-700 font-semibold text-sm hover:text-red-800 transition-colors duration-300 group">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Electrical Supply Sales */}
            <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center relative overflow-hidden">
                <img
                  src="/3.jpg"
                  alt="Electrical Supplies"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-blue-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center">
                  <div className="w-6 h-6 bg-white rounded flex items-center justify-center mr-2">
                    <Zap className="w-4 h-4 text-blue-800" />
                  </div>
                  Electrical Supplies
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Wide selection of quality electrical components and motor parts for all your needs.
                </p>
                <button className="flex items-center text-red-700 font-semibold text-sm hover:text-red-800 transition-colors duration-300 group">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Appliance Spare Parts */}
            <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group">
              <div className="h-48 bg-gradient-to-br from-red-100 to-red-200 flex items-center justify-center relative overflow-hidden">
                <img
                  src="/4.jpg"
                  alt="Appliance Spare Parts"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-red-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-red-700 mb-3 flex items-center">
                  <div className="w-6 h-6 bg-white rounded flex items-center justify-center mr-2">
                    <Info className="w-4 h-4 text-red-700" />
                  </div>
                  Spare Parts
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  Compatible replacement parts for household appliances, tested for quality and durability.
                </p>
                <button className="flex items-center text-red-700 font-semibold text-sm hover:text-red-800 transition-colors duration-300 group">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Service Features */}
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-blue-800 mb-4">Why Choose Our Services?</h3>
              <p className="text-gray-600 text-lg">Quality, reliability, and expertise you can trust</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 bg-gradient-to-b from-white to-blue-50">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-800 to-blue-900 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Wrench className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Expert Repairs</h4>
                <p className="text-gray-600 text-lg leading-relaxed">Professional motor rewinding and electrical repairs with precision</p>
              </div>

              <div className="text-center p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 bg-gradient-to-b from-white to-red-50">
                <div className="w-20 h-20 bg-gradient-to-r from-red-700 to-red-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Package className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Quality Supplies</h4>
                <p className="text-gray-600 text-lg leading-relaxed">Wide range of electrical components and motor parts in stock</p>
              </div>

              <div className="text-center p-8 rounded-2xl hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 bg-gradient-to-b from-white to-blue-50">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-800 to-blue-900 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Info className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">Trusted Experience</h4>
                <p className="text-gray-600 text-lg leading-relaxed">25+ years of proven expertise serving hundreds of satisfied customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Testimonials Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-red-50 rounded-full px-6 py-2 border border-blue-200 mb-6">
              <span className="text-blue-700 text-sm font-semibold">What Our Customers Say</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-800 mb-6 tracking-tight">
              Trusted by Hundreds of Satisfied Customers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Over 25 years of excellence in electrical motor services has earned us the trust and loyalty of our valued customers
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-xl">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                &quot;Arif Motors saved my business when our main motor failed. Their quick response and expert rewinding service got us back up and running in no time. Highly professional!&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-800 to-blue-900 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">MR</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Muhammad Rahman</div>
                  <div className="text-gray-600 text-sm">Factory Owner</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-xl">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                &quot;Been coming here for over 10 years. They have the best electrical supplies in town and their prices are very reasonable. The staff is knowledgeable and helpful.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-red-700 to-red-800 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">AS</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Ahmed Santos</div>
                  <div className="text-gray-600 text-sm">Electrical Contractor</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-xl">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                &quot;Excellent service! They diagnosed and fixed our water pump motor perfectly. The quality of work is outstanding and they stand behind their repairs.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-800 to-blue-900 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">JD</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Jose Dela Cruz</div>
                  <div className="text-gray-600 text-sm">Homeowner</div>
                </div>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-xl">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                &quot;Fast and reliable service. When our industrial motor broke down, they had it fixed within 2 days. Their expertise in motor rewinding is unmatched.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-red-700 to-red-800 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">MC</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Maria Cruz</div>
                  <div className="text-gray-600 text-sm">Manufacturing Manager</div>
                </div>
              </div>
            </div>

            {/* Testimonial 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-xl">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                &quot;Great selection of electrical parts and very competitive prices. The owner is honest and provides good advice on which parts to buy for specific applications.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-800 to-blue-900 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">RL</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Roberto Luna</div>
                  <div className="text-gray-600 text-sm">Maintenance Technician</div>
                </div>
              </div>
            </div>

            {/* Testimonial 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-xl">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                &quot;They&apos;ve been serving our family business for years. Always dependable, fair pricing, and quality workmanship. Highly recommend for any electrical motor needs.&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-red-700 to-red-800 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">TP</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Teresa Perez</div>
                  <div className="text-gray-600 text-sm">Business Owner</div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="group">
                <div className="text-3xl font-bold text-blue-800 mb-2 group-hover:scale-110 transition-transform duration-300">4.9/5</div>
                <div className="text-gray-600 font-medium text-sm">Customer Rating</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-red-700 mb-2 group-hover:scale-110 transition-transform duration-300">98%</div>
                <div className="text-gray-600 font-medium text-sm">Satisfaction Rate</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-blue-800 mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
                <div className="text-gray-600 font-medium text-sm">Happy Customers</div>
              </div>
              <div className="group">
                <div className="text-3xl font-bold text-red-700 mb-2 group-hover:scale-110 transition-transform duration-300">25+</div>
                <div className="text-gray-600 font-medium text-sm">Years Trusted</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
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
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-red-700 rounded-full flex items-center justify-center mr-3">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Main Branch</div>
                    <div className="text-blue-200 text-sm">Darasa II, Tanauan City, Batangas</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-red-700 rounded-full flex items-center justify-center mr-3">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Second Branch</div>
                    <div className="text-blue-200 text-sm">Tanauan City, Batangas</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6">Our Services</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center group">
                    <Wrench className="w-4 h-4 mr-2 group-hover:text-red-400 transition-colors duration-300" />
                    Motor Rewinding
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center group">
                    <Package className="w-4 h-4 mr-2 group-hover:text-red-400 transition-colors duration-300" />
                    Appliance Repairs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center group">
                    <Zap className="w-4 h-4 mr-2 group-hover:text-red-400 transition-colors duration-300" />
                    Electrical Supplies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center group">
                    <Info className="w-4 h-4 mr-2 group-hover:text-red-400 transition-colors duration-300" />
                    Spare Parts
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center group">
                    <Wrench className="w-4 h-4 mr-2 group-hover:text-red-400 transition-colors duration-300" />
                    Washing Machine Repair
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center group">
                    <Package className="w-4 h-4 mr-2 group-hover:text-red-400 transition-colors duration-300" />
                    Electric Fan Repair
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center group">
                      <ChevronDown className="w-4 h-4 mr-2 rotate-[-90deg] group-hover:text-red-400 transition-colors duration-300" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6">Get In Touch</h4>
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-red-700 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Phone</div>
                    <div className="text-blue-200">+63 949 573 8232</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-red-700 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Email</div>
                    <div className="text-blue-200">arifmotorselectrical@gmail.com</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-red-700 rounded-full flex items-center justify-center mr-3 mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white">Business Hours</div>
                    <div className="text-blue-200 text-sm">
                      <div>Mon-Sat: 8:00 AM - 6:00 PM</div>
                      <div>Sunday: 8:00 AM - 1:00 PM</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h5 className="font-semibold text-white mb-4">Follow Us</h5>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 bg-blue-800 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors duration-300 group">
                    <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-800 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors duration-300 group">
                    <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-800 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors duration-300 group">
                    <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.197.232.225.435.166.671-.061.24-.198.772-.225.882-.402.154-.402.154-.925-.093C4.297 16.465 3.201 13.98 3.201 11.987c0-4.492 3.267-8.617 9.417-8.617 4.955 0 8.804 3.532 8.804 8.25 0 4.915-3.102 8.867-7.404 8.867-1.447 0-2.809-.753-3.273-1.646 0 0-.719 2.735-.892 3.402-.323 1.238-1.201 2.786-1.789 3.734C10.212 23.983 11.099 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 bg-blue-800 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors duration-300 group">
                    <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-blue-800 mt-16 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-blue-200 text-sm mb-4 md:mb-0">
                © 2025 Arif Motors Electrical. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Terms of Service</a>
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">Warranty Info</a>
              </div>
            </div>
            <div className="text-center mt-6 pt-6 border-t border-blue-800">
              <div className="text-blue-200 text-sm">
                Proudly serving Tanauan, Batangas and surrounding areas since 1999
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