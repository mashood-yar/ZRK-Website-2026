import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-industrial-dark text-industrial-light py-16 px-6 border-t border-tundora/20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="md:col-span-1">
                    <Link to="/" className="text-2xl font-sans tracking-tighter uppercase font-bold mb-6 block">
                        ZRK Group
                    </Link>
                    <p className="text-sm text-tundora font-body max-w-xs">
                        High-Quality MDF & Laminated Boards | ZRK Group Pakistan
                    </p>
                </div>

                <div>
                    <h4 className="font-sans uppercase tracking-widest text-xs mb-6 text-zrk-gold">Sitemap</h4>
                    <ul className="space-y-4 text-sm font-medium">
                        <li><Link to="/products" className="hover:text-white transition-colors">Products</Link></li>
                        <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                        <li><Link to="/sustainability" className="hover:text-white transition-colors">Sustainability</Link></li>
                        <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-sans uppercase tracking-widest text-xs mb-6 text-zrk-gold">Legal</h4>
                    <ul className="space-y-4 text-sm font-medium">
                        <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                        <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-sans uppercase tracking-widest text-xs mb-6 text-zrk-gold">Contact</h4>
                    <p className="text-sm text-tundora mb-2">info@zrkgroup.com</p>
                    <p className="text-sm text-tundora">WhatsApp: +92 333 297 5975</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-tundora/20 flex flex-col md:flex-row justify-between items-center text-xs text-tundora uppercase tracking-widest gap-4 md:gap-0">
                <p>&copy; {new Date().getFullYear()} ZRK Group. All rights reserved.</p>
                <div className="flex items-center gap-3 bg-zrk-black/30 px-4 py-2 rounded-full border border-tundora/20">
                    <p className="mt-0.5">PROTOTYPE BY MYK STUDIO</p>
                    <a href="https://mykstudio.com" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
                        <img src="/assets/images/myk-logo.webp" alt="MYK Studio" className="h-6 w-auto" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
