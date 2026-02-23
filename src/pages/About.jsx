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
                            src="/assets/raw-mdf.webp"
                            alt="Raw Medium Density Fiberboard Production"
                            aspectType="product"
                            parallaxOffset={30}
                        />
                    </MotionWrapper>

                    <MotionWrapper delay={0.4} yOffset={30}>
                        <div className="pt-8 lg:pt-24 border-t border-tundora/20">
                            <h2 className="text-sm font-sans uppercase tracking-widest text-zrk-gold mb-6">Our Legacy</h2>
                            <p className="text-xl md:text-2xl font-medium text-industrial-dark dark:text-industrial-light leading-relaxed mb-8">
                                Since 1993, ZRK Group has been synonymous with structural reliability. We don't just manufacture wood panels; we engineer the foundation for the world's most ambitious architectural projects.
                            </p>
                            <p className="text-tundora dark:text-gray-400">
                                Operating Pakistan's largest fully automated continuous press plants, our state-of-the-art facilities ensure unprecedented density profiles, surface smoothness, and absolute compliance with European emission standards (E1).
                            </p>
                        </div>
                    </MotionWrapper>
                </div>
            </section>

            <section className="px-6 py-24 bg-industrial-dark text-industrial-light">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                    <MotionWrapper delay={0} yOffset={20}>
                        <div className="text-6xl md:text-8xl font-sans font-bold text-zrk-gold mb-4 relative inline-block">
                            <span className="relative z-10"><StaggeredText text="M1" /></span>
                            <div className="absolute inset-0 bg-industrial-light/5 -z-0 transform -translate-x-4 translate-y-4"></div>
                        </div>
                        <div className="text-sm uppercase tracking-widest font-bold">Square Meters Daily</div>
                    </MotionWrapper>
                    <MotionWrapper delay={0.2} yOffset={20}>
                        <div className="text-6xl md:text-8xl font-sans font-bold text-zrk-gold mb-4 relative inline-block">
                            <span className="relative z-10"><StaggeredText text="E1" delayOffset={0.2} /></span>
                            <div className="absolute inset-0 bg-industrial-light/5 -z-0 transform -translate-x-4 translate-y-4"></div>
                        </div>
                        <div className="text-sm uppercase tracking-widest font-bold">Emission Standard</div>
                    </MotionWrapper>
                    <MotionWrapper delay={0.4} yOffset={20}>
                        <div className="text-6xl md:text-8xl font-sans font-bold text-zrk-gold mb-4 relative inline-block">
                            <span className="relative z-10"><StaggeredText text="30+" delayOffset={0.4} /></span>
                            <div className="absolute inset-0 bg-industrial-light/5 -z-0 transform -translate-x-4 translate-y-4"></div>
                        </div>
                        <div className="text-sm uppercase tracking-widest font-bold">Years of Excellence</div>
                    </MotionWrapper>
                </div>
            </section>
        </div>
    );
};

export default About;
