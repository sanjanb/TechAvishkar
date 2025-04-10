
import { Building, ExternalLink, Diamond, Award, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SponsorsPage = () => {
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

  const diamondSponsors = [
    {
      name: "TechCorp",
      logo: "https://placehold.co/200x100/2B2046/FFA94D?text=TechCorp&font=montserrat",
      description: "Leading technology corporation specializing in AI and cloud solutions.",
      website: "https://example.com/techcorp"
    },
    {
      name: "InnovateSoft",
      logo: "https://placehold.co/200x100/2B2046/FFA94D?text=InnovateSoft&font=montserrat",
      description: "Pioneering software development company focused on cutting-edge applications.",
      website: "https://example.com/innovatesoft"
    },
  ];

  const platinumSponsors = [
    {
      name: "DataDynamo",
      logo: "https://placehold.co/180x90/231C3E/9B6CD0?text=DataDynamo&font=montserrat",
      description: "Big data analytics and visualization platform.",
      website: "https://example.com/datadynamo"
    },
    {
      name: "CyberShield",
      logo: "https://placehold.co/180x90/231C3E/9B6CD0?text=CyberShield&font=montserrat",
      description: "Premier cybersecurity solutions provider.",
      website: "https://example.com/cybershield"
    },
    {
      name: "CloudNexus",
      logo: "https://placehold.co/180x90/231C3E/9B6CD0?text=CloudNexus&font=montserrat",
      description: "Enterprise cloud infrastructure and services.",
      website: "https://example.com/cloudnexus"
    },
  ];

  const goldSponsors = [
    {
      name: "DevForge",
      logo: "https://placehold.co/150x75/12101F/57387F?text=DevForge&font=montserrat",
      website: "https://example.com/devforge"
    },
    {
      name: "TechStart",
      logo: "https://placehold.co/150x75/12101F/57387F?text=TechStart&font=montserrat",
      website: "https://example.com/techstart"
    },
    {
      name: "InnoVenture",
      logo: "https://placehold.co/150x75/12101F/57387F?text=InnoVenture&font=montserrat",
      website: "https://example.com/innoventure"
    },
    {
      name: "CodeCraft",
      logo: "https://placehold.co/150x75/12101F/57387F?text=CodeCraft&font=montserrat",
      website: "https://example.com/codecraft"
    },
  ];

  const communityPartners = [
    {
      name: "TechHub",
      logo: "https://placehold.co/120x60/1E1A3C/FFFFFF?text=TechHub&font=montserrat",
      website: "https://example.com/techhub"
    },
    {
      name: "DevNetwork",
      logo: "https://placehold.co/120x60/1E1A3C/FFFFFF?text=DevNetwork&font=montserrat",
      website: "https://example.com/devnetwork"
    },
    {
      name: "CodeCommunity",
      logo: "https://placehold.co/120x60/1E1A3C/FFFFFF?text=CodeCommunity&font=montserrat",
      website: "https://example.com/codecommunity"
    },
    {
      name: "InnoSpace",
      logo: "https://placehold.co/120x60/1E1A3C/FFFFFF?text=InnoSpace&font=montserrat",
      website: "https://example.com/innospace"
    },
    {
      name: "TechLearn",
      logo: "https://placehold.co/120x60/1E1A3C/FFFFFF?text=TechLearn&font=montserrat",
      website: "https://example.com/techlearn"
    },
    {
      name: "DevMentors",
      logo: "https://placehold.co/120x60/1E1A3C/FFFFFF?text=DevMentors&font=montserrat",
      website: "https://example.com/devmentors"
    },
  ];

  return (
    <div className="pt-24 pb-16 overflow-hidden bg-hackathon-darkPurple">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
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
              <Building size={16} className="mr-2" /> Our Valuable Partners
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Sponsors & Partners</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/80">
              Meet the organizations that make TechAvishkar possible through their generous support
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sponsors Tiers */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          {/* Diamond Sponsors */}
          <motion.div 
            className="mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="text-center mb-12">
              <motion.div className="flex items-center justify-center mb-6" variants={fadeIn}>
                <div className="h-0.5 w-12 bg-hackathon-diamond"></div>
                <Diamond size={34} className="text-hackathon-diamond mx-4" />
                <div className="h-0.5 w-12 bg-hackathon-diamond"></div>
              </motion.div>
              <motion.h2 className="text-3xl md:text-4xl font-bold mb-2 text-white" variants={fadeIn}>
                Diamond Sponsors
              </motion.h2>
              <motion.p className="text-lg text-white/70 max-w-2xl mx-auto" variants={fadeIn}>
                Our premium partners who make the grand prizes possible
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {diamondSponsors.map((sponsor, index) => (
                <motion.div 
                  key={index}
                  className="diamond-card p-8 border-2 border-hackathon-diamond/30 hover:border-hackathon-diamond/70 animate-pulse-glow"
                  variants={fadeIn}
                >
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="w-48 h-24 flex items-center justify-center mb-4 md:mb-0">
                      <img 
                        src={sponsor.logo} 
                        alt={`${sponsor.name} logo`}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl font-bold mb-2 text-hackathon-diamond">{sponsor.name}</h3>
                      <p className="text-white/70 mb-4">{sponsor.description}</p>
                      <a 
                        href={sponsor.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-hackathon-diamond hover:text-hackathon-diamond/80 font-medium"
                      >
                        Visit Website <ExternalLink size={14} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Platinum Sponsors */}
          <motion.div 
            className="mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="text-center mb-12">
              <motion.div className="flex items-center justify-center mb-6" variants={fadeIn}>
                <div className="h-0.5 w-12 bg-hackathon-lightPurple"></div>
                <Award size={30} className="text-hackathon-lightPurple mx-4" />
                <div className="h-0.5 w-12 bg-hackathon-lightPurple"></div>
              </motion.div>
              <motion.h2 className="text-3xl font-bold mb-2 text-white" variants={fadeIn}>
                Platinum Sponsors
              </motion.h2>
              <motion.p className="text-lg text-white/70 max-w-2xl mx-auto" variants={fadeIn}>
                Key supporters who help us create an exceptional hackathon experience
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {platinumSponsors.map((sponsor, index) => (
                <motion.div 
                  key={index}
                  className="diamond-card p-6 border border-hackathon-lightPurple/30 hover:border-hackathon-lightPurple/70 text-center"
                  variants={fadeIn}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-40 h-20 flex items-center justify-center mb-4">
                      <img 
                        src={sponsor.logo} 
                        alt={`${sponsor.name} logo`}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-hackathon-lightPurple">{sponsor.name}</h3>
                    <p className="text-white/70 mb-4 text-sm">{sponsor.description}</p>
                    <a 
                      href={sponsor.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-hackathon-lightPurple hover:text-hackathon-lightPurple/80 text-sm font-medium"
                    >
                      Visit Website <ExternalLink size={14} className="ml-1" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Gold Sponsors */}
          <motion.div 
            className="mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="text-center mb-10">
              <motion.h2 className="text-2xl font-bold mb-2 text-white" variants={fadeIn}>
                Gold Sponsors
              </motion.h2>
              <motion.p className="text-base text-white/70 max-w-2xl mx-auto" variants={fadeIn}>
                Valuable contributors to our hackathon's success
              </motion.p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {goldSponsors.map((sponsor, index) => (
                <motion.a 
                  key={index}
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="diamond-card p-4 flex items-center justify-center hover:border-hackathon-mediumPurple/50"
                  variants={fadeIn}
                >
                  <img 
                    src={sponsor.logo} 
                    alt={`${sponsor.name} logo`}
                    className="max-w-full max-h-16 object-contain"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Community Partners */}
          <motion.div 
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="text-center mb-10">
              <motion.h2 className="text-2xl font-bold mb-2 text-white" variants={fadeIn}>
                Community Partners
              </motion.h2>
              <motion.p className="text-base text-white/70 max-w-2xl mx-auto" variants={fadeIn}>
                Organizations that help spread the word and build our community
              </motion.p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {communityPartners.map((partner, index) => (
                <motion.a 
                  key={index}
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="diamond-card p-3 flex items-center justify-center hover:border-white/30"
                  variants={fadeIn}
                >
                  <img 
                    src={partner.logo} 
                    alt={`${partner.name} logo`}
                    className="max-w-full max-h-12 object-contain"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Become a Sponsor CTA */}
          <motion.div 
            className="glass-effect p-10 rounded-2xl relative overflow-hidden border border-hackathon-mediumPurple/20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-hackathon-diamond to-hackathon-lightPurple"></div>
            
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <motion.div className="md:max-w-xl" variants={fadeIn}>
                <h3 className="text-2xl font-bold mb-2 text-white">Become a Sponsor</h3>
                <p className="text-white/70">
                  Interested in sponsoring TechAvishkar and connecting with top tech talent? 
                  We offer various sponsorship packages to suit your organization's needs and goals.
                </p>
              </motion.div>
              
              <motion.div variants={fadeIn}>
                <Link to="/contact" className="btn-primary inline-flex items-center justify-center group whitespace-nowrap">
                  Get in Touch
                  <ChevronRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SponsorsPage;
