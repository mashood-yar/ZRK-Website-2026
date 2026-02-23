import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CustomCursor from './CustomCursor';
import ScrollProgress from './ScrollProgress';

/**
 * Main Layout wrapper orchestrating the hybrid dark-to-light structure and routing constraints.
 */
const Layout = ({ children }) => {
    const { pathname } = useLocation();

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="flex flex-col min-h-screen selection:bg-zrk-gold selection:text-white bg-industrial-light dark:bg-industrial-dark w-full overflow-x-hidden cursor-none relative">
            <CustomCursor />
            <ScrollProgress />
            <Header />
            <main className="flex-grow w-full mt-20 relative z-10">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
