import { Trophy, Briefcase, Award, Link, Users } from "lucide-react";

const PrizesPage = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-hackathon-dark text-white py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Prizes & Benefits</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Exciting rewards awaiting our talented participants
            </p>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Participate?</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Beyond the thrill of building something amazing, TechAvishkar offers 
              incredible prizes, opportunities, and experiences for participants.
            </p>
          </div>

          {/* Cash Prizes */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 text-center">Cash Rewards</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-b from-yellow-50 to-yellow-100 rounded-xl p-8 text-center shadow-md border border-yellow-200 transform hover:-translate-y-1 transition-transform">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-300 mx-auto flex items-center justify-center mb-4">
                  <Trophy size={36} className="text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2">First Prize</h4>
                <p className="text-3xl font-bold text-hackathon-purple mb-4">₹50,000</p>
                <p className="text-muted-foreground">
                  For the overall winning team with the most innovative and well-executed solution
                </p>
              </div>

              <div className="bg-gradient-to-b from-gray-50 to-gray-100 rounded-xl p-8 text-center shadow-md border border-gray-200 transform hover:-translate-y-1 transition-transform">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-gray-400 to-gray-300 mx-auto flex items-center justify-center mb-4">
                  <Trophy size={36} className="text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2">Second Prize</h4>
                <p className="text-3xl font-bold text-hackathon-teal mb-4">₹30,000</p>
                <p className="text-muted-foreground">
                  For the first runner-up team with an exceptional project
                </p>
              </div>

              <div className="bg-gradient-to-b from-orange-50 to-orange-100 rounded-xl p-8 text-center shadow-md border border-orange-200 transform hover:-translate-y-1 transition-transform">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-orange-400 to-orange-300 mx-auto flex items-center justify-center mb-4">
                  <Trophy size={36} className="text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2">Third Prize</h4>
                <p className="text-3xl font-bold text-hackathon-orange mb-4">₹20,000</p>
                <p className="text-muted-foreground">
                  For the second runner-up team with impressive innovation
                </p>
              </div>
            </div>
          </div>

          {/* Other Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <div className="bg-white p-8 rounded-xl shadow-md border border-muted">
              <Briefcase size={32} className="text-hackathon-purple mb-4" />
              <h3 className="text-xl font-bold mb-4">Internship & Job Opportunities</h3>
              <p className="text-muted-foreground mb-4">
                Top-performing participants will get internship and job offers from our sponsoring 
                companies, providing a launchpad for your career in tech.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-hackathon-purple flex-shrink-0"></div>
                  <span>Paid internships at leading tech companies</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-hackathon-purple flex-shrink-0"></div>
                  <span>Interview fast-track opportunities</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-hackathon-purple flex-shrink-0"></div>
                  <span>Resume spotlight to our corporate partners</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-muted">
              <Award size={32} className="text-hackathon-teal mb-4" />
              <h3 className="text-xl font-bold mb-4">Certificates & Swag Kits</h3>
              <p className="text-muted-foreground mb-4">
                All participants will receive certificates of participation, and winners will 
                get special recognition certificates along with exclusive swag kits.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-hackathon-teal flex-shrink-0"></div>
                  <span>Digital certificates for all participants</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-hackathon-teal flex-shrink-0"></div>
                  <span>Custom TechAvishkar t-shirts and merchandise</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-hackathon-teal flex-shrink-0"></div>
                  <span>Premium swag from our sponsors</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-muted">
              <Link size={32} className="text-hackathon-orange mb-4" />
              <h3 className="text-xl font-bold mb-4">Networking Opportunities</h3>
              <p className="text-muted-foreground mb-4">
                Connect with industry experts, mentors, and fellow tech enthusiasts, 
                expanding your professional network and opening doors to collaboration.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-hackathon-orange flex-shrink-0"></div>
                  <span>Mentor sessions with industry leaders</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-hackathon-orange flex-shrink-0"></div>
                  <span>Networking events during the hackathon</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-hackathon-orange flex-shrink-0"></div>
                  <span>Access to TechAvishkar alumni community</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-muted">
              <Users size={32} className="text-hackathon-purple mb-4" />
              <h3 className="text-xl font-bold mb-4">Special Track Prizes</h3>
              <p className="text-muted-foreground mb-4">
                In addition to the main prizes, we offer special awards for the best projects 
                in each track, recognizing excellence across different domains.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-hackathon-purple flex-shrink-0"></div>
                  <span>Best AI/ML solution: ₹10,000</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-hackathon-purple flex-shrink-0"></div>
                  <span>Best Cybersecurity innovation: ₹10,000</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-hackathon-purple flex-shrink-0"></div>
                  <span>Best IoT implementation: ₹10,000</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-hackathon-purple to-hackathon-teal rounded-xl text-white p-10 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Win Big?</h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Don't miss this opportunity to showcase your skills, win amazing prizes, 
              and kick-start your tech career!
            </p>
            <a href="/register" className="bg-white text-hackathon-purple hover:bg-gray-100 font-semibold rounded-lg py-3 px-8 shadow-md transition-all inline-block">
              Register Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrizesPage;
