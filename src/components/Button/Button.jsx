
import React from 'react';
import PreviewCode from '../../PreviewCode/PreviewCode';
import Button2 from './Button2';
import Button1 from './Button1';
import Button3 from './Button3';
import ButtonWithHoverIcon from './ButtonWithHoverIcon';

const Button = () => {

    const code1 = `
    import React from 'react';
    const Button = () => {
        const design = (
            <button className='transition-all ease-in-out bg-orange-500 px-4 py-2 rounded-lg text-white
             hover:text-orange-500 hover:bg-white border border-orange-500'>Button One</button>
        )
    }
  `;

    const code2 = `
    import React from 'react';
    const Button = () => {
        const design = (
            <button className='transition-all ease-in-out hover:bg-orange-500
             text-orange-500 hover:text-white px-4 py-2 rounded-lg bg-white border border-orange-500'>Button Two</button>
        )
    }
  `;

    const code3 = `
    import React from 'react';
    const Button = () => {
        const design = (
            <button className='transition-all ease-in-out bg-orange-500 bg-opacity-50 px-4 py-2 rounded-lg text-white hover:text-orange-500 hover:bg-white border border-orange-500 opacity-50' disabled>
                <span className='opacity-100'>Button disabled</span>
            </button>
        )
    }
  `;

    const code4 = `
    import React from 'react'
    import { BsArrowRight } from 'react-icons/bs'
    
    const ButtonWithHoverIcon = ({ children }) => {
        return (
    
            <button className=" transition-all w-[151px] hover:w-[170px] duration-300  
            flex items-center gap-3 justify-center ease-in-out  bg-orange-500 hover:bg-orange-700 
            rounded p-3 group text-white">{children} <BsArrowRight className='hidden group-hover:block  ' /> </button>
        )
    }
    export default ButtonWithHoverIcon`;

    return (
        <>
            <div className=''>
                <PreviewCode text="Button background" design={<Button1>Button One</Button1>} code={code1} />

                <PreviewCode text="Button border" design={<Button2>Button Two</Button2>} code={code2} />

                <PreviewCode text="Button disabled" design={<Button3>Button Three</Button3>} code={code3} />

                <PreviewCode text="Button with hover icon"
                    design={<ButtonWithHoverIcon>Button</ButtonWithHoverIcon>} code={code4} />

            </div>
        </>
    );
};

export default Button;
