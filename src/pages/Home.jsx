import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import MotionWrapper from '../components/MotionWrapper';
import ImageContainer from '../components/ImageContainer';
import StaggeredText from '../components/StaggeredText';

const slides = [
    {
        id: 1,
        desktop: "/assets/images/home/banner-1.webp",
        mobile: "/assets/images/home/mobile-banner-1.webp"
    },
    {
        id: 2,
        desktop: "/assets/images/home/banner-2.webp",
        mobile: "/assets/images/home/mobile-banner-2.webp"
    }
];

const CinematicSlider = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full overflow-hidden rounded filter grayscale-[15%] grid items-center justify-center bg-transparent">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="col-start-1 row-start-1 w-full flex justify-center"
                >
                    <picture>
                        <source media="(max-width: 768px)" srcSet={slides[current].mobile} />
                        <img
                            src={slides[current].desktop}
                            alt={`ZRK Architectural Banner ${current + 1}`}
                            className="w-auto h-auto max-w-full block mx-auto"
                            loading={current === 0 ? "eager" : "lazy"}
                            fetchPriority={current === 0 ? "high" : "auto"}
                        />
                    </picture>
                </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`transition-all duration-500 rounded-full ${i === current ? 'w-8 h-1.5 bg-zrk-gold' : 'w-2 h-1.5 bg-white/50 hover:bg-white'} `}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>

            {/* Cinematic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-industrial-dark/60 via-transparent to-transparent pointer-events-none z-10" />
        </div>
    );
};

const Home = () => {
    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="px-6 py-12 max-w-7xl mx-auto">
                <MotionWrapper yOffset={30}>
                    <div className="mb-8 relative z-10">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-bold uppercase tracking-tighter text-industrial-dark dark:text-industrial-light leading-[1.1]">
                            <StaggeredText text="High-Quality MDF" />
                            <br />
                            <StaggeredText text="& Laminated Boards" className="text-zrk-gold" delayOffset={0.2} />
                        </h1>
                    </div>
                </MotionWrapper>

                <MotionWrapper delay={0.2} yOffset={40}>
                    <div className="relative group -mt-10 lg:-mt-20 z-0">
                        <CinematicSlider />
                    </div>
                </MotionWrapper>

                <MotionWrapper delay={0.4} yOffset={20}>
                    <div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-tundora/20 pb-8">
                        <p className="max-w-xl text-lg font-medium text-tundora dark:text-gray-400 leading-relaxed">
                            Discover ZRK Group's premium MDF and laminated boards in Pakistan. Ideal for furniture and interior design, our products combine quality and durability.
                        </p>
                        <Link
                            to="/products"
                            className="btn-primary flex items-center gap-4 shrink-0"
                        >
                            Explore Collection
                            <ArrowRight size={20} className="transform group-hover:translate-x-2 transition-transform duration-300" />
                        </Link>
                    </div>
                </MotionWrapper>
            </section>

            {/* Featured Products */}
            <section className="px-6 py-24 bg-industrial-dark text-industrial-light overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <MotionWrapper yOffset={30}>
                        <h2 className="text-3xl md:text-5xl font-sans font-bold uppercase tracking-tighter mb-16">
                            <StaggeredText text="Featured Formats" />
                        </h2>
                    </MotionWrapper>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
                        {[
                            { id: 1, name: "Furniture and Interior", src: "/assets/kitchen.webp", desc: "Premium quality for enduring spaces" },
                            { id: 2, name: "Wall Panel", src: "/assets/lobby.webp", desc: "Aesthetic and durable interior solutions" },
                            { id: 3, name: "Door Skins", src: "/assets/boardroom.webp", desc: "Engineered excellence for doors" }
                        ].map((product, idx) => (
                            <MotionWrapper key={product.id} delay={0.1 * idx} yOffset={30}>
                                <Link to="/products" className="block group">
                                    <div className="overflow-hidden mb-6 relative">
                                        <div className="transform group-hover:scale-[1.02] transition-transform duration-MAX ease-industrial group-hover:grayscale">
                                            <ImageContainer
                                                src={product.src}
                                                alt={product.name}
                                                aspectType="product"
                                                parallaxOffset={15}
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-sans uppercase font-bold tracking-tight mb-2 group-hover:text-zrk-gold transition-colors duration-300">
                                        {product.name}
                                    </h3>
                                    <p className="text-sm text-gray-400">{product.desc}</p>
                                </Link>
                            </MotionWrapper>
                        ))}
                    </div>
                </div>
            </section>

            {/* Applications Gallery Showcase */}
            <section className="px-6 py-24 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5 order-2 lg:order-1">
                        <MotionWrapper yOffset={30}>
                            <h2 className="text-4xl md:text-5xl font-sans font-bold uppercase tracking-tighter mb-6 text-industrial-dark dark:text-industrial-light">
                                <StaggeredText text="E1 European" /> <br />
                                <StaggeredText text="Standards" delayOffset={0.1} />
                            </h2>
                            <p className="text-tundora dark:text-gray-400 mb-8 max-w-md">
                                Setting the benchmark for environmental safety and product quality. ZRK Group is committed to high standards of excellence.
                            </p>
                            <Link
                                to="/products"
                                className="inline-flex items-center gap-4 text-sm font-sans tracking-widest uppercase border border-industrial-dark dark:border-industrial-light px-8 py-4 hover:bg-industrial-dark hover:text-industrial-light dark:hover:bg-industrial-light dark:hover:text-industrial-dark transition-colors duration-MAX ease-industrial"
                            >
                                Learn More
                            </Link>
                        </MotionWrapper>
                    </div>

                    <div className="lg:col-span-7 order-1 lg:order-2">
                        <MotionWrapper delay={0.2} yOffset={40}>
                            <div className="relative group overflow-hidden">
                                <div className="transform group-hover:scale-[1.02] transition-transform duration-MAX ease-industrial">
                                    <img
                                        src="/assets/dark-walnut.webp"
                                        alt="E1 European Standards - Dark Walnut"
                                        className="w-auto h-auto max-w-full block mx-auto"
                                    />
                                </div>
                            </div>
                        </MotionWrapper>
                    </div>
                </div>
            </section>

            {/* Global Connectivity / Final CTA - Peak End Rule */}
            <section className="px-6 py-32 bg-industrial-light dark:bg-industrial-dark relative overflow-hidden group border-t border-tundora/20">
                <div className="absolute inset-0 bg-zrk-gold/5 pointer-events-none transition-colors duration-700 group-hover:bg-zrk-gold/10"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <MotionWrapper yOffset={30}>
                        <h2 className="text-4xl md:text-7xl font-sans font-bold uppercase tracking-tighter mb-8 text-industrial-dark dark:text-industrial-light">
                            <StaggeredText text="Start Your" />
                            <br />
                            <StaggeredText text="Project." className="text-zrk-gold" delayOffset={0.2} />
                        </h2>
                        <p className="text-lg text-tundora dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                            Engage with our architectural specialists to specify ZRK Group materials for your next development.
                        </p>
                        <Link
                            to="/contact"
                            className="btn-primary inline-flex items-center gap-4 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            Contact Sales
                            <ArrowRight size={20} className="transform group-hover:translate-x-2 transition-transform duration-300" />
                        </Link>
                    </MotionWrapper>
                </div>
            </section>
        </div>
    );
};

export default Home;
