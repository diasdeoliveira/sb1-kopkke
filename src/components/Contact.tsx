import React from 'react';

const Contact = () => {
  return (
    <section id="contato" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-purple-800 text-center mb-12">Entre em Contato</h2>
        <div className="max-w-md mx-auto bg-purple-50 p-8 rounded-lg shadow-md">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-purple-800 font-semibold mb-2">Nome</label>
              <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-purple-800 font-semibold mb-2">E-mail</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-purple-800 font-semibold mb-2">Mensagem</label>
              <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" required></textarea>
            </div>
            <button type="submit" className="w-full bg-purple-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-purple-700 transition duration-300">Enviar Mensagem</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;