import React from 'react'
import { ExternalLink, Github, Star } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'AI Data Analytics Platform',
      description: 'A comprehensive platform for automated data analysis using machine learning algorithms with real-time insights and predictive modeling capabilities.',
      image: '📊',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'React'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Intelligent Chat Agent',
      description: 'An agentic AI system that can understand context, maintain conversations, and execute complex tasks using LangChain and OpenAI API.',
      image: '🤖',
      technologies: ['Python', 'LangChain', 'OpenAI API', 'Streamlit'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false
    },
    {
      id: 3,
      title: 'Multi-Agent Workflow System',
      description: 'A collaborative AI system where multiple agents work together to solve complex problems and automate business processes.',
      image: '🔄',
      technologies: ['Python', 'AutoGen', 'PostgreSQL', 'Docker'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true
    },
    {
      id: 4,
      title: 'Predictive Analytics Dashboard',
      description: 'Real-time dashboard for visualizing predictive models and data insights with interactive charts and automated reporting.',
      image: '📈',
      technologies: ['Python', 'Plotly', 'Pandas', 'AWS'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Data Pipeline Automation',
      description: 'Automated ETL pipeline for processing large datasets with real-time monitoring and error handling capabilities.',
      image: '⚡',
      technologies: ['Python', 'Apache Spark', 'MongoDB', 'Docker'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Neural Network Trainer',
      description: 'Custom neural network training platform with hyperparameter optimization and model deployment capabilities.',
      image: '🧠',
      technologies: ['Python', 'PyTorch', 'Jupyter', 'MLflow'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true
    }
  ]

  const ProjectCard = ({ project }) => (
    <div className="dark-card rounded-xl shadow-lg overflow-hidden card-hover group">
      {project.featured && (
        <div className="bg-gradient-to-r from-accent-400 to-secondary-400 text-white px-4 py-1 text-xs font-semibold flex items-center gap-1">
          <Star size={12} />
          Featured Project
        </div>
      )}
      
      {/* Project Image/Icon */}
      <div className="bg-gradient-to-br from-secondary-400/10 to-accent-400/10 p-8 flex items-center justify-center border-b border-dark-300">
        <div className="text-6xl">{project.image}</div>
      </div>
      
      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary-900 mb-3 group-hover:text-secondary-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-primary-600 mb-4 leading-relaxed">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span 
              key={tech}
              className="bg-gradient-to-r from-secondary-400/20 to-accent-400/20 text-secondary-400 px-3 py-1 rounded-full text-sm font-medium border border-secondary-400/30"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Project Links */}
        <div className="flex gap-3">
          <a 
            href={project.githubUrl}
            className="flex items-center gap-2 text-primary-600 hover:text-primary-900 transition-colors px-3 py-2 rounded-lg hover:bg-dark-300"
          >
            <Github size={18} />
            <span className="text-sm font-medium">Code</span>
          </a>
          <a 
            href={project.liveUrl}
            className="flex items-center gap-2 text-secondary-400 hover:text-secondary-300 transition-colors px-3 py-2 rounded-lg hover:bg-secondary-400/10"
          >
            <ExternalLink size={18} />
            <span className="text-sm font-medium">Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  )

  return (
    <section id="projects" className="py-20 section-padding bg-dark-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary-900 mb-4">My Projects</h2>
          <p className="text-xl text-primary-700">Data science and AI solutions I've built</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="dark-card p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-primary-900 mb-4">
              Want to see more?
            </h3>
            <p className="text-primary-600 mb-6">
              Check out my GitHub profile for more data science and AI projects.
            </p>
            <a 
              href="#"
              className="inline-flex items-center gap-2 gradient-button text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 glow-effect"
            >
              <Github size={20} />
              View GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
