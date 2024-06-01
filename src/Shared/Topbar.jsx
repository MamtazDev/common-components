import React from 'react'

const Topbar = () => {
    return (
        <>
            <div className="flex justify-between w-auto py-3 px-6 bg-gray-50 border-b space-x-6">
                <form action="" className="w-full max-w-md">
                    <div className="relative flex items-center text-gray-400 focus-within:text-gray-600">
                        <svg className="w-5 h-5 absolute ml-3 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21W1l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input type="text" name="search" placeholder="Search talk" autoComplete="off" aria-label="Search talk" className="w-full pr-3 pl-10 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2" />
                    </div>
                </form>
                
            </div>
        </>
    )
}

export default Topbar