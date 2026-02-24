import { motion } from 'framer-motion';

export default function Sustainability() {
    const initiatives = [
        { title: "Renewable Resource", desc: "Wood is a renewable resource, meaning that trees can be replanted and grown to replace those that are harvested." },
        { title: "Carbon Sequestration", desc: "Trees absorb carbon dioxide from the atmosphere as they grow. When wood is used in products, it continues to store carbon, acting as a carbon sink and mitigating climate change." },
        { title: "Emission Control", desc: "Our production processes adhere to strict emission standards, reducing harmful pollutants released into the atmosphere. We continuously invest in technologies that minimize our carbon footprint." },
        { title: "Efficient Energy Use", desc: "ZRK Group is dedicated to optimizing energy consumption across our facilities. From efficient machinery to renewable energy solutions, we're committed to reducing energy waste." },
        { title: "Waste Management", desc: "We implement comprehensive waste management strategies to minimize waste generation and promote recycling. By reusing materials and reducing waste, we're contributing to a cleaner environment." }
    ];

    return (
        <div className="pt-24 min-h-screen bg-[var(--bg-color)]">
            <section className="py-16 md:py-24 px-4 md:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Copy Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl text-zrk-black dark:text-white mb-6 uppercase tracking-tight">
                            Circular <br /><span className="text-zrk-gold">Economy.</span>
                        </h1>
                        <p className="font-body text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
                            Our commitment to environmental responsibility is at the core of our operations.
                            We implement radical initiatives that minimize our ecological footprint by obtaining raw materials entirely from managed forests and sustainable tree plantations.
                        </p>

                        <div className="space-y-6">
                            {initiatives.map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-zrk-gold/10 flex items-center justify-center font-sans font-bold text-zrk-gold">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <h3 className="font-sans font-bold text-zrk-black dark:text-white text-lg">{item.title}</h3>
                                        <p className="font-body text-gray-600 dark:text-gray-400 text-sm mt-1">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Image Node */}
                    <motion.div
                        className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] relative"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <img
                            src="/assets/images/environment/RAW%20MATERIALS%20FROM%20MANAGED%20FORESTS.jpg"
                            alt="Raw Materials From Managed Forests"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-zrk-black/20 mix-blend-overlay"></div>
                    </motion.div>

                </div>
            </section>
        </div>
    );
}
