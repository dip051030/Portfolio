import React from 'react'
import { Download, Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 section-padding bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-2">
              <p className="text-blue-600 font-medium">Hello, I'm</p>
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
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
                <Download size={20} />
                Download Resume
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:border-gray-400 transition-colors">
                View My Work
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a href="#" className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-gray-600 hover:text-blue-600">
                <Github size={24} />
              </a>
              <a href="#" className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-gray-600 hover:text-blue-600">
                <Linkedin size={24} />
              </a>
              <a href="#" className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-gray-600 hover:text-blue-600">
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center animate-slide-up">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                <div className="w-72 h-72 bg-gray-200 rounded-full flex items-center justify-center">
                  <div className="text-6xl">👨‍💻</div>
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
