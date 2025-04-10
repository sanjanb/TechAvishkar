
import { CheckCircle, XCircle, HelpCircle, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";

const RulesPage = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const prohibitedActivities = [
    "Plagiarism or submitting pre-existing projects",
    "Harassment or discriminatory behavior",
    "Damaging venue property or equipment",
    "Creating solutions that violate privacy or security"
  ];

  const judgeRules = [
    {
      name: "Innovation",
      percentage: "30%",
      points: "30 Points",
      color: "purple",
      description: "Originality and creativity of the idea. How unique and novel is the solution?"
    },
    {
      name: "Technical Implementation",
      percentage: "30%",
      points: "30 Points",
      color: "blue",
      description: "Code quality, functionality, and technical complexity. How well is the solution implemented?"
    },
    {
      name: "Impact & Feasibility",
      percentage: "20%",
      points: "20 Points",
      color: "orange",
      description: "Potential real-world impact and practicality. Can it be implemented in real life?"
    },
    {
      name: "Presentation & Pitch",
      percentage: "20%",
      points: "20 Points",
      color: "green",
      description: "Quality of demonstration, clarity of explanation, and overall presentation."
    }
  ];

  const colorMap: Record<string, string> = {
    purple: "bg-hackathon-purple",
    blue: "bg-hackathon-teal",
    orange: "bg-hackathon-orange",
    green: "bg-green-500"
  };

  const textColorMap: Record<string, string> = {
    purple: "text-hackathon-purple bg-purple-100",
    blue: "text-hackathon-teal bg-blue-100",
    orange: "text-hackathon-orange bg-orange-100",
    green: "text-green-600 bg-green-100"
  };

  const submissionSteps = [
    {
      title: "Project Repository",
      description: "Submit a link to your project's GitHub/GitLab repository with a detailed README.md that includes project description, features, tech stack, and setup instructions."
    },
    {
      title: "Demo Video",
      description: "Create a 3-5 minute demo video showcasing your solution, its features, and how it addresses the problem statement. Upload it to YouTube (unlisted) and include the link."
    },
    {
      title: "Presentation Deck",
      description: "Prepare a slide deck (max 10 slides) explaining your solution, the problem it solves, technical implementation, and future plans. Submit as a PDF or Google Slides link."
    },
    {
      title: "Team Information",
      description: "Include a document with team member names, roles, contact information, and a brief description of each member's contribution to the project."
    }
  ];

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
              Rules & Guidelines
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl max-w-3xl mx-auto"
            >
              Important information to ensure fair play and a great experience for all
            </motion.p>
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section className="py-16 bg-hackathon-midnight">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Hackathon Rules */}
            <div>
              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold mb-8 text-white"
              >
                Hackathon Rules
              </motion.h2>
              
              <motion.div 
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {[
                  {
                    icon: <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={24} />,
                    title: "Code of Conduct",
                    desc: "All participants must adhere to our code of conduct. This includes treating all participants with respect, maintaining a positive atmosphere, and following the guidelines set by the organizers."
                  },
                  {
                    icon: <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={24} />,
                    title: "Original Work",
                    desc: "All submissions must be original and built within the hackathon timeframe. You may use open-source libraries and frameworks, but the core solution must be developed during the event."
                  },
                  {
                    icon: <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={24} />,
                    title: "Third-party Resources",
                    desc: "Use of third-party APIs, open-source tools, and frameworks is allowed and encouraged. However, you must clearly document their use in your submission."
                  },
                  {
                    icon: <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={24} />,
                    title: "Team Composition",
                    desc: "Teams can consist of 2-4 members. Solo participants will be given the opportunity to join teams before the hackathon begins. Each participant can be part of only one team."
                  },
                  {
                    icon: <AlertTriangle className="text-hackathon-orange mt-1 flex-shrink-0" size={24} />,
                    title: "Disqualification",
                    desc: "Teams may be disqualified for violating the rules, code of conduct, or for submitting work that is deemed plagiarized or created before the hackathon."
                  }
                ].map((rule, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="glass-effect p-6 rounded-xl shadow-sm border border-hackathon-purple/30 hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(110,89,165,0.3)] transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      {rule.icon}
                      <div>
                        <Collapsible open={openItem === index} onOpenChange={() => toggleItem(index)}>
                          <CollapsibleTrigger className="flex items-center justify-between w-full text-left">
                            <h3 className="text-xl font-semibold mb-2 text-white">{rule.title}</h3>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="animate-accordion-down">
                            <p className="text-muted-foreground">
                              {rule.desc}
                            </p>
                          </CollapsibleContent>
                        </Collapsible>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-10 glass-effect p-6 rounded-xl border border-red-500/30 hover:shadow-[0_0_15px_rgba(239,68,68,0.3)] transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4 text-white">Prohibited Activities</h3>
                <ul className="space-y-3">
                  {prohibitedActivities.map((activity, index) => (
                    <li key={index} className="flex items-start space-x-3 group">
                      <XCircle className="text-red-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={20} />
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{activity}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Judging Criteria */}
            <div>
              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold mb-8 text-white"
              >
                Judging Criteria
              </motion.h2>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="glass-effect p-8 rounded-xl shadow-md border border-hackathon-purple/30 mb-10 hover:shadow-[0_0_15px_rgba(110,89,165,0.3)] transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-6 text-white">How Projects Will Be Evaluated</h3>
                <div className="space-y-8">
                  {judgeRules.map((rule, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-white">{rule.name} ({rule.percentage})</h4>
                        <span className={`text-sm ${textColorMap[rule.color]} px-2 py-1 rounded-full`}>
                          {rule.points}
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2.5">
                        <div className={`${colorMap[rule.color]} h-2.5 rounded-full`} style={{ width: rule.percentage }}></div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        {rule.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="glass-effect p-6 rounded-xl border border-hackathon-teal/30 hover:shadow-[0_0_15px_rgba(14,165,233,0.3)] transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <HelpCircle className="text-hackathon-teal mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-white">Judging Process</h3>
                    <p className="mb-4 text-muted-foreground">
                      The judging will take place in multiple rounds:
                    </p>
                    <ol className="list-decimal pl-5 space-y-2">
                      {["Initial evaluation by mentors during checkpoints", 
                        "Semi-final selection of top 10 projects",
                        "Final presentation to judges panel",
                        "Winners announcement during the closing ceremony"
                      ].map((step, index) => (
                        <li key={index} className="text-gray-300 hover:text-white transition-colors duration-300">{step}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Submission Guidelines */}
          <div className="mt-16">
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold mb-8 text-center text-white"
            >
              Submission Guidelines
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-effect p-8 rounded-xl shadow-md border border-hackathon-diamond/30 max-w-4xl mx-auto hover:shadow-[0_0_20px_rgba(255,169,77,0.3)] transition-all duration-300"
            >
              <ol className="space-y-6">
                {submissionSteps.map((step, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                  >
                    <div className="w-8 h-8 rounded-full bg-hackathon-diamond text-hackathon-navy flex items-center justify-center mr-4 flex-shrink-0 animate-pulse-light">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </ol>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mt-8 p-4 bg-hackathon-navy/50 rounded-lg text-center border border-hackathon-diamond/20"
              >
                <p className="font-medium text-hackathon-diamond">
                  All submissions must be completed by 11:00 AM on the final day of the hackathon.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RulesPage;
