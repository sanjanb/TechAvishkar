
import { Clock, Coffee, Utensils, Presentation, Code, Award } from "lucide-react";

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

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-hackathon-dark text-white py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Event Timeline</h1>
            <p className="text-xl max-w-3xl mx-auto">
              A detailed schedule of TechAvishkar Hackathon events
            </p>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Hackathon Schedule</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Follow this timeline to stay on track during the hackathon. Make sure to note the 
              important checkpoints and meal breaks!
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative pl-8 pb-4">
              <div className="absolute top-0 left-0 w-0.5 h-full bg-hackathon-purple"></div>
              
              {scheduleItems.map((item, index) => (
                <div 
                  key={index} 
                  className={`timeline-item ${index === scheduleItems.length - 1 ? 'border-0' : ''}`}
                >
                  <div className={`timeline-dot ${item.type === 'break' ? 'bg-hackathon-teal' : 'bg-hackathon-purple'}`}></div>
                  <div className={`bg-white p-4 rounded-lg shadow-sm border border-muted mb-8 ${item.type === 'break' ? 'border-l-4 border-l-hackathon-teal' : 'border-l-4 border-l-hackathon-purple'}`}>
                    <div className="flex items-start space-x-3">
                      <item.icon 
                        className={`flex-shrink-0 mt-1 ${item.type === 'break' ? 'text-hackathon-teal' : 'text-hackathon-purple'}`} 
                        size={20} 
                      />
                      <div>
                        <p className="text-sm text-muted-foreground">{item.time}</p>
                        <h3 className="font-semibold text-lg">{item.event}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-hackathon-light p-6 rounded-lg mt-16 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Important Notes</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <div className="w-5 h-5 rounded-full bg-hackathon-purple flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">!</span>
                </div>
                <p>All participants must be present for the check points.</p>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-5 h-5 rounded-full bg-hackathon-purple flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">!</span>
                </div>
                <p>Meals and refreshments will be provided at the designated times.</p>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-5 h-5 rounded-full bg-hackathon-purple flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-xs font-bold">!</span>
                </div>
                <p>The schedule is subject to minor adjustments. Any changes will be announced during the event.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchedulePage;
