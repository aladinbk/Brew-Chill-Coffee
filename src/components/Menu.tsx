import { motion } from 'motion/react';

const menuItems = [
  {
    category: "Signature",
    items: [
      { name: "L'Or Noir", price: "22.09TND", desc: "Espresso double, notes de chocolat noir et noisette." },
      { name: "Nuage de Soie", price: "25.48TND", desc: "Latte velouté infusé à la vanille de Madagascar." },
      { name: "Le Chill Brew", price: "27.18TND", desc: "Cold brew infusé 24h, servi sur glace cristalline." }
    ]
  },
  {
    category: "Classiques",
    items: [
      { name: "Cappuccino", price: "18.69TND", desc: "Mousse de lait onctueuse et cacao fin." },
      { name: "Flat White", price: "20.39TND", desc: "L'équilibre parfait entre force et douceur." },
      { name: "Macchiato", price: "15.29TND", desc: "Une touche de lait pour sublimer l'espresso." }
    ]
  },
  {
    category: "Douceurs",
    items: [
      { name: "Cookie Maison", price: "13.59TND", desc: "Pépites de chocolat 70% et fleur de sel." },
      { name: "Croissant Beurre", price: "11.89TND", desc: "Feuilletage artisanal, croustillant à souhait." },
      { name: "Cheesecake Citron", price: "22.09TND", desc: "Léger, frais et délicatement acidulé." }
    ]
  }
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 bg-black/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl mb-4">La <span className="text-gold">Carte</span></h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">Une sélection rigoureuse pour les palais les plus exigeants.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {menuItems.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl"
            >
              <h3 className="text-2xl text-gold mb-8 text-center border-b border-gold/20 pb-4">{cat.category}</h3>
              <div className="space-y-8">
                {cat.items.map((item, i) => (
                  <div key={i} className="group cursor-default">
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="text-lg font-bold group-hover:text-gold transition-colors">{item.name}</h4>
                      <span className="text-gold font-mono">{item.price}</span>
                    </div>
                    <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-gold text-gold rounded-full hover:bg-gold hover:text-bg-deep transition-all font-bold"
          >
            Télécharger le menu complet (PDF)
          </motion.button>
        </div>
      </div>
    </section>
  );
}
