import { motion } from 'framer-motion';

export default function E1Standards() {
    const benefits = [
        { title: "Low Formaldehyde Emissions", desc: "Releases low levels of formaldehyde, making it safer for indoor air quality and reducing health risks." },
        { title: "Improved Indoor Air Quality", desc: "Crucial for homes, schools, and workplaces where air quality translates directly to productivity and health." },
        { title: "Healthier Living Environment", desc: "Especially important in environments frequented by children, the elderly, or those with respiratory issues." },
        { title: "Versatility in Applications", desc: "Used for a wide range of applications, including furniture, cabinetry, panelling, and decorative projects." },
        { title: "Compliance with Regulations", desc: "Meets international health and safety regulations, suitable for global markets and building codes." },
        { title: "Durability and Performance", desc: "Retains the strength, durability, and workability of standard MDF without the chemical payload." }
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
