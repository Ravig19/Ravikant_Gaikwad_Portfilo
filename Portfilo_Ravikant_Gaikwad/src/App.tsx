import React, { useState } from 'react';
import { Menu, X, Github, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg backdrop-blur-sm bg-white/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
            </div>
            
            {/* Mobile menu button */}
            <div className="flex items-center sm:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition-all"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden sm:flex sm:items-center sm:space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#experience" className="text-gray-600 hover:text-blue-600 transition-colors">Experience</a>
              <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors">About</a>
              <a href="#experience" className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors">Experience</a>
              <a href="#projects" className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors">Projects</a>
              <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Profile */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto py-20 px-4 sm:py-28 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop"
                alt="Profile"
                className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              Ravikant Gaikwad
            </h1>
            <p className="mt-3 max-w-md mx-auto text-xl text-blue-100 sm:text-2xl md:mt-5 md:max-w-3xl">
              Full Stack Developer
            </p>
            <div className="mt-5 max-w-md mx-auto flex justify-center space-x-6">
              <a href="mailto:ravikansunilgaikwad@gmail.com" className="inline-flex items-center hover:text-blue-200 transition-colors">
                <Mail className="h-6 w-6" />
                <span className="ml-2">Email</span>
              </a>
              <a href="https://github.com/Ravig19" className="inline-flex items-center hover:text-blue-200 transition-colors">
                <Github className="h-6 w-6" />
                <span className="ml-2">GitHub</span>
              </a>
              <div className="inline-flex items-center">
                <MapPin className="h-6 w-6" />
                <span className="ml-2">Hyderabad</span>
              </div>
              <div className="inline-flex items-center">
                <Phone className="h-6 w-6" />
                <span className="ml-2">9359469433</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">About Me</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            I am a Computer Engineering graduate from SPPU Pune with a strong foundation in programming and software development. 
            My goal is to leverage my technical skills to create impactful solutions that drive innovation and efficiency.
            Passionate about problem-solving, I am eager to contribute to organizations by developing scalable and effective technological solutions that address real-world challenges.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</h2>
          
          <div className="space-y-12">
            <div className="border-l-4 border-blue-400 pl-4 hover:border-purple-500 transition-colors">
              <h3 className="text-xl font-semibold text-gray-900">Full Stack Developer Intern</h3>
              <p className="text-blue-600">TECH MASTER • Feb 2024 - July 2024</p>
              <ul className="mt-4 text-gray-600 list-disc list-inside">
                <li>Developed React-based UIs and integrated them with backend APIs using Java and Spring Boot</li>
                <li>Built RESTful APIs, managed databases, optimized performance</li>
                <li>Collaborated with the team to deliver scalable solutions</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-400 pl-4 hover:border-purple-500 transition-colors">
              <h3 className="text-xl font-semibold text-gray-900">Web Development Intern</h3>
              <p className="text-blue-600">PROAZURE SOFTWERE SOLUTION PVT. LTD. • Nov 2022 - Feb 2023</p>
              <ul className="mt-4 text-gray-600 list-disc list-inside">
                <li>Created dynamic websites using React.js</li>
                <li>Collaborated with designers to implement responsive UI</li>
                <li>Integrated frontend with backend APIs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900">WealthConnect</h3>
              <p className="mt-2 text-gray-600">A robust Bank Management System using React.js, Spring Boot, and relational database. Features account management, transaction tracking, and financial planning tools.</p>
              <div className="mt-4">
                <a href="https://github.com/Ravig19/WealthConnect" className="inline-flex items-center text-blue-600 hover:text-purple-600 transition-colors">
                  View Project <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900">Real-Time Attention and Attendance Monitoring System</h3>
              <p className="mt-2 text-gray-600">WiFi-based OTP authentication and integrated face recognition system for attendance tracking. Built with Java, JSP, and JavaScript.</p>
              <div className="mt-4">
                <a href="https://github.com/Ravig19/Real-Time-Attendance-Monitoring-System" className="inline-flex items-center text-blue-600 hover:text-purple-600 transition-colors">
                  View Project <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900">Audio Fingerprinting System</h3>
              <p className="mt-2 text-gray-600">Song recognition using audio fingerprinting technology. Built with HTML, CSS, JavaScript, Python, and MySQL.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Contact</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get in touch</h3>
              <div className="space-y-4">
                <a href="mailto:ravikansunilgaikwad@gmail.com" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                  <Mail className="h-5 w-5 mr-2" />
                  ravikansunilgaikwad@gmail.com
                </a>
                <a href="tel:9359469433" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                  <Phone className="h-5 w-5 mr-2" />
                  9359469433
                </a>
                <p className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2" />
                  Hyderabad
                </p>
                <a href="https://github.com/Ravig19" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                  <Github className="h-5 w-5 mr-2" />
                  github.com/Ravig19
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;