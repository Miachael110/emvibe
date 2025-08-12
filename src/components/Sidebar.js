import React from "react";
import { Grid, Calendar, Activity, Menu, Book, LogOut } from "lucide-react";

const Sidebar = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { id: "dashboard", icon: Grid, name: "Dashboard" },
    { id: "calendar", icon: Calendar, name: "Calendar" },
    { id: "activity", icon: Activity, name: "Activity" },
    { id: "menu", icon: Menu, name: "Menu" },
    { id: "book", icon: Book, name: "Book" },
  ];

  return (
    <aside className="bg-[#202125] max-h-[525px] text-white flex flex-col items-center py-4 w-14 rounded-2xl sticky left-0 top-3 mx-3">
      {/* Top Icons */}
      <nav className="flex-1 flex flex-col items-center gap-6 mt-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentPage(item.id)}
              className={`p-2 rounded-lg transition-colors ${
                currentPage === item.id
                  ? "bg-[#EFECFE] text-[#202125]"
                  : "text-gray-400 hover:bg-[#EFECFE]/20 hover:text-white"
              }`}
              title={item.name}
            >
              <Icon size={18} />
            </button>
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
