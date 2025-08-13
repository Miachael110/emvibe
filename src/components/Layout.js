import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children, sidebarOpen, setSidebarOpen }) => {
  return (
    <div className="min-h-screen py-2 bg-gray-100">
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 lg:ml-0">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;