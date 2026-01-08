import React from 'react';
import { EXPERIENCE } from '../constants';
import { Calendar, Code, Zap } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-dark-900 relative overflow-hidden scroll-mt-28">
      {/* Background Decorative Text */}
      <div className="absolute top-20 right-0 pointer-events-none opacity-5">
        <h2 className="text-[20rem] font-black text-white leading-none hidden lg:block">EXP</h2>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Header Column */}
          <div className="lg:col-span-4">
             <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-8">
               EXPERTISE <br /> 
               <span className="text-primary-600">&</span> JOURNEY
             </h2>
             <p className="text-gray-400 text-lg leading-relaxed mb-12">
               Transformando problemas complexos em soluções elegantes. Um olhar detalhado sobre minha trajetória técnica e profissional.
             </p>

             <div className="space-y-6">
                {[
                  { icon: Code, title: "Frontend Engineering", desc: "Arquitetura SPA escalável, implementação pixel-perfect." },
                  { icon: Zap, title: "Performance & SEO", desc: "Otimização de Core Web Vitals e melhorias técnicas de SEO." },
                ].map((item, idx) => (
                  <div key={idx} className="bg-dark-800 border border-white/5 p-6 rounded-2xl">
                    <div className="bg-primary-600/10 w-fit p-3 rounded-xl mb-4">
                      <item.icon className="text-primary-500" size={24} />
                    </div>
                    <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                ))}
             </div>
          </div>

          {/* Timeline Column */}
          <div className="lg:col-span-8">
             <div className="space-y-6">
               {EXPERIENCE.map((job) => (
                 <div key={job.id} className="group bg-dark-800 border border-white/5 rounded-3xl p-8 hover:border-white/10 transition-all">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary-500 transition-colors">{job.role}</h3>
                        <p className="text-primary-400 font-medium">{job.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 bg-dark-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        <Calendar size={14} />
                        {job.period}
                      </div>
                    </div>
                    
                    <p className="text-gray-400 mb-8 leading-relaxed">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                       {job.technologies.map((tech) => (
                         <span key={tech} className="px-3 py-1 bg-dark-900 border border-white/5 rounded-md text-xs font-mono text-gray-300">
                           {tech}
                         </span>
                       ))}
                    </div>
                 </div>
               ))}
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;