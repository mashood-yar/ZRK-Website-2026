import React from 'react';
import { motion } from 'framer-motion';

/**
 * Ensures strict adherence to the application's animation rules.
 * FIX: Uses lazy useState initializer for isMobile to avoid flash on first render.
 */
const MotionWrapper = ({ children, className = '', delay = 0, yOffset = 20 }) => {
    // Lazy initializer runs synchronously on first render — no useEffect flash
    const [isMobile] = React.useState(
        () => typeof window !== 'undefined' && (
            window.matchMedia("(max-width: 768px)").matches ||
            window.matchMedia("(pointer: coarse)").matches
        )
    );

    if (isMobile) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: yOffset }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
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
