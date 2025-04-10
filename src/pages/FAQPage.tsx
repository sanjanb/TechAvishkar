
import { useState } from "react";
import { ChevronDown, ChevronUp, Diamond, MessageSquareText } from "lucide-react";
import { motion } from "framer-motion";

type FAQItem = {
  question: string;
  answer: string;
  category?: string;
};

const FAQPage = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const faqs: FAQItem[] = [
    {
      question: "Who can participate in TechAvishkar?",
      answer: "TechAvishkar is open to students and professionals alike. Whether you're a college student, a recent graduate, or a working professional with a passion for technology, you're welcome to join. The hackathon is designed for intermediate-level participants who have basic programming knowledge.",
      category: "participation"
    },
    {
      question: "What do I need to bring to the hackathon?",
      answer: "Participants should bring their laptops, chargers, and any other devices or equipment they might need for their projects. We'll provide the venue, internet connectivity, meals, and some basic stationery. Don't forget to bring your enthusiasm and creative ideas!",
      category: "logistics"
    },
    {
      question: "Do I need a team to participate?",
      answer: "You can participate solo or form a team of 2-4 members. If you're joining solo, we'll have a team formation session before the hackathon begins where you can meet other participants and form teams based on complementary skills and interests.",
      category: "participation"
    },
    {
      question: "Will there be mentors available during the hackathon?",
      answer: "Yes, experienced mentors from various technical backgrounds will be available throughout the hackathon to guide teams, provide feedback, and help overcome technical challenges. They'll be circulating during the event, and teams can also request specific mentoring sessions.",
      category: "support"
    },
    {
      question: "How does the judging work?",
      answer: "Projects will be judged on innovation (30%), technical implementation (30%), impact & feasibility (20%), and presentation quality (20%). The judging will occur in multiple rounds, with initial evaluations during checkpoints and final presentations on the last day.",
      category: "judging"
    },
    {
      question: "What kind of projects can we build?",
      answer: "You can build any project that falls within our hackathon tracks: AI & Machine Learning, Cybersecurity, Internet of Things (IoT), Blockchain & FinTech, or Open Innovation. Each track has specific problem statements, but you're also welcome to propose your own problem within these domains.",
      category: "projects"
    },
    {
      question: "Is there a registration fee?",
      answer: "No, TechAvishkar is free to participate in. We believe in making innovation accessible to all talented individuals, regardless of financial background.",
      category: "registration"
    },
    {
      question: "Will food be provided during the hackathon?",
      answer: "Yes, we'll provide meals and refreshments throughout the hackathon, including breakfast, lunch, dinner, and snacks. If you have any dietary restrictions, please let us know during registration.",
      category: "logistics"
    },
    {
      question: "Can we work on pre-existing projects?",
      answer: "No, all projects must be built from scratch during the hackathon. You can come with ideas and plans, but coding and implementation should start only after the hackathon begins. However, you can use open-source libraries, frameworks, and APIs.",
      category: "rules"
    },
    {
      question: "Will there be sleeping arrangements?",
      answer: "Yes, we understand that a hackathon can be tiring. We'll have designated rest areas where participants can take short naps. However, if you prefer more comfortable sleeping arrangements, we recommend booking accommodation nearby.",
      category: "logistics"
    }
  ];

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "participation", label: "Participation" },
    { id: "logistics", label: "Logistics" },
    { id: "projects", label: "Projects" },
    { id: "judging", label: "Judging" },
    { id: "registration", label: "Registration" },
    { id: "support", label: "Support" },
    { id: "rules", label: "Rules" }
  ];

  const toggleItem = (index: number) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter(item => item !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  const filteredFaqs = activeCategory === "all" 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="pt-24 bg-hackathon-darkPurple min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-hackathon-navy to-hackathon-darkPurple text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-hackathon-mediumPurple/20 blur-3xl"></div>
          <div className="absolute top-32 -right-32 w-96 h-96 rounded-full bg-hackathon-diamond/10 blur-3xl"></div>
        </div>
        
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div 
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <span className="inline-flex items-center text-hackathon-diamond font-medium px-4 py-1.5 rounded-full bg-hackathon-diamond/10 mb-4">
              <MessageSquareText size={16} className="mr-2" /> Help Center
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl max-w-3xl mx-auto text-white/80">
              Common questions about TechAvishkar Hackathon answered
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          {/* Category Filter */}
          <div className="mb-12 overflow-x-auto pb-4">
            <div className="flex space-x-2 min-w-max">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                    activeCategory === category.id
                      ? "bg-hackathon-diamond text-hackathon-darkPurple"
                      : "bg-hackathon-navy text-white/80 hover:bg-hackathon-navy/70"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-white/70">No questions found in this category.</p>
              </div>
            ) : (
              filteredFaqs.map((faq, index) => (
                <motion.div 
                  key={index} 
                  className="bg-hackathon-navy rounded-xl shadow-md border border-hackathon-mediumPurple/20 overflow-hidden hover:border-hackathon-mediumPurple/40 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <button 
                    className="w-full text-left p-6 focus:outline-none flex justify-between items-center"
                    onClick={() => toggleItem(index)}
                  >
                    <h3 className="text-xl font-semibold pr-8 text-white">{faq.question}</h3>
                    {openItems.includes(index) ? (
                      <ChevronUp className="text-hackathon-diamond flex-shrink-0" />
                    ) : (
                      <ChevronDown className="text-hackathon-diamond flex-shrink-0" />
                    )}
                  </button>
                  
                  {openItems.includes(index) && (
                    <motion.div 
                      className="px-6 pb-6 text-white/70"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="pt-2 border-t border-hackathon-mediumPurple/20"></div>
                      <p className="mt-4">{faq.answer}</p>
                      {faq.category && (
                        <div className="mt-4">
                          <span className="inline-block px-3 py-1 bg-hackathon-mediumPurple/20 text-hackathon-diamond text-xs font-medium rounded-full">
                            {faq.category.charAt(0).toUpperCase() + faq.category.slice(1)}
                          </span>
                        </div>
                      )}
                    </motion.div>
                  )}
                </motion.div>
              ))
            )}
          </div>

          {/* Contact Section */}
          <motion.div 
            className="mt-16 bg-hackathon-navy p-8 rounded-xl text-center border border-hackathon-mediumPurple/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-hackathon-diamond/10 flex items-center justify-center mb-6">
              <Diamond size={32} className="text-hackathon-diamond" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-white">Still Have Questions?</h2>
            <p className="text-white/70 mb-6">
              If you couldn't find the answer to your question, feel free to contact us directly.
            </p>
            <a 
              href="mailto:info@techavishkar.com" 
              className="btn-primary inline-block animate-pulse-glow"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
