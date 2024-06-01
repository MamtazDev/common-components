

const Button3 = ({ children }) => {

    return (
        <>
            <button className='transition-all ease-in-out bg-orange-500 bg-opacity-50 px-4 py-2 rounded-lg text-white hover:text-orange-500 hover:bg-white border border-orange-500 opacity-50' disabled>
                <span className='opacity-100'>{children}</span>
            </button>
             </>
    );
};

export default Button3;
