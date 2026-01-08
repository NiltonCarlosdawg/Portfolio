import React from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-dark-900 scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">
              PROJETOS
            </h2>
            <p className="text-gray-400 max-w-xl text-lg">
              Uma galeria selecionada de aplicações web, experimentos de interface e soluções full-stack. Foco em escalabilidade, design limpo e código performático.
            </p>
          </div>
          <div className="text-right">
             <span className="text-6xl md:text-8xl font-black text-white/5 block leading-none">06</span>
             <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Trabalhos em Destaque</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group bg-dark-800 border border-white/5 rounded-3xl p-4 hover:border-primary-500/30 transition-all duration-300 hover:-translate-y-2">
              {/* Image Area */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl mb-6 bg-dark-900">
                 {/* Overlay Icon */}
                 <div className="absolute inset-0 bg-dark-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10 backdrop-blur-sm">
                   {project.icon && <project.icon size={48} className="text-white" />}
                 </div>
                 <img 
                   src={project.image} 
                   alt={project.title} 
                   className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                 />
                 
                 <a href={project.link} className="absolute top-4 right-4 bg-white/10 hover:bg-white text-white hover:text-black p-2 rounded-full backdrop-blur-md transition-colors z-20">
                   <ArrowUpRight size={20} />
                 </a>
              </div>

              {/* Content Area */}
              <div className="px-2 pb-2">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-500 transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-dark-900 rounded-lg text-xs font-medium text-gray-300 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;