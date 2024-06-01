import React, { useState } from 'react'

const Accordion1 = ({ data }) => {

    const [selected, setSelected] = useState(null);

    const toggle = (index) => {
        if (selected === index) {
            return setSelected(null);
        }
        setSelected(index);
    };

    return (
        <div>
            <div className="bg-white max-w-full mx-auto border mb-5 border-gray-200">

                <ul className="shadow-box">
                    {data?.map((item, index) => (
                        <li className="relative border-b border-gray-200 " key={index}>
                            <button
                                type="button"
                                className="w-full px-6 py-6 text-left focus:outline-none"
                                onClick={() => toggle(index)}
                            >
                                <div className="flex items-center justify-between">
                                    <span className='font-bold'>{item.question}</span>
                                    <svg
                                        className={`w-5 h-5 text-gray-500 transition-transform transform ${selected === index ? 'rotate-180' : ''}`}
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </div>
                            </button>
                            <div
                                className={`relative overflow-hidden transition-all duration-300 ${selected === index ? 'max-h-screen' : 'max-h-0'}`}
                                style={{
                                    maxHeight: selected === index ? `${item.contentHeight}px` : '0',
                                }}
                                ref={(el) => {
                                    if (el && selected === index) {
                                        item.contentHeight = el.scrollHeight;
                                    }
                                }}
                            >
                                <div className="px-6 pb-6">
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Accordion1