"use client";

import { UserPlus, Trophy, Gamepad2, TrendingUp, Gift, Sparkles, ArrowRight, Zap, Star } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Register",
    subtitle: "Get Started",
    description: "Create your account and complete the tournament registration in minutes.",
    gradient: "from-sky-500 to-blue-500",
    delay: "0s"
  },
  {
    icon: Trophy,
    title: "Join Tournament",
    subtitle: "Secure Your Spot",
    description: "Enter the Asia Cup competition and get access to match participation details.",
    gradient: "from-blue-500 to-indigo-500",
    delay: "0.2s"
  },
  {
    icon: Gamepad2,
    title: "Play Matches",
    subtitle: "Show Your Skills",
    description: "Compete in matches according to the tournament schedule and format.",
    gradient: "from-indigo-500 to-purple-500",
    delay: "0.4s"
  },
  {
    icon: TrendingUp,
    title: "Climb Rankings",
    subtitle: "Rise to the Top",
    description: "Perform consistently to improve your position and stay in contention.",
    gradient: "from-cyan-500 to-sky-500",
    delay: "0.6s"
  },
  {
    icon: Gift,
    title: "Win Rewards",
    subtitle: "Claim Your Prize",
    description: "Top players and selected winners receive rewards based on tournament outcomes.",
    gradient: "from-blue-600 to-cyan-500",
    delay: "0.8s"
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50">
      {/* Professional Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-sky-200/40 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl" />
        </div>
        
        {/* Professional Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(14,165,233,0.3)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-sky-100 to-blue-100 rounded-full mb-6 shadow-sm border border-sky-200">
            <Sparkles className="w-4 h-4 text-sky-600" />
            <span className="text-sky-700 font-semibold text-sm tracking-wide">SIMPLE & EASY PROCESS</span>
            <Sparkles className="w-4 h-4 text-blue-600" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-gray-800">How It </span>
            <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Follow these simple steps to participate and win exciting prizes worth ₹15 Crore+
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-sky-300 to-transparent -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="relative group animate-fade-in-up"
                  style={{ animationDelay: step.delay }}
                >
                  {/* Card */}
                  <div className="relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-sky-100">
                    {/* Step Number */}
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-sky-500 to-blue-500 rounded-full flex items-center justify-center shadow-md">
                      <span className="text-white text-sm font-bold">{index + 1}</span>
                    </div>

                    {/* Icon Container */}
                    <div className={`relative mb-5 inline-flex p-4 rounded-2xl bg-gradient-to-br ${step.gradient} shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.gradient} blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300`} />
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      <div>
                        <p className="text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600 uppercase tracking-wider">
                          {step.subtitle}
                        </p>
                        <h3 className="text-xl font-bold text-gray-800 mt-1 group-hover:text-sky-600 transition-colors">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Arrow Indicator */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2">
                        <div className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center group-hover:scale-110 transition-transform border border-sky-200">
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-500 transition-colors" />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Mobile Arrow */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-2">
                      <ArrowRight className="w-6 h-6 text-sky-400 transform rotate-90" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <Zap className="w-5 h-5" />
            <span>Start Your Journey Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 blur-lg opacity-0 group-hover:opacity-40 transition-opacity" />
          </button>
          <p className="text-gray-500 text-sm mt-4 flex items-center justify-center gap-2">
            <Star className="w-4 h-4 text-sky-500" />
            Join thousands of players already competing
            <Star className="w-4 h-4 text-blue-500" />
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}