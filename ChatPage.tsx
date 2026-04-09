import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Send, 
  Paperclip, 
  Database, 
  Bolt, 
  Search, 
  PlusSquare, 
  Pin,
  User,
  Cpu,
  Wind,
  Sparkles
} from 'lucide-react';
import { chatWithAeroAgent } from '../services/gemini';
import { Message, AnalysisHistoryItem } from '../types';

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'user',
      content: 'Compare the drag coefficients from the CFD-RUN-X44 with the theoretical values in the Scout Motors SOP #45 and cross-reference with last week\'s wind tunnel telemetry.',
      timestamp: new Date(),
    },
    {
      id: '2',
      role: 'assistant',
      content: 'I am analyzing the requested data across CFD, SOP, and Wind Tunnel sources.',
      timestamp: new Date(),
      agent: 'Orchestrator',
      status: 'in-progress',
      logs: [
        '> Extracting drag coefficient (Cd) for SM-SUV Model...',
        '> Frontal Area: 2.85m² | Run ID: X44',
        '> Cd Value: 0.324 ± 0.002'
      ]
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const history: AnalysisHistoryItem[] = [
    { id: '1', title: 'SUV Rear Spoiler Drag Comparison', timestamp: 'Just now', pinned: true },
    { id: '2', title: 'Battery Thermal Gradient Analysis', timestamp: '3h ago' },
    { id: '3', title: 'Wheel Well Turbulence Study', timestamp: 'Yesterday' },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const geminiHistory = messages.map(m => ({
        role: m.role === 'user' ? 'user' : 'model',
        parts: [{ text: m.content }]
      }));

      const response = await chatWithAeroAgent(input, geminiHistory);

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date(),
        agent: 'Orchestrator',
        status: 'complete'
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chat error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-full overflow-hidden">
      {/* Chat History Sidebar */}
      <div className="w-72 bg-surface-container-low border-r border-outline-variant/10 flex flex-col shrink-0">
        <div className="p-4 border-b border-outline-variant/10">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Analysis History</span>
            <PlusSquare className="w-4 h-4 text-slate-500 cursor-pointer hover:text-slate-300" />
          </div>
          <div className="relative">
            <input 
              className="w-full bg-surface-container-lowest border-none text-xs rounded-lg py-2 pl-8 focus:ring-1 focus:ring-primary/30 text-slate-300" 
              placeholder="Search history" 
              type="text" 
            />
            <Search className="absolute left-2 top-2 w-4 h-4 text-slate-600" />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-1">
          {history.map((item) => (
            <div 
              key={item.id}
              className={`p-3 rounded-lg cursor-pointer transition-colors ${item.pinned ? 'bg-surface-container-high border-l-2 border-primary' : 'hover:bg-surface-container-high'}`}
            >
              <p className={`text-xs truncate ${item.pinned ? 'font-semibold text-slate-200' : 'font-medium text-slate-400'}`}>
                {item.title}
              </p>
              <div className="flex items-center justify-between mt-1">
                <span className="text-[9px] text-slate-500">{item.timestamp}</span>
                {item.pinned && <Pin className="w-3 h-3 text-primary fill-primary" />}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-surface-dim">
        <div className="flex-1 overflow-y-auto custom-scrollbar p-8 space-y-10">
          {/* Example Queries */}
          {messages.length <= 2 && (
            <div className="max-w-3xl mx-auto mb-10 p-6 bg-surface-container-low rounded-2xl border border-outline-variant/10 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-primary" />
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Example Queries</h3>
              </div>
              <div className="grid gap-3">
                {[
                  "Compare drag coefficients for the Scout Motors SUV rear spoiler between CFD-RUN-01 and WT-RUN-05.",
                  "What is the standard operating procedure for ground-effect validation at Scout Motors?",
                  "Find recent journals on active aero-thermal management for electric vehicle battery packs."
                ].map((query, i) => (
                  <button 
                    key={i}
                    onClick={() => setInput(query)}
                    className="text-left p-3 rounded-lg border border-outline-variant/10 hover:border-primary/50 hover:bg-surface-container-high transition-all group"
                  >
                    <p className="text-xs text-slate-300 group-hover:text-primary transition-colors">
                      {query}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          <AnimatePresence initial={false}>
            {messages.map((message) => (
              <motion.div 
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl mx-auto flex gap-6"
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border border-outline-variant/20 ${message.role === 'user' ? 'bg-surface-container-highest' : 'bg-primary'}`}>
                  {message.role === 'user' ? (
                    <User className="w-5 h-5 text-slate-400" />
                  ) : (
                    <Cpu className="w-5 h-5 text-on-primary" />
                  )}
                </div>
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <h2 className={`text-sm font-bold uppercase tracking-tighter ${message.role === 'user' ? 'text-slate-500' : 'text-primary'}`}>
                      {message.role === 'user' ? 'Lead Aero Engineer' : message.agent || 'Orchestrator'}
                    </h2>
                    {message.status === 'in-progress' && (
                      <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase animate-pulse">In Progress</span>
                    )}
                  </div>
                  <div className={`${message.role === 'user' ? 'text-lg font-medium' : 'text-base'} text-slate-200 leading-relaxed`}>
                    {message.content}
                  </div>
                  
                  {message.logs && (
                    <div className="bg-surface-container rounded-lg p-4 border border-outline-variant/10 shadow-sm mt-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Wind className="w-4 h-4 text-primary" />
                          <span className="text-xs font-bold text-slate-300">Aero CFD Agent</span>
                        </div>
                        <span className="text-[9px] text-green-400 font-mono">COMPLETE (0.8s)</span>
                      </div>
                      <div className="text-sm text-slate-400 font-mono leading-tight bg-surface-container-lowest p-3 rounded">
                        {message.logs.map((log, i) => (
                          <div key={i}>{log}</div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </div>

        {/* Input Controls */}
        <div className="p-6 bg-surface-container-low border-t border-outline-variant/10">
          <div className="max-w-4xl mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-tertiary/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-surface-container-highest rounded-xl shadow-2xl p-4 border border-outline-variant/20">
              <textarea 
                className="w-full bg-transparent border-none focus:ring-0 text-slate-200 placeholder:text-slate-600 resize-none font-mono text-sm" 
                placeholder="Query automotive technical data or command..." 
                rows={2}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
              />
              <div className="flex items-center justify-between mt-2 pt-2 border-t border-outline-variant/10">
                <div className="flex gap-4">
                  <button className="flex items-center gap-1.5 text-slate-500 hover:text-slate-300 transition-colors">
                    <Paperclip className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Context</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-slate-500 hover:text-slate-300 transition-colors">
                    <Database className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Sources</span>
                  </button>
                </div>
                <div className="flex items-center gap-4">
                  <button 
                    onClick={handleSend}
                    disabled={isLoading}
                    className="bg-primary text-on-primary px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-primary-fixed transition-colors disabled:opacity-50"
                  >
                    <span>{isLoading ? 'Processing...' : 'Execute'}</span>
                    <Bolt className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel: Data Context */}
      <aside className="w-80 bg-surface border-l border-outline-variant/10 flex flex-col relative shrink-0">
        <div className="p-6 flex-1 overflow-y-auto custom-scrollbar">
          <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-6">Active Context</h3>
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-600 uppercase">Data Source Selection</label>
              <div className="flex flex-wrap gap-1 p-2 bg-surface-container-lowest border border-outline-variant/20 rounded-lg min-h-[42px] items-center">
                <div className="flex items-center gap-1 bg-primary/20 text-primary px-2 py-0.5 rounded text-[10px] font-bold">
                  <span>CFD-RUN-X44</span>
                </div>
                <div className="flex items-center gap-1 bg-tertiary/20 text-tertiary px-2 py-0.5 rounded text-[10px] font-bold">
                  <span>WT-DATA-B10</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <span className="text-[10px] font-mono font-bold text-slate-300">CFD-RUN-X44</span>
                  </div>
                  <span className="text-[8px] font-bold text-green-400 border border-green-400/30 px-1 rounded">VALIDATED</span>
                </div>
                <div className="bg-surface-container-low rounded-lg border border-outline-variant/10 p-3 grid grid-cols-2 gap-y-3 gap-x-2">
                  <div className="space-y-0.5">
                    <p className="text-[8px] text-slate-600 uppercase font-bold">Iterations</p>
                    <p className="text-[10px] font-mono text-slate-200">14,200</p>
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-[8px] text-slate-600 uppercase font-bold">Residue</p>
                    <p className="text-[10px] font-mono text-slate-200">1.2e-6</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-tertiary"></div>
                    <span className="text-[10px] font-mono font-bold text-slate-300">WT-DATA-B10</span>
                  </div>
                  <span className="text-[8px] font-bold text-cyan-400 border border-cyan-400/30 px-1 rounded animate-pulse">RECORDING</span>
                </div>
                <div className="bg-surface-container-low rounded-lg border border-outline-variant/10 p-3 grid grid-cols-2 gap-y-3 gap-x-2">
                  <div className="space-y-0.5">
                    <p className="text-[8px] text-slate-600 uppercase font-bold">Sample Rate</p>
                    <p className="text-[10px] font-mono text-slate-200">2000Hz</p>
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-[8px] text-slate-600 uppercase font-bold">Wind Speed</p>
                    <p className="text-[10px] font-mono text-slate-200">120km/h</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 bg-surface-container-high/30 border-t border-outline-variant/10">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
            <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">Compute Node: SM-HPC-01 Active</span>
          </div>
        </div>
      </aside>
    </div>
  );
}
