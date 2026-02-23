import React from 'react';
import { motion } from 'framer-motion';

/**
 * Typographic stagger effect. Reveals text word-by-word with brutalist precision.
 * Adheres to the 0.22, 1, 0.36, 1 curve and transform/opacity rule.
 */
const StaggeredText = ({ text, className = "", delayOffset = 0 }) => {
    const words = text.split(" ");

    // Wrap tags and complex text passed as string isn't fully supported to split this way 
    // without losing HTML. Assuming clean text usage.

    return (
        <span className={`inline-flex flex-wrap ${className}`}>
            {words.map((word, i) => (
                <span key={i} className="overflow-hidden mr-[0.25em]">
                    <motion.span
                        className="inline-block"
                        initial={{ y: "100%", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{
                            duration: 0.6,
                            delay: delayOffset + i * 0.05,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </span>
    );
};

export default StaggeredText;
