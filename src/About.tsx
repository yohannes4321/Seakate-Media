import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import logoImage from './assets/photo_2025-03-29_16-16-14.jpg'; // Import your logo image
import { Footer } from './footer';
function About() {
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
    <div className="min-h-screen bg-gray-900 text-white pt-20">
     
      {/* Hero Section */}
      <section className="py-32 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            {/* <h2 className="text-yellow-400 text-xl md:text-2xl font-semibold mb-6 tracking-wider">ABOUT US</h2> */}
            <h1 className="text-7xl md:text-8xl lg:text-7xl font-bold  heading-font leading-tight text-teal ">
              CAPTURING MOMENTS,<br />CREATING STORIES
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              We're more than just photographers – we're storytellers who believe in the power of visual narratives.
            </p>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col justify-center h-full">
              {/* <h2 className="text-yellow-400 text-xl md:text-2xl font-semibold mb-6 tracking-wider">OUR JOURNEY</h2> */}
              <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 heading-font leading-tight text-teal ">
                A DECADE OF VISUAL<br />EXCELLENCE
              </h3>
              <p className="text-xl text-gray-300 mb-6">
                Since 2014, we've been crafting visual stories that resonate with audiences worldwide.
              </p>
              <p className="text-xl text-gray-300">
                Today, we're proud to be the trusted partner for brands and individuals who value exceptional photography and cinematography.
              </p>
            </div>
            <div className="h-full flex items-center">
              <img 
                src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d"
                alt="Camera equipment"
                className="w-full h-auto max-h-[600px] object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          {/* <h2 className="text-yellow-400 text-xl md:text-2xl font-semibold mb-6 tracking-wider text-teal ">OUR VALUES</h2> */}
          <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-16 heading-font leading-tight text-teal ">
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

      {/* Team Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          {/* <h2 className="text-yellow-400 text-xl md:text-2xl font-semibold mb-6 tracking-wider text-teal ">OUR TEAM</h2> */}
          <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-16 heading-font leading-tight text-teal ">
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
              <h4 className="text-3xl mb-2 heading-font text-teal ">DAVID CHEN</h4>
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
              <h4 className="text-3xl mb-2 heading-font text-teal ">SARAH WILLIAMS</h4>
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
              <h4 className="text-3xl mb-2 heading-font text-teal ">MICHAEL ROBERTS</h4>
              <p className="text-gray-400 text-lg">Cinematographer</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div></div>
  );
}

export default About;