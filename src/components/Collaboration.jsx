const Collaboration = () => {
    return (
        <div className="flex text-white dark:text-black dark:bg-[#F1F0E8] items-center justify-center flex-col lg:flex-row lg:items-center lg:justify-center md:flex-col md:items-center md:justify-center sm:flex-col sm:items-center sm:justify-center p-8 lg:gap-x-8 md:gap-4 sm:gap-4">
            <h1 className="lexend-bold text-4xl lg:text-4xl md:text-3xl sm:text-xl text-center mb-8">
                Looking for a collaboration? <br /> Get Started Today!
            </h1>
            <hr className="border-white dark:border-black border-t-4 w-[15%] my-4" />
            <a
                href="mailto:info@virtutechsolutions.com"
                className="transition duration-300 ease-in-out hover:text-[#4A6CF7] lg:text-3xl md:text-lg sm:text-lg lexend-bold"
            >
                info@virtutechsolutions.com
            </a>
        </div>
    );
};

export default Collaboration;
