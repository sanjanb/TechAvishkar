import { Brain, Earth, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const TracksPage = () => {
  const tracks = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      color: "purple",
      description:
        "Build intelligent solutions using AI algorithms and machine learning models to solve complex problems.",
      problems: [
        "Develop a natural language processing system for medical diagnosis assistance",
        "Create a computer vision solution for quality control in manufacturing",
        "Build a recommendation engine for personalized learning paths",
      ],
    },
    {
      icon: Earth,
      title: "Web Development",
      color: "purple",
      description:
        "Build intelligent solutions using AI algorithms and machine learning models to solve complex problems.",
      problems: [
        "Develop a natural language processing system for medical diagnosis assistance",
        "Create a computer vision solution for quality control in manufacturing",
        "Build a recommendation engine for personalized learning paths",
      ],
    },
    {
      icon: Lightbulb,
      title: "Open Innovation",
      color: "red",
      description:
        "Any unique tech-based solution that doesn't fit into the other categories but addresses a significant problem.",
      problems: [
        "Create solutions for environmental sustainability",
        "Develop accessibility tools for persons with disabilities",
        "Build education technology for underserved communities",
      ],
    },
  ];

  // Map color names to Tailwind classes
  const colorMap: Record<
    string,
    { bg: string; text: string; light: string; border: string; glow: string }
  > = {
    purple: {
      bg: "bg-hackathon-purple",
      text: "text-hackathon-purple",
      light: "bg-purple-100",
      border: "border-hackathon-purple/30",
      glow: "purple-glow",
    },
    blue: {
      bg: "bg-hackathon-teal",
      text: "text-hackathon-teal",
      light: "bg-blue-100",
      border: "border-hackathon-teal/30",
      glow: "shadow-[0_0_15px_rgba(14,165,233,0.5)]",
    },
    green: {
      bg: "bg-green-500",
      text: "text-green-600",
      light: "bg-green-100",
      border: "border-green-500/30",
      glow: "shadow-[0_0_15px_rgba(34,197,94,0.5)]",
    },
    orange: {
      bg: "bg-hackathon-orange",
      text: "text-hackathon-orange",
      light: "bg-orange-100",
      border: "border-hackathon-orange/30",
      glow: "shadow-[0_0_15px_rgba(249,115,22,0.5)]",
    },
    red: {
      bg: "bg-red-500",
      text: "text-red-600",
      light: "bg-red-100",
      border: "border-red-500/30",
      glow: "shadow-[0_0_15px_rgba(239,68,68,0.5)]",
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
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
              Tracks & Themes
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl max-w-3xl mx-auto"
            >
              Choose your challenge and showcase your skills in one of our
              exciting technology tracks
            </motion.p>
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <section className="py-16 bg-hackathon-midnight">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold mb-4 text-white"
            >
              Choose Your Challenge!
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
            >
              Each track presents unique challenges to solve. Select the one
              that aligns with your interests and expertise, or venture into
              something new!
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {tracks.map((track, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`glass-effect backdrop-blur-md border ${
                  colorMap[track.color].border
                } rounded-xl overflow-hidden hover:${
                  colorMap[track.color].glow
                } transition-all duration-300`}
              >
                <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="col-span-1">
                    <div
                      className={`w-16 h-16 rounded-full ${
                        colorMap[track.color].light
                      } flex items-center justify-center mb-6 animate-pulse-light`}
                    >
                      <track.icon
                        size={32}
                        className={colorMap[track.color].text}
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-white">
                      {track.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {track.description}
                    </p>
                    <Link
                      to="/register"
                      className={`inline-block ${
                        colorMap[track.color].bg
                      } text-white font-semibold rounded-lg py-2 px-4 transition-all hover:opacity-90 hover:-translate-y-1 duration-300`}
                    >
                      Select this Track
                    </Link>
                  </div>

                  <div className="lg:col-span-2 bg-hackathon-navy/50 backdrop-blur-sm rounded-lg p-6">
                    <h4 className="text-lg font-semibold mb-4 text-white">
                      Problem Statements
                    </h4>
                    <ul className="space-y-4">
                      {track.problems.map((problem, i) => (
                        <li key={i} className="flex items-start group">
                          <div
                            className={`w-6 h-6 rounded-full ${
                              colorMap[track.color].bg
                            } flex items-center justify-center mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                          >
                            <span className="text-white text-sm font-bold">
                              {i + 1}
                            </span>
                          </div>
                          <p className="text-gray-200 group-hover:text-white transition-colors duration-300">
                            {problem}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-hackathon-purple to-hackathon-teal text-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Take on a Challenge?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Pick your track and register now to start your hackathon journey!
            </p>
            <Link
              to="/register"
              className="bg-white text-hackathon-purple hover:bg-gray-100 font-semibold rounded-lg py-3 px-8 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg duration-300 animate-pulse-glow"
            >
              Register Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TracksPage;
