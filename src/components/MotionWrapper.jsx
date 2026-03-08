import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * Scroll-reveal animation wrapper.
 * 
 * FIX: Changed from whileInView to useInView hook + animate.
 * whileInView was failing for top-of-page elements already in viewport on
 * initial load (framer-motion v12 IntersectionObserver timing issue).
 * useInView fires reliably on mount for both in-view and scroll-in elements.
 */
const MotionWrapper = ({ children, className = '', delay = 0, yOffset = 20 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    // Detect mobile/touch to skip scroll animations
    const isMobile = React.useMemo(
        () => typeof window !== 'undefined' && (
            window.matchMedia("(max-width: 768px)").matches ||
            window.matchMedia("(pointer: coarse)").matches
        ),
        []
    );

    if (isMobile) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, y: yOffset }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
            transition={{
                duration: 0.6,
                delay: delay,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            {children}
        </motion.div>
    );
};

export default MotionWrapper;
