import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import Terminal from './Terminal';
import { FiArrowDown, FiPlay, FiCode, FiStar } from 'react-icons/fi';

const Hero = () => {
  const [showTerminal, setShowTerminal] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
    <section className="flex items-center justify-center min-h-screen bg-terminal-gradient relative overflow-hidden pt-16">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-4 h-full">
            {Array.from({ length: 48 }).map((_, i) => (
              <motion.div 
                key={i} 
                className="border border-terminal-orange/30"
                animate={{ 
                  opacity: [0.1, 0.3, 0.1],
                  borderColor: ['rgba(255, 119, 51, 0.3)', 'rgba(255, 76, 41, 0.5)', 'rgba(255, 119, 51, 0.3)']
                }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.1 }}
              />
            ))}
          </div>
        </div>

        {/* Floating Code Snippets */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-terminal-orange/20 font-mono text-xs"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 0.5, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          >
            {['const', 'function', 'return', 'import', 'export', 'async', 'await', '{', '}', '()', '=>'][Math.floor(Math.random() * 11)]}
          </motion.div>
        ))}

        {/* Mouse Follower Effect */}
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-terminal-orange/5 blur-3xl"
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 30 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10 py-8">
        {/* Left Side - Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Main Heading */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              <div className="text-terminal-white/60 font-mono text-base">
                <span className="text-terminal-orange">$</span> ./introduce_developer.sh
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-terminal-white">Hi, I'm </span>
                <br />
                <span className="text-gradient-orange neon-text inline-block">
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
              <p className="text-xl md:text-2xl font-bold">
                <span className="text-terminal-orange-highlight neon-text">UI/UX & Frontend Specialist</span>
              </p>
              <p className="text-base text-terminal-white/80 leading-relaxed max-w-lg">
                Crafting beautiful, responsive web experiences with modern technologies. 
                Passionate about clean code, innovative design, and turning ideas into reality.
              </p>
            </motion.div>

            {/* Code Block */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="terminal-border p-4 neumorphism max-w-lg"
            >
              <div className="terminal-header mb-3">
                <div className="terminal-button terminal-red"></div>
                <div className="terminal-button terminal-yellow"></div>
                <div className="terminal-button terminal-green"></div>
                <span className="text-terminal-orange text-xs font-bold ml-2">developer.js</span>
              </div>
              <div className="font-mono text-xs leading-relaxed">
                <div className="text-terminal-orange">const <span className="text-terminal-info">developer</span> = {`{`}</div>
                <div className="ml-3 text-terminal-orange-highlight">name: <span className="text-terminal-success">'Sumit'</span>,</div>
                <div className="ml-3 text-terminal-orange-highlight">role: <span className="text-terminal-success">'Frontend Specialist'</span>,</div>
                <div className="ml-3 text-terminal-orange-highlight">skills: <span className="text-terminal-success">['React', 'TypeScript', 'Node.js']</span>,</div>
                <div className="ml-3 text-terminal-orange-highlight">passionate_about: <span className="text-terminal-success">'Clean Code & Great UX'</span>,</div>
                <div className="ml-3 text-terminal-orange-highlight">status: <span className="text-terminal-info">'Available for opportunities'</span></div>
                <div className="text-terminal-orange">{`}`};</div>
              </div>
            </motion.div>
          </div>

          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <motion.button
              onClick={() => scrollToSection('projects')}
              className="group btn-primary px-6 py-3 rounded-lg font-mono text-base flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiPlay className="group-hover:animate-pulse" />
              [ Explore My Work ]
            </motion.button>
            
            <motion.button
              onClick={() => setShowTerminal(!showTerminal)}
              className="group btn-secondary px-6 py-3 rounded-lg font-mono text-base flex items-center gap-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiCode className="group-hover:animate-spin" />
              [ {showTerminal ? 'Hide' : 'Show'} Terminal ]
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-2 gap-3 max-w-lg"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="terminal-border p-3 text-center hover:bg-terminal-orange/10 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <div className="text-xl mb-1">{stat.icon}</div>
                <div className="text-terminal-orange font-bold text-lg">{stat.value}</div>
                <div className="text-terminal-white/60 text-xs">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side - Terminal */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center lg:justify-end"
        >
          <AnimatePresence mode="wait">
            {showTerminal ? (
              <motion.div
                key="terminal"
                initial={{ scale: 0, opacity: 0, rotateY: -90 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                exit={{ scale: 0, opacity: 0, rotateY: 90 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                className="relative"
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
                  <p className="text-terminal-white/60 text-xs">Click the button to wake it up!</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center gap-1 text-terminal-orange hover:text-terminal-orange-highlight transition-colors group"
          whileHover={{ y: -3 }}
        >
          <span className="text-xs font-mono">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-1.5 border border-terminal-orange/50 rounded-full group-hover:border-terminal-orange group-hover:bg-terminal-orange/10"
          >
            <FiArrowDown size={16} />
          </motion.div>
        </motion.button>
      </motion.div>

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
