import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Grid, Calendar, Activity, Menu, Book, LogOut } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  
  const navItems = [
    { id: "dashboard", icon: Grid, name: "Dashboard", path: "/dashboard" },
    { id: "calendar", icon: Calendar, name: "Calendar", path: "/calendar" },
    { id: "activity", icon: Activity, name: "Activity", path: "/activity" },
    { id: "menu", icon: Menu, name: "Menu", path: "/menu" },
    { id: "book", icon: Book, name: "Book", path: "/book" },
  ];

  const isActive = (path) => {
    return location.pathname === path || (path === "/dashboard" && location.pathname === "/");
  };

  return (
    <aside className="bg-[#202125] max-h-[525px] text-white flex flex-col items-center py-4 w-14 rounded-2xl sticky left-0 top-3 mx-3">
      {/* Top Icons */}
      <nav className="flex-1 flex flex-col items-center gap-6 mt-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.id}
              to={item.path}
              className={`p-2 rounded-lg transition-colors ${
                isActive(item.path)
                  ? "bg-[#EFECFE] text-[#202125]"
                  : "text-gray-400 hover:bg-[#EFECFE]/20 hover:text-white"
              }`}
              title={item.name}
            >
              <Icon size={18} />
            </Link>
          );
        })}
      </nav>

      {/* Bottom Logout */}
      <button
        onClick={() => alert("Logout")}
        className="p-2 rounded-lg text-gray-400 hover:bg-[#EFECFE]/20 hover:text-white mb-2"
        title="Logout"
      >
        <LogOut size={18} />
      </button>
    </aside>
  );
};


export default Sidebar;