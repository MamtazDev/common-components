import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Topbar from './Topbar';
import sidebarData from '../utils/sidebardata';

const Sidebar = () => {
    const [openSections, setOpenSections] = useState({});
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSection = (name) => {
        setOpenSections((prev) => ({
            ...prev,
            [name]: !prev[name],
        }));
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex min-h-screen">
            <div className={`fixed inset-0 z-40 md:relative md:inset-auto md:translate-x-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out w-[300px] bg-gray-50 border-r border-gray-200 md:flex flex-col`}>
                <div className="py-4 px-6 flex justify-between items-center md:block">
                    <a href="/" className="font-bold text-[24px] text-center">
                        Easy Pissy
                    </a>
                    <button
                        className="md:hidden text-gray-600"
                        onClick={toggleSidebar}
                    >
                        ✕
                    </button>
                </div>

                <div className="mb-10">
                    {sidebarData.map((section) => (
                        <div key={section.name} className="mb-5">
                            <h3
                                className="mx-6 mb-2 text-xs font-bold text-gray-600 uppercase tracking-widest cursor-pointer"
                                onClick={() => toggleSection(section.name)}
                            >
                                {section.name}
                            </h3>
                            {openSections[section.name] && (
                                <div className="ms-3 mb-5">
                                    {section.subList.map((subItem) => (
                                        <div key={subItem.name} className="border-l">
                                            <Link
                                                to={subItem.path}
                                                className="flex items-center px-6 py-2.5 text-gray-500 hover:text-orange-600 group"
                                            >
                                                {subItem.name}
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex-1 flex flex-col">
                <Topbar />
                <main className="mt-10 mx-5 flex-1">
                    <Outlet />
                </main>
            </div>

            <button
                className="fixed top-4 left-4 z-50 p-2 bg-gray-600 text-white rounded-md md:hidden"
                onClick={toggleSidebar}
            >
                ☰
            </button>
        </div>
    );
};

export default Sidebar;
