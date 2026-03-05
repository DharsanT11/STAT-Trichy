import { useState, useEffect } from 'react';
import { HiOutlineInbox } from 'react-icons/hi';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import ScrollReveal from '../components/ScrollReveal';
import { getProducts } from '../utils/storage';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [activeCategory, setActiveCategory] = useState('All');

    useEffect(() => {
        setProducts(getProducts());
    }, []);

    const categories = ['All', ...new Set(products.map((p) => p.category))];
    const filtered = activeCategory === 'All' ? products : products.filter((p) => p.category === activeCategory);

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
                        Our Catalogue
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-condensed font-bold text-white mb-6 uppercase tracking-wide leading-none"
                    >
                        Hardware Shop
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-muted text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-sans"
                    >
                        Premium storage solutions for enterprise and personal use. Built for a lifetime.
                    </motion.p>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Industrial Category Filters */}
                    <ScrollReveal className="flex flex-wrap gap-4 justify-center mb-16">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2 font-condensed font-bold uppercase tracking-widest text-sm border-2 transition-colors duration-300 ${activeCategory === cat
                                        ? 'border-accent text-accent bg-transparent'
                                        : 'border-[#333] text-muted hover:border-white hover:text-white bg-transparent'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </ScrollReveal>

                    {/* Products Grid */}
                    {filtered.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filtered.map((product, index) => (
                                <ProductCard key={product.id} product={product} index={index} />
                            ))}
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-24"
                        >
                            <div className="w-16 h-16 mx-auto mb-6 border border-[#333] flex items-center justify-center">
                                <HiOutlineInbox className="text-3xl text-[#555]" />
                            </div>
                            <h3 className="text-2xl font-condensed font-bold uppercase tracking-widest text-white mb-2">No Products</h3>
                            <p className="text-muted font-sans">0 Items mapped in this category.</p>
                        </motion.div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default Products;
