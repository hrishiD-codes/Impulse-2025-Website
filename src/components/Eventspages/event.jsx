
import '../../index.css';
import { useState, useRef, useEffect } from 'react';
import { FaArrowCircleRight, FaTimes } from "react-icons/fa";
import video2 from '../../assets/Videos/intro.mp4';

export default function Events() {
    const [isVideoPopupOpen, setIsVideoPopupOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState(null);
    const [videoProgress, setVideoProgress] = useState(0);
    const videoRef = useRef(null);

    // Mock video URL for demo
    const video1 = "https://www.w3schools.com/html/mov_bbb.mp4";

    const events = [
        {
            id: 1,
            category: "Cultural Festival",
            title: "Annual Heritage Celebration",
            date: "December 15, 2024 • 6:00 PM - 10:00 PM",
            description: "Join us for an enchanting evening celebrating our rich cultural heritage. Experience traditional performances, authentic cuisine, and artisan displays that showcase the beauty of our diverse community.",
            video: video2,
            featured: true
        },
        {
            id: 2,
            category: "Music Concert",
            title: "Traditional Folk Music Night",
            date: "December 18, 2024 • 7:30 PM - 11:00 PM",
            description: "Experience the soul-stirring melodies of traditional folk music performed by renowned artists. A night filled with acoustic instruments and storytelling through songs.",
            video: video1,
            featured: false
        },
        {
            id: 3,
            category: "Dance Performance",
            title: "Classical Dance Showcase",
            date: "December 20, 2024 • 6:00 PM - 9:00 PM",
            description: "Witness the grace and elegance of classical dance forms performed by master dancers. An evening of artistic expression through movement and rhythm.",
            video: video1,
            featured: false
        },
        {
            id: 4,
            category: "Art Exhibition",
            title: "Contemporary Art Gallery",
            date: "December 22, 2024 • 10:00 AM - 8:00 PM",
            description: "Explore modern interpretations of traditional themes through paintings, sculptures, and digital art. Meet the artists and learn about their creative process.",
            video: video1,
            featured: false
        },
        {
            id: 5,
            category: "Food Festival",
            title: "Culinary Heritage Fair",
            date: "December 24, 2024 • 12:00 PM - 10:00 PM",
            description: "Savor authentic flavors from different regions. Watch cooking demonstrations, participate in food workshops, and enjoy a diverse array of traditional cuisines.",
            video: video1,
            featured: false
        },
        {
            id: 6,
            category: "Workshop",
            title: "Traditional Crafts Workshop",
            date: "December 26, 2024 • 2:00 PM - 6:00 PM",
            description: "Learn traditional handicrafts from master artisans. Create your own pottery, textiles, and woodwork while understanding the cultural significance of each craft.",
            video: video1,
            featured: false
        },
        {
            id: 7,
            category: "Closing Ceremony",
            title: "Grand Finale Celebration",
            date: "December 28, 2024 • 8:00 PM - 11:00 PM",
            description: "Join us for the spectacular closing ceremony featuring highlights from all events, special performances, and awards presentation. A memorable conclusion to our cultural fest.",
            video: video1,
            featured: false
        }
    ];

    const openVideoPopup = (video) => {
        setCurrentVideo(video);
        setIsVideoPopupOpen(true);
        setVideoProgress(0);
    };

    const closeVideoPopup = () => {
        setIsVideoPopupOpen(false);
        setCurrentVideo(null);
        setVideoProgress(0);
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    const handleVideoTimeUpdate = () => {
        if (videoRef.current) {
            const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
            setVideoProgress(progress);
        }
    };

    const handleVideoEnded = () => {
        closeVideoPopup();
    };

    // Close popup when clicking outside the video
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            closeVideoPopup();
        }
    };

    // Close popup with Escape key
    useEffect(() => {
        const handleEscapeKey = (e) => {
            if (e.key === 'Escape') {
                closeVideoPopup();
            }
        };

        if (isVideoPopupOpen) {
            document.addEventListener('keydown', handleEscapeKey);
        }

        return () => {
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [isVideoPopupOpen]);

    const EventCard = ({ event, isReversed }) => (
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-lg shadow-lg overflow-hidden ${isReversed ? 'lg:grid-flow-col-dense' : ''}`}>
            {/* Event Video */}
            <div className={`relative ${isReversed ? 'lg:col-start-2' : ''}`}>
                <div
                    className="relative cursor-pointer group"
                    onClick={() => openVideoPopup(event.video)}
                >
                    <video
                        src={event.video}
                        className="w-full h-64 lg:h-80 object-cover"
                        muted
                        preload="metadata"
                    />
                    {/* Play button overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-40 transition-all duration-200">
                        <div className="bg-white bg-opacity-90 rounded-full p-4 group-hover:scale-110 transition-transform duration-200">
                            <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>
                </div>
                {event.featured && (
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Inter College Event
                    </div>
                )}
            </div>

            {/* Event Details */}
            <div className={`p-6 lg:p-8 ${isReversed ? 'lg:col-start-1' : ''}`}>
                <div className="mb-4">
                    <span className="text-blue-600 text-sm font-medium uppercase tracking-wide">
                        {event.category}
                    </span>
                    <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
                        {event.title}
                    </h2>
                </div>

                <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{event.date}</span>
                    </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                    {event.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-3">
                        <FaArrowCircleRight />
                        <h4>Register Now</h4>
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <div className="mx-auto p-8">
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Events</h1>
                <p className="text-xl text-gray-600">Discover the beauty of our heritage through 7 amazing events</p>
            </div>

            <div className="space-y-12">
                {events.map((event, index) => (
                    <EventCard
                        key={event.id}
                        event={event}
                        isReversed={index % 2 !== 0}
                    />
                ))}
            </div>

            {/* Video Popup Modal */}
            {isVideoPopupOpen && (
                <div
                    className="fixed inset-0 bg-Background-blur bg-opacity-80 flex items-center justify-center z-50"
                    onClick={handleOverlayClick}
                >
                    <div className="relative max-w-4xl max-h-[90vh] w-full mx-4">
                        {/* Close button with rotating progress ring */}
                        <div className="absolute -top-14 right-0 z-10">
                            <div className="relative">
                                {/* Progress ring */}
                                <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 48 48">
                                    <circle
                                        cx="24"
                                        cy="24"
                                        r="20"
                                        fill="none"
                                        stroke="rgba(255,255,255,0.3)"
                                        strokeWidth="4"
                                    />
                                    <circle
                                        cx="24"
                                        cy="24"
                                        r="20"
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="4"
                                        strokeDasharray={`${2 * Math.PI * 20}`}
                                        strokeDashoffset={`${2 * Math.PI * 20 * (1 - videoProgress / 100)}`}
                                        className="transition-all duration-100"
                                    />
                                </svg>
                                {/* Close button */}
                                <button
                                    onClick={closeVideoPopup}
                                    className="absolute inset-0 bg-Background-blur bg-opacity-50 hover:bg-opacity-70 rounded-full flex items-center justify-center text-white transition-all duration-200"
                                >
                                    <FaTimes className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Video */}
                        <video
                            ref={videoRef}
                            src={currentVideo}
                            controls={false}
                            autoPlay
                            className="w-full h-auto max-h-[90vh] rounded-lg"
                            onTimeUpdate={handleVideoTimeUpdate}
                            onEnded={handleVideoEnded}
                            style={{
                                outline: 'none',
                                WebkitAppearance: 'none',
                            }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}