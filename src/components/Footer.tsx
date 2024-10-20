import React from 'react';
import { Cat, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-purple-800 text-purple-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Cat className="w-8 h-8 mr-2" />
            <span className="text-2xl font-bold">PatyCatSitter</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-purple-300"><Instagram /></a>
            <a href="#" className="hover:text-purple-300"><Facebook /></a>
            <a href="#" className="hover:text-purple-300"><Twitter /></a>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p>&copy; 2024 Paty Catsitter. Todos os direitos reservados.</p>
          <p className="mt-2">Contato: Paty@catsitter.com | Tel: (11) 99999-9999</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;