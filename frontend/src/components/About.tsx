import React from 'react';
import { ABOUT_DATA, SKILLS } from '../constants';
import { User, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const profileImage = "../assets/euia.png";

  return (
    <section id="about" className="py-24 bg-dark-900 relative scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
             <span className="h-0.5 w-12 bg-primary-600"></span>
             <span className="text-primary-500 font-bold tracking-widest uppercase text-sm">Conheça o Desenvolvedor</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white">
            SOBRE <span className="text-gray-600">MIM</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Image Card */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute inset-0 bg-primary-600 rounded-3xl rotate-6 opacity-20 group-hover:rotate-3 transition-transform duration-500"></div>
            <div className="relative bg-dark-800 border border-white/5 rounded-3xl p-2 overflow-hidden">
               <img 
                src={profileImage} 
                alt="Nilton Costa" 
                className="w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-500"
               />
               <div className="absolute bottom-6 left-6 bg-primary-600 px-4 py-2 rounded-lg">
                 <p className="text-white text-xs font-bold uppercase tracking-wider">Open to Work</p>
               </div>
            </div>
            <div className="mt-8">
              <h3 className="text-3xl font-bold text-white mb-1">Nilton Costa</h3>
              <p className="text-gray-400">Full Stack Developer</p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-dark-800 border border-white/5 p-8 rounded-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-dark-900 p-3 rounded-full text-primary-500">
                  <User size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Minha Jornada</h3>
              </div>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                {ABOUT_DATA.bio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {ABOUT_DATA.stats.map((stat, idx) => (
                <div key={idx} className="bg-dark-800 border border-white/5 p-6 rounded-3xl flex flex-col items-center justify-center text-center hover:bg-dark-800/80 transition-colors">
                  <span className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.value}</span>
                  <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="bg-dark-800 border border-white/5 p-8 rounded-3xl">
               <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                 <span className="w-2 h-2 rounded-full bg-primary-500"></span>
                 Habilidades Técnicas
               </h3>
               <div className="flex flex-wrap gap-3">
                 {SKILLS.map((skill) => (
                   <div key={skill.name} className="flex items-center gap-2 bg-dark-900 border border-white/5 px-4 py-2 rounded-full hover:border-primary-500/50 transition-colors group">
                      <skill.icon size={16} className="text-gray-500 group-hover:text-primary-500 transition-colors" />
                      <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{skill.name}</span>
                   </div>
                 ))}
               </div>

               <div className="mt-8 pt-8 border-t border-white/5">
                 <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Soft Skills</h4>
                 <div className="space-y-2">
                   {['Comunicação Assertiva', 'Aprendizado Contínuo', 'Clean Code'].map((item) => (
                     <div key={item} className="flex items-center gap-2 text-gray-400">
                       <CheckCircle2 size={16} className="text-primary-500" />
                       <span>{item}</span>
                     </div>
                   ))}
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;