import React from 'react'
import { ExternalLink, Github, Star } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Derma-Vision',
      description: 'A Python Flask web application for detecting and analyzing skin conditions from uploaded images. Users can register, log in, upload skin photos, and receive automated analysis reports using machine learning.',
      image: '🔬',
      technologies: ['Python', 'Flask', 'Machine Learning', 'Computer Vision', 'Deep Learning', "APIs"],
      githubUrl: 'https://github.com/dip051030/Derma-Vision',
      featured: true,
      isPublic: true
    },
    {
      id: 2,
      title: 'Chatbot-Helper',
      description: 'An intelligent chatbot designed to guide Nepali citizens through government services, procedures, and resources. Provides clear, accessible support for official documents and public programs.',
      image: '🤖',
      technologies: ['Python', 'NLP', 'Chatbot Framework', 'APIs'],
      githubUrl: 'https://github.com/dip051030/Chatbot-Helper',
      featured: true,
      isPublic: true
    },
    {
      id: 3,
      title: 'ENVOApp',
      description: 'Your Guide to Environmental Sustainability 🌍. An interactive application designed to empower users with knowledge and tools to make informed, eco-conscious choices in their daily lives.',
      image: '🌱',
      technologies: ['Python', 'Data Analysis', 'Interactive UI'],
      githubUrl: 'https://github.com/dip051030/ENVOApp',
      featured: false,
      isPublic: true
    },
    {
      id: 4,
      title: 'Mental Health Bot',
      description: 'An AI-powered mental health support chatbot that provides emotional support, resources, and guidance for mental wellness. Features conversational AI and mental health assessment tools.',
      image: '💚',
      technologies: ['Python', 'AI/ML', 'APIs', 'Conversational AI'],
      githubUrl: 'https://github.com/dip051030/Mental_Health_bot',
      featured: true,
      isPublic: true
    }
  ]

  const ProjectCard = ({ project }) => (
    <div className="dark-card rounded-xl shadow-lg overflow-hidden card-hover group">
      {project.featured && (
        <div className="bg-gradient-to-r from-accent-400 to-secondary-400 text-white px-4 py-2 text-sm font-semibold flex items-center gap-2">
          <Star size={16} />
          <span>Featured Project</span>
        </div>
      )}
      
      {/* Project Image/Icon */}
      <div className="bg-gradient-to-br from-secondary-400/10 to-accent-400/10 p-12 flex items-center justify-center border-b border-dark-300">
        <div className="text-7xl">{project.image}</div>
      </div>
      
      {/* Project Content */}
      <div className="p-8">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-2xl font-bold text-primary-900 group-hover:text-secondary-400 transition-colors leading-tight">
            {project.title}
          </h3>
          {project.isPublic && (
            <span className="text-xs bg-accent-400/20 text-accent-400 px-2 py-1 rounded-full font-medium border border-accent-400/30">
              Public
            </span>
          )}
        </div>
        <p className="text-primary-600 mb-6 leading-relaxed text-lg">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span 
              key={tech}
              className="bg-gradient-to-r from-secondary-400/20 to-accent-400/20 text-secondary-400 px-4 py-2 rounded-full text-sm font-medium border border-secondary-400/30"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Project Link */}
        <div className="flex justify-center">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} source code on GitHub`}
            className="inline-flex items-center gap-3 gradient-button text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl glow-effect"
          >
            <Github size={20} />
            <span>View on GitHub</span>
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
          <p className="text-xl text-primary-700 max-w-2xl mx-auto">
            Real-world applications I've built to solve problems in healthcare, government services, and environmental sustainability
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="dark-card p-10 rounded-xl shadow-lg">
            <h3 className="text-3xl font-bold text-primary-900 mb-6">
              Want to see more?
            </h3>
            <p className="text-primary-600 mb-8 text-lg leading-relaxed max-w-2xl mx-auto">
              Check out my GitHub profile for more projects focused on AI, data analysis,
              and solutions that make a real impact in people's lives.
            </p>
            <a 
              href="https://github.com/dip051030"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 gradient-button text-white px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 glow-effect text-lg"
            >
              <Github size={24} />
              <span>View GitHub Profile</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
