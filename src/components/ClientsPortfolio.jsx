import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Tooltip,
} from '@material-tailwind/react';
import { IoIosAppstore } from 'react-icons/io';
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { MdOutlineWeb } from 'react-icons/md';
import { Link } from 'react-router-dom';

const ClientsPortfolio = () => {
    return (
        <div className="dark:bg-[#FEFAF6]">
            <h1 className="uppercase text-3xl dark:mt-0 mt-10 mb-10 dark:text-black text-white text-center lexend-bold">
                Clients Portfolio
            </h1>
            <div className="p-4 flex items-center justify-center flex-wrap mb-8 gap-14">
                {/* Card 1 */}
                <Card className="w-full max-w-[18rem] shadow-lg cursor-pointer">
                    <CardHeader floated={false} color="blue-gray">
                        <img
                            src="https://www.virtutechsolutions.com/wp-content/uploads/2017/02/bidgo-2.jpg"
                            alt="ui/ux review check"
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
                            src="https://www.virtutechsolutions.com/wp-content/uploads/2023/02/1.png"
                            alt="ui/ux review check"
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
                            src="https://www.virtutechsolutions.com/wp-content/uploads/2023/02/3.png"
                            alt="ui/ux review check"
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
                            src="https://www.virtutechsolutions.com/wp-content/uploads/2023/02/4.png"
                            alt="ui/ux review check"
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
                            src="https://www.virtutechsolutions.com/wp-content/uploads/2017/02/appolo.jpg"
                            alt="ui/ux review check"
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
                            src="https://www.virtutechsolutions.com/wp-content/uploads/2017/02/fresh-direct-app-reference.jpg"
                            alt="ui/ux review check"
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
                            src="https://www.virtutechsolutions.com/wp-content/uploads/2017/02/irvine-company-2.png"
                            alt="ui/ux review check"
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
                            src="https://www.virtutechsolutions.com/wp-content/uploads/2017/02/fine-foods-2.png"
                            alt="ui/ux review check"
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
            </div>
            <div className="mb-8 dark:mb-0 flex items-center justify-center lexend-normal">
                <Link to="/references">
                    <button className="w-44 lexend-bold ring-offset-background transition-colors delay-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 inline-flex items-center justify-center px-6 py-2 border-0 rounded-md text-sm font-medium text-white bg-gradient-to-l from-blue-500 to-purple-600 shadow-lg hover:from-purple-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        View More
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ClientsPortfolio;
