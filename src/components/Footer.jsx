import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

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
    <footer className="bg-dark-100 text-primary-400 border-t border-dark-300">
      <div className="section-padding py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-secondary-400 glow-effect">Alex Johnson</h3>
              <p className="text-primary-500 leading-relaxed">
                Data analyst and AI developer passionate about creating intelligent
                solutions and extracting meaningful insights from complex datasets.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="p-3 dark-card rounded-lg hover:bg-gradient-to-r hover:from-secondary-400/20 hover:to-accent-400/20 transition-all duration-300 hover:shadow-lg hover:shadow-secondary-500/20 hover:border-secondary-400/50"
                  >
                    <social.icon size={20} className="text-primary-400 hover:text-secondary-400 transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-secondary-400">Quick Links</h4>
              <div className="space-y-2">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-primary-400 hover:text-secondary-400 transition-colors hover:translate-x-1 transform duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-secondary-400">Get In Touch</h4>
              <div className="space-y-2 text-primary-400">
                <p className="hover:text-secondary-400 transition-colors">alex.johnson@email.com</p>
                <p className="hover:text-secondary-400 transition-colors">+1 (555) 123-4567</p>
                <p className="hover:text-secondary-400 transition-colors">New York, NY</p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-dark-300 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-primary-500">
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
