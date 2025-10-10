import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <ul className="flex justify-center space-x-8">
            <li>
              <a 
                href="#about" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#education" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Education
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#experience" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                Experience
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
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
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 mb-80">
            {/* Left Container - Photo */}
            <div className="flex-shrink-0">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-gray-100">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <span className="text-white text-6xl font-bold">TL</span>
                </div>
                {/* Replace the div above with your actual photo:
                <Image 
                  src="/your-photo.jpg" 
                  alt="Toni Liang"
                  fill
                  className="object-cover"
                  priority
                />
                */}
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




      {/* Education Section - Placeholder */}
      <section id="education" className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-16 w-full">
          {/* Content will be added later */}
        </div>
      </section>




      {/* Skills Section - Placeholder */}
      <section id="skills" className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-16 w-full">
          {/* Content will be added later */}
        </div>
      </section>




      {/* Experience Section - Placeholder */}
      <section id="experience" className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-16 w-full">
          {/* Content will be added later */}
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
