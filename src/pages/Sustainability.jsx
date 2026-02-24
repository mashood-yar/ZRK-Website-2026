import { motion } from 'framer-motion';
import MotionWrapper from '../components/MotionWrapper';
import ImageContainer from '../components/ImageContainer';
import StaggeredText from '../components/StaggeredText';

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
                    <MotionWrapper yOffset={30}>
                        <div className="md:w-11/12 mt-12 md:mt-0">
                            <h1 className="font-sans font-bold text-5xl md:text-6xl lg:text-7xl text-industrial-dark dark:text-industrial-light mb-8 uppercase tracking-tight leading-[0.9]">
                                <StaggeredText text="Circular" /> <br />
                                <StaggeredText text="Economy." className="text-zrk-gold" delayOffset={0.2} />
                            </h1>
                            <p className="font-body text-tundora dark:text-gray-400 mb-10 text-lg md:text-xl leading-relaxed max-w-lg">
                                Our commitment to environmental responsibility is at the core of our operations.
                                We implement radical initiatives that minimize our ecological footprint by obtaining raw materials entirely from managed forests and sustainable tree plantations.
                            </p>

                            <div className="space-y-8 pl-2">
                                {initiatives.map((item, i) => (
                                    <MotionWrapper key={i} delay={i * 0.1}>
                                        <div className="flex gap-6 group">
                                            {/* Von Restorff Effect on the Number */}
                                            <div className="flex-shrink-0 w-12 h-12 rounded-full border border-zrk-gold/30 bg-transparent flex items-center justify-center font-sans font-bold text-zrk-gold group-hover:bg-zrk-gold group-hover:text-white transition-all duration-300">
                                                0{i + 1}
                                            </div>
                                            <div>
                                                <h3 className="font-sans font-bold text-industrial-dark dark:text-industrial-light text-xl mb-2 group-hover:text-zrk-gold transition-colors duration-300">{item.title}</h3>
                                                <p className="font-body text-tundora dark:text-gray-400 text-sm leading-relaxed max-w-sm">{item.desc}</p>
                                            </div>
                                        </div>
                                    </MotionWrapper>
                                ))}
                            </div>
                        </div>
                    </MotionWrapper>

                    {/* Image Node */}
                    <MotionWrapper delay={0.2} yOffset={40}>
                        <div className="w-full pt-8 md:pt-0">
                            <div className="w-full aspect-[4/5] rounded-tl-[100px] rounded-br-[100px] overflow-hidden shadow-2xl relative group">
                                <div className="transform group-hover:scale-105 transition-transform duration-[1.5s] ease-industrial h-full">
                                    <ImageContainer
                                        src="/assets/images/environment/RAW%20MATERIALS%20FROM%20MANAGED%20FORESTS.jpg"
                                        alt="Raw Materials From Managed Forests"
                                        aspectType="hero"
                                        className="w-full h-full"
                                        parallaxOffset={30}
                                    />
                                </div>
                                <div className="absolute inset-0 bg-zrk-black/20 mix-blend-overlay pointer-events-none"></div>
                            </div>
                        </div>
                    </MotionWrapper>

                </div>
            </section>
        </div>
    );
}
