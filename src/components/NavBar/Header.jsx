/* eslint-disable no-undef */
import PreviewCode from "../../PreviewCode/PreviewCode";
import Header1 from "./Header1";
import headerData from "../../utils/headerData";
import Header2 from "./Header2";
import Header3 from "./Header3";

const Header = () => {

    const code1 = `
    import React, { useState } from 'react';
    
    const Header1 = ({ headerData }) => {
        
        const [isMenuOpen, setIsMenuOpen] = useState(false);
    
        const toggleMenu = () => {
            setIsMenuOpen(!isMenuOpen);
        };
    
        return (
            <div className="header-1 flex flex-col w-full">
                <nav className="bg-gray-800 px-4 py-2 flex flex-col lg:flex-row lg:items-center flex-shrink-0">
                    <div className="flex justify-between items-center lg:mr-32">
                        <span className="text-white text-xl">FWR</span>
                        <button
                            className="px-2 py-1 rounded text-white opacity-50 hover:opacity-75 lg:hidden"
                            onClick={toggleMenu}
                        >
                            {isMenuOpen ? "✕" : "☰"}
                        </button>
                    </div>
                    <div
                        className={\`lg:flex flex-grow \${isMenuOpen ? 'flex' : 'hidden'} flex-col lg:flex-row justify-center text-center items-center\`}
                    >
                        <ul className="flex flex-col mt-3 mb-1 lg:flex-row lg:mx-auto lg:mt-0 lg:mb-0">
                            {headerData.map((item) => (
                                <li key={item.name}>
                                    <a href={item.path} className="block text-gray-500 hover:text-gray-300 py-2 md:mx-2">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex my-3 lg:my-0">
                            <button className="bg-transparent hover:bg-white text-white hover:text-gray-900 py-1 px-3 rounded border border-solid border-white mr-2">
                                Sign In
                            </button>
                            <button className="bg-purple-700 hover:bg-purple-800 text-white py-1 px-3 rounded border border-solid border-purple-700 hover:border-purple-800">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </nav>
            </div>
        );
    };
    
    export default Header1;
    `;

    const code2 = `
import React, { useState } from 'react';

const Header2 = ({ headerData }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="header-1 flex flex-col w-full">
            <nav className="bg-gray-800 px-4 py-2 flex flex-col lg:flex-row justify-between lg:items-center flex-shrink-0">
                <div className="flex justify-between items-center lg:mr-32">
                    <span className="text-white text-xl">Demo Two</span>
                    <button
                        className="px-2 py-1 rounded text-white opacity-50 hover:opacity-75 lg:hidden"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? "✕" : "☰"}
                    </button>
                </div>
                <div
                    className={\`lg:flex \${isMenuOpen ? 'flex' : 'hidden'} flex-col lg:flex-row justify-center text-center items-center\`}
                >
                    <ul className="flex flex-col mt-3 mb-1 lg:flex-row lg:mx-auto lg:mt-0 lg:mb-0">
                        {headerData.map((item) => (
                            <li key={item.name}>
                                <a href={item.path} className="block text-gray-500 hover:text-gray-300 py-2 md:mx-2">
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header2;
`;

    return (
        <>
            <PreviewCode text="Header One" design={<Header1 headerData={headerData}></Header1>} code={code1} />
            <PreviewCode text="Header Two" design={<Header2 headerData={headerData}></Header2>} code={code2} />
            <PreviewCode text="Header Three" design={<Header3 headerData={headerData}></Header3>} code={code2} />
        </>
    );
};

export default Header;
