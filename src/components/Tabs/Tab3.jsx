import React, { useRef, useState } from 'react'
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
                            className={`py-2 px-4 whitespace-nowrap ${activeTab === index ? 'border-b-2 border-orange-500 text-black' : 'text-gray-500'}`}
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
                    <div key={index} className={`${index === activeTab ? '' : 'hidden'}`}>
                        {tab}
                    </div>
                ))}
            </div>
        </div>);
}

export default Tab3