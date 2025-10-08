import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from '../../../assets/customer-top.png'
import { useState } from 'react';

const feedbacks =
    [
        {
            "customerName": "Awlad Hossain",
            "position": "CEO",
            "feedback": "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
            "image": "https://via.placeholder.com/150"
        },
        {
            "customerName": "Nusrat Jahan",
            "position": "Marketing Manager",
            "feedback": "This posture corrector really improved my sitting habits during long office hours. I feel more confident and relaxed.",
            "image": "https://via.placeholder.com/150"
        },
        {
            "customerName": "Rakibul Islam",
            "position": "Software Engineer",
            "feedback": "After using the posture corrector for a week, my back pain noticeably reduced. It’s comfortable and easy to wear.",
            "image": "https://via.placeholder.com/150"
        },
        {
            "customerName": "Shamima Akter",
            "position": "Teacher",
            "feedback": "I’ve been struggling with poor posture for years, and this corrector finally helped me stay straight without much effort.",
            "image": "https://via.placeholder.com/150"
        },
        {
            "customerName": "Tanvir Ahmed",
            "position": "Entrepreneur",
            "feedback": "Lightweight and effective. I can wear it under my clothes all day. Highly recommended for professionals!",
            "image": "https://via.placeholder.com/150"
        },
        {
            "customerName": "Farhana Rahman",
            "position": "Graphic Designer",
            "feedback": "It helps me maintain a good posture while working on my computer for long hours. Very useful product.",
            "image": "https://via.placeholder.com/150"
        },
        {
            "customerName": "Abdullah Al Mamun",
            "position": "Project Manager",
            "feedback": "I noticed a big difference in my shoulder alignment. Great build quality and comfort level.",
            "image": "https://via.placeholder.com/150"
        },
        {
            "customerName": "Mehedi Hasan",
            "position": "Student",
            "feedback": "I spend a lot of time studying, and this posture corrector keeps me from slouching. Feels supportive and durable.",
            "image": "https://via.placeholder.com/150"
        },
        {
            "customerName": "Sabina Yasmin",
            "position": "Doctor",
            "feedback": "I often recommend posture correctors to my patients, and this one works effectively without causing discomfort.",
            "image": "https://via.placeholder.com/150"
        },
        {
            "customerName": "Mahfuz Rahman",
            "position": "Sales Executive",
            "feedback": "Affordable and practical. I use it every day at work, and my back feels much better now.",
            "image": "https://via.placeholder.com/150"
        }
    ]




const CustomerFeedback = () => {
    const [activeIndex, setActiveIndex] = useState(0);


    const handlePrev = () => {
        setActiveIndex((prev) => (prev === 0 ? feedbacks.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev === feedbacks.length - 1 ? 0 : prev + 1));
    };

    const getVisibleCards = () => {
        const cards = [];
        for (let i = -2; i <= 2; i++) {
            let index = activeIndex + i;
            if (index < 0) index = feedbacks.length + index;
            if (index >= feedbacks.length) index = index - feedbacks.length;
            cards.push({ data: feedbacks[index], position: i, originalIndex: index });
        }
        return cards;
    };

    const getCardStyle = (position) => {
        if (position === 0) {
            return {
                transform: 'translateX(0%) scale(1) translateY(-20px)',
                opacity: 1,
                zIndex: 30
            };
        } else if (Math.abs(position) === 1) {
            return {
                transform: `translateX(${position * 105}%) scale(0.92) translateY(0px)`,
                opacity: 0.5,
                zIndex: 20
            };
        } else {
            return {
                transform: `translateX(${position * 110}%) scale(0.88) translateY(0px)`,
                opacity: 0.25,
                zIndex: 10
            };
        }
    };


    return (
        <div>
            <div className="w-[716px] mx-auto text-gray-600">
                <img className='max-w-[200px] mx-auto' src={img1} alt="Icon" />
                <h1 className='text-3xl font-semibold  mt-8 mb-[20px]'>What our customers are saying</h1>
                <p className=''>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
            </div>
            {/* card/slider section*/}
            <div className="w-full py-16 px-4 flex items-center justify-center">
                <div className="max-w-6xl w-full">
                    {/* Cards Container */}
                    <div className="relative h-80 mb-12">
                        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                            {getVisibleCards().map(({ data, position, originalIndex }) => {
                                const style = getCardStyle(position);
                                const isActive = position === 0;

                                return (
                                    <div
                                        key={originalIndex}
                                        className={`absolute w-96 p-8 rounded-3xl shadow-xl transition-all duration-700 ease-out ${isActive ? 'bg-white' : 'bg-gray-200'
                                            }`}
                                        style={style}
                                    >
                                        {/* Quote Icon */}
                                        <Quote
                                            className="w-10 h-10 mb-2"
                                            style={{
                                                color: isActive ? '#C3DFE2' : '#D1D5DB',
                                                fill: isActive ? '#C3DFE2' : '#D1D5DB'
                                            }}
                                        />

                                        {/* Feedback */}
                                        <p className={`text-sm leading-relaxed mb-2 text-left ${isActive ? 'text-gray-700' : 'text-gray-400'
                                            }`}>
                                            {data.feedback}
                                        </p>

                                        {/* Divider */}
                                        <div
                                            className="border-t-2 border-dashed mb-2"
                                            style={{ borderColor: isActive ? '#E5E7EB' : '#D1D5DB' }}
                                        ></div>

                                        {/* Customer Info */}
                                        <div className="flex items-center gap-3 mb-2">
                                            <div
                                                className="w-10 h-10 rounded-full flex-shrink-0"
                                                style={{ backgroundColor: isActive ? '#0D4D4D' : '#D1D5DB' }}
                                            ></div>
                                            <div>
                                                <h4 className={`font-semibold text-base ${isActive ? 'text-gray-900' : 'text-gray-400'
                                                    }`}>
                                                    {data.customerName}
                                                </h4>
                                                <p className={`text-xs mt-1 text-left ${isActive ? 'text-gray-500' : 'text-gray-400'
                                                    }`}>
                                                    {data.position}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Pagination Controls */}
                    <div className="flex items-center justify-center gap-6">
                        {/* Previous Button */}
                        <button
                            onClick={handlePrev}
                            className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all hover:bg-[#CAEB66] hover:shadow-xl"
                        >
                            <ChevronLeft className="w-6 h-6 text-black" strokeWidth={2} />
                        </button>

                        {/* Dot Indicators */}
                        <div className="flex gap-2">
                            {feedbacks.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveIndex(index)}
                                    className={`transition-all rounded-full ${index === activeIndex
                                            ? 'w-3 h-3 bg-black'
                                            : 'w-2.5 h-2.5 bg-gray-300'
                                        } hover:bg-[#CAEB66]`}
                                />
                            ))}
                        </div>

                        {/* Next Button */}
                        <button
                            onClick={handleNext}
                            className="w-12 h-12 rounded-full bg-[#CAEB66] shadow-lg flex items-center justify-center transition-all hover:bg-[#B8E986] hover:shadow-xl"
                        >
                            <ChevronRight className="w-6 h-6 text-black" strokeWidth={2} />
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CustomerFeedback; 