import React from 'react';

const Testimonials = () => {
  const testimonials = [
    { name: 'Maria S.', text: 'A Paty é incrível! Meu gato, Whiskers, fica super feliz quando ela vem cuidar dele. Recomendo totalmente!' },
    { name: 'João P.', text: 'Finalmente posso viajar tranquila sabendo que meus gatos estão em ótimas mãos. Obrigada, Paty!' },
  ];

  return (
    <section id="depoimentos" className="py-16 bg-purple-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-purple-800 text-center mb-12">O que nossos clientes dizem</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
              <p className="text-purple-700 mb-4 italic">"{testimonial.text}"</p>
              <p className="text-purple-800 font-semibold">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;