import React from 'react'
import { Brain, BarChart3, Code } from 'lucide-react'

const Skills = () => {
  return (
    <section id="skills" className="py-20 section-padding bg-dark-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-900 mb-6">Core Expertise</h2>
          <p className="text-xl text-primary-700 max-w-3xl mx-auto leading-relaxed">
            I excel in <span className="text-secondary-400 font-semibold">data analysis</span> and <span className="text-accent-400 font-semibold">agentic AI</span>—leveraging advanced tools and frameworks to extract insights and build intelligent automation solutions. My work focuses on transforming complex data into actionable strategies and developing AI systems that adapt and learn.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="dark-card p-8 rounded-xl shadow-lg card-hover flex flex-col items-center text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-secondary-200 to-secondary-100 rounded-full mb-6 glow-effect">
              <BarChart3 className="text-secondary-500" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-primary-900 mb-4">Data Analysis & Science</h3>
            <p className="text-primary-600 leading-relaxed text-lg">
              Experienced in Python, SQL, Pandas, NumPy, Matplotlib, Seaborn for data wrangling, visualization, and insight generation.
            </p>
          </div>

          <div className="dark-card p-8 rounded-xl shadow-lg card-hover flex flex-col items-center text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-secondary-200 to-secondary-100 rounded-full mb-6 glow-effect">
              <Brain className="text-secondary-500" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-primary-900 mb-4">Agentic AI & Machine Learning</h3>
            <p className="text-primary-600 leading-relaxed text-lg">
              Skilled in LangChain, OpenAI API, Hugging Face, PyTorch, TensorFlow, AutoGen for building adaptive, intelligent systems.
            </p>
          </div>

          <div className="dark-card p-8 rounded-xl shadow-lg card-hover flex flex-col items-center text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-secondary-200 to-secondary-100 rounded-full mb-6 glow-effect">
              <Code className="text-secondary-500" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-primary-900 mb-4">Development & Tools</h3>
            <p className="text-primary-600 leading-relaxed text-lg">
              React, JavaScript, Git, Docker, AWS, Jupyter—modern tools for robust, scalable development.
            </p>
          </div>
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 text-center">
          <div className="dark-card p-10 rounded-xl shadow-lg">
            <h3 className="text-3xl font-bold text-primary-900 mb-6">
              Technical Proficiencies
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-secondary-400 mb-4">Languages & Libraries</h4>
                <div className="flex flex-wrap gap-3 justify-center">
                  {['Python', 'JavaScript', 'SQL', 'Pandas', 'NumPy', 'TensorFlow', 'PyTorch'].map((skill) => (
                    <span key={skill} className="bg-gradient-to-r from-secondary-400/20 to-accent-400/20 text-secondary-400 px-4 py-2 rounded-full text-sm font-medium border border-secondary-400/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-accent-400 mb-4">Tools & Platforms</h4>
                <div className="flex flex-wrap gap-3 justify-center">
                  {['Jupyter', 'Docker', 'AWS', 'Git', 'React', 'LangChain', 'AutoGen'].map((tool) => (
                    <span key={tool} className="bg-gradient-to-r from-accent-400/20 to-secondary-400/20 text-accent-400 px-4 py-2 rounded-full text-sm font-medium border border-accent-400/30">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
