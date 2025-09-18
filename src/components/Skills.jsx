import React from 'react'
import { Brain, BarChart3, Code } from 'lucide-react'

const Skills = () => {
  return (
    <section id="skills" className="py-20 section-padding bg-dark-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-900 mb-4">Core Expertise</h2>
          <p className="text-xl text-primary-700 max-w-2xl mx-auto">
            I excel in <span className="text-secondary-400 font-semibold">data analysis</span> and <span className="text-accent-400 font-semibold">agentic AI</span>—leveraging advanced tools and frameworks to extract insights and build intelligent automation solutions. My work focuses on transforming complex data into actionable strategies and developing AI systems that adapt and learn.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="dark-card p-8 rounded-xl shadow-lg card-hover flex flex-col items-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-secondary-200 to-secondary-100 rounded-full mb-4 glow-effect">
              <BarChart3 className="text-secondary-500" size={32} />
            </div>
            <h3 className="text-xl font-bold text-primary-900 mb-2">Data Analysis & Science</h3>
            <p className="text-primary-600 text-center">Experienced in Python, SQL, Pandas, NumPy, Matplotlib, Seaborn for data wrangling, visualization, and insight generation.</p>
          </div>
          <div className="dark-card p-8 rounded-xl shadow-lg card-hover flex flex-col items-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-secondary-200 to-secondary-100 rounded-full mb-4 glow-effect">
              <Brain className="text-secondary-500" size={32} />
            </div>
            <h3 className="text-xl font-bold text-primary-900 mb-2">Agentic AI & Machine Learning</h3>
            <p className="text-primary-600 text-center">Skilled in LangChain, OpenAI API, Hugging Face, PyTorch, TensorFlow, AutoGen for building adaptive, intelligent systems.</p>
          </div>
          <div className="dark-card p-8 rounded-xl shadow-lg card-hover flex flex-col items-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-secondary-200 to-secondary-100 rounded-full mb-4 glow-effect">
              <Code className="text-secondary-500" size={32} />
            </div>
            <h3 className="text-xl font-bold text-primary-900 mb-2">Development & Tools</h3>
            <p className="text-primary-600 text-center">React, JavaScript, Git, Docker, AWS, Jupyter—modern tools for robust, scalable development.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
