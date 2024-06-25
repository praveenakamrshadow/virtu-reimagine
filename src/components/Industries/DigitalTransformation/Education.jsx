import { useEffect } from 'react';
import Footer from '../../Footer';
import Navbar from '../../NavBar';

const Education = () => {
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
                <h1 className="absolute top-40 left-[43.5rem] text-white text-4xl">
                    EDUCATION
                </h1>
            </div>

            <div className="flex mt-10 px-32 gap-10">
                <div>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        The Rise of Educational Apps
                    </h1>
                    <p className="text-gray-500 dark:text-gray-800 mt-5">
                        In today’s digital era, there is an increasing demand
                        for interactive learning tools. Education and teaching
                        facilities are now equipping students with smartphones
                        and tablets, allowing them to work and study more
                        efficiently. This trend has opened up exciting
                        possibilities for the development of higher education
                        apps and internal training apps for companies.
                    </p>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        Our Expertise
                    </h1>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        At Virtu Tech Solutions, we have a team of skilled
                        professionals who excel in building educational apps for
                        various levels and purposes. Our expertise includes:
                    </p>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        Tutorials
                    </h1>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Our educational apps offer comprehensive tutorials that
                        cover a wide range of subjects. Whether it’s learning a
                        new language, mastering a musical instrument, or
                        understanding complex scientific concepts, our tutorials
                        are designed to make learning fun and accessible.
                    </p>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        Example Exam Papers
                    </h1>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Preparing for exams can be a daunting task. Our apps
                        provide access to a vast library of example exam papers,
                        giving students the opportunity to practice and
                        familiarize themselves with the format and content of
                        their upcoming exams.
                    </p>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        IQ Tests
                    </h1>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Boost your cognitive abilities with our interactive IQ
                        tests. Designed to challenge and stimulate the mind, our
                        IQ tests measure various aspects of intelligence,
                        including logical reasoning, analytical thinking, and
                        problem-solving skills.
                    </p>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        Interactive Learning Games
                    </h1>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Learning through play is a powerful tool. Our
                        interactive learning games engage users with captivating
                        visuals and intuitive gameplay, making the learning
                        experience both enjoyable and effective. From early
                        childhood education to advanced subjects, our games
                        cater to a wide range of educational needs.
                    </p>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        Mathematical Calculations
                    </h1>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Mathematics can be intimidating for many students. Our
                        mathematical calculation apps simplify complex formulas
                        and concepts, helping students grasp and apply
                        mathematical principles with ease. From basic arithmetic
                        to advanced calculus, our apps cover a wide range of
                        mathematical topics.
                    </p>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        Note Taking
                    </h1>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Efficient note-taking is essential for effective
                        learning. Our note-taking apps provide a user-friendly
                        interface for organizing and storing lecture notes,
                        research materials, and study resources. With features
                        such as tagging, search functionality, and cloud
                        synchronization, users have all their notes readily
                        accessible across devices.
                    </p>
                </div>
                <img
                    src="https://img.freepik.com/free-vector/learning-concept-illustration_114360-6186.jpg?t=st=1719297937~exp=1719301537~hmac=35d65ad312aaac225cb1315713b28f6c0b6a230127e982550f4e3f029552d0ff&w=740"
                    alt=""
                    className="h-[35rem] w-[35rem] mt-5 rounded-md object-fit"
                />
            </div>
            <Footer />
        </div>
    );
};

export default Education;
