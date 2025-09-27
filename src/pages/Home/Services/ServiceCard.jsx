


const ServiceCard=({service, index})=>{
    const IconComponent = service.icon;
    return (
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
                <div className="items-center mb-4">
                  <div className={`${service.color} p-3 rounded-lg w-[70px] mx-auto mb-4`}>
                    <IconComponent className="w-6 h-6 text-white mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 flex-1">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <button className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-200">
                    Learn More →
                  </button>
                </div>
        </div>
    )
}

export default ServiceCard; 