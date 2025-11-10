import React from 'react';
import { motion } from 'framer-motion';
import { Code, Coffee, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code'
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: 'Problem Solver',
      description: 'Creative solutions to complex challenges'
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: 'Goal Oriented',
      description: 'Focused on delivering results'
    },
    {
      icon: <Coffee className="h-6 w-6" />,
      title: 'Continuous Learning',
      description: 'Always exploring new technologies'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-gradient">Hello, I'm Muhammed Hussain M</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a passionate Full Stack Developer with hands-on experience in the MERN stack and PostgreSQL. 
                Currently gaining valuable industry experience through my internship at Upcode Software Labs, 
                where I've been working on real-world projects and honing my development skills.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                My journey in web development started with a curiosity about how things work behind the scenes. 
                This curiosity has evolved into a passion for creating efficient, scalable, and user-friendly 
                web applications that solve real-world problems.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I believe in writing clean, maintainable code and staying updated with the latest technologies 
                and best practices in the ever-evolving world of web development.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="glass p-6 rounded-xl text-center group hover:bg-blue-500/10 transition-all"
              >
                <div className="text-blue-400 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;