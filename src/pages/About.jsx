import React from 'react';
import MotionWrapper from '../components/MotionWrapper';
import ImageContainer from '../components/ImageContainer';
import StaggeredText from '../components/StaggeredText';

const About = () => {
    return (
        <div className="w-full">
            <section className="px-6 py-24 max-w-7xl mx-auto">
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

            <section className="px-6 py-24 bg-industrial-dark text-industrial-light">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    <MotionWrapper delay={0}>
                        <div className="structural-panel bg-zinc-900 border-zinc-800 text-center h-full flex flex-col justify-center transform hover:-translate-y-2 transition-transform duration-500">
                            <div className="text-6xl md:text-8xl font-sans font-bold text-zrk-gold mb-6 relative inline-block">
                                <span className="relative z-10"><StaggeredText text="M1" /></span>
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
