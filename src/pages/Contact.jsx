import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MotionWrapper from '../components/MotionWrapper';
import StaggeredText from '../components/StaggeredText';
import { ArrowRight, Check } from 'lucide-react';

const Contact = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({ name: '', email: '', scope: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleNext = () => {
        if (step === 1 && formData.name.length > 2) setStep(2);
        if (step === 2 && formData.email.includes('@')) setStep(3);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 1200); // simulate API delay
    };
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
                        <MotionWrapper delay={0.3} yOffset={20} className="bg-industrial-dark dark:bg-industrial-light relative z-10 p-8 md:p-12 overflow-hidden structural-panel !border-none">

                            {/* Progress Indicator - Goal Gradient Effect */}
                            {!isSuccess && (
                                <div className="mb-10">
                                    <div className="flex justify-between text-xs font-sans uppercase tracking-widest text-tundora mb-3">
                                        <span>Step {step} of 3</span>
                                        <span>{3 - step} Remaining</span>
                                    </div>
                                    <div className="w-full h-1 bg-tundora/20 rounded-full overflow-hidden">
                                        <motion.div
                                            className="h-full bg-zrk-gold"
                                            initial={{ width: '0%' }}
                                            animate={{ width: `${(step / 3) * 100}%` }}
                                            transition={{ duration: 0.5, ease: 'circOut' }}
                                        />
                                    </div>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="relative min-h-[250px] flex flex-col justify-center">
                                <AnimatePresence mode="wait">
                                    {isSuccess ? (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="text-center space-y-4"
                                        >
                                            <div className="w-16 h-16 mx-auto bg-zrk-gold text-white rounded-full flex items-center justify-center mb-6">
                                                <Check size={32} />
                                            </div>
                                            <h3 className="text-2xl font-sans uppercase font-bold text-industrial-light dark:text-industrial-dark">Inquiry Received</h3>
                                            <p className="text-tundora">Our technical team will contact you within 24 hours.</p>
                                        </motion.div>
                                    ) : step === 1 ? (
                                        <motion.div
                                            key="step1"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-6"
                                        >
                                            <label className="block text-sm font-sans uppercase tracking-widest text-tundora mb-2">Enterprise Name</label>
                                            <input
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full bg-transparent border-b border-tundora/40 text-industrial-light dark:text-industrial-dark py-4 text-xl focus:outline-none focus:border-zrk-gold transition-colors"
                                                placeholder="Company / Firm"
                                                autoFocus
                                            />
                                            <button
                                                type="button"
                                                onClick={handleNext}
                                                disabled={formData.name.length < 3}
                                                className="btn-primary mt-8 w-full sm:w-auto flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                Continue <ArrowRight size={18} />
                                            </button>
                                        </motion.div>
                                    ) : step === 2 ? (
                                        <motion.div
                                            key="step2"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-6"
                                        >
                                            <label className="block text-sm font-sans uppercase tracking-widest text-tundora mb-2">Email Identity</label>
                                            <input
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full bg-transparent border-b border-tundora/40 text-industrial-light dark:text-industrial-dark py-4 text-xl focus:outline-none focus:border-zrk-gold transition-colors"
                                                placeholder="corporate@domain.com"
                                                autoFocus
                                            />
                                            <div className="flex items-center gap-4 mt-8">
                                                <button type="button" onClick={() => setStep(1)} className="btn-secondary">Back</button>
                                                <button
                                                    type="button"
                                                    onClick={handleNext}
                                                    disabled={!formData.email.includes('@')}
                                                    className="btn-primary flex items-center justify-center gap-3 flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                                                >
                                                    Continue <ArrowRight size={18} />
                                                </button>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="step3"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-6"
                                        >
                                            <label className="block text-sm font-sans uppercase tracking-widest text-tundora mb-2">Project Scope</label>
                                            <textarea
                                                rows="4"
                                                value={formData.scope}
                                                onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                                                className="w-full bg-transparent border-b border-tundora/40 text-industrial-light dark:text-industrial-dark py-4 text-lg focus:outline-none focus:border-zrk-gold transition-colors resize-none"
                                                placeholder="Specify volume and technical requirements..."
                                                autoFocus
                                            ></textarea>
                                            <div className="flex items-center gap-4 mt-8">
                                                <button type="button" onClick={() => setStep(2)} className="btn-secondary">Back</button>
                                                <button
                                                    type="submit"
                                                    disabled={isSubmitting || formData.scope.length < 5}
                                                    className="btn-primary flex items-center justify-center gap-3 flex-1 disabled:opacity-50"
                                                >
                                                    {isSubmitting ? 'Transmitting...' : 'Transmit Request'}
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </form>
                        </MotionWrapper>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
