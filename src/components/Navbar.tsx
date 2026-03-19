import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#' },
    { name: 'Concept', href: '#process' },
    { name: 'Menu', href: '#menu' },
    { name: 'Galerie', href: '#gallery' },
    { name: 'Avis', href: '#reviews' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-bg-deep/80 backdrop-blur-2xl py-4 border-b border-white/10' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="font-cinzel text-2xl md:text-3xl font-extrabold text-white tracking-wider">
          Brew<span className="text-gold">&</span>Chill
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-zinc-400 hover:text-gold font-semibold uppercase tracking-widest text-xs transition-all hover:-translate-y-0.5"
            >
              {link.name}
            </a>
          ))}
          <motion.a 
            href="#footer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-2.5 bg-gold/10 border border-gold/30 text-gold font-bold rounded-full hover:bg-gold hover:text-bg-deep transition-all text-sm"
          >
            Contact
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-gold"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-6 right-6 mt-4 glass p-8 rounded-3xl lg:hidden flex flex-col gap-6 items-center shadow-2xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white font-bold uppercase tracking-widest text-lg"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#footer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-center py-4 bg-gold text-bg-deep font-bold rounded-2xl"
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
