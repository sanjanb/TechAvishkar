import { Trophy, Briefcase, Award, Link as LinkIcon, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PrizesPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-hackathon-navy to-hackathon-darkPurple text-white py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-gradient"
            >
              Prizes & Benefits
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl max-w-3xl mx-auto"
            >
              Exciting rewards awaiting our talented participants
            </motion.p>
          </div>
        </div>
      </section>

      {/* Prizes Section */}
      <section className="py-16 bg-hackathon-midnight">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold mb-4 text-white"
            >
              Why Participate?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
            >
              Beyond the thrill of building something amazing, TechAvishkar offers 
              incredible prizes, opportunities, and experiences for participants.
            </motion.p>
          </div>

          {/* Cash Prizes */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold mb-8 text-center text-white">Cash Rewards</h3>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div 
                variants={itemVariants}
                className="glass-effect border border-yellow-400/30 rounded-xl p-8 text-center shadow-md transform hover:-translate-y-2 transition-transform hover:shadow-[0_0_20px_rgba(250,204,21,0.4)] duration-300"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-300 mx-auto flex items-center justify-center mb-4 animate-pulse-light">
                  <Trophy size={36} className="text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-white">First Prize</h4>
                <p className="text-3xl font-bold text-hackathon-diamond mb-4">₹50,000</p>
                <p className="text-muted-foreground">
                  For the overall winning team with the most innovative and well-executed solution
                </p>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="glass-effect border border-gray-400/30 rounded-xl p-8 text-center shadow-md transform hover:-translate-y-2 transition-transform hover:shadow-[0_0_20px_rgba(156,163,175,0.4)] duration-300"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-gray-400 to-gray-300 mx-auto flex items-center justify-center mb-4 animate-pulse-light">
                  <Trophy size={36} className="text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-white">Second Prize</h4>
                <p className="text-3xl font-bold text-hackathon-teal mb-4">₹30,000</p>
                <p className="text-muted-foreground">
                  For the first runner-up team with an exceptional project
                </p>
              </motion.div>

              <motion.div 
                variants={itemVariants}
                className="glass-effect border border-orange-400/30 rounded-xl p-8 text-center shadow-md transform hover:-translate-y-2 transition-transform hover:shadow-[0_0_20px_rgba(251,146,60,0.4)] duration-300"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-orange-400 to-orange-300 mx-auto flex items-center justify-center mb-4 animate-pulse-light">
                  <Trophy size={36} className="text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-white">Third Prize</h4>
                <p className="text-3xl font-bold text-hackathon-orange mb-4">₹20,000</p>
                <p className="text-muted-foreground">
                  For the second runner-up team with impressive innovation
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Other Benefits */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              variants={itemVariants}
              className="glass-effect p-8 rounded-xl shadow-md border border-hackathon-purple/30 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_20px_rgba(110,89,165,0.4)]"
            >
              <Briefcase size={32} className="text-hackathon-purple mb-4" />
              <h3 className="text-xl font-bold mb-4 text-white">Internship & Job Opportunities</h3>
              <p className="text-muted-foreground mb-4">
                Top-performing participants will get internship and job offers from our sponsoring 
                companies, providing a launchpad for your career in tech.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 group">
                  <div className="w-4 h-4 rounded-full bg-hackathon-purple flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Paid internships at leading tech companies</span>
                </li>
                <li className="flex items-center space-x-2 group">
                  <div className="w-4 h-4 rounded-full bg-hackathon-purple flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Interview fast-track opportunities</span>
                </li>
                <li className="flex items-center space-x-2 group">
                  <div className="w-4 h-4 rounded-full bg-hackathon-purple flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Resume spotlight to our corporate partners</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="glass-effect p-8 rounded-xl shadow-md border border-hackathon-teal/30 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_20px_rgba(14,165,233,0.4)]"
            >
              <Award size={32} className="text-hackathon-teal mb-4" />
              <h3 className="text-xl font-bold mb-4 text-white">Certificates & Swag Kits</h3>
              <p className="text-muted-foreground mb-4">
                All participants will receive certificates of participation, and winners will 
                get special recognition certificates along with exclusive swag kits.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 group">
                  <div className="w-4 h-4 rounded-full bg-hackathon-teal flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Digital certificates for all participants</span>
                </li>
                <li className="flex items-center space-x-2 group">
                  <div className="w-4 h-4 rounded-full bg-hackathon-teal flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Custom TechAvishkar t-shirts and merchandise</span>
                </li>
                <li className="flex items-center space-x-2 group">
                  <div className="w-4 h-4 rounded-full bg-hackathon-teal flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Premium swag from our sponsors</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="glass-effect p-8 rounded-xl shadow-md border border-hackathon-orange/30 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)]"
            >
              <LinkIcon size={32} className="text-hackathon-orange mb-4" />
              <h3 className="text-xl font-bold mb-4 text-white">Networking Opportunities</h3>
              <p className="text-muted-foreground mb-4">
                Connect with industry experts, mentors, and fellow tech enthusiasts, 
                expanding your professional network and opening doors to collaboration.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 group">
                  <div className="w-4 h-4 rounded-full bg-hackathon-orange flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Mentor sessions with industry leaders</span>
                </li>
                <li className="flex items-center space-x-2 group">
                  <div className="w-4 h-4 rounded-full bg-hackathon-orange flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Networking events during the hackathon</span>
                </li>
                <li className="flex items-center space-x-2 group">
                  <div className="w-4 h-4 rounded-full bg-hackathon-orange flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Access to TechAvishkar alumni community</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="glass-effect p-8 rounded-xl shadow-md border border-hackathon-purple/30 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_20px_rgba(110,89,165,0.4)]"
            >
              <Users size={32} className="text-hackathon-purple mb-4" />
              <h3 className="text-xl font-bold mb-4 text-white">Special Track Prizes</h3>
              <p className="text-muted-foreground mb-4">
                In addition to the main prizes, we offer special awards for the best projects 
                in each track, recognizing excellence across different domains.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2 group">
                  <div className="w-4 h-4 rounded-full bg-hackathon-purple flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Best AI/ML solution: ₹10,000</span>
                </li>
                <li className="flex items-center space-x-2 group">
                  <div className="w-4 h-4 rounded-full bg-hackathon-purple flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Best Cybersecurity innovation: ₹10,000</span>
                </li>
                <li className="flex items-center space-x-2 group">
                  <div className="w-4 h-4 rounded-full bg-hackathon-purple flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300">Best IoT implementation: ₹10,000</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="bg-gradient-to-r from-hackathon-purple to-hackathon-teal rounded-xl text-white p-10 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Ready to Win Big?</h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Don't miss this opportunity to showcase your skills, win amazing prizes, 
              and kick-start your tech career!
            </p>
            <Link to="/register" className="bg-white text-hackathon-purple hover:bg-gray-100 font-semibold rounded-lg py-3 px-8 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg inline-block duration-300 animate-pulse-glow">
              Register Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrizesPage;
