import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

const Experience = () => {
  const experience = {
    company: 'Upcode Software Labs',
    position: 'Full Stack Developer Intern',
    duration: '2024 - 2025',
    location: 'Remote',
    description: 'Gaining hands-on experience in full-stack web development with modern technologies and real-world projects.',
    achievements: [
      'Developed and maintained web applications using MERN stack',
      'Collaborated with senior developers on client projects',
      'Implemented responsive designs and user-friendly interfaces',
      'Worked with PostgreSQL and MongoDB databases',
      'Participated in code reviews and agile development processes',
      'Gained experience in version control with Git and GitHub'
    ],
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'JavaScript', 'TypeScript']
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and the valuable experience I've gained
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-2xl relative"
          >
            {/* Timeline dot */}
            <div className="absolute -left-4 top-8 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
              <Briefcase className="h-4 w-4 text-white" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-white">{experience.position}</h3>
                  <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                    Current
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-6 mb-6 text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Briefcase className="h-4 w-4" />
                    <span className="font-semibold text-gradient">{experience.company}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>{experience.location}</span>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {experience.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Key Achievements:</h4>
                  <div className="space-y-3">
                    {experience.achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="glass p-6 rounded-xl">
                  <h4 className="text-lg font-semibold text-white mb-4">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="bg-slate-700/50 text-gray-300 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;