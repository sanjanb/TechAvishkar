
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Github, Mail, MapPin, ChevronRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-hackathon-charcoal text-hackathon-almond pt-24 pb-8">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <div className="font-display text-3xl font-bold mb-6">
              Tech<span className="text-hackathon-orange">Avishkar</span>
            </div>
            <p className="text-hackathon-almond/80 mb-6 max-w-md text-lg">
              An electrifying hackathon designed for problem solvers, innovators, 
              and tech enthusiasts! Compete, collaborate, and create cutting-edge solutions.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="w-10 h-10 rounded-full bg-hackathon-almond/10 flex items-center justify-center hover:bg-hackathon-almond/20 transition-colors">
                <Facebook size={18} className="text-hackathon-almond" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-hackathon-almond/10 flex items-center justify-center hover:bg-hackathon-almond/20 transition-colors">
                <Instagram size={18} className="text-hackathon-almond" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-hackathon-almond/10 flex items-center justify-center hover:bg-hackathon-almond/20 transition-colors">
                <Twitter size={18} className="text-hackathon-almond" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-hackathon-almond/10 flex items-center justify-center hover:bg-hackathon-almond/20 transition-colors">
                <Github size={18} className="text-hackathon-almond" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-display text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Tracks", path: "/tracks" },
                { name: "Schedule", path: "/schedule" },
                { name: "Prizes", path: "/prizes" },
                { name: "Rules", path: "/rules" },
                { name: "FAQ", path: "/faq" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="inline-flex items-center text-hackathon-almond/70 hover:text-hackathon-almond transition-colors group"
                  >
                    <ChevronRight size={16} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-display text-xl font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail size={20} className="mt-1 flex-shrink-0 text-hackathon-orange" />
                <span className="text-hackathon-almond/80">info@techavishkar.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="mt-1 flex-shrink-0 text-hackathon-orange" />
                <span className="text-hackathon-almond/80">
                  TechAvishkar Hackathon Venue, Tech Campus, Innovation City
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-hackathon-almond/10 text-center text-hackathon-almond/60 text-sm">
          <p>© {currentYear} TechAvishkar Hackathon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
