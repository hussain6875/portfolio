import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Phone, User, CheckCircle, AlertCircle, XCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface Booking {
  id: string;
  service: string;
  date: string;
  time: string;
  address: string;
  status: 'pending' | 'confirmed' | 'in-progress' | 'completed' | 'cancelled';
  urgency: 'low' | 'medium' | 'high';
  createdAt: string;
  progress: number;
}

const Dashboard = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch user bookings
    const fetchBookings = async () => {
      setTimeout(() => {
        setBookings([
          {
            id: '1',
            service: 'Computer Services',
            date: '2024-01-15',
            time: '10:00',
            address: '123 Main St, City, State 12345',
            status: 'confirmed',
            urgency: 'medium',
            createdAt: '2024-01-10',
            progress: 25
          },
          {
            id: '2',
            service: 'CCTV Installation',
            date: '2024-01-20',
            time: '14:00',
            address: '456 Oak Ave, City, State 12345',
            status: 'in-progress',
            urgency: 'high',
            createdAt: '2024-01-08',
            progress: 60
          },
          {
            id: '3',
            service: 'Automatic Gate Systems',
            date: '2024-01-05',
            time: '09:00',
            address: '789 Pine St, City, State 12345',
            status: 'completed',
            urgency: 'low',
            createdAt: '2024-01-01',
            progress: 100
          }
        ]);
        setLoading(false);
      }, 1000);
    };

    fetchBookings();
  }, []);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'confirmed':
        return <CheckCircle className="h-5 w-5 text-blue-500" />;
      case 'in-progress':
        return <AlertCircle className="h-5 w-5 text-orange-500" />;
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'cancelled':
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return <Clock className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'confirmed':
        return 'bg-blue-100 text-blue-800';
      case 'in-progress':
        return 'bg-orange-100 text-orange-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'low':
        return 'bg-green-100 text-green-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'high':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-xl text-gray-600">
            Manage your service bookings and track progress
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* User Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-6 h-fit"
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-10 w-10 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{user?.name}</h2>
              <p className="text-gray-600 mb-4">{user?.email}</p>
              <div className="flex items-center justify-center space-x-2 text-gray-500">
                <Phone className="h-4 w-4" />
                <span>{user?.phone}</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">{bookings.length}</div>
                  <div className="text-sm text-gray-500">Total Bookings</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">
                    {bookings.filter(b => b.status === 'completed').length}
                  </div>
                  <div className="text-sm text-gray-500">Completed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-600">
                    {bookings.filter(b => b.status === 'in-progress').length}
                  </div>
                  <div className="text-sm text-gray-500">In Progress</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bookings List */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Your Bookings</h2>
            
            {bookings.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
                <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No bookings yet</h3>
                <p className="text-gray-600">Start by booking a service from our services page</p>
              </div>
            ) : (
              <div className="space-y-4">
                {bookings.map((booking, index) => (
                  <motion.div
                    key={booking.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-xl p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{booking.service}</h3>
                        <div className="flex items-center space-x-4 text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{booking.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{booking.time}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getUrgencyColor(booking.urgency)}`}>
                          {booking.urgency}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(booking.status)}`}>
                          {booking.status}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start space-x-2 mb-4">
                      <MapPin className="h-4 w-4 text-gray-400 mt-1" />
                      <span className="text-gray-600 text-sm">{booking.address}</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">Progress</span>
                        <span className="text-sm text-gray-500">{booking.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${booking.progress}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                          className={`h-2 rounded-full ${
                            booking.progress === 100 ? 'bg-green-500' : 'bg-blue-500'
                          }`}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(booking.status)}
                        <span className="text-sm text-gray-600 capitalize">{booking.status.replace('-', ' ')}</span>
                      </div>
                      <span className="text-sm text-gray-500">
                        Booked on {new Date(booking.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;