"use client";
import { useState, useEffect } from "react";

export default function Loading() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev === "...") return "";
        return prev + ".";
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
      {/* Background Animated Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-blue-700/10 rounded-full animate-float-1"></div>
        <div className="absolute top-40 right-32 w-12 h-12 bg-blue-700/15 rotate-45 animate-float-2"></div>
        <div className="absolute bottom-32 left-40 w-20 h-20 bg-blue-700/8 rounded-full animate-float-3"></div>
        <div className="absolute bottom-20 right-20 w-14 h-14 bg-blue-700/12 rotate-45 animate-float-4"></div>
        <div className="absolute top-1/2 left-10 w-8 h-8 bg-blue-700/20 rounded-full animate-float-5"></div>
        <div className="absolute top-1/3 right-10 w-10 h-10 bg-blue-700/18 rotate-45 animate-float-6"></div>
      </div>

      {/* Main Loading Container */}
      <div className="relative z-10 text-center">
        {/* Animated Logo/Icon */}
        <div className="relative mb-8">
          {/* Outer rotating ring */}
          <div className="w-32 h-32 border-4 border-blue-700/20 rounded-full animate-spin-slow"></div>
          
          {/* Middle pulsing ring */}
          <div className="absolute top-2 left-2 w-28 h-28 border-4 border-blue-700/40 rounded-full animate-pulse"></div>
          
          {/* Inner spinning ring */}
          <div className="absolute top-4 left-4 w-24 h-24 border-4 border-blue-700/60 rounded-full animate-spin-reverse"></div>
          
          {/* Center dot with glow effect */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full shadow-lg shadow-blue-700/50 animate-pulse"></div>
        </div>

        {/* Loading Text */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800 animate-fade-in-up">
            Loading Portfolio
          </h2>
          
          <div className="flex items-center justify-center space-x-1">
            <span className="text-lg text-gray-600 font-medium">Please wait</span>
            <span className="text-lg text-blue-700 font-bold w-8 text-left animate-bounce">
              {dots}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 w-64 mx-auto">
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-600 to-blue-700 rounded-full animate-progress-bar shadow-lg shadow-blue-700/30"></div>
          </div>
        </div>

        {/* Animated Dots Below Progress */}
        <div className="flex justify-center space-x-2 mt-6">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce-delay-1"></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce-delay-2"></div>
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce-delay-3"></div>
        </div>

        {/* Loading Stats */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div className="animate-fade-in-delay-1">
            <div className="text-2xl font-bold text-blue-700 animate-counter">95</div>
            <div className="text-xs text-gray-500">Skills</div>
          </div>
          <div className="animate-fade-in-delay-2">
            <div className="text-2xl font-bold text-blue-700 animate-counter">3</div>
            <div className="text-xs text-gray-500">Categories</div>
          </div>
          <div className="animate-fade-in-delay-3">
            <div className="text-2xl font-bold text-blue-700 animate-counter">100</div>
            <div className="text-xs text-gray-500">% Ready</div>
          </div>
        </div>
      </div>

      {/* Particle Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-700/30 rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
