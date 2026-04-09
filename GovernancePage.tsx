import React from 'react';
import { 
  ShieldCheck, 
  Gavel, 
  Activity, 
  Clock, 
  AlertTriangle, 
  CheckCircle2, 
  Filter,
  Terminal,
  Cpu,
  Database,
  Lock,
  Settings
} from 'lucide-react';

export default function GovernancePage() {
  return (
    <div className="flex flex-col h-full bg-surface overflow-hidden">
      {/* Top Header */}
      <div className="p-8 pb-4">
        <div className="flex items-center gap-6 mb-8">
          <h2 className="text-xl font-bold tracking-tighter text-gray-200">Governance & Approvals</h2>
          <div className="h-4 w-[1px] bg-white/10"></div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">System Status: Nominal</span>
          </div>
        </div>

        <section className="mb-8">
          <h3 className="text-[3.5rem] font-bold tracking-tight text-on-surface leading-none mb-2">Queue Integrity</h3>
          <p className="text-on-surface-variant max-w-2xl text-sm font-medium">
            Verification layer for autonomous engineering agents. All critical CFD and Surrogate training cycles must pass operator validation before compute allocation.
          </p>
        </section>
      </div>

      <div className="flex-1 p-8 pt-0 grid grid-cols-12 gap-6 overflow-y-auto custom-scrollbar">
        {/* Pending Approvals Queue */}
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-4">
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Active Requests</span>
              <span className="bg-primary text-on-primary px-1.5 py-0.5 text-[10px] font-black rounded-sm">03</span>
            </div>
            <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest cursor-pointer hover:text-gray-300">Archive Log</span>
          </div>

          {/* Approval Item A */}
          <div className="bg-surface-container-low p-6 flex flex-col gap-6 group hover:bg-surface-container transition-colors relative overflow-hidden rounded-lg">
            <div className="absolute top-0 left-0 w-1 h-full bg-error"></div>
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-error">Critical Priority</span>
                  <span className="text-[10px] text-white/20">•</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Auro Orchestrator</span>
                </div>
                <h4 className="text-lg font-bold tracking-tight">Approve CFD Run: <span className="text-gray-400">B_205_SPOILER_V2</span></h4>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Est. Compute</span>
                <span className="text-xl font-black text-gray-200">14.2h</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 border-y border-white/5 py-4">
              <div className="flex flex-col">
                <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500">Resource Cost</span>
                <span className="text-sm font-semibold text-gray-300">$842.00 Credits</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500">Mesh Resolution</span>
                <span className="text-sm font-semibold text-gray-300">42M Poly (Hyper)</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500">Target Convergence</span>
                <span className="text-sm font-semibold text-gray-300">1e-5 (Residual)</span>
              </div>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <button className="bg-primary text-on-primary px-6 py-2 rounded-lg text-[11px] font-bold uppercase tracking-widest hover:bg-gray-400 active:scale-95 transition-all">Approve Session</button>
              <button className="border border-outline-variant/20 px-6 py-2 rounded-lg text-[11px] font-bold uppercase tracking-widest text-gray-400 hover:bg-white/5 active:scale-95 transition-all">Hold / Audit</button>
            </div>
          </div>

          {/* Approval Item B */}
          <div className="bg-surface-container-low p-6 flex flex-col gap-6 group hover:bg-surface-container transition-colors relative overflow-hidden rounded-lg">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Medium Priority</span>
                  <span className="text-[10px] text-white/20">•</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Validation Agent 04</span>
                </div>
                <h4 className="text-lg font-bold tracking-tight">CFD-Wind Tunnel Validation Loop</h4>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Est. Compute</span>
                <span className="text-xl font-black text-gray-200">2.5h</span>
              </div>
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Cross-correlation study between digital twin telemetry and hardware testing at the Silverstone tunnel. Requires access to localized edge-compute cluster for real-time adjustments.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <button className="bg-primary text-on-primary px-6 py-2 rounded-lg text-[11px] font-bold uppercase tracking-widest hover:bg-gray-400 transition-all">Approve Loop</button>
              <button className="border border-outline-variant/20 px-6 py-2 rounded-lg text-[11px] font-bold uppercase tracking-widest text-gray-400 hover:bg-white/5 transition-all">Reject</button>
            </div>
          </div>
        </div>

        {/* Side Rail: Alerts & Access Control */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
          <section className="bg-neutral-900 border border-white/5 p-5 rounded-lg">
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-4">Resource Allocation</h5>
            <div className="flex flex-col gap-5">
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-[11px] font-bold text-gray-400">GPU Compute Hours</span>
                  <span className="text-[11px] font-black text-white">428 / 1200</span>
                </div>
                <div className="w-full h-1 bg-neutral-800 rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[35%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-[11px] font-bold text-gray-400">Storage Cluster 01</span>
                  <span className="text-[11px] font-black text-white">82%</span>
                </div>
                <div className="w-full h-1 bg-neutral-800 rounded-full overflow-hidden">
                  <div className="h-full bg-error w-[82%]"></div>
                </div>
              </div>
            </div>
          </section>

          <section className="flex-1 flex flex-col min-h-0 bg-neutral-900/50 border border-white/5 rounded-lg overflow-hidden">
            <div className="p-4 border-b border-white/5 flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Agent Logs</span>
              <Filter className="w-4 h-4 text-gray-500 cursor-pointer" />
            </div>
            <div className="p-4 flex flex-col gap-4 overflow-y-auto custom-scrollbar">
              {[
                { type: 'success', title: 'Pipeline Alpha Success', desc: 'B_205 SPOILER MESH generated in 220s.', time: '12:04:32' },
                { type: 'warning', title: 'Auro Agent Retry', desc: 'Transient convergence error on Wing_Tip_V9.', time: '11:58:10' },
                { type: 'info', title: 'User Login Detected', desc: 'Operator Alpha_01 session initialized.', time: '11:45:00' },
                { type: 'error', title: 'Governance Trigger', desc: 'Simulation B_205 halted. Requires manual approval.', time: '11:32:11' },
              ].map((log, i) => (
                <div key={i} className="flex gap-3">
                  <div className={`mt-1 w-1.5 h-1.5 rounded-full ${
                    log.type === 'success' ? 'bg-emerald-500' : 
                    log.type === 'warning' ? 'bg-amber-500' : 
                    log.type === 'error' ? 'bg-error' : 'bg-primary'
                  }`}></div>
                  <div className="flex flex-col">
                    <span className="text-[11px] font-bold text-gray-300">{log.title}</span>
                    <span className="text-[10px] text-gray-500">{log.desc}</span>
                    <span className="text-[9px] text-gray-600 mt-1 uppercase font-black">{log.time}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-auto p-3 bg-neutral-900 border-t border-white/5">
              <div className="flex items-center gap-2 px-3 py-2 bg-black rounded border border-white/5">
                <span className="text-[10px] font-mono text-primary">$</span>
                <input className="bg-transparent border-none focus:ring-0 text-[10px] font-mono text-gray-400 w-full p-0" placeholder="Query agent logs..." type="text" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
