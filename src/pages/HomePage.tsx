
import { Link } from "react-router-dom";
import CountdownTimer from "../components/CountdownTimer";
import { Calendar, MapPin, Users, Award, Code, ArrowRight, Zap, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

const HomePage = () => {
  // Set a future date for the hackathon (3 months from current date)
  const futureDate = new Date();
  futureDate.setMonth(futureDate.getMonth() + 3);
  const hackathonDate = futureDate.toISOString();

  // Animation state for scroll-based reveals
  const [animateSection, setAnimateSection] = useState({
    info: false,
    tracks: false,
    cta: false
  });

  // References for sections
  const infoRef = useRef<HTMLDivElement>(null);
  const tracksRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Handle scroll animation
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      
      if (infoRef.current && scrollPosition > infoRef.current.offsetTop + 100) {
        setAnimateSection(prev => ({ ...prev, info: true }));
      }
      
      if (tracksRef.current && scrollPosition > tracksRef.current.offsetTop + 100) {
        setAnimateSection(prev => ({ ...prev, tracks: true }));
      }
      
      if (ctaRef.current && scrollPosition > ctaRef.current.offsetTop + 100) {
        setAnimateSection(prev => ({ ...prev, cta: true }));
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount to check initial viewport
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-40 pb-32 bg-hero-pattern bg-cover bg-center relative overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 order-2 md:order-1">
              <div className="text-center md:text-left">
                <h6 className="text-hackathon-orange font-semibold mb-2 animate-fade-up text-lg tracking-wide">
                  <span className="inline-flex items-center">
                    <Zap size={18} className="mr-2" />
                    Build. Innovate. Transform.
                  </span>
                </h6>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                  Tech<span className="text-hackathon-orange">Avishkar</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-hackathon-charcoal/80 max-w-2xl animate-fade-up" style={{ animationDelay: "0.2s" }}>
                  An electrifying hackathon designed for problem solvers, innovators,
                  and tech enthusiasts to create cutting-edge solutions.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center md:justify-start">
                  <Link 
                    to="/register" 
                    className="btn-primary text-center group relative overflow-hidden animate-fade-up animate-pulse-glow" 
                    style={{ animationDelay: "0.3s" }}
                  >
                    <span className="relative z-10 inline-flex items-center">
                      Register Now
                      <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-hackathon-charcoal to-hackathon-charcoal/90 group-hover:opacity-90 transition-opacity"></span>
                  </Link>
                  <Link 
                    to="/about" 
                    className="btn-outline text-center animate-fade-up" 
                    style={{ animationDelay: "0.4s" }}
                  >
                    Learn More
                  </Link>
                </div>
                
                <div className="flex flex-wrap gap-x-8 gap-y-3 justify-center md:justify-start text-sm animate-fade-up" style={{ animationDelay: "0.5s" }}>
                  <div className="flex items-center text-hackathon-charcoal/70">
                    <Calendar size={16} className="mr-2 text-hackathon-orange" />
                    <span>
                      {new Date(hackathonDate).toLocaleDateString(undefined, {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center text-hackathon-charcoal/70">
                    <MapPin size={16} className="mr-2 text-hackathon-orange" />
                    <span>TechAvishkar Campus, Innovation Hub</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-5 order-1 md:order-2">
              <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl p-8 border border-white/50 animate-fade-in animate-float">
                <h2 className="text-2xl font-bold mb-4 text-center">Hackathon Starts In</h2>
                <CountdownTimer targetDate={hackathonDate} />
                <div className="mt-8 text-center">
                  <div className="flex items-center justify-center gap-2 text-hackathon-charcoal/70 text-sm font-medium">
                    <Clock size={16} className="text-hackathon-orange" />
                    <p>
                      {new Date(hackathonDate).toLocaleDateString(undefined, {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-hackathon-orange/10 blur-3xl"></div>
        <div className="absolute top-32 -right-32 w-96 h-96 rounded-full bg-hackathon-teal/10 blur-3xl"></div>
      </section>

      {/* About Section with Cards */}
      <section ref={infoRef} className="py-24 bg-white relative overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className={`inline-flex items-center text-hackathon-orange font-medium px-4 py-1.5 rounded-full bg-hackathon-orange/10 mb-4 ${animateSection.info ? 'animate-fade-up' : 'opacity-0'}`}>
              <Star size={16} className="mr-2" /> Why TechAvishkar?
            </span>
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${animateSection.info ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: "0.1s" }}>
              About TechAvishkar
            </h2>
            <p className={`text-lg text-muted-foreground max-w-2xl mx-auto ${animateSection.info ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: "0.2s" }}>
              TechAvishkar is an intermediate-level hackathon aimed at fostering innovation 
              in AI, IoT, cybersecurity, and software development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className={`bg-white border border-hackathon-almond/50 hover:shadow-lg transition-all hover-reveal ${animateSection.info ? 'animate-fade-up stagger-1' : 'opacity-0'}`}>
              <CardContent className="p-6">
                <Calendar size={36} className="text-hackathon-teal mb-4" />
                <h3 className="text-xl font-semibold mb-2">Date & Time</h3>
                <p className="text-muted-foreground">
                  {new Date(hackathonDate).toLocaleDateString(undefined, {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </CardContent>
            </Card>

            <Card className={`bg-white border border-hackathon-almond/50 hover:shadow-lg transition-all hover-reveal ${animateSection.info ? 'animate-fade-up stagger-2' : 'opacity-0'}`}>
              <CardContent className="p-6">
                <MapPin size={36} className="text-hackathon-orange mb-4" />
                <h3 className="text-xl font-semibold mb-2">Venue</h3>
                <p className="text-muted-foreground">
                  TechAvishkar Campus, Innovation Hub, Tech City
                </p>
              </CardContent>
            </Card>

            <Card className={`bg-white border border-hackathon-almond/50 hover:shadow-lg transition-all hover-reveal ${animateSection.info ? 'animate-fade-up stagger-3' : 'opacity-0'}`}>
              <CardContent className="p-6">
                <Users size={36} className="text-hackathon-teal mb-4" />
                <h3 className="text-xl font-semibold mb-2">Participants</h3>
                <p className="text-muted-foreground">
                  Open to students, professionals, and tech enthusiasts
                </p>
              </CardContent>
            </Card>

            <Card className={`bg-white border border-hackathon-almond/50 hover:shadow-lg transition-all hover-reveal ${animateSection.info ? 'animate-fade-up stagger-4' : 'opacity-0'}`}>
              <CardContent className="p-6">
                <Award size={36} className="text-hackathon-orange mb-4" />
                <h3 className="text-xl font-semibold mb-2">Prizes</h3>
                <p className="text-muted-foreground">
                  Cash rewards, internships, certificates, and networking opportunities
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-hackathon-almond/30 -skew-y-3 -z-10 transform origin-left"></div>
      </section>

      {/* Tracks Preview */}
      <section ref={tracksRef} className="py-24 bg-hackathon-almond/40 relative overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className={`inline-flex items-center text-hackathon-orange font-medium px-4 py-1.5 rounded-full bg-hackathon-orange/10 mb-4 ${animateSection.tracks ? 'animate-fade-up' : 'opacity-0'}`}>
              <Zap size={16} className="mr-2" /> Choose Your Challenge
            </span>
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${animateSection.tracks ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: "0.1s" }}>
              Hackathon Tracks
            </h2>
            <p className={`text-lg text-muted-foreground max-w-3xl mx-auto ${animateSection.tracks ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: "0.2s" }}>
              Choose from multiple exciting technology tracks to showcase your skills and creativity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className={`bg-white rounded-2xl shadow-md p-10 hover:shadow-xl transition-all relative overflow-hidden hover-reveal ${animateSection.tracks ? 'animate-fade-up stagger-1' : 'opacity-0'}`}>
              <div className="absolute top-0 left-0 w-full h-2 bg-hackathon-teal"></div>
              <div className="w-16 h-16 rounded-full bg-hackathon-teal/10 flex items-center justify-center mb-6">
                <Code size={32} className="text-hackathon-teal" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">AI & Machine Learning</h3>
              <p className="text-muted-foreground mb-6">
                Build intelligent solutions using AI algorithms and machine learning models.
              </p>
              <Link 
                to="/tracks" 
                className="inline-flex items-center text-hackathon-teal font-medium group"
              >
                Learn More 
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className={`bg-white rounded-2xl shadow-md p-10 hover:shadow-xl transition-all relative overflow-hidden hover-reveal ${animateSection.tracks ? 'animate-fade-up stagger-2' : 'opacity-0'}`}>
              <div className="absolute top-0 left-0 w-full h-2 bg-hackathon-orange"></div>
              <div className="w-16 h-16 rounded-full bg-hackathon-orange/10 flex items-center justify-center mb-6">
                <Code size={32} className="text-hackathon-orange" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Cybersecurity</h3>
              <p className="text-muted-foreground mb-6">
                Tackle modern security challenges and build innovative security solutions.
              </p>
              <Link 
                to="/tracks" 
                className="inline-flex items-center text-hackathon-orange font-medium group"
              >
                Learn More 
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className={`bg-white rounded-2xl shadow-md p-10 hover:shadow-xl transition-all relative overflow-hidden hover-reveal ${animateSection.tracks ? 'animate-fade-up stagger-3' : 'opacity-0'}`}>
              <div className="absolute top-0 left-0 w-full h-2 bg-hackathon-teal"></div>
              <div className="w-16 h-16 rounded-full bg-hackathon-teal/10 flex items-center justify-center mb-6">
                <Code size={32} className="text-hackathon-teal" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Internet of Things (IoT)</h3>
              <p className="text-muted-foreground mb-6">
                Develop smart, connected systems that interact with the physical world.
              </p>
              <Link 
                to="/tracks" 
                className="inline-flex items-center text-hackathon-teal font-medium group"
              >
                Learn More 
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className={`text-center ${animateSection.tracks ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: "0.6s" }}>
            <Button asChild className="bg-hackathon-charcoal hover:bg-hackathon-charcoal/90 text-hackathon-almond">
              <Link to="/tracks">View All Tracks</Link>
            </Button>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-hackathon-teal/10 blur-3xl"></div>
        <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-hackathon-orange/10 blur-3xl"></div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-28 bg-hackathon-charcoal text-hackathon-almond relative overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <div className={`mb-8 ${animateSection.cta ? 'animate-fade-up' : 'opacity-0'}`}>
              <span className="inline-block px-4 py-1.5 bg-hackathon-almond/10 rounded-full text-hackathon-almond/90 text-sm font-medium mb-6">
                Limited Spots Available
              </span>
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${animateSection.cta ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: "0.1s" }}>
              Ready to Innovate?
            </h2>
            <p className={`text-xl mb-10 text-hackathon-almond/80 ${animateSection.cta ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: "0.2s" }}>
              Join hundreds of developers, designers, and innovators at TechAvishkar!
            </p>
            <Button 
              asChild 
              className={`bg-hackathon-orange hover:bg-hackathon-orange/90 text-white px-8 py-6 text-lg font-semibold rounded-xl ${animateSection.cta ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: "0.3s" }}
            >
              <Link to="/register">Register Now</Link>
            </Button>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-24">
          <svg 
            viewBox="0 0 1440 240" 
            xmlns="http://www.w3.org/2000/svg" 
            className="absolute bottom-0 left-0 w-full"
          >
            <path 
              fill="#EEE5DA" 
              fillOpacity="0.1" 
              d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,149.3C672,149,768,171,864,186.7C960,203,1056,213,1152,202.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
      </section>
    </>
  );
};

export default HomePage;
