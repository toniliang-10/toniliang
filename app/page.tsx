"use client";
import Image from "next/image";
import { useState } from "react";
import skillsData from "../data/skills.json";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof skillsData>("programming");
  const [formData, setFormData] = useState({
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent("Portfolio Contact Form");
      const body = encodeURIComponent(`Email: ${formData.email}\n\nMessage:\n${formData.message}`);
      const mailtoLink = `mailto:toniliang10@gmail.com?subject=${subject}&body=${body}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      setSubmitStatus("success");
      setFormData({ email: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getLevelColor = (level: number) => {
    if (level >= 90) return "from-green-400 to-green-600";
    if (level >= 80) return "from-green-400 to-green-600";
    if (level >= 70) return "from-green-400 to-green-600";
    if (level >= 60) return "from-green-400 to-green-600";
    if (level >= 50) return "from-green-400 to-green-600";
    return "from-green-400 to-green-600";
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <ul className="flex justify-center space-x-8">
            <li>
              <a 
                href="#about" 
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#education" 
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
              >
                Education
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#experience" 
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
              >
                Experience
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>




      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 py-16 w-full">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 mb-80 ml-40 mr-40">
            {/* Left Container - Photo */}
            <div className="flex-shrink-0 ">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-gray-100">
                {/* <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <span className="text-white text-6xl font-bold">TL</span>
                </div> */}
                Replace the div above with your actual photo:
                <Image 
                  src="/portfolio-pfp.png" 
                  alt="Toni Liang"
                  fill
                  className="object-cover"
                  priority
                />
               
              </div>
            </div>

            {/* Right Container - Text */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-xl text-gray-600 mb-2">Hi, my name is</p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Toni Liang
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                I am a Senior at Stony Brook University and an aspiring software engineer.
              </p>
              <a 
                href="#education"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
              >
                <span>Learn More About Me</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>




      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Education
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="flex flex-col md:flex-row">
                {/* Left Panel - University Logo */}
                <div className="md:w-1/3 bg-gradient-to-br flex items-center justify-center">
                  <div className="text-center">
                    {/* Stony Brook University logo */}
                     <div className="w-48 h-48 md:w-56 md:h-56 rounded-full flex items-center justify-center mb-3 mx-auto shadow-lg p-6">
                       <Image src="/SBU-logo.png" alt="SBU Logo" width={280} height={280} className="object-contain" />
                     </div>
                  </div>
                </div>
                
                {/* Right Panel - Education Information */}
                <div className="md:w-2/3 p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    Stony Brook University
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-base text-gray-700">
                      <span className="font-semibold">B.S, Computer Science</span>
                    </p>
                    <p className="text-base text-gray-700">
                      Double major in Applied Mathematics
                    </p>
                    <p className="text-base text-gray-700">
                      Expected BS Graduation: <span className="font-semibold">May 2026</span>
                    </p>
                  </div>
                  
                  <div className="border-t pt-3 mb-4">
                    <p className="text-base text-gray-700 mb-1">
                      <span className="font-semibold">GPA:</span> 3.64/4.0
                    </p>
                    <p className="text-base text-gray-700">
                      <span className="font-semibold">Dean's list all Semesters</span>
                    </p>
                  </div>
                  
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-2 px-5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg text-sm">
                    Relevant Coursework
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-6 w-full">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore my technical skills across different categories proficiency levels
            </p>
          </div>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveCategory("programming")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === "programming"
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg"
              }`}
            >
              Programming Languages
            </button>
            <button
              onClick={() => setActiveCategory("frameworks")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === "frameworks"
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg"
              }`}
            >
              Frameworks & Libraries
            </button>
            <button
              onClick={() => setActiveCategory("tools")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === "tools"
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg"
              }`}
            >
              Tools & Platforms
            </button>
          </div>

          {/* Skills Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {skillsData[activeCategory].map((skill, index) => (
                <div
                  key={skill.name}
                  className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: "fadeInUp 0.6s ease-out forwards"
                  }}
                >
                  {/* Skill Name */}
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-sm font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-sm font-bold text-gray-700">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-2">
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden shadow-inner">
                        <div
                          className={`h-full bg-gradient-to-r ${getLevelColor(skill.level)} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                          style={{
                            width: `${skill.level}%`,
                            animation: "slideInWidth 1.2s ease-out forwards",
                            animationDelay: `${index * 100 + 300}ms`,
                            ["--target-width" as any]: `${skill.level}%`
                          }}
                        >
                        {/* Animated shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-shimmer"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>




      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-6 w-full">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              My journey of growth, learning, and making a difference
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-400 via-purple-400 to-pink-400 rounded-full animate-timeline-flow"></div>

            {/* Timeline Items */}
            <div className="space-y-20">
              {/* Experience 1 */}
              <div className="relative flex items-center animate-timeline-slide-right" style={{animationDelay: '0.2s'}}>
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full border-4 border-white shadow-xl z-10 animate-timeline-dot ml-4"></div>
                
                {/* Content */}
                <div className="w-5/12 ml-auto pr-8">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border border-indigo-100">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg animate-icon-float">
                        🎮
                      </div>
                      <div className="ml-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">Game Developer Intern & Researcher</h3>
                        <p className="text-indigo-600 font-semibold text-lg">Limbitless Solutions @ UCF</p>
                        <p className="text-gray-500">Orlando, FL • May 2025 - July 2025</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        At Limbitless Solutions I helped build a prosthetic training game in Unreal Engine and C++ for kids with limb differences, making prosthetic training more fun.
                      </p>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        The game was built on top of numerous research data of best practices, using electromyography (EMG) controls and testing with 20+ proxy volunteers to help decrease the rates of prosthetic abandonment. At the end, I got to publish my own paper.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience 2 */}
              <div className="relative flex items-center animate-timeline-slide-left" style={{animationDelay: '0.4s'}}>
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-white shadow-xl z-10 animate-timeline-dot ml-4"></div>
                
                {/* Content */}
                <div className="w-5/12 mr-auto pl-8">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border border-purple-100">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg animate-icon-float">
                        📚
                      </div>
                      <div className="ml-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">Data Structures & Algorithms TA</h3>
                        <p className="text-purple-600 font-semibold text-lg">Stony Brook University</p>
                        <p className="text-gray-500">Stony Brook, NY • Jan 2024 - Present</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        Every week I guide students through data structures and algorithms, breaking down tough problems and showing best practices of how to solve them.
                      </p>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        I have written over 100 practice problems (LeetCode style), and ran recitations for over 60 students to support them on these fundamental concepts of CS.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience 3 */}
              <div className="relative flex items-center animate-timeline-slide-right" style={{animationDelay: '0.6s'}}>
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full border-4 border-white shadow-xl z-10 animate-timeline-dot  ml-4"></div>
                
                {/* Content */}
                <div className="w-5/12 ml-auto pr-8">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border border-pink-100">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg animate-icon-float">
                        ∫
                      </div>
                      <div className="ml-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">Calculus IV Teaching Assistant</h3>
                        <p className="text-pink-600 font-semibold text-lg">Stony Brook University</p>
                        <p className="text-gray-500">Stony Brook, NY • August 2024 - Dec 2024</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        Every week, I held office hours to to help students grasp systems of differential equations.
                        Analyzing and understanding applied differential equations can feel intimidating, so I helped
                        conceptualize problems and analyze patterns that emerge in these problems.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience 4 */}
              <div className="relative flex items-center animate-timeline-slide-left" style={{animationDelay: '0.8s'}}>
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-rose-500 to-red-500 rounded-full border-4 border-white shadow-xl z-10 animate-timeline-dot ml-4"></div>
                
                {/* Content */}
                <div className="w-5/12 mr-auto pl-8">
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border border-rose-100">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg animate-icon-float">
                        👥
                      </div>
                      <div className="ml-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">VP of Web Development Club</h3>
                        <p className="text-rose-600 font-semibold text-lg">Stony Brook University</p>
                        <p className="text-gray-500">Stony Brook, NY • Aug 2023 - May 2024</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        During my time as VP, I coordinated our five-person executive board and created content for over 70 members in our club. 
                        Our team was able to co-create over 30 personal portfolios while teaching the fundamentals of web development.
                      </p>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        On top of teaching, I ran marketting strategies with our e-board to expand our reach to the younger 
                        generation of developers. Our efforts increased club attendance by 50% within the first month. 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-6 w-full">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Connect</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Email</p>
                      <p className="text-gray-900 font-semibold">toniliang10@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Location</p>
                      <p className="text-gray-900 font-semibold">Stony Brook, NY</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Response Time</p>
                      <p className="text-gray-900 font-semibold">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-purple-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:transform-none disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </button>

                {submitStatus === "success" && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-700 text-sm font-medium">
                      ✅ Message sent successfully! I'll get back to you soon.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-700 text-sm font-medium">
                      ❌ Something went wrong. Please try again or email me directly.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="text-xl font-bold mb-4">Toni Liang</h3>
              <p className="text-gray-400 leading-relaxed">
                Senior Computer Science student at Stony Brook University with a passion for software engineering and creating meaningful digital experiences.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#education" className="text-gray-400 hover:text-white transition-colors">
                    Education
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-400 hover:text-white transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#experience" className="text-gray-400 hover:text-white transition-colors">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/toniliang10/"
                  className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110 shadow-lg hover:shadow-xl"
                  aria-label="LinkedIn"
                  target="_blank"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://github.com/toniliang-10"
                  className="w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110 shadow-lg hover:shadow-xl"
                  aria-label="GitHub"
                  target="_blank"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="https://docs.google.com/document/d/1YnWs34AJFzglaY1Aor7s8q7NtUV1O7Sk4kNxz0QE_jQ/edit?tab=t.0"
                  className="w-12 h-12 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110 shadow-lg hover:shadow-xl"
                  aria-label="Resume"
                  target="_blank"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/toni.liang_/"
                  className="w-12 h-12 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 rounded-full flex items-center justify-center transition-all duration-200 transform hover:scale-110 shadow-lg hover:shadow-xl"
                  aria-label="Instagram"
                  target="_blank"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-purple-800/50 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Toni Liang. All rights reserved. Built with Next.js and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
