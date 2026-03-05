import { FaWhatsapp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { openWhatsApp, getGeneralEnquiryMessage } from '../utils/whatsapp';

const WhatsappButton = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-4">
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, x: 20, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 10, scale: 0.9 }}
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                        className="bg-black border border-[#333] px-4 py-2 hidden sm:block"
                    >
                        <p className="text-white text-xs font-condensed font-bold tracking-widest uppercase whitespace-nowrap">
                            Need Help?
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => openWhatsApp(getGeneralEnquiryMessage())}
                className="w-14 h-14 bg-whatsapp flex items-center justify-center text-white shadow-lg lg:w-16 lg:h-16 relative"
                aria-label="Contact us on WhatsApp"
            >
                <FaWhatsapp className="text-3xl lg:text-4xl" />
            </motion.button>
        </div>
    );
};

export default WhatsappButton;
