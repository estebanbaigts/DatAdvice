import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="contact" className="scroll-section relative py-24">
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
              <span className="text-gradient">Contactez</span>-nous
            </motion.h2>
            <motion.p
              className="text-xl text-white/80"
              initial={{ x: -50 }}
              animate={inView ? { x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Prêt à créer quelque chose d'extraordinaire ? Parlons de votre projet.
            </motion.p>
          </div>

          {/* Contact Form */}
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
            <motion.form
              className="space-y-8"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-white/80 text-sm">Nom</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3
                             focus:outline-none focus:border-[#FF5733] transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-white/80 text-sm">Email</label>
                  <input
                    type="email"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3
                             focus:outline-none focus:border-[#FF5733] transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-white/80 text-sm">Sujet</label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3
                           focus:outline-none focus:border-[#FF5733] transition-colors"
                  placeholder="Le sujet de votre message"
                />
              </div>

              <div className="space-y-2">
                <label className="text-white/80 text-sm">Message</label>
                <textarea
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3
                           focus:outline-none focus:border-[#FF5733] transition-colors
                           min-h-[200px]"
                  placeholder="Votre message..."
                />
              </div>

              <motion.button
                type="submit"
                className="magnetic-button group w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center">
                  Envoyer le message
                  <Send className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
                </span>
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;