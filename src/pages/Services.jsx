import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { services } from '../data/servicesData';
import { Helmet } from 'react-helmet-async';

const Services = () => {
    return (
        <>
            <Helmet>
                <title>Our Services | Vijay Electronics</title>
                <meta name="description" content="Affordable LED TV repair services including screen replacement, motherboard repair, and backlight changing in Unnao." />
            </Helmet>

            <div className="pt-12 pb-24 px-4 bg-background min-h-screen">
                <div className="container mx-auto">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Our Services</h1>
                        <p className="text-muted-foreground text-lg">
                            Comprehensive repair solutions for all major TV brands including Sony, Samsung, LG, and more.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, idx) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300"
                            >
                                <div className="p-8">
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="bg-primary/10 p-3 rounded-xl">
                                            <service.icon className="text-primary w-8 h-8" />
                                        </div>
                                        <div className="bg-secondary/50 px-3 py-1 rounded-full border border-white/5">
                                            <span className="text-primary font-bold text-sm text-nowrap">{service.priceRange}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                                    <p className="text-muted-foreground mb-6 leading-relaxed">
                                        {service.description}
                                    </p>

                                    <div className="space-y-3 pt-6 border-t border-border">
                                        {service.features.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <Check size={18} className="text-green-500 shrink-0" />
                                                <span className="text-sm text-gray-300">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <button className="w-full mt-8 bg-white/5 hover:bg-white/10 text-white font-medium py-3 rounded-lg border border-white/10 transition-colors">
                                        Book Service
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-20 bg-primary rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('/src/assets/hero_bg.png')] opacity-10 bg-cover mix-blend-overlay"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold text-primary-foreground mb-4">Not surely what's wrong?</h2>
                            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                                Our technicians can diagnose the issue at your doorstep. Book a diagnostic visit today for just ₹199.
                            </p>
                            <a href="tel:+918090090051" className="inline-block bg-white text-primary font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
                                Call for Diagnosis
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Services;
