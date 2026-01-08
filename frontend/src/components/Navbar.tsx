import React, { useState } from 'react';
import { Menu, X, Download, Code2 } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { useScroll } from '../hooks/useScroll';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScroll(50);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark-900/90 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
          <div className="bg-primary-600 p-1.5 rounded-full">
            <Code2 size={20} className="text-white" />
          </div>
          <span className="text-white">NILTON<span className="text-primary-500">.COSTA</span></span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a 
                  href={item.href} 
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-wide"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4 pl-4 border-l border-white/10">
            <a href="#" className="flex items-center gap-2 text-gray-300 hover:text-white text-sm font-medium transition-colors">
              <Download size={16} />
              Currículo
            </a>
            <a href="#contact" className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-bold hover:bg-gray-200 transition-colors">
              Vamos conversar
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark-900 border-b border-white/10 px-6 py-8 flex flex-col gap-6 shadow-2xl">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-lg font-medium text-gray-200"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <hr className="border-white/10" />
          <a href="#" className="flex items-center gap-2 text-gray-300">
            <Download size={18} />
            Baixar Currículo
          </a>
          <a href="#contact" className="bg-primary-600 text-white text-center py-3 rounded-lg font-bold">
            Vamos conversar
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;