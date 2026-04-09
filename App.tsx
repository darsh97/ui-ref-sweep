import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ChatPage from './components/ChatPage';
import GeoSweepPage from './components/GeoSweepPage';
import KnowledgeHubPage from './components/KnowledgeHubPage';
import SystemMonitorPage from './components/SystemMonitorPage';
import GovernancePage from './components/GovernancePage';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ChatPage />} />
          <Route path="/geosweep" element={<GeoSweepPage />} />
          <Route path="/knowledge" element={<KnowledgeHubPage />} />
          <Route path="/monitor" element={<SystemMonitorPage />} />
          <Route path="/governance" element={<GovernancePage />} />
          <Route path="*" element={<ChatPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}
