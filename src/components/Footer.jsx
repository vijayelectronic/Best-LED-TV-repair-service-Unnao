import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-card border-t border-border pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="font-heading font-bold text-2xl mb-4 text-white">
                            Vijay<span className="text-primary">Electronics</span>
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                            Expert LED TV repair services in Unnao. We bring your entertainment back to life with premium parts and certified expertise.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="bg-secondary p-2 rounded-full hover:bg-primary hover:text-white transition-colors text-muted-foreground">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="bg-secondary p-2 rounded-full hover:bg-primary hover:text-white transition-colors text-muted-foreground">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="bg-secondary p-2 rounded-full hover:bg-primary hover:text-white transition-colors text-muted-foreground">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Our Services</Link></li>
                            <li><Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors text-sm">Repair Gallery</Link></li>
                            <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">About Us</Link></li>
                            <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact Support</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Our Expertise</h4>
                        <ul className="space-y-3">
                            <li className="text-muted-foreground text-sm">Screen Replacement</li>
                            <li className="text-muted-foreground text-sm">Motherboard Repair</li>
                            <li className="text-muted-foreground text-sm">Backlight Change</li>
                            <li className="text-muted-foreground text-sm">Android TV Update</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-primary shrink-0 mt-1" size={18} />
                                <span className="text-muted-foreground text-sm">9 Purani Bazar, Unnao, Uttar Pradesh, India - 209801</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-primary shrink-0" size={18} />
                                <span className="text-muted-foreground text-sm">+91 80900 90051</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-primary shrink-0" size={18} />
                                <span className="text-muted-foreground text-sm">support@vijayelectronics.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border pt-8 text-center">
                    <p className="text-muted-foreground text-sm">
                        © {new Date().getFullYear()} Vijay Electronics. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
