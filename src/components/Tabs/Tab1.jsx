import React, { useState } from 'react'

const Tab1 = ({ tabs }) => {

    const [activeTab, setActiveTab] = useState(0);

    return (
        <>
            <div className="w-full">
                <div className="flex">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            className={`${index === activeTab
                                ? 'bg-blue-500 text-white'
                                : 'text-blue-500 hover:bg-blue-100'
                                } py-2 px-4 mr-2 rounded-lg`}
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
                            {tabContent}
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Tab1