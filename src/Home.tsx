import React from 'react';
import { Menu } from 'lucide-react';

import services from './service';
import projects from './project';
import contact from './contact';
import About from './About';
import { Footer } from './footer';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import logoImage from './assets/photo_2025-03-29_16-16-14.jpg'; // Import your logo image
function Home() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://res.cloudinary.com/di5zfjqlt/video/upload/v1739519429/photo/eglo6mf2cdo0ibmp0kbp.mp4" type="video/mp4" />
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab" 
              alt="Background fallback"
              className="w-full h-full object-cover"
            />
          </video>
          <div className="absolute inset-0 bg-gray-900/50"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 heading-font">
              Connecting Stories,<br />
              <span className="heading-font" style={{ fontSize: '4.5rem' }}>Shaping Perspective</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
            We don’t just press “record” we craft stories. 

            </p>
          </div>
        </div>
      </section>

      {/* Question Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
        
            <h3 className="text-5xl md:text-6xl mb-8 heading-font text-teal ">
              Why Should<br />Anyone Listen To<br />You?
            </h3>
            <p className="text-xl text-gray-300 mb-6">
            At Seakate Media, we believe every moment and every brand has a narrative worth sharing. Our team combines years of professional experience in videography, photography, and storytelling to deliver visuals that captivate and connect. We’ve worked with educational institutions, churches, and clients from all walks of life, consistently turning their visions into powerful, engaging content. When you work with us, you’re not just getting technical expertise—you’re getting a dedicated partner who cares about your message, your audience, and your results. 

            </p>
            <p className="text-xl text-gray-300 mb-6">
              
            </p>
            <p className="text-xl text-gray-300 mb-8">
              
            </p>
            
          </div>
        </div>
      </section>

      {/* Brands Section with Horizontal Scroll */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl text-center font-bold mb-12 text-teal ">BRANDS WE'VE WORKED WITH</h2>
          <div className="relative">
            <div className="flex overflow-x-auto py-4 scrollbar-hide space-x-12">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                <div 
                  key={i} 
                  className="flex-shrink-0 w-48 h-24 bg-gray-800 rounded-lg flex items-center justify-center"
                >
                  <span className="text-gray-400 text-teal">Brand Logo {i}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-[#04E4D8] text-xl font-semibold mb-6"></h2>
          <h3 className="text-5xl md:text-6xl mb-16 heading-font">
           <br />
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-colors">
              <h4 className="text-3xl mb-4 text-[#04E4D8]">Strategy</h4>
              <p className="text-gray-300">
                We don't follow templates – we craft unique strategies tailored specifically for you.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-colors">
              <h4 className="text-3xl mb-4 text-[#04E4D8]">Creative</h4>
              <p className="text-gray-300">
                Our creative team develops visually stunning elements that bring your brand story to life.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-colors">
              <h4 className="text-3xl mb-4 text-[#04E4D8]">Amplification</h4>
              <p className="text-gray-300">
                We ensure your message reaches the right people through digital marketing and social media.
              </p>
            </div>
          </div>
        </div>
      </section>

     

      {/* Past Projects Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-[#04E4D8] text-xl font-semibold mb-6"></h2>
          <h3 className="text-5xl md:text-6xl mb-16 heading-font text-teal ">
            Past Projects We've<br />
            <span className="heading-font italic"></span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="group">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img 
                    src={`https://source.unsplash.com/random/600x400/?media,${project}`}
                    alt={`Project ${project}`}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#04E4D8]/0 group-hover:bg-[#04E4D8]/20 transition-colors duration-300"></div>
                </div>
                <h4 className="text-2xl mb-2">Project Title {project}</h4>
                <a href="#" className="text-sm text-[#04E4D8] hover:underline">VIEW PROJECT</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Brand Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl mb-8 heading-font Past">
              How Can We Help You?<br />
              </h2>
              <p className="text-xl text-gray-300 mb-8">
              Whether you’re a school looking to boost admissions with a powerful promotional video, a nonprofit seeking to share an impactful testimonial, or an engaged couple wanting every wedding detail captured flawlessly—we’ve got you covered. We offer a range of services designed to amplify your voice and capture your most meaningful moments. 
              </p>
              
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
                alt="Personal Branding"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Photo & Video Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl mb-8 heading-font Past">
          What Sets Us Apart: 
          </h2>
          <div className="max-w-2xl">
  <p className="text-xl text-gray-300 mb-6 break-words hyphens-auto">
    - Expertise & Creativity: From small-scale live streams to cinematic short films, our diverse skill set brings fresh ideas and professional execution.   <br />
    <br />
    

    - Authentic Storytelling: We focus on the heart of your story, ensuring your unique message resonates with viewers.  <br /> <br />

    - Proven Track Record: Having served numerous organizations and individuals—from colleges to couples on their big day—we know how to deliver on-time, on-budget, and above expectations. <br />  <br />

    - Genuine Partnership: We collaborate closely with you from concept to final cut, making your vision our priority. 
  </p>

  
</div>

        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;