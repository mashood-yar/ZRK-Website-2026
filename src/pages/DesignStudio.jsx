import { motion } from 'framer-motion';
import { MapPin, Phone, ArrowUpRight } from 'lucide-react';

export default function DesignStudio() {
    return (
        <div className="pt-24 min-h-screen bg-[var(--bg-color)]">

            <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">

                {/* Left Col - Booking Details */}
                <motion.div
                    className="md:w-1/2"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-block px-4 py-2 border border-zrk-gold/30 rounded-full text-zrk-gold font-body text-sm font-medium mb-6">
                        Exclusive Showroom
                    </div>
                    <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl text-zrk-black dark:text-white mb-6 uppercase tracking-tight">
                        Design <br /><span className="text-zrk-gold">Studio.</span>
                    </h1>
                    <p className="font-body text-gray-600 dark:text-gray-400 mb-8 text-lg leading-relaxed">
                        Experience our premium Laminated Boards and MDF textures in person.
                        Our flagship Design Studio in Islamabad offers architects and enterprise clients
                        an immersive tactical environment to source materials for global projects.
                    </p>

                    <div className="space-y-6 mb-12">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-full bg-zrk-bg dark:bg-zinc-800 text-zrk-gold">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-zrk-black dark:text-white text-lg">ISLAMABAD LOCATION</h3>
                                <p className="text-gray-600 dark:text-gray-400 font-body">Sector G-8 Markaz, Islamabad</p>
                            </div>
                        </div>
                    </div>

                    <motion.a
                        href="https://wa.me/923335087144?text=I%20would%20like%20to%20book%20an%20appointment"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-zrk-black text-white font-sans font-bold uppercase tracking-widest py-4 px-8 rounded border border-transparent hover:bg-zrk-gold hover:shadow-xl transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <span>Book A Studio Visit Today</span>
                        <ArrowUpRight className="w-5 h-5" />
                    </motion.a>
                </motion.div>

                {/* Right Col - Image Placeholder */}
                <motion.div
                    className="md:w-1/2 w-full aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src="/assets/images/designstudio/52.webp"
                        alt="ZRK Design Studio Interior"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent"></div>
                </motion.div>

            </section>
        </div>
    );
}
