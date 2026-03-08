import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

/**
 * Brutalist Monolithic Page Transition Mask.
 * Slides a concrete-like block across the screen on route change.
 */
const PageTransition = ({ children }) => {
    const location = useLocation();

    return (
        <div className="relative">
            {/* The entering block */}
            <motion.div
                key={location.pathname + "-in"}
                className="fixed inset-0 z-[100] bg-industrial-dark dark:bg-industrial-light origin-bottom pointer-events-none"
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Content wrapper taking standard layout constraints */}
            <motion.div
                key={location.pathname + "-content"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="w-full flex-grow relative"
            >
                {children}
            </motion.div>
        </div>
    );
};

export default PageTransition;
