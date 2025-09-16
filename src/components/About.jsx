import React from 'react'
import { GraduationCap, Award, Code, BookOpen } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: GraduationCap, label: 'Year in College', value: '3rd Year' },
    { icon: Code, label: 'Projects Completed', value: '15+' },
    { icon: Award, label: 'Certifications', value: '5' },
    { icon: BookOpen, label: 'Technologies Learned', value: '12+' }
  ]

  return (
    <section id="about" className="py-20 section-padding bg-dark-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-900 mb-4">About Me</h2>
          <p className="text-xl text-primary-700">Get to know me better</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-primary-900">
                Passionate about data-driven solutions
              </h3>
              <p className="text-primary-600 leading-relaxed">
                I'm currently pursuing my Bachelor's degree in Computer Science with a focus on data science and AI.
                My journey began with a fascination for turning raw data into actionable insights and has evolved
                into building intelligent systems that can make autonomous decisions.
              </p>
              <p className="text-primary-600 leading-relaxed">
                When I'm not analyzing datasets or training AI models, you can find me exploring the latest
                developments in machine learning research, contributing to open-source projects, or building
                tools that automate complex workflows.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-primary-900">Currently Learning:</h4>
              <div className="flex flex-wrap gap-2">
                {['Advanced MLOps', 'Multi-Agent Systems', 'Neural Networks'].map((tech) => (
                  <span key={tech} className="bg-gradient-to-r from-secondary-400/20 to-accent-400/20 text-secondary-400 px-4 py-2 rounded-full text-sm font-medium border border-secondary-400/30">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="dark-card p-6 rounded-xl text-center card-hover"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-secondary-400/20 to-accent-400/20 rounded-lg mb-4 shadow-sm border border-secondary-400/30">
                  <stat.icon className="text-secondary-400" size={24} />
                </div>
                <div className="text-2xl font-bold text-primary-900 mb-1">{stat.value}</div>
                <div className="text-primary-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
