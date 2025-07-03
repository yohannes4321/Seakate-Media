import React from 'react';
import { Footer } from './footer';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import logoImage from './assets/Seakate Media logo.png';
import img1 from './assets/1st/Screenshot (123).png';
import img2 from './assets/1st/cg5fcukvbegabsx9ypgl (1).jpg';
import img3 from './assets/1st/jrzmqrsmc4rhr7kom8aw.jpg';
import k from './assets/video/TW-LiveStreamingOverview.jpg'
import img4 from './assets/video/download.jpg'
import Navbar from "./nav";
function Services() {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
<Navbar />

      {/* Main Content */}
      <div className="pt-3 px-8 md:px-16">
        {/* Hero Section */}
       

        {/* Services Sections */}
         

        {/* Service Cards Section */}
        <section className="mt-32 max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl mb-8 heading-font text-[#04E4D8] text-center">
      
            Our Videography Services
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
        <section className="mt-7 max-w-6xl mx-auto">
           
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
        <section className="mt-14 max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl mb-8 heading-font text-[#04E4D8] text-center">
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
        <section className="mt-7 max-w-6xl mx-auto">
         
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
