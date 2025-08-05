
import { useState, useEffect, useRef } from 'react';

export default function Events() {
    const Dance = '../../../public/videos/dance.mp4';
    const Music = '../../../public/videos/music.mp4';
    const rhyme = '../../../public/videos/rhyme.mp4';
    const ramp = '../../../public/videos/Ramp.mp4';
    const Drama = '../../../public/videos/drama.mp4';
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
            tags: ["Drama", "Street Play Drama"],
            platform: ["Rastaye Rongomoncho"],
            rotation: -8,
            registrationPath: "/register/drama"
        },
        {
            id: 2,
            video: Dance,
            tags: ["Solo Dance"],
            platform: "Fiery Feet",
            rotation: 5,
            registrationPath: "/register/solo-dance"
        },
        {
            id: 3,
            video: Dance,
            tags: ["Group Dance"],
            platform: "Battle of Beats",
            rotation: 5,
            registrationPath: "/register/group-dance"
        },
        {
            id: 4,
            video: Music,
            tags: ["Music", "Voice"],
            platform: "Voice of Impulse",
            rotation: -3,
            registrationPath: "/register/music"
        },
        {
            id: 5,
            video: rhyme,
            tags: ["Rhyme", "Recitation"],
            platform: "Rhyme Rice",
            rotation: 7,
            registrationPath: "/register/rhyme"
        },
        {
            id: 6,
            video: ramp,
            tags: ["Ramp Walk"],
            platform: "Ramp On Fire",
            rotation: -5,
            registrationPath: "/register/ramp-walk"
        },
    ];

    // Auto-play functionality
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

    // Video handlers
    const handleVideoPlay = () => {
        setIsVideoPlaying(true);
        setAutoPlay(false);
    };

    const handleVideoEnded = () => {
        setIsVideoPlaying(false);
        setAutoPlay(true);
    };

    // Touch/Mouse handlers
    const handleStart = (e) => {
        setIsDragging(true);
        setAutoPlay(false);
        const clientX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
        setStartX(clientX);
        setTranslateX(0);
    };

    const handleMove = (e) => {
        if (!isDragging) return;

        const clientX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
        const diff = clientX - startX;
        setTranslateX(diff);
    };

    const handleEnd = () => {
        if (!isDragging) return;

        setIsDragging(false);

        // Threshold for changing cards
        const threshold = 100;

        if (Math.abs(translateX) > threshold) {
            if (translateX > 0) {
                // Swipe right - go to previous
                setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
            } else {
                // Swipe left - go to next
                setCurrentIndex((prev) => (prev + 1) % cards.length);
            }
        }

        setTranslateX(0);

        // Resume auto-play after 5 seconds if no video is playing
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
        // For demonstration, we'll just log the path. In a real app, you'd use navigation
        console.log('Navigating to:', path);
        // window.location.href = path; // or use router.push(path) with Next.js
    };

    return (
        <div className="relative min-h-screen bg-black flex flex-col items-center justify-center p-2 sm:p-4 overflow-hidden">
            <div className="absolute top-4 sm:top-8 mb-4 sm:mb-8 pt-2 sm:pt-5 text-center px-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">Our Events</h1>
                <p className="text-sm sm:text-lg md:text-xl text-white px-2">Discover the beauty of our heritage through six amazing events</p>
            </div>
            <div
                ref={containerRef}
                className="relative mt-16 sm:mt-20 md:mt-30 w-full max-w-xs sm:max-w-2xl md:max-w-4xl h-64 sm:h-80 md:h-96 flex items-center justify-center"
                onMouseDown={handleStart}
                onMouseMove={handleMove}
                onMouseUp={handleEnd}
                onMouseLeave={handleEnd}
                onTouchStart={handleStart}
                onTouchMove={handleMove}
                onTouchEnd={handleEnd}
                style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
            >
                {cards.map((card, index) => (
                    <div
                        key={card.id}
                        className="absolute w-52 h-72 sm:w-72 sm:h-96 md:w-80 md:h-120 rounded-2xl overflow-hidden border-2 sm:border-4 border-white shadow-2xl"
                        style={getCardStyle(index)}
                    >
                        {/* Card Content */}
                        {card.video ? (
                            <div className="w-full h-full relative">
                                <video
                                    ref={index === currentIndex ? videoRef : null}
                                    className="w-full h-full object-cover rounded-lg"
                                    muted={false}
                                    onPlay={handleVideoPlay}
                                    onEnded={handleVideoEnded}
                                    onPause={() => setIsVideoPlaying(false)}
                                >
                                    <source src={card.video} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>

                                {/* Custom Play Button */}
                                {!isVideoPlaying && index === currentIndex && (
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

                                {/* Overlay for tags and platform */}
                                <div className="absolute inset-0 pointer-events-none">
                                    <div className="absolute top-2 sm:top-4 left-2 sm:left-4 flex flex-wrap gap-1 sm:gap-2">
                                        {card.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="bg-white/50 backdrop-blur-sm text-black px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4">
                                        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-black px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-bold">
                                            {card.platform}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div
                                className="w-full h-full bg-cover bg-center relative"
                                style={{ backgroundImage: `url(${card.image})` }}
                            >
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                                {/* Tags */}
                                <div className="absolute top-2 sm:top-4 left-2 sm:left-4 flex flex-wrap gap-1 sm:gap-2">
                                    {card.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4">
                                    <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-black px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-bold">
                                        {card.platform}
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Registration Button for Active Card */}
            <div className="mt-6 sm:mt-8">
                <button
                    onClick={() => handleRegistration(cards[currentIndex].registrationPath)}
                    className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-black font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full text-sm sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg translate-y-8 cursor-pointer"
                >
                    Register Now
                </button>
            </div>

            {/* Dots indicator */}
            <div className="absolute bottom-5 sm:bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2">
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
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === currentIndex
                            ? 'bg-white scale-125'
                            : 'bg-white/40 hover:bg-white/60'
                            }`}
                    />
                ))}
            </div>

            {/* Auto-play indicator */}
            <div className="absolute flex items-center gap-1 sm:gap-2 top-35 lg:top-10 right-4 sm:right-8 bg-white px-2 sm:px-4 py-1 sm:py-2 rounded-full cursor-pointer">
                <h1 className='text-sm sm:text-xl md:text-2xl font-bold text-black'>LIVE</h1>
                <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${(autoPlay && !isVideoPlaying) ? 'bg-green-400' : 'bg-red-400'} animate-pulse`} />
            </div>
        </div>
    )
}