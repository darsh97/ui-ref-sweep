import React from 'react';
import { 
  Activity, 
  Database, 
  Cpu, 
  Search, 
  Bell, 
  Terminal,
  CheckCircle2,
  TrendingUp,
  ArrowRight
} from 'lucide-react';

export default function SystemMonitorPage() {
  return (
    <div className="flex flex-col h-full bg-background overflow-y-auto custom-scrollbar">
      <header className="bg-stone-950/80 backdrop-blur-xl w-full h-14 border-b border-stone-800/30 flex items-center justify-between px-6 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">Node: 01_WEST_DATACENTER</span>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-100">Live Status: Operational</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center bg-surface-container-low px-3 py-1.5 rounded border border-outline-variant/10">
            <Search className="w-4 h-4 text-slate-500 mr-2" />
            <input className="bg-transparent border-none focus:ring-0 text-xs text-slate-300 w-48 placeholder-slate-600" placeholder="Search parameters..." type="text" />
          </div>
        </div>
      </header>

      <div className="p-8 max-w-7xl mx-auto w-full">
        <div className="mb-12">
          <span className="text-[10px] font-mono text-primary/60 tracking-[0.3em] block mb-2 uppercase">Core Infrastructure Telemetry</span>
          <h2 className="text-6xl font-bold tracking-tighter text-on-surface mb-4 leading-none">System Health <span className="text-outline-variant/40">v4.2.0</span></h2>
          <p className="max-w-2xl text-on-surface-variant font-medium leading-relaxed">
            Real-time pipeline analytics for AeroTwyn. Monitoring ingestion, ETL throughput, agent health, and RAG revalidation metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* RAG Ingestion Pipeline */}
          <div className="lg:col-span-8 bg-surface-container-low p-6 rounded-lg border border-outline-variant/10">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-slate-100">RAG Ingestion Pipeline</h3>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold font-mono">Knowledge Store Stream</p>
              </div>
              <div className="flex gap-2 font-mono">
                <span className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded font-bold">MILVUS_ACTIVE</span>
                <span className="bg-surface-container-high text-slate-400 text-[10px] px-2 py-0.5 rounded font-bold">1536_DIM</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-end">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Chunking</span>
                  <span className="text-xl font-mono font-bold text-primary">2.4k/s</span>
                </div>
                <div className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-[75%]"></div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-end">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Embeddings</span>
                  <span className="text-xl font-mono font-bold text-slate-100">NVIDIA Local</span>
                </div>
                <div className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-primary/60 w-[88%]"></div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-end">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Milvus Ingest</span>
                  <span className="text-xl font-mono font-bold text-slate-100">842MB/s</span>
                </div>
                <div className="h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="h-full bg-slate-400 w-[42%]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Evaluation Pipeline */}
          <div className="lg:col-span-4 bg-surface-container p-6 rounded-lg border border-outline-variant/5">
            <div className="flex items-center gap-3 mb-6">
              <Activity className="w-5 h-5 text-primary" />
              <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Evaluation Pipeline</h3>
            </div>
            <div className="space-y-5">
              <div className="flex justify-between items-center py-2 border-b border-outline-variant/10">
                <span className="text-xs text-slate-500 font-mono">Confidence Score</span>
                <span className="text-lg font-mono font-bold text-primary">0.942</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-outline-variant/10">
                <span className="text-xs text-slate-500 font-mono">Revalidation Rate</span>
                <span className="text-lg font-mono font-bold text-slate-100">14%</span>
              </div>
              <div className="mt-4 p-4 bg-surface-container-low rounded border border-outline-variant/10">
                <p className="text-[10px] text-slate-500 mb-3 font-mono uppercase tracking-widest">Model Drift Analysis</p>
                <div className="flex items-center gap-2">
                  <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden flex">
                    <div className="h-full bg-primary w-[92%]"></div>
                  </div>
                  <span className="text-[10px] font-mono text-primary">92%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Topology Reference */}
        <div className="mt-12 bg-surface-container-low p-8 rounded-lg border border-outline-variant/10">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-lg font-bold text-slate-100 uppercase tracking-widest">Pipeline Topology Reference</h3>
            <div className="h-[1px] flex-1 bg-outline-variant/20"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="text-center p-4 bg-surface-container-highest/30 border border-outline-variant/10 rounded">
              <span className="text-[9px] font-mono text-primary uppercase block mb-1">Data Ingestion</span>
              <div className="text-[10px] font-bold text-slate-400">Raw Streams</div>
            </div>
            <div className="flex items-center justify-center"><ArrowRight className="w-5 h-5 text-slate-700" /></div>
            <div className="text-center p-4 bg-primary/5 border border-primary/20 rounded">
              <span className="text-[9px] font-mono text-primary uppercase block mb-1">Central Data Store</span>
              <div className="text-[10px] font-bold text-slate-200">Parquet/Postgres</div>
            </div>
            <div className="flex items-center justify-center"><ArrowRight className="w-5 h-5 text-slate-700" /></div>
            <div className="text-center p-4 bg-surface-container-highest/30 border border-outline-variant/10 rounded">
              <span className="text-[9px] font-mono text-secondary uppercase block mb-1">Agent Layer</span>
              <div className="text-[10px] font-bold text-slate-400">Active Inference</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
