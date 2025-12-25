import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Rocket, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <Rocket className="text-primary w-6 h-6 transform group-hover:-translate-y-1 transition-transform" />
                    </div>
                    <span className="font-heading font-bold text-xl tracking-tight">
                        Vijay<span className="text-primary">Electronics</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                `text-sm font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-muted-foreground'
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                    <a
                        href="tel:+918090090051"
                        className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                    >
                        <Phone size={16} />
                        Book Repair
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-foreground p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-t border-border bg-background"
                    >
                        <div className="flex flex-col p-4 gap-4">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        `text-base font-medium p-2 rounded-md transition-colors ${isActive ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:text-foreground'
                                        }`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                            <a
                                href="tel:+918090090051"
                                className="flex justify-center items-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-lg text-sm font-bold hover:bg-primary/90 transition-all"
                            >
                                <Phone size={18} />
                                Call Now
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
