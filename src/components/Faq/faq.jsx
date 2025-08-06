
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Handlove from './hands-love.svg';

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqData = [
        {
            question: "When and where is the cultural fest taking place?",
            answer: "The cultural fest will be held from March 15-17, 2024, at the Main Campus Auditorium and surrounding venues. The event runs from 9:00 AM to 10:00 PM each day."
        },
        {
            question: "How can I register for events and competitions?",
            answer: "Registration is open online through our official website. You can also register on-site during the first day of the fest. Early bird registration closes on March 10th with discounted fees."
        },
        {
            question: "What types of cultural events will be featured?",
            answer: "We'll have dance competitions, music performances, drama shows, art exhibitions, poetry slams, fashion shows, and traditional cultural displays from various regions. There are both competitive and non-competitive categories."
        },
        {
            question: "Is there an entry fee for participants and spectators?",
            answer: "Entry for spectators is free! Participants pay a nominal registration fee: ₹100 for solo events, ₹200 for group events. Students get a 50% discount with valid ID."
        },
        {
            question: "Can students from other colleges participate?",
            answer: "Absolutely! We welcome participants from all colleges and universities. Some events are specifically designed for inter-college competition to promote cultural exchange."
        },
        {
            question: "What prizes and recognition will be awarded?",
            answer: "Winners receive cash prizes up to ₹25,000, trophies, certificates, and special recognition. We also have audience choice awards and participation certificates for all contestants."
        },
        {
            question: "Are there food and accommodation arrangements?",
            answer: "Yes! We have food courts with diverse cuisines and cultural delicacies. Accommodation can be arranged in nearby hostels and guesthouses for outstation participants at subsidized rates."
        },
        {
            question: "What should I bring for my performance?",
            answer: "Bring your costumes, props, and any special equipment. We provide basic sound systems, lighting, and stage setup. Submit your technical requirements during registration for better coordination."
        }
    ];

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="relative bg-linear-to-r from-cus-red to-indigo-blue py-10 px-4 select-none">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-12">
                    <h2 className="font-akira text-3xl sm:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-1">
                        FAQs Just for You
                        <img src={Handlove} alt="handlove" className="h-[4rem] w-[4rem] sm:h-[5rem] sm:w-[5rem] rotate-23" />
                    </h2>
                    <p className="font-akira text-lg font-normal text-white max-w-5xl mx-auto">
                        Guess what? We've got the answers you've been waiting for!
                    </p>
                </div>

                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <div key={index} className="bg-gray-200 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl ">

                            <button onClick={() => toggleFaq(index)} className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200">
                                <h3 className="font-akira text-lg font-semibold text-black pr-4">
                                    {faq.question}
                                </h3>
                                <div className="flex-shrink-0 ">
                                    {openIndex === index ? (
                                        <FaChevronUp className="w-5 h-5 text-black" />
                                    ) : (
                                        <FaChevronDown className="w-5 h-5 text-black" />
                                    )}
                                </div>
                            </button>

                            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="px-6 pb-5 pt-0 ">
                                    <div className="h-px bg-gray-100 mb-4"></div>
                                    <p className="font-akira text-black font-normal leading-relaxed ">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}