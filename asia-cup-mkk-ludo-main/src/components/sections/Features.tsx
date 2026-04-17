"use client";

import { Zap, LayoutDashboard, Bell, Shield, Headphones, Sparkles, Rocket, Crown, Star, Gem, Award, TrendingUp, Users, Trophy } from "lucide-react";

const features = [
  { 
    icon: Zap, 
    title: "Fast Registration", 
    description: "A smooth onboarding flow for players with quick verification.",
    gradient: "from-emerald-500 to-teal-500",
    iconBg: "bg-emerald-500",
    delay: "0s"
  },
  { 
    icon: LayoutDashboard, 
    title: "Tournament Dashboard", 
    description: "View your progress, match details, and updates in one place.",
    gradient: "from-teal-500 to-cyan-500",
    iconBg: "bg-teal-500",
    delay: "0.1s"
  },
  { 
    icon: Bell, 
    title: "Prize Updates", 
    description: "Keep track of rewards, announcements, and event highlights.",
    gradient: "from-cyan-500 to-emerald-500",
    iconBg: "bg-cyan-500",
    delay: "0.2s"
  },
  { 
    icon: Shield, 
    title: "Secure Platform", 
    description: "A structured platform experience for participants with anti-cheat.",
    gradient: "from-green-500 to-emerald-500",
    iconBg: "bg-green-500",
    delay: "0.3s"
  },
  { 
    icon: Headphones, 
    title: "Support Access", 
    description: "Get help for registration, participation, and general questions.",
    gradient: "from-teal-500 to-green-500",
    iconBg: "bg-teal-500",
    delay: "0.4s"
  },
  { 
    icon: Rocket, 
    title: "Real-time Updates", 
    description: "Live scores, rankings, and match notifications instantly.",
    gradient: "from-emerald-500 to-green-500",
    iconBg: "bg-emerald-500",
    delay: "0.5s"
  },
];

export default function Features() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-teal-500/20 rounded-full blur-[120px] animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] animate-pulse delay-2000" />
        </div>
        
        {/* Premium Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(16,185,129,0.2)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}
        />
        
        {/* Floating Particles */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              backgroundColor: `rgba(16,185,129,${Math.random() * 0.3})`,
              borderRadius: '50%',
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 15 + 10}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-emerald-400 font-semibold text-sm uppercase tracking-wider">Premium Features</span>
            <Sparkles className="w-4 h-4 text-teal-400" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white">Platform </span>
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Features
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 mx-auto rounded-full mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Everything you need to compete, win, and enjoy the ultimate Ludo experience
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: feature.delay }}
              >
                {/* Glow Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition duration-500`} />
                
                {/* Card Content */}
                <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-emerald-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl">
                  {/* Icon Container */}
                  <div className={`relative mb-5 inline-flex p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300`} />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-teal-400 transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Decorative Line */}
                  <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${feature.gradient} group-hover:w-full transition-all duration-500 rounded-full`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Banner */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="group text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">10K+</div>
            <div className="text-gray-400 text-sm">Active Players</div>
          </div>
          <div className="group text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-teal-500/50 transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">₹15Cr+</div>
            <div className="text-gray-400 text-sm">Total Prize Pool</div>
          </div>
          <div className="group text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
              <Headphones className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-gray-400 text-sm">Support Available</div>
          </div>
          <div className="group text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:border-green-500/50 transition-all duration-300 hover:scale-105 cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold text-white mb-2">100%</div>
            <div className="text-gray-400 text-sm">Secure Platform</div>
          </div>
        </div>

        {/* Premium Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:border-emerald-500/50 transition-all duration-300">
            <Gem className="w-4 h-4 text-emerald-400" />
            <span className="text-gray-300 text-sm">Trusted by 50,000+ players worldwide</span>
            <Award className="w-4 h-4 text-teal-400" />
          </div>
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
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float {
          animation: float ease-in-out infinite;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
        
        .delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}