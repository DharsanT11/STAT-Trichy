import { Link } from 'react-router-dom';
import { FiHardDrive, FiCpu, FiServer, FiMonitor, FiCheckCircle, FiClock, FiShield, FiAward } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import ProductCard from '../components/ProductCard';
import ScrollReveal from '../components/ScrollReveal';
import { getProducts } from '../utils/storage';
import { openWhatsApp, getGeneralEnquiryMessage } from '../utils/whatsapp';

const services = [
    {
        icon: FiHardDrive,
        title: 'Hard Disk Recovery',
        description: 'Professional recovery from mechanical and logical failures. We handle clicking drives, head crashes, firmware issues, and more.',
    },
    {
        icon: FiCpu,
        title: 'SSD Recovery',
        description: 'Advanced NAND flash recovery using specialized tools. Recover data from failed controllers, firmware corruption, and bad blocks.',
    },
    {
        icon: FiServer,
        title: 'RAID Recovery',
        description: 'Expert RAID array reconstruction for all configurations. RAID 0, 1, 5, 6, 10, and custom arrays recovered with precision.',
    },
    {
        icon: FiMonitor,
        title: 'Laptop Recovery',
        description: 'Complete laptop data recovery including damaged drives, water damage, and accidental deletion from all laptop brands.',
    },
];

const trustIndicators = [
    {
        icon: FiCheckCircle,
        title: '98% Success Rate',
        description: 'Industry-leading recovery success rate across all media types.',
    },
    {
        icon: FiClock,
        title: 'Fast Turnaround',
        description: 'Emergency 24-hour recovery service available for critical data.',
    },
    {
        icon: FiShield,
        title: '100% Confidential',
        description: 'Your data privacy is guaranteed with enterprise-grade security.',
    },
    {
        icon: FiAward,
        title: 'Certified Experts',
        description: 'ISO certified cleanroom facility with experienced engineers.',
    },
];

const Home = () => {
    const products = getProducts().slice(0, 3);

    return (
        <div className="bg-black">
            {/* Hero */}
            <Hero />

            {/* Services Section */}
            <section className="py-24 lg:py-32 relative border-t border-[#222]">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal className="text-center mb-20">
                        <p className="text-accent font-condensed font-bold uppercase tracking-widest text-sm mb-4">What We Do</p>
                        <h2 className="section-heading">Our Recovery Services</h2>
                        <p className="section-subheading">
                            We specialize in recovering data from all types of storage devices using state-of-the-art technology.
                        </p>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={service.title}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                delay={index * 100}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products (Lupine Shop Style) */}
            <section className="py-24 lg:py-32 bg-[#0a0a0a] border-t border border-[#222]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <ScrollReveal>
                            <p className="text-accent font-condensed font-bold uppercase tracking-widest text-sm mb-4">Featured</p>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-condensed font-bold text-white tracking-wide uppercase">Storage Products</h2>
                        </ScrollReveal>
                        <ScrollReveal delay={0.2} direction="left">
                            <Link to="/products" className="btn-outline inline-block">
                                View Full Catalogue
                            </Link>
                        </ScrollReveal>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product, index) => (
                            <ProductCard key={product.id} product={product} index={index} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 lg:py-32 bg-black border-t border border-[#222]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal className="text-center mb-20">
                        <p className="text-accent font-condensed font-bold uppercase tracking-widest text-sm mb-4">Trust & Quality</p>
                        <h2 className="section-heading">Why Choose STAT DATA?</h2>
                        <p className="section-subheading">
                            With over a decade of expertise, we deliver reliable data recovery solutions you can trust.
                        </p>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                        {trustIndicators.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.12 }}
                                className="group"
                            >
                                <div className="w-12 h-12 mb-6 border-2 border-[#333] flex items-center justify-center group-hover:border-accent transition-colors duration-300">
                                    <item.icon className="text-white text-xl group-hover:text-accent transition-colors duration-300" />
                                </div>
                                <h3 className="text-lg font-condensed font-bold uppercase tracking-widest text-white mb-3 group-hover:text-accent transition-colors duration-300">{item.title}</h3>
                                <p className="text-muted text-sm font-sans leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stark Contact CTA */}
            <section className="relative py-32 bg-[#E2001A]">
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <ScrollReveal>
                        <h2 className="text-5xl md:text-7xl font-condensed font-bold text-white mb-8 tracking-wide uppercase leading-none">
                            Lost Your Data?<br />We Can Help.
                        </h2>
                        <p className="text-white/90 font-sans text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                            Get a free assessment of your storage device today.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to="/contact" className="bg-black text-white px-8 py-4 font-condensed font-bold uppercase tracking-widest text-sm hover:bg-[#222] transition-colors border-2 border-transparent">
                                Contact Us Today
                            </Link>
                            <button
                                onClick={() => openWhatsApp(getGeneralEnquiryMessage())}
                                className="bg-transparent border-2 border-black text-black px-8 py-4 font-condensed font-bold uppercase tracking-widest text-sm hover:bg-black hover:text-white transition-colors flex justify-center items-center gap-2"
                            >
                                <FaWhatsapp className="text-lg" />
                                WhatsApp Us
                            </button>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default Home;
