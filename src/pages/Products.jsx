import React from 'react';
import MotionWrapper from '../components/MotionWrapper';
import ImageContainer from '../components/ImageContainer';
import StaggeredText from '../components/StaggeredText';
import { ArrowDown } from 'lucide-react';

const Products = () => {
    const products = [
        { id: 1, name: "UV Lux", src: "/assets/images/home/banner-1.webp", desc: "High Gloss Elite finishes.", type: "Laminated Boards", spec: "Premium" },
        { id: 2, name: "Lamination Series", src: "/assets/images/home/banner-2.webp", desc: "Textured Laminates & Melamine Laminated boards.", type: "Laminated Boards", spec: "Standard" },
        { id: 3, name: "MDF", src: "/assets/images/about/about.png", desc: "High density structural core. The foundation of excellence.", type: "Raw Material", spec: "E1 Standard" },
        { id: 4, name: "Particleboard", src: "/assets/images/home/catalouge.jpg", desc: "Durable and versatile core material.", type: "Raw Material", spec: "Standard" }
    ];

    return (
        <div className="w-full">
            {/* Product Hero */}
            <section className="px-6 py-20 bg-industrial-dark text-industrial-light max-w-7xl mx-auto mt-8">
                <MotionWrapper yOffset={30}>
                    <h1 className="text-5xl md:text-8xl font-sans font-bold uppercase tracking-tighter mb-6 relative">
                        <StaggeredText text="Material" />
                        <br />
                        <span className="text-zrk-gold">Library.</span>
                    </h1>
                    <p className="max-w-2xl text-lg font-medium text-gray-400">
                        Discover ZRK Group's premium MDF and laminated boards in Pakistan. Ideal for furniture and interior design, our products combine quality and durability.
                    </p>
                </MotionWrapper>
            </section>

            {/* Grid */}
            <section className="px-6 py-24 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                    {products.map((product, idx) => (
                        <MotionWrapper key={product.id} delay={0.1 * idx} yOffset={30}>
                            <div className="group cursor-pointer relative">

                                {/* Architectural Blueprint Hover Overlay */}
                                <div className="absolute inset-0 border border-zrk-gold/0 group-hover:border-zrk-gold/100 z-20 pointer-events-none transition-colors duration-MAX ease-industrial scale-95 group-hover:scale-100 opacity-0 group-hover:opacity-100" />

                                {/* Blueprint data reveal */}
                                <div className="absolute top-4 left-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-MAX ease-industrial pointer-events-none">
                                    <p className="text-[10px] font-body uppercase tracking-widest text-zrk-gold bg-industrial-dark px-2 py-1">Density: {product.spec}</p>
                                </div>

                                <div className="overflow-hidden mb-6 relative">
                                    <div className="transform group-hover:scale-[1.03] transition-transform duration-MAX ease-industrial group-hover:grayscale">
                                        <ImageContainer
                                            src={product.src}
                                            alt={product.name}
                                            aspectType="product"
                                            parallaxOffset={25}
                                        />
                                    </div>
                                    <div className="absolute top-4 right-4 bg-industrial-dark text-industrial-light px-4 py-1 text-xs font-sans uppercase tracking-widest z-10">
                                        {product.type}
                                    </div>
                                </div>

                                <div className="flex justify-between items-start border-b border-tundora/20 pb-4">
                                    <div>
                                        <h3 className="text-2xl font-sans uppercase font-bold tracking-tight mb-2 text-industrial-dark dark:text-industrial-light group-hover:text-zrk-gold transition-colors duration-300">
                                            {product.name}
                                        </h3>
                                        <p className="text-sm text-tundora dark:text-gray-400 max-w-sm">{product.desc}</p>
                                    </div>
                                    <ArrowDown size={24} className="text-industrial-dark dark:text-industrial-light opacity-0 group-hover:opacity-100 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-MAX ease-industrial" />
                                </div>
                            </div>
                        </MotionWrapper>
                    ))}
                </div>
            </section>

            {/* Sample Box / Catalog CTA */}
            <section className="px-6 py-24 bg-industrial-light dark:bg-industrial-dark max-w-7xl mx-auto group border-t border-tundora/20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <MotionWrapper yOffset={30}>
                        <div className="transform group-hover:scale-[0.98] transition-transform duration-MAX ease-industrial overflow-hidden border border-tundora/20">
                            <ImageContainer
                                src="/assets/images/home/catalouge.jpg"
                                alt="Architectural Sample Box"
                                aspectType="catalog"
                                parallaxOffset={10}
                            />
                        </div>
                    </MotionWrapper>
                    <MotionWrapper delay={0.2} yOffset={30}>
                        <h2 className="text-4xl md:text-6xl font-sans font-bold uppercase tracking-tighter mb-6 text-industrial-dark dark:text-industrial-light">
                            <StaggeredText text="Enterprise" />
                            <br />
                            <StaggeredText text="Samples" delayOffset={0.2} />
                        </h2>
                        <p className="text-tundora dark:text-gray-400 mb-8 max-w-md">
                            Request the official ZRK Specifier Box. Includes physical swatches of our entire 2026 collection, engineered technical sheets, and certification documents.
                        </p>
                        <button
                            className="inline-flex items-center gap-4 text-sm font-sans tracking-widest uppercase bg-zrk-gold text-industrial-dark px-8 py-4 hover:bg-industrial-dark hover:text-industrial-light dark:hover:bg-industrial-light dark:hover:text-industrial-dark transition-colors duration-MAX ease-industrial"
                        >
                            Order Sample Kit
                        </button>
                    </MotionWrapper>
                </div>
            </section>
        </div>
    );
};

export default Products;
