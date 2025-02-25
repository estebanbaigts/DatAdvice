import React from 'react';
import { Database, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold">DatAdvice</span>
            </div>
            <p className="text-gray-400">
              Expert en gouvernance des données et conformité réglementaire
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Data Governance</li>
              <li>Data Catalog</li>
              <li>MDM</li>
              <li>RGPD</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Entreprise</h4>
            <ul className="space-y-2 text-gray-400">
              <li>À propos</li>
              <li>Carrières</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#2ecc71]">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#2ecc71]">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#2ecc71]">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2024 DatAdvice. Tous droits réservés.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-[#2ecc71]">
                Mentions légales
              </a>
              <a href="#" className="text-gray-400 hover:text-[#2ecc71]">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;