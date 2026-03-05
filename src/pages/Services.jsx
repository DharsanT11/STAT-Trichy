import { Link } from 'react-router-dom';
import { FiHardDrive, FiCpu, FiServer, FiMonitor, FiCheck } from 'react-icons/fi';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';

const servicesData = [
    {
        icon: FiHardDrive,
        title: 'Hard Disk Recovery',
        tagline: 'Mechanical Failures',
        description: 'Our advanced hard disk recovery service handles all types of failures — from clicking and grinding noises to firmware corruption and bad sectors. We use ISO-certified Class 100 cleanroom facilities to safely open and repair damaged drives.',
        features: [
            'Head stack replacement',
            'Firmware reconstruction',
            'Platter surface recovery',
            'PCB repair & replacement',
            'Bad sector mapping',
            'Logical recovery',
        ],
        image: 'https://upload.wikimedia.org/wikipedia/commons/9/97/35-Desktop-Hard-Drive.jpg',
    },
    {
        icon: FiCpu,
        title: 'SSD Recovery',
        tagline: 'Flash Memory',
        description: 'Solid-state drive recovery requires specialized tools and expertise. Our engineers work with all NAND flash types — SLC, MLC, TLC, and QLC — to recover data from SSDs with controller failures, firmware bugs, and physical damage.',
        features: [
            'Controller chip-off',
            'NAND flash reconstruction',
            'Firmware-level repair',
            'Trim command recovery',
            'Encrypted SSD recovery',
            'NVMe & M.2 support',
        ],
        image: 'https://m.media-amazon.com/images/I/61zFwQXNRxL._AC_.jpg',
    },
    {
        icon: FiServer,
        title: 'RAID Recovery',
        tagline: 'All Configurations',
        description: 'We reconstruct failed RAID arrays of any configuration — RAID 0, 1, 5, 6, 10, and custom arrays. Our team reverse-engineers array parameters and rebuilds data structures to extract your files intact.',
        features: [
            'RAID parameter detection',
            'Virtual reconstruction',
            'Multi-disk failure',
            'Controller failure recovery',
            'NAS & SAN rescue',
            'Server crash recovery',
        ],
        image: 'https://th.bing.com/th/id/OIP.QJqPGH5POicQV3PaXRQtCwHaFj?w=238&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    },
    {
        icon: FiMonitor,
        title: 'Laptop Recovery',
        tagline: 'All Brands',
        description: 'Whether your laptop was dropped, suffered water damage, or experienced a drive failure, we can recover your data. We support all major brands including Dell, HP, Lenovo, Apple MacBook, ASUS, and more.',
        features: [
            'Liquid damage recovery',
            'Dropped laptop rescue',
            'OS crash extraction',
            'Encrypted drive rescue',
            'MacBook data extraction',
            'Ultrabook support',
        ],
        image: 'data:image/webp;base64,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',
    },
];

const Services = () => {
    return (
        <div className="bg-black pt-20">
            {/* Dark Header */}
            <section className="relative bg-[#0a0a0a] py-32 border-b border-[#222]">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-accent font-condensed font-bold uppercase tracking-widest text-sm mb-4"
                    >
                        Our Expertise
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-condensed font-bold text-white mb-6 tracking-wide uppercase leading-none"
                    >
                        Data Recovery
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-sans"
                    >
                        Industry-leading data recovery solutions powered by advanced technology and decades of expertise.
                    </motion.p>
                </div>
            </section>

            {/* Services Detail List */}
            <section className="py-24 lg:py-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-32">
                        {servicesData.map((service, index) => (
                            <div
                                key={service.title}
                                className={`grid lg:grid-cols-2 gap-16 items-center`}
                            >
                                {/* Image Box - Sharp, Monolithic */}
                                <ScrollReveal
                                    direction={index % 2 !== 0 ? 'right' : 'left'}
                                    className={`${index % 2 !== 0 ? 'lg:order-2' : ''}`}
                                >
                                    <div className="relative group overflow-hidden border border-[#222] bg-[#111]">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full aspect-[4/3] object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                        />
                                        <div className="absolute top-0 left-0 w-16 h-16 bg-accent flex items-center justify-center">
                                            <service.icon className="text-white text-2xl" />
                                        </div>
                                    </div>
                                </ScrollReveal>

                                {/* Content */}
                                <ScrollReveal
                                    direction={index % 2 !== 0 ? 'left' : 'right'}
                                    delay={0.15}
                                    className={`${index % 2 !== 0 ? 'lg:order-1' : ''}`}
                                >
                                    <p className="text-accent font-condensed font-bold uppercase tracking-widest text-sm mb-3">
                                        {service.tagline}
                                    </p>
                                    <h2 className="text-4xl lg:text-5xl font-condensed font-bold text-white mb-6 uppercase tracking-wide">{service.title}</h2>
                                    <p className="text-muted leading-relaxed mb-10 text-lg font-sans">{service.description}</p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                                        {service.features.map((feature, i) => (
                                            <motion.div
                                                key={feature}
                                                initial={{ opacity: 0, x: -15 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                                className="flex items-center gap-3 group/item border-b border-[#222] pb-3"
                                            >
                                                <div className="w-5 h-5 flex items-center justify-center border border-accent shrink-0">
                                                    <FiCheck className="text-accent text-xs" />
                                                </div>
                                                <span className="text-white text-sm font-sans uppercase tracking-wider">{feature}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </ScrollReveal>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Flat Red CTA Block */}
            <section className="py-24 bg-accent">
                <ScrollReveal className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-5xl font-condensed font-bold text-white mb-6 tracking-wide uppercase">Need Recovery?</h2>
                    <p className="text-white/90 font-sans text-xl mb-10">
                        Contact us today for a free diagnostic assessment.
                    </p>
                    <Link to="/contact" className="bg-black text-white border-2 border-black px-8 py-4 font-condensed font-bold uppercase tracking-widest text-sm hover:bg-transparent hover:text-black transition-colors">
                        Get Free Assessment
                    </Link>
                </ScrollReveal>
            </section>
        </div>
    );
};

export default Services;
