'use client';
import React, { useState, useEffect } from 'react';
import { ChevronDown, Zap, Wrench, Package, Info, MapPin, Menu, X, Phone, Clock, ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Define the Service interface
interface Service {
  id: number;
  name: string;
  image: string;
  description: string;
  features: string[];
  note?: string; // Optional, as only applianceServices has this property
}

const ArifMotorsServices = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAllServices, setShowAllServices] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Parts & Supplies', href: '/electrical-supplies' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'FAQs', href: '/faqs' },
  ];

  const motorServices: Service[] = [
    {
      id: 1,
      name: 'Industrial Electrical Motor',
      image: '/s1.jpg',
      description: 'Professional rewinding and repair services for industrial electrical motors. Our experienced technicians handle various horsepower ratings and motor types commonly used in manufacturing, production facilities, and heavy machinery applications.',
      features: ['Complete motor diagnosis', 'Precision rewinding', 'Performance testing', 'Quality assurance']
    },
    {
      id: 2,
      name: 'Single Phase Motor',
      image: '/s2.jpg',
      description: 'Expert repair and rewinding services for single-phase motors commonly found in household appliances, small machinery, and commercial equipment. We restore motors to their original specifications and performance.',
      features: ['Capacitor replacement', 'Winding repair', 'Bearing replacement', 'Electrical testing']
    },
    {
      id: 3,
      name: 'Three Phase Motor',
      image: '/s3.jpg',
      description: 'Comprehensive three-phase motor repair and rewinding services for industrial and commercial applications. Our technicians are skilled in handling various three-phase motor configurations and power ratings.',
      features: ['Stator rewinding', 'Rotor repair', 'Insulation testing', 'Load testing']
    },
    {
      id: 4,
      name: 'Blower Motor',
      image: '/s4.jpg',
      description: 'Specialized repair services for blower motors used in HVAC systems, ventilation equipment, and industrial applications. We ensure optimal airflow performance and energy efficiency after repair.',
      features: ['Fan blade balancing', 'Motor rewinding', 'Bearing service', 'Performance optimization']
    },
    {
      id: 5,
      name: 'Water Pump Motor',
      image: '/s5.jpg',
      description: 'Professional repair and maintenance services for water pump motors including submersible, centrifugal, and jet pump motors. We restore proper water flow and pressure performance.',
      features: ['Seal replacement', 'Impeller repair', 'Motor rewinding', 'Pressure testing']
    },
    {
      id: 6,
      name: 'Compressor Motor',
      image: '/s6.jpg',
      description: 'Expert repair services for compressor motors used in air conditioning units, refrigeration systems, and air compressors. We ensure proper cooling performance and energy efficiency.',
      features: ['Refrigerant handling', 'Motor rewinding', 'Electrical diagnostics', 'Performance testing']
    },
    {
      id: 7,
      name: 'Fan Motor',
      image: '/s7.jpg',
      description: 'Complete repair and rewinding services for various types of fan motors including ceiling fans, exhaust fans, and industrial ventilation fans. We restore quiet operation and optimal airflow.',
      features: ['Noise reduction', 'Speed control repair', 'Motor rewinding', 'Balancing service']
    }
  ];

  const applianceServices: Service[] = [
    {
      id: 8,
      name: 'Washing Machine Repair (Manual Only)',
      image: '/s8.jpg',
      description: 'Professional repair services specifically for manual washing machines. We do not service automatic units. Our technicians are experienced in troubleshooting and repairing manual washing machine motors, timers, and mechanical components.',
      features: ['Motor repair', 'Timer replacement', 'Mechanical diagnostics', 'Component replacement'],
      note: 'We specialize in manual washing machines only. Automatic units are not serviced.'
    }
  ];

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedService]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % motorServices.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 3 + motorServices.length) % motorServices.length);
  };

  const displayedServices = showAllServices ? motorServices : motorServices.slice(currentIndex, currentIndex + 3);

  const ServiceModal = ({ service, onClose }: { service: Service | null; onClose: () => void }) => {
    if (!service) return null;
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-gray-200/50">
        <div className="relative bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl mx-auto my-auto">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
          >
            <X className="w-5 h-5 text-gray-700" />
          </button>
          <div className="h-48 sm:h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-t-3xl overflow-hidden">
            <Image
              src={service.image}
              alt={service.name}
              width={600}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4 sm:p-6">
            <h3 className="text-xl sm:text-2xl font-bold text-blue-800 mb-4">{service.name}</h3>
            {service.note && (
              <div className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-4">
                <div className="flex items-center">
                  <Info className="w-5 h-5 text-red-700 mr-2" />
                  <span className="text-red-700 font-semibold text-sm">Important Note</span>
                </div>
                <p className="text-red-600 text-sm mt-2">{service.note}</p>
              </div>
            )}
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">{service.description}</p>
            <div className="mb-4">
              <h4 className="text-base sm:text-lg font-bold text-blue-800 mb-3">Service Features:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-red-700 rounded-full mr-3"></div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-red-50 rounded-2xl p-4 mb-4">
              <h4 className="text-base sm:text-lg font-bold text-blue-800 mb-3 flex items-center">
                <Package className="w-5 h-5 mr-2" />
                Pricing Information
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                <strong>No fixed estimated price</strong> - Our repair costs depend on several factors including the motor type,
                extent of damage, and the specific parts/materials that need replacement. Each repair is unique and requires
                individual assessment.
              </p>
              <div className="bg-white rounded-xl p-4 border border-blue-200">
                <div className="flex items-center text-blue-800 mb-2">
                  <Wrench className="w-4 h-4 mr-2" />
                  <span className="font-semibold text-sm">Best Practice</span>
                </div>
                <p className="text-gray-600 text-sm">
                  We recommend bringing your motor to our shop for accurate assessment and transparent pricing.
                  Our technicians will provide a detailed diagnosis and cost estimate before proceeding with any repairs.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-red-700 to-red-800 rounded-2xl p-4 text-white">
              <h4 className="text-base sm:text-lg font-bold mb-3 flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                For Inquiries
              </h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-3 opacity-80" />
                  <span className="text-sm">Call +63 949 573 8232</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-3 opacity-80" />
                  <span className="text-sm">Visit our shop at Darasa II, Tanauan City, Batangas</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-3 opacity-80" />
                  <span className="text-sm">Mon-Sat: 8:00 AM - 6:00 PM, Sunday: 8:00 AM - 1:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen w-full bg-white flex flex-col" style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
      <header className="bg-gradient-to-r from-blue-800 to-blue-900 shadow-lg sticky top-0 z-50 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <h1 className="text-center text-sm font-semibold text-white tracking-wider uppercase">
            ARIF MOTORS ELECTRICAL
          </h1>
        </div>
      </header>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 bg-white/80 backdrop-blur-sm w-full">
        <div className="flex items-center justify-between">
          <div className="text-3xl font-bold text-blue-800 tracking-tight"></div>
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-all duration-300 font-medium text-sm tracking-wide relative group ${
                  item.name === 'Services'
                    ? 'text-blue-800 font-bold'
                    : 'text-gray-700 hover:text-blue-800'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-800 transition-all duration-300 ${
                  item.name === 'Services' ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-800 transition-colors duration-300 p-2 rounded-lg hover:bg-blue-50 touch-manipulation"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200 bg-white rounded-lg shadow-lg w-full">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block py-2 px-4 transition-all duration-300 font-medium rounded-lg mx-2 touch-manipulation ${
                  item.name === 'Services'
                    ? 'text-blue-800 bg-blue-50 font-bold'
                    : 'text-gray-700 hover:text-blue-800 hover:bg-blue-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-red-50 rounded-full px-4 py-2 sm:px-6 sm:py-3 border border-blue-200 mb-4 sm:mb-6">
            <Wrench className="w-4 sm:w-5 h-4 sm:h-5 text-blue-700 mr-2" />
            <span className="text-blue-700 text-xs sm:text-sm font-semibold">Our Professional Services</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800 mb-4 sm:mb-6 tracking-tight">
            Expert Motor Repair & Appliance Services
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Professional motor rewinding and appliance repair services with 29+ years of experience.
            Quality workmanship, reliable solutions, and competitive pricing for all your electrical motor needs.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12 max-w-3xl mx-auto">
          <div className="text-center group">
            <div className="text-2xl sm:text-3xl font-bold text-blue-800 mb-2 group-hover:scale-110 transition-transform duration-300">29+</div>
            <div className="text-gray-600 font-medium text-xs sm:text-sm">Years Experience</div>
          </div>
          <div className="text-center group">
            <div className="text-2xl sm:text-3xl font-bold text-red-700 mb-2 group-hover:scale-110 transition-transform duration-300">1000+</div>
            <div className="text-gray-600 font-medium text-xs sm:text-sm">Motors Repaired</div>
          </div>
          <div className="text-center group">
            <div className="text-2xl sm:text-3xl font-bold text-blue-800 mb-2 group-hover:scale-110 transition-transform duration-300">98%</div>
            <div className="text-gray-600 font-medium text-xs sm:text-sm">Success Rate</div>
          </div>
          <div className="text-center group">
            <div className="text-2xl sm:text-3xl font-bold text-red-700 mb-2 group-hover:scale-110 transition-transform duration-300">3</div>
            <div className="text-gray-600 font-medium text-xs sm:text-sm">Months Warranty</div>
          </div>
        </div>
      </section>
      <section id="motor-repair-section" className="bg-gradient-to-b from-white to-gray-50 py-8 sm:py-12 lg:py-16 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-blue-100 rounded-full px-4 py-2 sm:px-6 sm:py-3 border border-blue-200 mb-4 sm:mb-6">
              <Zap className="w-4 sm:w-5 h-4 sm:h-5 text-blue-7
00 mr-2" />
              <span className="text-blue-700 text-xs sm:text-sm font-semibold">Motor Rewinding & Repair Services</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 mb-4 sm:mb-6 tracking-tight">
              Motor Rewinding & Repair Services
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
              Expert motor rewinding and repair services for industrial, commercial, and residential applications.
              We restore motors to their original performance and efficiency standards.
            </p>
          </div>
          <div className="relative">
            <div className="flex items-center">
              <button
                onClick={handlePrev}
                className="hidden sm:block absolute -left-12 lg:-left-16 z-10 bg-blue-800 hover:bg-red-700 rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none"
                aria-label="Previous services"
              >
                <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
              </button>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full">
                {displayedServices.map((service, index) => (
                  <div
                    key={service.id}
                    className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer animate-slide-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => setSelectedService(service)}
                  >
                    <div className="h-40 sm:h-48 bg-gradient-to-br from-blue-100 to-blue-200 relative overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.name}
                        width={300}
                        height={200}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-blue-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-4 right-4 w-8 sm:w-10 h-8 sm:h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 text-blue-800" />
                      </div>
                    </div>
                    <div className="p-4 sm:p-6">
                      <h3 className="text-base sm:text-lg font-bold text-blue-800 mb-3 group-hover:text-red-700 transition-colors duration-300">
                        {service.name}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                        {service.description}
                      </p>
                      <div className="flex items-center text-red-700 font-semibold text-xs sm:text-sm group-hover:text-red-800 transition-colors duration-300">
                        <span>View Details</span>
                        <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={handleNext}
                className="hidden sm:block absolute -right-12 lg:-right-16 z-10 bg-blue-800 hover:bg-red-700 rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 hover:sc
ale-110 focus:outline-none"
                aria-label="Next services"
              >
                <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
              </button>
            </div>
            <div className="sm:hidden flex justify-center mt-6 w-full">
              {showAllServices ? (
                <button
                  onClick={() => setShowAllServices(false)}
                  className="bg-blue-800 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none"
                  aria-label="Hide services"
                >
                  Hide
                </button>
              ) : (
                <button
                  onClick={() => setShowAllServices(true)}
                  className="bg-blue-800 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none"
                  aria-label="Show more services"
                >
                  Show More
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
      <section id="appliance-repair-section" className="bg-gradient-to-b from-gray-50 to-white py-8 sm:py-12 lg:py-16 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-red-50 to-red-100 rounded-full px-4 py-2 sm:px-6 sm:py-3 border border-red-200 mb-4 sm:mb-6">
              <Package className="w-4 sm:w-5 h-4 sm:h-5 text-red-700 mr-2" />
              <span className="text-red-700 text-xs sm:text-sm font-semibold">Appliance Repair Services</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-700 mb-4 sm:mb-6 tracking-tight">
              Household Appliance Repairs
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
              Specialized repair services for household appliances. We focus on manual washing machines
              and provide reliable, long-lasting repair solutions.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="max-w-md w-full">
              {applianceServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedService(service)}
                >
                  <div className="h-40 sm:h-48 bg-gradient-to-br from-red-100 to-red-200 relative overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.name}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-red-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 w-8 sm:w-10 h-8 sm:h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 text-red-700" />
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-base sm:text-lg font-bold text-red-700 mb-3 group-hover:text-blue-800 transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                      Professional repair services for manual washing machines. Expert diagnosis and quality repairs.
                    </p>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-3 mb-4">
                      <div className="flex items-center text-red-700 mb-1">
                        <Info className="w-3 sm:w-4 h-3 sm:h-4 mr-2" />
                        <span className="font-semibold text-xs">Service Note</span>
                      </div>
                      <p className="text-red-600 text-xs">Manual washing machines only - no automatic units</p>
                    </div>
                    <div className="flex items-center text-red-700 font-semibold text-xs sm:text-sm group-hover:text-red-800 transition-colors duration-300">
                      <span>View Details</span>
                      <ArrowRight className="w-3 sm:w-4 h-3 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-white to-gray-50 py-8 sm:py-12 lg:py-16 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-red-50 rounded-full px-4 py-2 sm:px-6 sm:py-3 border border-blue-200 mb-4 sm:mb-6">
              <Wrench className="w-4 sm:w-5 h-4 sm:h-5 text-blue-700 mr-2" />
              <span className="text-blue-700 text-xs sm:text-sm font-semibold">Our Service Process</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 mb-4 sm:mb-6 tracking-tight">
              How We Work
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
              Our systematic approach ensures quality repairs and customer satisfaction every time.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            <div className="text-center p-4 sm:p-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2">
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-blue-800 to-blue-900 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg sm:text-xl">1</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-blue-800 mb-3 sm:mb-4">Assessment</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Bring your motor to our shop for professional diagnosis and damage assessment.</p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2">
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-red-700 to-red-800 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg sm:text-xl">2</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-red-700 mb-3 sm:mb-4">Quotation</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Receive detailed cost estimate based on required repairs and replacement parts.</p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2">
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-blue-800 to-blue-900 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg sm:text-xl">3</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-blue-800 mb-3 sm:mb-4">Repair</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Expert technicians perform precision repairs using quality materials and proven techniques.</p>
            </div>
            <div className="text-center p-4 sm:p-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2">
              <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-red-700 to-red-800 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg sm:text-xl">4</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-red-700 mb-3 sm:mb-4 oben">Testing</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Comprehensive performance testing ensures your motor operates like new before pickup.</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
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
            <div>
              <h4 className="text-base sm:text-lg md:text-xl font-bold text-white mb-4 sm:mb-6">Our Services</h4>
              <ul className="space-y-3 sm:space-y-4">
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
            <div>
              <h4 className="text-base sm:text-lg md:text-xl font-bold text-white mb-4 sm:mb-6">Quick Links</h4>
              <ul className="space-y-3 sm:space-y-4">
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
            <div>
              <h4 className="text-base sm:text-lg md:text-xl font-bold text-white mb-4 sm:mb-6">Get In Touch</h4>
              <div className="space-y-4 sm:space-y-6">
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
              <div className="mt-4 sm:mt-6">
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
                    <svg className="w-4 sm W-5 h-4 sm:h-5 text-white group-hover:scale-110 t
ransition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V0h-3.445v13.672a2.896 2.896 0 0 1-2.896 2.896c-1.6 0-2.896-1.296-2.896-2.896s1.296-2.896 2.896-2.896c.307 0 .602.05.879.139V7.486a6.339 6.339 0 0 0-5.418 6.318c0 3.505 2.842 6.347 6.347 6.347s6.347-2.842 6.347-6.347V6.686h3.445c0 1.686.195 3.345.568 4.947.373 1.602 1.013 3.095 1.896 4.395a9.766 9.766 0 0 1-2.896 2.896c-1.3.883-2.793 1.523-4.395 1.896a12.667 12.667 0 0 1-4.947.568c-7.013 0-12.667-5.654-12.667-12.667S5.654 0 12.667 0c2.193 0 4.27.556 6.089 1.54V6.686z"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 sm:mt-12 pt-6 border-t border-blue-800/50 text-center">
            <p className="text-blue-200 text-xs sm:text-sm">
              &copy; {new Date().getFullYear()} Arif Motors Electrical. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
      {selectedService && <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />}
    </div>
  );
};

// Add CSS for smooth slide-in animation
const styles = `
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  .animate-slide-in {
    animation: slideIn 0.5s ease-out forwards;
  }
`;

if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

export default ArifMotorsServices;