const Marquee = () => {
    const images = [
        [
            '/assets/images/clients/ADP.png',
            '/assets/images/clients/AP 1.png',
            '/assets/images/clients/Apollo.png',
            '/assets/images/clients/bb-p.png',
            '/assets/images/clients/bcqs.png',
            '/assets/images/clients/Bidgo11.png',
            '/assets/images/clients/campbells.png',
            '/assets/images/clients/Carlo Laws.png',
            '/assets/images/clients/cbk logo.png',
            '/assets/images/clients/Centro cases.png',
            '/assets/images/clients/cirrus.png',
            '/assets/images/clients/cishrp.png',
            '/assets/images/clients/compass.png',
            '/assets/images/clients/damon.png',
            '/assets/images/clients/Deeplogics.png',
            '/assets/images/clients/ezbarrel.png',
            '/assets/images/clients/Fine Food.png',
            '/assets/images/clients/fsi1.png',
            '/assets/images/clients/fugenx-logo1.png',
            '/assets/images/clients/Genzpay1.png',
            '/assets/images/clients/grandcaymanian1.png',
            '/assets/images/clients/imena.png',
            '/assets/images/clients/iridium.png',
            '/assets/images/clients/Irvine Company.png',
            '/assets/images/clients/Island car.png',
            '/assets/images/clients/iway Dispatch.png',
            '/assets/images/clients/jmhs.png',
            '/assets/images/clients/justrufs.png',
            '/assets/images/clients/Keystone.png',
            '/assets/images/clients/kloc.png',
            '/assets/images/clients/Metro.png',
            '/assets/images/clients/Microsoft.png',
            '/assets/images/clients/noticel.png',
            '/assets/images/clients/Paciic Life.png',
            '/assets/images/clients/pfizer.png',
            '/assets/images/clients/PSI-Cloud-Gris-2.png',
            '/assets/images/clients/satandar.png',
            '/assets/images/clients/wissen.png',
        ],
        [
            '/assets/images/clients/fsi1.png',
            '/assets/images/clients/fugenx-logo1.png',
            '/assets/images/clients/Genzpay1.png',
            '/assets/images/clients/grandcaymanian1.png',
            '/assets/images/clients/imena.png',
            '/assets/images/clients/iridium.png',
            '/assets/images/clients/Irvine Company.png',
            '/assets/images/clients/Island car.png',
            '/assets/images/clients/iway Dispatch.png',
            '/assets/images/clients/jmhs.png',
            '/assets/images/clients/justrufs.png',
            '/assets/images/clients/Keystone.png',
            '/assets/images/clients/kloc.png',
            '/assets/images/clients/Metro.png',
            '/assets/images/clients/Microsoft.png',
            '/assets/images/clients/noticel.png',
            '/assets/images/clients/Paciic Life.png',
            '/assets/images/clients/pfizer.png',
            '/assets/images/clients/PSI-Cloud-Gris-2.png',
            '/assets/images/clients/satandar.png',
            '/assets/images/clients/wissen.png',
            '/assets/images/clients/ADP.png',
            '/assets/images/clients/AP 1.png',
            '/assets/images/clients/Apollo.png',
            '/assets/images/clients/bb-p.png',
            '/assets/images/clients/bcqs.png',
            '/assets/images/clients/Bidgo11.png',
            '/assets/images/clients/campbells.png',
            '/assets/images/clients/Carlo Laws.png',
            '/assets/images/clients/cbk logo.png',
            '/assets/images/clients/Centro cases.png',
            '/assets/images/clients/cirrus.png',
            '/assets/images/clients/cishrp.png',
            '/assets/images/clients/compass.png',
            '/assets/images/clients/damon.png',
            '/assets/images/clients/Deeplogics.png',
            '/assets/images/clients/ezbarrel.png',
            '/assets/images/clients/Fine Food.png',
        ],
    ];

    const marqueeStyle = {
        display: 'flex',
        whiteSpace: 'nowrap',
        animation: 'marquee 15s linear infinite',
    };

    const reverseMarqueeStyle = {
        display: 'flex',
        whiteSpace: 'nowrap',
        animation: 'reverseMarquee 55s linear infinite',
    };

    const blurStyle = {
        position: 'absolute',
        top: 0,
        right: 0,
        width: '4rem',
        height: '100%',
        background:
            'linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0))',
        opacity: 0.75,
    };

    return (
        <div className="relative bg-white dark:bg-[#FEFAF6] overflow-hidden p-12">
            <h1 className="text-3xl font-bold lexend-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-8">
                Featured Clients
            </h1>
            <div className="marquee" style={marqueeStyle}>
                {images[0].concat(images[0]).map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Client logo ${index + 1}`}
                        className="h-16 w-auto mx-2"
                    />
                ))}
            </div>
            <div className="marquee mt-5" style={reverseMarqueeStyle}>
                {images[1].concat(images[1]).map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Client logo ${index + 1}`}
                        className="h-16 w-auto mx-2"
                    />
                ))}
            </div>
            <div style={blurStyle}></div>
            <style>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                
                @keyframes reverseMarquee {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(50%);
                    }
                    }
                }

                .marquee {
                    display: flex;
                    white-space: nowrap;
                    animation-iteration-count: infinite;
                }
            `}</style>
        </div>
    );
};

export default Marquee;
