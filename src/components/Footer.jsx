import React from 'react'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:alex.johnson@email.com', label: 'Email' }
  ]

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ]

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="section-padding py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold gradient-text">Alex Johnson</h3>
              <p className="text-gray-300 leading-relaxed">
                Computer Science student passionate about creating innovative
                digital solutions and contributing to open-source projects.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="p-3 bg-gray-700 rounded-lg hover:bg-gradient-to-r hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 hover:shadow-lg"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary-300">Quick Links</h4>
              <div className="space-y-2">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-gray-300 hover:text-primary-300 transition-colors hover:translate-x-1 transform duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-primary-300">Get In Touch</h4>
              <div className="space-y-2 text-gray-300">
                <p className="hover:text-primary-300 transition-colors">alex.johnson@email.com</p>
                <p className="hover:text-primary-300 transition-colors">+1 (555) 123-4567</p>
                <p className="hover:text-primary-300 transition-colors">New York, NY</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-gray-300">
                <span>Made with</span>
                <Heart size={16} className="text-red-400" />
                <span>using React & Tailwind CSS</span>
              </div>
              <div className="text-gray-300">
                © 2024 Alex Johnson. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
