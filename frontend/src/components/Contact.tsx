import React from 'react';
import { Mail, MapPin, Send } from 'lucide-react';
import { SOCIALS } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-dark-900 relative scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">
              VAMOS <span className="text-primary-600">CONVERSAR</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-md">
              Tem um projeto em mente ou quer apenas trocar uma ideia sobre tecnologia? Minha caixa de entrada está sempre aberta.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300">
                <div className="bg-dark-800 p-3 rounded-full border border-white/5">
                  <Mail className="text-primary-500" size={24} />
                </div>
                <span className="text-lg">nilton.costa@dev.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300">
                <div className="bg-dark-800 p-3 rounded-full border border-white/5">
                  <MapPin className="text-primary-500" size={24} />
                </div>
                <span className="text-lg">Disponível Remotamente</span>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
               {SOCIALS.map((social) => (
                 <a 
                   key={social.platform}
                   href={social.url}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="bg-dark-800 p-4 rounded-full border border-white/5 hover:bg-primary-600 hover:border-primary-600 hover:text-white transition-all text-gray-400"
                 >
                   <social.icon size={24} />
                 </a>
               ))}
            </div>
          </div>

          <div className="bg-dark-800 border border-white/5 p-8 rounded-3xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Nome</label>
                  <input type="text" className="w-full bg-dark-900 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-primary-500 transition-colors" placeholder="Seu nome" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Email</label>
                  <input type="email" className="w-full bg-dark-900 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-primary-500 transition-colors" placeholder="seu@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-wider">Mensagem</label>
                <textarea rows={4} className="w-full bg-dark-900 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:border-primary-500 transition-colors resize-none" placeholder="Conte-me sobre seu projeto..."></textarea>
              </div>
              <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2">
                <Send size={20} />
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;