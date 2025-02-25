import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Database, Shield, LineChart } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="scroll-section relative flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2ecc71]/20 via-[#27ae60]/20 to-[#219653]/20" />
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/5"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                animation: `float ${Math.random() * 10 + 5}s linear infinite`,
              }}
            />
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-12 gap-8">
          <motion.div
            className="col-span-12 lg:col-span-8 lg:col-start-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl lg:text-8xl font-bold mb-8">
              Maîtrisez vos
              <br />
              <span className="text-[#2ecc71]">données</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/80 mb-12 max-w-2xl">
              Experts en gouvernance des données, nous vous accompagnons dans la conformité réglementaire
              et l'optimisation de votre patrimoine informationnel.
            </p>
            
            <div className="flex flex-wrap gap-8 mb-16">
              <motion.a
                href="#contact"
                className="magnetic-button group bg-[#2ecc71] border-[#2ecc71]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center">
                  Démarrer votre projet
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
                </span>
              </motion.a>
              
              <motion.a
                href="#services"
                className="magnetic-button border-white/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Découvrir nos services</span>
              </motion.a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center space-x-4">
                <Database className="w-8 h-8 text-[#2ecc71]" />
                <div>
                  <h3 className="font-bold">Data Governance</h3>
                  <p className="text-white/60">Framework sur mesure</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Shield className="w-8 h-8 text-[#2ecc71]" />
                <div>
                  <h3 className="font-bold">Conformité RGPD</h3>
                  <p className="text-white/60">Protection des données</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <LineChart className="w-8 h-8 text-[#2ecc71]" />
                <div>
                  <h3 className="font-bold">MiFID II</h3>
                  <p className="text-white/60">Conformité financière</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-2 h-2 bg-white/50 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;