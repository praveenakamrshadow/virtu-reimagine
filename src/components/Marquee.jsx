const Marquee = () => {
    const images = [
        [
            '/public/assets/images/clients/ADP.png',
            '/public/assets/images/clients/AP 1.png',
            '/public/assets/images/clients/Apollo.png',
            '/public/assets/images/clients/bb-p.png',
            '/public/assets/images/clients/bcqs.png',
            '/public/assets/images/clients/Bidgo11.png',
            '/public/assets/images/clients/campbells.png',
            '/public/assets/images/clients/Carlo Laws.png',
            '/public/assets/images/clients/cbk logo.png',
            '/public/assets/images/clients/Centro cases.png',
            '/public/assets/images/clients/cirrus.png',
            '/public/assets/images/clients/cishrp.png',
            '/public/assets/images/clients/compass.png',
            '/public/assets/images/clients/damon.png',
            '/public/assets/images/clients/Deeplogics.png',
            '/public/assets/images/clients/ezbarrel.png',
            '/public/assets/images/clients/Fine Food.png',
            '/public/assets/images/clients/fsi1.png',
            '/public/assets/images/clients/fugenx-logo1.png',
            '/public/assets/images/clients/Genzpay1.png',
            '/public/assets/images/clients/grandcaymanian1.png',
            '/public/assets/images/clients/imena.png',
            '/public/assets/images/clients/iridium.png',
            '/public/assets/images/clients/Irvine Company.png',
            '/public/assets/images/clients/Island car.png',
            '/public/assets/images/clients/iway Dispatch.png',
            '/public/assets/images/clients/jmhs.png',
            '/public/assets/images/clients/justrufs.png',
            '/public/assets/images/clients/Keystone.png',
            '/public/assets/images/clients/kloc.png',
            '/public/assets/images/clients/Metro.png',
            '/public/assets/images/clients/Microsoft.png',
            '/public/assets/images/clients/noticel.png',
            '/public/assets/images/clients/Paciic Life.png',
            '/public/assets/images/clients/pfizer.png',
            '/public/assets/images/clients/PSI-Cloud-Gris-2.png',
            '/public/assets/images/clients/satandar.png',
            '/public/assets/images/clients/wissen.png',
            // Add more images here
        ],
        [
            '/public/assets/images/clients/fsi1.png',
            '/public/assets/images/clients/fugenx-logo1.png',
            '/public/assets/images/clients/Genzpay1.png',
            '/public/assets/images/clients/grandcaymanian1.png',
            '/public/assets/images/clients/imena.png',
            '/public/assets/images/clients/iridium.png',
            '/public/assets/images/clients/Irvine Company.png',
            '/public/assets/images/clients/Island car.png',
            '/public/assets/images/clients/iway Dispatch.png',
            '/public/assets/images/clients/jmhs.png',
            '/public/assets/images/clients/justrufs.png',
            '/public/assets/images/clients/Keystone.png',
            '/public/assets/images/clients/kloc.png',
            '/public/assets/images/clients/Metro.png',
            '/public/assets/images/clients/Microsoft.png',
            '/public/assets/images/clients/noticel.png',
            '/public/assets/images/clients/Paciic Life.png',
            '/public/assets/images/clients/pfizer.png',
            '/public/assets/images/clients/PSI-Cloud-Gris-2.png',
            '/public/assets/images/clients/satandar.png',
            '/public/assets/images/clients/wissen.png',
            '/public/assets/images/clients/ADP.png',
            '/public/assets/images/clients/AP 1.png',
            '/public/assets/images/clients/Apollo.png',
            '/public/assets/images/clients/bb-p.png',
            '/public/assets/images/clients/bcqs.png',
            '/public/assets/images/clients/Bidgo11.png',
            '/public/assets/images/clients/campbells.png',
            '/public/assets/images/clients/Carlo Laws.png',
            '/public/assets/images/clients/cbk logo.png',
            '/public/assets/images/clients/Centro cases.png',
            '/public/assets/images/clients/cirrus.png',
            '/public/assets/images/clients/cishrp.png',
            '/public/assets/images/clients/compass.png',
            '/public/assets/images/clients/damon.png',
            '/public/assets/images/clients/Deeplogics.png',
            '/public/assets/images/clients/ezbarrel.png',
            '/public/assets/images/clients/Fine Food.png',
            // Add more images here
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
        <div className="relative bg-white overflow-hidden p-12">
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
