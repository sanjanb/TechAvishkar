
import { Link } from "react-router-dom";
import { Target, CheckCircle, Users, Clock } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-hackathon-dark text-white py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About TechAvishkar</h1>
            <p className="text-xl max-w-3xl mx-auto">
              An intermediate-level hackathon aimed at fostering innovation in technology
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">What is TechAvishkar?</h2>
              <p className="text-lg mb-6">
                TechAvishkar is an intermediate-level hackathon aimed at fostering innovation in 
                AI, IoT, cybersecurity, and software development. Participants will solve real-world 
                problems while competing for exciting prizes and networking opportunities.
              </p>
              <p className="text-lg mb-6">
                The hackathon provides a platform for tech enthusiasts to collaborate, learn from 
                each other, and push the boundaries of what's possible with technology.
              </p>
              <p className="text-lg">
                Whether you're a student, professional, or just passionate about technology, 
                TechAvishkar offers you the chance to showcase your skills and creativity.
              </p>
            </div>
            <div className="bg-hackathon-light p-8 rounded-xl">
              <div className="flex flex-col space-y-6">
                <div className="flex items-start space-x-4">
                  <Target size={24} className="text-hackathon-purple mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                    <p>
                      To empower the next generation of innovators and problem-solvers by providing 
                      a competitive yet collaborative environment that fosters creativity, 
                      technical excellence, and real-world impact.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <CheckCircle size={24} className="text-hackathon-teal mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Hackathon Structure</h3>
                    <p>
                      TechAvishkar is structured as a two-day event with multiple rounds, 
                      including idea pitching, development phases, and final presentations. 
                      Teams will be evaluated based on innovation, technical implementation, 
                      impact, and presentation quality.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Users size={24} className="text-hackathon-orange mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Eligibility</h3>
                    <p>
                      Open to students, professionals, and tech enthusiasts with intermediate 
                      coding skills. Participants can form teams of 2-4 members or join as individuals 
                      and get matched with a team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Past Hackathons */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Past Hackathons</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white shadow-md rounded-xl overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <Clock size={48} className="text-hackathon-purple opacity-50" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">TechAvishkar 2023</h3>
                  <p className="text-muted-foreground mb-4">
                    Over 500 participants from 50+ colleges came together to build innovative 
                    solutions for healthcare, education, and sustainability challenges.
                  </p>
                  <div className="flex space-x-2">
                    <span className="bg-purple-100 text-hackathon-purple text-xs px-2 py-1 rounded-full">AI/ML</span>
                    <span className="bg-blue-100 text-hackathon-teal text-xs px-2 py-1 rounded-full">FinTech</span>
                    <span className="bg-orange-100 text-hackathon-orange text-xs px-2 py-1 rounded-full">EdTech</span>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-md rounded-xl overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <Clock size={48} className="text-hackathon-teal opacity-50" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">TechAvishkar 2022</h3>
                  <p className="text-muted-foreground mb-4">
                    A virtual hackathon focused on cybersecurity and blockchain technologies, 
                    with 300+ participants from across the country.
                  </p>
                  <div className="flex space-x-2">
                    <span className="bg-purple-100 text-hackathon-purple text-xs px-2 py-1 rounded-full">CyberSec</span>
                    <span className="bg-blue-100 text-hackathon-teal text-xs px-2 py-1 rounded-full">Blockchain</span>
                    <span className="bg-orange-100 text-hackathon-orange text-xs px-2 py-1 rounded-full">Web3</span>
                  </div>
                </div>
              </div>

              <div className="bg-white shadow-md rounded-xl overflow-hidden">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <Clock size={48} className="text-hackathon-orange opacity-50" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">TechAvishkar 2021</h3>
                  <p className="text-muted-foreground mb-4">
                    The inaugural hackathon with a focus on IoT and smart city solutions, 
                    bringing together 200+ enthusiastic developers.
                  </p>
                  <div className="flex space-x-2">
                    <span className="bg-purple-100 text-hackathon-purple text-xs px-2 py-1 rounded-full">IoT</span>
                    <span className="bg-blue-100 text-hackathon-teal text-xs px-2 py-1 rounded-full">SmartCity</span>
                    <span className="bg-orange-100 text-hackathon-orange text-xs px-2 py-1 rounded-full">Hardware</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Join TechAvishkar?</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Be part of an exciting journey of innovation, learning, and networking. 
              Register today and showcase your skills!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register" className="btn-primary">
                Register Now
              </Link>
              <Link to="/tracks" className="btn-outline">
                Explore Tracks
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
