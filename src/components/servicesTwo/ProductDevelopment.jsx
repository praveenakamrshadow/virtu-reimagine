import { useEffect } from 'react';
import Footer from '../Footer';
import Navbar from '../NavBar';

const ProductDevelopment = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="dark:bg-[#FEFAF6]">
            <Navbar />
            <div className="relative w-full h-[20rem]">
                <img
                    src="/public/assets/images/servicesTWO/product-development-banner.jpg"
                    className="w-full h-full top-0 object-cover absolute"
                    alt="product-development-Banner"
                />
                <div className="absolute inset-0 bg-black opacity-75"></div>
                <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center px-4">
                    PRODUCT DEVELOPMENT
                </h1>
            </div>

            <div className="flex mt-10 px-32 gap-10">
                <div>
                    <p className="text-gray-500 dark:text-gray-800">
                        In today’s business environment, custom applications and
                        customizations are crucial, but the increasing
                        competition, market consolidation, and user expectations
                        challenge the ability of these applications to scale
                        with the business.
                    </p>

                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Our team of experts creates, implements, integrates, and
                        maintains custom software applications that target the
                        precise requirements of your business. We produce
                        features with the capability to outperform many generic
                        software applications because most generic software
                        lacks the key features necessary to address specific
                        business problems.
                    </p>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        We offer various services, including product
                        development, migration, testing, and maintenance. Our
                        Product Engineering teams can work as extensions of your
                        engineering team or as independent, responsible units.
                        With in-depth experience in product engineering and R&D,
                        our engineers specialize in specific domains and can
                        build from the concept stage and demonstrate POC.
                    </p>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        At Virtu Tech Solutions, we provide product planning,
                        technology planning, product development and testing,
                        maintenance and support, and product re-engineering. We
                        use a wide range of tools and technologies such as
                    </p>

                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        We use numerous testing and defect-tracking tools such
                        as
                    </h1>
                    <ul className="list-disc list-inside text-gray-500 dark:text-gray-800 mt-5 space-y-4">
                        <li>Open Source Tools & Frameworks</li>
                        <li>.NET Technologies</li>
                        <li>Java</li>
                        <li>SharePoint</li>
                        <li>Python</li>
                        <li>Ruby on Rails</li>
                        <li>SharePoint</li>
                        <li>PHP</li>
                        <li>Web Technologies</li>
                    </ul>
                    <p className="text-gray-500 mt-5 dark:text-gray-800">
                        Our agile methodologies and continuous integration &
                        delivery ensure that our solutions are scalable,
                        flexible, and efficient.
                    </p>
                    <p className="text-gray-500 mt-5 dark:text-gray-800">
                        We believe that coding requires a mix of art and
                        science, that’s why our team writes good code through
                        the heart, not just the mind. Every piece of code is
                        important – imagine what would happen if bits in a
                        string were shifted by one instead of two. Feedback
                        about the value we add to the end-user experience makes
                        us happy, and we strive to keep our code simple, nimble
                        and flexible.
                    </p>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Partnering with us at Virtu Tech Solutions means
                        unlocking endless possibilities for your business growth
                        and operations. Contact us today to experience our
                        excellence firsthand.
                    </p>
                </div>
                <img
                    src="https://img.freepik.com/free-vector/tester-developer-work-with-laptop-tablet-cross-platform-bug-founding-bug-identification-testing-team-concept-white-background-bright-vibrant-violet-isolated-illustration_335657-315.jpg?t=st=1719293745~exp=1719297345~hmac=ef97ab8195a01bf3ee41bfa5f5a33c256bb46528dbc47123f5e814691d6c18ee&w=996"
                    alt="Product-Development-Img"
                    className="h-[35rem] w-[35rem] rounded-md object-fit"
                />
            </div>
            <Footer />
        </div>
    );
};

export default ProductDevelopment;
