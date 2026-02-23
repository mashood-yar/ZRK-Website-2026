import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function LeadFunnelModal({ isOpen, onClose }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-md will-change-transform"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="bg-[var(--bg-color)] w-full max-w-2xl rounded-2xl overflow-hidden relative flex flex-col max-h-[90vh]"
                        initial={{ scale: 0.95, y: 20, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        exit={{ scale: 0.95, y: 20, opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors backdrop-blur-sm"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {/* Hero Image */}
                        <div className="w-full aspect-[4/3] relative shrink-0">
                            <img
                                src="/assets/sample-box.webp"
                                alt="ZRK Sample Box"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-4 left-6">
                                <h2 className="font-sans font-bold text-white text-2xl md:text-3xl">Enterprise Sample Box</h2>
                            </div>
                        </div>

                        {/* Form Container */}
                        <div className="p-6 md:p-8 overflow-y-auto w-full">
                            <form className="space-y-4 font-body" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Full Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-zinc-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-zrk-gold focus:border-transparent transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Architecture Firm</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-zinc-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-zrk-gold focus:border-transparent transition-all"
                                        placeholder="Foster + Partners"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Mobile Number</label>
                                    <input
                                        type="tel"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-zinc-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-zrk-gold focus:border-transparent transition-all"
                                        placeholder="+92 300 0000000"
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    className="w-full bg-zrk-black text-white font-sans font-bold uppercase tracking-widest py-4 rounded border border-transparent mt-6 shadow-xl transition-colors duration-300"
                                    whileHover={{ scale: 1.02, backgroundColor: "#b8964c", borderColor: "#b8964c" }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Dispatch My ZRK Sample Box
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
