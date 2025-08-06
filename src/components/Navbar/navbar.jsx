
import '../../index.css';
import { useState } from 'react';
import Star from './star.jsx';
import facebook from '../../../public/icons/facebook.svg';
import instagram from '../../../public/icons/instagram.svg';
import youtube from '../../../public/icons/youtube.svg';

export default function Navbar() {
    const [isSidenavOpen, setIsSidenavOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const openNav = () => {
        setIsSidenavOpen(true);
    };

    const closeNav = () => {
        setIsSidenavOpen(false);
    };

    return (
        <nav>
            <div className='cursor-pointer'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={openNav}>

                <div className=" absolute top-0 left-0 h-15 w-15 z-10 text-orange-400 mt-4 ml-4 hover:rotate-180 transition-all duration-500">
                    <Star />
                </div>
                <h1 className='absolute top-6.5 left-11 text-3xl z-15 font-extrabold text-white'>
                    MENU
                </h1>

                <div className={`hidden md:block absolute top-5 left-4 h-[30rem] w-[18rem] bg-[url(/giphy.gif)] rounded-lg z-5 transition-all duration-300 ${isHovered ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}>
                    <div className="flex flex-col p-4 gap-6 justify-center items-start mt-15 pl-7">
                        <a href="/" className="block text-2xl bg-white rounded-tl-2xl rounded-br-2xl text-black hover:scale-120 transition-all duration-300 no-underline whitespace-nowrap px-6 py-1 font-medium">
                            HOME
                        </a>
                        <a href="/#about" className="block text-2xl bg-white rounded-tl-2xl rounded-br-2xl text-black hover:scale-120 transition-all duration-300 no-underline whitespace-nowrap px-6 py-1 font-medium">
                            ABOUT
                        </a>
                        <a href="/#shades" className="block text-2xl bg-white rounded-tl-2xl rounded-br-2xl text-black hover:scale-120 transition-all duration-300 no-underline whitespace-nowrap px-6 py-1 font-medium">
                            ARTISTS
                        </a>
                        <a href="/#events" className="block text-2xl bg-white rounded-tl-2xl rounded-br-2xl text-black hover:scale-120 transition-all duration-300 no-underline whitespace-nowrap px-6 py-1 font-medium">
                            EVENTS
                        </a>
                        <a href="/teams" className="block text-2xl bg-white rounded-tl-2xl rounded-br-2xl text-black hover:scale-120 transition-all duration-300 no-underline whitespace-nowrap px-6 py-1 font-medium">
                            TEAM
                        </a>
                        <a href="/contact" className="block text-2xl bg-white rounded-tl-2xl rounded-br-2xl text-black hover:scale-120 transition-all duration-300 no-underline whitespace-nowrap px-6 py-1 font-medium">
                            GET IN TOUCH
                        </a>
                    </div>
                </div>
            </div>

            <div className={`md:hidden fixed top-0 left-0 h-screen w-screen bg-[url(/giphy.gif)] bg-cover bg-center bg-no-repeat bg-fixed z-50 overflow-x-hidden transition-all duration-500 pt-16 text-center ${isSidenavOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className='cursor-pointer z-2' onClick={closeNav}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div className="absolute top-0 left-0 h-15 w-15 text-orange-400 mt-4 ml-4 hover:rotate-180 transition-all duration-500">
                        <Star />
                    </div>
                    <h1 className='absolute top-6.5 left-11 text-3xl font-extrabold text-white'>
                        {isSidenavOpen ? 'CLOSE' : 'MENU'}
                    </h1>
                </div>

                <div className="flex flex-col items-center justify-center gap-6 mt-15">
                    <a href="/" className="block text-2xl text-white no-underline font-bold">
                        HOME
                    </a>
                    <a href="/#about" className="block text-2xl text-white no-underline font-bold">
                        ABOUT
                    </a>
                    <a href="/#shades" className="block text-2xl text-white no-underline font-bold">
                        ARTISTS
                    </a>
                    <a href="/#events" className="block text-2xl text-white no-underline font-bold">
                        EVENTS
                    </a>
                    <a href="/teams" className="block text-2xl text-white no-underline font-bold">
                        TEAM
                    </a>
                    <a href="#contact" className="block text-2xl text-white no-underline font-bold">
                        GET IN TOUCH
                    </a>
                </div>
            </div>

            <div className="absolute top-6 right-6 z-40">
                <div className="flex gap-2 sm:gap-3">
                    <a
                        href="https://www.facebook.com/share/1Y8XqRSg9P/"
                        className="cursor-pointer hover:scale-120 trasition-all duration-300"
                        aria-label="Facebook"
                        target='_blank'
                    >
                        <img src={facebook} alt="facebook" className='w-12 h-12 sm:h-15 sm:w-15' />
                    </a>
                    <a
                        href="https://www.instagram.com/tbit_impulse?igsh=MWR2OTljcGwyYnk3cA=="
                        className="cursor-pointer hover:scale-120 trasition-all duration-300"
                        target='_blank'
                    >
                        <img src={instagram} alt="instagram" className='w-12 h-12 sm:h-15 sm:w-15' />
                    </a>
                    <a
                        href="#youtube"
                        className="cursor-pointer hover:scale-120 trasition-all duration-300"
                        aria-label="Facebook"
                        target='_blank'
                    >
                        <img src={youtube} alt="instagram" className='w-12 h-12 sm:h-15 sm:w-15' />
                    </a>
                </div>
            </div>
        </nav>
    )
}