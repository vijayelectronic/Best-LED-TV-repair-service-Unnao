import React from 'react';
import { Helmet } from 'react-helmet-async';
import { UserCheck, Award, HeartHandshake } from 'lucide-react';
import tvRepairImg from '../assets/tv_repair.png';

const About = () => {
    return (
        <>
            <Helmet>
                <title>About Us | Vijay Electronics</title>
            </Helmet>
            <div className="py-16 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="absolute px-8 py-12 border-2 border-primary rounded-2xl -top-4 -left-4 w-full h-full z-0"></div>
                            <img
                                src={tvRepairImg}
                                alt="Shop Owner"
                                className="relative z-10 w-full rounded-xl shadow-2xl"
                            />
                        </div>

                        <div>
                            <span className="text-primary font-bold uppercase tracking-wider text-sm mb-2 block">Since 2015</span>
                            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Repairing with Trust & Precision</h1>
                            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                                Vijay Electronics started as a small repair shop in Unnao's Purani Bazar. Today, we are the city's most trusted destination for advanced LED/LCD TV repairs.
                            </p>
                            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                                We specialize in complicated panel bonding and chip-level motherboard services that other shops often refuse. Our mission is to reduce e-waste by extending the life of your electronics.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-card p-4 rounded-xl border border-border flex items-start gap-4">
                                    <UserCheck className="text-primary w-8 h-8" />
                                    <div>
                                        <h4 className="font-bold text-lg">Certified Pros</h4>
                                        <p className="text-sm text-muted-foreground">Expertly trained technicians</p>
                                    </div>
                                </div>
                                <div className="bg-card p-4 rounded-xl border border-border flex items-start gap-4">
                                    <Award className="text-primary w-8 h-8" />
                                    <div>
                                        <h4 className="font-bold text-lg">Original Parts</h4>
                                        <p className="text-sm text-muted-foreground">Premium spare parts used</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
