
import '../../index.css';
import { useState, useRef } from 'react';
import abtImp from '../../../public/videos/impulse.mp4';
import GoodVibes from './goodVibes.svg';
import Fire from './fire.svg';
import letsgo from './lets-go.svg'

export default function AboutImpulse() {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
        }
    };

    const handleVideoPlay = () => {
        setIsPlaying(true);
    };

    const handleVideoPause = () => {
        setIsPlaying(false);
    };

    const handleVideoEnded = () => {
        setIsPlaying(false);
    };

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 md:p-6 lg:p-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 select-none">
                <div className="relative order-2 lg:order-1 flex flex-col justify-center">
                    <h1 className="text-2xl text-black sm:text-3xl md:text-4xl lg:text-3xl xl:text-5xl font-bold leading-tight mb-4 md:mb-6 lg:mb-8">
                        Wanna Know About Impulse?
                    </h1>
                    <div className='mb-6'>
                        <img
                            src={GoodVibes}
                            alt="goodvibes"
                            className='float-left mr-6 mb-2 h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 object-contain'
                        />
                        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white text-justify">
                            This two-day cultural extravaganza is a vivid celebration of talent, creativity, and artistic diversity. From mesmerizing dance performances and soulful musical renditions to captivating dramatics and eloquent recitations, <b>IMPULSE 2K25</b> promises an unforgettable experience. The fest also features a dynamic lineup of intercollege competitions, fostering camaraderie and healthy competition among participants from various esteemed institutions.
                        </p>
                        <div className="clear-left"></div>
                    </div>
                    <div>
                        <img
                            src={letsgo}
                            alt="letsgo"
                            className='float-right ml-4 mb-2 h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32 object-contain'
                        />
                        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white text-justify">
                            We are privileged to welcome distinguished chief guests, acclaimed artists, and electrifying bands, who will light up the stage with their presence and performances. Join us in this jubilant celebration of art, culture, and community, as <b>Techno Bengal Institute of Technology</b> commemorates 25 glorious years with <b>IMPULSE 2K25</b> — where every moment resonates with passion, energy, and unforgettable memories.
                        </p>
                        <div className="clear-right"></div>
                    </div>
                </div>

                <div className="order-1 lg:order-2 flex flex-col justify-center items-center space-y-4">
                    <div className="relative w-full pl-5 pr-5">
                        <video
                            ref={videoRef}
                            src={abtImp}
                            loop={false}
                            muted={false}
                            className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-90 border-2 border-white rounded-lg shadow-lg object-cover"
                            onPlay={handleVideoPlay}
                            onPause={handleVideoPause}
                            onEnded={handleVideoEnded}
                        />

                        {/* Play/Pause Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <button
                                onClick={handlePlayPause}
                                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-4 sm:p-6 transition-all duration-300 transform hover:scale-110 cursor-pointer"
                            >
                                {isPlaying ? (
                                    // Pause icon
                                    <svg
                                        className="w-8 h-8 sm:w-12 sm:h-12 text-white"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                                    </svg>
                                ) : (
                                    // Play icon
                                    <svg
                                        className="w-8 h-8 sm:w-12 sm:h-12 text-white"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}