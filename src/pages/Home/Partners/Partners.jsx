import React from 'react';
import img1 from '../../../assets/brands/amazon.png'; 
import img2 from '../../../assets/brands/amazon_vector.png'; 
import img3 from '../../../assets/brands/casio.png'; 
import img4 from '../../../assets/brands/moonstar.png'; 
import img5 from '../../../assets/brands/randstad.png'; 
import img6 from '../../../assets/brands/start.png'; 
import img7 from '../../../assets/brands/start-people 1.png'; 

const Partners = () => {
  // Placeholder logos - replace these with your actual company logos
  const logos = [
    { id: 1, name: 'Company A', src: img1 },
    { id: 2, name: 'Company B', src: img2 },
    { id: 3, name: 'Company C', src: img3 },
    { id: 4, name: 'Company D', src: img4 },
    { id: 5, name: 'Company E', src: img5 },
    { id: 6, name: 'Company F', src: img6 },
    { id: 7, name: 'Company G', src: img7 },
  ];

  return (
    <div className="w-full  py-16 my-16">
      <div className="max-w-6xl mx-auto px-4 text-gray-600">
        <h2 className="text-2xl font-bold text-center mb-12">
            We've helped thousands of sales teams        
        </h2>
        
        <div className="relative overflow-hidden">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          
          {/* Scrolling container */}
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {logos.map((logo) => (
              <div
                key={`first-${logo.id}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-16 w-auto max-w-[150px] object-contain hover:grayscale-0 transition-all duration-300 hover:opacity-100"
                />
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {logos.map((logo) => (
              <div
                key={`second-${logo.id}`}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
              >
                <img
                  src={img2}
                  alt={logo.name}
                  className="h-16 w-auto max-w-[150px] object-contain hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Partners;