import React, { useEffect, useState } from 'react';
import { Bot, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ShikshaAI = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasSpoken, setHasSpoken] = useState(false);

    const fullText = `नमस्कार! क्या आपका LED TV खराब हो गया है? स्क्रीन नहीं आ रही, आवाज़ है लेकिन पिक्चर नहीं, या TV बिल्कुल चालू नहीं हो रहा? चिंता मत कीजिए। Vijay Electronics, Unnao आपके लिए लाया है तेज़, भरोसेमंद और किफायती LED TV Repair Service। हम रिपेयर करते हैं सभी ब्रांड के LED TV — Samsung, LG, Sony, MI, OnePlus, Panasonic, Toshiba और अन्य। पावर सप्लाई की समस्या, बैकलाइट या डिस्प्ले इश्यू, मदरबोर्ड रिपेयर, साउंड और HDMI प्रॉब्लम, Wall Mount और Installation. हमारी खासियत: अनुभवी टेक्नीशियन, ओरिजिनल पार्ट्स, और ईमानदार सर्विस। आज ही कॉल करें: 8090090051. Vijay Electronics, Purani Bazar, Unnao. एक कॉल में समाधान — Vijay Electronics, Unnao.`;

    const speak = () => {
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel(); // Stop any previous speech
            const utterance = new SpeechSynthesisUtterance(fullText);
            utterance.lang = 'hi-IN'; // Set Language to Hindi (India)

            // Try to find a Hindi voice, specifically Google Hindi or similar
            const voices = window.speechSynthesis.getVoices();
            const hindiVoice = voices.find(voice =>
                voice.lang.includes('hi') || voice.name.includes('Hindi') || voice.name.includes('Google हिन्दी')
            );

            if (hindiVoice) {
                utterance.voice = hindiVoice;
            }

            utterance.rate = 1;
            utterance.pitch = 1;

            window.speechSynthesis.speak(utterance);
            setHasSpoken(true);
            setIsOpen(true);
        }
    };

    useEffect(() => {
        // Attempt Auto-Play on Load
        const timer = setTimeout(() => {
            setIsOpen(true);
            speak();
        }, 1500);

        window.speechSynthesis.onvoiceschanged = () => { };

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.8 }}
                        className="bg-card border border-primary/20 p-4 rounded-xl shadow-2xl max-w-xs relative bg-opacity-95 backdrop-blur-md"
                    >
                        <button
                            onClick={() => {
                                setIsOpen(false);
                                window.speechSynthesis.cancel();
                            }}
                            className="absolute top-2 right-2 text-muted-foreground hover:text-white"
                        >
                            <X size={16} />
                        </button>
                        <div className="flex items-start gap-3">
                            <div
                                className="bg-primary/20 p-2 rounded-full cursor-pointer animate-pulse"
                                onClick={speak}
                                title="Click to Listen"
                            >
                                <Bot className="text-primary w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-heading font-bold text-sm text-primary mb-1">Shiksha AI (Assistant)</h4>
                                <p className="text-xs text-muted-foreground leading-relaxed h-24 overflow-y-auto custom-scrollbar pr-1">
                                    नमस्कार! क्या आपका LED TV खराब हो गया है? <br />
                                    ... <span className="text-primary cursor-pointer" onClick={speak}>(क्लिक करें सुनने के लिए)</span>
                                </p>
                                <a
                                    href="tel:918090090051"
                                    className="mt-3 inline-block text-xs bg-primary text-primary-foreground px-3 py-1.5 rounded-full font-medium hover:bg-primary/90 transition-colors"
                                >
                                    Call Now: 8090090051
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => {
                    setIsOpen(!isOpen);
                    if (!isOpen) speak();
                }}
                className="bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:shadow-primary/50 hover:scale-110 transition-all duration-300 group"
            >
                {isOpen ? <X size={24} /> : <Bot size={24} className="group-hover:rotate-12 transition-transform" />}
            </button>
        </div>
    );
};

export default ShikshaAI;
