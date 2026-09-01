import { motion } from 'framer-motion'

export const FadeUp = ({ 
    children, 
    delay = 0, 
    duration = 0.8, 
    className = "", 
    yOffset = 30,
    as: Component = motion.div
}) => {
    return (
        <Component
            initial={{ opacity: 0, y: yOffset }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: duration,
                delay: delay,
                ease: [0.16, 1, 0.3, 1] // Apple's signature smooth ease-out curve
            }}
            className={className}
        >
            {children}
        </Component>
    )
}
