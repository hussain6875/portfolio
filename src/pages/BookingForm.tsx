import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Calendar, Clock, MapPin, MessageSquare, CheckCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import toast from 'react-hot-toast';

interface BookingFormData {
  service: string;
  date: string;
  time: string;
  address: string;
  message: string;
  urgency: 'low' | 'medium' | 'high';
}

const BookingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm<BookingFormData>();

  const serviceMap: { [key: string]: string } = {
    'computer-service': 'Computer Services',
    'cctv-installation': 'CCTV Installation',
    'automatic-gate': 'Automatic Gate Systems'
  };

  const serviceName = serviceMap[serviceId || ''] || 'Service';

  const generateWhatsAppMessage = (data: BookingFormData) => {
    const message = `
🔧 *New Service Booking*

👤 *Customer:* ${user?.name}
📧 *Email:* ${user?.email}
📱 *Phone:* ${user?.phone}

🛠️ *Service:* ${serviceName}
📅 *Date:* ${data.date}
⏰ *Time:* ${data.time}
📍 *Address:* ${data.address}
🚨 *Urgency:* ${data.urgency.toUpperCase()}

💬 *Additional Notes:*
${data.message || 'No additional notes'}

Please confirm this booking. Thank you!
    `.trim();

    return encodeURIComponent(message);
  };

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const whatsappMessage = generateWhatsAppMessage(data);
      const whatsappNumber = '1234567890'; // Replace with actual business WhatsApp number
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
      
      toast.success('Booking submitted! Redirecting to WhatsApp...');
      
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        navigate('/dashboard');
      }, 2000);
      
    } catch (error) {
      toast.error('Failed to submit booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Book {serviceName}
          </h1>
          <p className="text-xl text-gray-600">
            Fill out the form below and we'll contact you via WhatsApp to confirm your booking
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Calendar className="inline h-4 w-4 mr-2" />
                  Preferred Date
                </label>
                <input
                  {...register('date', { required: 'Date is required' })}
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {errors.date && (
                  <p className="mt-1 text-sm text-red-600">{errors.date.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Clock className="inline h-4 w-4 mr-2" />
                  Preferred Time
                </label>
                <select
                  {...register('time', { required: 'Time is required' })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select time</option>
                  <option value="09:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="13:00">1:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                  <option value="17:00">5:00 PM</option>
                </select>
                {errors.time && (
                  <p className="mt-1 text-sm text-red-600">{errors.time.message}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="inline h-4 w-4 mr-2" />
                Service Address
              </label>
              <textarea
                {...register('address', { required: 'Address is required' })}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter complete address where service is needed"
              />
              {errors.address && (
                <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Urgency Level
              </label>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: 'low', label: 'Low', color: 'bg-green-100 text-green-800 border-green-300' },
                  { value: 'medium', label: 'Medium', color: 'bg-yellow-100 text-yellow-800 border-yellow-300' },
                  { value: 'high', label: 'High', color: 'bg-red-100 text-red-800 border-red-300' }
                ].map((option) => (
                  <label key={option.value} className={`flex items-center justify-center p-3 border-2 rounded-lg cursor-pointer hover:bg-opacity-80 ${option.color}`}>
                    <input
                      {...register('urgency', { required: 'Urgency level is required' })}
                      type="radio"
                      value={option.value}
                      className="sr-only"
                    />
                    <span className="font-medium">{option.label}</span>
                  </label>
                ))}
              </div>
              {errors.urgency && (
                <p className="mt-1 text-sm text-red-600">{errors.urgency.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MessageSquare className="inline h-4 w-4 mr-2" />
                Additional Notes (Optional)
              </label>
              <textarea
                {...register('message')}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Any specific requirements or additional information..."
              />
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">What happens next?</h3>
                  <ul className="text-blue-800 space-y-1 text-sm">
                    <li>• Your booking will be sent via WhatsApp to our team</li>
                    <li>• We'll confirm availability and provide a quote</li>
                    <li>• Our technician will contact you before the appointment</li>
                    <li>• We'll arrive on time and complete your service</li>
                  </ul>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed font-semibold text-lg"
            >
              {isSubmitting ? 'Submitting Booking...' : 'Book Service via WhatsApp'}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default BookingForm;