const Collaboration = () => {
    return (
        <div className="flex text-white items-center justify-center w-full gap-x-[2rem] p-16 ">
            <h1 className="lexend-bold text-4xl text-center flex flex-col">
                Looking for a collaboration? <br />{' '}
                <span className="text-start">Get Started Today!</span>
            </h1>
            <hr className="border-white border-t-4 w-[15%]" />
            <a
                href="mailto:info@virtutechsolutions.com"
                className="transition duration-300 ease-in-out hover:text-blue-400"
            >
                <h1 className="text-3xl lexend-bold">
                    info@virtutechsolutions.com
                </h1>
            </a>
        </div>
    );
};

export default Collaboration;
