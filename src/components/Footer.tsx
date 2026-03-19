import { motion } from 'motion/react';
import { Instagram, Twitter, Facebook, Send, MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer" className="bg-[#030201] pt-24 pb-12 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="space-y-8">
            <a href="#" className="font-cinzel text-3xl text-white">
              Brew<span className="text-gold">&</span>Chill
            </a>
            <p className="text-zinc-400 leading-relaxed">
              L'excellence dans chaque tasse. Venez vous asseoir, vous détendre, et laissez la magie de notre torréfaction sublimer votre journée.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, backgroundColor: '#e8a95b', color: '#050302' }}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white transition-all"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Explorer */}
          <div>
            <h4 className="font-cinzel text-lg font-bold uppercase tracking-widest mb-8 text-white">Explorer</h4>
            <ul className="space-y-4">
              {['Notre Histoire', 'La Carte', 'Boutique', 'Événements'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-zinc-400 hover:text-gold hover:pl-2 transition-all duration-300 block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-cinzel text-lg font-bold uppercase tracking-widest mb-8 text-white">Nous Trouver</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4 text-zinc-400">
                <MapPin className="text-gold shrink-0" size={20} />
                <span>La Manouba, Tunis</span>
              </div>
              <div className="flex items-start gap-4 text-zinc-400">
                <Phone className="text-gold shrink-0" size={20} />
                <span>+216 58 612 156</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-white font-bold mb-2">
                  <Clock className="text-gold" size={18} />
                  <span>Heures de magie :</span>
                </div>
                <p className="text-zinc-400 text-sm">Lun - Ven : 07:30 - 20:00</p>
                <p className="text-zinc-400 text-sm">Week-end : 09:00 - 22:00</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-cinzel text-lg font-bold uppercase tracking-widest mb-8 text-white">Club Privilège</h4>
            <p className="text-zinc-400 mb-6">Inscrivez-vous pour des offres exclusives.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Votre email..." 
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 text-white outline-none focus:border-gold/50 transition-colors"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-gold rounded-full flex items-center justify-center text-bg-deep hover:bg-orange-neon transition-colors">
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-500 text-sm">
            &copy; 2026 Brew & Chill. Tous droits réservés.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-zinc-500 hover:text-gold text-sm transition-colors">Confidentialité</a>
            <a href="#" className="text-zinc-500 hover:text-gold text-sm transition-colors">Mentions Légales</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
