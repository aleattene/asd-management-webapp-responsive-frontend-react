import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Logo from "./../Logo/Logo.jsx";

function SidebarItem({ title, children }) {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => setOpen((prev) => !prev);

    return (
        <div>
            <div
                className="flex items-center px-6 py-2 mt-4 text-white font-semibold hover:bg-gray-700 hover:text-[#FF9500] hover:bg-opacity-25 cursor-pointer"
                onClick={toggleOpen}
            >
                <span className="mx-3">{title}</span>
                <span className="ml-auto mr-3">{open ? "-" : "+"}</span>
            </div>
            {open && <div className="ml-6">{children}</div>}
        </div>
    );
}

function Sidebar({ closeSidebar }) {
    const navigate = useNavigate();

    const handleClickLogo = () => navigate("/");

    return (
        <div
            className="fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform
                 lg:translate-x-0 lg:static lg:inset-0"
        >
            <Logo onClick={handleClickLogo} />
            <nav id="sidebar" className="mt-10 tracking-wider">
                <SidebarItem title="Anagrafiche">
                    <Link
                        to="/athletes/"
                        className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-[#FF9500]"
                        onClick={closeSidebar}
                    >
                        Visualizza Atleti
                    </Link>
                    <Link
                        to="/athletes/new/"
                        className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-[#FF9500]"
                        onClick={closeSidebar}
                    >
                        Aggiungi Atleta
                    </Link>
                    <Link
                        to="/trainers/"
                        className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-[#FF9500]"
                        onClick={closeSidebar}
                    >
                        Visualizza Allenatori
                    </Link>
                    <Link
                        to="/trainers/new"
                        className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-[#FF9500]"
                        onClick={closeSidebar}
                    >
                        Aggiungi Allenatore
                    </Link>
                    <Link
                        to="/sport-doctors/"
                        className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-[#FF9500]"
                        onClick={closeSidebar}
                    >
                        Visualizza Medici Sportivi
                    </Link>
                    <Link
                        to="/sport-doctors/new"
                        className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-[#FF9500]"
                        onClick={closeSidebar}
                    >
                        Aggiungi Medico Sportivo
                    </Link>
                </SidebarItem>
                <SidebarItem title="Pagamenti">
                    <Link
                        to="/payments/"
                        className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-[#FF9500]"
                        onClick={closeSidebar}
                    >
                        Visualizza Compensi Allenatore
                    </Link>
                    <Link
                        to="/payments/new"
                        className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-[#FF9500]"
                        onClick={closeSidebar}
                    >
                        Aggiungi Compenso Allenatore
                    </Link>
                </SidebarItem>
                <SidebarItem title="Documentazione">
                    <Link
                        to="/sport-certificates/"
                        className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-[#FF9500]"
                        onClick={closeSidebar}
                    >
                        Visualizza Certificati Medici
                    </Link>
                    <Link
                        to="/sport-certificates/new"
                        className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-[#FF9500]"
                        onClick={closeSidebar}
                    >
                        Aggiungi Certificato Medico
                    </Link>
                </SidebarItem>
                <SidebarItem title="Bandi Sportivi">
                    <Link
                        to="#"
                        className="block px-4 py-2 text-white hover:bg-gray-700 hover:text-[#FF9500]"
                        onClick={closeSidebar}
                    >
                        Legge 17/1999 Art.22
                    </Link>
                </SidebarItem>
            </nav>
        </div>
    );
}

export default Sidebar;

