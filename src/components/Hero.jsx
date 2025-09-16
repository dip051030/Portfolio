import React from 'react'
import { Download, Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 section-padding gradient-bg">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-primary-600 font-medium">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                Alex <span className="gradient-text">Johnson</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 font-medium">
                Computer Science Student
              </h2>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              I'm a passionate computer science student with a focus on web development 
              and software engineering. I love creating innovative solutions and learning 
              new technologies to solve real-world problems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="gradient-button text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 shadow-lg hover:shadow-xl">
                <Download size={20} />
                Download Resume
              </button>
              <button className="border border-primary-300 text-primary-700 px-8 py-3 rounded-lg font-medium hover:border-primary-400 hover:bg-primary-50 transition-all duration-300">
                View My Work
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a href="#" className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-gray-600 hover:text-primary-600 border border-gray-100 hover:border-primary-200">
                <Github size={24} />
              </a>
              <a href="#" className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-gray-600 hover:text-primary-600 border border-gray-100 hover:border-primary-200">
                <Linkedin size={24} />
              </a>
              <a href="#" className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-gray-600 hover:text-primary-600 border border-gray-100 hover:border-primary-200">
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center animate-slide-up">
            <div className="relative animate-float">
              <div className="w-80 h-80 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center shadow-inner">
                  <div className="text-6xl">👨‍💻</div>
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent-400 rounded-full animate-bounce shadow-lg"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary-400 rounded-full animate-bounce shadow-lg" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
