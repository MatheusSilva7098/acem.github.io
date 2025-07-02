
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wifi, Building2, Calendar, Zap, Shield, Clock } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: "Business Dedicated Lines",
      description: "Reliable, symmetric connections for your office operations",
      speeds: "50 Mbps - 500 Mbps",
      features: ["Guaranteed bandwidth", "SLA included", "Static IP addresses"],
      price: "Starting at $299/month"
    },
    {
      icon: Calendar,
      title: "Event Connectivity",
      description: "Temporary high-speed connections for conferences and events",
      speeds: "100 Mbps - 500 Mbps",
      features: ["Rapid deployment", "On-site support", "Scalable bandwidth"],
      price: "Starting at $150/day"
    },
    {
      icon: Wifi,
      title: "Enterprise Solutions",
      description: "Custom connectivity solutions for large organizations",
      speeds: "Up to 500 Mbps+",
      features: ["Custom configurations", "Redundant connections", "24/7 monitoring"],
      price: "Custom pricing"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our range of dedicated connection solutions designed to meet your specific needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900">{service.title}</CardTitle>
                <p className="text-gray-600">{service.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{service.speeds}</div>
                    <div className="text-2xl font-semibold text-gray-900">{service.price}</div>
                  </div>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 transition-colors">
                    Get Quote
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-xl mb-6 text-blue-100">
            Our team can design a connectivity solution tailored to your specific requirements
          </p>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
            Contact Our Experts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
