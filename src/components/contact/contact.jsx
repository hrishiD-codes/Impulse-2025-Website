
import { motion } from 'framer-motion';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {

    return (
        <div className="min-h-screen bg-gradient-to-br from-cus-violet/20 via-background to-cus-orange/20 py-12 sm:py-16 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                {/* Page Header */}
                <motion.div
                    className="text-center mb-12 sm:mb-16"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="font-akira text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-cus-violet via-cus-pink to-cus-orange bg-clip-text text-transparent mb-4 sm:mb-6">
                        Get In Touch
                    </h1>
                    <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4">
                        Have questions about Impulse 2025? Want to collaborate or get involved? We'd love to hear from you!
                    </p>
                    <div className="w-20 sm:w-32 h-1 bg-gradient-to-r from-cus-violet to-cus-orange mx-auto mt-6 sm:mt-8 rounded-full" />
                </motion.div>



                {/* Contact Info */}
                <motion.div
                    className="mt-12 sm:mt-16 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                >
                    <h2 className="font-akira text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cus-violet to-cus-pink bg-clip-text text-transparent mb-8">
                        Connect With Us
                    </h2>

                    {/* Premium Social Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12">
                        {/* Instagram Card */}
                        <motion.div
                            className="group relative bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-[2px] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            <div className="bg-white rounded-2xl p-6 h-full flex flex-col items-center justify-center text-center">
                                <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <FaInstagram className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-bold text-gray-800 mb-2 text-lg">Instagram</h3>
                                <p className="text-gray-600 text-sm mb-4">Follow us for updates</p>
                                <a
                                    href="https://instagram.com/impulse_tbit"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-200"
                                >
                                    Follow Us
                                </a>
                            </div>
                        </motion.div>

                        {/* WhatsApp Card */}
                        <motion.div
                            className="group relative bg-gradient-to-br from-green-400 to-green-600 p-[2px] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.9 }}
                        >
                            <div className="bg-white rounded-2xl p-6 h-full flex flex-col items-center justify-center text-center">
                                <div className="bg-gradient-to-br from-green-400 to-green-600 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <FaWhatsapp className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-bold text-gray-800 mb-2 text-lg">WhatsApp</h3>
                                <p className="text-gray-600 text-sm mb-4">Quick support chat</p>
                                <a
                                    href="https://wa.me/919876543210"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gradient-to-r from-green-400 to-green-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-200"
                                >
                                    Chat Now
                                </a>
                            </div>
                        </motion.div>

                        {/* Email Card */}
                        <motion.div
                            className="group relative bg-gradient-to-br from-cus-violet to-cus-pink p-[2px] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.0 }}
                        >
                            <div className="bg-white rounded-2xl p-6 h-full flex flex-col items-center justify-center text-center">
                                <div className="bg-gradient-to-br from-cus-violet to-cus-pink p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <FaEnvelope className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="font-bold text-gray-800 mb-2 text-lg">Email</h3>
                                <p className="text-gray-600 text-sm mb-4">Official inquiries</p>
                                <a
                                    href="mailto:impulse@tbit.ac.in"
                                    className="bg-gradient-to-r from-cus-violet to-cus-pink text-white px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-200"
                                >
                                    Send Email
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Additional Contact Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        <motion.div
                            className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-lg rounded-xl p-6 shadow-xl border border-white/20"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 1.1 }}
                        >
                            <div className="flex items-center justify-center mb-4">
                                <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full">
                                    <FaPhone className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <h3 className="font-bold text-gray-800 mb-2 text-lg">Call Us</h3>
                            <p className="text-gray-600 mb-2">+91 98765 43210</p>
                            <p className="text-sm text-gray-500">Mon-Fri, 9AM-6PM IST</p>
                        </motion.div>

                        <motion.div
                            className="bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-lg rounded-xl p-6 shadow-xl border border-white/20"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                        >
                            <div className="flex items-center justify-center mb-4">
                                <div className="bg-gradient-to-r from-red-500 to-orange-500 p-3 rounded-full">
                                    <FaMapMarkerAlt className="w-6 h-6 text-white" />
                                </div>
                            </div>
                            <h3 className="font-bold text-gray-800 mb-2 text-lg">Visit Us</h3>
                            <p className="text-gray-600 mb-2">TBIT Campus</p>
                            <p className="text-sm text-gray-500">Kolkata, West Bengal</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}