import React from 'react';
import { SOCIALS } from '../constants';
import { Code2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-900 pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex items-center gap-2 text-xl font-bold tracking-tighter">
            <div className="bg-white p-1.5 rounded-full">
              <Code2 size={20} className="text-dark-900" />
            </div>
            <span className="text-white">NILTON<span className="text-gray-500">.COSTA</span></span>
          </div>

          <div className="flex gap-6">
            {SOCIALS.map((social) => (
              <a 
                key={social.platform} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors"
                aria-label={social.platform}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>

          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Nilton Costa. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;