import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Database, BookOpen, Lock, LineChart, Users } from 'lucide-react';

const services = [
  {
    icon: Database,
    title: "Data Governance & Management",
    description: "Implémentation de frameworks de gouvernance adaptés à vos besoins"
  },
  {
    icon: BookOpen,
    title: "Data Catalog & Quality",
    description: "Catalogage et amélioration de la qualité de vos données"
  },
  {
    icon: Users,
    title: "Master Data Management",
    description: "Gestion centralisée de vos données de référence"
  },
  {
    icon: Shield,
    title: "Conformité RGPD",
    description: "Mise en conformité avec la réglementation européenne"
  },
  {
    icon: LineChart,
    title: "Réglementation MiFID II",
    description: "Accompagnement pour la conformité aux directives financières"
  },
  {
    icon: Lock,
    title: "Sécurité des données",
    description: "Protection et sécurisation de votre patrimoine informationnel"
  }
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="services" className="min-h-screen flex items-center py-24 bg-gradient-to-br from-[#1c1c1c] via-[#1c1c1c] to-[#2ecc71]/10">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold mb-4">
            Nos <span className="text-[#2ecc71]">Services</span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Des solutions complètes pour optimiser la gestion de vos données
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-[#2ecc71]/20 hover:border-[#2ecc71]/40 transition-all duration-300"
            >
              <service.icon className="w-12 h-12 text-[#2ecc71] mb-4" />
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-white/60">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;