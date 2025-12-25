import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ShikshaAI from './ShikshaAI';

const Layout = ({ children }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col font-body">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
            <ShikshaAI />
        </div>
    );
};

export default Layout;
