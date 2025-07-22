
import '../../index.css';
import { useState } from 'react';
import { IoIosMenu, IoMdHome } from "react-icons/io";
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Navbar() {
    const [isSidenavOpen, setIsSidenavOpen] = useState(false);

    const openNav = () => {
        setIsSidenavOpen(true);
    };

    const closeNav = () => {
        setIsSidenavOpen(false);
    };

    return (
        <nav>
            {/* Sidenav */}
            <div className={`fixed top-0 left-0 h-full bg-black z-50 overflow-x-hidden transition-all duration-500 pt-16 text-center ${
                isSidenavOpen ? 'w-full' : 'w-0'
            }`}>
                <button 
                    className="h-8 w-8 border border-white rounded-full flex justify-center items-center hover:bg-white hover:text-black text-white transition-colors cursor-pointer absolute top-6 right-6"
                    onClick={closeNav}
                    aria-label="Close navigation"
                >
                    <IoMdHome className="h-5 w-5" />
                </button>

                {/* Navigation links */}
                <div className="flex flex-col items-center justify-center gap-6 mt-8">
                    <a href="#about" className="block text-2xl text-gray-400 hover:text-white transition-colors duration-300 no-underline">
                        About Impulse
                    </a>
                    <a href="#events" className="block text-2xl text-gray-400 hover:text-white transition-colors duration-300 no-underline">
                        Events
                    </a>
                    <a href="#organizers" className="block text-2xl text-gray-400 hover:text-white transition-colors duration-300 no-underline">
                        Organizers
                    </a>
                    <a href="#sponsors" className="block text-2xl text-gray-400 hover:text-white transition-colors duration-300 no-underline">
                        Sponsors
                    </a>
                    <a href="#contact" className="block text-2xl text-gray-400 hover:text-white transition-colors duration-300 no-underline">
                        Contact us
                    </a>
                </div>
            </div>

            {/* Top right icons */}
            <div className="absolute top-6 right-6 z-40">
                <div className="flex gap-3">
                    <a 
                        href="#facebook" 
                        className="h-8 w-8 border border-black rounded-full flex justify-center items-center hover:bg-black hover:text-white transition-colors cursor-pointer"
                        aria-label="Facebook"
                    >
                        <FaFacebookF className="w-4 h-4" />
                    </a>
                    <a 
                        href="#instagram" 
                        className="h-8 w-8 border border-black rounded-full flex justify-center items-center hover:bg-black hover:text-white transition-colors cursor-pointer"
                        aria-label="Instagram"
                    >
                        <FaInstagram className="w-4 h-4" />
                    </a>
                    <a 
                        href="#youtube" 
                        className="h-8 w-8 border border-black rounded-full flex justify-center items-center hover:bg-black hover:text-white transition-colors cursor-pointer"
                        aria-label="YouTube"
                    >
                        <FaYoutube className="w-4 h-4" />
                    </a>
                    <button 
                        className="h-8 w-8 border border-black rounded-full flex justify-center items-center hover:bg-black hover:text-white transition-colors cursor-pointer"
                        onClick={openNav}
                        aria-label="Open navigation"
                    >
                        <IoIosMenu className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </nav>
    )
}