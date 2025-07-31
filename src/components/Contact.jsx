import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiTwitter, FiSend, FiCheck } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [focusedField, setFocusedField] = useState(null);

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
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);
    }, 2000);
  };

  const socialLinks = [
    { 
      name: 'Email', 
      icon: FiMail, 
      url: 'mailto:sumitghugare3@fmail.com', 
      color: 'text-terminal-orange',
      bgColor: 'bg-terminal-orange/20',
      borderColor: 'border-terminal-orange/40',
      description: 'Drop me a line'
    },
    { 
      name: 'GitHub', 
      icon: FiGithub, 
      url: 'https://github.com/sumitghugare1', 
      color: 'text-white',
      bgColor: 'bg-white/10',
      borderColor: 'border-white/40',
      description: 'Check my code'
    },
    { 
      name: 'LinkedIn', 
      icon: FiLinkedin, 
      url: 'https://www.linkedin.com/in/sumit-ghugare-30200024a/', 
      color: 'text-terminal-blue',
      bgColor: 'bg-terminal-blue/20',
      borderColor: 'border-terminal-blue/40',
      description: 'Let\'s connect'
    },
    { 
      name: 'Twitter', 
      icon: FiTwitter, 
      url: 'https://x.com/SumitGhugare3?t=Rp9d6xQBjY0BDNNYSvRjhA&s=09', 
      color: 'text-white',
      bgColor: 'bg-white/10',
      borderColor: 'border-white/40',
      description: 'Follow me'
    }
  ];

  return (
    <section className="section py-20">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            <span className="text-terminal-orange">$</span> ./contact.sh
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
                <div className="terminal-button terminal-blue"></div>
                <div className="terminal-button terminal-green"></div>
                <span className="text-terminal-blue text-sm font-bold">contact-form.js</span>
              </div>
              
              <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-white text-sm mb-2">
                      <span className="text-terminal-orange">const</span> name = 
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full bg-terminal-gray border transition-all duration-300 text-terminal-white p-4 rounded-lg focus:outline-none font-mono ${
                        focusedField === 'name' 
                          ? 'border-terminal-orange glow-orange-intense' 
                          : 'border-terminal-orange/30 hover:border-terminal-orange/60'
                      }`}
                      placeholder="'Your Name'"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-sm mb-2">
                      <span className="text-terminal-orange">const</span> email = 
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full bg-terminal-gray border transition-all duration-300 text-terminal-white p-4 rounded-lg focus:outline-none font-mono ${
                        focusedField === 'email' 
                          ? 'border-terminal-orange glow-orange-intense' 
                          : 'border-terminal-orange/30 hover:border-terminal-orange/60'
                      }`}
                      placeholder="'your.email@example.com'"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-sm mb-2">
                      <span className="text-terminal-orange">const</span> message = 
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={6}
                      className={`w-full bg-terminal-gray border transition-all duration-300 text-terminal-white p-4 rounded-lg focus:outline-none font-mono resize-none ${
                        focusedField === 'message' 
                          ? 'border-terminal-orange glow-orange-intense' 
                          : 'border-terminal-orange/30 hover:border-terminal-orange/60'
                      }`}
                      placeholder="'Hello Sumit, I would like to...'"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full p-4 border-2 font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 rounded-lg ${
                      isSubmitting
                        ? 'bg-terminal-gray border-terminal-gray text-terminal-white/50 cursor-not-allowed'
                        : 'btn-primary'
                    }`}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <FiSend />
                        </motion.div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend />
                        [ Execute sendMessage() ]
                      </>
                    )}
                  </motion.button>

                  <AnimatePresence>
                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.9 }}
                        className="text-terminal-orange text-center p-4 bg-terminal-orange/10 rounded-lg border border-terminal-orange/30 flex items-center justify-center gap-2"
                      >
                        <FiCheck className="text-lg" />
                        <span className="font-semibold">Message sent successfully! 🚀</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
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
              <div className="terminal-border neumorphism">
                <div className="terminal-header">
                  <div className="terminal-button terminal-red"></div>
                  <div className="terminal-button terminal-yellow"></div>
                  <div className="terminal-button terminal-green"></div>
                  <span className="text-terminal-orange text-sm font-bold">contact-info.json</span>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="text-terminal-white font-mono text-sm leading-relaxed">
                    <span className="text-terminal-orange">{`{`}</span><br/>
                    <span className="ml-4 text-terminal-orange">"status":</span> <span className="text-terminal-white">"Available for new opportunities"</span>,<br/>
                    <span className="ml-4 text-terminal-orange">"response_time":</span> <span className="text-terminal-white">"Usually within 24 hours"</span>,<br/>
                    <span className="ml-4 text-terminal-orange">"location":</span> <span className="text-terminal-white">"Remote / Hybrid"</span>,<br/>
                    <span className="ml-4 text-terminal-orange">"interests":</span> <span className="text-terminal-white">["Frontend", "UI/UX", "Open Source"]</span><br/>
                    <span className="text-terminal-orange">{`}`}</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="terminal-border neumorphism">
                <div className="terminal-header">
                  <div className="terminal-button terminal-red"></div>
                  <div className="terminal-button terminal-yellow"></div>
                  <div className="terminal-button terminal-green"></div>
                  <span className="text-terminal-orange text-sm font-bold">social-links.sh</span>
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
                        className={`flex items-center gap-4 p-4 border rounded-lg transition-all duration-300 group hover:scale-105 ${social.bgColor} ${social.borderColor} hover:${social.borderColor.replace('/40', '')} ${social.color}`}
                        whileHover={{ y: -2 }}
                      >
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <social.icon size={24} className="group-hover:drop-shadow-lg" />
                        </motion.div>
                        <div>
                          <div className="font-bold text-lg">{social.name}</div>
                          <div className="text-sm opacity-80">{social.description}</div>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Terminal Command */}
              <div className="terminal-border bg-terminal-gray/20 neumorphism">
                <div className="p-6">
                  <div className="text-white space-y-3 font-mono">
                    <div className="flex items-center">
                      <span className="text-terminal-orange font-bold">sumit@dev</span>
                      <span className="text-white">:</span>
                      <span className="text-white">~</span>
                      <span className="text-white">$ </span>
                      <span className="text-terminal-orange">echo</span>
                      <span className="text-white ml-2">"Let's build something amazing together!"</span>
                    </div>
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="ml-4 text-terminal-orange font-semibold"
                    >
                      Let's build something amazing together! ✨
                    </motion.div>
                    <div className="flex items-center">
                      <span className="text-terminal-orange font-bold">sumit@dev</span>
                      <span className="text-terminal-white">:</span>
                      <span className="text-terminal-white">~</span>
                      <span className="text-terminal-white">$ </span>
                      <motion.span 
                        className="text-terminal-orange"
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      >
                        |
                      </motion.span>
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