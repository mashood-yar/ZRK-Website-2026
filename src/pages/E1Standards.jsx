import { motion } from 'framer-motion';

export default function E1Standards() {
    const benefits = [
        { title: "Low Formaldehyde Emissions", desc: "E1 certification ensures that the MDF releases low levels of formaldehyde, making it safer for indoor air quality and reducing health risks associated with prolonged exposure." },
        { title: "Improved Indoor Air Quality", desc: "With lower emissions, E1 MDF contributes to better indoor air quality, which is crucial for homes, schools, and workplaces." },
        { title: "Healthier Living Environment", desc: "The reduced chemical emissions make E1 MDF a healthier choice, especially important in environments frequented by children, the elderly, or those with respiratory issues." },
        { title: "Versatility in Applications", desc: "E1 MDF can be used for a wide range of applications, including furniture, cabinetry, panelling, and decorative projects, without the worry of high chemical emissions." },
        { title: "Compliance with Regulations", desc: "E1 MDF meets international health and safety regulations, making it suitable for global markets and ensuring compliance with building and manufacturing codes." },
        { title: "Durability and Performance", desc: "E1 MDF still retains the strength, durability, and workability of standard MDF, making it a practical choice for various construction and design needs." }
    ];

    return (
        <div className="pt-24 min-h-screen bg-[var(--bg-color)]">
            {/* Header */}
            <section className="py-16 md:py-24 px-4 md:px-8 bg-zrk-bg dark:bg-black/20 border-b border-gray-200 dark:border-zinc-800">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h1
                        className="font-sans font-bold text-4xl md:text-5xl text-zrk-black dark:text-white mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        E1 Emission <span className="text-zrk-gold">Standards.</span>
                    </motion.h1>
                    <motion.p
                        className="font-body text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        ZRK Group’s E1 MDF meets top-tier European emission standards, offering significant
                        advantages by enhancing indoor air quality, reducing environmental impact, and ensuring superior product safety.
                    </motion.p>
                </div>
            </section>

            {/* Grid */}
            <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, i) => (
                        <motion.div
                            key={i}
                            className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <h3 className="font-sans font-bold text-xl text-zrk-black dark:text-white mb-3">{benefit.title}</h3>
                            <p className="font-body text-gray-600 dark:text-gray-400">{benefit.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
