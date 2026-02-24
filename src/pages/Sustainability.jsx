import React from 'react';
import { motion } from 'framer-motion';
import MotionWrapper from '../components/MotionWrapper';
import ImageContainer from '../components/ImageContainer';
import StaggeredText from '../components/StaggeredText';
import { Link } from 'react-router-dom';

export default function Sustainability() {
    const sections = [
        {
            title: "Carbon Footprint",
            desc: "Wood-based materials indeed have the potential to be climate-friendly. Wood is a renewable resource and has a lower carbon footprint compared to many other building materials like concrete or steel. Trees absorb carbon dioxide from the atmosphere during their growth, and this carbon remains stored within the wood even after it's processed into building materials. Additionally, the energy required to produce wood-based materials is often lower than that for other materials, contributing to their climate-friendly nature. However, the overall climate impact also depends on factors like sourcing practices, transportation, and manufacturing methods. Sustainable forestry practices and responsible sourcing are crucial to ensure the climate benefits of wood-based materials are maximized.",
            image: "/assets/images/environment/CARBON%20FOOTPRINT.jpg",
            list: null
        },
        {
            title: "Impact On The Economy",
            desc: "The use of wood-based materials contributes significantly to the bioeconomy. As trees grow, they capture carbon dioxide from the atmosphere, and when processed into materials, they continue to store carbon. The production and utilization of wood-based materials support rural economies, create jobs in forestry, manufacturing, and related industries, and contribute to the development of sustainable communities.",
            image: "/assets/images/environment/CONTRIBUTION%20TO%20THE%20CIRCULAR%20ECONOMY.jpg",
            list: null
        },
        {
            title: "Contribution To The Circular Economy",
            desc: "Utilizing wood-based materials significantly contributes to the conservation of natural resources and the principles of the circular economy. Here's how:",
            image: "/assets/images/environment/IMPACT%20ONTHE%20ECONOMY.jpg",
            list: [
                { title: "Renewable Resource", text: "Wood is a renewable resource, meaning that trees can be replanted and grown to replace those that are harvested. This sustainable approach contrasts with the depletion of finite resources like fossil fuels or minerals." },
                { title: "Carbon Sequestration", text: "Trees absorb carbon dioxide from the atmosphere as they grow. When wood is used in products, it continues to store carbon, acting as a carbon sink and mitigating climate change." },
                { title: "Recycling and Repurposing", text: "Wood-based materials can be recycled or repurposed for various applications. This extends the lifespan of the material and reduces the need for new resources." },
                { title: "Biodegradability", text: "Wood-based materials are biodegradable, meaning they break down naturally over time. This contrasts with synthetic materials that can persist in the environment for centuries." },
                { title: "Bioeconomy Integration", text: "Wood-based materials play a role in the bioeconomy by aligning with the principles of using renewable resources and minimizing waste in production processes." },
                { title: "Diversified Applications", text: "Wood-based materials are versatile and used in various industries, from construction to packaging. This diversification contributes to a more sustainable and resilient economy." }
            ]
        },
        {
            title: "Raw Materials From Managed Forests",
            desc: "Our commitment to environmental responsibility is at the core of our operations, driving us to implement a range of initiatives that minimize our ecological footprint and promote positive change. Here's how we're making a difference:",
            image: "/assets/images/environment/RAW%20MATERIALS%20FROM%20MANAGED%20FORESTS.jpg",
            list: [
                { title: "Sustainable Sourcing", text: "We prioritize responsible sourcing by obtaining raw materials from managed forests and sustainable tree plantations. This ensures the preservation of natural ecosystems and promotes reforestation efforts." },
                { title: "Emission Control", text: "Our production processes adhere to strict emission standards, reducing harmful pollutants released into the atmosphere. We continuously invest in technologies that minimize our carbon footprint." },
                { title: "Efficient Energy Use", text: "ZRK Group is dedicated to optimizing energy consumption across our facilities. From efficient machinery to renewable energy solutions, we're committed to reducing energy waste." },
                { title: "Waste Management", text: "We implement comprehensive waste management strategies to minimize waste generation and promote recycling. By reusing materials and reducing waste, we're contributing to a cleaner environment." },
                { title: "Community Engagement", text: "Our environmental initiatives extend to local communities. Through education, awareness campaigns, and tree planting initiatives, we empower individuals to play an active role in preserving our planet." }
            ]
        }
    ];

    return (
        <div className="pt-24 min-h-screen bg-[var(--bg-color)]">
            {/* Header */}
            <section className="py-24 px-4 md:px-8 border-b border-tundora/20">
                <div className="max-w-5xl mx-auto text-center">
                    <MotionWrapper yOffset={30}>
                        <h1 className="font-sans font-bold text-5xl md:text-7xl lg:text-8xl text-industrial-dark dark:text-industrial-light mb-8 uppercase tracking-tight leading-[0.9]">
                            <StaggeredText text="Sustainable" /> <br />
                            <StaggeredText text="Futures." className="text-zrk-gold" delayOffset={0.2} />
                        </h1>
                    </MotionWrapper>
                    <MotionWrapper delay={0.4} yOffset={20}>
                        <p className="font-body text-tundora dark:text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                            At ZRK Group, our commitment to environmental responsibility is at the core of our operations. Discover our radical initiatives that minimize ecological footprint through responsible sourcing and intelligent manufacturing.
                        </p>
                    </MotionWrapper>
                </div>
            </section>

            {/* Alternating Content Sections */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-24 space-y-32">
                {sections.map((section, idx) => {
                    const isEven = idx % 2 === 0;

                    return (
                        <section key={idx} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
                            {/* Copy Node */}
                            <MotionWrapper yOffset={30} className="w-full lg:w-1/2">
                                <div>
                                    <h2 className="font-sans font-bold text-3xl md:text-5xl text-industrial-dark dark:text-industrial-light mb-6 uppercase tracking-tight leading-tight">
                                        <StaggeredText text={section.title} />
                                    </h2>
                                    <p className="font-body text-tundora dark:text-gray-400 leading-relaxed mb-8">
                                        {section.desc}
                                    </p>

                                    {section.list && (
                                        <div className="space-y-6">
                                            {section.list.map((item, i) => (
                                                <MotionWrapper key={i} delay={i * 0.1} yOffset={10}>
                                                    <div className="flex gap-5 group items-start">
                                                        {/* Von Restorff Effect on the Number */}
                                                        <div className="flex-shrink-0 w-10 h-10 rounded-full border border-zrk-gold/30 bg-transparent flex items-center justify-center font-sans font-bold text-sm text-zrk-gold group-hover:bg-zrk-gold group-hover:text-white transition-all duration-300">
                                                            0{i + 1}
                                                        </div>
                                                        <div>
                                                            <h3 className="font-sans font-bold text-industrial-dark dark:text-industrial-light text-lg mb-1 group-hover:text-zrk-gold transition-colors duration-300">
                                                                {item.title}
                                                            </h3>
                                                            <p className="font-body text-tundora dark:text-gray-400 text-sm leading-relaxed max-w-sm">
                                                                {item.text}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </MotionWrapper>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </MotionWrapper>

                            {/* Image Node */}
                            <MotionWrapper delay={0.2} yOffset={40} className="w-full lg:w-1/2">
                                <div className="w-full aspect-[4/5] lg:aspect-square overflow-hidden shadow-2xl relative group border border-tundora/10 dark:border-zinc-800">
                                    <div className="transform group-hover:scale-105 transition-transform duration-[1.5s] ease-industrial h-full">
                                        <ImageContainer
                                            src={section.image}
                                            alt={section.title}
                                            aspectType="square"
                                            className="w-full h-full"
                                            parallaxOffset={25}
                                        />
                                    </div>
                                    <div className="absolute inset-0 bg-zrk-black/10 mix-blend-overlay pointer-events-none transition-colors duration-500 group-hover:bg-transparent"></div>
                                </div>
                            </MotionWrapper>
                        </section>
                    );
                })}
            </div>

            {/* Final CTA */}
            <section className="py-24 px-4 md:px-8 bg-industrial-dark text-center">
                <MotionWrapper yOffset={30}>
                    <h3 className="font-sans font-bold text-3xl md:text-5xl text-zrk-gold mb-8 uppercase tracking-tight">
                        <StaggeredText text="Join Our Mission" />
                    </h3>
                    <Link
                        to="/contact"
                        className="btn-primary inline-flex mt-4 font-sans uppercase tracking-widest text-sm px-10 py-4 shadow-lg hover:-translate-y-1 transition-transform"
                    >
                        Contact Us
                    </Link>
                </MotionWrapper>
            </section>
        </div>
    );
}
