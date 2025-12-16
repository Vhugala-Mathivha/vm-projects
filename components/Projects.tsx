import React from 'react';
import { motion } from 'framer-motion';
import { ProjectItem } from '../types';
import { ExternalLink } from 'lucide-react';

const projects: ProjectItem[] = [
  { id: 1, title: 'Wilmac Insurances', category: 'Mobile Web', imageUrl: 'images/wilmac.png', projectUrl: 'https://wilmac-insurances.vercel.app/' },
  { id: 2, title: 'Portfolio', category: 'Portfolio', imageUrl: 'images/port.png', projectUrl: 'https://my-portfolio-hwxv.vercel.app/' },
  { id: 3, title: 'Diagrams', category: 'Diagrams', imageUrl: 'https://picsum.photos/600/400?random=3', projectUrl: '#' },
  { id: 4, title: 'Corporate Dash', category: 'Development', imageUrl: 'https://picsum.photos/600/400?random=4', projectUrl: '#' },
  { id: 5, title: 'OneDraw lotto', category: 'Mobile Web', imageUrl: 'images/lotto1.png', projectUrl: 'https://one-draw-five.vercel.app/' },
  { id: 6, title: 'LURE Weddings', category: 'Business', imageUrl: 'images/lure.png', projectUrl: 'https://lure-weddings-w8jl.vercel.app/' },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900">Recent Projects</h2>
            <div className="w-16 h-1 bg-red-800 mt-4"></div>
          </div>
          <p className="text-gray-500 mt-4 md:mt-0 max-w-md text-right">
            Explore some of the high-quality digital solutions we've delivered to our satisfied clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-xl shadow-lg"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-red-600 text-sm font-bold uppercase">{project.category}</span>
                <h3 className="text-white text-xl font-bold">{project.title}</h3>
                <a 
                  href={project.projectUrl || '#'}
                  target={project.projectUrl && project.projectUrl !== '#' ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center text-white hover:text-red-600 transition-colors w-fit cursor-pointer"
                  onClick={(e) => {
                    if(!project.projectUrl || project.projectUrl === '#') {
                      e.preventDefault();
                    }
                  }}
                >
                  View Project <ExternalLink size={16} className="ml-2" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;