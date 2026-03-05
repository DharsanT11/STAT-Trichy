import { motion } from 'framer-motion';

const ScrollReveal = ({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.7,
    className = '',
    once = true
}) => {
    const directions = {
        up: { y: 60, x: 0 },
        down: { y: -60, x: 0 },
        left: { y: 0, x: 60 },
        right: { y: 0, x: -60 },
        none: { y: 0, x: 0 },
    };

    const { x, y } = directions[direction] || directions.up;

    return (
        <motion.div
            initial={{ opacity: 0, x, y }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once, margin: '-80px' }}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default ScrollReveal;
