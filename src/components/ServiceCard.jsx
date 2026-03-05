import { motion } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title, description, delay = 0 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: delay / 1000 }}
            className="card p-8 group flex flex-col items-start rounded-2xl"
        >
            <div className="w-14 h-14 bg-[#111] border border-[#333] mb-6 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                <Icon className="text-white text-2xl" />
            </div>

            <h3 className="text-xl font-condensed font-bold uppercase tracking-widest text-white mb-4 group-hover:text-accent transition-colors duration-300">
                {title}
            </h3>

            <p className="text-muted text-sm leading-relaxed font-sans">
                {description}
            </p>

            <div className="mt-8 flex items-center gap-2 text-accent text-xs font-condensed font-bold uppercase tracking-widest opacity-0 transform -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <span>Explore</span>
                <span className="text-lg leading-none">&rarr;</span>
            </div>
        </motion.div>
    );
};

export default ServiceCard;
