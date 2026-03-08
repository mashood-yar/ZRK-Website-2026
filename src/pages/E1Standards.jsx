// E1Standards page — no state needed, uses MotionWrapper component for animations
import MotionWrapper from '../components/MotionWrapper';
import StaggeredText from '../components/StaggeredText';

export default function E1Standards() {
    const advantages = [
        { title: "Low Formaldehyde Emissions", desc: "E1 certification ensures that the MDF releases low levels of formaldehyde, making it safer for indoor air quality and reducing health risks associated with prolonged exposure to high formaldehyde levels." },
        { title: "Improved Indoor Air Quality", desc: "With lower emissions, E1 MDF contributes to better indoor air quality, which is crucial for homes, schools, and workplaces." },
        { title: "Healthier Living Environment", desc: "The reduced chemical emissions make E1 MDF a healthier choice, especially important in environments frequented by children, the elderly, or those with respiratory issues." },
        { title: "High-Quality Material", desc: "ZRK Group's adherence to E1 standards indicates a commitment to high-quality materials that don't compromise on safety or environmental standards." },
        { title: "Versatility in Applications", desc: "E1 MDF can be used for a wide range of applications, including furniture, cabinetry, panelling, and decorative projects, without the worry of high chemical emissions." }
    ];

    const healthEffects = [
        { title: "Irritation", desc: "Formaldehyde can cause irritation of the eyes, nose, throat, and skin. People may experience burning sensations in the eyes, coughing, and skin rashes." },
        { title: "Respiratory Problems", desc: "Prolonged exposure can lead to respiratory difficulties, including asthma-like symptoms and bronchitis." },
        { title: "Allergic Reactions", desc: "Some individuals may develop an allergic reaction to formaldehyde, leading to dermatitis (skin irritation) or respiratory symptoms." },
        { title: "Cancer Risk", desc: "Formaldehyde is classified as a human carcinogen (cancer-causing substance) by the International Agency for Research on Cancer (IARC). Chronic exposure, especially at high levels, has been linked to an increased risk of certain types of cancer, particularly nasopharyngeal cancer and leukemia." },
        { title: "Sensitization", desc: "Repeated exposure to formaldehyde can lead to sensitization, making individuals more susceptible to health effects even at lower exposure levels." }
    ];

    return (
        <div className="min-h-screen bg-[var(--bg-color)]">
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
                            ZRK Group’s E1 MDF, meets the E1 emission standards, offers significant advantages, particularly in enhancing indoor air quality, reducing environmental impact, and ensuring superior product quality.
                        </p>
                    </MotionWrapper>
                </div>
            </section>

            {/* Advantages Section */}
            <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
                <MotionWrapper yOffset={30}>
                    <h2 className="font-sans font-bold text-3xl md:text-5xl text-industrial-dark dark:text-industrial-light mb-12 uppercase tracking-tight text-center">
                        <StaggeredText text="Key Advantages" />
                    </h2>
                </MotionWrapper>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {advantages.map((item, i) => (
                        <MotionWrapper key={i} delay={i * 0.1} yOffset={30}>
                            <div className="structural-panel h-full flex flex-col group transform hover:-translate-y-2 transition-transform duration-500">
                                <h3 className="font-sans font-bold text-xl text-industrial-dark dark:text-industrial-light mb-4 group-hover:text-zrk-gold transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="font-body text-tundora dark:text-gray-400 leading-relaxed text-sm">
                                    {item.desc}
                                </p>
                            </div>
                        </MotionWrapper>
                    ))}
                </div>
            </section>

            {/* Health Effects Section */}
            <section className="py-16 md:py-24 w-full bg-industrial-dark text-industrial-light mb-24 relative overflow-hidden group border-y border-tundora/20 shadow-xl">
                <div className="absolute inset-0 bg-zrk-gold/5 pointer-events-none transition-colors duration-700 group-hover:bg-zrk-gold/10"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
                    <MotionWrapper yOffset={30}>
                        <div className="max-w-3xl mb-16">
                            <h2 className="font-sans font-bold text-3xl md:text-5xl mb-6 uppercase tracking-tight text-zrk-gold">
                                <StaggeredText text="Health Effects of Formaldehyde" />
                            </h2>
                            <p className="font-body text-gray-400 text-lg leading-relaxed">
                                Formaldehyde emissions from MDF can have various health effects, particularly when exposure is at high levels or over extended periods. The severity and type of health issues depend on the concentration of formaldehyde and the duration of exposure.
                            </p>
                        </div>
                    </MotionWrapper>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {healthEffects.map((item, i) => (
                            <MotionWrapper key={i} delay={i * 0.1} yOffset={30}>
                                <div className="structural-panel bg-zinc-900 border-zinc-800 h-full flex flex-col group transform hover:-translate-y-2 transition-transform duration-500">
                                    <h3 className="font-sans font-bold text-xl text-industrial-light mb-4 group-hover:text-zrk-gold transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="font-body text-gray-400 leading-relaxed text-sm">
                                        {item.desc}
                                    </p>
                                </div>
                            </MotionWrapper>
                        ))}
                    </div>

                    <MotionWrapper delay={0.6} yOffset={30}>
                        <div className="mt-16 p-8 border border-tundora/20 bg-black/20 text-center">
                            <p className="font-body text-gray-300 text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
                                It’s important to note that the amount of formaldehyde released from MDF can vary based on the product’s quality and the conditions in which it’s used. Manufacturers like ZRK Group use adhesives with lower formaldehyde content to meet health and safety standards like the E1 and E0 emission standards.
                            </p>
                        </div>
                    </MotionWrapper>
                </div>
            </section>
        </div>
    );
}
