import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { FiExternalLink, FiGithub, FiFilter } from 'react-icons/fi';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const categories = ['All', 'Frontend', 'Full Stack'];

  const handleFilter = (category) => {
    setFilter(category);
    if (category === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === category));
    }
  };

  return (
    <section className="section py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            <span className="text-terminal-orange">$</span> ls projects/
          </h2>

          {/* Filter Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <div className="terminal-border p-4 bg-terminal-gray/30">
              <div className="flex items-center gap-2 text-terminal-orange text-sm mb-3">
                <FiFilter className="text-terminal-orange-highlight" />
                <span className="font-bold">Filter by category:</span>
              </div>
              <div className="flex gap-2">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => handleFilter(category)}
                    className={`px-4 py-2 text-sm border transition-all duration-300 font-mono ${
                      filter === category
                        ? category === 'Frontend' 
                          ? 'bg-terminal-blue text-black border-terminal-blue font-bold'
                          : 'bg-terminal-orange text-black border-terminal-orange font-bold'
                        : category === 'Frontend'
                          ? 'text-white border-terminal-blue hover:bg-terminal-blue hover:text-black'
                          : 'text-white border-terminal-orange hover:bg-terminal-orange hover:text-black'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    [ {category} ]
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="terminal-border bg-terminal-gray/20 hover:bg-terminal-gray/40 transition-all duration-300 group"
              >
                <div className="terminal-header">
                  <div className="terminal-button terminal-red"></div>
                  <div className="terminal-button terminal-yellow"></div>
                  <div className="terminal-button terminal-green"></div>
                  <span className="text-terminal-orange text-sm font-bold">{project.title.toLowerCase().replace(/\s+/g, '-')}.jsx</span>
                </div>
                
                <div className="p-6">
                  {/* Project Image */}
                  <div className="mb-4 text-center">
                    {project.image.startsWith('/') ? (
                      <div className="w-full h-48 rounded-lg overflow-hidden bg-terminal-gray/30 flex items-center justify-center">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="w-full h-full bg-terminal-gray/50 flex items-center justify-center text-terminal-orange text-4xl hidden">
                          🖼️
                        </div>
                      </div>
                    ) : (
                      <div className="text-6xl">{project.image}</div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-white mb-4 text-sm">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="text-terminal-orange text-sm mb-2 font-bold">Tech Stack:</div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-terminal-orange/20 text-terminal-orange text-xs border border-terminal-orange/40 rounded font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 text-sm bg-terminal-orange text-black hover:bg-terminal-orange-light transition-colors font-bold"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiExternalLink size={14} />
                      Live Demo
                    </motion.a>
                    
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 text-sm border border-terminal-orange text-terminal-orange hover:bg-terminal-orange hover:text-black transition-colors font-bold"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiGithub size={14} />
                      Code
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Terminal Command Line */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 terminal-border p-4 bg-terminal-gray/20"
          >
            <div className="text-white">
              <span className="text-terminal-orange">sumit@dev</span>
              <span className="text-white">:</span>
              <span className="text-white">~/projects</span>
              <span className="text-white">$ </span>
              <span className="text-terminal-orange">echo</span>
              <span className="text-white"> "More awesome projects coming soon!" </span>
              <span className="animate-blink text-terminal-orange">|</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;