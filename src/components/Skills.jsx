import React from 'react'
import { Brain, BarChart3, Code } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Data Analysis & Science',
      icon: BarChart3,
      skills: ['Python', 'SQL', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn']
    },
    {
      title: 'Agentic AI & Machine Learning',
      icon: Brain,
      skills: ['LangChain', 'OpenAI API', 'Hugging Face', 'PyTorch', 'TensorFlow', 'AutoGen']
    },
    {
      title: 'Development & Tools',
      icon: Code,
      skills: ['React', 'JavaScript', 'Git', 'Docker', 'AWS', 'Jupyter']
    }
  ]

  return (
    <section id="skills" className="py-20 section-padding bg-dark-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-900 mb-4">Core Expertise</h2>
          <p className="text-xl text-primary-700">Specialized skills in data analysis and intelligent systems</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="dark-card p-8 rounded-xl shadow-lg card-hover">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-secondary-200 to-secondary-100 rounded-full mb-4 glow-effect">
                  <category.icon className="text-secondary-500" size={32} />
                </div>
                <h3 className="text-xl font-bold text-primary-900">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-gradient-to-r from-dark-300 to-primary-200 px-4 py-3 rounded-lg text-center border border-dark-400 hover:border-secondary-400 transition-all duration-300 hover:shadow-md hover:shadow-secondary-500/20"
                  >
                    <span className="text-primary-800 font-medium text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Professional Expertise Section */}
        <div className="mt-16">
          <div className="dark-card p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-primary-900 mb-6 text-center">Professional Focus Areas</h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2 glow-effect"></div>
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-1">Data Analysis & Visualization</h4>
                    <p className="text-primary-600 text-sm">Expert in extracting insights from complex datasets, statistical analysis, and creating compelling data visualizations to drive business decisions.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary-500 rounded-full mt-2 glow-effect"></div>
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-1">Predictive Analytics</h4>
                    <p className="text-primary-600 text-sm">Building and deploying machine learning models for forecasting, classification, and regression tasks across various domains.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent-400 rounded-full mt-2 glow-effect"></div>
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-1">Agentic AI Systems</h4>
                    <p className="text-primary-600 text-sm">Developing autonomous AI agents that can reason, plan, and execute complex tasks using large language models and multi-agent frameworks.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent-400 rounded-full mt-2 glow-effect"></div>
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-1">AI Integration & Automation</h4>
                    <p className="text-primary-600 text-sm">Implementing intelligent automation solutions that leverage AI to streamline processes and enhance decision-making capabilities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Technologies */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-primary-900 mb-6">Additional Technologies & Frameworks</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Scikit-learn', 'Apache Spark', 'Tableau', 'Power BI', 'MongoDB',
              'PostgreSQL', 'FastAPI', 'Streamlit', 'Plotly', 'OpenCV'
            ].map((tech) => (
              <span 
                key={tech} 
                className="bg-dark-200 px-4 py-2 rounded-full shadow-sm border border-dark-300 text-primary-800 font-medium hover:border-secondary-400 hover:bg-gradient-to-r hover:from-dark-300 hover:to-primary-200 transition-all duration-300 hover:shadow-md hover:shadow-secondary-500/20"
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
