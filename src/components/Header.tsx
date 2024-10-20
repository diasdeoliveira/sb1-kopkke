import React from 'react';
import { Cat } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-purple-100 py-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="flex items-center mb-4 md:mb-0">
          <Cat className="w-8 h-8 text-purple-600 mr-2" />
          <span className="text-2xl font-bold text-purple-800">PatyCatSitter</span>
        </div>
        <nav>
          <ul className="flex flex-wrap justify-center space-x-4">
            <li><a href="#inicio" className="text-purple-800 hover:text-purple-600 font-semibold">Início</a></li>
            <li><a href="#servicos" className="text-purple-800 hover:text-purple-600 font-semibold">Nossos Serviços</a></li>
            <li><a href="#sobre" className="text-purple-800 hover:text-purple-600 font-semibold">Sobre mim</a></li>
            <li><a href="#depoimentos" className="text-purple-800 hover:text-purple-600 font-semibold">Depoimentos</a></li>
            <li><a href="#contato" className="text-purple-800 hover:text-purple-600 font-semibold">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;