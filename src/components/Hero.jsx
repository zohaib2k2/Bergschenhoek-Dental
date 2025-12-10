import React from 'react'
import { Phone, MapPin, Mail, Clock, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    "/services_images/peridontology.png",
    "/services_images/endodontics.png",
    "/clinic_images/dentist_5.jpg",
    "/clinic_images/dentist_4.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <>
    <div className="relative bg-gradient-to-br pt-16 mb-5 pb-24 bg-[#fffdf2]  overflow-hidden pb-30">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 gap-24 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <p className="text-blue-400 text-md font-semibold tracking-wider uppercase">
                DENTIST `{"Bergschenhoek".toUpperCase()}`
              </p>
              
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                DENTISTRY OF <span className="text-blue-900">OPTIMAL QUALITY</span>
              </h1>
              
              <p className="text-gray-600 leading-relaxed text-xl">
                With us you are in good hands: our enthusiastic and qualified team works with the latest equipment and is aware of the latest developments. We also value a personal approach.
              </p>
              
              <p className="text-gray-800 font-medium text-xl">
                We strive to ensure that you have a permanent practitioner and have a listening ear for all your wishes and questions
              </p>
              
              <button className="bg-blue-400 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-medium transition-colors mt-8">
                REGISTER
              </button>
            </div>

            {/* Right Image Slider */}
            <div className="relative ">
              <div className="relative z-10 overflow-hidden rounded-lg shadow-2xl">
                {/* Slides Container */}
                <div className="relative w-full h-[500px] rounded-br-3xl">
                  {slides.map((slide, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <img
                        
                        src={slide}
                        alt={`Dentistry ${index + 1}`}
                        className="rounded-tl-3xl rounded-br-4xl w-full h-full object-cover my-2.5"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Decorative dots - indicator and navigation */}
              <div className="absolute right-8 top-1/2 transform translate-x-12 -translate-y-1/2 flex flex-col gap-3">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-blue-600 scale-125' 
                        : index === 0 
                        ? 'bg-blue-400' 
                        : index === 1 
                        ? 'bg-blue-600'
                        : index === 2
                        ? 'bg-slate-800'
                        : 'bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>

         {/* Bottom Feature Bar */}
        <div className="mb-10 bg-[#f7f7e8]">
          <div className="mx-auto pr-20 bg-[#fffef1]">
            <div className="bg-slate-900 text-white rounded-tr-full rounded-br-full shadow-xl px-12 py-10">
              <div className="grid grid-cols-3 gap-6">
                {/* Feature 1 */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
                    </svg>
                  </div>
                  <p className="text-sm">All treatments under one roof!</p>
                </div>

                {/* Feature 2 */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <p className="text-sm">A visit to the dentist becomes just as common as brushing your teeth</p>
                </div>

                {/* Feature 3 */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                    </svg>
                  </div>
                  <p className="text-sm">We work continuously according to the latest quality standards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    
    </>
  )
}

export default Hero