import { motion } from 'motion/react';
import { Coffee, Flame, Globe } from 'lucide-react';

const steps = [
  {
    icon: <Globe className="w-8 h-8 text-gold" />,
    title: "Sourcing Éthique",
    description: "Nous voyageons pour sélectionner des fermes respectueuses de l'environnement, assurant un grain pur et un commerce 100% équitable."
  },
  {
    icon: <Flame className="w-8 h-8 text-gold" />,
    title: "Torréfaction Locale",
    description: "Nos grains sont rôtis chaque matin. La courbe de température est maîtrisée au degré près pour révéler un arôme signature inoubliable."
  },
  {
    icon: <Coffee className="w-8 h-8 text-gold" />,
    title: "Extraction Magique",
    description: "De la machine à piston au V60, nos baristas sculptent votre boisson comme une œuvre d'art liquide, parfaite à chaque gorgée."
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl text-center mb-20"
        >
          Notre <span className="text-gold">Processus</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass p-10 rounded-[24px] group hover:border-gold/50 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mb-6 border border-gold/20 group-hover:bg-gold/20 transition-colors">
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-zinc-400 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
