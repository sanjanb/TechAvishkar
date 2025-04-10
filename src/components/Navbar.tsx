
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Diamond } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Tracks", path: "/tracks" },
    { name: "Schedule", path: "/schedule" },
    { name: "Prizes", path: "/prizes" },
    { name: "Sponsors", path: "/sponsors" },
    { name: "Rules", path: "/rules" },
    { name: "FAQ", path: "/faq" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-hackathon-navy/95 backdrop-blur-md shadow-lg py-3" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <Diamond className="h-8 w-8 text-hackathon-diamond mr-2" />
              <div className="font-display text-2xl font-bold text-white">
                Tech<span className="text-hackathon-diamond">Avishkar</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors relative group py-2 ${
                  isActive(link.path)
                    ? "text-white after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-hackathon-diamond"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-hackathon-diamond scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link 
              to="/register" 
              className="relative inline-flex items-center bg-hackathon-diamond hover:bg-hackathon-diamond/90 text-hackathon-navy font-medium rounded-lg py-2.5 px-5 transition-all overflow-hidden group animate-pulse-glow"
            >
              <span className="relative z-10">Register Now</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className="text-white animate-fade-in" />
            ) : (
              <Menu size={24} className="text-white animate-fade-in" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-hackathon-navy/95 backdrop-blur-md border-t border-hackathon-mediumPurple/20 animate-fade-in mobile-menu-height overflow-y-auto">
          <div className="container px-4 sm:px-6 py-6 space-y-4">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block font-medium py-2 animate-fade-up`}
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setIsOpen(false)}
              >
                <div className={`flex items-center ${
                  isActive(link.path)
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`}>
                  <ChevronDown size={16} className={`mr-2 transition-transform duration-300 ${isActive(link.path) ? "rotate-180 text-hackathon-diamond" : ""}`} />
                  {link.name}
                </div>
              </Link>
            ))}
            <Link
              to="/register"
              className="block text-center mt-4 bg-hackathon-diamond hover:bg-hackathon-diamond/90 text-hackathon-navy font-medium rounded-lg py-2.5 px-5 transition-all animate-fade-up"
              style={{ animationDelay: "0.4s" }}
              onClick={() => setIsOpen(false)}
            >
              Register Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
