import React from 'react';

const Hero = () => {
  return (
    <section id="inicio" className="bg-gradient-to-b from-purple-200 to-purple-300 py-20 cat-paw-bg">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-purple-800 mb-6 text-shadow">PatyCatSitter - Serviço de Cuidados para Gatos</h1>
        <p className="text-xl text-purple-700 mb-8 font-semibold">Cada gato é uma história de amor</p>
        <p className="text-lg text-purple-700 mb-8">E estou aqui para escrever essa história com você e seu gato ❤️</p>
        <img src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80" alt="Gato laranja fofo" className="rounded-lg shadow-lg mx-auto mb-8 max-w-full h-auto hover-zoom" />
        <a href="#sobre" className="bg-purple-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300 inline-block transform hover:scale-105">SABER MAIS</a>
      </div>
    </section>
  );
};

export default Hero;