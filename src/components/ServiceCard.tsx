import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  icon: React.ReactNode;
  rating: number;
  reviews: number;
  gradient: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  description,
  features,
  price,
  icon,
  rating,
  reviews,
  gradient
}) => {
  const { user } = useAuth();

  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden relative group"
    >
      <div className={`h-2 ${gradient}`}></div>
      
      <div className="p-8">
        <div className="flex items-center justify-between mb-6">
          <div className={`p-3 rounded-xl ${gradient} bg-opacity-10`}>
            {icon}
          </div>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">{rating}</span>
            <span className="text-sm text-gray-500">({reviews})</span>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>

        <div className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-700">{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-3xl font-bold text-gray-900">{price}</span>
            <span className="text-gray-500 ml-1">starting</span>
          </div>
          
          {user ? (
            <Link
              to={`/booking/${id}`}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors flex items-center space-x-2 group"
            >
              <span>Book Now</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : (
            <Link
              to="/login"
              className="bg-gray-600 text-white px-6 py-3 rounded-xl hover:bg-gray-700 transition-colors flex items-center space-x-2"
            >
              <span>Login to Book</span>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;