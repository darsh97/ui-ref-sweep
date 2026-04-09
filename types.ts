import React from 'react';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  agent?: string;
  status?: 'complete' | 'in-progress';
  logs?: string[];
}

export interface AnalysisHistoryItem {
  id: string;
  title: string;
  timestamp: string;
  pinned?: boolean;
}

export interface DataSource {
  id: string;
  name: string;
  type: 'CFD' | 'Wind Tunnel' | 'SOP';
  status: 'validated' | 'recording' | 'idle';
  metadata: Record<string, string | number>;
}
