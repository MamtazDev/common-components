

const Button1 = ({ children }) => {

    return (
        <>
            <button className='transition-all ease-in-out bg-orange-500 px-4 py-2 rounded-lg text-white hover:text-orange-500 hover:bg-white border border-orange-500'>{children}</button>
        </>
    );
};

export default Button1;
