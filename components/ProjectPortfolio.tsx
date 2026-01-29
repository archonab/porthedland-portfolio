
import React from 'react';
import { PROJECTS } from '../constants';
import RevealOnScroll from './RevealOnScroll';

const ProjectPortfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-sh-gray/30">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 pb-12 border-b border-sh-border">
            <div className="max-w-2xl">
              <span className="block text-[10px] font-bold tracking-widest text-sh-black uppercase mb-6">Capability Demonstration</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Team Experience.</h2>
            </div>
            <p className="text-gray-500 text-sm max-w-xs mt-6 md:mt-0">
              A comprehensive view of major project delivery experience across our core leadership team.
            </p>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-sh-border border border-sh-border">
          {PROJECTS.map((project, idx) => (
            <RevealOnScroll key={idx} delay={`delay-[${(idx % 4) * 100}ms]`}>
              <div className="group relative bg-white h-full cursor-pointer overflow-hidden flex flex-col">
                <div className="aspect-[4/3] relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-sh-black/0 group-hover:bg-sh-black/10 transition-colors"></div>
                  <div className="absolute top-4 left-4 px-2 py-1 bg-white/95 backdrop-blur-sm border border-sh-border shadow-sm">
                    <span className="text-[8px] font-bold tracking-widest uppercase text-sh-black">{project.value}</span>
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <div className="mb-6">
                    <p className="text-[10px] font-bold tracking-widest uppercase text-sh-accent mb-2">{project.category}</p>
                    <h3 className="text-base font-bold tracking-tight mb-1 leading-tight group-hover:text-sh-accent transition-colors">{project.title}</h3>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest">{project.location}</p>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-sh-border">
                    <div className="flex flex-wrap gap-1">
                      {project.roles?.map((role, rIdx) => (
                        <span 
                          key={rIdx} 
                          className="inline-block px-2 py-1 bg-sh-gray text-[9px] font-bold tracking-wider text-sh-black uppercase"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectPortfolio;
