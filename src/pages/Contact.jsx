import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Contact Us | Vijay Electronics Unnao</title>
            </Helmet>
            <div className="py-12 bg-background min-h-screen">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-heading font-bold mb-4">Get in Touch</h1>
                        <p className="text-muted-foreground">Visit our shop or book a home service today.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Info Cards */}
                        <div className="space-y-6">
                            <div className="bg-card border border-border p-6 rounded-xl flex items-start gap-4 hover:border-primary transition-colors">
                                <MapPin className="text-primary w-6 h-6 mt-1" />
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Our Location</h3>
                                    <p className="text-muted-foreground">9 Purani Bazar, Near City Hospital, Unnao, Uttar Pradesh - 209801</p>
                                </div>
                            </div>

                            <div className="bg-card border border-border p-6 rounded-xl flex items-start gap-4 hover:border-primary transition-colors">
                                <Phone className="text-primary w-6 h-6 mt-1" />
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Call Us</h3>
                                    <p className="text-muted-foreground">+91 80900 90051</p>
                                    <p className="text-sm text-muted-foreground mt-1">Mon-Sun: 9am - 8pm</p>
                                </div>
                            </div>

                            <div className="bg-card border border-border p-6 rounded-xl flex items-start gap-4 hover:border-primary transition-colors">
                                <Mail className="text-primary w-6 h-6 mt-1" />
                                <div>
                                    <h3 className="font-bold text-lg mb-1">Email</h3>
                                    <p className="text-muted-foreground">contact@vijayelectronics.in</p>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="lg:col-span-2 h-[400px] bg-secondary rounded-2xl overflow-hidden border border-border relative">
                            {/* Placeholder for Map since we can't embed real interactive maps easily without ID, using static image or iframe if user allows external calls. Will simulate with an iframe for Google Maps centered on Unnao */}
                            <iframe
                                title="Google Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114529.7618990159!2d80.4223!3d26.5393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c3c8b0b57e755%3A0x6b86413289053805!2sUnnao%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1634567890000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
