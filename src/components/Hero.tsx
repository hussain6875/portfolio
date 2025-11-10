import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowDown } from "lucide-react";

const Hero = () => {
    const socialLinks = [
        { icon: <Github className="h-5 w-5" />, href: "https://github.com/hussain6875", label: "GitHub" },
        {
            icon: <Linkedin className="h-5 w-5" />,
            href: "https://www.linkedin.com/in/muhammad-hussain-m/",
            label: "LinkedIn",
        },
        { icon: <Mail className="h-5 w-5" />, href: "mailto:hussainmhn75@gmail.com", label: "Email" },
    ];

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <div className="mt-10 w-36 h-36 md:w-40 md:h-40 mx-auto mb-8 relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-lg opacity-30 animate-pulse"></div>
                        <img
                            src="/profile.jpg"
                            alt="Muhammed Hussain M"
                            className="relative w-full h-full rounded-full object-cover border-4 border-blue-500/30 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
                        />
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold mb-6"
                >
                    <span className="text-white">Muhammed</span>
                    <br />
                    <span className="text-gradient">Hussain M</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-gray-300 mb-8 font-mono"
                >
                    Full Stack Developer
                </motion.p>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
                >
                    Passionate MERN Stack Developer crafting innovative web solutions with modern technologies
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
                >
                    <div className="flex items-center space-x-4">
                        {socialLinks.map((link, index) => (
                            <motion.a
                                key={index}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="glass p-3 rounded-full hover:bg-blue-500/20 transition-colors group"
                                aria-label={link.label}
                            >
                                <span className="text-gray-300 group-hover:text-blue-400 transition-colors">
                                    {link.icon}
                                </span>
                            </motion.a>
                        ))}
                    </div>

                    <motion.a
                        href="/hussain_resume.pdf"
                        download="Muhammed_Hussain_Resume.pdf"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-medium flex items-center space-x-2 hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                    >
                        <Download className="h-4 w-4" />
                        <span>Download CV</span>
                    </motion.a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-gray-400"
                    >
                        <ArrowDown className="h-6 w-6" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
