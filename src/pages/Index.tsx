
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <div id="services">
        <Services />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="contact">
        <Contact />
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 ConnectPro ISP. All rights reserved. | 
            <span className="ml-2">Dedicated connections for serious business.</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
