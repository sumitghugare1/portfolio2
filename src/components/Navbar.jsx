import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiTerminal, FiMenu, FiX, FiDownload } from 'react-icons/fi';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👨‍💻' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'contact', label: 'Contact', icon: '📧' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;
      setIsScrolled(window.scrollY > 50);

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const downloadResume = () => {
    // Opens your Google Drive resume link
    window.open('https://drive.google.com/file/d/1NpDOjV7ONZuJfjY1k7n9e9eg1DREpMOO/view?usp=sharing', '_blank');
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-terminal-bg/90 backdrop-blur-xl border-b border-terminal-orange/30' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-2">
            {/* Logo */}
            <motion.div 
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => scrollToSection('home')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="p-1 sm:p-1.5 bg-terminal-orange rounded-md"
              >
                <FiTerminal className="text-black text-base sm:text-lg" />
              </motion.div>
              <div className="hidden sm:block">
                <div className="text-terminal-orange font-bold text-base sm:text-lg">sumit@dev</div>
                <div className="text-white/60 text-xs">~/portfolio</div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="terminal-border bg-terminal-gray/30 backdrop-blur-md">
                <div className="terminal-header py-1">
                  <div className="terminal-button terminal-red"></div>
                  <div className="terminal-button terminal-yellow"></div>
                  <div className="terminal-button terminal-green"></div>
                  <span className="text-terminal-orange text-xs font-bold ml-2">navigation.sh</span>
                </div>
                <div className="flex items-center gap-1 p-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`group relative px-3 py-2 text-xs font-mono transition-all duration-300 border border-transparent rounded-md ${
                        activeSection === item.id 
                          ? 'bg-terminal-orange text-black border-terminal-orange' 
                          : 'text-white hover:text-terminal-orange hover:border-terminal-orange/50 hover:bg-terminal-orange/10'
                      }`}
                      whileHover={{ scale: 1.05, y: -1 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-center gap-1">
                        <span className="text-sm">{item.icon}</span>
                        <span>[ {item.label} ]</span>
                      </div>
                      
                      {/* Active indicator */}
                      {activeSection === item.id && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-terminal-orange/20 rounded-md border border-terminal-orange"
                          initial={false}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Resume Download Button */}
            <motion.div
              className="terminal-border bg-terminal-gray/30 backdrop-blur-md"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="terminal-header py-1">
                <div className="terminal-button terminal-blue"></div>
                <div className="terminal-button terminal-yellow"></div>
                <div className="terminal-button terminal-green"></div>
                <span className="text-terminal-blue text-xs font-bold ml-2">resume.pdf</span>
              </div>
              <motion.button
                onClick={downloadResume}
                className="group relative px-4 py-2 text-sm font-mono transition-all duration-300 border border-transparent rounded-md bg-terminal-blue text-black hover:bg-transparent hover:text-terminal-blue hover:border-terminal-blue w-full"
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center justify-center gap-2">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="group-hover:animate-bounce"
                  >
                    <FiDownload size={14} />
                  </motion.div>
                  <span className="font-bold">[ Download CV ]</span>
                </div>
                
                {/* Hover effect */}
                <motion.div
                  className="absolute inset-0 bg-terminal-blue/20 rounded-md border border-terminal-blue opacity-0 group-hover:opacity-100"
                  initial={false}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 text-terminal-orange border border-terminal-orange/50 rounded-md hover:bg-terminal-orange/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiX size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FiMenu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-terminal-bg/80 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-80 bg-terminal-bg border-l border-terminal-orange/30 z-50 lg:hidden"
            >
              <div className="p-6">
                {/* Mobile Menu Header */}
                <div className="terminal-border mb-6">
                  <div className="terminal-header">
                    <div className="terminal-button terminal-red"></div>
                    <div className="terminal-button terminal-yellow"></div>
                    <div className="terminal-button terminal-green"></div>
                    <span className="text-terminal-orange text-sm font-bold">mobile-nav.js</span>
                  </div>
                  <div className="p-4 text-center">
                    <div className="text-terminal-orange font-bold text-lg">Navigation Menu</div>
                    <div className="text-white text-sm">Select a destination</div>
                  </div>
                </div>

                {/* Mobile Menu Items */}
                <div className="space-y-3">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full flex items-center gap-4 p-4 text-left rounded-lg border transition-all duration-300 ${
                        activeSection === item.id
                          ? 'bg-terminal-orange text-black border-terminal-orange'
                          : 'text-white border-terminal-orange/30 hover:border-terminal-orange hover:bg-terminal-orange/10'
                      }`}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <div className="font-bold">{item.label}</div>
                        <div className="text-sm opacity-70">Go to {item.label.toLowerCase()}</div>
                      </div>
                    </motion.button>
                  ))}

                  {/* Enhanced Resume Download Button in Mobile Menu */}
                  <motion.div
                    className="terminal-border bg-terminal-gray/20"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: navItems.length * 0.1 }}
                  >
                    <div className="terminal-header">
                      <div className="terminal-button terminal-blue"></div>
                      <div className="terminal-button terminal-yellow"></div>
                      <div className="terminal-button terminal-green"></div>
                      <span className="text-terminal-blue text-sm font-bold">resume.pdf</span>
                    </div>
                    <motion.button
                      onClick={downloadResume}
                      className="group w-full flex items-center gap-4 p-4 text-left transition-all duration-300 bg-terminal-blue/20 hover:bg-terminal-blue/30 border-2 border-terminal-blue/50 hover:border-terminal-blue text-white"
                      whileHover={{ x: 10, scale: 1.02 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        className="text-2xl p-2 bg-terminal-blue/30 rounded-lg group-hover:bg-terminal-blue/50"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <FiDownload />
                      </motion.div>
                      <div className="flex-1">
                        <div className="font-bold text-terminal-blue group-hover:text-white">Download Resume</div>
                        <div className="text-sm opacity-70 font-mono">$ wget sumit-cv.pdf</div>
                      </div>
                      <div className="text-terminal-blue opacity-50 group-hover:opacity-100">
                        →
                      </div>
                    </motion.button>
                  </motion.div>
                </div>

                {/* Mobile Terminal Footer */}
                <div className="mt-8 terminal-border">
                  <div className="p-4 font-mono text-sm">
                    <div className="text-terminal-orange">$ whoami</div>
                    <div className="text-white ml-2">sumit-frontend-developer</div>
                    <div className="text-terminal-orange">$ pwd</div>
                    <div className="text-white ml-2">/home/sumit/portfolio</div>
                    <div className="flex items-center">
                      <span className="text-terminal-orange">$ </span>
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
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;