import React from 'react';
import { motion, useScroll } from 'framer-motion';

/**
 * Brutalist global scroll progress line.
 * Locks to the left edge of the viewport and strictly follows scroll completion.
 */
const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            className="fixed top-0 left-0 w-1 lg:w-2 h-screen z-50 origin-top bg-zrk-gold mix-blend-difference hidden md:block"
            style={{ scaleY: scrollYProgress }}
        />
    );
};

export default ScrollProgress;
