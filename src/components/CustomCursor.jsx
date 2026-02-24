import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

/**
 * Awwwards-Style Custom Cursor
 * Implements Doherty Threshold (sub-400ms feedback) by tracking mouse movements
 * and applying dynamic scaling effects when hovering over actionable elements.
 * Disabled automatically on touch interfaces (Mobile First rule).
 */
const CustomCursor = () => {
    // We only want to render the cursor on screens that support hover to avoid double-tapping on mobile
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    // Track mouse position directly using motion values for 60fps performance 
    // without triggering React state re-renders
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Apply spring physics for that "smooth lag" fluid feel
    const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        // Detect if it's a touch device
        if (window.matchMedia("(pointer: coarse)").matches) {
            setIsTouchDevice(true);
            return;
        }

        const handleMouseMove = (e) => {
            mouseX.set(e.clientX - 16); // offset by half the cursor size (32px)
            mouseY.set(e.clientY - 16);
        };

        const handleMouseOver = (e) => {
            // Check if we are hovering over anything that should trigger the "focus" scale
            const target = e.target;
            if (
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('tap-target') ||
                target.closest('.tap-target') ||
                window.getComputedStyle(target).cursor === 'pointer'
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        window.addEventListener('mouseover', handleMouseOver, { passive: true });

        // Cleanup
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [mouseX, mouseY]);

    // Don't render anything if it's a touch device
    if (isTouchDevice) return null;

    return (
        <>
            {/* Outer Expansion Ring */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-zrk-gold pointer-events-none z-[9999] mix-blend-difference hidden md:block"
                style={{
                    x: cursorX,
                    y: cursorY,
                }}
                animate={{
                    scale: isHovering ? 1.8 : 1,
                    backgroundColor: isHovering ? 'rgba(212, 175, 55, 0.1)' : 'transparent',
                    opacity: 1
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            />
            {/* Inner dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 rounded-full bg-zrk-gold pointer-events-none z-[9999] mix-blend-difference hidden md:block"
                style={{
                    x: useSpring(useMotionValue(mouseX.get() + 12), { damping: 40, stiffness: 400 }), // offset to center inside the 32px ring
                    y: useSpring(useMotionValue(mouseY.get() + 12), { damping: 40, stiffness: 400 }),
                }}
                animate={{
                    scale: isHovering ? 0 : 1, // dot disappears when ring expands
                    opacity: isHovering ? 0 : 1
                }}
            />
        </>
    );
};

export default CustomCursor;
