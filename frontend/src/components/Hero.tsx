import React from 'react';
import { ArrowUpRight, Mail, User, FolderOpen, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const profileImage = "../assets/euia.png";

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden scroll-mt-28">
      
      {/* Background Radial Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
          
          {/* Left Column - Empty on desktop to allow centered image feel, creates space for floating elements */}
          <div className="hidden lg:block lg:col-span-4 h-full relative">
            {/* Bio Button - Floating Left */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 z-20">
               <a href="#about" className="block bg-dark-800/80 backdrop-blur-md border border-white/5 p-4 rounded-2xl shadow-xl flex items-center gap-4 max-w-[200px] group cursor-pointer hover:border-white/10 transition-all hover:-translate-y-1">
                  <div className="bg-dark-900 p-3 rounded-full">
                    <User size={20} className="text-gray-300 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">BIO</p>
                    <p className="text-sm font-bold text-white">Sobre Mim</p>
                  </div>
               </a>
            </div>
            
             {/* CTA Card - Floating Bottom Left */}
            <div className="absolute bottom-10 left-0 w-full max-w-sm z-30">
              <a href="#contact" className="block bg-primary-600 p-6 rounded-3xl shadow-2xl shadow-primary-600/20 hover:scale-[1.02] transition-transform cursor-pointer group">
                <div className="flex justify-between items-start mb-6">
                  <Mail className="text-white" size={28} />
                  <ArrowUpRight className="text-white opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={24} />
                </div>
                <p className="text-primary-100 text-xs font-bold tracking-wider mb-1 uppercase">Entre em contato</p>
                <h3 className="text-2xl font-bold text-white">Iniciar projeto</h3>
              </a>
            </div>
          </div>

          {/* Center Column - Main Image */}
          <div className="col-span-1 lg:col-span-4 relative flex flex-col items-center justify-center">
            
            {/* Large Text Background Layer */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max flex flex-col items-center justify-center pointer-events-none z-0">
               <h1 className="text-[15vw] lg:text-[12rem] font-black text-white/5 leading-none whitespace-nowrap lg:translate-x-24 lg:-translate-y-12 select-none transition-transform duration-300">CREATIVE</h1>
               <h1 className="text-[15vw] lg:text-[12rem] font-black text-white/5 leading-none whitespace-nowrap lg:-translate-x-24 lg:translate-y-12 select-none transition-transform duration-300">DEVELOPER</h1>
            </div>

            {/* Main Image Card */}
            <div className="relative z-10 w-full max-w-md aspect-[3/4] rounded-[2rem] overflow-hidden border-4 border-dark-800 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 ease-in-out group">
              <img 
                src={profileImage}
                alt="Nilton Costa" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Status Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-dark-900/90 backdrop-blur-md p-4 rounded-xl border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Status</span>
                </div>
                <p className="text-sm font-medium text-white leading-snug">Disponível para projetos freelance & trabalho remoto.</p>
              </div>
            </div>
          </div>

          {/* Right Column - Text & Floating Elements */}
          <div className="col-span-1 lg:col-span-4 h-full relative flex flex-col justify-center lg:block">
             {/* Recent Work - Floating Top Right */}
             <div className="lg:absolute lg:top-20 lg:right-0 z-20 mb-8 lg:mb-0">
               <a href="#projects" className="block bg-dark-800/80 backdrop-blur-md border border-white/5 p-4 rounded-2xl shadow-xl flex items-center justify-between gap-6 w-full lg:w-auto min-w-[240px] group cursor-pointer hover:border-white/10 transition-all hover:-translate-y-1">
                  <div className="flex items-center gap-4">
                    <div className="bg-dark-900 p-3 rounded-full">
                      <FolderOpen size={20} className="text-gray-300 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Portfolio</p>
                      <p className="text-sm font-bold text-white">Trabalhos Recentes</p>
                    </div>
                  </div>
                  <ArrowRight size={16} className="text-gray-500 group-hover:translate-x-1 transition-transform" />
               </a>
            </div>

            {/* Descriptive Text */}
            <div className="lg:absolute lg:bottom-40 lg:left-0 z-10 max-w-sm mt-8 lg:mt-0">
              <p className="text-gray-400 text-lg leading-relaxed">
                Especialista em aplicações web escaláveis e design de interface intuitivo. Transformando código complexo em experiências digitais fluidas.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-dark-800 rounded-full text-xs font-medium text-primary-400 border border-primary-900/30">Next.js</span>
                <span className="px-3 py-1 bg-dark-800 rounded-full text-xs font-medium text-primary-400 border border-primary-900/30">Node.js</span>
                <span className="px-3 py-1 bg-dark-800 rounded-full text-xs font-medium text-primary-400 border border-primary-900/30">TypeScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;