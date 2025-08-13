import React, { useState } from "react";
import { dashboardData } from "../data/dashboardData";
import { Search, Settings, Bell } from "lucide-react";

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  const [showSearch, setShowSearch] = useState(false);
  const { user } = dashboardData;

  // Generate avatar initials
  const initials = user?.name ? user.name.charAt(0).toUpperCase() : "G";

  return (
    <header className="bg-[#F8F8FC] border-b border-gray-200 px-4 py-2 flex items-center justify-between ml-20 rounded-xl mr-3">
      {/* Left - Name */}
      <div className="flex items-center space-x-2">
        <div className="w-5 h-5 bg-yellow-200 rounded-sm"></div>
        <h1 className="text-sm font-medium text-gray-800">
          {user?.name || "Guest"}
        </h1>
      </div>

      {/* Right - Icons */}
      <div className="flex items-center space-x-3">
        {/* Search Icon */}
        <div
          className="w-9 h-9 flex items-center justify-center rounded-full bg-purple-100 cursor-pointer"
          onClick={() => setShowSearch(!showSearch)}
        >
          <Search size={18} className="text-gray-700" />
        </div>

        {/* Settings Icon */}
        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-yellow-100 cursor-pointer">
          <Settings size={18} className="text-gray-700" />
        </div>

        {/* Notification Icon with Badge */}
        <div className="relative">
          <div className="w-9 h-9 flex items-center justify-center rounded-full bg-black cursor-pointer">
            <Bell size={18} className="text-white" />
          </div>
          <span className="absolute -top-1 -right-1 bg-purple-200 text-black text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
            2
          </span>
        </div>

        {/* Avatar - Name Initial */}
        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-yellow-500 text-white font-bold cursor-pointer">
          {initials}
        </div>
      </div>
    </header>
  );
};

export default Header;
