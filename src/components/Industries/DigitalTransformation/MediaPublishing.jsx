import { useEffect } from 'react';
import Footer from '../../Footer';
import Navbar from '../../NavBar';

const MediaPublishing = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="dark:bg-[#FEFAF6]">
            <Navbar />
            <div className="relative w-full h-[20rem]">
                <img
                    src="/assets/images/industries/media-banner.jpg"
                    className="w-full h-full top-0 object-cover absolute"
                    alt="media-banner"
                />
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl lexend-bold">
                    MEDIA & PUBLISHING
                </h1>
            </div>

            <div className="flex items-center mt-5 px-32 gap-10">
                <div>
                    <p className="text-gray-500 dark:text-gray-800 mt-5">
                        Apps are a great place to access a large amount of
                        published content on the go. You can search for industry
                        specific news articles, journals or references at the
                        touch of a button and email them directly to yourself
                        and colleagues.
                    </p>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Apps can be security enabled or made available to the
                        general public, depending on the information being
                        provided.
                    </p>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Virtu Tech Solutions PVT LTD. have experience of
                        creating apps for children’s books and science
                        publications to enhance the user’s knowledge
                    </p>
                    <ul className="list-disc list-inside text-gray-500 dark:text-gray-800 mt-5 space-y-4">
                        <li>Sharing Articles</li>
                        <li>Search And Save</li>
                        <li>Reference Apps</li>
                        <li>Children's Books</li>
                        <li>CNews Articles</li>
                        <li>Subscriptions</li>
                    </ul>
                </div>
                <img
                    src="/assets/images/industries/media.svg"
                    alt="Media-Img"
                    className="h-[35rem] w-[35rem] mb-5 mt-object-fit"
                />
            </div>
            <Footer />
        </div>
    );
};

export default MediaPublishing;
