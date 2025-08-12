import React, { useState } from "react";
import { dashboardData } from "../data/dashboardData";
import { Search, Settings, Bell } from "lucide-react";

const Header = ({ user , sidebarOpen, setSidebarOpen }) => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    
    <header className="bg-[#F8F8FC] border-b border-gray-200 px-4 py-2 flex items-center justify-between ml-20 rounded-xl mr-3">
      {/* Left - App Name */}
      <div className="flex items-center space-x-2">
        <div className="w-5 h-5 bg-yellow-200 rounded-sm"></div>
        <h1 className="text-sm font-medium text-gray-800">
          {user?.name || "Guest"}
        </h1>
      </div>

      {/* Right - Icons & Search */}
      <div className="flex items-center space-x-3">
        <div className="flex items-center">
          <Search
            size={18}
            className="text-gray-500 cursor-pointer"
            onClick={() => setShowSearch(!showSearch)}
          />
          <input
            type="text"
            placeholder="Search..."
            className={`transition-all duration-300 ease-in-out border border-gray-200 rounded-lg px-3 py-1 ml-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-300 ${
              showSearch ? "w-40 opacity-100" : "w-0 opacity-0 overflow-hidden"
            }`}
          />
        </div>

        <Settings size={18} className="text-gray-500 cursor-pointer" />
        <Bell size={18} className="text-gray-500 cursor-pointer" />

        <img
          src="https://via.placeholder.com/28"
          alt={user?.name || "avatar"}
          className="w-7 h-7 rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
