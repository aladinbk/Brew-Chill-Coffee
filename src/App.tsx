import { motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Process from './components/Process';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import MapSection from './components/MapSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-gold selection:text-bg-deep">
      <Navbar />
      
      <main>
        <Hero />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Process />
        </motion.div>

        <Menu />
        
        <Gallery />
        
        <Reviews />
        
        <MapSection />
      </main>

      <Footer />
    </div>
  );
}
