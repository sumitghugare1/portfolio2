import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
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
            <span className="text-terminal-orange">$</span> cat about.txt
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Picture Terminal */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="terminal-border max-w-md mx-auto"
            >
              <div className="terminal-header">
                <div className="terminal-button terminal-red"></div>
                <div className="terminal-button terminal-yellow"></div>
                <div className="terminal-button terminal-green"></div>
                <span className="text-terminal-orange text-sm font-bold">profile.jpg</span>
              </div>
              <div className="p-6 text-center">
                <div className="w-48 h-48 mx-auto mb-4 border-2 border-terminal-orange rounded-lg bg-terminal-gray/30 flex items-center justify-center overflow-hidden">
                  {/* Replace with actual image */}
                  <div className="text-terminal-orange text-6xl">
                    👨‍💻
                  </div>
                </div>
                <div className="text-white font-mono">
                  <span className="text-terminal-orange">Status:</span> <span className="text-white">Online 🟢</span><br/>
                  <span className="text-terminal-orange">Location:</span> <span className="text-white">Earth 🌍</span><br/>
                  <span className="text-terminal-orange">Mode:</span> <span className="text-terminal-orange">Coding</span>
                </div>
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="terminal-border"
            >
              <div className="terminal-header">
                <div className="terminal-button terminal-blue"></div>
                <div className="terminal-button terminal-yellow"></div>
                <div className="terminal-button terminal-green"></div>
                <span className="text-terminal-blue text-sm font-bold">about-me.sh</span>
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-3">
                  <div className="text-white">
                    <span className="text-terminal-orange">sumit@dev</span>
                    <span className="text-white">:</span>
                    <span className="text-white">~</span>
                    <span className="text-white">$ </span>
                    <span className="text-terminal-orange">whoami</span>
                  </div>
                  
                  <div className="ml-4 text-white">
                    Frontend Developer & UI/UX Enthusiast with 3+ years of experience crafting beautiful, responsive web applications.
                  </div>

                  <div className="text-white">
                    <span className="text-terminal-orange">sumit@dev</span>
                    <span className="text-white">:</span>
                    <span className="text-white">~</span>
                    <span className="text-white">$ </span>
                    <span className="text-terminal-orange">cat skills.txt</span>
                  </div>
                  
                  <div className="ml-4 text-white">
                    • <span className="text-terminal-orange">React.js & TypeScript Expert</span><br/>
                    • <span className="text-terminal-orange">Modern CSS & TailwindCSS</span><br/>
                    • <span className="text-terminal-orange">Node.js & Express</span><br/>
                    • <span className="text-terminal-orange">Database Design (MongoDB, PostgreSQL)</span><br/>
                    • <span className="text-terminal-orange">UI/UX Design & Prototyping</span>
                  </div>

                  <div className="text-terminal-white">
                    <span className="text-terminal-orange">sumit@dev</span>
                    <span className="text-terminal-white">:</span>
                    <span className="text-terminal-white">~</span>
                    <span className="text-terminal-white">$ </span>
                    <span className="text-terminal-orange">echo $PASSION</span>
                  </div>
                  
                  <div className="ml-4 text-terminal-orange neon-text">
                    "Building digital experiences that make a difference"
                  </div>

                  <div className="flex items-center mt-4">
                    <span className="text-terminal-orange">sumit@dev</span>
                    <span className="text-terminal-white">:</span>
                    <span className="text-terminal-white">~</span>
                    <span className="text-terminal-white">$ </span>
                    <span className="animate-blink text-terminal-orange">|</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;