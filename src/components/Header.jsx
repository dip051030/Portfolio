import React, {useEffect, useState} from 'react'
import {Menu, X} from 'lucide-react'

const Header = ({activeSection, setActiveSection}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    const navItems = [{id: 'home', label: 'Home'}, {id: 'about', label: 'About'}, {
        id: 'skills', label: 'Skills'
    }, {id: 'projects', label: 'Projects'}, {id: 'contact', label: 'Contact'}]

    // Add scroll effect for header
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Add intersection observer for proper section tracking
    useEffect(() => {
        const observerOptions = {
            root: null, rootMargin: '-50% 0px -50% 0px', threshold: 0
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            })
        }, observerOptions)

        navItems.forEach((item) => {
            const element = document.getElementById(item.id)
            if (element) observer.observe(element)
        })

        return () => observer.disconnect()
    }, [setActiveSection])

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({behavior: 'smooth'})
        }
        setActiveSection(sectionId)
        setIsMenuOpen(false)
    }

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
            isScrolled
                ? 'bg-dark-100/95 backdrop-blur-md shadow-2xl border-b border-dark-300/80'
                : 'bg-dark-100/90 backdrop-blur-sm shadow-lg border-b border-dark-300/50'
        }`}>
        <nav className="section-padding py-4">
            <div className="flex items-center justify-between">
                {/* Logo with animation */}
                <div className="text-2xl font-bold gradient-text glow-effect transform hover:scale-105 transition-all duration-300 cursor-pointer animate-pulse">
                    Portfolio
                </div>

                {/* Desktop Navigation with enhanced animations */}
                <div className="hidden md:flex space-x-2 bg-dark-200/50 rounded-full px-2 py-2 backdrop-blur-sm border border-dark-300/30">
                    {navItems.map((item, index) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`relative text-base font-medium transition-all duration-300 px-6 py-3 rounded-full group overflow-hidden ${
                                activeSection === item.id
                                    ? 'text-white bg-gradient-to-r from-secondary-500 to-secondary-400 shadow-lg shadow-secondary-500/30 transform scale-105'
                                    : 'text-primary-700 hover:text-white hover:bg-gradient-to-r hover:from-secondary-500/80 hover:to-secondary-400/80 hover:shadow-md hover:shadow-secondary-500/20 hover:scale-105'
                            }`}
                            style={{
                                animationDelay: `${index * 0.1}s`
                            }}
                        >
                            {/* Ripple effect background */}
                            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-secondary-400/20 to-accent-400/20 transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out"></span>

                            {/* Sliding underline for active state */}
                            {activeSection === item.id && (
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent-400 to-secondary-400 transform origin-left animate-pulse"></span>
                            )}

                            {/* Text with subtle animation */}
                            <span className="relative z-10 transform group-hover:translate-y-[-1px] transition-transform duration-200">
                                {item.label}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Mobile Menu Button with rotation animation */}
                <button
                    className="md:hidden p-3 text-primary-700 hover:text-secondary-400 transition-all duration-300 rounded-lg hover:bg-secondary-400/10 transform hover:scale-110 active:scale-95"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <div className={`transform transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : 'rotate-0'}`}>
                        {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
                    </div>
                </button>
            </div>

            {/* Mobile Navigation with slide-down animation */}
            <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
                isMenuOpen
                    ? 'max-h-96 opacity-100 mt-4'
                    : 'max-h-0 opacity-0 mt-0'
            }`}>
                <div className="py-4 border-t border-dark-300/50">
                    <div className="flex flex-col space-y-2">
                        {navItems.map((item, index) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className={`text-left text-base font-medium transition-all duration-300 px-4 py-4 rounded-lg transform hover:translate-x-2 hover:scale-105 ${
                                    activeSection === item.id
                                        ? 'text-white bg-gradient-to-r from-secondary-500 to-secondary-400 shadow-lg shadow-secondary-500/30'
                                        : 'text-primary-700 hover:text-secondary-400 hover:bg-gradient-to-r hover:from-secondary-400/10 hover:to-accent-400/10 hover:shadow-md'
                                }`}
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                    animation: isMenuOpen ? `slideInLeft 0.4s ease-out ${index * 0.1}s both` : 'none'
                                }}
                            >
                            <span className="flex items-center gap-3">
                                {/* Animated dot indicator */}
                                <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    activeSection === item.id
                                        ? 'bg-accent-400 shadow-lg shadow-accent-400/50 animate-pulse'
                                        : 'bg-transparent group-hover:bg-secondary-400'
                                }`}></div>
                                {item.label}
                            </span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
        </header>
    )
}

export default Header
