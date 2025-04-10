
import { Link } from "react-router-dom";
import { Target, CheckCircle, Users, Clock, Award, Zap, ChevronRight, Diamond } from "lucide-react";
import { motion } from "framer-motion";

const AboutPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="pt-24 overflow-hidden bg-hackathon-darkPurple">
      {/* Hero Section with Gradient Background */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-hackathon-navy to-hackathon-darkPurple opacity-90"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-hackathon-diamond/20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-hackathon-lightPurple/20 blur-3xl"></div>
        
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div 
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <span className="inline-flex items-center text-hackathon-diamond font-medium px-4 py-1.5 rounded-full bg-hackathon-diamond/10 mb-4">
              <Diamond size={16} className="mr-2" /> Innovation Starts Here
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">About TechAvishkar</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/80">
              Join the revolution of tech innovation where ideas transform into impactful solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content with Cards Layout */}
      <section className="py-20 relative">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div className="lg:col-span-6" variants={fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 relative">
                <span className="relative z-10">What is TechAvishkar?</span>
                <span className="absolute -z-10 bottom-0 left-0 h-3 w-24 bg-hackathon-diamond/30 rounded"></span>
              </h2>
              <p className="text-lg mb-6 text-white/80">
                TechAvishkar is an intermediate-level hackathon aimed at fostering innovation in 
                AI, IoT, cybersecurity, and software development. Participants will solve real-world 
                problems while competing for exciting prizes and networking opportunities.
              </p>
              <p className="text-lg mb-6 text-white/80">
                The hackathon provides a platform for tech enthusiasts to collaborate, learn from 
                each other, and push the boundaries of what's possible with technology.
              </p>
              <p className="text-lg text-white/80">
                Whether you're a student, professional, or just passionate about technology, 
                TechAvishkar offers you the chance to showcase your skills and creativity.
              </p>
            </motion.div>
            
            <motion.div 
              className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5"
              variants={staggerContainer}
            >
              {[
                {
                  icon: <Target size={28} className="text-hackathon-diamond" />,
                  title: "Our Mission",
                  description: "To empower the next generation of innovators and problem-solvers by providing a competitive yet collaborative environment."
                },
                {
                  icon: <CheckCircle size={28} className="text-hackathon-lightPurple" />,
                  title: "Hackathon Structure",
                  description: "A two-day event with multiple rounds, including idea pitching, development phases, and final presentations."
                },
                {
                  icon: <Users size={28} className="text-hackathon-diamond" />,
                  title: "Eligibility",
                  description: "Open to students, professionals, and tech enthusiasts with intermediate coding skills."
                },
                {
                  icon: <Award size={28} className="text-hackathon-lightPurple" />,
                  title: "Recognition",
                  description: "Winners receive prizes, certificates, mentorship opportunities, and industry recognition."
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="diamond-card hover:border-hackathon-diamond/50 transform hover:-translate-y-1"
                  variants={fadeIn}
                >
                  <div className="w-12 h-12 rounded-full bg-hackathon-navy/50 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-white/70">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Statistics Section */}
          <motion.div 
            className="glass-effect p-10 mb-20 relative overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-hackathon-diamond/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-hackathon-lightPurple/10 blur-3xl"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {[
                { number: "3+", label: "Years Running", color: "text-hackathon-diamond" },
                { number: "1000+", label: "Participants", color: "text-white" },
                { number: "50+", label: "Projects Created", color: "text-hackathon-lightPurple" },
                { number: "$25K", label: "in Prizes", color: "text-hackathon-diamond" }
              ].map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center"
                  variants={fadeIn}
                >
                  <p className={`text-4xl font-bold mb-2 ${stat.color}`}>{stat.number}</p>
                  <p className="text-white/80">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Past Hackathons */}
          <motion.div 
            className="mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="text-center mb-12">
              <motion.span 
                className="inline-flex items-center text-hackathon-diamond font-medium px-4 py-1.5 rounded-full bg-hackathon-diamond/10 mb-4"
                variants={fadeIn}
              >
                <Clock size={16} className="mr-2" /> Previous Editions
              </motion.span>
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-4 text-white"
                variants={fadeIn}
              >
                Past Hackathons
              </motion.h2>
              <motion.p 
                className="text-lg max-w-2xl mx-auto text-white/70"
                variants={fadeIn}
              >
                Look back at our journey of innovation and creativity through the years
              </motion.p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  year: "2023",
                  image: "bg-gradient-to-br from-hackathon-lightPurple/20 to-hackathon-lightPurple/5",
                  title: "TechAvishkar 2023",
                  description: "Over 500 participants from 50+ colleges built innovative solutions for healthcare, education, and sustainability challenges.",
                  tags: ["AI/ML", "FinTech", "EdTech"]
                },
                {
                  year: "2022",
                  image: "bg-gradient-to-br from-hackathon-mediumPurple/20 to-hackathon-mediumPurple/5",
                  title: "TechAvishkar 2022",
                  description: "A virtual hackathon focused on cybersecurity and blockchain technologies, with 300+ participants from across the country.",
                  tags: ["CyberSec", "Blockchain", "Web3"]
                },
                {
                  year: "2021",
                  image: "bg-gradient-to-br from-hackathon-diamond/20 to-hackathon-diamond/5",
                  title: "TechAvishkar 2021",
                  description: "The inaugural hackathon with a focus on IoT and smart city solutions, bringing together 200+ enthusiastic developers.",
                  tags: ["IoT", "SmartCity", "Hardware"]
                }
              ].map((event, index) => (
                <motion.div 
                  key={index}
                  className="diamond-card overflow-hidden transition-all duration-300 hover:border-hackathon-diamond/50 transform hover:-translate-y-1"
                  variants={fadeIn}
                >
                  <div className={`h-48 ${event.image} flex items-center justify-center relative p-6`}>
                    <div className="absolute top-4 left-4 glass-effect px-3 py-1 rounded-full text-sm font-medium">
                      {event.year}
                    </div>
                    <Clock size={54} className="text-white/30" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-white">{event.title}</h3>
                    <p className="text-white/70 mb-4 line-clamp-3">
                      {event.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {event.tags.map((tag, tagIndex) => {
                        const tagColors = [
                          "bg-hackathon-lightPurple/20 text-hackathon-lightPurple",
                          "bg-hackathon-mediumPurple/20 text-hackathon-mediumPurple",
                          "bg-hackathon-diamond/20 text-hackathon-diamond"
                        ];
                        return (
                          <span 
                            key={tagIndex} 
                            className={`${tagColors[tagIndex]} text-xs px-2 py-1 rounded-full`}
                          >
                            {tag}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="bg-hackathon-navy/50 glass-effect p-12 rounded-2xl relative overflow-hidden border border-hackathon-mediumPurple/20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-hackathon-diamond to-hackathon-lightPurple"></div>
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-hackathon-diamond/5 blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-hackathon-lightPurple/5 blur-3xl"></div>
            
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 relative inline-block text-white"
              variants={fadeIn}
            >
              Ready to Join TechAvishkar?
              <span className="absolute -z-10 bottom-0 left-0 h-3 w-full bg-hackathon-diamond/30 rounded"></span>
            </motion.h2>
            <motion.p 
              className="text-lg max-w-2xl mx-auto mb-8 text-white/70"
              variants={fadeIn}
            >
              Be part of an exciting journey of innovation, learning, and networking. 
              Register today and showcase your skills!
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeIn}
            >
              <Link to="/register" className="btn-primary inline-flex items-center justify-center group">
                Register Now
                <ChevronRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/tracks" className="btn-outline inline-flex items-center justify-center">
                Explore Tracks
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
