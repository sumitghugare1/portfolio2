import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import Terminal from './Terminal';

const Hero = () => {
  const [showTerminal, setShowTerminal] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section flex items-center justify-center min-h-screen bg-terminal-gradient relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="border border-terminal-orange/20"></div>
          ))}
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-terminal-orange rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side - Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold"
            >
              <span className="text-terminal-white">Hi, I'm </span>
              <span className="text-gradient-orange neon-text">
                <Typewriter
                  words={['Sumit', 'Developer', 'Creator']}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-terminal-orange-highlight font-bold neon-text"
            >
              UI/UX & Frontend Specialist
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="terminal-border p-6 neumorphism"
            >
              <p className="text-terminal-white/90 text-lg leading-relaxed">
                <span className="text-terminal-orange">const</span>{' '}
                <span className="text-terminal-info">developer</span> ={' '}
                <span className="text-terminal-white">{`{`}</span><br/>
                <span className="ml-4 text-terminal-orange-highlight">name:</span>{' '}
                <span className="text-terminal-success">'Sumit'</span>,<br/>
                <span className="ml-4 text-terminal-orange-highlight">skills:</span>{' '}
                <span className="text-terminal-success">['React', 'TypeScript', 'TailwindCSS']</span>,<br/>
                <span className="ml-4 text-terminal-orange-highlight">passion:</span>{' '}
                <span className="text-terminal-success">'Building amazing web experiences'</span><br/>
                <span className="text-terminal-white">{`}`}</span>
              </p>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 btn-primary rounded-lg font-mono text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              [ Explore Work ]
            </motion.button>
            
            <motion.button
              onClick={() => setShowTerminal(!showTerminal)}
              className="px-8 py-4 btn-secondary rounded-lg font-mono text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              [ Open Terminal ]
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Side - Terminal */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center"
        >
          {showTerminal ? (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Terminal />
            </motion.div>
          ) : (
            <Terminal />
          )}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-terminal-orange text-3xl cursor-pointer neon-text"
          onClick={() => scrollToSection('about')}
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;