import React from 'react';
import { Heart, Home, Clock, Shield, Brain } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    { icon: Heart, title: 'Redução do estresse', description: 'Cuidados personalizados para manter seu gato calmo e feliz.' },
    { icon: Shield, title: 'Saúde e bem-estar', description: 'Atenção às necessidades específicas de saúde do seu gato.' },
    { icon: Brain, title: 'Estimulação física e mental', description: 'Atividades e brincadeiras para manter seu gato ativo e engajado.' },
    { icon: Home, title: 'Socialização', description: 'Interação positiva para o desenvolvimento social do seu gato.' },
    { icon: Clock, title: 'Tranquilidade para os tutores', description: 'Paz de espírito sabendo que seu gato está em boas mãos.' },
  ];

  return (
    <section id="beneficios" className="py-16 bg-purple-100 cat-paw-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-purple-800 text-center mb-12 text-shadow">Por que seu gatinho precisa de uma atenção especial?</h2>
        <p className="text-center text-purple-700 mb-8 font-semibold">Porque isso garante que ele se sinta amado, seguro e feliz, mesmo na ausência de seus tutores. É um investimento no bem-estar do pet e na paz de espírito de seus tutores.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
              <benefit.icon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-purple-800 mb-2">{benefit.title}</h3>
              <p className="text-purple-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;