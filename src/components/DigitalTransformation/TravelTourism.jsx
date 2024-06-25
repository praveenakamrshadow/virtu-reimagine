import { useEffect } from 'react';
import Footer from '../Footer';
import Navbar from '../NavBar';

const TravelTourism = () => {
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
                <h1 className="absolute top-40 left-[40rem] text-white text-4xl">
                    TRAVEL & TOURISM
                </h1>
            </div>

            <div className="flex mt-10 px-32 gap-10">
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
                    src="https://img.freepik.com/free-vector/travel-concept-with-landmarks_1057-4873.jpg?t=st=1719305975~exp=1719309575~hmac=053f861befb5f00df3f783862a1a91d4757d28e113754bf49aff28240aac51ec&w=740"
                    alt=""
                    className="h-[35rem] w-[35rem] mb-5 mt-5 rounded-md object-fit"
                />
            </div>
            <Footer />
        </div>
    );
};

export default TravelTourism;
