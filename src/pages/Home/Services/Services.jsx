import ServiceCard from "./ServiceCard";


import { 
  Truck, 
  MapPin, 
  Package, 
  Banknote, 
  Building2, 
  RotateCcw 
} from 'lucide-react';

const Services= ()=>{
    const servicesData = [
    {
      title: "Express & Standard Delivery",
      description: "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
      icon: Truck,
      color: "bg-blue-500"
    },
    {
      title: "Nationwide Delivery",
      description: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
      icon: MapPin,
      color: "bg-green-500"
    },
    {
      title: "Fulfillment Solution",
      description: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
      icon: Package,
      color: "bg-purple-500"
    },
    {
      title: "Cash on Home Delivery",
      description: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
      icon: Banknote,
      color: "bg-emerald-500"
    },
    {
      title: "Corporate Service / Contract In Logistics",
      description: "Customized corporate services which includes warehouse and inventory management support.",
      icon: Building2,
      color: "bg-orange-500"
    },
    {
      title: "Parcel Return",
      description: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
      icon: RotateCcw,
      color: "bg-red-500"
    }
  ];

    return (
        <div className="mx-auto">
                <div className="w-[716px] mx-auto">
                    <h1 className="text-3xl font-semibold mt-[100px] mb-[20px]">Our Services</h1>
                    <p className="mb-[32px]">Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    servicesData.map((service, index) => <ServiceCard service={service} key={index}/>)
                }
            </div>            
        </div>
    )
}

export default Services; 