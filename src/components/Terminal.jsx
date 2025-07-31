import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion, AnimatePresence } from 'framer-motion';

const Terminal = () => {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);

  const commands = [
    { 
      command: 'whoami', 
      output: 'sumit-frontend-developer ✨', 
      status: 'success',
      delay: 1000
    },
    { 
      command: 'ls ~/skills', 
      output: 'React.js  TypeScript  TailwindCSS  Node.js  Next.js', 
      status: 'info',
      delay: 800
    },
    { 
      command: 'cat experience.txt', 
      output: '3+ years building amazing web experiences 🚀', 
      status: 'success',
      delay: 1200
    },
    { 
      command: 'pwd', 
      output: '/home/sumit/awesome-projects', 
      status: 'info',
      delay: 600
    },
    { 
      command: 'git status', 
      output: 'On branch main\nnothing to commit, working tree clean ✅', 
      status: 'success',
      delay: 1000
    },
    { 
      command: 'npm run deploy', 
      output: 'Build successful! Ready to impress 🎯', 
      status: 'success',
      delay: 900
    },
    {
      command: 'echo $PASSION',
      output: '"Creating digital experiences that matter" 💫',
      status: 'info',
      delay: 1100
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCommandIndex((prev) => (prev + 1) % commands.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const getTextColor = (status) => {
    switch(status) {
      case 'success': return 'text-terminal-orange';
      case 'warning': return 'text-terminal-orange';
      case 'info': return 'text-terminal-blue';
      case 'system': return 'text-white';
      default: return 'text-white';
    }
  };

  const getGlowColor = (status) => {
    switch(status) {
      case 'success': return 'drop-shadow-[0_0_8px_rgba(255,119,51,0.6)]';
      case 'warning': return 'drop-shadow-[0_0_8px_rgba(255,119,51,0.6)]';
      case 'info': return 'drop-shadow-[0_0_8px_rgba(14,165,233,0.6)]';
      case 'system': return 'drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]';
      default: return '';
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9, rotateX: -15 }}
      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      className="terminal-border w-full max-w-lg h-72 sm:h-80 md:h-96 overflow-hidden relative group"
      style={{
        background: 'linear-gradient(145deg, #1a1a1a, #0d0d0d)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,119,51,0.1)'
      }}
    >
      {/* Terminal Header */}
      <div className="terminal-header relative">
        <div className="flex items-center gap-2">
          <motion.div 
            className="terminal-button terminal-red cursor-pointer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
          <motion.div 
            className="terminal-button terminal-yellow cursor-pointer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
          <motion.div 
            className="terminal-button terminal-green cursor-pointer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        </div>
        <div className="flex-1 text-center">
          <span className="text-terminal-orange text-xs sm:text-sm font-bold">sumit@portfolio:~$</span>
        </div>
        <div className="w-16 flex justify-end">
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 bg-terminal-success rounded-full"
          />
        </div>
      </div>
      
      {/* Terminal Content */}
      <div className="p-3 sm:p-6 h-full overflow-y-auto scrollbar-hide bg-gradient-to-b from-terminal-bg to-terminal-bg-secondary relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-6 sm:grid-cols-8 gap-1 sm:gap-2 h-full">
            {Array.from({ length: 32 }).map((_, i) => (
              <motion.div
                key={i}
                className="border border-terminal-orange/20"
                animate={{ opacity: [0.1, 0.3, 0.1] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.1 }}
              />
            ))}
          </div>
        </div>

        <div className="space-y-4 relative z-10">
          {/* Welcome Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-xs sm:text-sm mb-4"
          >
            Welcome to Sumit's Interactive Terminal 🎉
          </motion.div>

          {/* Command History */}
          {commands.map((cmd, index) => (
            <AnimatePresence key={index}>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: index <= currentCommandIndex ? 1 : 0.4, 
                  x: 0,
                  scale: index === currentCommandIndex ? 1.02 : 1
                }}
                transition={{ 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 200 
                }}
                className={`${
                  index === currentCommandIndex 
                    ? 'text-white' 
                    : 'text-white/60'
                } transition-all duration-300`}
              >
                {/* Command Line */}
                <div className="flex items-center gap-1 mb-2">
                  <motion.span 
                    className="text-terminal-orange font-bold"
                    animate={index === currentCommandIndex ? { textShadow: ['0 0 0px #FF4C29', '0 0 8px #FF4C29', '0 0 0px #FF4C29'] } : {}}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    sumit@dev
                  </motion.span>
                  <span className="text-white">:</span>
                  <span className="text-white font-semibold">~</span>
                  <span className="text-terminal-orange">$ </span>
                  {index === currentCommandIndex ? (
                    <span className="text-terminal-white font-mono">
                      <Typewriter
                        words={[cmd.command]}
                        loop={1}
                        cursor
                        cursorStyle="|"
                        typeSpeed={60}
                        deleteSpeed={0}
                        delaySpeed={500}
                      />
                    </span>
                  ) : (
                    <span className="text-terminal-white font-mono">{cmd.command}</span>
                  )}
                </div>
                
                {/* Command Output */}
                {index <= currentCommandIndex && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className={`ml-6 mb-3 font-semibold whitespace-pre-line ${getTextColor(cmd.status)} ${getGlowColor(cmd.status)}`}
                  >
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 }}
                    >
                      {cmd.output}
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          ))}
          
          {/* Current Prompt */}
          <motion.div 
            className="flex items-center gap-1"
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span className="text-terminal-orange font-bold">sumit@dev</span>
            <span className="text-terminal-white">:</span>
            <span className="text-terminal-white font-semibold">~</span>
            <span className="text-terminal-orange">$ </span>
            <motion.span 
              className="text-terminal-orange text-lg"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              |
            </motion.span>
          </motion.div>
        </div>

        {/* Floating Particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-terminal-orange/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Terminal Glow Effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-terminal-orange/5 via-transparent to-terminal-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
};

export default Terminal;