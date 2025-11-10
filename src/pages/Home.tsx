import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Computer, Shield, DoorOpen, ArrowRight, CheckCircle, Users, Award, Clock } from 'lucide-react';

const Home = () => {
  const stats = [
    { icon: <Users className="h-8 w-8" />, value: '500+', label: 'Happy Customers' },
    { icon: <Award className="h-8 w-8" />, value: '5', label: 'Years Experience' },
    { icon: <Clock className="h-8 w-8" />, value: '24/7', label: 'Support Available' },
    { icon: <CheckCircle className="h-8 w-8" />, value: '98%', label: 'Success Rate' },
  ];

  const features = [
    'Professional Installation',
    'Quality Guarantee',
    'Affordable Pricing',
    'Expert Technicians',
    'Quick Response Time',
    '24/7 Customer Support'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-8"
            >
              Professional
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                Tech Services
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Expert computer repair, professional CCTV installation, and reliable automatic gate systems. 
              Your trusted partner for all technology solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/services"
                className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors flex items-center space-x-2 text-lg font-semibold"
              >
                <span>Explore Services</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/register"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors border-2 border-blue-600 text-lg font-semibold"
              >
                Get Started
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive technology solutions for your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Computer className="h-12 w-12 text-blue-600" />,
                title: 'Computer Services',
                description: 'Expert repair, maintenance, and upgrade services for all computer types.',
                gradient: 'from-blue-500 to-cyan-500'
              },
              {
                icon: <Shield className="h-12 w-12 text-purple-600" />,
                title: 'CCTV Installation',
                description: 'Professional security camera systems with monitoring and maintenance.',
                gradient: 'from-purple-500 to-pink-500'
              },
              {
                icon: <DoorOpen className="h-12 w-12 text-orange-600" />,
                title: 'Automatic Gates',
                description: 'Smart gate systems with remote control and security features.',
                gradient: 'from-orange-500 to-red-500'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-xl p-8 text-center group"
              >
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${service.gradient} bg-opacity-10 inline-block mb-6 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Why Choose
                <span className="text-blue-600"> TechPro Services?</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="mb-6 opacity-90">
                  Join hundreds of satisfied customers who trust us with their technology needs.
                </p>
                <Link
                  to="/services"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
                >
                  <span>View All Services</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;