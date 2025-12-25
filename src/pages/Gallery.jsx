import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import heroBg from '../assets/hero_bg.png';
import tvRepairImg from '../assets/tv_repair.png';

const Gallery = () => {
    // Simulating multiple images by reusing available ones
    const images = [
        { src: tvRepairImg, alt: "Curved LED TV Repair" },
        { src: heroBg, alt: "Motherboard Chip Level Work" },
        { src: tvRepairImg, alt: "Backlight Replacement in Progress" },
        { src: heroBg, alt: "Broken Screen Display" },
        { src: tvRepairImg, alt: "Final Testing Lab" },
        { src: heroBg, alt: "Shop Interior" },
    ];

    return (
        <>
            <Helmet>
                <title>Repair Gallery | Vijay Electronics</title>
                <meta name="description" content="See our successful repairs. Before and after photos of broken screens, motherboard repairs, and more." />
            </Helmet>
            <div className="py-12 bg-background min-h-screen">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-heading font-bold mb-12 text-center">Our Work Gallery</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {images.map((img, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer"
                            >
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                                    <span className="bg-background/80 px-4 py-2 rounded-full text-sm font-bold">View Project</span>
                                </div>
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                                    <p className="text-white text-sm font-medium">{img.alt}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Gallery;
