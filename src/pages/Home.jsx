import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import MotionWrapper from '../components/MotionWrapper';
import ImageContainer from '../components/ImageContainer';
import StaggeredText from '../components/StaggeredText';

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
                        <ImageContainer
                            src="/assets/images/home/banner-1.webp"
                            alt="High-Quality MDF & Laminated Boards"
                            aspectType="hero"
                            parallaxOffset={40}
                            priority={true}
                        />
                        <div className="absolute inset-0 bg-industrial-dark/10 transition-colors duration-MAX ease-industrial group-hover:bg-transparent pointer-events-none"></div>
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
                            { id: 1, name: "Furniture and Interior", src: "/assets/images/residential-kitchen.png", desc: "Premium quality for enduring spaces" },
                            { id: 2, name: "Wall Panel", src: "/assets/images/hotel-lobby.png", desc: "Aesthetic and durable interior solutions" },
                            { id: 3, name: "Door Skins", src: "/assets/images/corporate-boardroom.png", desc: "Engineered excellence for doors" }
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
                                    <ImageContainer
                                        src="/assets/images/home/banner-2.webp"
                                        alt="E1 European Standards"
                                        aspectType="application"
                                        parallaxOffset={35}
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
