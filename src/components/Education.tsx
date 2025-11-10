import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';

const Education = () => {
  const education = {
    degree: 'Bachelor of Arts',
    field: 'Arabic Language and Literature',
    university: 'University of Calicut',
    duration: '2019 - 2022',
    location: 'Kerala, India',
    description: 'Completed undergraduate studies with a focus on Arabic language, literature, and cultural studies. This diverse educational background has enhanced my analytical thinking and communication skills.',
    highlights: [
      'Strong analytical and critical thinking skills',
      'Excellent written and verbal communication',
      'Cultural awareness and linguistic proficiency',
      'Research and documentation abilities'
    ]
  };

  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My academic background and the foundation that shaped my learning journey
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
            <div className="absolute -left-4 top-8 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
              <GraduationCap className="h-4 w-4 text-white" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-white">{education.degree}</h3>
                  <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">
                    Completed
                  </span>
                </div>

                <h4 className="text-xl text-gradient font-semibold mb-6">{education.field}</h4>

                <div className="flex flex-wrap items-center gap-6 mb-6 text-gray-400">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="h-4 w-4" />
                    <span className="font-semibold text-purple-400">{education.university}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{education.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>{education.location}</span>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {education.description}
                </p>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Key Skills Developed:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {education.highlights.map((highlight, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-3"
                      >
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span className="text-gray-300">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="glass p-6 rounded-xl">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <GraduationCap className="h-10 w-10 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">Academic Excellence</h4>
                    <p className="text-gray-400 text-sm">
Strengthened analytical and communication skills through an in-depth study of language and literature.                    </p>
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

export default Education;