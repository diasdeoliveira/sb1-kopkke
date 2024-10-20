import React from 'react';
import { Utensils, Droplet, Trash2, PlayCircle, Pill, Camera } from 'lucide-react';

const Services = () => {
  const services = [
    { icon: Utensils, title: 'Alimentação', description: 'Alimentação conforme a rotina do seu gato' },
    { icon: Droplet, title: 'Troca de água', description: 'Água fresca sempre disponível' },
    { icon: Trash2, title: 'Limpeza da caixa de areia', description: 'Manutenção da higiene do ambiente' },
    { icon: PlayCircle, title: 'Brincadeiras e socialização', description: 'Atividades para estimulação física e mental' },
    { icon: Pill, title: 'Administração de medicamentos', description: 'Se necessário, conforme prescrição' },
    { icon: Camera, title: 'Atualizações diárias', description: 'Fotos e vídeos do seu gato' },
  ];

  return (
    <section id="servicos" className="py-16 bg-white cat-paw-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-purple-800 text-center mb-12 text-shadow">Nossos Serviços</h2>
        <p className="text-center text-purple-700 mb-8 font-semibold">Oferecemos uma variedade de serviços personalizados para atender às necessidades específicas do seu gato:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-purple-50 p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300">
              <service.icon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-purple-800 mb-2">{service.title}</h3>
              <p className="text-purple-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;