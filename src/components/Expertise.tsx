import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const caseStudies = [
  {
    client: "Banque Nationale",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80",
    title: "Transformation de la gouvernance des données",
    description: "Mise en place d'un framework de gouvernance complet pour une banque majeure."
  },
  {
    client: "Assurance Plus",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    title: "Conformité RGPD",
    description: "Accompagnement dans la mise en conformité RGPD et la sécurisation des données clients."
  },
  {
    client: "IndusTech",
    image: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&w=800&q=80",
    title: "Master Data Management",
    description: "Implémentation d'une solution MDM pour unifier les données produits."
  }
];

const Expertise = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="expertise" className="min-h-screen flex items-center py-24 bg-gradient-to-br from-[#2ecc71]/10 via-[#1c1c1c] to-[#1c1c1c]">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-4">
            Notre <span className="text-[#2ecc71]">Expertise</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Découvrez comment nous avons aidé nos clients à maîtriser leurs données
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-[#2ecc71]/20 hover:border-[#2ecc71]/40 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c] to-transparent opacity-60" />
              </div>
              <div className="p-6">
                <span className="text-sm text-[#2ecc71] font-semibold">{study.client}</span>
                <h3 className="text-xl font-bold mt-2 mb-3">{study.title}</h3>
                <p className="text-white/60">{study.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;