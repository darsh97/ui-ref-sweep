import React from 'react';
import { 
  Library, 
  Search, 
  Bell, 
  Terminal, 
  ArrowRight, 
  Verified, 
  Timer, 
  Bot, 
  Waves, 
  Wind,
  School,
  Microscope,
  Cpu,
  Network,
  Lightbulb
} from 'lucide-react';

export default function KnowledgeHubPage() {
  return (
    <div className="flex flex-col h-full bg-background overflow-y-auto custom-scrollbar">
      <header className="flex items-center justify-between px-6 sticky top-0 z-50 w-full h-14 border-b border-stone-800/30 bg-stone-950/80 backdrop-blur-xl">
        <div className="flex items-center">
          <h1 className="font-inter text-xs uppercase tracking-widest text-slate-300">Knowledge Hub</h1>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input className="bg-stone-900/50 border-none rounded px-10 py-1 text-xs w-64 focus:ring-1 focus:ring-primary text-slate-300 placeholder:text-slate-600" placeholder="Search technical docs..." type="text" />
          </div>
        </div>
      </header>

      <div className="flex-1 p-10 space-y-12">
        <section className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Core Intelligence v4.0</span>
              <h2 className="text-6xl font-bold tracking-tighter text-on-surface leading-tight">Mastering Computational Aero-Agents</h2>
              <p className="text-on-surface-variant text-lg max-w-xl">Accelerate your workflow by leveraging our autonomous geometric reasoning agents. Learn how to interface with high-fidelity digital twins using natural language queries.</p>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-surface-container-low p-8 rounded-lg flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -mr-32 -mt-32"></div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center text-primary">
                  <Bot className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">How to Use Agents</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm text-on-surface-variant">
                <div className="space-y-3">
                  <p className="font-bold text-on-surface">01. Initialization</p>
                  <p>Call the `@agent` handle followed by your operational command. The system will auto-route to the most efficient compute node.</p>
                </div>
                <div className="space-y-3">
                  <p className="font-bold text-on-surface">02. Context Injection</p>
                  <p>Provide specific geometric references (e.g., `#wing-v2`) to narrow the analysis scope and reduce hallucination rates.</p>
                </div>
              </div>
            </div>
            <div className="mt-10 pt-6 border-t border-outline-variant/10 flex justify-between items-center">
              <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">Estimated Reading: 4 mins</span>
              <button className="text-primary text-xs font-bold flex items-center gap-2 hover:gap-3 transition-all">
                VIEW MODULE <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="bg-surface-container p-6 rounded-lg flex flex-col">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Core Syntax</h3>
            <div className="bg-surface-container-lowest rounded p-4 font-mono text-[11px] leading-relaxed text-slate-400 border-l-2 border-primary-container mb-6 overflow-hidden">
              <div className="flex gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-red-500/50"></span>
                <span className="w-2 h-2 rounded-full bg-yellow-500/50"></span>
                <span className="w-2 h-2 rounded-full bg-green-500/50"></span>
              </div>
              <p><span className="text-primary">query</span> {'{'}</p>
              <p className="pl-4">entity: <span className="text-tertiary">"wing-assembly-04"</span>,</p>
              <p className="pl-4">metrics: [<span className="text-tertiary">"drag"</span>, <span className="text-tertiary">"lift"</span>],</p>
              <p className="pl-4">precision: <span className="text-tertiary">"high-fid"</span></p>
              <p>{'}'}</p>
            </div>
            <p className="text-xs text-on-surface-variant mb-6">Our JSON-based query structure allows for precise control over geometric parameters and simulation fidelity.</p>
            <a className="mt-auto text-xs font-bold text-primary border-b border-primary/20 pb-1 w-max" href="#">Full Schema Reference</a>
          </div>
        </section>

        <section className="max-w-6xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold tracking-tight">Certification Modules</h3>
            <button className="text-xs font-bold text-slate-500 uppercase tracking-widest hover:text-primary transition-colors">View All Paths</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { title: 'Foundations', desc: 'Fundamental principles of digital twin interaction.', progress: 100, icon: School },
              { title: 'Advanced CFD', desc: 'Computational Fluid Dynamics integration.', progress: 32, icon: Microscope },
              { title: 'Structural Integrity', desc: 'Finite Element Analysis and stress modeling.', progress: 0, icon: Cpu },
              { title: 'Fleet Management', desc: 'Managing multiple assets and aggregate metrics.', progress: 0, icon: Network },
            ].map((path) => {
              const Icon = path.icon;
              return (
                <div key={path.title} className="bg-surface-container-low p-5 rounded-lg border border-outline-variant/5 hover:border-primary/20 transition-all cursor-pointer">
                  <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center mb-4">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <h4 className="text-sm font-bold mb-1">{path.title}</h4>
                  <p className="text-[11px] text-on-surface-variant leading-relaxed">{path.desc}</p>
                  <div className="mt-6 flex items-center gap-2">
                    <div className="flex-1 h-1 bg-surface-container-highest rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: `${path.progress}%` }}></div>
                    </div>
                    <span className="text-[9px] font-bold text-primary">{path.progress === 100 ? 'COMPLETED' : path.progress === 0 ? 'LOCKED' : `${path.progress}%`}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
