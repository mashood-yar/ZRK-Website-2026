import { motion } from 'framer-motion';
import MotionWrapper from '../components/MotionWrapper';
import StaggeredText from '../components/StaggeredText';

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
            <section className="py-24 px-4 md:px-8 border-b border-tundora/20">
                <div className="max-w-4xl mx-auto text-center">
                    <MotionWrapper yOffset={30}>
                        <h1 className="font-sans font-bold text-5xl md:text-7xl text-industrial-dark dark:text-industrial-light mb-8 uppercase tracking-tight leading-[0.9]">
                            <StaggeredText text="E1 Emission" /> <br />
                            <StaggeredText text="Standards." className="text-zrk-gold" delayOffset={0.2} />
                        </h1>
                    </MotionWrapper>
                    <MotionWrapper delay={0.4} yOffset={20}>
                        <p className="font-body text-tundora dark:text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                            ZRK Group’s E1 MDF meets top-tier European emission standards, offering significant
                            advantages by enhancing indoor air quality, reducing environmental impact, and ensuring superior product safety.
                        </p>
                    </MotionWrapper>
                </div>
            </section>

            {/* Grid */}
            <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, i) => (
                        <MotionWrapper key={i} delay={i * 0.1} yOffset={30}>
                            <div className="structural-panel h-full flex flex-col group transform hover:-translate-y-2 transition-transform duration-500">
                                <h3 className="font-sans font-bold text-xl text-industrial-dark dark:text-industrial-light mb-4 group-hover:text-zrk-gold transition-colors duration-300">
                                    {benefit.title}
                                </h3>
                                <p className="font-body text-tundora dark:text-gray-400 leading-relaxed text-sm">
                                    {benefit.desc}
                                </p>
                            </div>
                        </MotionWrapper>
                    ))}
                </div>
            </section>
        </div>
    );
}
