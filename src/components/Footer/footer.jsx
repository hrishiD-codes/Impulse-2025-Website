import '../../index.css';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            {/* Main Footer Content */}
            <div className="mx-auto px-18 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Left Side - Festival Information */}
                    <div className="space-y-8">
                        {/* Festival Info */}
                        <div>
                            <h3 className="text-2xl font-bold mb-4 text-blue-400">Impulse 2025</h3>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                Join us for an extraordinary celebration of heritage, art, and culture. Experience traditional
                                performances, authentic cuisine, and connect with our vibrant community.
                            </p>

                            {/* Contact Information */}
                            <div className="space-y-3">
                                <div className="flex items-center text-gray-300">
                                    <svg className="w-5 h-5 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span>+1 (555) 123-4567</span>
                                </div>

                                <div className="flex items-center text-gray-300">
                                    <svg className="w-5 h-5 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span>info@culturalfest.org</span>
                                </div>

                                <div className="flex items-center text-gray-300">
                                    <svg className="w-5 h-5 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span>123 Cultural Center Dr, Arts District, City</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h4>
                                <ul className="space-y-2">
                                    <li><a href="#events" className="text-gray-300 hover:text-white transition-colors">Events</a></li>
                                    <li><a href="#schedule" className="text-gray-300 hover:text-white transition-colors">Schedule</a></li>
                                    <li><a href="#tickets" className="text-gray-300 hover:text-white transition-colors">Tickets</a></li>
                                    <li><a href="#volunteer" className="text-gray-300 hover:text-white transition-colors">Brochure</a></li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-lg font-semibold mb-4 text-blue-400">Support</h4>
                                <ul className="space-y-2">
                                    <li><a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
                                    <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4 text-blue-400">Follow Us</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                                    <FaInstagram className='w-6 h-6'/>
                                </a>
                                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                                    <FaFacebookSquare className='w-6 h-6'/>
                                </a>
                                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                                    <IoLogoYoutube className='w-6 h-6'/>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Auditorium Location Map */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-blue-400">Auditorium Location</h3>
                        <p className="text-gray-300 mb-6">
                            Find us at the Cultural Center Auditorium - the heart of our festival celebrations
                        </p>

                        {/* Map Container */}
                        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                            <div className="relative h-64 lg:h-100">
                                {/* Updated Google Map with actual location */}
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.158168935934!2d88.45874381502454!3d22.521197441605315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02757622d6b955%3A0xe78397c20d307bb9!2sBIT%20college%20Playground!5e0!3m2!1sen!2sus!4v1639584872345!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Cultural Center Auditorium Location"
                                    className="filter grayscale hover:grayscale-0 transition-all duration-300"
                                ></iframe>

                                {/* Overlay with location details */}
                                <div className="absolute bottom-4 left-4 right-4 bg-black/80 text-white p-4 rounded-lg">
                                    <h4 className="font-semibold text-lg mb-2">Cultural Center Auditorium</h4>
                                    <p className="text-sm text-gray-300 mb-2">BIT College Playground Area</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-gray-400">📍 Main Venue</span>
                                        <a
                                            href="https://www.google.com/maps/place/BIT+college+Playground/@22.5211974,88.4587293,818m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a02757622d6b955:0xe78397c20d307bb9!8m2!3d22.5211974!4d88.4613042!16s%2Fg%2F11h3n0b0gn?entry=ttu&g_ep=EgoyMDI1MDcwOC4wIKXMDSoASAFQAw%3D%3D"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                                        >
                                            Get Directions →
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-800">
                <div className="mx-auto px-18 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="text-gray-400 text-sm mb-4 md:mb-0">
                            © 2025 Impulse Cultural Fest | All rights reserved |
                            <a href="#privacy" className="hover:text-white ml-2">Privacy Policy</a> |
                            <a href="#terms" className="hover:text-white ml-2">Terms of Service</a>
                        </div>
                        <div className="text-gray-400 text-sm cursor-default">
                            Made with ❤️ by the Cultural Fest Dev Team
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer