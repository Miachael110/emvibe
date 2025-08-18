import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Grid,
  Calendar,
  Activity,
  Menu,
  Book,
  LogOut,
  MessageSquare,
  X,
} from "lucide-react";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();

  // Navigation
  const navItems = [
    { id: "dashboard", icon: Grid, name: "Dashboard", path: "/dashboard" },
    { id: "calendar", icon: Calendar, name: "Calendar", path: "/calendar" },
    { id: "activity", icon: Activity, name: "Activity", path: "/activity" },
    { id: "menu", icon: Menu, name: "Menu", path: "/menu" },
    { id: "book", icon: Book, name: "Book", path: "/book" },
  ];
  const chatboardItems = [
    { id: "chatboard", icon: MessageSquare, name: "Chatboard", path: "/chatboard" },
    { id: "session", icon: MessageSquare, name: "Session", path: "/chatboard/session" },
  ];

  const isActive = (path) =>
    location.pathname === path || (path === "/dashboard" && location.pathname === "/");

  return (
    <aside
      className={`bg-[#202125] text-white flex flex-col h-screen w-64
      fixed md:sticky inset-y-0 left-0 z-50 transform
      ${isOpen ? "translate-x-0" : "-translate-x-full"}
      md:translate-x-0 transition-transform duration-300 ease-in-out`}
    >
      {/* Mobile Close Button */}
      <div className="flex items-center justify-between h-16 border-b border-gray-700 px-4 md:hidden">
        <h1 className="text-xl font-bold">MyApp</h1>
        <button onClick={() => setIsOpen(false)}>
          <X size={22} />
        </button>
      </div>

      {/* Logo (desktop) */}
      <div className="hidden md:flex items-center justify-center h-16 border-b border-gray-700">
        <h1 className="text-xl font-bold">Emvibe</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-6 overflow-y-auto">
        {/* Main Pages */}
        <div>
          <h2 className="text-gray-400 text-xs uppercase tracking-wider mb-2">Main</h2>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors
                  ${
                    isActive(item.path)
                      ? "bg-[#EFECFE] text-[#202125]"
                      : "text-gray-300 hover:bg-[#EFECFE]/20 hover:text-white"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                <Icon size={20} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Chatboard */}
        <div>
          <h2 className="text-gray-400 text-xs uppercase tracking-wider mb-2">Chat</h2>
          {chatboardItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors
                  ${
                    isActive(item.path)
                      ? "bg-[#EFECFE] text-[#202125]"
                      : "text-gray-300 hover:bg-[#EFECFE]/20 hover:text-white"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                <Icon size={20} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-700">
        <button
          onClick={() => alert("Logout")}
          className="flex items-center gap-3 w-full px-3 py-2 rounded-lg text-gray-300 hover:bg-[#EFECFE]/20 hover:text-white transition-colors"
        >
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
