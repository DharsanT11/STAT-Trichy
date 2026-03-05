import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { openWhatsApp, getProductEnquiryMessage } from '../utils/whatsapp';

const ProductCard = ({ product, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className="group flex flex-col bg-black border border-[#222] hover:border-accent transition-colors duration-400"
        >
            {/* Image Container - Square Aspect Ratio */}
            <div className="relative aspect-square overflow-hidden bg-[#111]">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />

                {/* Capacity Badge */}
                <div className="absolute top-4 right-4 bg-black/90 border border-[#333] px-3 py-1">
                    <span className="text-white text-xs font-condensed font-bold tracking-widest uppercase">{product.capacity}</span>
                </div>
            </div>

            {/* Content Area */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                    <p className="text-accent text-xs font-condensed font-bold tracking-widest uppercase mb-2">
                        {product.category || 'Storage'}
                    </p>
                    <Link to={`/products/${product.id}`}>
                        <h3 className="text-xl font-condensed font-bold text-white uppercase tracking-wide group-hover:text-accent transition-colors duration-300">
                            {product.name}
                        </h3>
                    </Link>
                </div>

                <p className="text-muted text-sm line-clamp-2 md:line-clamp-3 mb-6 flex-grow font-sans">
                    {product.description}
                </p>

                <div className="flex flex-col gap-3 mt-auto">
                    <Link
                        to={`/products/${product.id}`}
                        className="btn-outline w-full text-center py-3 text-xs"
                    >
                        View Details
                    </Link>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            openWhatsApp(getProductEnquiryMessage(product.name));
                        }}
                        className="btn-primary flex items-center justify-center gap-2 py-3 rounded-none text-xs"
                    >
                        <FaWhatsapp className="text-sm" />
                        <span>Enquire</span>
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductCard;
