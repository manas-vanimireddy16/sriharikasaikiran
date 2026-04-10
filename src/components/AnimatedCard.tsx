import { motion, Variants } from "framer-motion";
import React from "react";

const cardVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 60,
        scale: 0.95,
        filter: "blur(6px)",
    },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1] as const, // ✅ FIXED
        },
    },
};

interface AnimatedCardProps {
    children: React.ReactNode;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ children }) => {
    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"          // ✅ ensures animation starts
            whileInView="show"        // ✅ triggers on scroll
            viewport={{ once: true, margin: "-100px" }} // ✅ smoother trigger
            whileHover={{
                scale: 1.03,
                y: -4,
            }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
            }}
            className="wedding-card"
        >
            {children}
        </motion.div>
    );
};

export default AnimatedCard;