import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * Typographic stagger effect. Reveals text word-by-word with brutalist precision.
 * 
 * FIX: Changed from whileInView to useInView hook + animate.
 * whileInView was failing for top-of-page elements already in viewport on
 * initial load (framer-motion v12 IntersectionObserver timing issue).
 * useInView fires reliably on mount for both in-view and scroll-in elements.
 */
const StaggeredText = ({ text, className = "", delayOffset = 0 }) => {
    const ref = useRef(null);
    // once: true means the animation only plays once (not reversed on scroll out)
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    // Detect mobile/touch to skip animations
    const isMobile = React.useMemo(
        () => typeof window !== 'undefined' && (
            window.matchMedia("(max-width: 768px)").matches ||
            window.matchMedia("(pointer: coarse)").matches
        ),
        []
    );

    const words = text.split(" ");

    return (
        <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
            {words.map((word, i) => (
                <span key={i} className="overflow-hidden mr-[0.25em]">
                    {isMobile ? (
                        <span className="inline-block">{word}</span>
                    ) : (
                        <motion.span
                            className="inline-block"
                            initial={{ y: "100%", opacity: 0 }}
                            animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: delayOffset + i * 0.05,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            {word}
                        </motion.span>
                    )}
                </span>
            ))}
        </span>
    );
};

export default StaggeredText;
