import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import { openWhatsApp, getGeneralEnquiryMessage } from '../utils/whatsapp';

const Contact = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert('Transmission received. Our engineers will reply shortly.');
    };

    return (
        <div className="bg-black pt-20 min-h-screen">
            {/* Header */}
            <section className="relative bg-[#0a0a0a] py-24 lg:py-32 border-b border-[#222]">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-accent font-condensed font-bold uppercase tracking-widest text-sm mb-4"
                    >
                        Support & Service
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-condensed font-bold text-white mb-6 uppercase tracking-wide leading-none"
                    >
                        Contact Us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-sans"
                    >
                        Hardware failure requires immediate action. Reach our certified engineers for direct support.
                    </motion.p>
                </div>
            </section>

            <section className="py-24 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-20">
                        {/* Contact Info (Lupine Monolith Grid) */}
                        <ScrollReveal direction="left">
                            <h2 className="text-3xl font-condensed font-bold text-white uppercase tracking-wide mb-12">Headquarters</h2>

                            <div className="grid sm:grid-cols-2 gap-6 mb-12">
                                {[
                                    {
                                        icon: FiPhone,
                                        title: 'Direct Line',
                                        detail: '+91 98765 43210',
                                        sub: 'Mon-Sat, 9AM-7PM',
                                    },
                                    {
                                        icon: FiMail,
                                        title: 'Email',
                                        detail: 'info@statrecovery.com',
                                        sub: '24hr response time',
                                    },
                                    {
                                        icon: FiMapPin,
                                        title: 'Location',
                                        detail: '123 Tech Park, Blr',
                                        sub: 'Secure Lab Facility',
                                    },
                                    {
                                        icon: FiClock,
                                        title: 'Operations',
                                        detail: 'Mon - Sat, 9-7',
                                        sub: 'Sunday Closed',
                                    },
                                ].map((item, i) => (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: i * 0.1 }}
                                        className="border border-[#222] bg-[#0a0a0a] p-6 hover:border-accent transition-colors duration-300"
                                    >
                                        <div className="w-10 h-10 border border-[#333] flex items-center justify-center mb-4">
                                            <item.icon className="text-white text-lg" />
                                        </div>
                                        <h3 className="font-condensed font-bold uppercase tracking-widest text-white text-sm mb-2">{item.title}</h3>
                                        <p className="text-muted text-sm font-sans mb-1">{item.detail}</p>
                                        <p className="text-[#555] text-xs font-sans uppercase tracking-widest">{item.sub}</p>
                                    </motion.div>
                                ))}
                            </div>

                            <button
                                onClick={() => openWhatsApp(getGeneralEnquiryMessage())}
                                className="btn-primary w-full py-4 flex items-center justify-center gap-3"
                            >
                                <FaWhatsapp className="text-lg" />
                                Urgent WhatsApp Support
                            </button>
                        </ScrollReveal>

                        {/* Contact Form (Flat & Stark) */}
                        <ScrollReveal direction="right" delay={0.15}>
                            <div className="border border-[#222] bg-[#0a0a0a] p-8 md:p-12">
                                <h2 className="text-3xl font-condensed font-bold text-white uppercase tracking-wide mb-4">Transmission</h2>
                                <p className="text-muted text-sm font-sans mb-10">Secure message to the data recovery lab.</p>

                                <form onSubmit={handleFormSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-xs font-condensed font-bold uppercase tracking-widest text-[#888] mb-2">Name</label>
                                            <input
                                                type="text"
                                                className="w-full bg-[#111] border border-[#333] px-4 py-3 text-white font-sans text-sm focus:border-accent focus:outline-none transition-colors"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-condensed font-bold uppercase tracking-widest text-[#888] mb-2">Phone</label>
                                            <input
                                                type="tel"
                                                className="w-full bg-[#111] border border-[#333] px-4 py-3 text-white font-sans text-sm focus:border-accent focus:outline-none transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-condensed font-bold uppercase tracking-widest text-[#888] mb-2">Email</label>
                                        <input
                                            type="email"
                                            className="w-full bg-[#111] border border-[#333] px-4 py-3 text-white font-sans text-sm focus:border-accent focus:outline-none transition-colors"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-condensed font-bold uppercase tracking-widest text-[#888] mb-2">Issue Type</label>
                                        <select className="w-full bg-[#111] border border-[#333] px-4 py-3 text-white font-sans text-sm focus:border-accent focus:outline-none transition-colors appearance-none">
                                            <option>Mechanical Failure</option>
                                            <option>Logical Corruption</option>
                                            <option>SSD/NAND Failure</option>
                                            <option>RAID Array Rebuild</option>
                                            <option>Other Enquiry</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-condensed font-bold uppercase tracking-widest text-[#888] mb-2">Diagnostic Details</label>
                                        <textarea
                                            rows="4"
                                            className="w-full bg-[#111] border border-[#333] px-4 py-3 text-white font-sans text-sm focus:border-accent focus:outline-none transition-colors resize-none"
                                            required
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn-outline w-full py-4 mt-4"
                                    >
                                        Initialize Request
                                    </button>
                                </form>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
