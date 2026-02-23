import { motion } from 'framer-motion';

export default function Infrastructure() {
    return (
        <section className="py-16 md:py-24 bg-zrk-bg text-gray-900 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 md:px-8">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="font-sans font-bold text-3xl md:text-5xl mb-4 text-zrk-black text-balance">
                        State-of-the-Art <span className="text-zrk-gold">Manufacturing.</span>
                    </h2>
                    <p className="font-body text-gray-600 md:text-lg leading-relaxed">
                        ZRK Group operates the largest and most advanced wood processing facilities in Pakistan.
                        Meticulous engineering, rigorous compliance, and massive scale to serve enterprise demands globally.
                    </p>
                </div>

                {/* Dynamic Image Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">

                    {/* Main Aerial Drone Shot */}
                    <motion.div
                        className="md:col-span-7 rounded-2xl overflow-hidden shadow-2xl relative aspect-[4/3] md:aspect-auto md:h-[500px]"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <img
                            src="https://zrkgroup.com/public/front/img/about/about.png"
                            alt="ZRK Factory Aerial Drone View"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Right Column Stack */}
                    <div className="md:col-span-5 flex flex-col gap-6 md:gap-8">
                        <motion.div
                            className="rounded-xl overflow-hidden shadow-lg relative aspect-video"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <img
                                src="https://zrkgroup.com/public/front/img/about/our-vision.jpg"
                                alt="Indoor Factory Assembly Line"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </motion.div>

                        <motion.div
                            className="rounded-xl overflow-hidden shadow-lg relative aspect-video"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <img
                                src="https://zrkgroup.com/public/front/img/about/compliance.jpg"
                                alt="ZRK Quality Assurance Stacks"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </motion.div>
                    </div>

                </div>

                {/* Data Points */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 border-t border-gray-200 pt-12">
                    {[
                        { metric: "1.5M+", label: "Sq Ft Facility Area" },
                        { metric: "100%", label: "Robotic Assembly" },
                        { metric: "E1 Standard", label: "Global Compliance" },
                        { metric: "Net-Zero", label: "Solar Operations" }
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            className="text-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <h4 className="font-sans font-bold text-2xl md:text-3xl text-zrk-gold mb-1">{stat.metric}</h4>
                            <p className="font-body text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wider">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
