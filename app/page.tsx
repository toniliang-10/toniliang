"use client";
import Image from "next/image";
import { useState } from "react";
import skillsData from "../data/skills.json";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof skillsData>("programming");

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
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                I am a Senior at Stony Brook University and an aspiring software engineer.
              </p>
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
                  ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-600/25"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg"
              }`}
            >
              Programming Languages
            </button>
            <button
              onClick={() => setActiveCategory("frameworks")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === "frameworks"
                  ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-600/25"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg"
              }`}
            >
              Frameworks & Libraries
            </button>
            <button
              onClick={() => setActiveCategory("tools")}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === "tools"
                  ? "bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-600/25"
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
                        As VP of the Web Development Club I coordinated our five-person board, built hands-on workshops, and lifted event turnout by 20%.
                      </p>
                      <p className="text-gray-700 leading-relaxed text-lg">
                        Mentoring 30+ students through their first sites taught me that leadership is simply giving people the space and resources to shine.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* Contact Section - Placeholder */}
      <section id="contact" className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-16 w-full">
          {/* Content will be added later */}
        </div>
      </section>
    </div>
  );
}
