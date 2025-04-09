
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

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
          ? "bg-hackathon-almond/95 backdrop-blur-md shadow-md py-3" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="font-display text-2xl font-bold text-hackathon-charcoal">
              Tech<span className="text-hackathon-orange">Avishkar</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors relative ${
                  isActive(link.path)
                    ? "text-hackathon-charcoal after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-hackathon-orange"
                    : "text-hackathon-charcoal/70 hover:text-hackathon-charcoal"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link 
              to="/register" 
              className="bg-hackathon-charcoal hover:bg-hackathon-charcoal/90 text-hackathon-almond font-medium rounded-lg py-2.5 px-5 transition-all"
            >
              Register Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className="text-hackathon-charcoal" />
            ) : (
              <Menu size={24} className="text-hackathon-charcoal" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-hackathon-almond/95 backdrop-blur-md border-t border-hackathon-charcoal/10">
          <div className="container px-4 sm:px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block font-medium py-2 ${
                  isActive(link.path)
                    ? "text-hackathon-charcoal"
                    : "text-hackathon-charcoal/70 hover:text-hackathon-charcoal"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/register"
              className="block text-center mt-4 bg-hackathon-charcoal hover:bg-hackathon-charcoal/90 text-hackathon-almond font-medium rounded-lg py-2.5 px-5 transition-all"
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
