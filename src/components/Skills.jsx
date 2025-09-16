import React from 'react'
import { Code, Database, Wrench } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      skills: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'TypeScript', 'Vue.js']
    },
    {
      title: 'Backend Development',
      icon: Database,
      skills: ['Node.js', 'Python', 'Java', 'Express.js', 'MongoDB', 'PostgreSQL']
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      skills: ['Git/GitHub', 'VS Code', 'Docker', 'AWS', 'Figma', 'Linux']
    }
  ]

  return (
    <section id="skills" className="py-20 section-padding bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-600">Technologies I work with</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg card-hover border border-gray-100">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full mb-4">
                  <category.icon className="text-primary-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-gradient-to-r from-primary-50 to-secondary-50 px-4 py-3 rounded-lg text-center border border-primary-100 hover:border-primary-300 transition-all duration-300 hover:shadow-md"
                  >
                    <span className="text-gray-700 font-medium text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Also Experienced With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Redux', 'Next.js', 'GraphQL', 'Firebase', 'Jest',
              'Webpack', 'Agile', 'REST APIs', 'SASS', 'Material-UI'
            ].map((tech) => (
              <span 
                key={tech} 
                className="bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200 text-gray-700 font-medium hover:border-primary-300 hover:bg-gradient-to-r hover:from-primary-50 hover:to-secondary-50 transition-all duration-300 hover:shadow-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
