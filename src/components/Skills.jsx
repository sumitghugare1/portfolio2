import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend');

  const activeSkills = skills.find(category => category.category === activeCategory)?.items || [];

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
            <span className="text-terminal-orange">$</span> cat skills.json
          </h2>

          {/* Category Tabs */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center mb-12"
          >
            <div className="terminal-border bg-terminal-gray/30">
              <div className="terminal-header">
                <div className="terminal-button terminal-red"></div>
                <div className="terminal-button terminal-yellow"></div>
                <div className="terminal-button terminal-green"></div>
                <span className="text-terminal-orange text-sm font-bold">skills-navigator.js</span>
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-2">
                  {skills.map((category) => (
                    <motion.button
                      key={category.category}
                      onClick={() => setActiveCategory(category.category)}
                      className={`px-6 py-3 text-sm border transition-all duration-300 font-mono ${
                        activeCategory === category.category
                          ? 'bg-terminal-orange text-black border-terminal-orange font-bold'
                          : 'text-white border-terminal-orange hover:border-terminal-orange hover:text-terminal-orange'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      [ {category.category} ]
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div 
            key={activeCategory}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {activeSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="terminal-border bg-terminal-gray/20 hover:bg-terminal-gray/40 transition-all duration-300 group"
              >
                <div className="terminal-header">
                  <div className="terminal-button terminal-red"></div>
                  <div className="terminal-button terminal-yellow"></div>
                  <div className="terminal-button terminal-green"></div>
                  <span className="text-terminal-orange text-xs font-bold">{skill.name.toLowerCase().replace(/\./g, '')}</span>
                </div>
                
                <div className="p-6 text-center">
                  <div className="text-4xl mb-3">{skill.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {skill.name}
                  </h3>
                  
                  {/* Progress Bar */}
                  <div className="mb-2">
                    <div className="flex justify-between text-xs text-white mb-1">
                      <span>Proficiency</span>
                      <span className="text-terminal-orange font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-terminal-gray h-2 rounded">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-terminal-orange to-terminal-orange-light rounded"
                      />
                    </div>
                  </div>
                  
                  <div className="text-terminal-orange text-xs font-mono font-bold">
                    {skill.level >= 90 ? (
                      <span className="text-terminal-blue">Expert ⭐</span>
                    ) : skill.level >= 80 ? (
                      <span className="text-terminal-orange">Advanced</span>
                    ) : skill.level >= 70 ? (
                      <span className="text-white">Intermediate</span>
                    ) : (
                      <span className="text-terminal-blue-light">Learning 📚</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Terminal Output */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 terminal-border p-6 bg-terminal-gray/20"
          >
            <div className="space-y-2">
              <div className="text-white">
                <span className="text-terminal-orange">sumit@dev</span>
                <span className="text-white">:</span>
                <span className="text-white">~/skills</span>
                <span className="text-white">$ </span>
                <span className="text-terminal-orange">npm run --version</span>
              </div>
              <div className="ml-4 text-terminal-orange">
                Developer v3.0.0 - Always learning, always growing! 🚀
              </div>
              <div className="text-white">
                <span className="text-terminal-orange">sumit@dev</span>
                <span className="text-white">:</span>
                <span className="text-white">~/skills</span>
                <span className="text-white">$ </span>
                <span className="animate-blink text-terminal-orange">|</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;