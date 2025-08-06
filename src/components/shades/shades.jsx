
import './shades.css';

const cardData = [
    {
        id: 1,
        title: "brand",
        items: [
            "Brand Strategy",
            "360° Creative",
            "Art Direction",
            "Copywriting",
            "Editing",
            "Motion Graphics",
            "DTP"
        ],
        color: "bg-gradient-to-br from-emerald-500 to-emerald-600",
        iconBg: "bg-black"
    },
    {
        id: 2,
        title: "social",
        items: [
            "Social Media Strategy",
            "Social Media Creative",
            "TikTok/Social Shoots",
            "Influencer Campaigns",
            "Scheduling Support",
            "Community Management",
            "Social Listening"
        ],
        color: "bg-gradient-to-br from-blue-400 to-blue-500",
        iconBg: "bg-yellow-300"
    },
    {
        id: 3,
        title: "activations",
        items: [
            "Activation Strategy",
            "Event Planning",
            "Art Direction",
            "Production"
        ],
        color: "bg-gradient-to-br from-orange-500 to-red-500",
        iconBg: "bg-blue-400"
    },
    {
        id: 4,
        title: "video production",
        items: [
            "Campaign video",
            "Branded content",
            "Social content",
            "Marketing material"
        ],
        color: "bg-gradient-to-br from-purple-600 to-purple-700",
        iconBg: "bg-yellow-300"
    },
    {
        id: 5,
        title: "with partners",
        items: [
            "PR/Journalism",
            "3D / VFX",
            "food styling",
            "Photography"
        ],
        color: "bg-gradient-to-br from-pink-300 to-purple-400",
        iconBg: "bg-purple-700"
    }
];

export default function ShadesOfImpulse() {
    return (
        <>
            <div className="bg-[url('/public/background.svg')] p-8 min-h-screen select-none">
                <h1 className="font-technor text-[1.5rem] sm:text-4xl md:text-5xl font-bold text-black text-center mb-18 pt-5 sticky top-0 md:static">
                    <span className='text-black'>✦</span> Shades of Impulse <span className='text-black'>✦</span>
                </h1>

                <div className="flex justify-center items-center min-h-[500px]">
                    <div className="relative flex justify-center items-center">
                        <div className="cards-container group">
                            {cardData.map((card, index) => (
                                <div
                                    key={card.id}
                                    className={`card ${card.color} card-${index + 1}`}
                                    style={{
                                        '--index': index,
                                        '--total': cardData.length
                                    }}
                                >

                                    <h2 className="card-title">{card.title}</h2>

                                    <div className="card-divider"></div>

                                    <ul className="card-list">
                                        {card.items.map((item, itemIndex) => (
                                            <li key={itemIndex} className="card-item">
                                                <span className="bullet">✦</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
