import React from 'react'

const About = () => {
  return (
    <>
    <div className="bg-[#fffef1] flex items-center justify-center">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-40 items-center md-20 py-72">
        {/* Left Side - Image */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800">
            <img 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80" 
              alt="Dental office waiting room"
              className="w-[2000px] h-[600px] object-cover"
            />
          </div>
          
          {/* Contact Card */}
          <div className="absolute bottom-0 left-0 bg-white rounded-2xl shadow-xl p-6 m-4 max-w-xs">
            <h3 className="text-slate-400 text-sm font-medium mb-2">CONTACT US?</h3>
            <p className="text-slate-800 text-lg">
              Call us: <span className="font-semibold">(0252) - 37 29 96</span>
            </p>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className="space-y-2">
          <div>
            <p className="text-slate-400 text-sm font-medium tracking-wider mb-1">
              VERY WELCOME
            </p>
            <h1 className="text-5xl font-bold text-slate-800 mb-1">
              ABOUT <span className="text-slate-900">DENTIST OF<br />ALPHEN</span>
            </h1>
          </div>

          <div className="space-y-9 text-slate-600 leading-relaxed text-xl">
            <p>
              Dentist van Alphen is a professional organization where dentistry 
              of optimal quality is supplied. We strive to ensure that our patients 
              go home satisfied.
            </p>
            <p>
              We pay a lot of attention to good service and believe it is 
              important to inform you carefully about treatments in advance. We 
              use procedures based on guidelines from the professional 
              association and scientific associations in oral care.
            </p>
          </div>

          <button className="border-2 border-slate-800 text-slate-800 px-8 py-3 rounded-full font-medium hover:bg-slate-800 hover:text-white transition-colors duration-300 mt-4">
            MORE ABOUT US
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default About