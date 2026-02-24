import React from 'react';
import MotionWrapper from '../components/MotionWrapper';
import StaggeredText from '../components/StaggeredText';

const Contact = () => {
    return (
        <div className="w-full">
            <section className="px-6 py-24 max-w-7xl mx-auto">
                <MotionWrapper yOffset={30}>
                    <h1 className="text-5xl md:text-8xl font-sans font-bold uppercase tracking-tighter mb-6 text-industrial-dark dark:text-industrial-light">
                        <StaggeredText text="Initiate" />
                        <br />
                        <StaggeredText text="Dialogue." className="text-zrk-gold" delayOffset={0.2} />
                    </h1>
                    <p className="max-w-xl text-lg font-medium text-tundora dark:text-gray-400 mb-16">
                        Engage with our technical sales team for project inquiries, custom specifications, or enterprise distribution.
                    </p>
                </MotionWrapper>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-5 space-y-12 border-t border-tundora/20 pt-8">
                        <MotionWrapper delay={0.1} yOffset={20}>
                            <h3 className="text-xs font-sans uppercase tracking-widest text-zrk-gold mb-4">Global Headquarters</h3>
                            <p className="text-lg text-industrial-dark dark:text-industrial-light font-medium">
                                ZRK Group # 16-17 Industrial Estate,<br />
                                Peshawar,<br />
                                Pakistan
                            </p>
                        </MotionWrapper>
                        <MotionWrapper delay={0.2} yOffset={20}>
                            <h3 className="text-xs font-sans uppercase tracking-widest text-zrk-gold mb-4">Direct Lines</h3>
                            <p className="text-lg text-industrial-dark dark:text-industrial-light font-medium">WhatsApp: +92 333 297 5975</p>
                            <p className="text-lg text-industrial-dark dark:text-industrial-light font-medium">Email: info@zrkgroup.com</p>
                        </MotionWrapper>
                    </div>

                    <div className="lg:col-span-7 relative">
                        <div className="absolute inset-0 bg-zrk-gold/10 transform translate-x-4 translate-y-4 pointer-events-none -z-10"></div>
                        <MotionWrapper delay={0.3} yOffset={20} className="bg-industrial-dark dark:bg-industrial-light relative z-10">
                            <form className="space-y-8 p-8 md:p-12 relative overflow-hidden group">
                                {/* subtle background accent */}
                                <div className="absolute inset-0 bg-zrk-gold opacity-0 group-hover:opacity-5 transition-opacity duration-MAX ease-industrial pointer-events-none"></div>

                                <div>
                                    <label className="block text-xs font-sans uppercase tracking-widest text-tundora mb-2">Enterprise Name</label>
                                    <input
                                        type="text"
                                        className="w-full bg-transparent border-b border-tundora/40 text-industrial-light dark:text-industrial-dark py-3 focus:outline-none focus:border-zrk-gold transition-colors"
                                        placeholder="Company / Firm"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-sans uppercase tracking-widest text-tundora mb-2">Email Identity</label>
                                    <input
                                        type="email"
                                        className="w-full bg-transparent border-b border-tundora/40 text-industrial-light dark:text-industrial-dark py-3 focus:outline-none focus:border-zrk-gold transition-colors"
                                        placeholder="corporate@domain.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-sans uppercase tracking-widest text-tundora mb-2">Project Scope</label>
                                    <textarea
                                        rows="4"
                                        className="w-full bg-transparent border-b border-tundora/40 text-industrial-light dark:text-industrial-dark py-3 focus:outline-none focus:border-zrk-gold transition-colors resize-none"
                                        placeholder="Specify volume and technical requirements..."
                                    ></textarea>
                                </div>
                                <button
                                    type="button"
                                    className="w-full bg-zrk-gold text-industrial-dark font-sans uppercase tracking-widest text-sm font-bold py-5 hover:bg-industrial-light dark:hover:bg-industrial-dark dark:hover:text-industrial-light transition-colors duration-MAX ease-industrial"
                                >
                                    Transmit Request
                                </button>
                            </form>
                        </MotionWrapper>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
