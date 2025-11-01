import React from 'react';
import { motion } from 'motion/react';
import { LuArrowDown, LuGithub, LuFacebook, LuLinkedin } from 'react-icons/lu';
import { heroData } from '../data/heroData';

const Hero = () => {
    return (
        <div className="relative min-h-screen bg-zinc-900 text-white">
            <div className="container relative mx-auto px-4 pt-12 pb-24">
                <div className="flex flex-col items-center justify-center text-center z-10">
                    <motion.div
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl">
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Hero;