import Footer from './Footer';
import Navbar from './NavBar';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Tooltip,
} from '@material-tailwind/react';
import { useEffect } from 'react';
import { IoIosAppstore } from 'react-icons/io';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { MdOutlineWeb } from 'react-icons/md';

const References = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="dark:bg-[#FEFAF6]">
            <Navbar />
            <h1 className="uppercase text-3xl mt-8  mb-10 text-white dark:text-black text-start ml-6 lexend-bold">
                REFERENCES
            </h1>
            <div className="p-4 flex items-center justify-center flex-wrap mb-8 gap-14">
                {/* Card 1 */}
                <Card className="w-full max-w-[18rem] shadow-lg cursor-pointer">
                    <CardHeader floated={false} color="blue-gray">
                        <img
                            src="/assets/images/ClientsPortfolio/BidGo.jpg"
                            alt="bidGo-img"
                            className="object-fit"
                        />
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                    </CardHeader>
                    <CardBody>
                        <div className="mb-3 flex items-center justify-between">
                            <Typography
                                variant="h5"
                                color="blue-gray"
                                className="font-medium lexend-medium"
                            >
                                BID GO
                            </Typography>
                            <Typography
                                color="blue-gray"
                                className="flex items-center gap-1.5 font-normal"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="-mt-0.5 h-5 w-5 text-yellow-700"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                5.0
                            </Typography>
                        </div>
                        <Typography color="gray" className="inter-normal">
                            MOBILE APP
                        </Typography>
                        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                            <Tooltip content="website">
                                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                                    <MdOutlineWeb />
                                </span>
                            </Tooltip>
                            <Tooltip content="PlayStore">
                                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                                    <a
                                        href="https://play.google.com/store/apps/details?id=com.tripsteerllc.bidgocustomer"
                                        target="_blank"
                                    >
                                        <IoLogoGooglePlaystore />
                                    </a>
                                </span>
                            </Tooltip>
                        </div>
                    </CardBody>
                </Card>
                {/* card 2 */}
                <Card className="w-full max-w-[18rem] shadow-lg cursor-pointer">
                    <CardHeader floated={false} color="blue-gray">
                        <img
                            src="/assets/images/ClientsPortfolio/smashinGas.png"
                            alt="smashinGas-img"
                            className="w-full object-fit h-48"
                        />
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                    </CardHeader>
                    <CardBody>
                        <div className="mb-3 flex items-center justify-between">
                            <Typography
                                variant="h5"
                                color="blue-gray"
                                className="font-medium lexend-medium"
                            >
                                SMASHIN GAS
                            </Typography>
                            <Typography
                                color="blue-gray"
                                className="flex items-center gap-1.5 font-normal"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="-mt-0.5 h-5 w-5 text-yellow-700"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                5.0
                            </Typography>
                        </div>
                        <Typography color="gray" className="inter-normal">
                            MOBILE APP
                        </Typography>
                        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                            <Tooltip content="AppStore">
                                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70 text-lg">
                                    <a
                                        href="https://apps.apple.com/us/app/smashingas/id6448788830"
                                        target="_blank"
                                    >
                                        <IoIosAppstore />
                                    </a>
                                </span>
                            </Tooltip>
                        </div>
                    </CardBody>
                </Card>
                {/* card 3 */}
                <Card className="w-full max-w-[18rem] shadow-lg cursor-pointer">
                    <CardHeader floated={false} color="blue-gray">
                        <img
                            src="/assets/images/ClientsPortfolio/transpetra.png"
                            alt="transpetra-img"
                            className="w-full h-48 object-cover"
                        />
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                    </CardHeader>
                    <CardBody>
                        <div className="mb-3 flex items-center justify-between">
                            <Typography
                                variant="h5"
                                color="blue-gray"
                                className="font-medium lexend-medium"
                            >
                                TRANSPETRA
                            </Typography>
                            <Typography
                                color="blue-gray"
                                className="flex items-center gap-1.5 font-normal"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="-mt-0.5 h-5 w-5 text-yellow-700"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                5.0
                            </Typography>
                        </div>
                        <Typography color="gray" className="inter-normal">
                            MOBILE APP
                        </Typography>
                        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                            <Tooltip content="PlayStore">
                                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70 text-lg">
                                    <a
                                        href="https://play.google.com/store/apps/details?id=com.keystoneit.transpetra"
                                        target="_blank"
                                    >
                                        <IoLogoGooglePlaystore />
                                    </a>
                                </span>
                            </Tooltip>
                        </div>
                    </CardBody>
                </Card>
                {/* card 4 */}
                <Card className="w-full max-w-[18rem] shadow-lg cursor-pointer">
                    <CardHeader floated={false} color="blue-gray">
                        <img
                            src="/assets/images/ClientsPortfolio/GenzPay.png"
                            alt="genZPay"
                            className="w-full h-48 object-fit"
                        />
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                    </CardHeader>
                    <CardBody>
                        <div className="mb-3 flex items-center justify-between">
                            <Typography
                                variant="h5"
                                color="blue-gray"
                                className="font-medium lexend-medium"
                            >
                                GEN Z PAY
                            </Typography>
                            <Typography
                                color="blue-gray"
                                className="flex items-center gap-1.5 font-normal"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="-mt-0.5 h-5 w-5 text-yellow-700"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                5.0
                            </Typography>
                        </div>
                        <Typography color="gray" className="inter-normal">
                            MOBILE APP
                        </Typography>
                        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                            <Tooltip content="PlayStore">
                                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70 text-lg">
                                    <a href="#" target="_blank">
                                        <IoLogoGooglePlaystore />
                                    </a>
                                </span>
                            </Tooltip>
                        </div>
                    </CardBody>
                </Card>
                {/* card 5 */}
                <Card className="w-full max-w-[18rem] shadow-lg cursor-pointer">
                    <CardHeader floated={false} color="blue-gray">
                        <img
                            src="/assets/images/ClientsPortfolio/apollo.jpg"
                            alt="apollo-expert"
                            className="w-full h-48 object-cover"
                        />
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                    </CardHeader>
                    <CardBody>
                        <div className="mb-3 flex items-center justify-between">
                            <Typography
                                variant="h5"
                                color="blue-gray"
                                className="font-medium lexend-medium"
                            >
                                APOLLO EXPERT
                            </Typography>
                            <Typography
                                color="blue-gray"
                                className="flex items-center gap-1.5 font-normal"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="-mt-0.5 h-5 w-5 text-yellow-700"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                4.5
                            </Typography>
                        </div>
                        <Typography color="gray" className="inter-normal">
                            MOBILE APP
                        </Typography>
                        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                            <Tooltip content="Website">
                                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70 text-lg">
                                    <a
                                        href="https://www.apollopharmacy.in/"
                                        target="_blank"
                                    >
                                        <MdOutlineWeb />
                                    </a>
                                </span>
                            </Tooltip>
                            <Tooltip content="PlayStore">
                                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70 text-lg">
                                    <a
                                        href="https://play.google.com/store/apps/details?id=com.apollo.patientapp&hl=en_IN"
                                        target="_blank"
                                    >
                                        <IoLogoGooglePlaystore />
                                    </a>
                                </span>
                            </Tooltip>
                        </div>
                    </CardBody>
                </Card>

                {/* card 6 */}
                <Card className="w-full max-w-[18rem] shadow-lg cursor-pointer">
                    <CardHeader floated={false} color="blue-gray">
                        <img
                            src="/assets/images/ClientsPortfolio/fresh-direct.jpg"
                            alt="freshDirect"
                            className="w-full object-fit h-48"
                        />
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                    </CardHeader>
                    <CardBody>
                        <div className="mb-3 flex items-center justify-between">
                            <Typography
                                variant="h5"
                                color="blue-gray"
                                className="font-small lexend-medium"
                            >
                                FRESH DIRECT
                            </Typography>
                            <Typography
                                color="blue-gray"
                                className="flex items-center gap-1.5 font-normal"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="-mt-0.5 h-5 w-5 text-yellow-700"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                5.0
                            </Typography>
                        </div>
                        <Typography color="gray" className="inter-normal">
                            MOBILE APP
                        </Typography>
                        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                            <Tooltip content="AppStore">
                                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70 text-lg">
                                    <a
                                        href="https://www.irvinecompanyapartments.com/"
                                        target="_blank"
                                    >
                                        <IoIosAppstore />
                                    </a>
                                </span>
                            </Tooltip>
                        </div>
                    </CardBody>
                </Card>
                {/* card 7 */}
                <Card className="w-full max-w-[18rem] shadow-lg cursor-pointer">
                    <CardHeader floated={false} color="blue-gray">
                        <img
                            src="/assets/images/ClientsPortfolio/irvine-company.png"
                            alt="irvine-company"
                            className="w-full  object-cover h-[10.5rem]"
                        />
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                    </CardHeader>
                    <CardBody>
                        <div className="mb-3 flex items-center justify-between">
                            <Typography
                                variant="h5"
                                color="blue-gray"
                                className="font-medium lexend-medium"
                            >
                                IRVINE APARTMENTS
                            </Typography>
                            <Typography
                                color="blue-gray"
                                className="flex items-center gap-1.5 font-normal"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="-mt-0.5 h-5 w-5 text-yellow-700"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                5.0
                            </Typography>
                        </div>
                        <Typography color="gray" className="inter-normal">
                            WEBSITE
                        </Typography>
                        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                            <Tooltip content="website">
                                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70 text-lg">
                                    <a
                                        href="https://www.irvinecompanyapartments.com/"
                                        target="_blank"
                                    >
                                        <MdOutlineWeb />
                                    </a>
                                </span>
                            </Tooltip>
                        </div>
                    </CardBody>
                </Card>
                {/* card 8 */}
                <Card className="w-full max-w-[18rem] shadow-lg cursor-pointer">
                    <CardHeader floated={false} color="blue-gray">
                        <img
                            src="/assets/images/ClientsPortfolio/fine-foods.png"
                            alt="fine-foods"
                            className="w-full object-fit h-48"
                        />
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                    </CardHeader>
                    <CardBody>
                        <div className="mb-3 flex items-center justify-between">
                            <Typography
                                variant="h5"
                                color="blue-gray"
                                className="font-small lexend-medium"
                            >
                                FINEFOODS INC.
                            </Typography>
                            <Typography
                                color="blue-gray"
                                className="flex items-center gap-1.5 font-normal"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="-mt-0.5 h-5 w-5 text-yellow-700"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                5.0
                            </Typography>
                        </div>
                        <Typography color="gray" className="inter-normal">
                            WEBSITE
                        </Typography>
                        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                            <Tooltip content="website">
                                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70 text-lg">
                                    <a
                                        href="https://www.virtutechsolutions.com/wp-content/uploads/2017/02/fine-foods-2.png"
                                        target="_blank"
                                    >
                                        <MdOutlineWeb />
                                    </a>
                                </span>
                            </Tooltip>
                        </div>
                    </CardBody>
                </Card>

                {/* card 10 */}
                <Card className="w-full max-w-[18rem] shadow-lg cursor-pointer">
                    <CardHeader floated={false} color="blue-gray">
                        <img
                            src="/assets/images/ClientsPortfolio/mealcon.png"
                            alt="mealcon"
                            className="w-full object-fit h-48"
                        />
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                    </CardHeader>
                    <CardBody>
                        <div className="mb-3 flex items-center justify-between">
                            <Typography
                                variant="h5"
                                color="blue-gray"
                                className="font-medium lexend-medium"
                            >
                                MEALCON
                            </Typography>
                            <Typography
                                color="blue-gray"
                                className="flex items-center gap-1.5 font-normal"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="-mt-0.5 h-5 w-5 text-yellow-700"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                5.0
                            </Typography>
                        </div>
                        <Typography color="gray" className="inter-normal">
                            MOBILE APP
                        </Typography>
                        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                            <Tooltip content="AppStore">
                                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70 text-lg">
                                    <a
                                        href="https://xd.adobe.com/view/24ca6249-0c1b-437d-9198-16b947378b5c-7199/"
                                        target="_blank"
                                    >
                                        <IoLogoGooglePlaystore />
                                    </a>
                                </span>
                            </Tooltip>
                        </div>
                    </CardBody>
                </Card>
                {/* card 11 */}
                <Card className="w-full max-w-[18rem] shadow-lg cursor-pointer">
                    <CardHeader floated={false} color="blue-gray">
                        <img
                            src="/assets/images/ClientsPortfolio/cbk-mobile.jpg"
                            alt="cbk-mobile"
                            className="w-full h-40 object-cover"
                        />
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                    </CardHeader>
                    <CardBody>
                        <div className="mb-3 flex items-center justify-between">
                            <Typography
                                variant="h5"
                                color="blue-gray"
                                className="font-medium lexend-medium"
                            >
                                CBK MOBILE (FEATURED)
                            </Typography>
                            <Typography
                                color="blue-gray"
                                className="flex items-center gap-1.5 font-normal"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="-mt-0.5 h-5 w-5 text-yellow-700"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                4.8
                            </Typography>
                        </div>
                        <Typography color="gray" className="inter-normal">
                            MOBILE APP
                        </Typography>
                        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                            <Tooltip content="PlayStore">
                                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70 text-lg">
                                    <a
                                        href="https://play.google.com/store/apps/details?id=com.cbk.mobilebanking&hl=en&gl=US"
                                        target="_blank"
                                    >
                                        <IoLogoGooglePlaystore />
                                    </a>
                                </span>
                            </Tooltip>
                        </div>
                    </CardBody>
                </Card>
                {/* card 12 */}
                <Card className="w-full max-w-[18rem] shadow-lg cursor-pointer">
                    <CardHeader floated={false} color="blue-gray">
                        <img
                            src="/assets/images/ClientsPortfolio/centrocasas.jpg"
                            alt="centrocasas"
                            className="w-full h-48 object-fit"
                        />
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                    </CardHeader>
                    <CardBody>
                        <div className="mb-3 flex items-center justify-between">
                            <Typography
                                variant="h5"
                                color="blue-gray"
                                className="font-medium lexend-medium"
                            >
                                CENTROCASAS
                            </Typography>
                            <Typography
                                color="blue-gray"
                                className="flex items-center gap-1.5 font-normal"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="-mt-0.5 h-5 w-5 text-yellow-700"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                5.0
                            </Typography>
                        </div>
                        <Typography color="gray" className="inter-normal">
                            Website
                        </Typography>
                        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                            <Tooltip content="Website">
                                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70 text-lg">
                                    <a
                                        href="https://centrocasas.com/"
                                        target="_blank"
                                    >
                                        <MdOutlineWeb />
                                    </a>
                                </span>
                            </Tooltip>
                        </div>
                    </CardBody>
                </Card>
                {/* card 13 */}
                <Card className="w-full max-w-[18rem] shadow-lg cursor-pointer">
                    <CardHeader floated={false} color="blue-gray">
                        <img
                            src="/assets/images/ClientsPortfolio/pacific-life.png"
                            alt="pacific-life"
                            className="w-full h-48 object-cover"
                        />
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                    </CardHeader>
                    <CardBody>
                        <div className="mb-3 flex items-center justify-between">
                            <Typography
                                variant="h5"
                                color="blue-gray"
                                className="font-medium lexend-medium"
                            >
                                PACIFIC LIFE
                            </Typography>
                            <Typography
                                color="blue-gray"
                                className="flex items-center gap-1.5 font-normal"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="-mt-0.5 h-5 w-5 text-yellow-700"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                4.5
                            </Typography>
                        </div>
                        <Typography color="gray" className="inter-normal">
                            WEBSITE
                        </Typography>
                        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                            <Tooltip content="Website">
                                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70 text-lg">
                                    <a
                                        href="https://www.pacificlife.com/"
                                        target="_blank"
                                    >
                                        <MdOutlineWeb />
                                    </a>
                                </span>
                            </Tooltip>
                        </div>
                    </CardBody>
                </Card>

                {/* card 14 */}
                <Card className="w-full max-w-[18rem] shadow-lg cursor-pointer">
                    <CardHeader floated={false} color="blue-gray">
                        <img
                            src="/assets/images/ClientsPortfolio/thedollar.jpg"
                            alt="theDollar"
                            className="w-full object-fit h-40"
                        />
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                    </CardHeader>
                    <CardBody>
                        <div className="mb-3 flex items-center justify-between">
                            <Typography
                                variant="h5"
                                color="blue-gray"
                                className="font-small lexend-medium"
                            >
                                THE DOLLAR BUSINESS
                            </Typography>
                            <Typography
                                color="blue-gray"
                                className="flex items-center gap-1.5 font-normal"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="-mt-0.5 h-5 w-5 text-yellow-700"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                5.0
                            </Typography>
                        </div>
                        <Typography color="gray" className="inter-normal">
                            WEBSITE
                        </Typography>
                        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                            <Tooltip content="Website">
                                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70 text-lg">
                                    <a
                                        href="https://in.thedollarbusiness.com/"
                                        target="_blank"
                                    >
                                        <MdOutlineWeb />
                                    </a>
                                </span>
                            </Tooltip>
                        </div>
                    </CardBody>
                </Card>
                {/* card 15 */}
                <Card className="w-full max-w-[18rem] shadow-lg cursor-pointer">
                    <CardHeader floated={false} color="blue-gray">
                        <img
                            src="/assets/images/ClientsPortfolio/carlo-law.png"
                            alt="carlo-law"
                            className="w-full  object-cover h-[12rem]"
                        />
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                    </CardHeader>
                    <CardBody>
                        <div className="mb-3 flex items-center justify-between">
                            <Typography
                                variant="h5"
                                color="blue-gray"
                                className="font-medium lexend-medium"
                            >
                                CARLO LAW
                            </Typography>
                            <Typography
                                color="blue-gray"
                                className="flex items-center gap-1.5 font-normal"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="-mt-0.5 h-5 w-5 text-yellow-700"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                5.0
                            </Typography>
                        </div>
                        <Typography color="gray" className="inter-normal">
                            WEBSITE
                        </Typography>
                        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                            <Tooltip content="website">
                                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70 text-lg">
                                    <a
                                        href="https://carlolaw.com/"
                                        target="_blank"
                                    >
                                        <MdOutlineWeb />
                                    </a>
                                </span>
                            </Tooltip>
                        </div>
                    </CardBody>
                </Card>
                {/* card 16 */}
                <Card className="w-full max-w-[18rem] shadow-lg cursor-pointer">
                    <CardHeader floated={false} color="blue-gray">
                        <img
                            src="/assets/images/ClientsPortfolio/bcqs.png"
                            alt="BCQS"
                            className="w-full object-fit h-48"
                        />
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                    </CardHeader>
                    <CardBody>
                        <div className="mb-3 flex items-center justify-between">
                            <Typography
                                variant="h5"
                                color="blue-gray"
                                className="font-small lexend-medium"
                            >
                                BCQS
                            </Typography>
                            <Typography
                                color="blue-gray"
                                className="flex items-center gap-1.5 font-normal"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="-mt-0.5 h-5 w-5 text-yellow-700"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                5.0
                            </Typography>
                        </div>
                        <Typography color="gray" className="inter-normal">
                            WEBSITE
                        </Typography>
                        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                            <Tooltip content="website">
                                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70 text-lg">
                                    <a href="https://bcqs.com/" target="_blank">
                                        <MdOutlineWeb />
                                    </a>
                                </span>
                            </Tooltip>
                        </div>
                    </CardBody>
                </Card>
                {/* Card 17 */}
                <Card className="w-full max-w-[18rem] shadow-lg cursor-pointer">
                    <CardHeader floated={false} color="blue-gray">
                        <img
                            src="/assets/images/ClientsPortfolio/iway-dispatch.png"
                            alt="iway-dispatch"
                            className="object-cover"
                        />
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                    </CardHeader>
                    <CardBody>
                        <div className="mb-3 flex items-center justify-between">
                            <Typography
                                variant="h5"
                                color="blue-gray"
                                className="font-medium lexend-medium"
                            >
                                IWAYDISPATCH
                            </Typography>
                            <Typography
                                color="blue-gray"
                                className="flex items-center gap-1.5 font-normal"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="-mt-0.5 h-5 w-5 text-yellow-700"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                5.0
                            </Typography>
                        </div>
                        <Typography color="gray" className="inter-normal">
                            MOBILE APP
                        </Typography>
                        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                            <Tooltip content="PlayStore">
                                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                                    <a
                                        href="https://play.google.com/store/apps/details?id=com.keystoneit.iwaydispatch"
                                        target="_blank"
                                    >
                                        <IoLogoGooglePlaystore />
                                    </a>
                                </span>
                            </Tooltip>
                        </div>
                    </CardBody>
                </Card>
                {/* card 18 */}
                <Card className="w-full max-w-[18rem] shadow-lg cursor-pointer">
                    <CardHeader floated={false} color="blue-gray">
                        <img
                            src="/assets/images/ClientsPortfolio/ezbarrel.png"
                            alt="ezbarrel"
                            className="w-full object-fit h-48"
                        />
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                    </CardHeader>
                    <CardBody>
                        <div className="mb-3 flex items-center justify-between">
                            <Typography
                                variant="h5"
                                color="blue-gray"
                                className="font-medium lexend-medium"
                            >
                                EZBARREL
                            </Typography>
                            <Typography
                                color="blue-gray"
                                className="flex items-center gap-1.5 font-normal"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="-mt-0.5 h-5 w-5 text-yellow-700"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                5.0
                            </Typography>
                        </div>
                        <Typography color="gray" className="inter-normal">
                            WEBSITE
                        </Typography>
                        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                            <Tooltip content="Website">
                                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70 text-lg">
                                    <a
                                        href="https://ezbarrel.com/"
                                        target="_blank"
                                    >
                                        <MdOutlineWeb />
                                    </a>
                                </span>
                            </Tooltip>
                        </div>
                    </CardBody>
                </Card>
                {/* card 19 */}
                <Card className="w-full max-w-[18rem] shadow-lg cursor-pointer">
                    <CardHeader floated={false} color="blue-gray">
                        <img
                            src="/assets/images/ClientsPortfolio/bharat-matrimony.jpg"
                            alt="bharat-matrimony"
                            className="w-full h-40 object-cover"
                        />
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                    </CardHeader>
                    <CardBody>
                        <div className="mb-3 flex items-center justify-between">
                            <Typography
                                variant="h5"
                                color="blue-gray"
                                className="font-medium lexend-medium"
                            >
                                BHARAT MATRIMONY
                            </Typography>
                            <Typography
                                color="blue-gray"
                                className="flex items-center gap-1.5 font-normal"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="-mt-0.5 h-5 w-5 text-yellow-700"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                5.0
                            </Typography>
                        </div>
                        <Typography color="gray" className="inter-normal">
                            MOBILE APP
                        </Typography>
                        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                            <Tooltip content="PlayStore">
                                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70 text-lg">
                                    <a
                                        href="https://play.google.com/store/apps/details?id=com.bharatmatrimony"
                                        target="_blank"
                                    >
                                        <IoLogoGooglePlaystore />
                                    </a>
                                </span>
                            </Tooltip>
                        </div>
                    </CardBody>
                </Card>
                {/* card 20 */}
                <Card className="w-full max-w-[18rem] shadow-lg cursor-pointer">
                    <CardHeader floated={false} color="blue-gray">
                        <img
                            src="/assets/images/ClientsPortfolio/island-car-rentals.png"
                            alt="island-car-rentals"
                            className="w-full h-40 object-fit"
                        />
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                    </CardHeader>
                    <CardBody>
                        <div className="mb-3 flex items-center justify-between">
                            <Typography
                                variant="h5"
                                color="blue-gray"
                                className="font-medium lexend-medium"
                            >
                                ISLAND CAR RENTALS
                            </Typography>
                            <Typography
                                color="blue-gray"
                                className="flex items-center gap-1.5 font-normal"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="-mt-0.5 h-5 w-5 text-yellow-700"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                5.0
                            </Typography>
                        </div>
                        <Typography color="gray" className="inter-normal">
                            MOBILE APP
                        </Typography>
                        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                            <Tooltip content="Website">
                                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70 text-lg">
                                    <a
                                        href="https://islandcar.dm/"
                                        target="_blank"
                                    >
                                        <MdOutlineWeb />
                                    </a>
                                </span>
                            </Tooltip>
                        </div>
                    </CardBody>
                </Card>
                {/* card 21 */}
                <Card className="w-full max-w-[18rem] shadow-lg cursor-pointer">
                    <CardHeader floated={false} color="blue-gray">
                        <img
                            src="/assets/images/ClientsPortfolio/tcmrslaw.png"
                            alt="tcmslaw"
                            className="w-full h-48 object-cover"
                        />
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                    </CardHeader>
                    <CardBody>
                        <div className="mb-3 flex items-center justify-between">
                            <Typography
                                variant="h5"
                                color="blue-gray"
                                className="font-medium lexend-medium"
                            >
                                TCMRSLAW
                            </Typography>
                            <Typography
                                color="blue-gray"
                                className="flex items-center gap-1.5 font-normal"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="-mt-0.5 h-5 w-5 text-yellow-700"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                4.5
                            </Typography>
                        </div>
                        <Typography color="gray" className="inter-normal">
                            MOBILE APP
                        </Typography>
                        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                            <Tooltip content="Website">
                                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70 text-lg">
                                    <a
                                        href="http://www.tcmrslaw.com/"
                                        target="_blank"
                                    >
                                        <MdOutlineWeb />
                                    </a>
                                </span>
                            </Tooltip>
                        </div>
                    </CardBody>
                </Card>

                {/* card 22 */}
                <Card className="w-full max-w-[18rem] shadow-lg cursor-pointer">
                    <CardHeader floated={false} color="blue-gray">
                        <img
                            src="/assets/images/ClientsPortfolio/justrufs.png"
                            alt="JUSTRUFS"
                            className="w-full object-fit h-48"
                        />
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                    </CardHeader>
                    <CardBody>
                        <div className="mb-3 flex items-center justify-between">
                            <Typography
                                variant="h5"
                                color="blue-gray"
                                className="font-small lexend-medium"
                            >
                                JUSTRUFS
                            </Typography>
                            <Typography
                                color="blue-gray"
                                className="flex items-center gap-1.5 font-normal"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="-mt-0.5 h-5 w-5 text-yellow-700"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                5.0
                            </Typography>
                        </div>
                        <Typography color="gray" className="inter-normal">
                            WEBSITE
                        </Typography>
                        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                            <Tooltip content="Website">
                                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70 text-lg">
                                    <a
                                        href="https://www.justrufs.com/"
                                        target="_blank"
                                    >
                                        <MdOutlineWeb />
                                    </a>
                                </span>
                            </Tooltip>
                        </div>
                    </CardBody>
                </Card>
                {/* card 23 */}
                <Card className="w-full max-w-[18rem] shadow-lg cursor-pointer">
                    <CardHeader floated={false} color="blue-gray">
                        <img
                            src="/assets/images/ClientsPortfolio/cirrussystems.png"
                            alt="Cirrus-systems"
                            className="w-full  object-cover h-[12rem]"
                        />
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                    </CardHeader>
                    <CardBody>
                        <div className="mb-3 flex items-center justify-between">
                            <Typography
                                variant="h5"
                                color="blue-gray"
                                className="font-medium lexend-medium"
                            >
                                CIRRUS SYSTEMS
                            </Typography>
                            <Typography
                                color="blue-gray"
                                className="flex items-center gap-1.5 font-normal"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="-mt-0.5 h-5 w-5 text-yellow-700"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                5.0
                            </Typography>
                        </div>
                        <Typography color="gray" className="inter-normal">
                            WEBSITE
                        </Typography>
                        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                            <Tooltip content="website">
                                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70 text-lg">
                                    <a
                                        href="https://www.cirrussystems.co.uk/"
                                        target="_blank"
                                    >
                                        <MdOutlineWeb />
                                    </a>
                                </span>
                            </Tooltip>
                        </div>
                    </CardBody>
                </Card>
                {/* card 24 */}
                <Card className="w-full max-w-[18rem] shadow-lg cursor-pointer">
                    <CardHeader floated={false} color="blue-gray">
                        <img
                            src="/assets/images/ClientsPortfolio/campbellslegal.png"
                            alt="campBellsLegal"
                            className="w-full object-fit h-40"
                        />
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                    </CardHeader>
                    <CardBody>
                        <div className="mb-3 flex items-center justify-between">
                            <Typography
                                variant="h5"
                                color="blue-gray"
                                className="font-small lexend-medium"
                            >
                                CAMPBELLS LEGAL
                            </Typography>
                            <Typography
                                color="blue-gray"
                                className="flex items-center gap-1.5 font-normal"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="-mt-0.5 h-5 w-5 text-yellow-700"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                5.0
                            </Typography>
                        </div>
                        <Typography color="gray" className="inter-normal">
                            WEBSITE
                        </Typography>
                        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                            <Tooltip content="website">
                                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70 text-lg">
                                    <a
                                        href="https://www.campbellslegal.com/"
                                        target="_blank"
                                    >
                                        <MdOutlineWeb />
                                    </a>
                                </span>
                            </Tooltip>
                        </div>
                    </CardBody>
                </Card>
                {/* card 25 */}
                <Card className="w-full max-w-[18rem] shadow-lg cursor-pointer">
                    <CardHeader floated={false} color="blue-gray">
                        <img
                            src="/assets/images/ClientsPortfolio/assignmentpedia.png"
                            alt="AssignmentsPedia"
                            className="w-full h-48 object-cover"
                        />
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                    </CardHeader>
                    <CardBody>
                        <div className="mb-3 flex items-center justify-between">
                            <Typography
                                variant="h5"
                                color="blue-gray"
                                className="font-medium lexend-medium"
                            >
                                ASSIGNMENTPEDIA
                            </Typography>
                            <Typography
                                color="blue-gray"
                                className="flex items-center gap-1.5 font-normal"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="-mt-0.5 h-5 w-5 text-yellow-700"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                4.5
                            </Typography>
                        </div>
                        <Typography color="gray" className="inter-normal">
                            WEBSITE
                        </Typography>
                        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                            <Tooltip content="Website">
                                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70 text-lg">
                                    <a
                                        href="https://www.assignmentpedia.com/"
                                        target="_blank"
                                    >
                                        <MdOutlineWeb />
                                    </a>
                                </span>
                            </Tooltip>
                        </div>
                    </CardBody>
                </Card>

                {/* card 26 */}
                <Card className="w-full max-w-[18rem] shadow-lg cursor-pointer">
                    <CardHeader floated={false} color="blue-gray">
                        <img
                            src="/assets/images/ClientsPortfolio/supergas.png"
                            alt="SuperGas"
                            className="w-full object-fit h-48"
                        />
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                    </CardHeader>
                    <CardBody>
                        <div className="mb-3 flex items-center justify-between">
                            <Typography
                                variant="h5"
                                color="blue-gray"
                                className="font-small lexend-medium"
                            >
                                SUPERGAS
                            </Typography>
                            <Typography
                                color="blue-gray"
                                className="flex items-center gap-1.5 font-normal"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="-mt-0.5 h-5 w-5 text-yellow-700"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                5.0
                            </Typography>
                        </div>
                        <Typography color="gray" className="inter-normal">
                            WEBSITE
                        </Typography>
                        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                            <Tooltip content="AppStore">
                                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70 text-lg">
                                    <a
                                        href="https://www.supergas.com/"
                                        target="_blank"
                                    >
                                        <MdOutlineWeb />
                                    </a>
                                </span>
                            </Tooltip>
                        </div>
                    </CardBody>
                </Card>
                {/* card 27 */}
                <Card className="w-full max-w-[18rem] shadow-lg cursor-pointer">
                    <CardHeader floated={false} color="blue-gray">
                        <img
                            src="/assets/images/ClientsPortfolio/cishrp.png"
                            alt="cishrp"
                            className="w-full  object-cover h-[12rem]"
                        />
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                    </CardHeader>
                    <CardBody>
                        <div className="mb-3 flex items-center justify-between">
                            <Typography
                                variant="h5"
                                color="blue-gray"
                                className="font-medium lexend-medium"
                            >
                                CISHRP
                            </Typography>
                            <Typography
                                color="blue-gray"
                                className="flex items-center gap-1.5 font-normal"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="-mt-0.5 h-5 w-5 text-yellow-700"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                5.0
                            </Typography>
                        </div>
                        <Typography color="gray" className="inter-normal">
                            WEBSITE
                        </Typography>
                        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                            <Tooltip content="website">
                                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70 text-lg">
                                    <a
                                        href="https://cishrp.ky/"
                                        target="_blank"
                                    >
                                        <MdOutlineWeb />
                                    </a>
                                </span>
                            </Tooltip>
                        </div>
                    </CardBody>
                </Card>
                {/* card 28 */}
                <Card className="w-full max-w-[18rem] shadow-lg cursor-pointer">
                    <CardHeader floated={false} color="blue-gray">
                        <img
                            src="/assets/images/ClientsPortfolio/centrocasas.png"
                            alt="centrocasas"
                            className="w-full object-fit h-48"
                        />
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
                    </CardHeader>
                    <CardBody>
                        <div className="mb-3 flex items-center justify-between">
                            <Typography
                                variant="h5"
                                color="blue-gray"
                                className="font-small lexend-medium"
                            >
                                CENTROCASAS
                            </Typography>
                            <Typography
                                color="blue-gray"
                                className="flex items-center gap-1.5 font-normal"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="-mt-0.5 h-5 w-5 text-yellow-700"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                5.0
                            </Typography>
                        </div>
                        <Typography color="gray" className="inter-normal">
                            WEBSITE
                        </Typography>
                        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                            <Tooltip content="website">
                                <span className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70 text-lg">
                                    <a
                                        href="https://centrocasas.com/"
                                        target="_blank"
                                    >
                                        <MdOutlineWeb />
                                    </a>
                                </span>
                            </Tooltip>
                        </div>
                    </CardBody>
                </Card>
            </div>
            <Footer />
        </div>
    );
};

export default References;
