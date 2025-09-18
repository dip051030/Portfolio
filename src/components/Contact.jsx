import React, {useState} from 'react'
import {Mail, MapPin, Phone, Send} from 'lucide-react'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '', email: '', message: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission here
        console.log('Form submitted:', formData)
        // Reset form
        setFormData({name: '', email: '', message: ''})
        alert('Message sent! I\'ll get back to you soon.')
    }

    const contactInfo = [{
        icon: Mail, label: 'Email', value: 'pls.opinion.05@gmail.com', href: 'mailto:pls.opinion.05@gmail.com'
    }, {
        icon: Phone, label: 'Phone', value: '+977 986-535-9999', href: 'tel:+9779865359999'
    }, {
        icon: MapPin, label: 'Location', value: 'Kathmandu, Nepal', href: '#'
    }]

    return (<section id="contact" className="py-20 section-padding bg-dark-200">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-primary-900 mb-4">Get In Touch</h2>
                <p className="text-xl text-primary-700 max-w-2xl mx-auto">
                    Let's discuss data science and AI projects that can make a real impact
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="space-y-8">
                    <div>
                        <h3 className="text-2xl font-bold text-primary-900 mb-6">
                            Let's collaborate on AI solutions!
                        </h3>
                        <p className="text-primary-600 leading-relaxed mb-8 text-lg">
                            I'm always excited to discuss new opportunities in data analysis and agentic AI.
                            Whether you need help with data insights, machine learning models, or intelligent
                            automation systems, I'm here to help bring your ideas to life.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {contactInfo.map((info, index) => (<div key={index}
                                                                className="flex items-center gap-4 p-4 dark-card rounded-lg hover:shadow-lg transition-all duration-300">
                            <div
                                className="w-12 h-12 bg-gradient-to-r from-secondary-400/20 to-accent-400/20 rounded-lg flex items-center justify-center border border-secondary-400/30 flex-shrink-0">
                                <info.icon className="text-secondary-400" size={24}/>
                            </div>
                            <div>
                                <p className="text-primary-500 text-sm font-medium">{info.label}</p>
                                <a
                                    href={info.href}
                                    className="text-primary-900 font-medium hover:text-secondary-400 transition-colors text-lg"
                                >
                                    {info.value}
                                </a>
                            </div>
                        </div>))}
                    </div>

                    {/* Availability Status */}
                    <div
                        className="bg-gradient-to-r from-accent-400/20 to-secondary-400/20 border border-accent-400/30 rounded-lg p-6">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-3 h-3 bg-accent-400 rounded-full glow-effect animate-pulse"></div>
                            <span
                                className="text-accent-300 font-semibold text-lg">Available for AI consulting</span>
                        </div>
                        <p className="text-primary-600 text-base">
                            Currently accepting data science and AI projects for 2024-2025
                        </p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="dark-card p-8 rounded-xl shadow-lg">
                    <h3 className="text-xl font-bold text-primary-900 mb-6">Send me a message</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-primary-800 font-medium mb-3 text-sm">
                                Full Name *
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-dark-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-colors bg-dark-100 text-primary-900 placeholder-primary-500"
                                placeholder="Your full name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-primary-800 font-medium mb-3 text-sm">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-dark-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-colors bg-dark-100 text-primary-900 placeholder-primary-500"
                                placeholder="your.email@example.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-primary-800 font-medium mb-3 text-sm">
                                Message *
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full px-4 py-3 border border-dark-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-colors resize-none bg-dark-100 text-primary-900 placeholder-primary-500"
                                placeholder="Tell me about your data science or AI project..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full gradient-button text-white py-4 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl glow-effect text-lg"
                        >
                            <Send size={20}/>
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>)
}

export default Contact
