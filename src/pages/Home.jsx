import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, Clock, PenTool } from 'lucide-react';
import { services } from '../data/servicesData';
import { testimonials } from '../data/testimonialsData';
import heroBg from '../assets/hero_bg.png';
import tvRepairImg from '../assets/tv_repair.png';

const Home = () => {
    return (
        <div className="overflow-hidden">
            {/* HER SECTOIN */}
            <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroBg}
                        alt="Background"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 z-10 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-5xl md:text-7xl font-heading font-black mb-6 tracking-tight">
                            Expert LED TV <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-neon">Repair Center</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                            We bring dead pixels back to life. Professional screen replacement and motherboard repair in Unnao with warranty.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="tel:+918090090051"
                                className="px-8 py-4 bg-primary text-primary-foreground text-lg font-bold rounded-full hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 flex items-center justify-center gap-2"
                            >
                                Book Now
                            </a>
                            <Link
                                to="/services"
                                className="px-8 py-4 bg-secondary/50 backdrop-blur-sm border border-white/10 text-white text-lg font-bold rounded-full hover:bg-secondary transition-all flex items-center justify-center gap-2"
                            >
                                View Services <ArrowRight size={20} />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* FEATURES STRIP */}
            <div className="bg-secondary/20 border-y border-white/5 py-8 backdrop-blur-sm">
                <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    {[
                        { icon: ShieldCheck, text: "6 Months Warranty" },
                        { icon: Clock, text: "Same Day Service" },
                        { icon: PenTool, text: "Expert Technicians" },
                        { icon: Star, text: "4.8/5 Rated" },
                    ].map((feature, idx) => (
                        <div key={idx} className="flex flex-col items-center gap-2 text-muted-foreground">
                            <feature.icon className="text-primary mb-1" size={28} />
                            <span className="font-heading font-bold text-sm md:text-base text-white">{feature.text}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* SERVICES PREVIEW */}
            <section className="py-24 bg-background relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-widest text-sm uppercase">Our Expertise</span>
                        <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 mb-4">Premium Repair Solutions</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, idx) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group bg-card border border-border p-6 rounded-2xl hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10"
                            >
                                <div className="bg-secondary/50 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                                    <service.icon className="text-primary w-7 h-7" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                                    {service.description}
                                </p>
                                <Link to="/services" className="text-sm font-bold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Learn More <ArrowRight size={16} />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* HIGHLIGHT / ABOUT PREVIEW */}
            <section className="py-24 bg-secondary/10">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2 relative">
                        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-20"></div>
                        <img
                            src={tvRepairImg}
                            alt="Technician working"
                            className="relative rounded-2xl shadow-2xl border border-white/10 w-full object-cover"
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Why Choose Vijay Electronics?</h2>
                        <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                            With over 10 years of experience in Unnao, we have repaired over 5000+ televisions. We use advanced diagnostic tools and only genuine spare parts to ensure your device lasts longer.
                        </p>
                        <ul className="space-y-4 mb-8">
                            {["Doorstep Pickup & Delivery", "Transparent Pricing", "Certified Engineers"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="bg-primary/20 p-1 rounded-full">
                                        <ArrowRight size={14} className="text-primary" />
                                    </div>
                                    <span className="font-medium text-white">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Link to="/about" className="btn-primary inline-flex items-center gap-2 text-primary font-bold hover:text-white transition-colors">
                            Read Our Story
                        </Link>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-heading font-center text-center font-bold mb-16">Customer Verified Reviews</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((t) => (
                            <div key={t.id} className="bg-card border border-border p-8 rounded-2xl relative">
                                <div className="text-primary text-4xl font-serif absolute top-6 right-6 opacity-20">"</div>
                                <div className="flex gap-1 mb-4">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                                    ))}
                                </div>
                                <p className="text-muted-foreground mb-6 italic">"{t.comment}"</p>
                                <div>
                                    <h4 className="font-bold text-white">{t.name}</h4>
                                    <span className="text-xs text-muted-foreground">{t.location}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
