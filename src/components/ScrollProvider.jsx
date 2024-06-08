import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';

const ScrollProvider = ({ children }) => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
        });

        return () => {
            if (scroll) scroll.destroy();
        };
    }, []);

    return (
        <div ref={scrollRef} data-scroll-container>
            {children}
        </div>
    );
};

export default ScrollProvider;
