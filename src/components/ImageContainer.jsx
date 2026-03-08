import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Container that enforces exact aspect ratios and adds parallax effect.
 * FIX: Added 'square' to the aspectClasses map — was previously falling back
 * to 'aspect-video' which incorrectly rendered square images in 16:9.
 */
const ImageContainer = ({ src, alt, aspectType = '16/9', className = '', parallaxOffset = 50, priority = false }) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yBase = useTransform(scrollYProgress, [0, 1], [-parallaxOffset, parallaxOffset]);

    const aspectClasses = {
        'hero': 'aspect-hero',
        'product': 'aspect-product',
        'application': 'aspect-application',
        'sample': 'aspect-sample',
        'catalog': 'aspect-catalog',
        'square': 'aspect-square',  // FIX: was missing — caused square images to render at 16:9
    };

    const ratioClass = aspectClasses[aspectType] || 'aspect-video';

    return (
        <div ref={containerRef} className={`relative overflow-hidden bg-industrial-dark dark:bg-industrial-light ${ratioClass} ${className}`}>

            {/* Image with strict Parallax Y Transform */}
            <motion.img
                src={src}
                alt={alt}
                style={{ y: yBase, scale: 1.15 }}
                className="absolute inset-0 w-full h-full object-cover origin-center"
                loading={priority ? "eager" : "lazy"}
                fetchPriority={priority ? "high" : "auto"}
            />

            {/* Monolithic Slide Reveal Mask */}
            <motion.div
                className="absolute inset-0 bg-industrial-light dark:bg-industrial-dark z-10 origin-bottom"
                initial={{ scaleY: 1 }}
                whileInView={{ scaleY: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
        </div>
    );
};

export default ImageContainer;
