import React, { useState } from 'react';

const Tab2 = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <>
            <div className="w-full">
                <div className="flex border-b">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            className={`px-4 py-2 text-sm ${activeTab === index ? 'border-b-2 border-orange-500 text-black' : 'text-gray-500'}`}
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
                            className={`${index === activeTab ? '' : 'hidden'}`}
                        >
                            {`Content for ${tabContent}`}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Tab2;
