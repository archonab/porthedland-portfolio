import React from 'react';
import { PROPOSAL_PROJECT } from '../constants';

const ProposalHeader: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] md:h-screen w-full flex flex-col justify-end pb-12 md:pb-24 px-6 md:px-12 overflow-hidden bg-sh-black">
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* 1. Base Abstract Texture */}
        <img 
          src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop" 
          alt="Abstract Texture" 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        
        {/* 2. Technical Grid Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }}
        ></div>

        {/* 3. Original Gradient & Project Image */}
        <div className="absolute inset-0 bg-gradient-to-t from-sh-black via-sh-black/60 to-transparent z-10"></div>
        <img
          src={PROPOSAL_PROJECT.image}
          alt="Proposal Visualization"
          className="w-full h-full object-cover grayscale animate-slow-zoom opacity-60 mix-blend-luminosity"
        />
      </div>

      {/* Hero Content (Maintained from original code) */}
      <div className="relative z-20 w-full flex flex-col md:flex-row justify-between items-end fade-in-up">
        <div className="max-w-3xl mb-8 md:mb-0">
          <span className="inline-block text-[10px] font-bold tracking-[0.3em] text-sh-accent uppercase mb-6">
            Capability & Portfolio Showcase
          </span>
          <h1 className="text-white text-5xl md:text-8xl font-bold tracking-tighter leading-[0.85] mb-8">
            Enabling the <br />
            {PROPOSAL_PROJECT.title}.
          </h1>
          <div className="flex flex-wrap gap-4 items-center">
            <div className="px-3 py-1 border border-white/20 bg-white/5 backdrop-blur-md">
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">{PROPOSAL_PROJECT.client} Proposal</span>
            </div>
            <div className="px-3 py-1 border border-sh-accent/30 bg-sh-accent/10 backdrop-blur-md">
              <span className="text-[10px] font-bold text-sh-accent uppercase tracking-widest">{PROPOSAL_PROJECT.focus}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end">
          <div className="text-right border-r-2 border-sh-accent pr-6 py-1">
            <span className="block text-white text-[10px] uppercase font-bold tracking-widest mb-1">Prepared For</span>
            <span className="block text-gray-400 text-[10px] uppercase tracking-widest">Yuna Chua & The SIBS Team</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProposalHeader;