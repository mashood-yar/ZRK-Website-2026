import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

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
                    <Link to="/" className="text-xl font-sans tracking-tighter uppercase font-bold text-industrial-dark dark:text-industrial-light relative z-50">
                        ZRK Group
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
                    <nav className="hidden lg:flex gap-8 text-sm font-medium tracking-wide uppercase">
                        <Link to="/" className="hover:text-zrk-gold transition-colors duration-300">Home</Link>
                        <Link to="/products" className="hover:text-zrk-gold transition-colors duration-300">Products</Link>
                        <Link to="/about" className="hover:text-zrk-gold transition-colors duration-300">About</Link>
                        <Link to="/contact" className="hover:text-zrk-gold transition-colors duration-300">Contact</Link>
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
                    <Link to="/" className="hover:text-zrk-gold transition-colors duration-300" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/products" className="hover:text-zrk-gold transition-colors duration-300" onClick={() => setIsOpen(false)}>Products</Link>
                    <Link to="/about" className="hover:text-zrk-gold transition-colors duration-300" onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="/contact" className="hover:text-zrk-gold transition-colors duration-300" onClick={() => setIsOpen(false)}>Contact</Link>
                </nav>
            </div>
        </>
    );
};

export default Header;
