import { useEffect } from 'react';
import Footer from '../../Footer';
import Navbar from '../../NavBar';

const InventoryManagement = () => {
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
                    Inventory Management
                </h1>
            </div>

            <div className="flex mt-10 px-32 gap-10">
                <div>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        Take Control of Your Inventory and Boost Your Business
                        Growth
                    </h1>
                    <p className="text-gray-500 dark:text-gray-800 mt-5">
                        Are you tired of dealing with stockouts at critical
                        moments, stagnant inventory sitting in your warehouse
                        for months, or obsolete products that are eating into
                        your profits? It’s time to put an end to these
                        challenges and take your inventory management to the
                        next level with SAP Business One. Our comprehensive
                        solution empowers businesses like yours to prevent
                        stock-related issues and ensures efficient stock
                        management, order fulfillment, and inventory control.
                        With SAP’s powerful features, such as Warehouse
                        Management, Multichannel Selling, Order Management, and
                        Order Fulfillment with Insightful Reports, you can
                        optimize your inventory, increase sales, and streamline
                        operations for maximum productivity.
                    </p>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        Increase Sales with Multi-Channel Inventory Management
                    </h1>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Expand your business’s reach and tap into new revenue
                        streams with our multi-channel inventory management
                        system. Seamlessly set up and integrate your Amazon,
                        eBay, Etsy, or Shopify accounts and start selling your
                        merchandise across multiple platforms. Reach a broader
                        customer base and drive sales through various channels
                        effortlessly.
                    </p>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        Efficiently Manage Orders with Ease
                    </h1>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Our efficient order management system allows you to
                        effortlessly handle both offline and online orders in a
                        single platform. Create and manage purchase orders,
                        backorders, and drop shipments to ensure seamless
                        transactions. Streamline your order management process
                        to improve efficiency and customer satisfaction.
                    </p>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        End-to-End Tracking for Improved Inventory Control
                    </h1>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Gain complete visibility and control over your inventory
                        by tracking each item or batch with our serial number
                        and batch tracking feature. Monitor the movement of your
                        inventory in real-time and stay on top of expiry dates,
                        ensuring optimal control and minimizing any potential
                        losses.
                    </p>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        Seamless Shipping Integrations for Smooth Operations
                    </h1>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Make informed decisions when it comes to shipping by
                        accessing real-time shipping rates and in-transit
                        details from major shipping carriers. Choose the most
                        suitable shipping partner for your business and ensure a
                        seamless shipping process as a part of your
                        comprehensive inventory management system.
                    </p>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        Integrations with Accounting and CRM Systems for
                        Painless Financial Management
                    </h1>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Our seamless integration with CRM and Accounting
                        software simplifies your business operations by
                        automatically syncing your contacts, orders, and
                        financial data. Say goodbye to manual data entry and
                        streamline your financial management processes without
                        breaking a sweat.
                    </p>
                    <h1 className="text-white text-md lexend-bold mt-5 dark:text-black">
                        Effortless Warehouse Management for Enhanced Efficiency
                    </h1>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Easily monitor and manage your stock levels, facilitate
                        inter-warehouse transfers, and generate insightful
                        reports for specific warehouses within seconds. With our
                        Warehouse Management capabilities, you have complete
                        control and visibility over your inventory, allowing you
                        to optimize operations and make informed decisions.
                    </p>
                    <p className="text-gray-500 mt-5 mb-5 dark:text-gray-800">
                        Take charge of your inventory management today with SAP
                        Business One. Let us help you unlock the full potential
                        of your business and drive growth through efficient
                        inventory control, sales optimization, and streamlined
                        operations. Contact us now and experience the power of
                        SAP Business One for Inventory Management.
                    </p>
                </div>
                <img
                    src="https://img.freepik.com/free-vector/conveyor-belt-warehouse-concept-illustration_114360-22345.jpg?t=st=1719296090~exp=1719299690~hmac=2c866db5ac196602973b20356efdce555a8a1b09bcaeb811d82f0522de1be54b&w=996"
                    alt=""
                    className="h-[35rem] w-[35rem] rounded-md object-fit"
                />
            </div>
            <Footer />
        </div>
    );
};

export default InventoryManagement;
