import { useEffect } from 'react';
import Footer from '../../Footer';
import Navbar from '../../NavBar';

const TravelTourism = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="dark:bg-[#FEFAF6]">
            <Navbar />
            <div className="relative w-full h-[20rem]">
                <img
                    src="/assets/images/industries/travel-banner.jpg"
                    className="w-full h-full top-0 object-cover absolute"
                    alt="travel-banner"
                />
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl lexend-bold">
                    TRAVEL & TOURISM
                </h1>
            </div>

            <div className="flex items-center justify-center mt-10 px-32 gap-10">
                <div>
                    <p className="text-gray-500 dark:text-gray-800 mt-5">
                        Mobile devices lend themselves to travel apps. Planes,
                        trains and automobiles all have apps that support their
                        schedules, routes and navigation.Virtu Tech Solutions
                        PVT LTD. can create travel based apps which use schedule
                        or location data to improve or enhance the user’s
                        journey.
                    </p>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Transport businesses are also starting to use mobile
                        devices as a way of tracking their vehicles, scheduling
                        journeys and monitoring cargo.
                    </p>
                    <ul className="list-disc list-inside text-gray-500 dark:text-gray-800 mt-5 space-y-4">
                        <li>Trail Tracker</li>
                        <li>Car Maintenance</li>
                        <li>Car Wash Claim</li>
                        <li>Car Park Locator</li>
                        <li>Petrol Station Locator</li>
                        <li>Vehicle Tracking</li>
                        <li>Cheap Fuel Finder</li>
                    </ul>
                </div>
                <img
                    src="/assets/images/industries/travel.svg"
                    alt="Travel-Img"
                    className="h-[35rem] w-[35rem] mb-5 mt-5 rounded-md object-fit"
                />
            </div>
            <Footer />
        </div>
    );
};

export default TravelTourism;
