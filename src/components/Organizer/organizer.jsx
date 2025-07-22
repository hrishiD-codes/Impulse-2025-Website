import '../../index.css';

export default function Organizer(){
    const coordinators = [
        {
            id: 1,
            name: "Dr. Sarah Johnson",
            position: "General Secretary",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
        },
        {
            id: 2,
            name: "Michael Chen",
            position: "Cultural Secretary",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            position: "Assistant General Secretary",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
        },
        {
            id: 4,
            name: "David Thompson",
            position: "Assistant General Secretary",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
        },
        {
            id: 5,
            name: "Priya Sharma",
            position: "Assistant General Secretary",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
        },
        {
            id: 6,
            name: "Robert Wilson",
            position: "Assistant General Secretary",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
        },
        {
            id: 7,
            name: "Lisa Anderson",
            position: "Assistant Cultural Secretary",
            image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
        },
        {
            id: 8,
            name: "Ahmed Hassan",
            position: "Assistant Cultural Secretary",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
        },
        {
            id: 9,
            name: "Maria Garcia",
            position: "Assistant Cultural Secretary",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
        },
        {
            id: 10,
            name: "James Park",
            position: "Assistant Cultural Secretary",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
        },
        {
            id: 11,
            name: "Anna Kowalski",
            position: "Head Coordinator",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
        },
        {
            id: 12,
            name: "Carlos Martinez",
            position: "Coordinator",
            image: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
        }
    ]

    const PersonCard = ({ person }) => (
        <div className="flex-shrink-0 mx-6 text-center">
            <div className="relative group">
                <img
                    src={person.image}
                    alt={person.name}
                    className="w-30 h-30 rounded-full object-cover mx-auto border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/30 to-transparent opacity-0  transition-opacity duration-300 cursor-pointer"></div>
            </div>
            <h3 className="mt-3 text-lg font-semibold text-gray-900 cursor-default">{person.name}</h3>
            <p className="text-sm text-blue-600 font-medium cursor-default">{person.position}</p>
        </div>
    )

    return (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-100 py-8">
            <div className="mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Meet Our Organizing Team
                    </h2>
                    <p className="text-xl text-gray-600 mx-auto">
                        {/* The dedicated professionals working together to make our cultural festival an unforgettable experience */}
                        🎭 Our team of 12+ professionals ensuring every detail is perfect for your cultural experience
                    </p>
                </div>

                {/* Marquee Container */}
                <div className="relative overflow-hidden bg-white shadow-lg py-8">
                    <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
                    <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>

                    {/* Marquee Animation */}
                    <div className="flex animate-marquee whitespace-nowrap">
                        {/* First set of coordinators */}
                        {coordinators.map((person) => (
                            <PersonCard key={`first-${person.id}`} person={person} />
                        ))}
                        {/* Duplicate set for seamless loop */}
                        {coordinators.map((person) => (
                            <PersonCard key={`second-${person.id}`} person={person} />
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                
                .animate-marquee {
                    animation: marquee 10s linear infinite;
                }
                
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    )
}

