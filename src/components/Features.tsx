import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles, Zap, Palette } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: "Design Avant-gardiste",
    description: "Nous repoussons les limites du design conventionnel pour créer des expériences uniques et mémorables."
  },
  {
    icon: Zap,
    title: "Innovation Technique",
    description: "Notre expertise technique nous permet de donner vie à vos idées les plus audacieuses."
  },
  {
    icon: Palette,
    title: "Direction Artistique",
    description: "Une approche créative qui transcende les tendances pour créer votre identité unique."
  }
];

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="features" className="scroll-section relative py-24">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="asymmetric-grid"
        >
          {/* Title Section */}
          <div className="col-span-12 lg:col-span-6 mb-16">
            <motion.h2
              className="text-4xl lg:text-6xl font-bold mb-8"
              initial={{ x: -50 }}
              animate={inView ? { x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gradient">Redéfinissons</span>
              <br />
              les possibles
            </motion.h2>
            <motion.p
              className="text-xl text-white/80"
              initial={{ x: -50 }}
              animate={inView ? { x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Notre approche unique combine créativité débridée et expertise technique
              pour créer des expériences web extraordinaires.
            </motion.p>
          </div>

          {/* Features Grid */}
          <div className="col-span-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ y: 50, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <feature.icon className="w-12 h-12 text-[#FF5733] mb-6" />
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Interactive Element */}
          <motion.div
            className="col-span-12 mt-24 relative overflow-hidden rounded-2xl"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="aspect-video bg-gradient-to-br from-[#FF5733]/20 via-[#40E0D0]/20 to-[#FFC300]/20 rounded-2xl p-12 flex items-center justify-center">
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="text-3xl lg:text-5xl font-bold mb-6 text-gradient">
                  Prêt à innover ?
                </h3>
                <a href="#contact" className="magnetic-button">
                  <span>Démarrer votre projet</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;