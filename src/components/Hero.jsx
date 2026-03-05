import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    // Parallax effect for the background
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1000], [0, 200]);

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
            {/* Dark, brooding background image layer */}
            <motion.div
                style={{ y: y1 }}
                className="absolute inset-0 z-0 opacity-40"
            >
                <img
                    src="https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&q=80&w=2000"
                    alt="Data Recovery Hardware"
                    className="w-full h-full object-cover filter grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
                <div className="absolute inset-0 bg-black/40"></div>
            </motion.div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-20">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <p className="font-condensed text-accent uppercase tracking-mega-wide font-bold text-sm md:text-base mb-6">
                            Professional Data Rescue
                        </p>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-condensed font-bold text-white uppercase leading-[0.9] tracking-tight mb-8">
                            We Recover <br />
                            <span className="text-muted">What Matters.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-400 font-sans max-w-2xl leading-relaxed mb-12">
                            Industry-leading expertise in mechanical, logical, and solid-state data recovery. When hardware fails, our ISO-certified engineers deliver results.
                        </p>

                        <div className="flex flex-wrap gap-6">
                            <Link to="/services" className="btn-primary">
                                Our Services
                            </Link>
                            <Link to="/contact" className="btn-outline">
                                Emergency Contact
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] font-condensed uppercase tracking-widest text-muted">Scroll</span>
                <div className="w-[1px] h-12 bg-[#333] relative overflow-hidden">
                    <motion.div
                        animate={{ y: [0, 48, 48] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                        className="absolute top-0 left-0 w-full h-1/2 bg-accent"
                    />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
