
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-hackathon-almond">
      <div className="text-center p-8">
        <h1 className="text-6xl md:text-8xl font-bold text-hackathon-charcoal mb-6">404</h1>
        <p className="text-2xl text-hackathon-charcoal mb-8">Oops! Page not found</p>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          We couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 bg-hackathon-charcoal text-hackathon-almond hover:bg-hackathon-charcoal/90 transition-colors rounded-lg px-6 py-3"
        >
          <ArrowLeft size={18} />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
