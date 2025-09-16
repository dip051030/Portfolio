import React from 'react'
import { Brain, BarChart3, Code } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Data Analysis & Science',
      icon: BarChart3,
      skills: ['Python', 'R', 'SQL', 'Pandas', 'NumPy', 'Matplotlib']
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
    <section id="skills" className="py-20 section-padding bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Expertise</h2>
          <p className="text-xl text-gray-600">Specialized skills in data analysis and intelligent systems</p>
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

        {/* Professional Expertise Section */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-8 rounded-xl border border-primary-100 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Professional Focus Areas</h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Data Analysis & Visualization</h4>
                    <p className="text-gray-600 text-sm">Expert in extracting insights from complex datasets, statistical analysis, and creating compelling data visualizations to drive business decisions.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Predictive Analytics</h4>
                    <p className="text-gray-600 text-sm">Building and deploying machine learning models for forecasting, classification, and regression tasks across various domains.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Agentic AI Systems</h4>
                    <p className="text-gray-600 text-sm">Developing autonomous AI agents that can reason, plan, and execute complex tasks using large language models and multi-agent frameworks.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">AI Integration & Automation</h4>
                    <p className="text-gray-600 text-sm">Implementing intelligent automation solutions that leverage AI to streamline processes and enhance decision-making capabilities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Technologies */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Additional Technologies & Frameworks</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Scikit-learn', 'Apache Spark', 'Tableau', 'Power BI', 'MongoDB',
              'PostgreSQL', 'FastAPI', 'Streamlit', 'Plotly', 'Seaborn'
            ].map((tech) => (
              <span 
                key={tech} 
                className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 text-gray-700 font-medium hover:border-primary-300 hover:bg-gradient-to-r hover:from-primary-50 hover:to-secondary-50 transition-all duration-300 hover:shadow-md"
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
