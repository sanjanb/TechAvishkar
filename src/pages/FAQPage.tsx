
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const FAQPage = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs: FAQItem[] = [
    {
      question: "Who can participate in TechAvishkar?",
      answer: "TechAvishkar is open to students and professionals alike. Whether you're a college student, a recent graduate, or a working professional with a passion for technology, you're welcome to join. The hackathon is designed for intermediate-level participants who have basic programming knowledge."
    },
    {
      question: "What do I need to bring to the hackathon?",
      answer: "Participants should bring their laptops, chargers, and any other devices or equipment they might need for their projects. We'll provide the venue, internet connectivity, meals, and some basic stationery. Don't forget to bring your enthusiasm and creative ideas!"
    },
    {
      question: "Do I need a team to participate?",
      answer: "You can participate solo or form a team of 2-4 members. If you're joining solo, we'll have a team formation session before the hackathon begins where you can meet other participants and form teams based on complementary skills and interests."
    },
    {
      question: "Will there be mentors available during the hackathon?",
      answer: "Yes, experienced mentors from various technical backgrounds will be available throughout the hackathon to guide teams, provide feedback, and help overcome technical challenges. They'll be circulating during the event, and teams can also request specific mentoring sessions."
    },
    {
      question: "How does the judging work?",
      answer: "Projects will be judged on innovation (30%), technical implementation (30%), impact & feasibility (20%), and presentation quality (20%). The judging will occur in multiple rounds, with initial evaluations during checkpoints and final presentations on the last day."
    },
    {
      question: "What kind of projects can we build?",
      answer: "You can build any project that falls within our hackathon tracks: AI & Machine Learning, Cybersecurity, Internet of Things (IoT), Blockchain & FinTech, or Open Innovation. Each track has specific problem statements, but you're also welcome to propose your own problem within these domains."
    },
    {
      question: "Is there a registration fee?",
      answer: "No, TechAvishkar is free to participate in. We believe in making innovation accessible to all talented individuals, regardless of financial background."
    },
    {
      question: "Will food be provided during the hackathon?",
      answer: "Yes, we'll provide meals and refreshments throughout the hackathon, including breakfast, lunch, dinner, and snacks. If you have any dietary restrictions, please let us know during registration."
    },
    {
      question: "Can we work on pre-existing projects?",
      answer: "No, all projects must be built from scratch during the hackathon. You can come with ideas and plans, but coding and implementation should start only after the hackathon begins. However, you can use open-source libraries, frameworks, and APIs."
    },
    {
      question: "Will there be sleeping arrangements?",
      answer: "Yes, we understand that a hackathon can be tiring. We'll have designated rest areas where participants can take short naps. However, if you prefer more comfortable sleeping arrangements, we recommend booking accommodation nearby."
    }
  ];

  const toggleItem = (index: number) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter(item => item !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-hackathon-dark text-white py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Common questions about TechAvishkar Hackathon answered
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md border border-muted overflow-hidden"
              >
                <button 
                  className="w-full text-left p-6 focus:outline-none flex justify-between items-center"
                  onClick={() => toggleItem(index)}
                >
                  <h3 className="text-xl font-semibold pr-8">{faq.question}</h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="text-hackathon-purple flex-shrink-0" />
                  ) : (
                    <ChevronDown className="text-hackathon-purple flex-shrink-0" />
                  )}
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-6 text-muted-foreground">
                    <div className="pt-2 border-t border-muted"></div>
                    <p className="mt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-16 bg-hackathon-light p-8 rounded-xl text-center">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-muted-foreground mb-6">
              If you couldn't find the answer to your question, feel free to contact us directly.
            </p>
            <a 
              href="mailto:info@techavishkar.com" 
              className="btn-primary inline-block"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
