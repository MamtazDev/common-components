import React from 'react'
import PreviewCode from '../../PreviewCode/PreviewCode';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';

const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];
const tabs2 = ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4', 'Tab 5'];

const Tabs = () => {

    const code1 = `

    const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];

    import React, { useState } from 'react';

    
    const Tab1 = ({ tabs }) => {
        const [activeTab, setActiveTab] = useState(0);
    
        return (
            <>
                <div className="w-full">
                    <div className="flex">
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                className={\`\${index === activeTab ? 'bg-blue-500 text-white' : 'text-blue-500 hover:bg-blue-100'} py-2 px-4 mr-2 rounded-lg\`}
                                onClick={() => setActiveTab(index)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <div className="mt-4">
                        {tabs.map((tabContent, index) => (
                            <div
                                key={index}
                                className={\`\${index === activeTab ? '' : 'hidden'}\`}
                            >
                                {tabContent}
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    };
    
    export default Tab1;
    `;
    const code2 = `
    import React, { useState } from 'react';
    
    const tabs = ['Tab 1', 'Tab 2', 'Tab 3'];
    
    const Tab2 = ({ tabs }) => {
        const [activeTab, setActiveTab] = useState(0);
    
        return (
            <>
                <div className="w-full">
                    <div className="flex border-b">
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                className={\`px-4 py-2 text-sm \${activeTab === index ? 'border-b-2 border-orange-500 text-black' : 'text-gray-500'}\`}
                                onClick={() => setActiveTab(index)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <div className="mt-4">
                        {tabs.map((tabContent, index) => (
                            <div
                                key={index}
                                className={\`\${index === activeTab ? '' : 'hidden'}\`}
                            >
                                {\`Content for \${tabContent}\`}
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    };
    
    export default Tab2;
    `;
    const code3 = `
    import React, { useRef, useState } from 'react';
    import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
    
    const Tab3 = ({ tabs }) => {
        const [activeTab, setActiveTab] = useState(0);
        const scrollContainerRef = useRef(null);
    
        const handleChange = (index) => {
            setActiveTab(index);
        };
    
        const prevTab = () => {
            if (activeTab > 0) {
                setActiveTab(activeTab - 1);
                scrollToTab(activeTab - 1);
            }
        };
    
        const nextTab = () => {
            if (activeTab < tabs.length - 1) {
                setActiveTab(activeTab + 1);
                scrollToTab(activeTab + 1);
            }
        };
    
        const scrollToTab = (index) => {
            const tabElement = scrollContainerRef.current.children[index];
            const containerWidth = scrollContainerRef.current.offsetWidth;
            const tabWidth = tabElement.offsetWidth;
            const tabOffsetLeft = tabElement.offsetLeft;
            const scrollLeft = tabOffsetLeft - (containerWidth / 2) + (tabWidth / 2);
    
            scrollContainerRef.current.scrollTo({
                left: scrollLeft,
                behavior: 'smooth'
            });
        };
    
        return (
            <div className="w-full overflow-hidden bg-white shadow">
                <div className="flex items-center">
                    <button onClick={prevTab} className="p-2">
                        <FaChevronLeft />
                    </button>
                    <div ref={scrollContainerRef} className="flex overflow-x-auto no-scrollbar">
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                onClick={() => handleChange(index)}
                                className={\`py-2 px-4 whitespace-nowrap \${activeTab === index ? 'border-b-2 border-orange-500 text-black' : 'text-gray-500'}\`}
                                >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <button onClick={nextTab} className="p-2">
                        <FaChevronRight />
                    </button>
                </div>
                <div className="mt-4 p-4">
                    {tabs.map((tab, index) => (
                        <div key={index} className={\`\${index === activeTab ? '' : 'hidden'}\`}>
                            {tab}
                        </div>
                    ))}
                </div>
            </div>
        );
    };
    `;

    return (
        <>
            <PreviewCode text="Tab One" design={<Tab1 tabs={tabs}></Tab1>} code={code1} />
            <PreviewCode text="Tab Two" design={<Tab2 tabs={tabs}></Tab2>} code={code2} />
            <PreviewCode text="Tab Three" design={<Tab3 tabs={tabs2}></Tab3>} code={code3} />

        </>
    )
}

export default Tabs