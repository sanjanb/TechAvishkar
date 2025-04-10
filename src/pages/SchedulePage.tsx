
import { Clock, Coffee, Utensils, Presentation, Code, Award } from "lucide-react";
import { motion } from "framer-motion";

const SchedulePage = () => {
  const scheduleItems = [
    { time: "8:00 AM to 9:30 AM", event: "Registration", icon: Clock, type: "main" },
    { time: "9:30 AM to 10:30 AM", event: "Inauguration", icon: Presentation, type: "main" },
    { time: "10:30 AM to 11:00 AM", event: "Rules", icon: Presentation, type: "main" },
    { time: "11:00 AM", event: "Hackathon Begins", icon: Code, type: "main" },
    { time: "11:00 AM to 1:00 PM", event: "Idea Pitching", icon: Presentation, type: "main" },
    { time: "1:00 PM to 2:00 PM", event: "Lunch", icon: Utensils, type: "break" },
    { time: "2:30 PM to 3:30 PM", event: "1st Check Point", icon: Clock, type: "main" },
    { time: "5:30 PM to 6:00 PM", event: "Tea And Snacks", icon: Coffee, type: "break" },
    { time: "8:00 PM to 9:00 PM", event: "Dinner", icon: Utensils, type: "break" },
    { time: "9:00 PM to 10:00 PM", event: "2nd Check Point", icon: Clock, type: "main" },
    { time: "2:00 AM", event: "Tea", icon: Coffee, type: "break" },
    { time: "8:00 AM to 8:30 AM", event: "Breakfast", icon: Utensils, type: "break" },
    { time: "11:00 AM", event: "Final Check Point", icon: Clock, type: "main" },
    { time: "12:30 PM to 1:30 PM", event: "Prize Distribution", icon: Award, type: "main" },
    { time: "1:30 PM", event: "Lunch", icon: Utensils, type: "break" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.4 }
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
              Event Timeline
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl max-w-3xl mx-auto"
            >
              A detailed schedule of TechAvishkar Hackathon events
            </motion.p>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16 bg-hackathon-midnight">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold mb-4 text-white"
            >
              Hackathon Schedule
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground max-w-3xl mx-auto"
            >
              Follow this timeline to stay on track during the hackathon. Make sure to note the 
              important checkpoints and meal breaks!
            </motion.p>
          </div>

          <div className="max-w-3xl mx-auto">
            <motion.div 
              className="relative pl-8 pb-4"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-hackathon-purple via-hackathon-teal to-hackathon-diamond"></div>
              
              {scheduleItems.map((item, index) => (
                <motion.div 
                  key={index} 
                  className={`timeline-item ${index === scheduleItems.length - 1 ? 'border-0' : ''}`}
                  variants={itemVariants}
                >
                  <div className={`timeline-dot ${item.type === 'break' ? 'bg-hackathon-teal animate-pulse' : 'bg-hackathon-purple'}`}></div>
                  <div className={`glass-effect p-4 rounded-lg shadow-sm border ${item.type === 'break' ? 'border-l-4 border-l-hackathon-teal' : 'border-l-4 border-l-hackathon-purple'} mb-8 hover:-translate-y-1 transition-all duration-300`}>
                    <div className="flex items-start space-x-3">
                      <item.icon 
                        className={`flex-shrink-0 mt-1 ${item.type === 'break' ? 'text-hackathon-teal' : 'text-hackathon-purple'}`} 
                        size={20} 
                      />
                      <div>
                        <p className="text-sm text-muted-foreground">{item.time}</p>
                        <h3 className="font-semibold text-lg text-white">{item.event}</h3>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass-effect p-6 rounded-lg mt-16 max-w-3xl mx-auto border border-hackathon-purple/30"
          >
            <h3 className="text-xl font-semibold mb-4 text-white">Important Notes</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3 group">
                <div className="w-5 h-5 rounded-full bg-hackathon-diamond flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-hackathon-navy text-xs font-bold">!</span>
                </div>
                <p className="text-gray-200 group-hover:text-white transition-colors duration-300">All participants must be present for the check points.</p>
              </li>
              <li className="flex items-start space-x-3 group">
                <div className="w-5 h-5 rounded-full bg-hackathon-diamond flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-hackathon-navy text-xs font-bold">!</span>
                </div>
                <p className="text-gray-200 group-hover:text-white transition-colors duration-300">Meals and refreshments will be provided at the designated times.</p>
              </li>
              <li className="flex items-start space-x-3 group">
                <div className="w-5 h-5 rounded-full bg-hackathon-diamond flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-hackathon-navy text-xs font-bold">!</span>
                </div>
                <p className="text-gray-200 group-hover:text-white transition-colors duration-300">The schedule is subject to minor adjustments. Any changes will be announced during the event.</p>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SchedulePage;
