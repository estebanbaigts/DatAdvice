import React from 'react';
import { motion } from 'framer-motion';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Navigation = ({ isMenuOpen, setIsMenuOpen }: NavigationProps) => {
  const menuItems = [
    { title: 'Accueil', href: '#hero' },
    { title: 'Services', href: '#services' },
    { title: 'Expertise', href: '#expertise' },
    { title: 'À propos', href: '#about' },
    { title: 'Contact', href: '#contact' },
  ];

  const handleClick = (href: string) => {
    setIsMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="h-full flex items-center justify-center">
      <motion.ul
        className="space-y-8 text-center"
        initial="closed"
        animate="open"
        variants={{
          closed: {
            transition: {
              staggerChildren: 0.2,
              staggerDirection: -1
            }
          },
          open: {
            transition: {
              staggerChildren: 0.2,
              staggerDirection: 1
            }
          }
        }}
      >
        {menuItems.map((item, index) => (
          <motion.li
            key={index}
            variants={{
              closed: { opacity: 0, y: 50 },
              open: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.4 }}
          >
            <button
              onClick={() => handleClick(item.href)}
              className="text-4xl font-bold hover:text-[#2ecc71] transition-colors"
            >
              {item.title}
            </button>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
};

export default Navigation;