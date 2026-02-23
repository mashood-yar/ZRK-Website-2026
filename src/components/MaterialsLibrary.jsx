import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const CATEGORIES = ["All", "MDF", "Particle Board", "Laminated"];

const materialsData = [
    { id: 1, name: 'African Walnut', thickness: '16mm', category: 'Laminated', image: '/assets/dark-walnut.webp' },
    { id: 2, name: 'Matte Charcoal', thickness: '16mm', category: 'Laminated', image: '/assets/matte-charcoal.webp' },
    { id: 3, name: 'Bleached Oak', thickness: '18mm', category: 'MDF', image: '/assets/bleached-oak.webp' },
    { id: 4, name: 'Raw Core', thickness: '12mm', category: 'Particle Board', image: '/assets/raw-mdf.webp' }
];

export default function MaterialsLibrary() {
    const [activeChip, setActiveChip] = useState("All");
    const [selectedTexture, setSelectedTexture] = useState(null);

    const filteredTextures = materialsData.filter(
        (tex) => activeChip === "All" || tex.category === activeChip
    );

    return (
        <section className="py-16 px-4 md:px-8 bg-[var(--bg-color)]">
            <div className="max-w-4xl mx-auto">
                <h2 className="font-sans font-bold text-3xl md:text-4xl mb-8">Live Materials Library</h2>

                {/* Filter Drawer */}
                <div className="flex overflow-x-auto pb-4 gap-3 no-scrollbar mb-6 snap-x">
                    {CATEGORIES.map((chip) => (
                        <button
                            key={chip}
                            onClick={() => setActiveChip(chip)}
                            className={`snap-start shrink-0 px-5 py-2 rounded-full font-body font-medium transition-colors ${activeChip === chip
                                ? "bg-zrk-gold text-white"
                                : "bg-gray-100 dark:bg-zinc-800 text-[var(--text-color)] hover:bg-gray-200 dark:hover:bg-zinc-700"
                                }`}
                        >
                            {chip.toUpperCase()}
                        </button>
                    ))}
                </div>

                {/* The Grid */}
                <div className="grid grid-cols-2 gap-2 md:gap-4">
                    {filteredTextures.map((tex) => (
                        <motion.div
                            key={tex.id}
                            className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSelectedTexture(tex)}
                        >
                            <img
                                src={tex.image}
                                alt={tex.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80" />
                            <div className="absolute bottom-0 left-0 p-3 md:p-4">
                                <p className="font-sans font-bold text-white text-sm md:text-lg">{tex.name}</p>
                                <p className="font-body text-xs text-gray-300 md:text-sm">{tex.category}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Bottom Sheet Modal */}
            <AnimatePresence>
                {selectedTexture && (
                    <>
                        <motion.div
                            className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedTexture(null)}
                        />
                        <motion.div
                            className="fixed bottom-0 left-0 w-full bg-[var(--bg-color)] rounded-t-3xl z-50 p-6 md:p-8 max-h-[85vh] overflow-y-auto will-change-transform"
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        >
                            <div className="w-12 h-1.5 bg-gray-300 dark:bg-zinc-700 rounded-full mx-auto mb-6" />
                            <button
                                onClick={() => setSelectedTexture(null)}
                                className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 dark:bg-zinc-800"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="w-full md:w-1/2 aspect-square rounded-2xl overflow-hidden">
                                    <img src={selectedTexture.image} alt={selectedTexture.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="w-full md:w-1/2 flex flex-col justify-center">
                                    <h3 className="font-sans font-bold text-2xl md:text-3xl mb-2">{selectedTexture.name}</h3>
                                    <div className="space-y-4 font-body mt-4">
                                        <div className="flex justify-between border-b border-gray-200 dark:border-zinc-800 pb-2">
                                            <span className="text-gray-500 dark:text-gray-400">Thickness</span>
                                            <span className="font-semibold">{selectedTexture.thickness}</span>
                                        </div>
                                        <div className="flex justify-between border-b border-gray-200 dark:border-zinc-800 pb-2">
                                            <span className="text-gray-500 dark:text-gray-400">Category</span>
                                            <span className="font-semibold">{selectedTexture.category}</span>
                                        </div>
                                    </div>

                                    <motion.button
                                        className="mt-8 w-full bg-zrk-black text-white font-sans font-semibold uppercase tracking-widest py-4 rounded border border-transparent flex items-center justify-center transition-colors duration-300"
                                        whileHover={{ scale: 1.02, backgroundColor: "#b8964c", borderColor: "#b8964c" }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Add to Sample Box
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}
