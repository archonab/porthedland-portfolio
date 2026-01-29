
import React from 'react';
import { CAPABILITIES } from '../constants';
import RevealOnScroll from './RevealOnScroll';

const CapabilityGrid: React.FC = () => {
  return (
    <section id="capabilities" className="py-32 md:py-48 bg-white text-sh-black overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
            <div className="max-w-3xl">
              <span className="block text-[10px] font-bold tracking-widest text-sh-accent uppercase mb-8">Value Proposition</span>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[0.9] mb-4">The Governance <br/>Custodian.</h2>
            </div>
            <div className="max-w-md">
              <p className="text-gray-500 text-lg font-light leading-relaxed">
                We bridge the critical gap between offshore manufacturing and local compliance, 
                acting as the technical guardian for the SIBS modular package throughout the 
                project lifecycle.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-sh-border border border-sh-border">
          {CAPABILITIES.map((cap, idx) => (
            <RevealOnScroll key={cap.id} delay={`delay-[${idx * 100}ms]`}>
              <div className="group bg-sh-black text-white p-12 md:p-14 h-full hover:bg-sh-accent transition-colors duration-700 cursor-default">
                <span className="block text-[10px] font-mono text-sh-accent group-hover:text-white mb-12 transition-colors">{cap.id} / SCOPE</span>
                <div className="mb-12 relative">
                  {cap.icon && <cap.icon size={42} strokeWidth={1} className="text-white/30 group-hover:text-white transition-all duration-700 group-hover:scale-110 origin-left" />}
                </div>
                <h3 className="text-2xl font-bold mb-6 tracking-tight">{cap.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-white/90 transition-colors">
                  {cap.desc}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
        
        <RevealOnScroll delay="delay-300">
          <div className="mt-24 pt-12 border-t border-sh-border flex flex-col md:flex-row items-center justify-between gap-8">
            <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400">
              Technical Due Diligence & Delivery Assurance for the Port Hedland Hotel
            </p>
            <div className="flex space-x-12">
              <div className="text-center">
                <span className="block text-2xl font-bold tracking-tighter">100%</span>
                <span className="block text-[8px] font-bold uppercase tracking-widest text-gray-400">Compliance alignment</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl font-bold tracking-tighter">Factory</span>
                <span className="block text-[8px] font-bold uppercase tracking-widest text-gray-400">Direct Governance</span>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default CapabilityGrid;
