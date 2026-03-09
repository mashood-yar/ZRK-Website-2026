import React from 'react';
import MotionWrapper from '../components/MotionWrapper';
import ImageContainer from '../components/ImageContainer';
import StaggeredText from '../components/StaggeredText';

const About = () => {
    return (
        <div className="w-full">
            <section className="px-4 sm:px-6 py-12 sm:py-24 max-w-7xl mx-auto">
                <MotionWrapper yOffset={30}>
                    <h1 className="text-5xl md:text-8xl font-sans font-bold uppercase tracking-tighter mb-12 text-industrial-dark dark:text-industrial-light leading-[0.9]">
                        <StaggeredText text="The Backbone" />
                        <br />
                        <StaggeredText text="of Design." delayOffset={0.2} />
                    </h1>
                </MotionWrapper>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
                    <MotionWrapper delay={0.2} yOffset={30}>
                        <ImageContainer
                            src="/assets/images/about/about.png"
                            alt="About ZRK Group"
                            aspectType="product"
                            parallaxOffset={30}
                        />
                    </MotionWrapper>

                    <MotionWrapper delay={0.4} yOffset={30}>
                        <div className="pt-8 lg:pt-24 border-t border-tundora/20">
                            <h2 className="text-sm font-sans uppercase tracking-widest text-zrk-gold mb-8">Our Legacy</h2>
                            <div className="space-y-6">
                                <p className="text-xl md:text-2xl font-medium text-industrial-dark dark:text-industrial-light leading-relaxed">
                                    Founded in 1992, the ZRK Group stands as a prominent family-owned enterprise specializing in the manufacturing of MDF, particleboard, laminated boards and door skins.
                                </p>
                                <p className="text-tundora dark:text-gray-400 leading-relaxed text-lg max-w-xl">
                                    A monumental stride was achieved in 2008 with the inauguration of a state-of-the-art MDF Manufacturing plant, solidifying the company's position as an industry leader.
                                </p>
                                <p className="text-tundora dark:text-gray-400 leading-relaxed text-lg max-w-xl">
                                    The commitment to technological advancement and innovation remained unwavering, ensuring our capacity to deliver superior products globally.
                                </p>
                            </div>
                        </div>
                    </MotionWrapper>
                </div>
            </section>

            {/* Core Values: Vision, Philosophy, Compliance */}
            <section className="px-4 sm:px-6 py-12 sm:py-24 max-w-7xl mx-auto border-t border-tundora/20">
                <div className="space-y-16 md:space-y-24">
                    {/* Vision */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <MotionWrapper yOffset={30} className="order-2 lg:order-1">
                            <h2 className="text-4xl md:text-5xl font-sans font-bold uppercase tracking-tighter mb-8 text-industrial-dark dark:text-industrial-light">
                                <StaggeredText text="Vision" />
                            </h2>
                            <p className="text-lg text-tundora dark:text-gray-400 leading-relaxed font-body">
                                We believe that manufacturing quality products is the first step towards building lasting relationships. On every step, we aim to create a unique value for our partners, customers and stakeholders. We ensure smooth workflows through technology and innovation, and upgrade our processes.
                            </p>
                        </MotionWrapper>
                        <MotionWrapper delay={0.2} yOffset={40} className="order-1 lg:order-2">
                            <ImageContainer
                                src="/assets/images/about/our-vision.jpg"
                                alt="ZRK Group Vision"
                                aspectType="application"
                                parallaxOffset={20}
                            />
                        </MotionWrapper>
                    </div>

                    {/* Philosophy */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <MotionWrapper delay={0.2} yOffset={40}>
                            <ImageContainer
                                src="/assets/images/about/philosophy-1.jpg"
                                alt="ZRK Group Philosophy"
                                aspectType="application"
                                parallaxOffset={20}
                            />
                        </MotionWrapper>
                        <MotionWrapper yOffset={30}>
                            <h2 className="text-4xl md:text-5xl font-sans font-bold uppercase tracking-tighter mb-8 text-industrial-dark dark:text-industrial-light">
                                <StaggeredText text="Philosophy" />
                            </h2>
                            <p className="text-lg text-tundora dark:text-gray-400 leading-relaxed font-body">
                                Our philosophy resonates with our resolute resolve to consistently surpass industry benchmarks, fostering innovation, and orchestrating responsible practices. Through this embodiment of wisdom, expertise, and unwavering commitment, ZRK Group endeavors to redefine the very landscape of wood processing, setting new standards of excellence and heralding a sustainable and visionary future.
                            </p>
                        </MotionWrapper>
                    </div>

                    {/* Compliance */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <MotionWrapper yOffset={30} className="order-2 lg:order-1">
                            <h2 className="text-4xl md:text-5xl font-sans font-bold uppercase tracking-tighter mb-8 text-industrial-dark dark:text-industrial-light">
                                <StaggeredText text="Compliance" />
                            </h2>
                            <p className="text-lg text-tundora dark:text-gray-400 leading-relaxed font-body">
                                ZRK Group is committed to upholding the highest standards of compliance in all its operations. Our compliance policy reflects our dedication to ethical conduct, legal adherence, and responsible practices. We prioritize transparency, integrity, and accountability in our interactions with stakeholders, employees, partners, and the communities we operate in. By adhering to local and international regulations, we ensure that our business practices contribute positively to society and the environment while maintaining the trust and confidence of all those we engage with.
                            </p>
                        </MotionWrapper>
                        <MotionWrapper delay={0.2} yOffset={40} className="order-1 lg:order-2">
                            <ImageContainer
                                src="/assets/images/about/compliance.jpg"
                                alt="ZRK Group Compliance"
                                aspectType="application"
                                parallaxOffset={20}
                            />
                        </MotionWrapper>
                    </div>
                </div>
            </section>

            <section className="px-4 sm:px-6 py-12 sm:py-20 bg-industrial-dark text-industrial-light">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    <MotionWrapper delay={0}>
                        <div className="structural-panel bg-zinc-900 border-zinc-800 text-center h-full flex flex-col justify-center transform hover:-translate-y-2 transition-transform duration-500">
                            <div className="text-6xl md:text-8xl font-sans font-bold text-zrk-gold mb-6 relative inline-block">
                                <span className="relative z-10"><StaggeredText text="1M+" /></span>
                            </div>
                            <div className="text-sm uppercase tracking-widest font-bold text-gray-300">Square Meters Daily</div>
                        </div>
                    </MotionWrapper>

                    <MotionWrapper delay={0.2}>
                        <div className="structural-panel bg-zinc-900 border-zinc-800 text-center h-full flex flex-col justify-center transform hover:-translate-y-2 transition-transform duration-500">
                            <div className="text-6xl md:text-8xl font-sans font-bold text-zrk-gold mb-6 relative inline-block">
                                <span className="relative z-10"><StaggeredText text="E1" delayOffset={0.2} /></span>
                            </div>
                            <div className="text-sm uppercase tracking-widest font-bold text-gray-300">Emission Standard</div>
                        </div>
                    </MotionWrapper>

                    <MotionWrapper delay={0.4}>
                        <div className="structural-panel bg-zinc-900 border-zinc-800 text-center h-full flex flex-col justify-center transform hover:-translate-y-2 transition-transform duration-500">
                            <div className="text-6xl md:text-8xl font-sans font-bold text-zrk-gold mb-6 relative inline-block">
                                <span className="relative z-10"><StaggeredText text="30+" delayOffset={0.4} /></span>
                            </div>
                            <div className="text-sm uppercase tracking-widest font-bold text-gray-300">Years of Excellence</div>
                        </div>
                    </MotionWrapper>
                </div>
            </section>
        </div>
    );
};

export default About;
