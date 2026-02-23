import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Custom geometric cursor using mix-blend-mode difference.
 * Inverts against the background (black on white, white on black).
 */
const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', updateMousePosition);
        return () => window.removeEventListener('mousemove', updateMousePosition);
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-4 h-4 bg-white pointer-events-none z-[9999]"
            style={{
                mixBlendMode: 'difference',
                translateX: '-50%',
                translateY: '-50%',
            }}
            animate={{
                x: mousePosition.x,
                y: mousePosition.y,
            }}
            transition={{
                type: 'tween',
                ease: 'linear',
                duration: 0, // Instant follow, no spring physics as per rules
            }}
        />
    );
};

export default CustomCursor;
