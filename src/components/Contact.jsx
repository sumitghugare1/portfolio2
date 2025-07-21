import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('Message sent successfully! 🚀');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 3000);
    }, 2000);
  };

  const socialLinks = [
    { name: 'Email', icon: FiMail, url: 'mailto:sumit@example.com', color: 'text-terminal-green' },
    { name: 'GitHub', icon: FiGithub, url: 'https://github.com/sumit', color: 'text-terminal-purple' },
    { name: 'LinkedIn', icon: FiLinkedin, url: 'https://linkedin.com/in/sumit', color: 'text-terminal-cyan' },
    { name: 'Twitter', icon: FiTwitter, url: 'https://twitter.com/sumit', color: 'text-terminal-orange' }
  ];

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
            <span className="text-terminal-purple">$</span> ./contact.sh
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="terminal-border"
            >
              <div className="terminal-header">
                <div className="terminal-button terminal-red"></div>
                <div className="terminal-button terminal-yellow"></div>
                <div className="terminal-button terminal-green"></div>
                <span className="text-terminal-green text-sm">send-message.js</span>
              </div>
              
              <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-terminal-green text-sm mb-2">
                      <span className="text-terminal-purple">const</span> name = 
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-terminal-gray border border-terminal-green/30 text-terminal-green p-3 rounded focus:border-terminal-green focus:outline-none transition-colors font-mono"
                      placeholder="'Your Name'"
                    />
                  </div>

                  <div>
                    <label className="block text-terminal-green text-sm mb-2">
                      <span className="text-terminal-purple">const</span> email = 
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-terminal-gray border border-terminal-green/30 text-terminal-green p-3 rounded focus:border-terminal-green focus:outline-none transition-colors font-mono"
                      placeholder="'your.email@example.com'"
                    />
                  </div>

                  <div>
                    <label className="block text-terminal-green text-sm mb-2">
                      <span className="text-terminal-purple">const</span> message = 
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-terminal-gray border border-terminal-green/30 text-terminal-green p-3 rounded focus:border-terminal-green focus:outline-none transition-colors font-mono resize-none"
                      placeholder="'Hello Sumit, I would like to...'"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full p-4 border-2 font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                      isSubmitting
                        ? 'bg-terminal-gray border-terminal-gray text-terminal-green/50 cursor-not-allowed'
                        : 'bg-terminal-green text-terminal-bg border-terminal-green hover:bg-transparent hover:text-terminal-green hover-glow'
                    }`}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    <FiSend className={isSubmitting ? 'animate-pulse' : ''} />
                    {isSubmitting ? 'Sending...' : '[ Execute sendMessage() ]'}
                  </motion.button>

                  {submitStatus && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-terminal-green text-center p-3 bg-terminal-gray/30 rounded border border-terminal-green/30"
                    >
                      {submitStatus}
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>

            {/* Contact Info & Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Contact Info */}
              <div className="terminal-border">
                <div className="terminal-header">
                  <div className="terminal-button terminal-red"></div>
                  <div className="terminal-button terminal-yellow"></div>
                  <div className="terminal-button terminal-green"></div>
                  <span className="text-terminal-green text-sm">contact-info.json</span>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="text-terminal-green">
                    <span className="text-terminal-orange">{`{`}</span><br/>
                    <span className="ml-4 text-terminal-purple">"status":</span> <span className="text-terminal-green">"Available for new opportunities"</span>,<br/>
                    <span className="ml-4 text-terminal-purple">"response_time":</span> <span className="text-terminal-green">"Usually within 24 hours"</span>,<br/>
                    <span className="ml-4 text-terminal-purple">"location":</span> <span className="text-terminal-green">"Remote / Hybrid"</span>,<br/>
                    <span className="ml-4 text-terminal-purple">"interests":</span> <span className="text-terminal-green">["Frontend", "UI/UX", "Open Source"]</span><br/>
                    <span className="text-terminal-orange">{`}`}</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="terminal-border">
                <div className="terminal-header">
                  <div className="terminal-button terminal-red"></div>
                  <div className="terminal-button terminal-yellow"></div>
                  <div className="terminal-button terminal-green"></div>
                  <span className="text-terminal-green text-sm">social-links.sh</span>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`flex items-center gap-4 p-3 border border-terminal-green/30 hover:border-terminal-green transition-all duration-300 group hover-glow ${social.color}`}
                        whileHover={{ scale: 1.02 }}
                      >
                        <social.icon size={24} className="group-hover:animate-pulse" />
                        <div>
                          <div className="font-semibold">{social.name}</div>
                          <div className="text-sm opacity-70">Click to connect</div>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Terminal Command */}
              <div className="terminal-border bg-terminal-gray/20">
                <div className="p-4">
                  <div className="text-terminal-green space-y-2">
                    <div>
                      <span className="text-terminal-purple">sumit@dev</span>
                      <span className="text-terminal-green">:</span>
                      <span className="text-terminal-cyan">~</span>
                      <span className="text-terminal-green">$ </span>
                      <span className="text-terminal-orange">echo</span>
                      <span className="text-terminal-green"> "Let's build something amazing together!"</span>
                    </div>
                    <div className="ml-4 text-terminal-cyan">
                      Let's build something amazing together!
                    </div>
                    <div>
                      <span className="text-terminal-purple">sumit@dev</span>
                      <span className="text-terminal-green">:</span>
                      <span className="text-terminal-cyan">~</span>
                      <span className="text-terminal-green">$ </span>
                      <span className="animate-blink">|</span>
                    </div>
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

export default Contact;