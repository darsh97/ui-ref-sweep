import React from 'react';
import { 
  CheckCircle2, 
  BrainCircuit, 
  Settings2, 
  FileText, 
  Wand2, 
  ZoomIn, 
  ZoomOut,
  Search,
  Settings,
  Power
} from 'lucide-react';

export default function GeoSweepPage() {
  return (
    <div className="flex flex-col h-full">
      {/* Run Selector / Context Bar */}
      <div className="h-14 bg-surface-container-low border-b border-outline-variant/10 flex items-center px-6 justify-between shrink-0">
        <div className="flex items-center gap-8">
          <div className="flex flex-col">
            <span className="text-[0.6rem] font-mono text-outline uppercase tracking-tighter">Primary Run</span>
            <select className="bg-transparent border-none text-sm font-semibold p-0 focus:ring-0 text-primary">
              <option>B_204_CFD_BASELINE</option>
              <option>B_205_WT_VERIFY</option>
            </select>
          </div>
          <div className="w-px h-8 bg-outline-variant/20"></div>
          <div className="flex flex-col">
            <span className="text-[0.6rem] font-mono text-outline uppercase tracking-tighter">Comparison Run</span>
            <select className="bg-transparent border-none text-sm font-semibold p-0 focus:ring-0 text-on-surface-variant">
              <option>NONE</option>
              <option>B_203_CFD_ARCHIVE</option>
            </select>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 bg-surface-container px-3 py-1.5 rounded-lg border border-outline-variant/20">
            <span className="text-[0.6875rem] font-bold text-on-surface-variant">OVERLAY GEOMETRY</span>
            <button className="w-8 h-4 bg-primary-container rounded-full relative">
              <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div>
            </button>
          </div>
          <button className="bg-primary text-on-primary px-4 py-1.5 rounded-lg text-xs font-bold uppercase tracking-widest hover:opacity-90 transition-opacity">
            Export Analysis
          </button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Side: Analysis Pipeline */}
        <div className="w-80 border-r border-outline-variant/10 flex flex-col bg-surface-container-lowest shrink-0 overflow-y-auto custom-scrollbar">
          <section className="p-6 border-b border-outline-variant/10">
            <div className="flex justify-between items-end mb-4">
              <h3 className="text-base font-bold">Analysis Pipeline</h3>
              <span className="font-mono text-[0.6rem] text-primary">GEOSWEEP v2.4</span>
            </div>
            <div className="space-y-4">
              {[
                { step: 1, title: 'STL LOAD', desc: 'B_204_BODYWORK.stl (442MB)' },
                { step: 2, title: 'PATCH STITCHING', desc: '167 patches stitched', progress: 100 },
                { step: 3, title: 'DATA LOADING', desc: 'CFD_RESULT_004.parquet' },
                { step: 4, title: 'COMPUTATION', desc: 'Area-wise integral complete' },
              ].map((item) => (
                <div key={item.step} className="flex flex-col gap-1 pl-3 border-l-2 border-primary">
                  <div className="flex justify-between items-center">
                    <span className="text-[0.6rem] font-mono text-primary uppercase">STEP {item.step}</span>
                    <CheckCircle2 className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-tighter">{item.title}</span>
                  <span className="text-[0.6rem] text-outline">{item.desc}</span>
                  {item.progress && (
                    <div className="w-full bg-surface-container-highest h-1 rounded-full overflow-hidden mt-1">
                      <div className="bg-primary h-full w-full"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[0.6rem] font-mono text-primary">STEP 5</span>
              <h4 className="text-[0.6875rem] font-bold uppercase tracking-widest text-primary">Agent Insights</h4>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-primary/5 border-l-2 border-primary rounded-r-lg">
                <div className="flex items-center gap-2 mb-2">
                  <BrainCircuit className="w-4 h-4 text-primary" />
                  <span className="text-[0.6rem] font-mono font-bold">AERO_LOG ANALYSIS</span>
                </div>
                <p className="text-xs leading-relaxed text-on-surface-variant italic">
                  "Significant pressure stagnation detected at the front_wing_L junction. Wake turbulence from this region is negatively impacting diffuser efficiency."
                </p>
              </div>
              <div className="bg-surface-container-low p-3 rounded-lg border border-outline-variant/10">
                <h5 className="text-[0.6rem] font-bold text-outline uppercase mb-2">High-Drag Regions</h5>
                <div className="space-y-1">
                  <div className="flex items-center justify-between p-1.5 rounded hover:bg-surface-container-high transition-colors">
                    <span className="font-mono text-[0.65rem] text-on-surface-variant">front_wing_L</span>
                    <span className="font-mono text-[0.65rem] font-bold text-error">18.4%</span>
                  </div>
                  <div className="flex items-center justify-between p-1.5 rounded hover:bg-surface-container-high transition-colors">
                    <span className="font-mono text-[0.65rem] text-on-surface-variant">diffuser_main</span>
                    <span className="font-mono text-[0.65rem] font-bold text-error">12.1%</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Center Content: Main Viewport */}
        <div className="flex-1 relative bg-surface-container-lowest overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#45474c 1px, transparent 1px), linear-gradient(90deg, #45474c 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <div className="relative w-full h-full max-w-5xl max-h-[600px] bg-surface-container-high rounded border border-outline-variant/10 shadow-2xl overflow-hidden group">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBd8PUH3RQtcOxEIKEPP429aoNFRInVQbxOcKVVhP4UkX439oUyJDFRZYw_jeQxQwf032ytFkpRRBDWN3NjzDl-2NxDOIM5WDsNAs-4LwVbnuvirM_OioXI0C29eoFZxc6yE5CizElOSFkozaxvJjyST-9i7vI3WTueQ_BU6FCiqm2k0fyEbErAJZ69VebF3S7H4FS4nxpbFOwteOxiizj5SXR0bpOg5bbapTJFG7Qiy3fRth3YOTO_qj56_eLlDLBAM52Al_u1bGSD" 
                alt="3D Wireframe" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <div className="bg-surface-container-high/60 backdrop-blur-md px-3 py-1.5 rounded border border-white/5 flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[0.6rem] font-mono text-primary">STEP 5</span>
                    <span className="text-[0.6rem] font-mono text-on-surface">DECIMATED MESH VIS</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[0.6rem] text-primary/70">MESH_DENSITY: 1.2M POLY</span>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4">
                <div className="bg-surface-container-high/60 backdrop-blur-md p-3 rounded border border-white/5">
                  <div className="text-[0.6rem] font-mono text-outline mb-2 uppercase">Drag Distribution (Cd)</div>
                  <div className="h-2 w-32 bg-gradient-to-r from-blue-500 via-green-500 via-yellow-500 to-red-500 rounded-sm"></div>
                  <div className="flex justify-between mt-1 font-mono text-[0.5rem] text-on-surface-variant">
                    <span>0.02</span>
                    <span>0.48</span>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 flex flex-col gap-1">
                <button className="w-8 h-8 bg-surface-container-high/60 backdrop-blur-md border border-white/5 rounded flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors">
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 bg-surface-container-high/60 backdrop-blur-md border border-white/5 rounded flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-colors">
                  <ZoomOut className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-surface/80 backdrop-blur-md border-t border-outline-variant/10 px-8 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full border-2 border-outline flex items-center justify-center text-[0.6rem] font-mono text-outline">V1</div>
                  <span className="text-[0.5rem] font-mono mt-1 text-outline">BASE</span>
                </div>
                <div className="w-12 h-px bg-outline-variant/30 mx-2"></div>
                <div className="flex flex-col items-center">
                  <div className="w-6 h-6 rounded-full border-2 border-primary bg-primary/20 flex items-center justify-center text-[0.6rem] font-mono text-primary">C1</div>
                  <span className="text-[0.5rem] font-mono mt-1 text-primary">AGENT</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <span className="text-[0.6rem] font-mono text-outline block uppercase">Predicted Drag</span>
              <span className="text-xl font-bold text-primary">-2.4% <span className="text-xs font-normal text-outline">Cd</span></span>
            </div>
          </div>
        </div>

        {/* Right Side: Mod Pipeline */}
        <div className="w-80 border-l border-outline-variant/10 flex flex-col bg-surface-container-lowest shrink-0 overflow-y-auto custom-scrollbar">
          <section className="p-6 border-b border-outline-variant/10">
            <div className="flex justify-between items-end mb-6">
              <div className="flex flex-col">
                <span className="text-[0.6rem] font-mono text-primary mb-1">STEP 6</span>
                <h3 className="text-base font-bold">Mod Pipeline</h3>
              </div>
              <Settings2 className="w-5 h-5 text-outline" />
            </div>
            <div className="space-y-4">
              <h4 className="text-[0.6875rem] font-bold uppercase tracking-widest text-outline">Suggested Modifications</h4>
              {[
                { id: 'rear_spoiler_flap', code: 'scale(y, 0.92)', delta: '-0.8% Cd' },
                { id: 'engine_cover_exit', code: 'loft(r, +12.0)', delta: '-1.3% Cd' },
              ].map((mod) => (
                <div key={mod.id} className="bg-surface-container-low p-3 rounded-lg border border-outline-variant/15 hover:border-primary/50 transition-colors cursor-pointer group">
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-mono text-[0.6875rem] text-primary font-bold">{mod.id}</span>
                    <input type="checkbox" defaultChecked className="rounded-sm bg-surface-container-highest border-outline-variant text-primary focus:ring-primary" />
                  </div>
                  <div className="bg-surface-container-highest/50 px-2 py-1.5 rounded font-mono text-[0.6875rem] text-on-surface-variant group-hover:text-primary transition-colors">
                    {mod.code}
                  </div>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="text-outline text-[0.6rem] uppercase">Exp. Delta</span>
                    <span className="text-primary text-[0.65rem] font-bold">{mod.delta}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="p-6 space-y-6">
            <div className="space-y-4">
              <h4 className="text-[0.6875rem] font-bold uppercase tracking-widest text-outline">Validate Modification</h4>
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[0.65rem] font-bold uppercase text-primary">Surrogate Revalidation</span>
                  <span className="px-2 py-0.5 bg-primary/20 rounded-full text-[0.5rem] font-mono text-primary font-bold tracking-tighter">CONFIDENCE: 94.2%</span>
                </div>
                <button className="w-full bg-primary/20 text-primary border border-primary/30 py-2 rounded text-[0.6rem] font-bold uppercase hover:bg-primary/30 transition-colors">
                  Run Surrogate Verify
                </button>
              </div>
              <div className="p-4 rounded-lg bg-surface-container border border-outline-variant/20">
                <span className="text-[0.65rem] font-bold uppercase text-on-surface block mb-3">High-Fidelity Simulation</span>
                <button className="w-full bg-primary text-on-primary py-2.5 rounded font-bold uppercase text-[0.65rem] tracking-wider hover:opacity-90 transition-opacity">
                  Launch CFD
                </button>
              </div>
            </div>
            <div className="pt-4 border-t border-outline-variant/10 flex flex-col gap-2">
              <button className="w-full bg-surface-container-highest text-on-surface border border-outline-variant/30 py-3 rounded-lg font-bold uppercase tracking-widest text-[0.65rem] flex items-center justify-center gap-2 hover:bg-surface-bright transition-colors">
                <FileText className="w-4 h-4" />
                Generate Report
              </button>
              <button className="w-full bg-primary text-on-primary py-3 rounded-lg font-bold uppercase tracking-widest text-[0.65rem] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                <Wand2 className="w-4 h-4" />
                Apply & Reconstruct
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
