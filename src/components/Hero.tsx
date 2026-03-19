import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Ambient Lights */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-gold/15 blur-[140px] rounded-full animate-pulse pointer-events-none" />
      <div className="absolute bottom-0 right-[-10%] w-[600px] h-[600px] bg-orange-neon/10 blur-[140px] rounded-full animate-pulse pointer-events-none" style={{ animationDelay: '4s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 text-center lg:text-left"
          >
            <span className="text-gold font-extrabold uppercase tracking-[4px] text-sm mb-6 block">
              L'Artisanat du Goût
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] mb-8 bg-gradient-to-r from-white via-white to-gold bg-clip-text text-transparent">
              Réveillez vos sens aujourd'hui.
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0">
              Plongez dans un univers où l'arôme rencontre le design. Nous sélectionnons les grains les plus rares pour vous offrir une extraction parfaite dans une ambiance hors du temps.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <motion.a 
                href="#menu"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-gold to-orange-neon text-bg-deep font-extrabold rounded-full shadow-[0_10px_30px_rgba(232,169,91,0.3)] hover:shadow-[0_15px_40px_rgba(255,107,0,0.6)] transition-all uppercase tracking-wider"
              >
                Découvrir le Menu
              </motion.a>
              <motion.a 
                href="#gallery"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 border border-white/20 hover:border-gold/50 text-white font-extrabold rounded-full transition-all uppercase tracking-wider backdrop-blur-sm"
              >
                Voir la Galerie
              </motion.a>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, type: "spring" }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] mx-auto p-4 glass rounded-[30px] shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
            >
              <img 
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80" 
                alt="Café Artistique" 
                className="w-full h-full object-cover rounded-[20px] shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-4 -right-4 glass border-gold/50 px-6 py-4 rounded-full flex items-center gap-3 shadow-xl">
                <Star className="text-gold fill-gold w-6 h-6" />
                <div className="flex flex-col">
                  <span className="font-bold text-lg">100% Pur</span>
                  <span className="text-gold text-[10px] uppercase tracking-widest">Arabica Premium</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
