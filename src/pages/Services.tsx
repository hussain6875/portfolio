import React from 'react';
import { motion } from 'framer-motion';
import { Computer, Shield, DoorOpen } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const services = [
    {
      id: 'computer-service',
      title: 'Computer Services',
      description: 'Comprehensive computer repair, maintenance, and upgrade services for both personal and business use.',
      features: [
        'Hardware Repair & Replacement',
        'Software Installation & Updates',
        'Virus Removal & Security',
        'Data Recovery Services',
        'Performance Optimization',
        'Network Setup & Troubleshooting'
      ],
      price: '$49',
      icon: <Computer className="h-8 w-8 text-blue-600" />,
      rating: 4.8,
      reviews: 127,
      gradient: 'bg-gradient-to-r from-blue-500 to-cyan-500'
    },
    {
      id: 'cctv-installation',
      title: 'CCTV Installation',
      description: 'Professional security camera systems with advanced monitoring capabilities and 24/7 support.',
      features: [
        'HD/4K Camera Installation',
        'Remote Monitoring Setup',
        'Mobile App Integration',
        'Night Vision Technology',
        'Cloud Storage Solutions',
        'Professional Maintenance'
      ],
      price: '$299',
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      rating: 4.9,
      reviews: 89,
      gradient: 'bg-gradient-to-r from-purple-500 to-pink-500'
    },
    {
      id: 'automatic-gate',
      title: 'Automatic Gate Systems',
      description: 'Smart gate automation with remote control, security features, and reliable operation.',
      features: [
        'Remote Control Access',
        'Smartphone Integration',
        'Security Sensors',
        'Backup Power Systems',
        'Intercom Integration',
        'Regular Maintenance'
      ],
      price: '$799',
      icon: <DoorOpen className="h-8 w-8 text-orange-600" />,
      rating: 4.7,
      reviews: 56,
      gradient: 'bg-gradient-to-r from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-gray-900 mb-6"
          >
            Our
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}Services
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Professional technology solutions tailored to your needs. From computer repair to security systems, 
            we've got you covered with expert service and reliable support.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            We also provide customized technology solutions for businesses and special requirements. 
            Contact us to discuss your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1234567890"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call Now: +1 (234) 567-890
            </a>
            <a
              href="mailto:info@techproservices.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;