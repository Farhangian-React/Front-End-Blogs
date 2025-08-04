"use client"

import { motion} from "motion/react";
import {Variants} from "motion/react";

function Loading2() {
    const dotVariants ={
        jump: {
            y: -30,
            transition: {
                duration: 0.8,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
            },
        },
    }

    return (
        <motion.div
            animate="jump"
            transition={{ staggerChildren: -0.2, staggerDirection: -1 }}
            className="container"
        >
            <motion.div className="dot" variants={dotVariants} />
            <motion.div className="dot" variants={dotVariants} />
            <motion.div className="dot" variants={dotVariants} />
            <motion.div className="dot" variants={dotVariants} />
            <StyleSheet />
        </motion.div>
    )
}


function StyleSheet() {
    return (
        <style>
            {`
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 5px;
            }

            .dot {
                width: 20px;

                height: 40px;
                border-radius: 20%;
                background-color: #ff0088;
                will-change: transform;
            }
            `}
        </style>
    )
}

export default Loading2
