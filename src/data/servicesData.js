import { Tv, Monitor, Cpu, Settings2 } from 'lucide-react';

export const services = [
    {
        id: 1,
        title: "Screen Replacement",
        description: "Original LED/LCD screens for Sony, Samsung, LG, Mi, and all major brands. High durability and vibrant colors guaranteed.",
        icon: Tv,
        priceRange: "₹2500 - ₹15000",
        features: ["Original Panels", "6 Months Warranty", "1 Hour Service"]
    },
    {
        id: 2,
        title: "Motherboard Repair",
        description: "Chip-level repair for dead TVs, turning on issues, and HDMI port failures. Advanced BGA machine used.",
        icon: Cpu,
        priceRange: "₹800 - ₹4500",
        features: ["Component Level Fix", "Data Saving", "3 Months Warranty"]
    },
    {
        id: 3,
        title: "Backlight Changing",
        description: "Fix dark screen, blue tint, or flickering issues with high-quality original backlights.",
        icon: Monitor,
        priceRange: "₹1200 - ₹3500",
        features: ["Uniform Brightness", "Long Life", "Original Strips"]
    },
    {
        id: 4,
        title: "Android TV Software",
        description: "Software flashing, smart TV upgrades, and app installation services for hanging or boot-loop issues.",
        icon: Settings2,
        priceRange: "₹500 - ₹1500",
        features: ["Latest Android Version", "No Data Loss", "Quick Fix"]
    }
];
