import img1 from '../../../assets/live-tracking.png'
import img2 from '../../../assets/safe-delivery.png'
import img3 from '../../../assets/live-tracking.png'
import React from 'react';

const OurSpeciality = () => {
  const specialities = [
    {
      "id": 1,
      "image": img1,
      "title": "Live Parcel Tracking",
      "description": "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind."
    },
    {
      "id": 2,
      "image": img2,
      "title": "100% Safe Delivery",
      "description": "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time."
    },
    {
      "id": 3,
      "image": img3,
      "title": "24/7 Call Center Support",
      "description": "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us."
    }
  ];


  return (
    <div className="w-full p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-8">
          {specialities.map((item) => (
            <div key={item.id} className="p-8 flex bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              {/* Left side - Image */}
              <div className="flex-shrink-0 p-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[200px] h-[200px] object-cover rounded-l-lg"
                />
              </div>
              
              {/* Vertical border separator */}
              <div className="w-px h-[150px] bg-gray-300 self-center mx-0"></div>
              
              {/* Right side - Content */}
              <div className="flex-1 p-6 flex flex-col justify-center align-right">
                <h3 className="font-extrabold text-2xl text-gray-800 mb-4 leading-tight text-left">
                  {item.title}
                </h3>
                <p className="font-medium text-base text-gray-600 leading-relaxed text-left">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurSpeciality;