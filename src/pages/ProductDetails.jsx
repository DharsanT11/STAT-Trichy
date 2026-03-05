import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import { FiArrowLeft, FiCheck, FiShield, FiTruck, FiHeadphones } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { getProductById } from '../utils/storage';
import { openWhatsApp, getProductEnquiryMessage } from '../utils/whatsapp';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = getProductById(id);

    if (!product) {
        return (
            <div className="pt-20 min-h-screen bg-black flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                >
                    <h2 className="text-3xl font-condensed font-bold uppercase tracking-widest text-white mb-4">Not Found</h2>
                    <p className="text-muted mb-8 font-sans">The hardware you're looking for doesn't exist.</p>
                    <Link to="/products" className="btn-outline">
                        Back to Shop
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="pt-20 bg-black min-h-screen">
            {/* Breadcrumb Bar */}
            <div className="bg-[#0a0a0a] border-b border-[#222]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="inline-flex items-center gap-2 text-muted hover:text-white transition-colors duration-300 font-condensed font-bold uppercase tracking-widest text-xs group"
                    >
                        <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back
                    </button>
                </div>
            </div>

            {/* Product Detail */}
            <section className="py-16 lg:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 item-start">
                        {/* Image Column */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            className="relative"
                        >
                            <div className="bg-[#111] border border-[#222] overflow-hidden aspect-[4/3] lg:aspect-[3/4] flex items-center justify-center">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover filter grayscale contrast-125 hover:grayscale-0 transition-all duration-700 hover:scale-105"
                                />
                            </div>
                        </motion.div>

                        {/* Info Column */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.15 }}
                            className="flex flex-col"
                        >
                            <div className="border-b border-[#222] pb-8 mb-8">
                                <p className="text-accent font-condensed font-bold uppercase tracking-widest text-sm mb-3">
                                    {product.category || 'Storage'} &bull; {product.capacity}
                                </p>
                                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-condensed font-bold text-white mb-6 uppercase tracking-wide leading-none">{product.name}</h1>
                                <p className="text-muted text-lg leading-relaxed font-sans">{product.description}</p>
                            </div>

                            {/* Tech Specs */}
                            {product.features && product.features.length > 0 && (
                                <div className="mb-12">
                                    <h3 className="text-sm font-condensed font-bold uppercase tracking-widest text-white mb-6">Technical Specifications</h3>
                                    <ul className="space-y-4">
                                        {product.features.map((feature, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: -15 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}
                                                className="flex items-start gap-4 pb-4 border-b border-[#1a1a1a]"
                                            >
                                                <div className="w-5 h-5 flex items-center justify-center border border-accent shrink-0 mt-0.5">
                                                    <FiCheck className="text-accent text-xs" />
                                                </div>
                                                <li className="text-muted text-sm font-sans leading-relaxed">{feature}</li>
                                            </motion.div>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* WhatsApp Enquiry CTA */}
                            <motion.button
                                onClick={() => openWhatsApp(getProductEnquiryMessage(product.name))}
                                className="btn-primary flex items-center justify-center gap-3 py-5 text-sm w-full mb-10"
                            >
                                <FaWhatsapp className="text-lg" />
                                Enquire Now
                            </motion.button>

                            {/* Shipping/Trust Info */}
                            <div className="grid grid-cols-3 gap-4 border-t border-[#222] pt-8">
                                {[
                                    { icon: FiShield, label: 'ISO Certified' },
                                    { icon: FiTruck, label: 'Insured Transits' },
                                    { icon: FiHeadphones, label: 'Pro Support' },
                                ].map((badge, i) => (
                                    <motion.div
                                        key={badge.label}
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                                        className="text-center group"
                                    >
                                        <div className="w-10 h-10 mx-auto mb-3 border border-[#333] flex items-center justify-center group-hover:border-accent transition-colors duration-300">
                                            <badge.icon className="text-white text-lg group-hover:text-accent transition-colors duration-300" />
                                        </div>
                                        <p className="text-muted text-[10px] font-condensed font-bold uppercase tracking-widest">{badge.label}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductDetails;
