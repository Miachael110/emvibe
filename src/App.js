import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ProfilePage from './pages/ProfilePage';
import Dashboard from './pages/Dashboard';
import Calendar from './pages/Calendar';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Layout
      sidebarOpen={sidebarOpen}
      setSidebarOpen={setSidebarOpen}
    >
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/profile" element={<ProfilePage />} />
        {/* Fallback route for any unmatched paths */}
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </Layout>
  );
};

export default App;