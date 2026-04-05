import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Membuat komponen Link yang mendukung animasi Framer Motion
const MotionLink = motion(Link);

const Landing = () => {
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-[calc(100vh-73px)] flex flex-col items-center justify-center px-4 relative overflow-hidden">
            {/* Ornamen Background Tradisional (Simulasi) */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

            <motion.div
                className="text-center z-10 max-w-2xl"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={itemVariants} className="mb-8 inline-block p-4 rounded-full bg-emerald-50 dark:bg-emerald-900/20">
                    <span className="text-6xl">📖</span>
                </motion.div>

                <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-6 leading-tight">
                    Sudahkah Anda Membaca <br />
                    <span className="text-emerald-600 dark:text-emerald-400">Al-Qur'an</span> Hari Ini?
                </motion.h1>

                <motion.p variants={itemVariants} className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
                    "Sebaik-baik kalian adalah orang yang belajar Al-Qur'an dan mengajarkannya." <br />
                    <span className="text-sm font-medium italic mt-2 block">(HR. Bukhari)</span>
                </motion.p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <MotionLink variants={itemVariants}
                        to="/surah"
                        className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl shadow-lg shadow-emerald-200 dark:shadow-none transition-all hover:scale-105"
                    >
                        Mulai Membaca
                    </MotionLink>
                    <MotionLink variants={itemVariants}
                        to="/bookmarks"
                        className="px-8 py-4 bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 font-bold rounded-2xl border border-emerald-100 dark:border-slate-700 hover:bg-emerald-50 dark:hover:bg-slate-700 transition-all text-center"
                    >
                        Lihat Bookmark
                    </MotionLink>
                </div>
            </motion.div>
        </div>
    );
};

export default Landing;