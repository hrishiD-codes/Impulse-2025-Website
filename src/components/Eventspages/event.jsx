
import { useState, useEffect, useRef } from 'react';
export default function Events() {
    const Dance = '/videos/dance.mp4';
    const Music = '/videos/music.mp4';
    const rhyme = '/videos/rhyme.mp4';
    const ramp = '/videos/Ramp.mp4';
    const Drama = '/videos/drama.mp4';
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const intervalRef = useRef(null);
    const containerRef = useRef(null);
    const videoRef = useRef(null);

    const cards = [
        {
            id: 1,
            video: Drama,
            thumbnail: "/cards/RASTAYE_RONGOMONCHO.jpg",
            tags: ["রাস্তায় রঙ্গমঞ্চ", "Street Play Drama"],
            rotation: -8,
            registrationPath: "https://forms.gle/5rAYGALPgbANKnXi8"
        },
        {
            id: 2,
            video: Dance,
            thumbnail: "/cards/Fiery_feet.jpg",
            tags: ["Solo Dance"],
            rotation: 5,
            registrationPath: "https://forms.gle/HLwKdcHraueZwgTt5"
        },
        {
            id: 3,
            video: Dance,
            thumbnail: "/cards/Battle_of_beats.jpg",
            tags: ["Group Dance"],
            rotation: 5,
            registrationPath: "https://forms.gle/HtJGmXyz1HBZVeHd6"
        },
        {
            id: 4,
            video: Music,
            thumbnail: "/cards/Voice_of_Impulse.jpg",
            tags: ["Music", "Voice"],
            rotation: -3,
            registrationPath: "https://docs.google.com/forms/d/e/1FAIpQLSflXa-jt6Wvs76kYeycMmycDEDRtGPdLFoVel4OcRviOWESzg/viewform"
        },
        {
            id: 5,
            video: rhyme,
            thumbnail: "/cards/Rhyme_Rise.jpg",
            tags: ["Rhyme", "Recitation"],
            rotation: 7,
            registrationPath: "https://forms.gle/EWdwCYn4zaGJjxAFA"
        },
        {
            id: 6,
            video: ramp,
            thumbnail: "/cards/Ramp_on_Fire.jpg",
            tags: ["Ramp Walk"],
            rotation: -5,
            registrationPath: "https://docs.google.com/forms/d/e/1FAIpQLSflaC_Y0wZWpT1XxCyQDUwXUi_oQ3s8_WYUM2Oct7t2-iuD4w/viewform"
        },
    ];

    useEffect(() => {
        if (autoPlay && !isDragging && !isVideoPlaying) {
            intervalRef.current = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % cards.length);
            }, 3000);
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [autoPlay, isDragging, isVideoPlaying, cards.length]);

    const handleVideoPlay = () => {
        setIsVideoPlaying(true);
        setAutoPlay(false);
    };

    const handleVideoEnded = () => {
        setIsVideoPlaying(false);
        setAutoPlay(true);
    };

    const handleStart = (e) => {
        if (isVideoPlaying) return;
        setIsDragging(true);
        setAutoPlay(false);
        const clientX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
        setStartX(clientX);
        setTranslateX(0);
    };

    const handleMove = (e) => {
        if (!isDragging || isVideoPlaying) return;

        const clientX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
        const diff = clientX - startX;
        setTranslateX(diff);
    };

    const handleEnd = () => {
        if (!isDragging || isVideoPlaying) return;
        setIsDragging(false);
        const threshold = 100;

        if (Math.abs(translateX) > threshold) {
            if (translateX > 0) {
                setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
            } else {
                setCurrentIndex((prev) => (prev + 1) % cards.length);
            }
        }

        setTranslateX(0);
        if (!isVideoPlaying) {
            setTimeout(() => setAutoPlay(true), 5000);
        }
    };

    const getCardStyle = (index) => {
        const isActive = index === currentIndex;
        const offset = index - currentIndex;
        let transform = '';
        let zIndex = 0;
        let opacity = 0.6;
        let scale = 0.85;

        if (isActive) {
            transform = `translateX(${translateX}px) rotate(0deg)`;
            zIndex = 10;
            opacity = 100;
            scale = 1;
        } else if (offset === 1 || (offset === -(cards.length - 1))) {
            transform = `translateX(${120 + translateX}px) rotate(12deg)`;
            zIndex = 5;
        } else if (offset === -1 || (offset === cards.length - 1)) {
            transform = `translateX(${-120 + translateX}px) rotate(-12deg)`;
            zIndex = 5;
        } else {
            transform = `translateX(${offset * 0 + translateX}px) rotate(${cards[index].rotation}deg) scale(0.7)`;
            zIndex = 1;
            opacity = 100;
        }

        return {
            transform: `${transform} scale(${scale})`,
            zIndex,
            opacity,
            transition: isDragging ? 'none' : 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        };
    };

    const handleRegistration = (path) => {
        window.open(path, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="relative min-h-screen bg-black flex flex-col items-center justify-center p-3 sm:p-4 md:p-6 overflow-hidden">
            <div className="absolute top-4 sm:top-6 md:top-8 mb-4 sm:mb-6 md:mb-8 pt-2 sm:pt-4 md:pt-5 text-center px-4 sm:px-6">
                <h1 className="font-akira text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4">Our Events</h1>
                <p className="font-akira text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-normal text-white px-2 sm:px-4">Discover the beauty of our heritage through six amazing events</p>
            </div>
            <div
                ref={containerRef}
                className="relative mt-16 sm:mt-20 md:mt-24 lg:mt-28 w-full max-w-xs sm:max-w-md md:max-w-3xl lg:max-w-5xl h-72 xs:h-80 sm:h-[28rem] md:h-[32rem] lg:h-[36rem] flex items-center justify-center"
                onMouseDown={handleStart}
                onMouseMove={handleMove}
                onMouseUp={handleEnd}
                onMouseLeave={handleEnd}
                onTouchStart={handleStart}
                onTouchMove={handleMove}
                onTouchEnd={handleEnd}
                style={{ cursor: isVideoPlaying ? 'default' : (isDragging ? 'grabbing' : 'grab') }}
            >
                {cards.map((card, index) => (
                    <div
                        key={card.id}
                        className="absolute w-56 h-72 xs:w-60 xs:h-80 sm:w-72 sm:h-[26rem] md:w-80 md:h-[30rem] lg:w-96 lg:h-[32rem] rounded-2xl overflow-hidden border-2 sm:border-3 md:border-4 border-white shadow-2xl"
                        style={getCardStyle(index)}
                    >
                        {card.video ? (
                            <div className="w-full h-full relative">
                                <video
                                    ref={index === currentIndex ? videoRef : null}
                                    className={`w-full h-full object-cover rounded-lg ${(!isVideoPlaying || index !== currentIndex) ? 'hidden' : ''}`}
                                    muted={false}
                                    onPlay={handleVideoPlay}
                                    onEnded={handleVideoEnded}
                                    onPause={() => setIsVideoPlaying(false)}
                                    controls={false}
                                    controlsList="nodownload nofullscreen noremoteplayback"
                                    disablePictureInPicture
                                >
                                    <source src={card.video} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>

                                {/* Show thumbnail when video is not playing */}
                                {(!isVideoPlaying || index !== currentIndex) && (
                                    <>
                                        <img
                                            src={card.thumbnail}
                                            alt={card.platform}
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                        {/* Custom Play Button */}
                                        {index === currentIndex && (
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <button
                                                    onClick={() => {
                                                        if (videoRef.current) {
                                                            videoRef.current.play();
                                                        }
                                                    }}
                                                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-4 sm:p-6 transition-all duration-300 transform hover:scale-110 cursor-pointer"
                                                >
                                                    <svg
                                                        className="w-8 h-8 sm:w-12 sm:h-12 text-white"
                                                        fill="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M8 5v14l11-7z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        )}
                                    </>
                                )}

                                {(!isVideoPlaying || index !== currentIndex) && (
                                    <div className="absolute inset-0 pointer-events-none">
                                        <div className="absolute top-2 sm:top-4 left-2 sm:left-4 flex flex-wrap gap-1 sm:gap-2">
                                            {card.tags.map((tag, tagIndex) => (
                                                <span
                                                    key={tagIndex}
                                                    className="font-akira bg-white/50 backdrop-blur-sm text-black px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="w-full h-full relative">
                                <img
                                    src={card.thumbnail}
                                    alt={card.platform}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                <div className="absolute top-2 sm:top-4 left-2 sm:left-4 flex flex-wrap gap-1 sm:gap-2">
                                    {card.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="font-akira bg-white/20 backdrop-blur-sm text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4">
                                    <span className="font-akira bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-black px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-bold">
                                        {card.platform}
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-4 sm:mt-6">
                <button
                    onClick={() => handleRegistration(cards[currentIndex].registrationPath)}
                    className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-black font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full text-sm sm:text-lg transition-all duration-300 transform hover:scale-105 translate-y-[-5px] shadow-lg cursor-pointer"
                >
                    Register Now
                </button>
            </div>

            <div className="mt-4 sm:mt-6 flex justify-center space-x-2 sm:space-x-3">
                {cards.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setCurrentIndex(index);
                            setAutoPlay(false);
                            if (!isVideoPlaying) {
                                setTimeout(() => setAutoPlay(true), 5000);
                            }
                        }}
                        className={`w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${index === currentIndex
                                ? 'bg-white scale-125 shadow-lg'
                                : 'bg-white/40 hover:bg-white/60'
                            }`}
                    />
                ))}
            </div>

            <div className="absolute flex items-center gap-1 sm:gap-2 top-35 lg:top-10 right-4 sm:right-8 bg-white px-2 sm:px-4 py-1 sm:py-2 rounded-full cursor-pointer">
                <h1 className='font-akira text-sm sm:text-xl md:text-2xl font-bold text-black'>LIVE</h1>
                <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${(autoPlay && !isVideoPlaying) ? 'bg-green-400' : 'bg-red-400'} animate-pulse`} />
            </div>
        </div>
    )
}