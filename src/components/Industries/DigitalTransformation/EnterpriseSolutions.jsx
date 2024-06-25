import { useEffect } from 'react';
import Footer from '../../Footer';
import Navbar from '../../NavBar';

const EnterpriseSolutions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="dark:bg-[#FEFAF6]">
            <Navbar />
            <div className="relative w-full h-[20rem]">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUUGMO8v1YxhmAmNfQ_3xg-LGZ8c3emfX6_A&s"
                    className="w-full h-full top-0 object-cover absolute"
                    alt=""
                />
                <h1 className="absolute top-40 left-[36rem] text-white text-4xl">
                    ENTERPRISE SOLUTIONS
                </h1>
            </div>

            <div className="flex mt-10 px-32 gap-10">
                <div>
                    <p className="text-gray-500 dark:text-gray-800 mt-5">
                        Many of our clients are medium and large corporate who
                        need the ability to manage and secure their smart phones
                        across the Enterprise. Virtu Tech Solutions PVT LTD.
                        works closely with IT administrators who need to provide
                        security and policy compliance whilst maintaining the
                        freedom most users now expect.
                    </p>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Virtu Tech Solutions PVT LTD. has the technology to
                        secure all smart phone platforms enabling IT to manage
                        privileges to run in-house apps or remove them without
                        affecting access to personal information or requiring
                        user interaction.
                    </p>
                    <p className="text-gray-500 dark:text-gray-800 mt-5">
                        Enterprise apps can also be delivered within a secure
                        ‘in-house app store’ using the iPhone Developer
                        Enterprise Programmer. This means we can work with you
                        to deploy proprietary, in-house applications to
                        authorized users in your company. This program is also
                        available to companies with 500 or more employees.
                    </p>
                </div>
                <img
                    src="https://img.freepik.com/free-vector/hand-drawn-business-strategy-with-statistics_23-2149164273.jpg?t=st=1719305616~exp=1719309216~hmac=437d287f0c4ea22863ce362f2ae5156ca0f9781295337bf38f9814377c3439c3&w=826"
                    alt=""
                    className="h-[35rem] w-[35rem] mb-5 mt-5 rounded-md object-fit"
                />
            </div>
            <Footer />
        </div>
    );
};

export default EnterpriseSolutions;
