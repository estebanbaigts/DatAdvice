import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Database, Shield, LineChart, Users, BookOpen, Lock, Award, Briefcase, Building } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const expertise = [
    {
      icon: Database,
      title: "Gouvernance des Données",
      description: "25 ans d'expertise en conseil et mise en place de frameworks de gouvernance adaptés aux besoins spécifiques des entreprises."
    },
    {
      icon: Shield,
      title: "Conformité RGPD",
      description: "Expert en mise en conformité RGPD, définition de plans de remédiation et politiques de protection des données."
    },
    {
      icon: LineChart,
      title: "Data Management",
      description: "Spécialiste en MDM, PIM, DAM et catalogues de données pour optimiser la gestion des référentiels."
    },
    {
      icon: Users,
      title: "Leadership & Conseil",
      description: "Direction d'équipes de consultants et accompagnement de CDO dans la transformation digitale."
    },
    {
      icon: BookOpen,
      title: "Méthodologie",
      description: "Création et adaptation de méthodologies projet intégrant les dimensions RGPD et gouvernance des données."
    },
    {
      icon: Lock,
      title: "Solutions Techniques",
      description: "Maîtrise des outils Collibra, Stibo, Informatica, OneTrust et autres solutions de gouvernance."
    }
  ];

  const keyProjects = [
    {
      company: "CACIB",
      role: "Architecte Fonctionnel & Technique Collibra",
      achievements: [
        "Déploiement de la gouvernance des données groupe",
        "Migration Cloud de l'infrastructure Collibra",
        "Normalisation du metamodel et standards groupe"
      ],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80"
    },
    {
      company: "Hermès",
      role: "Expert RGPD",
      achievements: [
        "Mise en conformité globale RGPD du SI",
        "Définition des politiques de protection",
        "Mise en place du cockpit RGPD"
      ],
      image: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&w=800&q=80"
    },
    {
      company: "PSA Groupe",
      role: "Consultant Data Office",
      achievements: [
        "Déploiement Collibra",
        "Définition roadmap data gouvernance",
        "Coaching équipes data office"
      ],
      image: "https://images.unsplash.com/photo-1557425493-6f90ae4659fc?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="about" className="min-h-screen py-24 bg-gradient-to-br from-[#1c1c1c] via-[#1c1c1c] to-[#2ecc71]/10">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="space-y-24"
        >
          {/* Section Introduction */}
          <div className="text-center">
            <motion.h2
              className="text-4xl lg:text-6xl font-bold mb-8"
              initial={{ y: -50 }}
              animate={inView ? { y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              Notre <span className="text-[#2ecc71]">Expert</span>
            </motion.h2>
            <motion.div
              className="flex items-center justify-center gap-4 mb-8"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              <Award className="w-8 h-8 text-[#2ecc71]" />
              <span className="text-xl text-white/80">25 ans d'expertise en conseil</span>
            </motion.div>
          </div>

          {/* Expertise Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-[#2ecc71]/20 hover:border-[#2ecc71]/40 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
              >
                <item.icon className="w-12 h-12 text-[#2ecc71] mb-6" />
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-white/60">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Key Projects */}
          <div className="space-y-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-center mb-12">
              Projets <span className="text-[#2ecc71]">Majeurs</span>
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {keyProjects.map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-[#2ecc71]/20 hover:border-[#2ecc71]/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.company}
                      className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1c] to-transparent opacity-60" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Building className="w-5 h-5 text-[#2ecc71]" />
                      <span className="text-lg font-bold">{project.company}</span>
                    </div>
                    <div className="flex items-center gap-2 mb-4">
                      <Briefcase className="w-5 h-5 text-[#2ecc71]" />
                      <span className="text-white/80">{project.role}</span>
                    </div>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="text-white/60 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#2ecc71] rounded-full" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;