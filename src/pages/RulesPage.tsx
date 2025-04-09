
import { CheckCircle, XCircle, HelpCircle, AlertTriangle } from "lucide-react";

const RulesPage = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-hackathon-dark text-white py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Rules & Guidelines</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Important information to ensure fair play and a great experience for all
            </p>
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section className="py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Hackathon Rules */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Hackathon Rules</h2>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-muted">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Code of Conduct</h3>
                      <p className="text-muted-foreground">
                        All participants must adhere to our code of conduct. This includes treating 
                        all participants with respect, maintaining a positive atmosphere, and 
                        following the guidelines set by the organizers.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-muted">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Original Work</h3>
                      <p className="text-muted-foreground">
                        All submissions must be original and built within the hackathon timeframe. 
                        You may use open-source libraries and frameworks, but the core solution 
                        must be developed during the event.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-muted">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Third-party Resources</h3>
                      <p className="text-muted-foreground">
                        Use of third-party APIs, open-source tools, and frameworks is allowed and 
                        encouraged. However, you must clearly document their use in your submission.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-muted">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Team Composition</h3>
                      <p className="text-muted-foreground">
                        Teams can consist of 2-4 members. Solo participants will be given the 
                        opportunity to join teams before the hackathon begins. Each participant 
                        can be part of only one team.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-muted">
                  <div className="flex items-start space-x-4">
                    <AlertTriangle className="text-hackathon-orange mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Disqualification</h3>
                      <p className="text-muted-foreground">
                        Teams may be disqualified for violating the rules, code of conduct, or for 
                        submitting work that is deemed plagiarized or created before the hackathon.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 bg-hackathon-light p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Prohibited Activities</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <XCircle className="text-red-500 mt-1 flex-shrink-0" size={20} />
                    <span>Plagiarism or submitting pre-existing projects</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <XCircle className="text-red-500 mt-1 flex-shrink-0" size={20} />
                    <span>Harassment or discriminatory behavior</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <XCircle className="text-red-500 mt-1 flex-shrink-0" size={20} />
                    <span>Damaging venue property or equipment</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <XCircle className="text-red-500 mt-1 flex-shrink-0" size={20} />
                    <span>Creating solutions that violate privacy or security</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Judging Criteria */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Judging Criteria</h2>
              
              <div className="bg-white p-8 rounded-xl shadow-md border border-muted mb-10">
                <h3 className="text-xl font-semibold mb-6">How Projects Will Be Evaluated</h3>
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">Innovation (30%)</h4>
                      <span className="text-sm bg-purple-100 text-hackathon-purple px-2 py-1 rounded-full">
                        30 Points
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-hackathon-purple h-2.5 rounded-full" style={{ width: "30%" }}></div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Originality and creativity of the idea. How unique and novel is the solution?
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">Technical Implementation (30%)</h4>
                      <span className="text-sm bg-blue-100 text-hackathon-teal px-2 py-1 rounded-full">
                        30 Points
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-hackathon-teal h-2.5 rounded-full" style={{ width: "30%" }}></div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Code quality, functionality, and technical complexity. How well is the solution implemented?
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">Impact & Feasibility (20%)</h4>
                      <span className="text-sm bg-orange-100 text-hackathon-orange px-2 py-1 rounded-full">
                        20 Points
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-hackathon-orange h-2.5 rounded-full" style={{ width: "20%" }}></div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Potential real-world impact and practicality. Can it be implemented in real life?
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">Presentation & Pitch (20%)</h4>
                      <span className="text-sm bg-green-100 text-green-600 px-2 py-1 rounded-full">
                        20 Points
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "20%" }}></div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Quality of demonstration, clarity of explanation, and overall presentation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-hackathon-light p-6 rounded-xl">
                <div className="flex items-start space-x-4">
                  <HelpCircle className="text-hackathon-purple mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Judging Process</h3>
                    <p className="mb-4">
                      The judging will take place in multiple rounds:
                    </p>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>Initial evaluation by mentors during checkpoints</li>
                      <li>Semi-final selection of top 10 projects</li>
                      <li>Final presentation to judges panel</li>
                      <li>Winners announcement during the closing ceremony</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Submission Guidelines */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Submission Guidelines</h2>
            <div className="bg-white p-8 rounded-xl shadow-md border border-muted max-w-4xl mx-auto">
              <ol className="space-y-6">
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-hackathon-purple text-white flex items-center justify-center mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Project Repository</h3>
                    <p className="text-muted-foreground">
                      Submit a link to your project's GitHub/GitLab repository with a detailed README.md 
                      that includes project description, features, tech stack, and setup instructions.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-hackathon-purple text-white flex items-center justify-center mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Demo Video</h3>
                    <p className="text-muted-foreground">
                      Create a 3-5 minute demo video showcasing your solution, its features, and how it 
                      addresses the problem statement. Upload it to YouTube (unlisted) and include the link.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-hackathon-purple text-white flex items-center justify-center mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Presentation Deck</h3>
                    <p className="text-muted-foreground">
                      Prepare a slide deck (max 10 slides) explaining your solution, the problem it solves, 
                      technical implementation, and future plans. Submit as a PDF or Google Slides link.
                    </p>
                  </div>
                </li>

                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-hackathon-purple text-white flex items-center justify-center mr-4 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Team Information</h3>
                    <p className="text-muted-foreground">
                      Include a document with team member names, roles, contact information, and a brief 
                      description of each member's contribution to the project.
                    </p>
                  </div>
                </li>
              </ol>

              <div className="mt-8 p-4 bg-hackathon-light rounded-lg text-center">
                <p className="font-medium">
                  All submissions must be completed by 11:00 AM on the final day of the hackathon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RulesPage;
