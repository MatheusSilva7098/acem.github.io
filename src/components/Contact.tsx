
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ready to Get Connected?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Contact our team today to discuss your connectivity needs and get a custom quote
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Sales & Support</h4>
                  <p className="text-gray-300">1-800-CONNECT (266-6328)</p>
                  <p className="text-gray-400 text-sm">Available 24/7 for technical support</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-gray-300">sales@yourispcompany.com</p>
                  <p className="text-gray-400 text-sm">Response within 2 hours</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Service Area</h4>
                  <p className="text-gray-300">Metropolitan area and surrounding regions</p>
                  <p className="text-gray-400 text-sm">Custom solutions available nationwide</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Installation Time</h4>
                  <p className="text-gray-300">Standard: 5-10 business days</p>
                  <p className="text-gray-400 text-sm">Emergency installations available</p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Request a Quote</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input 
                    placeholder="Company Name" 
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                  <Input 
                    placeholder="Contact Name" 
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <Input 
                    type="email" 
                    placeholder="Email Address" 
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                  <Input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                  />
                </div>
                <Input 
                  placeholder="Required Bandwidth (e.g., 100 Mbps)" 
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
                <Textarea 
                  placeholder="Tell us about your connectivity needs..."
                  rows={4}
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                  Get Custom Quote
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
