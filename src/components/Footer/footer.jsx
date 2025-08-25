import '../../index.css';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white select-none">
            <div className="mx-auto px-6 sm:px-18 py-6 sm:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div>
                            <h3 className="font-akira text-2xl font-bold mb-4 text-blue-400">Impulse 2025</h3>
                            <p className="font-akira text-gray-300 font-normal leading-relaxed mb-6">
                                Join us for an extraordinary celebration of heritage, art, and culture. Experience traditional performances, authentic cuisine, and connect with our vibrant community of Impulse.
                            </p>
                            <div className="space-y-3">
                                <div className="flex items-center text-gray-300">
                                    <MdOutlineEmail className="w-6 h-6 mr-3 text-blue-400" />
                                    <span className="font-technor font-normal">impulse@bitcollege.in</span>
                                </div>
                                <div className="flex items-center text-gray-300">
                                    <FaLocationDot className="w-6 h-6 mr-3 text-blue-400" />
                                    <span className="font-technor font-normal">Mohit Moitra Mancha,Tala Paikpara</span>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-lg font-technor font-semibold mb-4 text-blue-400">Quick Links</h4>
                                <ul className="space-y-2">
                                    <li><a href="schedule" className="text-gray-300 font-technor font-normal hover:text-white transition-colors">Schedule</a></li>
                                    <li><a href="volunteer" className="text-gray-300 font-technor font-normal hover:text-white transition-colors">Brochure</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-lg font-technor font-semibold mb-4 text-blue-400">Support</h4>
                                <ul className="space-y-2">
                                    <li><a href="/contact" className="text-gray-300 font-technor font-normal hover:text-white transition-colors">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-lg font-technor font-semibold mb-4 text-blue-400">Follow Us</h4>
                            <div className="flex space-x-4">
                                <a href="https://www.instagram.com/tbit_impulse?igsh=MWR2OTljcGwyYnk3cA==" className="text-gray-300 hover:text-[#d62976] transition-colors" target="_blank">
                                    <FaInstagram className='w-6 h-6' />
                                </a>
                                <a href="https://www.facebook.com/share/1Y8XqRSg9P/" className="text-gray-300 hover:text-[#1877F2] transition-colors" target="_blank">
                                    <FaFacebookSquare className='w-6 h-6' />
                                </a>
                                <a href="https://youtube.com/@bengalinstituteoftechnolog7911" className="text-gray-300 hover:text-[#FF0000] transition-colors" target="_blank">
                                    <IoLogoYoutube className='w-6 h-6' />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-technor font-bold mb-4 text-blue-400">Auditorium Location</h3>
                        <p className="text-gray-300 font-akira font-normal mb-6">
                            Find us at the Mohit Moitra Mancha Auditorium
                        </p>

                        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                            <div className="relative h-64 lg:h-100">                        
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.4!2d88.383035!3d22.6122433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d503e06cb7b%3A0xf01fd00a505fde18!2sMohit%20Moitra%20Mancha%2C%20Tala!5e0!3m2!1sen!2sus!4v1639584872345!5m2!1sen!2sus"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Mohit Moitra Mancha Location"
                                    className="filter grayscale hover:grayscale-0 transition-all duration-300"
                                ></iframe>
                                <div className="absolute bottom-4 left-4 right-4 bg-black/80 text-white p-4 rounded-lg">
                                    <h4 className="font-technor font-semibold text-lg mb-2">Mohit Moitra Mancha</h4>
                                    <p className="text-sm font-akira font-normal text-gray-300 mb-2">Tala, Kolkata</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-technor font-normal text-gray-400">📍 Main Venue
                                        </span>
                                        <a
                                            href="https://www.google.com/maps/place/Mohit+Moitra+Mancha,+Tala/@22.6122433,88.3804601,17z/data=!4m14!1m7!3m6!1s0x39f89d503e06cb7b:0xf01fd00a505fde18!2sMohit+Moitra+Mancha,+Tala!8m2!3d22.6122433!4d88.383035!16s%2Fg%2F11gsbc4wnz!3m5!1s0x39f89d503e06cb7b:0xf01fd00a505fde18!8m2!3d22.6122433!4d88.383035!16s%2Fg%2F11gsbc4wnz?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-400 font-technor font-medium hover:text-blue-300 text-sm">
                                            Get Directions →
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-700 select-none">
                <div className="mx-auto px-6 sm:px-18 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex text-white font-technor font-normal text-sm mb-4 md:mb-0">
                            © 2025 Impulse Cultural Fest | All Rights Reserved
                        </div>
                        <div className="text-white font-technor font-normal text-sm cursor-default">
                            Made with ❤️ by the Cultural Fest Dev Team
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer