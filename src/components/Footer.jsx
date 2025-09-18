import React from 'react'
import {Github, Linkedin, Mail} from 'lucide-react'

const Footer = () => {
    const socialLinks = [{
        icon: Github, href: 'https://github.com/dipdarpankandel', label: 'GitHub'
    }, {
        icon: Linkedin, href: 'https://linkedin.com/in/dipdarpankandel', label: 'LinkedIn'
    }, {
        icon: Mail, href: 'mailto:dipdarpankandel@gmail.com', label: 'Email'
    }]

    const quickLinks = [{label: 'Home', href: '#home'}, {label: 'About', href: '#about'}, {
        label: 'Skills', href: '#skills'
    }, {label: 'Projects', href: '#projects'}, {label: 'Contact', href: '#contact'}]

    return (<footer className="bg-dark-100 text-primary-400 border-t border-dark-300">
        <div className="section-padding py-16">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-secondary-400 glow-effect">
                            Dip Darpan Kandel
                        </h3>
                        <p className="text-primary-500 leading-relaxed text-lg">
                            Data analyst and AI developer passionate about creating intelligent
                            solutions and extracting meaningful insights from complex datasets.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (<a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="p-3 dark-card rounded-lg hover:bg-gradient-to-r hover:from-secondary-400/20 hover:to-accent-400/20 transition-all duration-300 hover:shadow-lg hover:shadow-secondary-500/20 hover:border-secondary-400/50"
                            >
                                <social.icon size={24}
                                             className="text-primary-400 hover:text-secondary-400 transition-colors"/>
                            </a>))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-xl font-semibold text-secondary-400">Quick Links</h4>
                        <div className="space-y-3">
                            {quickLinks.map((link, index) => (<a
                                key={index}
                                href={link.href}
                                className="block text-primary-400 hover:text-secondary-400 transition-colors hover:translate-x-1 transform duration-200 text-lg py-1"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById(link.href.substring(1))?.scrollIntoView({
                                        behavior: 'smooth'
                                    });
                                }}
                            >
                                {link.label}
                            </a>))}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h4 className="text-xl font-semibold text-secondary-400">Get In Touch</h4>
                        <div className="space-y-4 text-primary-400">
                            <div className="flex flex-col space-y-1">
                                <span className="text-sm font-medium text-primary-500">Email</span>
                                <a
                                    href="mailto:pls.opinion.05@gmail.com"
                                    className="hover:text-secondary-400 transition-colors text-lg"
                                >
                                    pls.opinion.05@gmail.com
                                </a>
                            </div>
                            <div className="flex flex-col space-y-1">
                                <span className="text-sm font-medium text-primary-500">Phone</span>
                                <a
                                    href="tel:+9779801234567"
                                    className="hover:text-secondary-400 transition-colors text-lg"
                                >
                                    +977 980-123-4567
                                </a>
                            </div>
                            <div className="flex flex-col space-y-1">
                                <span className="text-sm font-medium text-primary-500">Location</span>
                                <span className="hover:text-secondary-400 transition-colors text-lg">
                    Kathmandu, Nepal
                  </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-dark-300 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-primary-500 text-center md:text-left">
                            <p className="text-lg">
                                © 2024 Dip Darpan Kandel. All rights reserved.
                            </p>
                            <p className="text-sm mt-1 text-primary-600">
                                Built with React & Tailwind CSS
                            </p>
                        </div>
                        <div className="flex items-center gap-2 text-primary-600">
                            <span className="text-sm">Made with</span>
                            <span className="text-red-400 animate-pulse">❤️</span>
                            <span className="text-sm">for innovation</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>)
}

export default Footer
