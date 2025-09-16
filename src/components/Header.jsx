import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setActiveSection(sectionId)
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full bg-dark-100/90 backdrop-blur-md z-50 border-b border-dark-300 shadow-lg">
      <nav className="section-padding py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text glow-effect">
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-all duration-300 px-3 py-2 rounded-lg ${
                  activeSection === item.id 
                    ? 'text-secondary-400 bg-secondary-400/10 shadow-secondary-500/20' 
                    : 'text-primary-700 hover:text-secondary-400 hover:bg-secondary-400/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-primary-700 hover:text-secondary-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-dark-300">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left text-sm font-medium transition-all duration-300 px-3 py-2 rounded-lg ${
                    activeSection === item.id 
                      ? 'text-secondary-400 bg-secondary-400/10' 
                      : 'text-primary-700 hover:text-secondary-400 hover:bg-secondary-400/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
