import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Topbar from './Topbar'
import sidebarData from '../utils/sidebardata';

const Sidebar = () => {


    const [openSections, setOpenSections] = useState({});

    const toggleSection = (name) => {
        setOpenSections((prev) => ({
            ...prev,
            [name]: !prev[name],
        }));
    };
    return (
        <>

            <div className="flex min-h-screen">
                <div className="w-64 bg-gray-50 border-r border-gray-200">

                    <div className="py-4 px-6">
                        <a href="/" className='font-bold text-[24px] text-center '>
                            Easy Pissy
                        </a>
                    </div>


                    <div className="mb-10">
                        {sidebarData.map((section) => (
                            <div key={section.name} className='mb-5'>
                                <h3
                                    className="mx-6 mb-2 text-xs font-bold text-gray-600 uppercase tracking-widest cursor-pointer"
                                    onClick={() => toggleSection(section.name)}
                                >
                                    {section.name}
                                </h3>
                                {openSections[section.name] && (
                                    <div className='ms-3 mb-5'>
                                        {section.subList.map((subItem) => (
                                            <div key={subItem} className='border-l'>
                                                <Link
                                                    key={subItem.name}
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


                <div className="flex-1">
                    <Topbar />
                    <main className='mt-10 ms-5'>
                        <Outlet />
                    </main>
                </div>
            </div>

        </>
    )
}

export default Sidebar