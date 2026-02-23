import { motion } from 'framer-motion';

export default function Hero({ onRequestSamples }) {
    return (
        <section className="h-[100dvh] w-full relative overflow-hidden flex flex-col justify-center items-center">
            {/* Background Image with Dark Gradient Overlay */}
            <motion.div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/assets/dark-walnut.webp')" }}
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
            ></motion.div>
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-tundora/90 via-tundora/60 to-transparent dark:from-black/90 dark:via-black/60"></div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 flex flex-col items-center justify-center h-full w-full">
                <motion.h1
                    className="font-sans font-bold text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-tight"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                    The Best is<br />Built Here.
                </motion.h1>
            </div>

            {/* Sticky Bottom Action */}
            <div className="absolute bottom-0 left-0 w-full p-4 md:p-8 z-20 flex justify-center">
                <motion.button
                    onClick={onRequestSamples}
                    className="w-full max-w-md bg-zrk-black text-white font-sans font-semibold uppercase tracking-widest py-4 md:py-5 px-6 rounded shadow-2xl flex items-center justify-center gap-2 will-change-transform border border-transparent"
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ scale: 1.02, backgroundColor: "#b8964c", borderColor: "#b8964c" }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                        y: 0,
                        opacity: 1,
                        boxShadow: [
                            "0px 0px 0px 0px rgba(184, 150, 76, 0.4)",
                            "0px 0px 15px 5px rgba(184, 150, 76, 0.2)",
                            "0px 0px 0px 0px rgba(184, 150, 76, 0.4)"
                        ]
                    }}
                    transition={{
                        y: { duration: 0.6, delay: 0.6 },
                        opacity: { duration: 0.6, delay: 0.6 },
                        boxShadow: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }}
                >
                    Request Enterprise Samples
                </motion.button>
            </div>
        </section>
    );
}
