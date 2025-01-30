"use client";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { FaTh, FaTags, FaDollarSign, FaSignOutAlt } from "react-icons/fa";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  const navigateToView = (view) => {
    if (view === "dashboard") {
      router.push("/dashboard");
    } else {
      router.push(`/dashboard/${view}`);
    }
  };

  return (
    <div className="flex bg-black min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-16"
        } bg-black h-full  transition-all duration-300 flex flex-col`}
      >
        <div className="flex items-center justify-between px-4 py-4 bg-black mb-12 ">
          <div className="flex items-center space-x-2">
            <span
              className={`text-lg font-semibold text-white ${
                sidebarOpen ? "block" : "hidden"
              }`}
            >
              Admin Panel
            </span>
          </div>
          <button
            className="text-2xl focus:outline-none text-white"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            &#9776;
          </button>
        </div>
        <nav className="mt-4 space-y-2 px-2 flex-grow">
          {[
            { name: "Dashboard", icon: FaTh, path: "dashboard" },
            { name: "Course", icon: FaTags, path: "course" },
            { name: "Manage Users", icon: FaDollarSign, path: "users" },
          ].map((item) => (
            <button
              key={item.path}
              className={`w-full flex items-center space-x-4 text-left px-4 py-3 rounded-lg transition-all duration-200 font-medium ${
                pathname === `/dashboard/${item.path}` ||
                (item.path === "dashboard" && pathname === "/dashboard")
                  ? "bg-[#ec9941] text-black" // Active item with brown background
                  : "bg-transparent hover:bg-black-200" // Non-active items with no background
              }`}
              onClick={() => navigateToView(item.path)}
            >
              <item.icon
                className={`${
                  pathname === `/dashboard/${item.path}` ||
                  (item.path === "dashboard" && pathname === "/dashboard")
                    ? "text-white"
                    : "text-gray-500"
                }`}
              />
              <span className={`${sidebarOpen ? "block" : "hidden"}`}>
                {item.name}
              </span>
            </button>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="mt-80 mb-4">
          <button className="w-full flex items-center space-x-4 text-left px-4 py-3 rounded-lg  text-red-600 transition-all duration-200 font-medium">
            <FaSignOutAlt className="text-red-600" />
            <span className={`${sidebarOpen ? "block" : "hidden"}`}>
              Logout
            </span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen">
        <div className="flex-1">{children}</div>{" "}
      </main>
    </div>
  );
}
