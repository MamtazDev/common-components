
import React, { useState } from 'react';
import headerData from '../../utils/headerData';

const Header3 = () => {
    
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [flyoutMenuOpen, setFlyoutMenuOpen] = useState(false);

    return (
        <div>
            <div className="relative bg-black">
                <div className="flex justify-between items-center px-4 py-2 sm:px-6 md:justify-start md:space-x-10">
                    <div className="lg:w-0 lg:flex-1">
                        <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg" alt="Workflow" />
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100  focus:bg-transparent  transition duration-150 ease-in-out">
                            {!mobileMenuOpen ? "☰" : "✕"}
                        </button>
                    </div>
                    <nav className="hidden md:flex space-x-10">
                        {headerData.map((item, index) => (
                            <div key={index} className="relative">
                                <a href={item.path} className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-300">{item.name}</a>
                            </div>
                        ))}
                        <div className="relative">
                            <button type="button" onClick={() => setFlyoutMenuOpen(!flyoutMenuOpen)} className="inline-flex items-center space-x-2 text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-300">
                                <span>Solutions</span>
                                <svg className={`h-5 w-5 ${flyoutMenuOpen ? 'text-gray-900' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                            {flyoutMenuOpen && (
                                <div className="absolute left-0 mt-3 w-64 transform translate-x-0 md:left-1/2 md:-translate-x-1/2">
                                    <ul className="bg-white shadow-md rounded-md py-2 px-3">
                                        <li><a href="#" className="block text-gray-700 hover:text-indigo-600 py-1">Solution 1</a></li>
                                        <li><a href="#" className="block text-gray-700 hover:text-indigo-600 py-1">Solution 2</a></li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </nav>
                    <div className="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
                        <a href="#" className="whitespace-no-wrap text-base leading-6 font-medium text-gray-300 hover:text-gray-900">Sign in</a>
                        <a href="#" className="whitespace-no-wrap text-base leading-6 font-medium text-gray-300 hover:text-gray-900">Sign up</a>
                    </div>
                </div>
                {mobileMenuOpen && (
                    <div className="absolute top-[45px] inset-x-0  transition transform origin-top-right md:hidden">
                        <div className="bg-black shadow-md rounded-md px-4 pt-5 pb-4 overflow-hidden sm:p-6">

                            <h3 className="text-lg leading-6 font-medium text-gray-900">Menu</h3>
                            <div className="mt-2">
                                {headerData.map((item, index) => (
                                    <a key={index} href={item.path} className="block text-base text-white hover:text-indigo-600">
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Header3;
