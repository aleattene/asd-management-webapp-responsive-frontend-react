import { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

function DashboardLayout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
    const closeSidebar = () => setSidebarOpen(false);

    return (
        <div className="flex h-screen w-full bg-gradient-to-b from-blue-700 to-orange-400">
            {/* Overlay: visible only on small devices and sidebar is open*/}
            <div
                className={`${sidebarOpen ? "block" : "hidden"} fixed inset-0 z-20 transition-opacity bg-gradient-to-b from-blue-700 to-orange-400 pl-4 opacity-95 lg:hidden`}
                onClick={closeSidebar}
            ></div>

            {/* Sidebar */}
            <div
                className={`
          p-3 fixed inset-y-0 left-0 z-30 w-72 overflow-y-auto transition duration-300 transform border-r border-gray-700 shadow-2xl

          
          ${sidebarOpen ? "translate-x-0 ease-out" : "-translate-x-full ease-in"}
          lg:translate-x-0 lg:static lg:inset-0
        `}
            >
                <Sidebar closeSidebar={closeSidebar} />
            </div>

            {/* Main Area (Header + Dashboard Table) */}
            <div className="flex flex-col flex-1 overflow-hidden tracking-wider">
                <Header toggleSidebar={toggleSidebar} />
                <main
                    id="dashboard"
                    className="flex-1 overflow-x-hidden overflow-y-auto"
                >
                    {children}
                </main>
            </div>
        </div>
    );
}

export default DashboardLayout;