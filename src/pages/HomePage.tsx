
import { Link } from "react-router-dom";
import CountdownTimer from "../components/CountdownTimer";
import { Calendar, MapPin, Users, Award, Code, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

const HomePage = () => {
  // Set a future date for the hackathon (3 months from current date)
  const futureDate = new Date();
  futureDate.setMonth(futureDate.getMonth() + 3);
  const hackathonDate = futureDate.toISOString();

  return (
    <>
      {/* Hero Section */}
      <section className="pt-36 pb-24 bg-hero-pattern bg-cover bg-center relative overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <div className="text-center md:text-left">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
                  Tech<span className="text-hackathon-orange">Avishkar</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-hackathon-charcoal/80 max-w-2xl">
                  An electrifying hackathon designed for problem solvers, innovators,
                  and tech enthusiasts!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center md:justify-start">
                  <Link to="/register" className="btn-primary text-center">
                    Register Now
                  </Link>
                  <Link to="/about" className="btn-outline text-center">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-4 text-center">Hackathon Starts In</h2>
                <CountdownTimer targetDate={hackathonDate} />
                <div className="mt-8 text-center">
                  <p className="text-hackathon-charcoal/70 text-sm font-medium">
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
        
        {/* Decorative elements */}
        <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-hackathon-orange/10 blur-3xl"></div>
        <div className="absolute top-32 -right-32 w-96 h-96 rounded-full bg-hackathon-teal/10 blur-3xl"></div>
      </section>

      {/* About Section with Cards */}
      <section className="py-24 bg-white relative">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About TechAvishkar</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              TechAvishkar is an intermediate-level hackathon aimed at fostering innovation 
              in AI, IoT, cybersecurity, and software development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white border border-hackathon-almond/50 hover:shadow-lg transition-all">
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

            <Card className="bg-white border border-hackathon-almond/50 hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <MapPin size={36} className="text-hackathon-orange mb-4" />
                <h3 className="text-xl font-semibold mb-2">Venue</h3>
                <p className="text-muted-foreground">
                  TechAvishkar Campus, Innovation Hub, Tech City
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-hackathon-almond/50 hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <Users size={36} className="text-hackathon-teal mb-4" />
                <h3 className="text-xl font-semibold mb-2">Participants</h3>
                <p className="text-muted-foreground">
                  Open to students, professionals, and tech enthusiasts
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border border-hackathon-almond/50 hover:shadow-lg transition-all">
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
      </section>

      {/* Tracks Preview */}
      <section className="py-24 bg-hackathon-almond/50 relative">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Hackathon Tracks</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose from multiple exciting technology tracks to showcase your skills and creativity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="bg-white rounded-2xl shadow-md p-10 hover:shadow-xl transition-all relative overflow-hidden">
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

            <div className="bg-white rounded-2xl shadow-md p-10 hover:shadow-xl transition-all relative overflow-hidden">
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

            <div className="bg-white rounded-2xl shadow-md p-10 hover:shadow-xl transition-all relative overflow-hidden">
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

          <div className="text-center">
            <Button asChild className="bg-hackathon-charcoal hover:bg-hackathon-charcoal/90 text-hackathon-almond">
              <Link to="/tracks">View All Tracks</Link>
            </Button>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-hackathon-teal/10 blur-3xl"></div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hackathon-charcoal text-hackathon-almond">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Innovate?</h2>
            <p className="text-xl mb-8 text-hackathon-almond/80">
              Join hundreds of developers, designers, and innovators at TechAvishkar!
            </p>
            <Button asChild className="bg-hackathon-orange hover:bg-hackathon-orange/90 text-white px-8 py-6 text-lg font-semibold rounded-xl">
              <Link to="/register">Register Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
