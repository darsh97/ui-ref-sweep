import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  MessageSquare, 
  Box, 
  Zap, 
  Library, 
  Activity, 
  ShieldCheck, 
  Settings, 
  HelpCircle,
  Bell,
  Terminal,
  Car
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  const navItems = [
    { name: 'Chat', path: '/', icon: MessageSquare },
    { name: 'GeoSweep', path: '/geosweep', icon: Box },
    { name: 'Governance', path: '/governance', icon: ShieldCheck },
    { name: 'System Monitor', path: '/monitor', icon: Activity },
    { name: 'Knowledge Hub', path: '/knowledge', icon: Library },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-background text-on-surface font-body">
      {/* SideNavBar */}
      <aside className="bg-stone-950 text-slate-300 w-64 border-r border-stone-800/50 flex flex-col py-6 shrink-0">
        <div className="px-6 mb-8 flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-primary-container flex items-center justify-center">
            <Car className="text-on-primary-container w-5 h-5" />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tighter text-slate-200">AeroTwyn</h1>
            <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Scout dynamics</p>
          </div>
        </div>

        <nav className="flex-1 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-6 py-3 transition-colors ${
                  isActive 
                    ? 'text-slate-100 font-semibold border-r-2 border-slate-300 bg-stone-900/40' 
                    : 'text-slate-500 hover:text-slate-300 hover:bg-stone-900/30'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="px-6 mt-8">
          <button className="w-full py-2 bg-surface-container-high border border-outline-variant/20 text-slate-300 text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-surface-container-highest transition-all duration-200">
            Run Diagnostics
          </button>
        </div>

        <div className="mt-auto border-t border-stone-800/30 pt-4">
          <Link to="/settings" className="flex items-center gap-3 px-6 py-3 text-slate-500 hover:text-slate-300 transition-colors">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </Link>
          <Link to="/support" className="flex items-center gap-3 px-6 py-3 text-slate-500 hover:text-slate-300 transition-colors">
            <HelpCircle className="w-5 h-5" />
            <span>Support</span>
          </Link>
          
          <div className="px-6 mt-6 flex items-center gap-3">
            <div className="w-8 h-8 bg-surface-container rounded-full overflow-hidden border border-outline-variant/30">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3vkPVE_cdxs3TumZ9OcHs-9Nz30Ya6uCO89uCgYY39mv3p3clwRphtBqBZdhiQjo2KKRkg4yR47o-uWhveV8JNM3XGwUtcJv1ANVEsQWP3Y3-XhpXkQxUhqdtU8yEfnS2KFrc2iypwsyBCkquAcEq7qIz6g7pn9WqaUFxfvbgM_K1Y-DyJYU1WnUIjjXDjm6M5Rc-p5DBee8xajgStDi0i1JAQKK_4dkQmClO19S5fNi87-ja5iDgZLO1objuViEJdlsMjMu07yft" 
                alt="User" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-slate-200">OP_Alpha_01</span>
              <span className="text-[10px] text-slate-500 uppercase font-bold">Authorized</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col relative bg-surface-dim overflow-hidden">
        {/* TopAppBar */}
        <header className="bg-stone-950/80 backdrop-blur-xl text-slate-300 text-xs uppercase tracking-widest w-full h-14 border-b border-stone-800/30 flex items-center justify-between px-6 sticky top-0 z-50">
          <div className="flex items-center gap-4">
            <span className="text-slate-500">Aero Terminal</span>
            <span className="w-[1px] h-4 bg-stone-800"></span>
            <span className="text-primary font-bold">Session ID: SM-SUV-2024</span>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative group">
              <Bell className="w-5 h-5 text-slate-500 cursor-pointer hover:text-slate-200 transition-colors" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full"></span>
            </div>
            <Terminal className="w-5 h-5 text-slate-500 cursor-pointer hover:text-slate-200 transition-colors" />
            <div className="w-px h-6 bg-stone-800"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
              <span className="text-[9px] font-bold text-slate-300">System Nominal</span>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-hidden">
          {children}
        </div>
      </main>
    </div>
  );
}
