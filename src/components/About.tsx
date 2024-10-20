import React from 'react';

const About = () => {
  return (
    <section id="sobre" className="py-16 bg-white cat-paw-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-purple-800 text-center mb-12 text-shadow">Sobre Mim</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src="https://images.unsplash.com/photo-1594007654729-407eedc4be65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Paty com gato" className="rounded-lg shadow-lg mx-auto max-w-full h-auto hover-zoom" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-purple-700 mb-4">
              Olá! Eu sou Paty, uma apaixonada por gatos e cuidadora profissional. Com anos de experiência e treinamento especializado, estou comprometida em fornecer o melhor cuidado possível para seu felino enquanto você está fora.
            </p>
            <p className="text-purple-700 mb-4">
              Minha jornada com gatos começou há mais de 10 anos, quando adotei meu primeiro gatinho. Desde então, tenho me dedicado a aprender tudo sobre comportamento felino, nutrição e cuidados de saúde. Sou certificada em primeiros socorros para animais de estimação e participo regularmente de workshops e seminários sobre bem-estar felino.
            </p>
            <p className="text-purple-700">
              Meu objetivo é criar um ambiente seguro, amoroso e estimulante para seu gato, garantindo que ele receba toda a atenção e cuidado que merece na sua ausência.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;