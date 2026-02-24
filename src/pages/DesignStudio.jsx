import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight } from 'lucide-react';
import StaggeredText from '../components/StaggeredText';
import ImageContainer from '../components/ImageContainer';
import MotionWrapper from '../components/MotionWrapper';

export default function DesignStudio() {
    return (
        <div className="pt-24 min-h-screen bg-[var(--bg-color)]">

            <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">

                {/* Left Col - Booking Details */}
                <MotionWrapper yOffset={30} delay={0}>
                    <div className="md:w-1/2 mt-12 md:mt-0">
                        <div className="inline-block px-4 py-2 border border-zrk-gold/30 rounded-full text-zrk-gold font-body text-sm font-medium mb-8">
                            Exclusive Showroom
                        </div>
                        <h1 className="font-sans font-bold text-5xl md:text-6xl lg:text-7xl text-zrk-black dark:text-white mb-8 uppercase tracking-tight leading-[0.9]">
                            <StaggeredText text="Design" /> <br />
                            <StaggeredText text="Studio." className="text-zrk-gold" delayOffset={0.2} />
                        </h1>
                        <p className="font-body text-tundora dark:text-gray-400 mb-10 text-lg md:text-xl leading-relaxed max-w-lg">
                            Experience our premium Laminated Boards and MDF textures in person.
                            Our flagship Design Studio in Islamabad offers architects and enterprise clients
                            an immersive tactical environment to source materials for global projects.
                        </p>

                        <div className="space-y-6 mb-12">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-zrk-bg dark:bg-zinc-800 text-zrk-gold">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-zrk-black dark:text-white text-lg">ISLAMABAD LOCATION</h3>
                                    <p className="text-gray-600 dark:text-gray-400 font-body">Sector G-8 Markaz, Islamabad</p>
                                </div>
                            </div>
                        </div>

                        <a
                            href="https://wa.me/923335087144?text=I%20would%20like%20to%20book%20an%20appointment"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary inline-flex items-center gap-3 mt-4"
                        >
                            <span>Book A Studio Visit Today</span>
                            <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        </a>
                    </div>
                </MotionWrapper>

                {/* Right Col - Image Placeholder */}
                <MotionWrapper delay={0.2} yOffset={40}>
                    <div className="md:w-1/2 w-full pt-8 md:pt-0">
                        <div className="w-full aspect-square md:aspect-[4/5] rounded-tl-[100px] rounded-br-[100px] overflow-hidden shadow-2xl relative group">
                            <div className="transform group-hover:scale-105 transition-transform duration-[1.5s] ease-industrial h-full">
                                <ImageContainer
                                    src="/assets/images/designstudio/52.webp"
                                    alt="ZRK Design Studio Interior"
                                    aspectType="hero"
                                    className="w-full h-full"
                                    parallaxOffset={30}
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-tr from-industrial-dark/40 via-transparent to-transparent pointer-events-none mix-blend-multiply"></div>
                        </div>
                    </div>
                </MotionWrapper>

            </section>

            {/* Gallery Section */}
            <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-tundora/20">
                <MotionWrapper yOffset={30}>
                    <h2 className="font-sans font-bold text-4xl md:text-5xl text-industrial-dark dark:text-industrial-light mb-16 uppercase tracking-tight">
                        <StaggeredText text="Studio" /> <br />
                        <StaggeredText text="Gallery." className="text-zrk-gold" delayOffset={0.2} />
                    </h2>
                </MotionWrapper>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Array.from({ length: 19 }, (_, i) => 51 + i).map((num, idx) => (
                        <MotionWrapper key={num} delay={0.05 * (idx % 3)} yOffset={30}>
                            <div className="w-full aspect-square rounded-xl overflow-hidden shadow-lg relative group border border-tundora/10 dark:border-zinc-800">
                                <div className="transform group-hover:scale-105 transition-transform duration-MAX ease-industrial h-full">
                                    <ImageContainer
                                        src={`/assets/images/designstudio/${num}.webp`}
                                        alt={`ZRK Design Studio Visual ${num}`}
                                        aspectType="square"
                                        parallaxOffset={15}
                                    />
                                </div>
                                <div className="absolute inset-0 bg-industrial-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                                    <span className="text-industrial-light font-sans uppercase tracking-widest text-sm font-bold bg-tundora/50 backdrop-blur-md px-4 py-2 rounded">
                                        Perspective {idx + 1}
                                    </span>
                                </div>
                            </div>
                        </MotionWrapper>
                    ))}
                </div>
            </section>

        </div>
    );
}
