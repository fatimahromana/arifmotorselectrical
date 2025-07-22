'use client';

import React, { useState } from 'react';
import { ChevronDown, MapPin, Clock, Phone, Mail, Menu, X, Zap, Users, Award, Target, Heart, Wrench, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const AboutUsPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Parts & Supplies', href: '/electrical-supplies' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'FAQs', href: '/faqs' },
  ];

  const values = [
    {
      icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Honesty & Integrity",
      description: "We prioritize transparency, recommending only what you truly need without upselling, earning trust through fair practices.",
      color: "from-blue-800 to-blue-900"
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Customer Loyalty",
      description: "Our customers return for our reliable, affordable services and quality parts, built on decades of trust.",
      color: "from-red-700 to-red-800"
    },
    {
      icon: <Wrench className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Expert Craftsmanship",
      description: "With decades of experience, our skilled technicians deliver top-quality motor rewinding for lasting performance.",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Community Support",
      description: "We’re committed to serving Tanauan with honest service and quality parts, helping families and businesses thrive.",
      color: "from-red-600 to-red-700"
    }
  ];

  const milestones = [
    {
      year: "1996",
      title: "Founded",
      description: "Bernardo started Arif Motors Electrical near Tanauan South Central School with a passion for motor rewinding."
    },
    {
      year: "1999",
      title: "First Expansion",
      description: "Expanded to a new location at BPI Highway to meet growing demand for our services."
    },
    {
      year: "2009",
      title: "Main Branch Opened",
      description: "Moved to our current main branch in Darasa II, becoming a trusted hub for motor rewinding and supplies."
    },
    {
      year: "2025",
      title: "Decades of Trust",
      description: "Nearly 30 years of serving Tanauan with honesty, quality, and community-focused service."
    }
  ];

  const stats = [
    { number: "29+", label: "Years of Experience" },
    { number: "1", label: "Service Location" },
    { number: "1000+", label: "Motors Repaired" },
    { number: "100%", label: "Customer Trust" }
  ];

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
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
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
            <span className="text-blue-700 text-xs sm:text-sm font-semibold">⚡ Our Story & Values</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800 mb-4 sm:mb-6 tracking-tight px-2">
            About Arif Motors Electrical
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Since 1996, Arif Motors Electrical has been Tanauan’s trusted name for motor rewinding and electrical supplies, driven by honesty, quality, and community commitment.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-8 sm:py-12 lg:py-16">
        {/* Our Story Section */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-800 mb-4 sm:mb-6">Our Story</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">From a small shop to a trusted name in Tanauan</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Story Content */}
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 mx-2 sm:mx-0 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-800 to-blue-900 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                  <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-blue-800 mb-4">Founded with Passion</h3>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  Arif Motors Electrical started back in 1996 when Bernardo, with years of hands-on experience from here and abroad, decided to open a small shop near Tanauan South Central School. What began as a simple dream was grounded in honesty, hard work, and a commitment to serve the community with quality electrical services.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 mx-2 sm:mx-0 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-red-700 to-red-800 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                  <Target className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-red-700 mb-4">Growing with Trust</h3>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  From expanding beside BPI Highway in 1999 to settling in Darasa II in 2009, the journey reflects quiet dedication—growing steadily through trust, skill, and a commitment to reliable electrical services and supplies
                </p>
              </div>
            </div>

            {/* Stats Section */}
            <div className="space-y-6 sm:space-y-8">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 text-center group mx-2 sm:mx-0">
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-800 mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-sm sm:text-base font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-2xl mx-2 sm:mx-0">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 mr-4 sm:mr-6 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Nearly 30 years of trusted experience</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 mr-4 sm:mr-6 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Honest service with no upselling</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 mr-4 sm:mr-6 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Quality motor rewinding and parts</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-400 mr-4 sm:mr-6 flex-shrink-0" />
                    <span className="text-sm sm:text-base">Loyal customers and fair prices</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-800 mb-4 sm:mb-6">Our Core Values</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">The principles that guide our work</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group text-center mx-2 sm:mx-0">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${value.color} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{value.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-800 mb-4 sm:mb-6">Our Journey</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">Key milestones in our growth</p>
          </div>

          <div className="relative">
            {/* Timeline line - hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-800 to-red-700"></div>
            
            <div className="space-y-8 sm:space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                    <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 mx-2 sm:mx-0">
                      <div className={`inline-flex items-center bg-gradient-to-r ${index % 2 === 0 ? 'from-blue-800 to-blue-900' : 'from-red-700 to-red-800'} text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4`}>
                        {milestone.year}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{milestone.title}</h3>
                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className={`w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r ${index % 2 === 0 ? 'from-blue-800 to-blue-900' : 'from-red-700 to-red-800'} rounded-full border-4 border-white shadow-lg z-10`}></div>
                  </div>
                  
                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white p-8 sm:p-12 lg:p-16 rounded-2xl sm:rounded-3xl shadow-2xl text-center mx-2 sm:mx-0">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Ready to Experience the Difference?</h2>
            <p className="text-base sm:text-lg lg:text-xl text-blue-200 mb-6 sm:mb-8 leading-relaxed">
              Trust Arif Motors Electrical for honest, reliable motor rewinding and quality electrical supplies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <a
                href="tel:+639495738232"
                className="inline-flex items-center bg-gradient-to-r from-red-700 to-red-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold hover:from-red-800 hover:to-red-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 touch-manipulation text-sm sm:text-base"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                Call Us Today
              </a>
              <Link
                href="/contact-location"
                className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 touch-manipulation text-sm sm:text-base border border-white/20"
              >
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                Visit Our Location
              </Link>
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
                  Your trusted partner for motor rewinding and electrical supplies since 1996. Built on honesty, quality, and community.
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
                      <div className="text-blue-200 text-xs sm:text-sm break-words">Darasa II, Tanauan City, Batangas (in front of B-MEG Darasa)</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start justify-start">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-red-400 mr-4 sm:mr-6 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold text-white text-sm sm:text-base">Business Hours</div>
                      <div className="text-blue-200 text-xs sm:text-sm">Mon-Sat: 8AM-5PM | Closed on Sundays</div>
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
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-700 rounded-full flex-shrink-0 animate-pulse"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUsPage;
