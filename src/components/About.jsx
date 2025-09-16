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
    <section id="about" className="py-20 section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600">Get to know me better</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">
                Passionate about creating digital solutions
              </h3>
              <p className="text-gray-600 leading-relaxed">
                I'm currently pursuing my Bachelor's degree in Computer Science at University of Technology. 
                My journey in programming started during high school, and since then, I've been fascinated 
                by the endless possibilities that code can create.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I'm not coding, you can find me reading tech blogs, participating in hackathons, 
                or working on personal projects. I believe in continuous learning and staying updated 
                with the latest trends in technology.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-gray-900">Currently Learning:</h4>
              <div className="flex flex-wrap gap-2">
                {['Machine Learning', 'Cloud Computing', 'Mobile Development'].map((tech) => (
                  <span key={tech} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
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
                className="bg-gray-50 p-6 rounded-xl text-center card-hover"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                  <stat.icon className="text-blue-600" size={24} />
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
