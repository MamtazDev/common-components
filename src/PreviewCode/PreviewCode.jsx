/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const PreviewCode = ({ design, code, text }) => {

    const [activeTab, setActiveTab] = useState('design');

    return (
        <div className='mt-[50px] w-full'>
            <h3 className='font-bold'>***{text}</h3>
            <div className="flex border-b">
                <button
                    className={`px-4 py-2 text-sm ${activeTab === 'design' ? 'border-b-2 border-orange-500' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('design')}
                >
                    Preview
                </button>
                <button
                    className={`px-4 py-2 text-sm ${activeTab === 'code' ? 'border-b-2 border-orange-500' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('code')}
                >
                    Code
                </button>
            </div>
            <div className="p-4 border mt-5 w-full">
                {activeTab === 'design' && (
                    <div>
                        {design}
                    </div>
                )}
                {activeTab === 'code' && (
                    <div>
                        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-scroll w-[100%]">
                            <code>
                                {code}
                            </code>
                        </pre>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PreviewCode;
