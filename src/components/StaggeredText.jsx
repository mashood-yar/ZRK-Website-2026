import React from 'react';
import { motion } from 'framer-motion';

/**
 * Typographic stagger effect. Reveals text word-by-word with brutalist precision.
 * FIX: Uses lazy useState initializer for isMobile to avoid flash on first render.
 */
const StaggeredText = ({ text, className = "", delayOffset = 0 }) => {
    // Lazy initializer runs synchronously on first render — no useEffect flash
    const [isMobile] = React.useState(
        () => typeof window !== 'undefined' && (
            window.matchMedia("(max-width: 768px)").matches ||
            window.matchMedia("(pointer: coarse)").matches
        )
    );

    const words = text.split(" ");

    return (
        <span className={`inline-flex flex-wrap ${className}`}>
            {words.map((word, i) => (
                <span key={i} className="overflow-hidden mr-[0.25em]">
                    {isMobile ? (
                        <span className="inline-block">{word}</span>
                    ) : (
                        <motion.span
                            className="inline-block"
                            initial={{ y: "100%", opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true, amount: 0.1 }}
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
