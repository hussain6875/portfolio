import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Viya Innovations (Calicut)',
      position: 'Full Stack Developer (Part-time)',
      duration: '2025 – Present',
      location: 'On-site/Hybrid',
      description: 'Building high-performance web solutions and secure backend architectures for diverse client needs.',
      achievements: [
        'Developed and maintained responsive web applications using React, Next.js, and Tailwind CSS.',
        'Built secure RESTful APIs using Node.js, Express, JWT authentication, and Multer file handling.',
        'Integrated MongoDB and PostgreSQL databases for scalable data management.',
        'Implemented role-based access control (Admin/Customer/Provider) for secure user workflows.',
        'Optimized application performance, reducing API response time and improving page load speed.',
        'Collaborated on live client projects, contributing to production-ready feature deployments.'
      ],
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'Express', 'JWT', 'MongoDB', 'PostgreSQL']
    },
    {
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
        'Gained experience in version control with Git, GitLab and GitHub'
      ],
      technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'JavaScript', 'TypeScript']
    }
  ];

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

        <div className="max-w-4xl mx-auto space-y-12">
          {experiences.map((exp, expIndex) => (
            <motion.div
              key={expIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: expIndex * 0.2 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl relative"
            >
              {/* Timeline dot and line connecting them */}
              <div className="absolute -left-4 top-8 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                <Briefcase className="h-4 w-4 text-white" />
              </div>
              
              {expIndex !== experiences.length - 1 && (
                <div className="absolute -left-[3px] top-16 w-0.5 h-full bg-gray-800 hidden md:block"></div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <h3 className="text-2xl font-bold text-white">{exp.position}</h3>
                    {exp.duration.includes('Present') && (
                      <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                        Current
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-6 mb-6 text-gray-400">
                    <div className="flex items-center space-x-2">
                      <Briefcase className="h-4 w-4 text-blue-400" />
                      <span className="font-semibold text-gradient">{exp.company}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6 italic">
                    {exp.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Key Achievements:</h4>
                    <div className="space-y-3">
                      {exp.achievements.map((achievement, index) => (
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
                  <div className="bg-slate-800/40 p-6 rounded-xl border border-white/5">
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-blue-500/10 text-blue-300 border border-blue-500/20 px-3 py-1 rounded-md text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;