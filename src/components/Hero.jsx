import React from 'react'
import { Github, Linkedin, Mail, Download } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 section-padding gradient-bg">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <p className="text-secondary-500 font-medium text-lg tracking-wide">Hello, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold text-primary-900 leading-tight">
                Dip <span className="gradient-text">Darpan</span> Kandel
              </h1>
              <h2 className="text-2xl md:text-3xl text-primary-700 font-medium leading-relaxed mt-4">
                Data Analyst & AI Developer
              </h2>
            </div>
            
            <p className="text-primary-600 text-xl leading-relaxed max-w-lg mt-6">
              I'm a passionate developer specializing in data analysis and agentic AI systems.
              I love extracting insights from complex datasets and building intelligent automation
              solutions that solve real-world problems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="gradient-button text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl glow-effect text-lg"
              >
                View My Work
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-accent-400 text-accent-400 px-8 py-4 rounded-lg font-medium hover:border-accent-300 hover:bg-accent-400/10 transition-all duration-300 text-lg"
              >
                Get In Touch
              </button>
              <a
                href="/resume.pdf"
                download
                className="border-2 border-primary-400 text-primary-400 px-8 py-4 rounded-lg font-medium hover:border-primary-300 hover:bg-primary-400/10 transition-all duration-300 flex items-center justify-center gap-3 shadow-sm hover:shadow-primary-500/20 text-lg"
                aria-label="Download Resume"
              >
                <Download size={22} />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-8">
              <a
                href="https://github.com/dipdarpankandel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my GitHub profile"
                className="p-4 dark-card rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-primary-700 hover:text-secondary-400 hover:shadow-secondary-500/20"
              >
                <Github size={28} />
              </a>
              <a
                href="https://linkedin.com/in/dipdarpankandel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with me on LinkedIn"
                className="p-4 dark-card rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-primary-700 hover:text-secondary-400 hover:shadow-secondary-500/20"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="mailto:dipdarpankandel@gmail.com"
                aria-label="Send me an email"
                className="p-4 dark-card rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-primary-700 hover:text-secondary-400 hover:shadow-secondary-500/20"
              >
                <Mail size={28} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="hidden md:flex justify-center animate-slide-up relative">
            <div className="w-80 h-80 bg-gradient-to-br from-secondary-400 to-accent-400 rounded-full flex items-center justify-center shadow-2xl glow-effect">
              <div className="w-72 h-72 bg-dark-200 rounded-full flex items-center justify-center shadow-inner">
                <div className="text-8xl">👨‍💻</div>
              </div>
            </div>
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent-400 rounded-full animate-bounce shadow-lg glow-effect"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary-400 rounded-full animate-bounce shadow-lg glow-effect" style={{animationDelay: '0.5s'}}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
