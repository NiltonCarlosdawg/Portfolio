import React from 'react';
import { SKILLS } from '../constants';

const TechMarquee: React.FC = () => {
  // Duplicate skills to create seamless loop
  const marqueeItems = [...SKILLS, ...SKILLS, ...SKILLS];

  return (
    <div className="w-full bg-dark-900 border-t border-b border-white/5 py-10 overflow-hidden relative z-20">
      <div className="flex w-[200%] animate-marquee">
        {marqueeItems.map((skill, index) => (
          <div key={`${skill.name}-${index}`} className="flex items-center gap-3 px-12 opacity-50 hover:opacity-100 transition-opacity">
            <skill.icon size={32} className="text-primary-500" />
            <span className="text-2xl font-bold text-white/80 whitespace-nowrap">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;