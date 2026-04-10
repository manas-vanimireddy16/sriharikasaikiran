import { motion } from "framer-motion";
import React from "react";

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
};

interface AnimatedContainerProps {
    children: React.ReactNode;
    className?: string; // ✅ FIX
}

const AnimatedContainer: React.FC<AnimatedContainerProps> = ({ children, className }) => {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className={className} // ✅ APPLY
        >
            {children}
        </motion.div>
    );
};

export default AnimatedContainer;