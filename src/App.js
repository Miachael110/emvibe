import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ProfilePage from './pages/ProfilePage';
import Dashboard from './pages/Dashboard';
import Calendar from './pages/Calendar';
import ChatBoard from './pages/Chatboard';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Routes>
      {/* Normal layout pages */}
      <Route element={<Layout sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />}>
           <Route path="/" element={<ChatBoard />} />
        <Route path="/chatboard" element={<ChatBoard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>


    </Routes>
  );
};

export default App;
