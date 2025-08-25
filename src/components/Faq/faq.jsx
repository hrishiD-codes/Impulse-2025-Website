
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Handlove from './hands-love.svg';

export default function Faq() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqData = [
        {
            question: "What is Impulse?",
            answer: "Impulse is the annual cultural extravaganza of Techno Bengal Institute of Technology, formerly known as Bengal Institute of Technology. At Impulse, where creativity meets celebration! From dance and drama to music, art, and quirky contests — it's a three-day fusion of talent, fun, and unforgettable memories."
        },
        {
            question: "Who can participate in the fest events?",
            answer: "Students from all colleges and universities are welcome to participate, unless otherwise mentioned inspecific event rules. Bring your team or come solo — there's something for everyone!"
        },
        {
            question: "How do I register for events?",
            answer: "Registration is super easy! Head over to the Events section, select your event(s), and click on the Register Now button. Fill in the required details and you're in!"
        },
        {
            question: "Is there any registration fee?",
            answer: "No, registration is completely free! All events are open to participants at no cost."
        },
        {
            question: "Where is the fest happening?",
            answer: "The fest will be held at Mohit Moitra Mancha. Detailed directions and campus map are available on our Footer Venue page."
        },
        {
            question: "Do I need to carry my college ID card?",
            answer: "Yes. A valid college ID card is mandatory for all participants and attendees for entry into the Auditorium hall and participate in the registered events."
        },
        {
            question: "Will certificates or prizes be provided?",
            answer: "Absolutely! Winners receive exciting prizes, and all participants will get certificates of participation for selected events."
        },
        {
            question: "Can I attend as an audience member without participating?",
            answer: "Definitely! The fest is open to all college students you just need to have our hall pass to enter the Auditorium hall. Come experience the energy, creativity, and chaos!"
        },
        {
            question: "How do I stay updated about schedules and announcements?",
            answer: "Follow us on Instagram @tbit_impulse, keep checking the Schedule page, to receive updates directly."
        },
        {
            question: "Who do I contact in case of queries or issues?",
            answer: "You can reach out to our organizing team through the Contact Us page or email us at impulse@bitcollege.in - we're here to help!"
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