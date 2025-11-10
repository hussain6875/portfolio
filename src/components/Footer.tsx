import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between"
        >
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Code2 className="h-6 w-6 text-blue-400" />
            <span className="text-lg font-bold text-gradient">Muhammed Hussain M</span>
          </div>

          <div className="flex items-center space-x-2 text-gray-400">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-400 animate-pulse" />
            <span>using React & TypeScript</span>
          </div>

          <div className="text-gray-400 text-sm mt-4 md:mt-0">
            © 2024 All rights reserved
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;