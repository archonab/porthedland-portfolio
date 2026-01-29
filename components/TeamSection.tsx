
import React from 'react';
import { CORE_TEAM, SUPPORT_TEAM } from '../constants';
import RevealOnScroll from './RevealOnScroll';

const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Core Team Heading */}
        <RevealOnScroll>
          <div className="border-b border-sh-border pb-12 mb-20">
            <span className="block text-[10px] font-bold tracking-widest text-sh-black uppercase mb-6">Execution & Deliverables</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Core Project Delivery Team.</h2>
            <p className="text-gray-500 max-w-2xl text-sm italic">
              Personnel dedicated to the day-to-day coordination, technical governance, and delivery oversight of the Port Hedland project.
            </p>
          </div>
        </RevealOnScroll>

        {/* Core Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 mb-32">
          {CORE_TEAM.map((member, idx) => (
            <RevealOnScroll key={idx} delay={`delay-[${idx * 150}ms]`}>
              <div className="group">
                <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 mb-8 bg-sh-gray border border-sh-border">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight">{member.name}</h3>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-sh-accent mb-1">{member.role}</p>
                    <p className="text-[9px] font-bold tracking-widest uppercase text-gray-400">Focus: {member.focus}</p>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed font-light">
                    {member.bio}
                  </p>
                  <div className="space-y-4 pt-6 border-t border-sh-border">
                    <span className="block text-[9px] font-bold tracking-widest uppercase text-sh-black">Representative Experience</span>
                    <ul className="space-y-4">
                      {member.trackRecord?.map((item, i) => (
                        <li key={i} className="group/item">
                          <span className="block text-[11px] font-bold text-sh-black leading-tight group-hover/item:text-sh-accent transition-colors">
                            {item.title}
                          </span>
                          <span className="block text-[10px] text-gray-400 uppercase tracking-wider mt-1">
                            {item.detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Support Team Heading */}
        <RevealOnScroll>
          <div className="border-b border-sh-border pb-12 mb-20 pt-12 border-t mt-12">
            <span className="block text-[10px] font-bold tracking-widest text-sh-black uppercase mb-6">Strategic Oversight</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Leadership & Strategic Support.</h2>
            <p className="text-gray-500 max-w-2xl text-sm italic">
              Senior leadership providing high-level governance, capital strategy, and stakeholder alignment to ensure the success of the SIBS partnership.
            </p>
          </div>
        </RevealOnScroll>

        {/* Support Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-5xl">
          {SUPPORT_TEAM.map((member, idx) => (
            <RevealOnScroll key={idx} delay={`delay-[${idx * 150}ms]`}>
              <div className="group flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-48 aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 bg-sh-gray border border-sh-border shrink-0">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight">{member.name}</h3>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-sh-accent mb-1">{member.role}</p>
                    <p className="text-[9px] font-bold tracking-widest uppercase text-gray-400">Strategic Focus: {member.focus}</p>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed font-light">
                    {member.bio}
                  </p>
                  <div className="pt-4 border-t border-sh-border">
                    <ul className="grid grid-cols-1 gap-4">
                      {member.trackRecord?.map((item, i) => (
                        <li key={i} className="group/item">
                          <span className="block text-[10px] font-bold text-sh-black group-hover/item:text-sh-accent transition-colors">
                            {item.title}
                          </span>
                        </li>
                      ))}
                    </ul>
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

export default TeamSection;
