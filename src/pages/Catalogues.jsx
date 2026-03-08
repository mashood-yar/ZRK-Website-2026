import React from 'react';
import MotionWrapper from '../components/MotionWrapper';
import ImageContainer from '../components/ImageContainer';
import StaggeredText from '../components/StaggeredText';
import { Download } from 'lucide-react';

export default function Catalogues() {
    const catalogues = [
        { id: 1, title: "Master Catalogue", image: "/assets/images/catalogues/master-catalog.jpg", pdf: "https://zrkgroup.com/public/admin/catalog/Master%20Catalogue%20High%20Res%20Volume.pdf" },
        { id: 2, title: "Swiss Ultra UV Lux", image: "/assets/images/catalogues/swiss-grace-catalog.jpg", pdf: "https://zrkgroup.com/public/admin/catalog/Swiss%20Ultra%20UV%20Lux%20-%20High%20Res.pdf" },
        { id: 3, title: "Brushed Wood", image: "/assets/images/catalogues/brushed-wood-catalog.jpg", pdf: "https://zrkgroup.com/public/admin/catalog/Brushed%20Wood%20Catalogue%20High%20Res%20Volume.pdf" },
        { id: 4, title: "Leather", image: "/assets/images/catalogues/leather-catalog.jpg", pdf: "https://zrkgroup.com/public/admin/catalog/Leather%20Catalogue%20High%20Res%20Volume.pdf" },
        { id: 5, title: "Door Skin", image: "/assets/images/catalogues/door-skin-catalog.jpg", pdf: "https://zrkgroup.com/public/admin/catalog/Door%20Skin%20Catalogue%20High%20Res%20Volume.pdf" },
        { id: 6, title: "Lamination Series", image: "/assets/images/catalogues/lamination-series-catalog.jpg", pdf: "https://zrkgroup.com/public/admin/catalog/Lamination%20Series%20Catalogue%20High%20Res%20Volume.pdf" },
        { id: 7, title: "Floral", image: "/assets/images/catalogues/floral-catalog.jpg", pdf: "https://zrkgroup.com/public/admin/catalog/Floral%20Catalogue%20High%20Res%20Volume.pdf" },
        { id: 8, title: "Groove", image: "/assets/images/catalogues/groove-catalog.jpg", pdf: "https://zrkgroup.com/public/admin/catalog/Groove%20Catalogue%20High%20Res%20Volume.pdf" },
        { id: 9, title: "UV Lux", image: "/assets/images/catalogues/uv-lux-catalog.jpg", pdf: "https://zrkgroup.com/public/admin/catalog/UV%20Lux%20Catalogue%20High%20Res%20Volume.pdf" },
        { id: 10, title: "Veneer", image: "/assets/images/catalogues/vaneer-catalog.jpg", pdf: "https://zrkgroup.com/public/admin/catalog/Veneer%20Catalogue%20High%20Res%20Volume.pdf" },
        { id: 11, title: "High Gloss Elite", image: "/assets/images/catalogues/high-gloss-catalog.jpg", pdf: "https://zrkgroup.com/public/admin/catalog/High%20Gloss%20Elite%20Catalogue%20High%20Res%20Volume.pdf" },
        { id: 12, title: "Fabric", image: "/assets/images/catalogues/fabric.jpg", pdf: "https://zrkgroup.com/public/admin/catalog/Fabric%20Catalogue%20High%20Res%20Volume.pdf" },
        { id: 13, title: "Syncron", image: "/assets/images/catalogues/Syncron.jpg", pdf: "https://zrkgroup.com/public/admin/catalog/Syncron%20Catalogue.pdf" }
    ];

    return (
        <div className="min-h-screen bg-[var(--bg-color)]">
            {/* Header */}
            <section className="py-24 px-4 md:px-8 border-b border-tundora/20">
                <div className="max-w-4xl mx-auto text-center">
                    <MotionWrapper yOffset={30}>
                        <h1 className="font-sans font-bold text-5xl md:text-7xl text-industrial-dark dark:text-industrial-light mb-8 uppercase tracking-tight leading-[0.9]">
                            <StaggeredText text="Download" /> <br />
                            <StaggeredText text="Catalogues." className="text-zrk-gold" delayOffset={0.2} />
                        </h1>
                    </MotionWrapper>
                    <MotionWrapper delay={0.4} yOffset={20}>
                        <p className="font-body text-tundora dark:text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                            Explore our comprehensive collection of materials and finishes. Download ZRK Group's high-resolution catalogues to specify the perfect surfaces for your next architectural project.
                        </p>
                    </MotionWrapper>
                </div>
            </section>

            {/* Catalogue Grid */}
            <section className="py-24 px-4 md:px-8 max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                    {catalogues.map((cat, idx) => (
                        <MotionWrapper key={cat.id} delay={0.05 * (idx % 5)} yOffset={30}>
                            <a
                                href={cat.pdf}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block h-full"
                            >
                                <div className="structural-panel relative overflow-hidden flex flex-col h-full rounded-xl border border-tundora/10 dark:border-zinc-800 bg-white/5 dark:bg-black/20 p-4 transform hover:-translate-y-2 transition-all duration-500 hover:shadow-xl hover:border-zrk-gold/50">
                                    {/* Cover Image */}
                                    <div className="relative w-full aspect-[3/4] mb-4 overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-900 border border-tundora/5 dark:border-zinc-800">
                                        <div className="w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out origin-bottom">
                                            <ImageContainer
                                                src={cat.image}
                                                alt={`${cat.title} Cover`}
                                                aspectType="catalog"
                                                className="w-full h-full object-cover"
                                                parallaxOffset={10}
                                            />
                                        </div>

                                        {/* Overlay Hover Effect */}
                                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                            <div className="bg-zrk-gold text-white p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl">
                                                <Download size={24} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Copy */}
                                    <div className="mt-auto flex items-end justify-between pt-2">
                                        <h3 className="font-sans font-bold text-sm uppercase max-w-[80%] text-industrial-dark dark:text-industrial-light group-hover:text-zrk-gold transition-colors duration-300">
                                            {cat.title}
                                        </h3>
                                        <span className="font-body text-[10px] text-gray-400 font-bold tracking-widest uppercase border border-tundora/20 dark:border-zinc-800 px-2 py-0.5 rounded-sm bg-industrial-light dark:bg-industrial-dark">
                                            PDF
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </MotionWrapper>
                    ))}
                </div>
            </section>
        </div>
    );
}
