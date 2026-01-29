
import React from 'react';
import Navbar from './components/Navbar';
import ProposalHeader from './components/ProposalHeader';
import CapabilityGrid from './components/CapabilityGrid';
import TeamSection from './components/TeamSection';
import ProjectPortfolio from './components/ProjectPortfolio';
import RevealOnScroll from './components/RevealOnScroll';
import { ArrowRight, FileText } from 'lucide-react';

function App() {
  return (
    <main className="w-full min-h-screen relative selection:bg-sh-accent selection:text-white font-sans bg-white">
      <Navbar />
      <ProposalHeader />
      
      <CapabilityGrid />
      <TeamSection />
      <ProjectPortfolio />

      {/* Final Call to Action */}
      <section id="contact" className="py-32 bg-sh-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-sh-accent/5 -skew-x-12 transform translate-x-1/2"></div>
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
          <RevealOnScroll>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-12 md:mb-0">
                <h2 className="text-4xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
                  Ready to <br/>Construct.
                </h2>
                <p className="text-gray-400 max-w-sm text-lg font-light">
                  Review our response to your requirements and let's finalize the roadmap for the Port Hedland Hotel.
                </p>
              </div>
              
              <div className="flex flex-col space-y-6 w-full md:w-auto">
                <a 
                  href="#" 
                  className="group flex items-center justify-between md:justify-start space-x-12 p-8 border border-white/10 hover:border-sh-accent transition-all bg-white/5 hover:bg-sh-accent/10"
                >
                  <div className="flex items-center space-x-6">
                    <FileText className="text-sh-accent" size={32} />
                    <div>
                      <span className="block font-bold tracking-tight text-xl">Download Proposal</span>
                      <span className="text-[10px] uppercase tracking-widest text-gray-500">Draft Fee Proposal v1.0</span>
                    </div>
                  </div>
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </a>

                <div className="p-8 border border-white/10">
                  <span className="block text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-2">Primary Contact</span>
                  <p className="font-bold tracking-tight text-xl">projects@stanleyhamilton.com.au</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-sh-border bg-white px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] uppercase font-bold tracking-widest text-gray-400">
          <span>&copy; {new Date().getFullYear()} Stanley Hamilton. Port Hedland Portfolio.</span>
        </div>
      </footer>
    </main>
  );
}

export default App;
