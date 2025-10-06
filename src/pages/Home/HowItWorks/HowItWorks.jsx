import img1 from '../../../assets/bookingIcon.png'

export default function HowItWorks() {
  const steps = [
    {
      icon: img1,
      title: "Browse Products",
      description: "Explore our wide selection of products and find exactly what you're looking for with our intuitive search and filter options."
    },
    {
      icon: img1,
      title: "Add to Cart",
      description: "Select your favorite items and add them to your cart. Review your selections and adjust quantities as needed."
    },
    {
      icon: img1,
      title: "Secure Checkout",
      description: "Complete your purchase with our safe and secure payment process. We accept all major payment methods."
    },
    {
      icon: img1,
      title: "Fast Delivery",
      description: "Sit back and relax while we prepare and ship your order. Track your package every step of the way."
    }
  ];

  return (
    <div className="grid  flex-col items-center gap-8 bg-gray-50 p-8">
      <h2 className="text-3xl font-bold text-gray-600">How It Works</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => {          
          return (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-8"
            >
              <div className="flex flex-col">
                <img className="text-blue-600 mx-auto" src={img1} size={50} strokeWidth={1.5} />
                
                <h3 
                  className="font-bold text-gray-800 mt-6"
                  style={{ fontSize: '20px' }}
                >
                  {step.title}
                </h3>
                
                <p 
                  className="text-gray-600 font-medium mt-6"
                  style={{ fontSize: '16px' }}
                >
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}