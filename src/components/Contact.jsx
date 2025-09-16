import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', message: '' })
    alert('Message sent! I\'ll get back to you soon.')
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'alex.johnson@email.com',
      href: 'mailto:alex.johnson@email.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'New York, NY',
      href: '#'
    }
  ]

  return (
    <section id="contact" className="py-20 section-padding bg-dark-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-primary-700">Let's discuss data science and AI projects</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary-900 mb-4">
                Let's collaborate on AI solutions!
              </h3>
              <p className="text-primary-600 leading-relaxed mb-8">
                I'm always excited to discuss new opportunities in data analysis and agentic AI.
                Whether you need help with data insights, machine learning models, or intelligent
                automation systems, I'm here to help bring your ideas to life.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-secondary-400/20 to-accent-400/20 rounded-lg flex items-center justify-center border border-secondary-400/30">
                    <info.icon className="text-secondary-400" size={24} />
                  </div>
                  <div>
                    <p className="text-primary-500 text-sm">{info.label}</p>
                    <a
                      href={info.href}
                      className="text-primary-900 font-medium hover:text-secondary-400 transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Availability Status */}
            <div className="bg-gradient-to-r from-accent-400/20 to-secondary-400/20 border border-accent-400/30 rounded-lg p-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent-400 rounded-full glow-effect"></div>
                <span className="text-accent-300 font-medium">Available for AI consulting</span>
              </div>
              <p className="text-primary-600 text-sm mt-1">
                Currently accepting data science and AI projects for 2024
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="dark-card p-8 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-primary-800 font-medium mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-dark-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-colors bg-dark-100 text-primary-900"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-primary-800 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-dark-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-colors bg-dark-100 text-primary-900"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-primary-800 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-dark-300 rounded-lg focus:ring-2 focus:ring-secondary-500 focus:border-transparent transition-colors resize-none bg-dark-100 text-primary-900"
                  placeholder="Tell me about your data science or AI project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full gradient-button text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl glow-effect"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
