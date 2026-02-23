import { motion } from 'framer-motion';

const MOCKUPS = [
    { id: 1, image: "/assets/boardroom.webp", metric: "Acoustically Optimized for Boardrooms", title: "Corporate Dominance" },
    { id: 2, image: "/assets/kitchen.webp", metric: "100% Moisture Resistant Core", title: "Culinary Elegance" },
    { id: 3, image: "/assets/lobby.webp", metric: "High Traffic Durability", title: "Grand Atriums" },
];

export default function ScrollGallery() {
    return (
        <section className="py-16 md:py-24 bg-[var(--bg-color)] overflow-hidden">
            <div className="px-4 md:px-8 max-w-7xl mx-auto mb-8">
                <h2 className="font-sans font-bold text-3xl md:text-5xl">Architectural Proof.</h2>
                <p className="font-body text-gray-500 dark:text-gray-400 mt-2">Tested in the most demanding environments.</p>
            </div>

            <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 md:px-8 pb-8 no-scrollbar">
                {MOCKUPS.map((mockup) => (
                    <div
                        key={mockup.id}
                        className="w-[85vw] md:w-[60vw] lg:w-[40vw] snap-center shrink-0 aspect-[9/16] md:aspect-[4/5] relative rounded-2xl overflow-hidden group"
                    >
                        <img
                            src={mockup.image}
                            alt={mockup.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-tundora/80 via-tundora/20 to-transparent dark:from-black/80 dark:via-black/20" />

                        <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                            <h3 className="font-sans font-bold text-white text-xl md:text-2xl mb-2">{mockup.title}</h3>
                            <div className="inline-block bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
                                <p className="font-body text-white text-sm md:text-base font-medium">{mockup.metric}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
