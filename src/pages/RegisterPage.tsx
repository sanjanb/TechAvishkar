
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    affiliation: "",
    teamName: "",
    track: "",
    teamSize: "individual",
    agreeTerms: false
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const tracks = [
    { value: "ai-ml", label: "AI & Machine Learning" },
    { value: "cybersecurity", label: "Cybersecurity" },
    { value: "iot", label: "Internet of Things (IoT)" },
    { value: "blockchain", label: "Blockchain & FinTech" },
    { value: "open", label: "Open Innovation" }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      setFormData({
        ...formData,
        [name]: target.checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    
    if (!formData.affiliation.trim()) {
      newErrors.affiliation = "College/Company is required";
    }
    
    if (formData.teamSize !== "individual" && !formData.teamName.trim()) {
      newErrors.teamName = "Team name is required";
    }
    
    if (!formData.track) {
      newErrors.track = "Please select a hackathon track";
    }
    
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "You must agree to the terms and conditions";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, you would submit the form data to a server here
      console.log("Form submitted:", formData);
      setSubmitted(true);
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        affiliation: "",
        teamName: "",
        track: "",
        teamSize: "individual",
        agreeTerms: false
      });
      
      // Redirect after a short delay
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-hackathon-dark text-white py-16">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Register for TechAvishkar</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Join us for an exciting hackathon experience and showcase your skills!
            </p>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6">
          {submitted ? (
            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={32} className="text-green-500" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Registration Successful!</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Thank you for registering for TechAvishkar Hackathon. We've sent a confirmation email to your registered email address with further details.
              </p>
              <p className="text-sm text-muted-foreground">
                Redirecting you to the homepage...
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-6">Participant Registration</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    {/* Personal Information */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-hackathon-purple focus:outline-none ${
                          errors.name ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-hackathon-purple focus:outline-none ${
                          errors.email ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="Enter your email address"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="affiliation" className="block text-sm font-medium mb-2">
                        College/Company <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="affiliation"
                        name="affiliation"
                        value={formData.affiliation}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-hackathon-purple focus:outline-none ${
                          errors.affiliation ? "border-red-500" : "border-gray-300"
                        }`}
                        placeholder="Enter your college or company name"
                      />
                      {errors.affiliation && (
                        <p className="mt-1 text-sm text-red-500">{errors.affiliation}</p>
                      )}
                    </div>

                    {/* Team Information */}
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Participation Type <span className="text-red-500">*</span>
                      </label>
                      <div className="flex space-x-4">
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="teamSize"
                            value="individual"
                            checked={formData.teamSize === "individual"}
                            onChange={handleChange}
                            className="form-radio text-hackathon-purple"
                          />
                          <span className="ml-2">Individual</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input
                            type="radio"
                            name="teamSize"
                            value="team"
                            checked={formData.teamSize === "team"}
                            onChange={handleChange}
                            className="form-radio text-hackathon-purple"
                          />
                          <span className="ml-2">Team</span>
                        </label>
                      </div>
                    </div>

                    {formData.teamSize === "team" && (
                      <div>
                        <label htmlFor="teamName" className="block text-sm font-medium mb-2">
                          Team Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="teamName"
                          name="teamName"
                          value={formData.teamName}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-hackathon-purple focus:outline-none ${
                            errors.teamName ? "border-red-500" : "border-gray-300"
                          }`}
                          placeholder="Enter your team name"
                        />
                        {errors.teamName && (
                          <p className="mt-1 text-sm text-red-500">{errors.teamName}</p>
                        )}
                      </div>
                    )}

                    {/* Hackathon Track */}
                    <div>
                      <label htmlFor="track" className="block text-sm font-medium mb-2">
                        Preferred Hackathon Track <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="track"
                        name="track"
                        value={formData.track}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-hackathon-purple focus:outline-none ${
                          errors.track ? "border-red-500" : "border-gray-300"
                        }`}
                      >
                        <option value="">Select a track</option>
                        {tracks.map((track) => (
                          <option key={track.value} value={track.value}>
                            {track.label}
                          </option>
                        ))}
                      </select>
                      {errors.track && (
                        <p className="mt-1 text-sm text-red-500">{errors.track}</p>
                      )}
                    </div>

                    {/* Terms and Conditions */}
                    <div>
                      <label className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="agreeTerms"
                          checked={formData.agreeTerms}
                          onChange={handleChange}
                          className={`form-checkbox ${
                            errors.agreeTerms ? "text-red-500" : "text-hackathon-purple"
                          }`}
                        />
                        <span className="ml-2 text-sm">
                          I agree to the{" "}
                          <a href="/rules" className="text-hackathon-purple hover:underline">
                            terms and conditions
                          </a>{" "}
                          of TechAvishkar Hackathon
                        </span>
                      </label>
                      {errors.agreeTerms && (
                        <p className="mt-1 text-sm text-red-500">{errors.agreeTerms}</p>
                      )}
                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full btn-primary"
                      >
                        Register Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          )}

          <div className="mt-8 bg-hackathon-light p-6 rounded-xl text-center">
            <p className="text-sm text-muted-foreground">
              By registering, you confirm that you have read and agreed to our{" "}
              <a href="/rules" className="text-hackathon-purple hover:underline">
                Rules and Guidelines
              </a>
              . For any questions, please contact us at{" "}
              <a
                href="mailto:info@techavishkar.com"
                className="text-hackathon-purple hover:underline"
              >
                info@techavishkar.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterPage;
