
import './shades.css';

const cardData = [
    {
        id: 1,
        image: "/cards/Battle_of_beats.jpg"
    },
    {
        id: 2,
        image: "/cards/Fiery_feet.jpg"
    },
    {
        id: 3,
        image: "/cards/RASTAYE_RONGOMONCHO.jpg"
    },
    {
        id: 4,
        image: "/cards/Ramp_on_Fire.jpg"
    },
    {
        id: 5,
        image: "/cards/Rhyme_Rise.jpg"
    },
    // {
    //     id: 6,
    //     image: "/cards/Voice_of_Impulse.jpg"
    // }
];

export default function ShadesOfImpulse() {
    return (
        <>
            <div className="bg-[url('/background.svg')] p-8 min-h-screen select-none">
                <h1 className="font-technor text-[1.5rem] sm:text-4xl md:text-5xl font-bold text-black text-center mb-18 pt-5 sticky top-0 md:static">
                    <span className='text-black'>✦</span> Shades of Impulse <span className='text-black'>✦</span>
                </h1>

                <div className="flex justify-center items-center min-h-[500px]">
                    <div className="relative flex justify-center items-center">
                        <div className="cards-container group">
                            {cardData.map((card, index) => (
                                <div
                                    key={card.id}
                                    className={`card card-${index + 1}`}
                                    style={{
                                        '--index': index,
                                        '--total': cardData.length
                                    }}
                                >
                                    <img 
                                        src={card.image} 
                                        alt={`Card ${card.id}`}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
