import React, { useState, useEffect } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const Terminal = () => {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);

  const commands = [
    { command: 'whoami', output: 'sumit-frontend-developer', status: 'success' },
    { command: 'ls skills/', output: 'React.js  TypeScript  TailwindCSS  Node.js', status: 'info' },
    { command: 'cat experience.txt', output: '3+ years building amazing web experiences', status: 'success' },
    { command: 'pwd', output: '/home/sumit/awesome-projects', status: 'info' },
    { command: 'git status', output: 'On branch main\nnothing to commit, working tree clean ✅', status: 'success' },
    { command: 'npm run build', output: 'Build successful! Ready to deploy 🚀', status: 'success' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCommandIndex((prev) => (prev + 1) % commands.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getTextColor = (status) => {
    switch(status) {
      case 'success': return 'text-terminal-success';
      case 'warning': return 'text-terminal-warning';
      case 'info': return 'text-terminal-info';
      default: return 'text-terminal-white';
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="terminal-border w-full max-w-lg h-96 overflow-hidden animate-float"
    >
      <div className="terminal-header">
        <div className="terminal-button terminal-red"></div>
        <div className="terminal-button terminal-yellow"></div>
        <div className="terminal-button terminal-green"></div>
        <span className="text-terminal-orange text-sm font-bold">sumit@portfolio:~$</span>
      </div>
      
      <div className="p-4 h-full overflow-y-auto scrollbar-hide bg-terminal-bg">
        <div className="space-y-3">
          {commands.map((cmd, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: index <= currentCommandIndex ? 1 : 0.3, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`${index === currentCommandIndex ? 'text-terminal-white' : 'text-terminal-white/60'}`}
            >
              <div className="flex items-center">
                <span className="text-terminal-orange-highlight font-bold">sumit@dev</span>
                <span className="text-terminal-white">:</span>
                <span className="text-terminal-info">~</span>
                <span className="text-terminal-orange">$ </span>
                {index === currentCommandIndex ? (
                  <span className="text-terminal-white">
                    <Typewriter
                      words={[cmd.command]}
                      loop={1}
                      cursor
                      cursorStyle="|"
                      typeSpeed={80}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                ) : (
                  <span className="text-terminal-white">{cmd.command}</span>
                )}
              </div>
              
              {index <= currentCommandIndex && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className={`ml-4 whitespace-pre-line font-semibold ${getTextColor(cmd.status)}`}
                >
                  {cmd.output}
                </motion.div>
              )}
            </motion.div>
          ))}
          
          <div className="flex items-center">
            <span className="text-terminal-orange-highlight font-bold">sumit@dev</span>
            <span className="text-terminal-white">:</span>
            <span className="text-terminal-info">~</span>
            <span className="text-terminal-orange">$ </span>
            <span className="animate-blink text-terminal-orange">|</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Terminal;