import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="section bg-terminal-bg py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-terminal-green mb-12 text-center">
            <span className="text-terminal-purple">$</span> cat about.txt
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
                <span className="text-terminal-green text-sm">profile.jpg</span>
              </div>
              <div className="p-6 text-center">
                <div className="w-48 h-48 mx-auto mb-4 border-2 border-terminal-green rounded-lg bg-terminal-gray/30 flex items-center justify-center overflow-hidden">
                  {/* Replace with actual image */}
                  <div className="text-terminal-green text-6xl">
                    👨‍💻
                  </div>
                </div>
                <div className="text-terminal-green font-mono">
                  <span className="text-terminal-purple">Status:</span> Online 🟢<br/>
                  <span className="text-terminal-purple">Location:</span> Earth 🌍<br/>
                  <span className="text-terminal-purple">Mode:</span> Coding
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
                <div className="terminal-button terminal-red"></div>
                <div className="terminal-button terminal-yellow"></div>
                <div className="terminal-button terminal-green"></div>
                <span className="text-terminal-green text-sm">about-me.sh</span>
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-3">
                  <div className="text-terminal-green">
                    <span className="text-terminal-purple">sumit@dev</span>
                    <span className="text-terminal-green">:</span>
                    <span className="text-terminal-cyan">~</span>
                    <span className="text-terminal-green">$ </span>
                    <span className="text-terminal-orange">whoami</span>
                  </div>
                  
                  <div className="ml-4 text-terminal-green/90">
                    Frontend Developer & UI/UX Enthusiast with 3+ years of experience crafting beautiful, responsive web applications.
                  </div>

                  <div className="text-terminal-green">
                    <span className="text-terminal-purple">sumit@dev</span>
                    <span className="text-terminal-green">:</span>
                    <span className="text-terminal-cyan">~</span>
                    <span className="text-terminal-green">$ </span>
                    <span className="text-terminal-orange">cat skills.txt</span>
                  </div>
                  
                  <div className="ml-4 text-terminal-green/90">
                    • React.js & TypeScript Expert<br/>
                    • Modern CSS & TailwindCSS<br/>
                    • Node.js & Express<br/>
                    • Database Design (MongoDB, PostgreSQL)<br/>
                    • UI/UX Design & Prototyping
                  </div>

                  <div className="text-terminal-green">
                    <span className="text-terminal-purple">sumit@dev</span>
                    <span className="text-terminal-green">:</span>
                    <span className="text-terminal-cyan">~</span>
                    <span className="text-terminal-green">$ </span>
                    <span className="text-terminal-orange">echo $PASSION</span>
                  </div>
                  
                  <div className="ml-4 text-terminal-cyan">
                    "Building digital experiences that make a difference"
                  </div>

                  <div className="flex items-center">
                    <span className="text-terminal-purple">sumit@dev</span>
                    <span className="text-terminal-green">:</span>
                    <span className="text-terminal-cyan">~</span>
                    <span className="text-terminal-green">$ </span>
                    <span className="animate-blink">|</span>
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