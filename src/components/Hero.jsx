import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import Terminal from './Terminal';
import { FiPlay, FiCode, FiStar } from 'react-icons/fi';

const Hero = () => {
  const [showTerminal, setShowTerminal] = useState(true);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { label: 'Years Experience', value: '3+', icon: '💼' },
    { label: 'Projects Completed', value: '25+', icon: '🚀' },
    { label: 'Technologies', value: '15+', icon: '⚡' },
    { label: 'Coffee Consumed', value: '∞', icon: '☕' }
  ];

  return (
    <section className="flex items-center justify-center min-h-screen relative overflow-hidden pt-28 pb-16 px-4">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10 py-8">
        {/* Left Side - Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 order-2 xl:order-1"
        >
          {/* Main Heading */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              <div className="text-terminal-white font-mono text-sm md:text-base">
                <span className="text-terminal-orange">$</span> ./introduce_developer.sh
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="text-white">Hi, I'm </span>
                <br />
                <span className="text-terminal-orange inline-block">
                  <Typewriter
                    words={['Sumit', 'Developer', 'Creator', 'Problem Solver']}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={2000}
                  />
                </span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-3"
            >
              <p className="text-lg sm:text-xl md:text-2xl font-bold">
                <span className="text-white">Full Stack Developer</span>
              </p>
              <p className="text-sm sm:text-base text-white leading-relaxed max-w-lg">
                Crafting beautiful, responsive web experiences with modern technologies. 
                Passionate about clean code, innovative design, and turning ideas into reality.
              </p>
            </motion.div>

            {/* Code Block */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="terminal-border p-3 sm:p-4 neumorphism max-w-lg"
            >
              <div className="terminal-header mb-3">
                <div className="terminal-button terminal-red"></div>
                <div className="terminal-button terminal-yellow"></div>
                <div className="terminal-button terminal-green"></div>
                <span className="text-terminal-orange text-xs font-bold ml-2">developer.js</span>
              </div>
              <div className="font-mono text-xs leading-relaxed">
                <div className="text-terminal-orange">const <span className="text-terminal-white">developer</span> = {`{`}</div>
                <div className="ml-3 text-terminal-orange">name: <span className="text-terminal-white">'Sumit Ghugare'</span>,</div>
                <div className="ml-3 text-terminal-orange">role: <span className="text-terminal-white">'Full Stack Developer'</span>,</div>
                <div className="ml-3 text-terminal-orange">passionate_about: <span className="text-terminal-white">'Clean Code & Great UX'</span>,</div>
                <div className="ml-3 text-terminal-orange">status: <span className="text-terminal-white">'Available for opportunities'</span></div>
                <div className="text-terminal-orange">{`}`};</div>
              </div>
            </motion.div>
          </div>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-lg"
          >
            <motion.button
              onClick={() => scrollToSection('projects')}
              className="group btn-primary px-4 sm:px-6 py-3 rounded-lg font-mono text-sm sm:text-base flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiPlay className="group-hover:animate-pulse" />
              <span className="hidden sm:inline">[ Explore My Work ]</span>
              <span className="sm:hidden">[ Projects ]</span>
            </motion.button>
            
            <motion.button
              onClick={() => setShowTerminal(!showTerminal)}
              className="group btn-secondary px-4 sm:px-6 py-3 rounded-lg font-mono text-sm sm:text-base flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiCode className="group-hover:animate-spin" />
              <span className="hidden sm:inline">[ {showTerminal ? 'Hide' : 'Show'} Terminal ]</span>
              <span className="sm:hidden">[ Terminal ]</span>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-2 gap-2 sm:gap-3 max-w-lg"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className={`terminal-border p-2 sm:p-3 text-center transition-all duration-300 ${
                  index % 2 === 0 ? 'hover:bg-terminal-orange/10' : 'hover:bg-terminal-blue/10'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <div className="text-lg sm:text-xl mb-1">{stat.icon}</div>
                <div className={`font-bold text-base sm:text-lg ${
                  index % 2 === 0 ? 'text-terminal-orange' : 'text-terminal-blue'
                }`}>{stat.value}</div>
                <div className="text-white text-xs sm:text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side - Terminal */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center xl:justify-end order-1 xl:order-2"
        >
          <AnimatePresence mode="wait">
            {showTerminal ? (
              <motion.div
                key="terminal"
                initial={{ scale: 0, opacity: 0, rotateY: -90 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                exit={{ scale: 0, opacity: 0, rotateY: 90 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                className="relative w-full max-w-lg"
              >
                <Terminal />
                
                {/* Floating Action Buttons around Terminal */}
                <motion.div
                  className="absolute -top-3 -right-3 bg-terminal-success p-2 rounded-full text-black cursor-pointer"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  onClick={() => scrollToSection('skills')}
                  title="View Skills"
                >
                  <FiStar size={14} />
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-3 -left-3 bg-terminal-info p-2 rounded-full text-black cursor-pointer"
                  whileHover={{ scale: 1.2, rotate: -360 }}
                  onClick={() => scrollToSection('contact')}
                  title="Get in Touch"
                >
                  📧
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="placeholder"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className="w-full max-w-lg h-80 terminal-border flex items-center justify-center bg-terminal-gray/10"
              >
                <div className="text-center space-y-3">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="text-5xl"
                  >
                    💻
                  </motion.div>
                  <p className="text-terminal-orange font-mono text-sm">Terminal is sleeping...</p>
                  <p className="text-terminal-white text-xs">Click the button to wake it up!</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-16 right-16 hidden xl:block">
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="text-terminal-orange/30 text-4xl"
        >
          ⚡
        </motion.div>
      </div>
      
      <div className="absolute bottom-16 left-16 hidden xl:block">
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="text-terminal-orange/30 text-4xl"
        >
          🚀
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
