import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <>
            <header
                className={`fixed top-0 w-full z-50 transition-colors duration-MAX ease-industrial ${scrolled ? 'bg-industrial-light/90 dark:bg-industrial-dark/90 backdrop-blur-md border-b border-tundora/10 dark:border-tundora/30' : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative z-50">
                    <Link to="/" className="relative z-50 flex items-center">
                        <img src="/assets/images/zrk-logo.png" alt="ZRK Group" className="h-8 md:h-10 w-auto dark:invert transition-all duration-300" />
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden text-industrial-dark dark:text-industrial-light relative z-50 p-2"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex gap-8 text-sm font-medium tracking-wide uppercase relative">
                        {['/', '/products', '/designstudio', '/e1', '/about', '/contact'].map((path) => {
                            const label = path === '/' ? 'Home' : (path === '/designstudio' ? 'Design Studio' : (path === '/e1' ? 'E1 Standards' : path.substring(1)));
                            const isActive = location.pathname === path || (path === '/products' && location.pathname.startsWith('/products'));

                            return (
                                <Link
                                    key={path}
                                    to={path}
                                    className={`relative hover:text-zrk-gold transition-colors duration-200 py-2 ${isActive ? 'text-zrk-gold' : 'text-industrial-dark dark:text-industrial-light'}`}
                                >
                                    {label}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeNavIndicator"
                                            className="absolute -bottom-1 left-0 right-0 h-[2px] bg-zrk-gold"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </header>

            {/* Mobile Nav Overlay */}
            <div
                className={`lg:hidden fixed inset-0 z-40 bg-industrial-light/95 dark:bg-industrial-dark/95 backdrop-blur-xl transition-transform duration-MAX ease-industrial ${isOpen ? 'translate-y-0' : '-translate-y-full'
                    }`}
                style={{ paddingTop: '80px' }}
            >
                <nav className="flex flex-col items-center justify-center h-full gap-8 text-2xl font-sans tracking-tighter uppercase font-bold text-industrial-dark dark:text-industrial-light">
                    {['/', '/products', '/designstudio', '/e1', '/about', '/contact'].map((path) => {
                        const label = path === '/' ? 'Home' : (path === '/designstudio' ? 'Design Studio' : (path === '/e1' ? 'E1 Standards' : path.substring(1)));
                        const isActive = location.pathname === path || (path === '/products' && location.pathname.startsWith('/products'));

                        return (
                            <Link
                                key={path}
                                to={path}
                                className={`tap-target px-8 hover:text-zrk-gold transition-colors duration-200 ${isActive ? 'text-zrk-gold' : ''}`}
                                onClick={() => setIsOpen(false)}
                            >
                                {label}
                            </Link>
                        );
                    })}
                </nav>
            </div>
        </>
    );
};

export default Header;
