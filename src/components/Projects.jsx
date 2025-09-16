import React from 'react'
import { ExternalLink, Github, Star } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Dashboard',
      description: 'A comprehensive admin dashboard for managing online stores with real-time analytics, inventory management, and order tracking.',
      image: '🛒',
      technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Weather App',
      description: 'A responsive weather application that provides current weather conditions and 5-day forecasts with beautiful UI.',
      image: '🌤️',
      technologies: ['React', 'API Integration', 'Tailwind CSS'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false
    },
    {
      id: 3,
      title: 'Task Management System',
      description: 'A collaborative task management tool with real-time updates, file sharing, and team communication features.',
      image: '📋',
      technologies: ['React', 'Firebase', 'Material-UI'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true
    },
    {
      id: 4,
      title: 'Social Media Clone',
      description: 'A full-stack social media platform with user authentication, posts, comments, and real-time messaging.',
      image: '💬',
      technologies: ['React', 'Express', 'Socket.io', 'PostgreSQL'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A responsive personal portfolio website showcasing projects and skills with modern design and animations.',
      image: '🎨',
      technologies: ['React', 'Tailwind CSS', 'Vite'],
      githubUrl: '#',
      liveUrl: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Expense Tracker',
      description: 'A personal finance application for tracking expenses, setting budgets, and analyzing spending patterns.',
      image: '💰',
      technologies: ['React', 'Chart.js', 'Local Storage'],
      githubUrl: '#',
      liveUrl: '#',
      featured: true
    }
  ]

  const ProjectCard = ({ project }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden card-hover group border border-gray-100">
      {project.featured && (
        <div className="bg-gradient-to-r from-accent-400 to-accent-500 text-white px-4 py-1 text-xs font-semibold flex items-center gap-1">
          <Star size={12} />
          Featured Project
        </div>
      )}
      
      {/* Project Image/Icon */}
      <div className="bg-gradient-to-br from-primary-50 to-secondary-50 p-8 flex items-center justify-center border-b border-gray-100">
        <div className="text-6xl">{project.image}</div>
      </div>
      
      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 leading-relaxed">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span 
              key={tech}
              className="bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium border border-primary-200"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Project Links */}
        <div className="flex gap-3">
          <a 
            href={project.githubUrl}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
          >
            <Github size={18} />
            <span className="text-sm font-medium">Code</span>
          </a>
          <a 
            href={project.liveUrl}
            className="flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors px-3 py-2 rounded-lg hover:bg-primary-50"
          >
            <ExternalLink size={18} />
            <span className="text-sm font-medium">Live Demo</span>
          </a>
        </div>
      </div>
    </div>
  )

  return (
    <section id="projects" className="py-20 section-padding bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <p className="text-xl text-gray-600">Things I've built recently</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-8 rounded-xl border border-primary-100 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want to see more?
            </h3>
            <p className="text-gray-600 mb-6">
              Check out my GitHub profile for more projects and contributions.
            </p>
            <a 
              href="#"
              className="inline-flex items-center gap-2 gradient-button text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
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
