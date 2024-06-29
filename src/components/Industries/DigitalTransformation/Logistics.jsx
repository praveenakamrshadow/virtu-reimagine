import { useEffect } from 'react';
import Footer from '../../Footer';
import Navbar from '../../NavBar';

const Logistics = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="dark:bg-[#FEFAF6]">
            <Navbar />
            <div className="relative w-full h-[20rem]">
                <img
                    src="/assets/images/industries/logistics-banner.jpg"
                    className="w-full h-full top-0 object-cover absolute"
                    alt="logistics-banner"
                />
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <h1 className="absolute lexend-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl">
                    LOGISTICS
                </h1>
            </div>

            <div className="flex mt-10 px-32 gap-10">
                <div>
                    <p className="text-gray-500 dark:text-gray-800 mt-5">
                        The logistics industry, like most modern businesses, is
                        continually transforming and evolving to meet the
                        demands of new technologies that are constantly being
                        developed, launched, and put into use. Plus, the
                        increasing popularity of functional mobile apps is
                        affecting businesses worldwide, including those
                        operating in logistics.
                    </p>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Everyday there are more and more companies who are
                        demanding and requiring the assistance of a reliable
                        logistics app for their business which can be integrated
                        into every stage of the supply chain – and not just for
                        tracking! Plus, a business may appear aesthetically more
                        stable or professional with a custom, up-to-date mobile
                        app. And, customers feel assured by the sophistication
                        of an efficiently designed app.
                    </p>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        The trucking, shipping, oil & gas, and many other
                        industries have been realizing the benefits of using GPS
                        technologies for years. Additionally, the same types of
                        technologies that enable you to map out the quickest
                        route to your office and track your fuel consumption
                        history are now being applied to logistics solutions –
                        making it easier, safer, and much more cost-effective to
                        perform effective and reliable transportation and
                        distribution. These new technologies, which include the
                        next generation of mobile apps, will continue to expand
                        and improve the logistics industry while minimizing
                        transportation and production costs across the board.
                    </p>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        What do logistics mobile apps help with?
                    </h1>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Perhaps the biggest advantage with implementing a
                        logistic mobile app is the ability to deliver and
                        receive crucial data in real-time to both business
                        employees and customers. Apps can also be used to record
                        and store valuable data which can yield more responsive
                        business decisions. This makes it easier to perform
                        accounting, billing, and regulatory reporting tasks. In
                        addition, paper waste is eliminated, manpower is
                        reduced, and human error is diminished. Which in turn
                        will improve profitability and will enhance your bottom
                        line.
                    </p>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Also, access to accurate tracking and notifications
                        which can be sent automatically at each stage of
                        transportation will enable individual employees to be
                        tracked with the built-in GPS enabled technology. This
                        means that managers will always have direct contact with
                        their drivers. This can be particularly useful with
                        traffic management. That’s because GPS technology can
                        allow for real-time road updates which can certainly
                        save you time and money.
                    </p>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Lastly, the opportunities to improve customer service
                        from utilizing logistics mobile apps are virtually
                        endless. With the installation of an app, you can allow
                        customers to track shipments, arrange updates to
                        deliveries, or even live chat with a company
                        representative. Businesses may also use an app interface
                        to communicate their latest product news and offers with
                        their customers.
                    </p>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Virtu Tech Solutions PVT LTD. can help your business’s
                        logistics.
                    </p>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Virtu Tech Solutions PVT LTD. is a full service provider
                        of Logistic App development that has been serving as a
                        gateway to Latin America, the Caribbean, and Europe for
                        over 10 years. We will take out the middle man for you
                        through our proactive IT solutions. This includes making
                        sure all of our staff members are carrying a smartphone
                        at all times, installing GPS tracking in every vehicle,
                        ensuring our customers get the most efficient and
                        cost-effective service, and more! Contact Us today.
                    </p>
                </div>
                <img
                    src="/assets/images/industries/logistics.svg"
                    alt="Logistics-Img"
                    className="h-[35rem] w-[35rem] mt-5 rounded-md object-fit"
                />
            </div>
            <Footer />
        </div>
    );
};

export default Logistics;
