import React from 'react'
import { BsArrowRight } from 'react-icons/bs'


const ButtonWithHoverIcon = ({ children }) => {
    return (

        <button className=" transition-all w-[151px] hover:w-[170px] duration-300  flex items-center gap-3 justify-center ease-in-out  bg-orange-500 hover:bg-orange-700 rounded p-3 group text-white">{children} <BsArrowRight className='hidden group-hover:block  ' /> </button>
    )
}

export default ButtonWithHoverIcon