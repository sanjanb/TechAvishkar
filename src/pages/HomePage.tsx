import { Link } from "react-router-dom";
import CountdownTimer from "../components/CountdownTimer";
import {
  Calendar,
  MapPin,
  Users,
  Award,
  Code,
  ArrowRight,
  Zap,
  Star,
  Clock,
  Diamond,
  Sparkles,
  GraduationCap,
  Network,
  Globe,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

const HomePage = () => {
  // Set a future date for the hackathon (3 months from current date)
  const futureDate = new Date("2025-05-15T11:00:00Z");
  // futureDate.setMonth(futureDate.getMonth() + 3);
  const hackathonDate = futureDate.toISOString();

  // Animation state for scroll-based reveals
  const [animateSection, setAnimateSection] = useState({
    info: false,
    tracks: false,
    cta: false,
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
        setAnimateSection((prev) => ({ ...prev, info: true }));
      }

      if (
        tracksRef.current &&
        scrollPosition > tracksRef.current.offsetTop + 100
      ) {
        setAnimateSection((prev) => ({ ...prev, tracks: true }));
      }

      if (ctaRef.current && scrollPosition > ctaRef.current.offsetTop + 100) {
        setAnimateSection((prev) => ({ ...prev, cta: true }));
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once on mount to check initial viewport
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-24 sm:pt-40 sm:pb-32 overflow-hidden bg-gradient-to-b from-hackathon-navy to-hackathon-darkPurple">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-hackathon-mediumPurple/20 blur-3xl"></div>
          <div className="absolute top-32 -right-32 w-96 h-96 rounded-full bg-hackathon-diamond/10 blur-3xl"></div>

          {/* Geometric shapes */}
          <div className="absolute top-[20%] left-[10%] w-12 h-12 bg-hackathon-diamond/30 rounded-full animate-float"></div>
          <div
            className="absolute top-[30%] right-[15%] w-20 h-20 bg-hackathon-lightPurple/20 rounded-full animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-[25%] left-[20%] w-16 h-16 bg-hackathon-mediumPurple/30 rounded-full animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 order-2 md:order-1">
              <div className="text-center md:text-left">
                <h6 className="text-hackathon-diamond font-semibold mb-2 animate-fade-up text-lg tracking-wide">
                  <span className="inline-flex items-center">
                    <Sparkles size={18} className="mr-2" />
                    Grow up to Learning
                  </span>
                </h6>
                <h1
                  className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up text-white"
                  style={{ animationDelay: "0.1s" }}
                >
                  Tech<span className="text-hackathon-diamond">Avishkar</span>
                </h1>
                <p
                  className="text-xl md:text-2xl mb-8 text-white/80 max-w-2xl animate-fade-up"
                  style={{ animationDelay: "0.2s" }}
                >
                  Join our electrifying hackathon designed for problem solvers,
                  innovators, and tech enthusiasts to create cutting-edge
                  solutions.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center md:justify-start">
                  <Link
                    to="/register"
                    className="btn-primary text-center group relative overflow-hidden animate-fade-up animate-pulse-glow"
                    style={{ animationDelay: "0.3s" }}
                  >
                    <span className="relative z-10 inline-flex items-center">
                      Register Now
                      <ArrowRight
                        size={18}
                        className="ml-2 transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                  <Link
                    to="/about"
                    className="btn-outline text-center animate-fade-up"
                    style={{ animationDelay: "0.4s" }}
                  >
                    Learn More
                  </Link>
                </div>

                <div
                  className="flex flex-wrap gap-x-8 gap-y-3 justify-center md:justify-start text-sm animate-fade-up"
                  style={{ animationDelay: "0.5s" }}
                >
                  <div className="flex items-center text-white/70">
                    <Calendar
                      size={16}
                      className="mr-2 text-hackathon-diamond"
                    />
                    <span>
                      {new Date(hackathonDate).toLocaleDateString(undefined, {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center text-white/70">
                    <MapPin size={16} className="mr-2 text-hackathon-diamond" />
                    <span>TechAvishkar Campus, Innovation Hub</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 order-1 md:order-2">
              <div className="glass-effect shadow-xl p-8 border border-hackathon-mediumPurple/30 animate-fade-in animate-float max-w-md mx-auto">
                <div className="flex items-center justify-center mb-4">
                  <Diamond size={28} className="text-hackathon-diamond mr-2" />
                  <h2 className="text-2xl font-bold text-white">
                    Hackathon Countdown
                  </h2>
                </div>
                <CountdownTimer targetDate={hackathonDate} />
                <div className="mt-8 text-center">
                  <div className="flex items-center justify-center gap-2 text-white/70 text-sm font-medium">
                    <Clock size={16} className="text-hackathon-diamond" />
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

          {/* Categories/Tracks quick preview */}
          <div className="mt-12 sm:mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
            {[
              { icon: <Code size={24} />, name: "Web Dev" },
              { icon: <Network size={24} />, name: "AI/ML" },
              { icon: <Globe size={24} />, name: "IoT" },
              { icon: <TrendingUp size={24} />, name: "Blockchain" },
              { icon: <GraduationCap size={24} />, name: "EdTech" },
              { icon: <Sparkles size={24} />, name: "Open" },
            ].map((category, index) => (
              <div
                key={index}
                className="glass-effect flex flex-col items-center justify-center py-4 px-2 sm:px-4 text-center animate-fade-up rounded-lg"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-full bg-hackathon-mediumPurple/30 flex items-center justify-center mb-2 text-hackathon-diamond">
                  {category.icon}
                </div>
                <span className="text-xs sm:text-sm font-medium text-white">
                  {category.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Cards */}
      <section
        ref={infoRef}
        className="py-24 bg-hackathon-navy relative overflow-hidden"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span
              className={`inline-flex items-center text-hackathon-diamond font-medium px-4 py-1.5 rounded-full bg-hackathon-diamond/10 mb-4 ${
                animateSection.info ? "animate-fade-up" : "opacity-0"
              }`}
            >
              <Star size={16} className="mr-2" /> Why TechAvishkar?
            </span>
            <h2
              className={`text-4xl md:text-5xl font-bold mb-4 text-white ${
                animateSection.info ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.1s" }}
            >
              About TechAvishkar
            </h2>
            <p
              className={`text-lg text-white/70 max-w-2xl mx-auto ${
                animateSection.info ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.2s" }}
            >
              TechAvishkar is an intermediate-level hackathon aimed at fostering
              innovation in AI, IoT, cybersecurity, and software development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card
              className={`diamond-card ${
                animateSection.info ? "animate-fade-up stagger-1" : "opacity-0"
              }`}
            >
              <CardContent className="p-6">
                <Calendar size={36} className="text-hackathon-diamond mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Date & Time
                </h3>
                <p className="text-white/70">
                  {new Date(hackathonDate).toLocaleDateString(undefined, {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </CardContent>
            </Card>

            <Card
              className={`diamond-card ${
                animateSection.info ? "animate-fade-up stagger-2" : "opacity-0"
              }`}
            >
              <CardContent className="p-6">
                <MapPin size={36} className="text-hackathon-diamond mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">Venue</h3>
                <p className="text-white/70">
                  TechAvishkar Campus, Innovation Hub, Tech City
                </p>
              </CardContent>
            </Card>

            <Card
              className={`diamond-card ${
                animateSection.info ? "animate-fade-up stagger-3" : "opacity-0"
              }`}
            >
              <CardContent className="p-6">
                <Users size={36} className="text-hackathon-diamond mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Participants
                </h3>
                <p className="text-white/70">
                  Open to students, professionals, and tech enthusiasts
                </p>
              </CardContent>
            </Card>

            <Card
              className={`diamond-card ${
                animateSection.info ? "animate-fade-up stagger-4" : "opacity-0"
              }`}
            >
              <CardContent className="p-6">
                <Award size={36} className="text-hackathon-diamond mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">
                  Prizes
                </h3>
                <p className="text-white/70">
                  Cash rewards, internships, certificates, and networking
                  opportunities
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-32 bg-hackathon-darkPurple clip-path-diagonal -z-10"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-hackathon-darkPurple clip-path-wave -z-10 transform rotate-180"></div>
      </section>

      {/* Tracks Preview */}
      <section
        ref={tracksRef}
        className="py-24 bg-hackathon-darkPurple relative overflow-hidden"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span
              className={`inline-flex items-center text-hackathon-diamond font-medium px-4 py-1.5 rounded-full bg-hackathon-diamond/10 mb-4 ${
                animateSection.tracks ? "animate-fade-up" : "opacity-0"
              }`}
            >
              <Zap size={16} className="mr-2" /> Choose Your Challenge
            </span>
            <h2
              className={`text-4xl md:text-5xl font-bold mb-4 text-white ${
                animateSection.tracks ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.1s" }}
            >
              Hackathon Tracks
            </h2>
            <p
              className={`text-lg text-white/70 max-w-3xl mx-auto ${
                animateSection.tracks ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.2s" }}
            >
              Choose from multiple exciting technology tracks to showcase your
              skills and creativity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
            <div
              className={`diamond-card relative overflow-hidden ${
                animateSection.tracks
                  ? "animate-fade-up stagger-1"
                  : "opacity-0"
              }`}
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-hackathon-diamond"></div>
              <div className="w-16 h-16 rounded-full bg-hackathon-diamond/10 flex items-center justify-center mb-6">
                <Code size={32} className="text-hackathon-diamond" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                AI & Machine Learning
              </h3>
              <p className="text-white/70 mb-6">
                Build intelligent solutions using AI algorithms and machine
                learning models.
              </p>
              <div className="bg-hackathon-mediumPurple/30 p-3 rounded-lg mb-6">
                <p className="text-xs font-semibold text-hackathon-diamond mb-1">
                  PRIZE POOL
                </p>
                <p className="text-xl font-bold text-white">$5,000</p>
              </div>
              <Link
                to="/tracks"
                className="inline-flex items-center text-hackathon-diamond font-medium group"
              >
                Learn More
                <ArrowRight
                  size={18}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div
              className={`diamond-card relative overflow-hidden ${
                animateSection.tracks
                  ? "animate-fade-up stagger-2"
                  : "opacity-0"
              }`}
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-hackathon-diamond"></div>
              <div className="w-16 h-16 rounded-full bg-hackathon-diamond/10 flex items-center justify-center mb-6">
                <Code size={32} className="text-hackathon-diamond" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Cybersecurity
              </h3>
              <p className="text-white/70 mb-6">
                Tackle modern security challenges and build innovative security
                solutions.
              </p>
              <div className="bg-hackathon-mediumPurple/30 p-3 rounded-lg mb-6">
                <p className="text-xs font-semibold text-hackathon-diamond mb-1">
                  PRIZE POOL
                </p>
                <p className="text-xl font-bold text-white">$4,500</p>
              </div>
              <Link
                to="/tracks"
                className="inline-flex items-center text-hackathon-diamond font-medium group"
              >
                Learn More
                <ArrowRight
                  size={18}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>

            <div
              className={`diamond-card relative overflow-hidden ${
                animateSection.tracks
                  ? "animate-fade-up stagger-3"
                  : "opacity-0"
              }`}
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-hackathon-diamond"></div>
              <div className="w-16 h-16 rounded-full bg-hackathon-diamond/10 flex items-center justify-center mb-6">
                <Code size={32} className="text-hackathon-diamond" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Internet of Things (IoT)
              </h3>
              <p className="text-white/70 mb-6">
                Develop smart, connected systems that interact with the physical
                world.
              </p>
              <div className="bg-hackathon-mediumPurple/30 p-3 rounded-lg mb-6">
                <p className="text-xs font-semibold text-hackathon-diamond mb-1">
                  PRIZE POOL
                </p>
                <p className="text-xl font-bold text-white">$4,000</p>
              </div>
              <Link
                to="/tracks"
                className="inline-flex items-center text-hackathon-diamond font-medium group"
              >
                Learn More
                <ArrowRight
                  size={18}
                  className="ml-2 transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          <div
            className={`text-center ${
              animateSection.tracks ? "animate-fade-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              asChild
              className="bg-hackathon-diamond hover:bg-hackathon-diamond/90 text-hackathon-darkPurple"
            >
              <Link to="/tracks">View All Tracks</Link>
            </Button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-hackathon-mediumPurple/10 blur-3xl"></div>
        <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-hackathon-diamond/10 blur-3xl"></div>
      </section>

      {/* CTA Section - Kept as is per request */}
      <section
        ref={ctaRef}
        className="py-28 bg-hackathon-charcoal text-hackathon-almond relative overflow-hidden"
      >
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <div
              className={`mb-8 ${
                animateSection.cta ? "animate-fade-up" : "opacity-0"
              }`}
            >
              <span className="inline-block px-4 py-1.5 bg-hackathon-almond/10 rounded-full text-hackathon-almond/90 text-sm font-medium mb-6">
                Limited Spots Available
              </span>
            </div>
            <h2
              className={`text-4xl md:text-5xl font-bold mb-6 ${
                animateSection.cta ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.1s" }}
            >
              Ready to Innovate?
            </h2>
            <p
              className={`text-xl mb-10 text-hackathon-almond/80 ${
                animateSection.cta ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: "0.2s" }}
            >
              Join hundreds of developers, designers, and innovators at
              TechAvishkar!
            </p>
            <Button
              asChild
              className={`bg-hackathon-orange hover:bg-hackathon-orange/90 text-white px-8 py-6 text-lg font-semibold rounded-xl ${
                animateSection.cta ? "animate-fade-up" : "opacity-0"
              }`}
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
