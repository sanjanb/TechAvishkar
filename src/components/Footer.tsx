
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Github, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-hackathon-dark text-white pt-16 pb-8">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="font-display text-2xl font-bold mb-4">
              Tech<span className="text-hackathon-teal">Avishkar</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              An electrifying hackathon designed for problem solvers, innovators, 
              and tech enthusiasts! Compete, collaborate, and create cutting-edge solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link to="/tracks" className="text-gray-300 hover:text-white transition-colors">Tracks & Themes</Link>
              </li>
              <li>
                <Link to="/schedule" className="text-gray-300 hover:text-white transition-colors">Schedule</Link>
              </li>
              <li>
                <Link to="/prizes" className="text-gray-300 hover:text-white transition-colors">Prizes</Link>
              </li>
              <li>
                <Link to="/rules" className="text-gray-300 hover:text-white transition-colors">Rules</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail size={20} className="mt-1 flex-shrink-0" />
                <span className="text-gray-300">info@techavishkar.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  TechAvishkar Hackathon Venue, Tech Campus, Innovation City
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© {currentYear} TechAvishkar Hackathon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
