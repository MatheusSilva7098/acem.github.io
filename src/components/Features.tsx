
import { Shield, Clock, Headphones, Gauge, Network, Award } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Gauge,
      title: "Guaranteed Speeds",
      description: "Dedicated bandwidth means you get the full speed you pay for, every time"
    },
    {
      icon: Shield,
      title: "99.9% Uptime SLA",
      description: "Industry-leading reliability with service level agreements to back it up"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock technical support from our certified network engineers"
    },
    {
      icon: Network,
      title: "Scalable Solutions",
      description: "Easily upgrade your bandwidth as your business grows and demands increase"
    },
    {
      icon: Headphones,
      title: "Dedicated Account Manager",
      description: "Personal service with a dedicated contact for all your connectivity needs"
    },
    {
      icon: Award,
      title: "Enterprise Grade",
      description: "Professional-grade infrastructure built for mission-critical applications"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Our Dedicated Connections?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference of truly dedicated internet with features designed for business success
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group p-6 rounded-xl hover:bg-gray-50 transition-all duration-300">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-700 font-medium">Businesses Connected</div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
            <div className="text-4xl font-bold text-green-600 mb-2">99.9%</div>
            <div className="text-gray-700 font-medium">Network Uptime</div>
          </div>
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-2xl">
            <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-700 font-medium">Expert Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
