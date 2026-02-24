import React from 'react';
import MotionWrapper from '../components/MotionWrapper';
import ImageContainer from '../components/ImageContainer';
import StaggeredText from '../components/StaggeredText';
import { ArrowDown } from 'lucide-react';

const Products = () => {
    const products = [
        { id: 1, name: "Classic 7001", src: "https://zrkgroup.com/public/admin/images/product/UV%20Lux%20Classic%20%207001.png", type: "UV Lux", spec: "Classic", desc: "High Gloss Series" },
        { id: 2, name: "Classic 7002", src: "https://zrkgroup.com/public/admin/images/product/UV%20Lux%20Classic%20%207002.png", type: "UV Lux", spec: "Classic", desc: "High Gloss Series" },
        { id: 3, name: "Classic 7017", src: "https://zrkgroup.com/public/admin/images/product/UV%20Lux%20Classic%20%207017.png", type: "UV Lux", spec: "Classic", desc: "High Gloss Series" },
        { id: 4, name: "Classic 7018", src: "https://zrkgroup.com/public/admin/images/product/UV%20Lux%20Classic%20%207018.png", type: "UV Lux", spec: "Classic", desc: "High Gloss Series" },
        { id: 5, name: "Classic 7021", src: "https://zrkgroup.com/public/admin/images/product/UV%20Lux%20Classic%20%207021.png", type: "UV Lux", spec: "Classic", desc: "High Gloss Series" },
        { id: 6, name: "Classic 7022", src: "https://zrkgroup.com/public/admin/images/product/UV%20Lux%20Classic%20%207022.png", type: "UV Lux", spec: "Classic", desc: "High Gloss Series" },
        { id: 7, name: "Classic 7024", src: "https://zrkgroup.com/public/admin/images/product/UV%20Lux%20Classic%20%207024.png", type: "UV Lux", spec: "Classic", desc: "High Gloss Series" },
        { id: 8, name: "Classic 7025", src: "https://zrkgroup.com/public/admin/images/product/UV%20Lux%20Classic%20%207025.png", type: "UV Lux", spec: "Classic", desc: "High Gloss Series" },
        { id: 9, name: "Classic 7026", src: "https://zrkgroup.com/public/admin/images/product/UV%20Lux%20Classic%20%207026.png", type: "UV Lux", spec: "Classic", desc: "High Gloss Series" },
        { id: 10, name: "Classic 7027", src: "https://zrkgroup.com/public/admin/images/product/UV%20Lux%20Classic%20%207027.png", type: "UV Lux", spec: "Classic", desc: "High Gloss Series" },
        { id: 11, name: "Classic 7028", src: "https://zrkgroup.com/public/admin/images/product/UV%20Lux%20Classic%20%207028.png", type: "UV Lux", spec: "Classic", desc: "High Gloss Series" },
        { id: 12, name: "Classic 7029", src: "https://zrkgroup.com/public/admin/images/product/UV%20Lux%20Classic%20%207029.png", type: "UV Lux", spec: "Classic", desc: "High Gloss Series" },
        { id: 13, name: "Classic 7030", src: "https://zrkgroup.com/public/admin/images/product/UV%20Lux%20Classic%20%207030.png", type: "UV Lux", spec: "Classic", desc: "High Gloss Series" },
        { id: 14, name: "Classic 7031", src: "https://zrkgroup.com/public/admin/images/product/UV%20Lux%20Classic%20%207031.png", type: "UV Lux", spec: "Classic", desc: "High Gloss Series" },
        { id: 15, name: "Classic 7032", src: "https://zrkgroup.com/public/admin/images/product/UV%20Lux%20Classic%20%207032.png", type: "UV Lux", spec: "Classic", desc: "High Gloss Series" },
        { id: 16, name: "Classic 7033", src: "https://zrkgroup.com/public/admin/images/product/UV%20Lux%20Classic%20%207033.png", type: "UV Lux", spec: "Classic", desc: "High Gloss Series" },
        { id: 17, name: "Classic 7034", src: "https://zrkgroup.com/public/admin/images/product/UV%20Lux%20Classic%20%207034.png", type: "UV Lux", spec: "Classic", desc: "High Gloss Series" },
        { id: 18, name: "Classic 7035", src: "https://zrkgroup.com/public/admin/images/product/UV%20Lux%20Classic%20%207035.png", type: "UV Lux", spec: "Classic", desc: "High Gloss Series" },
        { id: 19, name: "Classic 7036", src: "https://zrkgroup.com/public/admin/images/product/UV%20Lux%20Classic%20%207036.png", type: "UV Lux", spec: "Classic", desc: "High Gloss Series" },
        { id: 20, name: "Glitter 4001", src: "https://zrkgroup.com/public/admin/images/product/UV%20Lux%20Glitter%204001.png", type: "UV Lux", spec: "Glitter", desc: "Premium Finish" },
        { id: 21, name: "Glitter 4002", src: "https://zrkgroup.com/public/admin/images/product/UV%20Lux%20Glitter%204002.png", type: "UV Lux", spec: "Glitter", desc: "Premium Finish" },
        { id: 22, name: "Glitter 4003", src: "https://zrkgroup.com/public/admin/images/product/UV%20Lux%20Glitter%204003.png", type: "UV Lux", spec: "Glitter", desc: "Premium Finish" },
        { id: 23, name: "Glitter 4004", src: "https://zrkgroup.com/public/admin/images/product/UV%20Lux%20Glitter%204004.png", type: "UV Lux", spec: "Glitter", desc: "Premium Finish" },
        { id: 24, name: "Glitter 4005", src: "https://zrkgroup.com/public/admin/images/product/UV%20Lux%20Glitter%204005.png", type: "UV Lux", spec: "Glitter", desc: "Premium Finish" }
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
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product, idx) => (
                        <MotionWrapper key={product.id} delay={0.05 * (idx % 4)} yOffset={30}>
                            <div className="group structural-panel relative cursor-pointer overflow-hidden flex flex-col h-full rounded-lg border border-tundora/10 dark:border-zinc-800 bg-white/5 dark:bg-black/20 p-4">

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
