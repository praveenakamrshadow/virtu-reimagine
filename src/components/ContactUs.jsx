import { FaPhoneAlt } from 'react-icons/fa';
import Footer from './Footer';
import Navbar from './NavBar';

const ContactUs = () => {
    return (
        <div>
            <div>
                <Navbar />
                <div>
                    <div className="grid sm:grid-cols-2 items-start gap-16 p-4 mb-20 mt-14 mx-auto max-w-4xl bg-white inter-normal rounded-md">
                        <div>
                            <h1 className="text-black text-3xl lexend-bold font-extrabold">
                                Let's Talk
                            </h1>
                            <p className="text-sm text-gray-500 mt-4">
                                Have some big idea or brand to develop and need
                                help? Then reach out we'd love to hear about
                                your project and provide help.
                            </p>

                            <div className="mt-8">
                                <ul className="mt-4">
                                    <li className="flex items-center">
                                        <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="20px"
                                                height="20px"
                                                fill="#007bff"
                                                viewBox="0 0 479.058 479.058"
                                            >
                                                <path
                                                    d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                                    data-original="#000000"
                                                />
                                            </svg>
                                        </div>
                                        <a
                                            href="mailto:info@virtutechsolutions.com"
                                            className="text-[#007bff] text-sm ml-4"
                                        >
                                            <strong>
                                                info@virtutechsolutions.com
                                            </strong>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-6">
                                <ul className="mt-4">
                                    <li className="flex items-center">
                                        <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                            <FaPhoneAlt className="text-blue-600" />
                                        </div>
                                        <div className="text-[#007bff] text-sm ml-4">
                                            <strong>
                                                <a
                                                    className="mr-2"
                                                    href="tel:+91 4066333999"
                                                >
                                                    +91 4066333999 &nbsp;|
                                                </a>
                                                <a href="tel:+91 4066333999">
                                                    +91 4066333999{' '}
                                                    <span className="text-gray-500 text-sm">
                                                        (India)
                                                    </span>
                                                </a>
                                            </strong>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-6">
                                <ul className="mt-4">
                                    <li className="flex items-center">
                                        <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                            <FaPhoneAlt className="text-blue-600" />
                                        </div>
                                        <div className="text-[#007bff] flex gap-4 text-sm ml-4">
                                            <strong>
                                                <a
                                                    className="mr-2"
                                                    href="tel:+1 (787) 598-1489"
                                                >
                                                    +1 (787) 598-1489{' '}
                                                    <span className="text-gray-500">
                                                        (USA)
                                                    </span>
                                                </a>
                                            </strong>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <ul className="flex mt-8 space-x-4">
                                <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <a
                                        href="https://www.facebook.com/virtu"
                                        target="_blank"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20px"
                                            height="20px"
                                            fill="#007bff"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z"
                                                data-original="#000000"
                                            />
                                        </svg>
                                    </a>
                                </li>
                                <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                    <a
                                        href="https://www.linkedin.com/company/virtu-tech-solutions/"
                                        target="_blank"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20px"
                                            height="20px"
                                            fill="#007bff"
                                            viewBox="0 0 511 512"
                                        >
                                            <path
                                                d="M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.406c8.285 0 15-6.715 15-15V320.266c0-22.735 18.5-41.23 41.235-41.23 22.734 0 41.226 18.495 41.226 41.23V497c0 8.285 6.719 15 15 15h96.403c8.285 0 15-6.715 15-15V302.066c0-79.14-64.383-143.523-143.524-143.523zM466.434 482h-66.399V320.266c0-39.278-31.953-71.23-71.226-71.23-39.282 0-71.239 31.952-71.239 71.23V482h-66.402V190.664h66.402v11.082c0 5.77 3.309 11.027 8.512 13.524a15.01 15.01 0 0 0 15.875-1.82c20.313-16.294 44.852-24.907 70.953-24.907 62.598 0 113.524 50.926 113.524 113.523zm0 0"
                                                data-original="#000000"
                                            />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <form className="ml-auto space-y-4">
                            <div className="flex gap-2">
                                <input
                                    required
                                    type="text"
                                    placeholder="First Name*"
                                    className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
                                />
                                <input
                                    required
                                    type="text"
                                    placeholder="Last Name*"
                                    className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
                                />
                            </div>
                            <input
                                required
                                type="Email"
                                placeholder="Email*"
                                className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
                            />
                            <input
                                type="Website"
                                placeholder="website"
                                className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
                            />
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
                            />
                            <textarea
                                placeholder="Message"
                                rows="6"
                                className="w-full rounded-md px-4 bg-gray-100 text-gray-800 text-sm pt-3 outline-blue-500 focus:bg-transparent"
                            ></textarea>
                            <button
                                type="button"
                                className="text-white lexend-medium bg-blue-500 hover:bg-blue-600 transition-all delay-100 tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6"
                            >
                                Request Quote
                            </button>
                        </form>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default ContactUs;
