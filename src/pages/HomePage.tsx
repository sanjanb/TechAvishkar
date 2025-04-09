
import { Link } from "react-router-dom";
import CountdownTimer from "../components/CountdownTimer";
import { Calendar, MapPin, Users, Award, Code } from "lucide-react";

const HomePage = () => {
  // Set a future date for the hackathon (3 months from current date)
  const futureDate = new Date();
  futureDate.setMonth(futureDate.getMonth() + 3);
  const hackathonDate = futureDate.toISOString();

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-hero-pattern bg-cover bg-center">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center text-center">
            <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.1s" }}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-hackathon-purple to-hackathon-teal bg-clip-text text-transparent">
                Welcome to TechAvishkar!
              </h1>
            </div>
            <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.3s" }}>
              <p className="text-lg md:text-xl mb-8 max-w-2xl">
                An electrifying hackathon designed for problem solvers, innovators,
                and tech enthusiasts! Compete, collaborate, and create cutting-edge
                solutions with like-minded developers.
              </p>
            </div>
            
            <div className="animate-fade-in opacity-0 flex flex-col sm:flex-row gap-4 mb-12" style={{ animationDelay: "0.5s" }}>
              <Link to="/register" className="btn-primary text-center">
                Register Now
              </Link>
              <Link to="/about" className="btn-outline text-center">
                Learn More
              </Link>
            </div>
            
            <div className="animate-fade-in opacity-0 mb-8" style={{ animationDelay: "0.7s" }}>
              <div className="text-center text-xl font-semibold mb-4">Hackathon Starts In</div>
              <CountdownTimer targetDate={hackathonDate} />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About TechAvishkar</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              TechAvishkar is an intermediate-level hackathon aimed at fostering innovation 
              in AI, IoT, cybersecurity, and software development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-muted">
              <Calendar size={36} className="text-hackathon-purple mb-4" />
              <h3 className="text-xl font-semibold mb-2">Date & Time</h3>
              <p className="text-muted-foreground">
                {new Date(hackathonDate).toLocaleDateString(undefined, {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-muted">
              <MapPin size={36} className="text-hackathon-teal mb-4" />
              <h3 className="text-xl font-semibold mb-2">Venue</h3>
              <p className="text-muted-foreground">
                TechAvishkar Campus, Innovation Hub, Tech City
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-muted">
              <Users size={36} className="text-hackathon-orange mb-4" />
              <h3 className="text-xl font-semibold mb-2">Participants</h3>
              <p className="text-muted-foreground">
                Open to students, professionals, and tech enthusiasts
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-muted">
              <Award size={36} className="text-hackathon-purple mb-4" />
              <h3 className="text-xl font-semibold mb-2">Prizes</h3>
              <p className="text-muted-foreground">
                Cash rewards, internships, certificates, and networking opportunities
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/about" className="btn-outline">
              View More Details
            </Link>
          </div>
        </div>
      </section>

      {/* Tracks Preview */}
      <section className="py-16 bg-hackathon-light">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hackathon Tracks</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose from multiple exciting technology tracks to showcase your skills and creativity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="track-card">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                <Code size={24} className="text-hackathon-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI & Machine Learning</h3>
              <p className="text-muted-foreground mb-4">
                Build intelligent solutions using AI algorithms and machine learning models.
              </p>
              <div className="text-hackathon-purple font-medium">Learn More →</div>
            </div>

            <div className="track-card">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <Code size={24} className="text-hackathon-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cybersecurity</h3>
              <p className="text-muted-foreground mb-4">
                Tackle modern security challenges and build innovative security solutions.
              </p>
              <div className="text-hackathon-teal font-medium">Learn More →</div>
            </div>

            <div className="track-card">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                <Code size={24} className="text-hackathon-orange" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Internet of Things (IoT)</h3>
              <p className="text-muted-foreground mb-4">
                Develop smart, connected systems that interact with the physical world.
              </p>
              <div className="text-hackathon-orange font-medium">Learn More →</div>
            </div>
          </div>

          <div className="text-center">
            <Link to="/tracks" className="btn-outline">
              View All Tracks
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-hackathon-purple to-hackathon-teal text-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Innovate?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of developers, designers, and innovators at TechAvishkar!
          </p>
          <Link to="/register" className="bg-white text-hackathon-purple hover:bg-gray-100 font-semibold rounded-lg py-3 px-8 shadow-md transition-all">
            Register Now
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;
