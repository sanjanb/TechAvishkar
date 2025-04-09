
import { Brain, Shield, Cpu, Database, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const TracksPage = () => {
  const tracks = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      color: "purple",
      description: "Build intelligent solutions using AI algorithms and machine learning models to solve complex problems.",
      problems: [
        "Develop a natural language processing system for medical diagnosis assistance",
        "Create a computer vision solution for quality control in manufacturing",
        "Build a recommendation engine for personalized learning paths"
      ]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      color: "blue",
      description: "Tackle modern security challenges and develop innovative solutions to protect digital assets and privacy.",
      problems: [
        "Design a secure authentication system resistant to common attacks",
        "Create a tool to detect and prevent data breaches in real-time",
        "Develop a security awareness training platform with gamification elements"
      ]
    },
    {
      icon: Cpu,
      title: "Internet of Things (IoT)",
      color: "green",
      description: "Develop smart, connected systems that interact with the physical world and improve everyday life.",
      problems: [
        "Build a smart home energy management system",
        "Create an IoT solution for healthcare monitoring",
        "Develop a smart agriculture system for resource optimization"
      ]
    },
    {
      icon: Database,
      title: "Blockchain & FinTech",
      color: "orange",
      description: "Create decentralized applications and innovative financial technology solutions.",
      problems: [
        "Develop a decentralized identity verification system",
        "Build a blockchain-based supply chain transparency solution",
        "Create a fintech application for financial inclusion"
      ]
    },
    {
      icon: Lightbulb,
      title: "Open Innovation",
      color: "red",
      description: "Any unique tech-based solution that doesn't fit into the other categories but addresses a significant problem.",
      problems: [
        "Create solutions for environmental sustainability",
        "Develop accessibility tools for persons with disabilities",
        "Build education technology for underserved communities"
      ]
    }
  ];

  // Map color names to Tailwind classes
  const colorMap: Record<string, { bg: string, text: string, light: string }> = {
    purple: { bg: "bg-hackathon-purple", text: "text-hackathon-purple", light: "bg-purple-100" },
    blue: { bg: "bg-hackathon-teal", text: "text-hackathon-teal", light: "bg-blue-100" },
    green: { bg: "bg-green-500", text: "text-green-600", light: "bg-green-100" },
    orange: { bg: "bg-hackathon-orange", text: "text-hackathon-orange", light: "bg-orange-100" },
    red: { bg: "bg-red-500", text: "text-red-600", light: "bg-red-100" }
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-hackathon-dark text-white py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tracks & Themes</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Choose your challenge and showcase your skills in one of our exciting technology tracks
            </p>
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Challenge!</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Each track presents unique challenges to solve. Select the one that aligns with your 
              interests and expertise, or venture into something new!
            </p>
          </div>

          <div className="space-y-12">
            {tracks.map((track, index) => (
              <div key={index} className="bg-white shadow-md rounded-xl overflow-hidden">
                <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="col-span-1">
                    <div className={`w-16 h-16 rounded-full ${colorMap[track.color].light} flex items-center justify-center mb-6`}>
                      <track.icon size={32} className={colorMap[track.color].text} />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{track.title}</h3>
                    <p className="text-muted-foreground mb-6">
                      {track.description}
                    </p>
                    <Link 
                      to="/register" 
                      className={`inline-block ${colorMap[track.color].bg} text-white font-semibold rounded-lg py-2 px-4 transition-all hover:opacity-90`}
                    >
                      Select this Track
                    </Link>
                  </div>
                  
                  <div className="lg:col-span-2 bg-gray-50 rounded-lg p-6">
                    <h4 className="text-lg font-semibold mb-4">Problem Statements</h4>
                    <ul className="space-y-4">
                      {track.problems.map((problem, i) => (
                        <li key={i} className="flex items-start">
                          <div className={`w-6 h-6 rounded-full ${colorMap[track.color].bg} flex items-center justify-center mr-3 mt-0.5 flex-shrink-0`}>
                            <span className="text-white text-sm font-bold">{i+1}</span>
                          </div>
                          <p>{problem}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-hackathon-purple to-hackathon-teal text-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take on a Challenge?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Pick your track and register now to start your hackathon journey!
          </p>
          <Link to="/register" className="bg-white text-hackathon-purple hover:bg-gray-100 font-semibold rounded-lg py-3 px-8 shadow-md transition-all">
            Register Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TracksPage;
