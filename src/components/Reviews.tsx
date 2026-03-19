import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Sophie Laurent",
    role: "Critique Gastronomique",
    text: "Le meilleur espresso de la ville. L'ambiance est feutrée, parfaite pour se concentrer ou se détendre.",
    rating: 5
  },
  {
    name: "Marc Antoine",
    role: "Entrepreneur",
    text: "Un lieu d'exception. Le service est impeccable et le café est d'une qualité rare. Je recommande le Chill Brew.",
    rating: 5
  },
  {
    name: "Elena Rossi",
    role: "Designer",
    text: "Le design du lieu est aussi soigné que leurs extractions. Une expérience visuelle et gustative complète.",
    rating: 5
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-black/20 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Avis <span className="text-gold">Clients</span></h2>
          <p className="text-zinc-400">Ceux qui vivent l'expérience au quotidien.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="glass p-10 rounded-[32px] relative"
            >
              <Quote className="absolute top-6 right-8 text-gold/20 w-12 h-12" />
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>
              <p className="text-zinc-300 italic mb-8 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center font-cinzel text-gold">
                  {review.name[0]}
                </div>
                <div>
                  <h4 className="font-bold">{review.name}</h4>
                  <p className="text-xs text-gold uppercase tracking-widest">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
