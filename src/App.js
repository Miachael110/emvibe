import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Layout from './components/Layout';

import ProfilePage from './pages/ProfilePage';
import Dashboard from './pages/Dashboard';
import Calendar from './pages/Calendar';

const App = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'calendar':
        return <Calendar />;
      case 'profile':
        return <ProfilePage />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout 
      sidebarOpen={sidebarOpen}
      setSidebarOpen={setSidebarOpen}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    >
      {renderPage()}
    </Layout>
  );
};

export default App;