import React from 'react';
import { Footer } from './footer';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import logoImage from './assets/photo_1_2025-03-30_10-00-28.jpg';
import img1 from './assets/1st/Screenshot (123).png';
import img2 from './assets/1st/cg5fcukvbegabsx9ypgl (1).jpg';
import img3 from './assets/1st/jrzmqrsmc4rhr7kom8aw.jpg';
import k from './assets/video/TW-LiveStreamingOverview.jpg'
import img4 from './assets/video/download.jpg'
function Services() {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
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

      {/* Main Content */}
      <div className="pt-32 pb-20 px-8 md:px-16">
        {/* Hero Section */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#04E4D8]">
              Services We Provide
            </h1>
            <p className="text-xl text-gray-300">
              From commercial shoots to intimate portraits, we bring your vision to life through our lens.
            </p>
          </div>
        </section>

        {/* Services Sections */}
        <div className="space-y-32">
          {/* Photography Section */}
          <section className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-1 md:order-2">
                <img 
                  src={img2}
                  alt="Portrait Photography"
                  className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
                />
              </div>
              <div className="order-2 md:order-1">
                <h2 className="text-4xl font-bold mb-6 text-[#04E4D8]">
                  Photography
                </h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  - Professional portraits, event photography, branded image libraries, and personal milestones.<br/>
                  - Expert composition, lighting, and styling to preserve your memories with clarity and charm.
                </p>
                <ul className="text-lg text-gray-300 space-y-3">
                  <li>• Professional Headshots</li>
                  <li>• Family Portraits</li>
                  <li>• Creative Portraiture</li>
                  <li>• Editorial Photography</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Video Production Section */}
          <section className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={img3}
                  alt="Commercial Photography"
                  className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-6 text-[#04E4D8]">
                  Video Production & Editing
                </h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  - Marketing videos, social media content, weddings, documentaries, and more.<br/>
                  - Story-driven approach that highlights your core message.
                </p>
                <ul className="text-lg text-gray-300 space-y-3">
                  <li>• Product Videos</li>
                  <li>• Corporate Videos</li>
                  <li>• Event Coverage</li>
                  <li>• Documentary Films</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Creative Consultation Section */}
          <section className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-1 md:order-2">
                <img 
                  src={img4}
                  alt="Creative Consultation"
                  className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
                />
              </div>
              <div className="order-2 md:order-1">
                <h2 className="text-4xl font-bold mb-6 text-[#04E4D8]">
                  Creative Consultation
                </h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  - Ideation sessions, storyboarding, and planning for campaigns or special projects.<br/>
                  - Guidance on how to maximize your budget, brand consistency, and viewer engagement.
                </p>
                <ul className="text-lg text-gray-300 space-y-3">
                  <li>• Campaign Strategy</li>
                  <li>• Content Planning</li>
                  <li>• Brand Development</li>
                  <li>• Creative Direction</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Live Streaming Section */}
          <section className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={k}
                  alt="Live Streaming"
                  className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-6 text-[#04E4D8]">
                  Live Streaming & Broadcast
                </h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  - Seamless small-scale live stream setups for graduations, conferences, church services, or corporate events.<br/>
                  - Technical excellence ensuring your audience experiences the event as if they were there in person.
                </p>
                <ul className="text-lg text-gray-300 space-y-3">
                  <li>• Event Streaming</li>
                  <li>• Webinars</li>
                  <li>• Church Services</li>
                  <li>• Corporate Broadcasts</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Service Cards Section */}
        <section className="mt-32 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-[#04E4D8] text-center">
            Our Photography Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Portrait",
                description: "Professional portraits that capture personality and essence, perfect for personal branding and corporate headshots.",
                image: img3
              },
              {
                title: "Events",
                description: "Comprehensive event coverage ensuring every important moment is captured with style and precision.",
                image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329"
              },
              {
                title: "Product",
                description: "Showcase your products with stunning photography that highlights every detail and feature.",
                image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8"
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold mb-4 text-[#04E4D8]">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Services;