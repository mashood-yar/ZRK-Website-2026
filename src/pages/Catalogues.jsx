import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';

export default function Catalogues() {
    const catalogues = [
        "Master Catalogue",
        "Swiss Ultra UV Lux Catalogue",
        "Brushed Wood Catalogue",
        "Leather Catalogue",
        "Door Skin Catalogue",
        "Lamination Series Catalogue",
        "Floral Catalogue",
        "Groove Catalogue",
        "UV Lux Catalogue",
        "Veneer Catalogue",
        "High Gloss Elite Catalogue",
        "Fabric Catalogue",
        "Syncron Catalogue"
    ];

    return (
        <div className="pt-24 min-h-screen bg-[var(--bg-color)]">

            <section className="py-16 md:py-24 px-4 md:px-8 bg-zrk-black text-white text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl mb-6 uppercase tracking-tight">
                        Digital <span className="text-zrk-gold">Catalogues.</span>
                    </h1>
                    <p className="font-body text-gray-400 max-w-2xl mx-auto text-lg">
                        The complete technical specifications, aesthetic palettes, and material grades for every ZRK Group manufacturing line.
                    </p>
                </motion.div>
            </section>

            <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {catalogues.map((cat, i) => (
                        <motion.div
                            key={i}
                            className="group bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 p-6 rounded-xl hover:border-zrk-gold transition-colors duration-300 flex items-center justify-between cursor-pointer shadow-sm hover:shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-gray-50 dark:bg-zinc-800 rounded text-zrk-gold group-hover:bg-zrk-gold group-hover:text-white transition-colors">
                                    <FileText className="w-6 h-6" />
                                </div>
                                <h3 className="font-sans font-bold text-zrk-black dark:text-white group-hover:text-zrk-black dark:group-hover:text-zrk-gold transition-colors">{cat}</h3>
                            </div>
                            <Download className="w-5 h-5 text-gray-400 group-hover:text-zrk-gold transition-colors" />
                        </motion.div>
                    ))}
                </div>
            </section>

        </div>
    );
}
