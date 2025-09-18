import React from 'react'
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/dip051030',
      label: 'GitHub',
      hoverColor: 'hover:text-gray-300'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/dip-darpan-kandel/',
      label: 'LinkedIn',
      hoverColor: 'hover:text-blue-400'
    },
    {
      icon: Mail,
      href: 'mailto:pls.opinion.05@gmail.com',
      label: 'Email',
      hoverColor: 'hover:text-accent-400'
    }
  ]

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ]

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'pls.opinion.05@gmail.com',
      href: 'mailto:pls.opinion.05@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+977 986-535-9999',
      href: 'tel:+9779865359999'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kathmandu, Nepal',
      href: null
    }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-dark-50 text-primary-400 border-t border-dark-300/50">
      <div className="section-padding py-16">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-12">
            {/* Brand & Bio Section */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-secondary-400 mb-4">
                  Dip Darpan Kandel
                </h3>
                <p className="text-lg font-medium text-primary-700 mb-2">
                  Data Analyst & AI Developer
                </p>
                <p className="text-primary-500 leading-relaxed text-base max-w-md">
                  Passionate about transforming complex data into actionable insights and building intelligent
                  systems that solve real-world problems in healthcare, sustainability, and social impact.
                </p>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-sm font-semibold text-primary-400 uppercase tracking-wide mb-4">
                  Connect With Me
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className={`p-3 dark-card rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-secondary-500/20 hover:border-secondary-400/50 hover:-translate-y-1 ${social.hoverColor}`}
                    >
                      <social.icon size={22} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-sm font-semibold text-primary-400 uppercase tracking-wide">
                Navigation
              </h4>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.href.substring(1))}
                    className="block text-primary-500 hover:text-secondary-400 transition-colors duration-200 text-base py-1 text-left hover:translate-x-2 transform"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h4 className="text-sm font-semibold text-primary-400 uppercase tracking-wide">
                Get In Touch
              </h4>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="w-5 h-5 mt-1 flex-shrink-0">
                      <info.icon className="text-secondary-400" size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-primary-600 uppercase tracking-wide mb-1">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-primary-400 hover:text-secondary-400 transition-colors duration-200 text-sm font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-primary-400 text-sm font-medium">
                          {info.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-dark-300/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Copyright */}
              <div className="text-center md:text-left">
                <p className="text-primary-500 text-sm font-medium">
                  © 2025 Dip Darpan Kandel. All rights reserved.
                </p>
                <p className="text-primary-600 text-xs mt-1">
                  Built with React, Tailwind CSS & lots of ☕
                </p>
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-3 text-primary-600">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium">Available for opportunities</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-dark-300"></div>
                <span className="text-xs">
                  Last updated: September 2025
                </span>
              </div>
            </div>
          </div>

          {/* Optional: Professional Statement */}
          <div className="mt-8 pt-6 border-t border-dark-300/30">
            <div className="text-center">
              <p className="text-primary-600 text-xs max-w-2xl mx-auto leading-relaxed">
                Dedicated to leveraging data science and AI technologies to create meaningful impact.
                Open to collaborations on projects that advance healthcare, sustainability, and social good.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
