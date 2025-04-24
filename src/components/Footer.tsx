import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Github,
  Mail,
  MapPin,
  ChevronRight,
  ExternalLink,
  Diamond,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-hackathon-charcoal text-hackathon-almond pt-24 pb-8 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-5">
            <div className="font-display text-3xl font-bold mb-6 animate-fade-up flex items-center">
              <Diamond className="mr-2 text-hackathon-orange h-7 w-7" />
              Tech<span className="text-hackathon-orange">Avishkar</span>
            </div>
            <p
              className="text-hackathon-almond/80 mb-6 max-w-md text-lg animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              An electrifying hackathon designed for problem solvers,
              innovators, and tech enthusiasts! Compete, collaborate, and create
              cutting-edge solutions.
            </p>
            <div
              className="flex space-x-5 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-hackathon-almond/10 flex items-center justify-center hover:bg-hackathon-almond/20 transition-colors hover:-translate-y-1 duration-300"
              >
                <Facebook size={18} className="text-hackathon-almond" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-hackathon-almond/10 flex items-center justify-center hover:bg-hackathon-almond/20 transition-colors hover:-translate-y-1 duration-300"
              >
                <Instagram size={18} className="text-hackathon-almond" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-hackathon-almond/10 flex items-center justify-center hover:bg-hackathon-almond/20 transition-colors hover:-translate-y-1 duration-300"
              >
                <Twitter size={18} className="text-hackathon-almond" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-hackathon-almond/10 flex items-center justify-center hover:bg-hackathon-almond/20 transition-colors hover:-translate-y-1 duration-300"
              >
                <Github size={18} className="text-hackathon-almond" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-display text-xl font-semibold mb-6 animate-fade-up">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Tracks", path: "/tracks" },
                { name: "Schedule", path: "/schedule" },
                { name: "Prizes", path: "/prizes" },
                { name: "Rules", path: "/rules" },
                { name: "FAQ", path: "/faq" },
              ].map((link, index) => (
                <li
                  key={link.name}
                  className="animate-fade-up"
                  style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                >
                  <Link
                    to={link.path}
                    className="inline-flex items-center text-hackathon-almond/70 hover:text-hackathon-almond transition-colors group"
                  >
                    <ChevronRight
                      size={16}
                      className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 duration-300"
                    />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-display text-xl font-semibold mb-6 animate-fade-up">
              Contact Us
            </h4>
            <div className="space-y-4">
              <div
                className="flex items-start space-x-3 animate-fade-up"
                style={{ animationDelay: "0.1s" }}
              >
                <Mail
                  size={20}
                  className="mt-1 flex-shrink-0 text-hackathon-orange"
                />
                <span className="text-hackathon-almond/80 hover:text-hackathon-almond transition-colors">
                  <a
                    href="mailto:info@techavishkar.com"
                    className="inline-flex items-center group"
                  >
                    sanjanacharaya1234@gmail.com
                    <ExternalLink
                      size={14}
                      className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </a>
                </span>
              </div>
              <div
                className="flex items-start space-x-3 animate-fade-up"
                style={{ animationDelay: "0.2s" }}
              >
                <MapPin
                  size={20}
                  className="mt-1 flex-shrink-0 text-hackathon-orange"
                />
                <span className="text-hackathon-almond/80">
                  ATME College of Engineering Campus, Mellahalli, Mysuru
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-hackathon-almond/10 text-center text-hackathon-almond/60 text-sm animate-fade-up">
          <p>© {currentYear} TechAvishkar Hackathon. All rights reserved.</p>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-hackathon-orange/5 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-hackathon-teal/5 blur-3xl"></div>
    </footer>
  );
};

export default Footer;
