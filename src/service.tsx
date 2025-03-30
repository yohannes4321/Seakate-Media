import React from 'react';
import {Footer} from './footer'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import logoImage from './assets/photo_2025-03-29_16-16-14.jpg'; // Import your logo image
 
function Services() {
  const location = useLocation();
  return (
    <div>
            <nav className="fixed w-full z-50 bg-gray-900/90 backdrop-blur-sm">
      <div className="container mx-auto px-8 py-3 flex items-center">
        {/* Circular Logo on Left (Fixed) */}
        <div className="h-16 w-16 rounded-full bg-white p-1 mr-4 flex-shrink-0"> {/* Circular container with white bg */}
          <Link to="/" className="h-full w-full flex items-center justify-center">
            <img 
              src={logoImage}
              alt="KYU MEDIA Logo"
              className="h-full w-full rounded-full object-cover" // Makes image circular
            />
          </Link>
        </div>

        {/* Centered Navigation Links */}
        <div className="hidden md:flex mx-auto space-x-8 items-center">
          <Link 
            to="/" 
            className={`relative px-2 py-1 text-white hover:text-[#04E4D8] transition-colors font-playfair ${location.pathname === '/' ? 'text-[#04E4D8]' : ''}`}
          >
            HOME
            {location.pathname === '/' && (
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-[#04E4D8] rounded-full"></span>
            )}
          </Link>
          <Link 
            to="/projects" 
            className={`relative px-2 py-1 text-white hover:text-[#04E4D8] transition-colors font-playfair ${location.pathname === '/projects' ? 'text-[#04E4D8]' : ''}`}
          >
            PROJECTS
            {location.pathname === '/projects' && (
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-[#04E4D8] rounded-full"></span>
            )}
          </Link>
          <Link 
            to="/services" 
            className={`relative px-2 py-1 text-white hover:text-[#04E4D8] transition-colors font-playfair ${location.pathname === '/services' ? 'text-[#04E4D8]' : ''}`}
          >
            SERVICES
            {location.pathname === '/services' && (
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-[#04E4D8] rounded-full"></span>
            )}
          </Link>
          <Link 
            to="/about" 
            className={`relative px-2 py-1 text-white hover:text-[#04E4D8] transition-colors font-playfair ${location.pathname === '/about' ? 'text-[#04E4D8]' : ''}`}
          >
            ABOUT
            {location.pathname === '/about' && (
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-[#04E4D8] rounded-full"></span>
            )}
          </Link>
          <Link 
            to="/contact" 
            className={`relative px-2 py-1 text-white hover:text-[#04E4D8] transition-colors font-playfair ${location.pathname === '/contact' ? 'text-[#04E4D8]' : ''}`}
          >
            CONTACT
            {location.pathname === '/contact' && (
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-[#04E4D8] rounded-full"></span>
            )}
          </Link>
        </div>
      </div>
    </nav>
    <div className="min-h-screen bg-gray-900   text-white pt-20">
   
      {/* Hero Section */}
      <section className="hero-gradient  bg-gray-900 ">
        <div className="container mx-auto px-4 bg-gray-900 ">
          <div className="max-w-4xl bg-gray-900 ">
           
            <h1 className="text-6xl md:text-7xl font-bold mb-8 text-teal  heading-font">
              Exceptional Photography<br />And Cinematography
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              From commercial shoots to intimate portraits, we bring your vision to life through our lens.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gray-900">
  <div className="container mx-auto px-4">
    {/* Original Commercial Section (Image Left, Text Right) */}
    <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
      <div>
        <img 
          src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e"
          alt="Commercial Photography"
          className="w-full h-[600px] object-cover rounded-lg shadow-2xl"
        />
      </div>
      <div>
        <h2 className="text-yellow-400 text xl font-bold mb-6"></h2>
        <h3 className="text-4xl md:text-7xl mb-8 heading-font text-teal ">
        Video Production<br />And Editing
        </h3>
        <p className="text-xl mb-6">
        - Marketing videos, social media content, weddings, documentaries, and more.   
<br />
         
- Story-driven approach that highlights your core message.   
</p>
        <ul className="text-xl text-gray-300 space-y-4">
          <li>• Product Photography</li>
          <li>• Corporate Portraits</li>
          <li>• Architecture & Interior</li>
          <li>• Event Coverage</li>
        </ul>
      </div>
    </div>

    {/* Reversed Section (Image Right, Text Left) */}
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <div className="md:order-2">
        <img 
          src="https://images.unsplash.com/photo-1496747611176-843222e1e57c"
          alt="Portrait Photography"
          className="w-full h-[600px] object-cover rounded-lg shadow-2xl"
        />
      </div>
      <div className="md:order-1">
        <h2 className="text-yellow-400 text-xl font-semibold mb-6"></h2>
        <h3 className="text-4xl md:text-5xl mb-8 heading-font text-teal ">
          Photography
        </h3>
        <p className="text-xl text-gray-300 mb-6">
        - Professional portraits, event photography, branded image libraries, and personal milestones.   
<br/>
- Expert composition, lighting, and styling to preserve your memories with clarity and charm. 
        </p>
        <ul className="text-xl text-gray-300 space-y-4">
          <li>• Professional Headshots</li>
          <li>• Family Portraits</li>
          <li>• Creative Portraiture</li>
          <li>• Editorial Photography</li>
        </ul>
      </div>
    </div>
  </div>
</section>
<div className="grid md:grid-cols-2 gap-16 items-center mb-32">
      <div>
        <img 
          src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e"
          alt="Commercial Photography"
          className="w-full h-[600px] object-cover rounded-lg shadow-2xl"
        />
      </div>
      <div>
        <h2 className="text-yellow-400 text xl font-bold mb-6"></h2>
        <h3 className="text-4xl md:text-7xl mb-8 heading-font text-teal ">
      Live Streaming And Broadcast   
        </h3>
        <p className="text-xl mb-6">
      
   - Seamless small-scale live stream setups for graduations, conferences, church services, or corporate events.   
<br/>
- Technical excellence ensuring your audience experiences the event as if they were there in person. 
<br />
         
- Story-driven approach that highlights your core message.   
</p>
        <ul className="text-xl text-gray-300 space-y-4">
          <li>• Product Photography</li>
          <li>• Corporate Portraits</li>
          <li>• Architecture & Interior</li>
          <li>• Event Coverage</li>
        </ul>
      </div>
    </div>

      {/* Service Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-yellow-400 text-xl font-bold mb-6"></h2>
          <h3 className="text-5xl md:text-5xl font-bold mb-16 heading-font text-teal ">
            Our Photography Services
          </h3>
          <div className="grid md:grid-cols-3 gap-8 bg-gray-900  ">
            <div className="service-card p-8 rounded-lg bg-gray-900 ">
              <img 
                src="https://images.unsplash.com/photo-1496747611176-843222e1e57c"
                alt="Portrait Photography"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h4 className="text-3xl mb-4 heading-font text-teal ">Portrait</h4>
              <p className="text-gray-300 text-lg">
                Professional portraits that capture personality and essence, perfect for personal branding and corporate headshots.
              </p>
            </div>
            <div className="service-card p-8 rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1505236858219-8359eb29e329"
                alt="Event Photography"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h4 className="text-3xl mb-4 heading-font text-teal ">Events</h4>
              <p className="text-gray-300 text-lg">
                Comprehensive event coverage ensuring every important moment is captured with style and precision.
              </p>
            </div>
            <div className="service-card p-8 rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
                alt="Product Photography"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <h4 className="text-3xl mb-4 heading-font text-teal ">Product</h4>
              <p className="text-gray-300 text-lg">
                Showcase your products with stunning photography that highlights every detail and feature.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
       <Footer/>
    </div></div>
  );
}

export default Services;