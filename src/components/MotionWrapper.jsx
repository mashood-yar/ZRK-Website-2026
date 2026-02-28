import React from 'react';
import { motion } from 'framer-motion';

/**
 * Ensures strict adherence to the application's animation rules:
 * - Transform + opacity only.
 * - Max 600ms duration.
 * - Cubic-bezier(0.22, 1, 0.36, 1) timing function.
 * - NO floaty animations.
 */
const MotionWrapper = ({ children, className = '', delay = 0, yOffset = 20 }) => {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: yOffset }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
                duration: 0.6,
                delay: delay,
                ease: [0.22, 1, 0.36, 1], // industrial cubic-bezier
            }}
        >
            {children}
        </motion.div>
    );
};

export default MotionWrapper;
