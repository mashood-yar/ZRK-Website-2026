import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

/**
 * Awwwards-Style Custom Cursor
 * All Hooks declared at top level — complies with Rules of Hooks.
 * Disabled automatically on touch interfaces.
 */
const CustomCursor = () => {
    // Initialize synchronously via lazy initializer to avoid flash on mobile
    const [isTouchDevice] = useState(
        () => typeof window !== 'undefined' && window.matchMedia("(pointer: coarse)").matches
    );
    const [isHovering, setIsHovering] = useState(false);

    // Track mouse position directly using motion values for 60fps performance
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Inner dot separate motion values — declared at top level (Rules of Hooks)
    const innerDotRawX = useMotionValue(-88);
    const innerDotRawY = useMotionValue(-88);

    // Apply spring physics for fluid feel
    const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    // Inner dot has tighter spring for faster response
    const innerDotX = useSpring(innerDotRawX, { damping: 40, stiffness: 400 });
    const innerDotY = useSpring(innerDotRawY, { damping: 40, stiffness: 400 });

    useEffect(() => {
        if (isTouchDevice) return;

        const handleMouseMove = (e) => {
            mouseX.set(e.clientX - 16);
            mouseY.set(e.clientY - 16);
            innerDotRawX.set(e.clientX - 4);
            innerDotRawY.set(e.clientY - 4);
        };

        const handleMouseOver = (e) => {
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

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [isTouchDevice, mouseX, mouseY, innerDotRawX, innerDotRawY]);

    // Don't render anything if it's a touch device
    if (isTouchDevice) return null;

    return (
        <>
            {/* Outer Expansion Ring */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-zrk-gold pointer-events-none z-[9999] mix-blend-difference hidden md:block"
                style={{ x: cursorX, y: cursorY }}
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
                style={{ x: innerDotX, y: innerDotY }}
                animate={{
                    scale: isHovering ? 0 : 1,
                    opacity: isHovering ? 0 : 1
                }}
            />
        </>
    );
};

export default CustomCursor;
