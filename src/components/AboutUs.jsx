import { useEffect } from 'react';
import Footer from './Footer';
import Navbar from './NavBar';
import { FaPeopleGroup } from 'react-icons/fa6';
import { FaRegCheckCircle } from 'react-icons/fa';
import { MdOutlineEngineering } from 'react-icons/md';
import { LuBrainCircuit } from 'react-icons/lu';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const items = [
        {
            title: 'Leadership',
            description:
                'Set trends for your peers to give a competitive edge.',
            icon: <FaPeopleGroup />,
        },
        {
            title: 'Quality Assurance',
            description:
                'Superior quality assurance delivered that match your core ecosystem.',
            icon: <FaRegCheckCircle />,
        },
        {
            title: 'Accountability',
            description:
                'We are accountable for our acts and the outcomes of those actions.',
            icon: (
                <img
                    src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/about/accountability.svg"
                    alt="accountability"
                />
            ),
        },
        {
            title: 'Innovations',
            description:
                'We constantly thrive on new ideas for our clients to stay innovative.',
            icon: <LuBrainCircuit />,
        },
        {
            title: 'Industry Experience',
            description:
                'We offer a competitive edge to our clients that targets various industry domains.',
            icon: <MdOutlineEngineering />,
        },
        {
            title: 'Work-Life Experience',
            description:
                'Latest infrastructure and flexible working hours keeps our work-life balance in loop.',
            icon: (
                <img
                    src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/about/work-life.svg"
                    alt="work-life"
                />
            ),
        },
        {
            title: 'Self-Mastery',
            description:
                'Personal growth is elevated via training programs, interactive sessions, and community gatherings.Personal growth is elevated via training programs, interactive sessions, and community gatherings.',
            icon: (
                <img
                    src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/about/self-mastory.svg"
                    alt="self-mastery"
                />
            ),
        },
        {
            title: 'End-User Support',
            description:
                'Understand and exceed customers expectations all the time.',
            icon: (
                <img
                    src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/about/end-user.svg"
                    alt="end-user"
                />
            ),
        },
        {
            title: 'Quick-Turnaround',
            description:
                'We believe in fast execution to stay a step ahead of our competitors.',
            icon: (
                <img
                    src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/about/quick.svg"
                    alt="turnaround"
                />
            ),
        },
    ];

    return (
        <>
            <div className="bg-[#171E2D] inter">
                <Navbar />
                {/* hero section */}
                <div className="h-full w-full relative text-white">
                    <img
                        src="/public/assets/images/AboutUsBanner.png"
                        alt="AboutUsBanner"
                        className="w-screen h-screen object-fit"
                    />
                    <h1 className="absolute top-28 left-48 tracking-[.25rem] text-2xl lexend-bold text-yellow-600 font-extrabold">
                        WHO WE ARE
                    </h1>
                    <h1 className="absolute top-[10.8rem] left-48 leading-[3.5rem] text-5xl lexend-bold">
                        Transforming Futures: <br /> Virtu Tech Solutions <br />{' '}
                        Your Trusted Digital Partner
                    </h1>
                    <p className="text-gray-400 absolute top-[23.5rem] w-[45%] inter left-48 leading-[1.4rem] text-md">
                        Established in 2009, Virtu Tech Solutions is a global IT
                        services provider with offices in the US and India. We
                        specialize in Banking & Financial Services, Telecom,
                        Healthcare, and more, delivering $10M worth of projects
                        for Fortune 500 companies. Our mission is to drive
                        digital fluency, offering end-to-end solutions and
                        cost-effective strategies using ITIL processes. As a
                        trusted partner to major players, we provide quality,
                        scalable services and custom solutions for a digital
                        future.
                    </p>
                </div>
                <div className="w-full h-full">
                    {/* our mission */}
                    <div className="bg-[#141427]">
                        <div className="flex relative items-center justify-center">
                            <img
                                src="/public/assets/images/mission-img.svg"
                                alt="mission-img"
                                className="opacity-50 mt-14"
                            />
                            <h1 className="absolute text-white lexend-bold text-5xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                Our Mission
                            </h1>
                        </div>
                        <p className="text-gray-400 flex items-center justify-center mt-8 text-xl">
                            Our aim is to change people’s lives and enhance
                            businesses with our progressive
                        </p>
                        <p className="text-gray-400 flex items-center justify-center text-xl">
                            brand innovative technology solutions.
                        </p>

                        {/* two cards */}
                        <div className="flex items-center justify-center mt-8 p-20">
                            <div className="flex gap-4 items-center justify-center">
                                <img
                                    src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/about/mission-1.svg"
                                    alt=""
                                />
                                <div className="block">
                                    <h1 className="text-yellow-800 text-2xl lexend-bold">
                                        Employee-Centric
                                    </h1>
                                    <p className="text-gray-400 mt-4 w-[80%]">
                                        At Virtu Tech Solutions, we make sure
                                        that alongside the growth of the
                                        company, our mission is to provide our
                                        employees with a great work-life culture
                                        in the industry.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-16">
                                <img
                                    src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/about/mission-2.svg"
                                    alt=""
                                />
                                <div className="block">
                                    <h1 className="text-yellow-800 text-2xl lexend-bold">
                                        Client-Centric
                                    </h1>
                                    <p className="text-gray-400 mt-4 w-[80%]">
                                        To deliver high-quality software
                                        development services with transparency,
                                        creativity, and excellence with
                                        reasonable margins while maintaining
                                        profitability to both startups &
                                        enterprises.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* our vision */}
                        <div className="flex items-center justify-center px-[20rem]">
                            <div className="flex-col w-[50%] justify-center items-center">
                                <h1 className="text-white text-5xl lexend-bold">
                                    Our Vision
                                </h1>
                                <p className="w-[80%] mt-6 text-gray-400">
                                    We think that combining our customer and
                                    technical experience will result in the best
                                    solutions that define your business well
                                    while helping in reach your objectives
                                    efficiently and effectively.
                                </p>
                            </div>
                            <div>
                                <img
                                    src="https://d2e3cmtjkfw2a3.cloudfront.net/static/media/about/mission-1.svg"
                                    alt="our-vision"
                                    className="ml-6"
                                />
                            </div>
                        </div>

                        {/* stats */}
                        <div className="mt-24">
                            <h1 className="text-center lexend-bold text-4xl text-yellow-700">
                                Offshore Web, Mobile & Software <br />{' '}
                                Development Company
                            </h1>
                            <p className="text-gray-400 mt-8 flex justify-center items-center text-center px-[24rem]">
                                Pace up with the changing dynamism of the
                                software industry for streamlined access to the
                                best resources, technology, and cost. As a
                                software, web, and mobile development company,
                                we offer a broad spectrum of wide-ranging
                                offshore software development services that
                                seamlessly meet business deadlines, reduce
                                time-to-market, and stabilize business
                                operations
                            </p>
                            {/* stats cards */}
                            <section className="flex flex-col mt-8 ">
                                <div className="mt-10  grid grid-cols-2 lg:grid-cols-4 gap-y-5 lg:gap-y-0 gap-x-5 place-items-center w-full mx-auto max-w-7xl px-5 mb-8">
                                    <div className="flex flex-col hover:scale-[1.1] transition-all delay-100 justify-center items-center bg-[#FFF6F3] px-4 h-[126px] w-[100%] md:w-[281px] md:h-[192px] rounded-lg justify-self-center">
                                        <div className="flex flex-row justify-center items-center">
                                            <svg
                                                className="w-[35px] h-[35px] md:w-[50px] md:h-[50px]"
                                                viewBox="0 0 50 50"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M39.37 18.432c0 3.058-.906 5.862-2.466 8.203a14.728 14.728 0 0 1-10.079 6.367c-.717.127-1.455.19-2.214.19-.759 0-1.497-.063-2.214-.19a14.728 14.728 0 0 1-10.078-6.368 14.692 14.692 0 0 1-2.467-8.202c0-8.16 6.6-14.76 14.76-14.76s14.759 6.6 14.759 14.76Z"
                                                    stroke="#F98A2B"
                                                    strokeWidth="3.473"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                                <path
                                                    d="m44.712 38.17-3.431.83a2.063 2.063 0 0 0-1.539 1.572l-.728 3.122c-.09.384-.281.734-.554 1.012a2.068 2.068 0 0 1-.992.564c-.375.09-.768.073-1.134-.052a2.078 2.078 0 0 1-.938-.653l-9.92-11.64-9.92 11.661a2.078 2.078 0 0 1-.938.653 2.038 2.038 0 0 1-1.134.052 2.067 2.067 0 0 1-.992-.563 2.137 2.137 0 0 1-.554-1.012l-.728-3.123a2.13 2.13 0 0 0-.55-1.01 2.06 2.06 0 0 0-.988-.562L6.24 38.19a2.073 2.073 0 0 1-.956-.533 2.14 2.14 0 0 1-.563-.953 2.175 2.175 0 0 1-.015-1.113c.091-.366.276-.7.536-.97l8.11-8.284a14.672 14.672 0 0 0 4.307 4.281 14.34 14.34 0 0 0 5.634 2.134 12.29 12.29 0 0 0 2.183.191c.749 0 1.477-.063 2.184-.19 4.138-.617 7.694-3.017 9.94-6.416l8.11 8.285c1.144 1.147.583 3.165-.998 3.547Zm-18.03-26.532 1.227 2.507c.167.34.603.68.998.743l2.226.383c1.414.233 1.747 1.296.727 2.336l-1.726 1.764c-.29.297-.457.87-.353 1.295l.499 2.188c.395 1.721-.5 2.4-1.996 1.487l-2.08-1.253a1.434 1.434 0 0 0-1.372 0l-2.08 1.253c-1.497.892-2.392.234-1.996-1.487l.499-2.188c.083-.403-.063-.998-.354-1.295l-1.726-1.764c-1.019-1.04-.686-2.081.728-2.336l2.225-.383c.375-.063.811-.403.977-.743l1.227-2.507c.604-1.36 1.685-1.36 2.35 0Z"
                                                    stroke="#F98A2B"
                                                    strokeWidth="3.473"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                            </svg>
                                            <p className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">
                                                15+
                                            </p>
                                        </div>
                                        <p className="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center">
                                            Years of Experience
                                        </p>
                                    </div>
                                    <div className="flex flex-col hover:scale-[1.1] transition-all delay-100 justify-center items-center bg-[#FFF6F3] px-4 h-[126px] w-[100%] md:w-[281px] md:h-[192px] rounded-lg justify-self-center">
                                        <div className="flex flex-row justify-center items-center">
                                            <svg
                                                className="w-[35px] h-[35px] md:w-[50px] md:h-[50px]"
                                                viewBox="0 0 51 50"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g clipPath="url(#a)">
                                                    <path
                                                        d="m26.91 5.776 4.483 10.683a1.544 1.544 0 0 0 1.287.942l11.474.992a1.544 1.544 0 0 1 .876 2.715L36.325 28.7a1.559 1.559 0 0 0-.49 1.523l2.61 11.296a1.544 1.544 0 0 1-2.295 1.677l-9.86-5.982a1.53 1.53 0 0 0-1.59 0l-9.861 5.982a1.544 1.544 0 0 1-2.295-1.677l2.609-11.296a1.56 1.56 0 0 0-.49-1.523l-8.705-7.593a1.544 1.544 0 0 1 .876-2.715l11.474-.992a1.544 1.544 0 0 0 1.287-.942l4.483-10.683a1.544 1.544 0 0 1 2.833 0Z"
                                                        stroke="#F98A2B"
                                                        strokeWidth="4.341"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                </g>
                                                <defs>
                                                    <clipPath id="a">
                                                        <path
                                                            fill="#fff"
                                                            d="M.8.2h49.4v49.4H.8z"
                                                        ></path>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <p className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">
                                                540+
                                            </p>
                                        </div>
                                        <p className="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center">
                                            Portals/Ecommerce Websites
                                        </p>
                                    </div>
                                    <div className="flex flex-col hover:scale-[1.1] transition-all delay-100 justify-center items-center bg-[#FFF6F3] px-4 h-[126px] w-[100%] md:w-[281px] md:h-[192px] rounded-lg justify-self-center">
                                        <div className="flex flex-row justify-center items-center">
                                            <svg
                                                className="w-[35px] h-[35px] md:w-[50px] md:h-[50px]"
                                                viewBox="0 0 50 50"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <g
                                                    clipPath="url(#a)"
                                                    stroke="#F98A2B"
                                                    strokeWidth="3.473"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M10.811 39.091c-1.775-1.775-.598-5.505-1.5-7.69-.939-2.255-4.377-4.089-4.377-6.5 0-2.413 3.438-4.246 4.376-6.502.903-2.182-.274-5.914 1.501-7.69 1.776-1.775 5.508-.598 7.69-1.5 2.266-.939 4.09-4.377 6.501-4.377 2.412 0 4.246 3.438 6.501 4.376 2.185.903 5.915-.274 7.69 1.501 1.776 1.776.598 5.506 1.502 7.69.937 2.266 4.376 4.09 4.376 6.501 0 2.412-3.439 4.246-4.377 6.501-.903 2.185.274 5.915-1.5 7.69-1.776 1.776-5.506.598-7.69 1.501-2.256.938-4.09 4.377-6.502 4.377s-4.245-3.439-6.5-4.377c-2.183-.903-5.915.275-7.69-1.5Z"></path>
                                                    <path d="m17.281 26.444 4.632 4.631L32.718 20.27"></path>
                                                </g>
                                                <defs>
                                                    <clipPath id="a">
                                                        <path
                                                            fill="#fff"
                                                            d="M.3.2h49.4v49.4H.3z"
                                                        ></path>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <p className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">
                                                85+
                                            </p>
                                        </div>
                                        <p className="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center">
                                            IT Enthusiasts
                                        </p>
                                    </div>
                                    <div className="flex flex-col hover:scale-[1.1] transition-all delay-100 justify-center items-center bg-[#FFF6F3] px-4 h-[126px] w-[100%] md:w-[281px] md:h-[192px] rounded-lg justify-self-center">
                                        <div className="flex flex-row justify-center items-center">
                                            <svg
                                                className="w-[35px] h-[35px] md:w-[50px] md:h-[50px]"
                                                viewBox="0 0 51 50"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M45.571 12.006 27.046 30.531l-7.719-7.718L5.434 36.706"
                                                    stroke="#F98A2B"
                                                    strokeWidth="4.341"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                                <path
                                                    d="M45.569 24.356v-12.35h-12.35"
                                                    stroke="#F98A2B"
                                                    strokeWidth="4.341"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                ></path>
                                            </svg>
                                            <p className="font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">
                                                100%
                                            </p>
                                        </div>
                                        <p className="font-medium text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center">
                                            Best Quality Delivery
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>

                    {/* our values */}
                    <div className="mt-8">
                        <h1 className="text-4xl text-white lexend-bold text-center">
                            Our Values
                        </h1>
                        <p className="text-gray-400 text-md text-center mt-8">
                            Our team believes in putting the customer first
                            amidst <br /> anything else. Customer satisfaction
                            is our utmost priority.
                        </p>
                        <div className="mt-8 grid grid-cols-1 px-[9rem] md:grid-cols-3 gap-4 items-center justify-center">
                            {items.map((item, index) => (
                                <div
                                    key={index}
                                    className=" p-6 mt-8 rounded-lg text-center"
                                >
                                    <span className="text-yellow-800 text-4xl mb-4 flex justify-center items-center mx-auto">
                                        {item.icon}
                                    </span>
                                    <h1 className="text-white text-2xl mt-1 mb-2">
                                        {item.title}
                                    </h1>
                                    <p className="text-gray-400 p-4">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Us */}
                    <div className="flex flex-col items-center justify-center p-4 mt-8 bg-[#111122]">
                        <h1 className="text-4xl text-white lexend-light mt-24">
                            Turn Your App Idea Into Brand Success!
                        </h1>
                        <h1 className="text-yellow-800 text-3xl mt-12 inter-medium">
                            Let's Create. Connect. Communicate
                        </h1>
                        <Link to={'/contact-us'} className="mt-20 mb-20">
                            <button className="w-44 p-4 lexend-bold bg-yellow-800 rounded-lg hover:text-white transition-all delay-100">
                                Get Started
                            </button>
                        </Link>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default AboutUs;
