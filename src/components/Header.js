import React, { useState } from "react";
import { dashboardData } from "../data/dashboardData";
import { Search, Settings, Bell, Menu } from "lucide-react";

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  const [showSearch, setShowSearch] = useState(false);
  const { user } = dashboardData;

  // Avatar initials
  const initials = user?.name ? user.name.charAt(0).toUpperCase() : "G";

  return (
    <header className="bg-[#F8F8FC] border-b border-gray-200 px-4 py-2 flex items-center justify-between rounded-xl mr-3">
      {/* Left - Hamburger (mobile) + Name */}
      <div className="flex items-center space-x-3">
        {/* Toggle button only on mobile */}
        <button
          className="md:hidden p-2 rounded-md bg-[#202125] text-white"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <Menu size={20} />
        </button>

        <div className="w-5 h-5 bg-yellow-200 rounded-sm"></div>
        <h1 className="text-sm font-medium text-gray-800">
          {user?.name || "Guest"}
        </h1>
      </div>

      {/* Right - Icons */}
      <div className="flex items-center space-x-3">
        {/* Search */}
        <div
          className="w-9 h-9 flex items-center justify-center rounded-full bg-purple-100 cursor-pointer"
          onClick={() => setShowSearch(!showSearch)}
        >
          <Search size={18} className="text-gray-700" />
        </div>

        {/* Settings */}
        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-yellow-100 cursor-pointer">
          <Settings size={18} className="text-gray-700" />
        </div>

        {/* Notifications */}
        <div className="relative">
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-black cursor-pointer">
            <Bell size={18} className="text-white" />
          </div>
          <span className="absolute -top-1 -right-1 bg-purple-200 text-black text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
            2
          </span>
        </div>

        {/* Avatar */}
        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-yellow-500 text-white font-bold cursor-pointer">
          {initials}
        </div>
      </div>
    </header>
  );
};

export default Header;
