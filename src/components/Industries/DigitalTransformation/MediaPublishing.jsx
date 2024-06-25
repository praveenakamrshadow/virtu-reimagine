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
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUUGMO8v1YxhmAmNfQ_3xg-LGZ8c3emfX6_A&s"
                    className="w-full h-full top-0 object-cover absolute"
                    alt=""
                />
                <h1 className="absolute top-40 left-[40rem] text-white text-4xl">
                    MEDIA & PUBLISHING
                </h1>
            </div>

            <div className="flex mt-10 px-32 gap-10">
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
                    src="https://img.freepik.com/free-vector/podcast-social-media-concept_23-2148642674.jpg?t=st=1719301572~exp=1719305172~hmac=22beb9c1c34106114cc2eeca28c4ca0181dd55748042f04ff61f6f443d5c18ce&w=996"
                    alt=""
                    className="h-[35rem] w-[35rem] mb-5 mt-5 rounded-md object-fit"
                />
            </div>
            <Footer />
        </div>
    );
};

export default MediaPublishing;
