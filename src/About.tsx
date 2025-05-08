import React, { useEffect } from 'react';
import  { useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Footer } from './footer';
import { Link } from 'react-router-dom';
 
import { useLocation } from 'react-router-dom';
import logoImage from './assets/Seakate Media logo.png'; // Import your logo image
 
const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About - Seakate';
  }, []);

  return (
    <main className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
     
      <nav className="fixed w-full z-50 bg-gradient-to-r from-gray-900 to-gray-800 backdrop-blur-sm shadow-lg">
  <div className="container mx-auto px-8 flex items-center py-2">
    
    {/* Magnified Logo with Stylish Look */}
    <div className="h-28 w-28 rounded-full mr-4 shadow-xl flex-shrink-0">
      <Link to="/" className="h-full w-full flex items-center justify-center">
        <img 
          src={logoImage}
          alt="Seakate Media Logo"
          className="h-full w-full rounded-full object-cover"
        />
      </Link>
    </div>

    {/* Centered Navigation Links with Reduced Padding */}
    <div className="hidden md:flex mx-auto space-x-6 items-center heading-font">
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
          className={`relative px-3 py-1 text-white font-semibold transition-all heading-font
            ${location.pathname === link.path ? 'text-[#04E4D8] scale-110' : 'hover:text-[#04E4D8] hover:scale-105'}`}
        >
          {link.label}
          {location.pathname === link.path && (
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-[2px] bg-[#04E4D8] rounded-full"></span>
          )}
        </Link>
      ))}
    </div>
  </div>
</nav>
      {/* Who We Are Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12">
            <div className="w-10 h-10 rounded-full border border-[#04E4D8] flex items-center justify-center">
              <div className="w-2 h-2 bg-[#04E4D8] rounded-full"></div>
            </div>
          </div>
          
          <div className="max-w-6xl mx-auto px-4">
  <h2 className="text-5xl md:text-6xl mb-8 heading-font text-center">
    Who Are We
  </h2>

<br/>

  <p className="text-xl text-gray-300 mb-8 text-justify leading-relaxed">
    We're a full-service team specialising in digital content across all platforms – Creative Strategy, Social Media, Web, Print, TV, and Live Events. We don't just follow trends; we set them. We combine agility with experience to develop creative solutions that drive results. At Seakate Media, we believe the key to a powerful brand lies in a compelling story. Forget fleeting influencers – we focus on building and amplifying enduring expert brands that resonate with their audiences. 
  </p>
</div>



        </div>
      </section>
 

      {/* Brands Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-[#04E4D8] p-16 rounded-sm flex items-center justify-center">
              <div className="relative">
                <div className="brand-logos flex flex-col items-center">
                  <div className="text-black text-4xl font-bold mb-4">
                    <div className="flex items-center">
                      <span className="transform -rotate-90 text-sm mr-2 font-playfair">THE</span>
                      <span>BA</span>
                      <span className="transform rotate-90 text-sm ml-2 font-playfair">ACADEMY</span>
                    </div>
                  </div>
                  <img 
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" 
                    alt="Brand Logo" 
                    className="w-32 h-auto"
                  />
                </div>
                <div className="flex mt-8 justify-center">
                  <div className="w-2 h-2 bg-black rounded-full mx-1"></div>
                  <div className="w-2 h-2 bg-black rounded-full mx-1"></div>
                  <div className="w-2 h-2 bg-black rounded-full mx-1"></div>
                  <div className="w-2 h-2 bg-black rounded-full mx-1"></div>
                  <div className="w-2 h-2 bg-black rounded-full mx-1"></div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col justify-center">
              <h2 className="text-5xl md:text-6xl mb-8 heading-font">Brands</h2>
              <p className="text-xl text-gray-300 mb-8 text-justify">
                Our expertise extends beyond personal branding. We've also collaborated with established brands like MJ Bale, American Express, and Hachette to tell incredible stories. So whether it's crafting large-scale campaigns or creating engaging social content, we pride ourselves in our ability to bring the same dedication and expertise to every project.
              </p>
              
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row-reverse gap-12">
      {/* Image Right */}
      <div className="bg-[#04E4D8] p-16 rounded-sm flex items-center justify-center md:w-1/2">
        <div className="relative">
          <div className="brand-logos flex flex-col items-center">
            <div className="text-black text-4xl font-bold mb-4">
              <div className="flex items-center">
                <span className="transform -rotate-90 text-sm mr-2 font-playfair">THE</span>
                <span>BA</span>
                <span className="transform rotate-90 text-sm ml-2 font-playfair">ACADEMY</span>
              </div>
            </div>
            <img 
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" 
              alt="Brand Logo" 
              className="w-32 h-auto"
            />
          </div>
          <div className="flex mt-8 justify-center">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-black rounded-full mx-1" />
            ))}
          </div>
        </div>
      </div>

      {/* Text Left */}
      <div className="flex flex-col justify-center md:w-1/2">
        <h2 className="text-5xl md:text-6xl mb-8 heading-font">About</h2>
        <p className="text-xl text-gray-300 mb-8 text-justify">
          Our expertise extends beyond personal branding. We've also collaborated with established brands like MJ Bale, American Express, and Hachette to tell incredible stories. So whether it's crafting large-scale campaigns or creating engaging social content, we pride ourselves in our ability to bring the same dedication and expertise to every project.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Team Section */}
      <section className="py-5">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl mb-8 heading-font">Get To Know Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                id: 1,
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
              },
              {
                id: 2,
                image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600"
              },
              {
                id: 3,
                image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600"
              }
            ].map(member => (
              <div key={member.id} className="bg-white rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                <img 
                  src={member.image} 
                  alt="Team Member" 
                  className="w-full h-[400px] object-cover"
                />
              </div>
            ))}
          </div>

          <div className="max-w-4xl">

            
          </div>
        </div>
      </section>
      <Footer />
    </main>
    
  );
};

export default AboutPage;