import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import logoImage from './assets/photo_1_2025-03-30_10-00-28.jpg';
import { Footer } from './footer';
import img1 from './assets/video/1.jpg'
import img2 from './assets/video/66.jpg'
import img3 from './assets/video/444.jpg'
function About() {
  const location = useLocation();
  return (
    <div>
      <nav className="fixed w-full z-50 bg-gradient-to-r from-gray-900 to-gray-800 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-8 py-4 flex items-center">
        {/* Magnified Logo with Stylish Look */}
        <div className="h-20 w-30 rounded-full bg-white p-2 mr-6 shadow-xl border-2 border-[#04E4D8] flex-shrink-0">
          <Link to="/" className="h-full w-full flex items-center justify-center">
            <img 
              src={logoImage}
              alt="Seakate Media Logo"
              className="h-full w-full rounded-full object-cover" // Magnified and highlighted
            />
          </Link>
        </div>

        {/* Centered Navigation Links with Highlighted Hover Effects */}
        <div className="hidden md:flex mx-auto space-x-8 items-center heading-font">
          {[
            { path: "/", label: "HOME" },
            { path: "/projects", label: "PROJECTS" },
            { path: "/services", label: "SERVICES" },
            { path: "/about", label: "ABOUT" },
            { path: "/contact", label: "CONTACT" }
          ].map((link) => (
            <Link 
              key={link.path}
              to={link.path}
              className={`relative px-3 py-2 text-white font-semibold transition-all heading-font
                ${location.pathname === link.path ? 'text-[#04E4D8] scale-110' : 'hover:text-[#04E4D8] hover:scale-105'}`}
            >
              {link.label}
              {location.pathname === link.path && (
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-[#04E4D8] heading-font rounded-full"></span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
    <div>
      <nav className="fixed w-full z-50 bg-gray-900/90 backdrop-blur-sm">
        {/* Navigation code remains the same */}
      </nav>
      
      <div className="min-h-screen bg-gray-900 text-white pt-20">
        {/* Hero Section - Full width */}
        <section className="py-32 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-7xl md:text-8xl lg:text-7xl font-bold heading-font leading-tight text-teal">
                Our Misson,
              </h1>
              <p className="text-xl md:text-2xl text-gray-300">
              To transform stories into compelling visual experiences that inspire, connect, and leave lasting impressions. We believe in the power of authentic storytelling to bridge communities and create meaningful impact.
              </p>
            </div>
          </div>
        </section>

        {/* Brand Section - Text left, image right */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-5xl md:text-6xl mb-8 heading-font text-teal">
                  Our Brand
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  Sekeat Media represents innovation, creativity, and excellence in visual storytelling. Our brand is built on trust, professionalism, and the consistent delivery of exceptional content that exceeds expectations.
                </p>
                <h2 className="text-5xl md:text-6xl mb-8 heading-font text-teal mt-12">
                  Our Approach
                </h2>
                <p className="text-xl text-gray-300">
                  We combine technical expertise with creative vision, working closely with clients to understand their unique needs and deliver tailored solutions that achieve their goals while maintaining the highest standards of quality.
                </p>
              </div>
              <div className="md:w-1/2">
                <img 
                  src={img2}
                  alt="Brand Identity"
                  className="w-full h-auto rounded-lg shadow-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Journey Section - Image left, text right */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2 order-1 md:order-1">
                <img 
                  src={img1}
                  alt="Camera equipment"
                  className="w-full h-auto rounded-lg shadow-xl object-cover"
                />
              </div>
              <div className="md:w-1/2 order-2 md:order-2">
                <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 heading-font leading-tight text-teal">
                   VISUAL<br />EXCELLENCE
                </h3>
                <p className="text-xl text-gray-300 mb-6">
                   we've been crafting visual stories that resonate with audiences worldwide.
                </p>
                <p className="text-xl text-gray-300">
                  Today, we're proud to be the trusted partner for brands and individuals who value exceptional photography and cinematography.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section - Full width */}
        

        {/* Team Section - Full width */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-16 heading-font leading-tight text-teal">
              MEET THE VISIONARIES
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col">
                <div className="aspect-square overflow-hidden rounded-lg mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                    alt="Team member"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-3xl mb-2 heading-font text-teal">DAVID CHEN</h4>
                <p className="text-gray-400 text-lg">Lead Photographer</p>
              </div>
              <div className="flex flex-col">
                <div className="aspect-square overflow-hidden rounded-lg mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
                    alt="Team member"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-3xl mb-2 heading-font text-teal">SARAH WILLIAMS</h4>
                <p className="text-gray-400 text-lg">Creative Director</p>
              </div>
              <div className="flex flex-col">
                <div className="aspect-square overflow-hidden rounded-lg mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                    alt="Team member"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-3xl mb-2 heading-font text-teal">MICHAEL ROBERTS</h4>
                <p className="text-gray-400 text-lg">Cinematographer</p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-16 heading-font leading-tight text-teal">
              WHAT SETS US APART
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all h-full">
                <h4 className="text-4xl mb-6 heading-font">ARTISTRY</h4>
                <p className="text-gray-300 text-lg">
                  We approach every project with creative vision and artistic excellence, ensuring each image tells a compelling story.
                </p>
              </div>
              <div className="p-8 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all h-full">
                <h4 className="text-4xl mb-6 heading-font">INNOVATION</h4>
                <p className="text-gray-300 text-lg">
                  Using cutting-edge technology and techniques, we push the boundaries of what's possible in photography.
                </p>
              </div>
              <div className="p-8 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all h-full">
                <h4 className="text-4xl mb-6 heading-font">DEDICATION</h4>
                <p className="text-gray-300 text-lg">
                  We're committed to exceeding expectations, paying attention to every detail to deliver exceptional results.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div></div>
  );
}

export default About;
