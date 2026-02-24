import React from 'react';
import MotionWrapper from '../components/MotionWrapper';
import ImageContainer from '../components/ImageContainer';
import StaggeredText from '../components/StaggeredText';
import { ArrowDown } from 'lucide-react';

const Products = () => {
    const products = [
        { id: 1, name: "UV Lux", src: "/assets/images/dark-walnut.png", desc: "High Gloss Elite finishes.", type: "Laminated Boards", spec: "Premium" },
        { id: 2, name: "Lamination Series", src: "/assets/images/matte-charcoal.png", desc: "Textured Laminates & Melamine Laminated boards.", type: "Laminated Boards", spec: "Standard" },
        { id: 3, name: "MDF", src: "/assets/images/raw-mdf.png", desc: "High density structural core. The foundation of excellence.", type: "Raw Material", spec: "E1 Standard" },
        { id: 4, name: "Particleboard", src: "/assets/images/scandinavian-oak.png", desc: "Durable and versatile core material.", type: "Raw Material", spec: "Standard" }
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {products.map((product, idx) => (
                        <MotionWrapper key={product.id} delay={0.1 * idx} yOffset={30}>
                            <div className="group structural-panel relative cursor-pointer overflow-hidden flex flex-col h-full">

                                {/* Blueprint data reveal - Progressive Disclosure (Hick's Law) */}
                                <div className="absolute top-8 left-8 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                    <p className="text-[10px] font-body uppercase tracking-widest text-zrk-gold bg-industrial-dark px-2 py-1">Density: {product.spec}</p>
                                </div>

                                <div className="overflow-hidden mb-8 relative rounded filter grayscale-[30%] group-hover:grayscale-0 transition-all duration-500">
                                    <div className="transform group-hover:scale-105 transition-transform duration-MAX ease-industrial">
                                        <ImageContainer
                                            src={product.src}
                                            alt={product.name}
                                            aspectType="product"
                                            parallaxOffset={15}
                                        />
                                    </div>
                                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/90 text-zrk-black dark:text-white px-3 py-1 text-[10px] font-sans uppercase tracking-widest z-10 font-bold backdrop-blur-sm shadow-sm">
                                        {product.type}
                                    </div>
                                </div>

                                <div className="flex justify-between items-end flex-grow">
                                    <div>
                                        <h3 className="text-2xl font-sans uppercase font-bold tracking-tight mb-2 text-industrial-dark dark:text-industrial-light group-hover:text-zrk-gold transition-colors duration-300">
                                            {product.name}
                                        </h3>
                                        <p className="text-sm text-tundora dark:text-gray-400 max-w-sm line-clamp-2">{product.desc}</p>
                                    </div>
                                    <div className="w-10 h-10 rounded-full border border-gray-200 dark:border-zinc-800 flex items-center justify-center group-hover:border-zrk-gold group-hover:bg-zrk-gold group-hover:text-white transition-all duration-300 text-tundora ml-4 shrink-0">
                                        <ArrowDown size={18} className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                    </div>
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
                                src="/assets/images/sample-box.png"
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
                        <button className="btn-primary mt-4">
                            Order Sample Kit
                        </button>
                    </MotionWrapper>
                </div>
            </section>
        </div>
    );
};

export default Products;
