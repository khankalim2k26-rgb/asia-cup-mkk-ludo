"use client";

import { Shield, Users, Trophy, Star, Award, Heart, Crown, Gem, Sparkles, ThumbsUp, Clock, Medal, CheckCircle, TrendingUp, Zap } from "lucide-react";

const trustPoints = [
  { 
    icon: Shield, 
    title: "User-friendly experience", 
    description: "Intuitive design that makes participation effortless",
    gradient: "from-blue-500 to-indigo-500",
    bgGradient: "from-blue-50 to-indigo-50",
    delay: "0s"
  },
  { 
    icon: Users, 
    title: "High-engagement tournament", 
    description: "Active community with thousands of daily players",
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50",
    delay: "0.1s"
  },
  { 
    icon: Trophy, 
    title: "Reward-driven participation", 
    description: "Win exciting prizes and recognition",
    gradient: "from-amber-500 to-yellow-500",
    bgGradient: "from-amber-50 to-yellow-50",
    delay: "0.2s"
  },
  { 
    icon: Star, 
    title: "Strong visual identity", 
    description: "Premium design and professional branding",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
    delay: "0.3s"
  },
  { 
    icon: Award, 
    title: "Exciting competition", 
    description: "Thrilling matches and intense gameplay",
    gradient: "from-red-500 to-rose-500",
    bgGradient: "from-red-50 to-rose-50",
    delay: "0.4s"
  },
  { 
    icon: Heart, 
    title: "Loving Community", 
    description: "Supportive players and fair competition",
    gradient: "from-pink-500 to-rose-500",
    bgGradient: "from-pink-50 to-rose-50",
    delay: "0.5s"
  },
  { 
    icon: Crown, 
    title: "Pro Recognition", 
    description: "Get featured as top players and champions",
    gradient: "from-indigo-500 to-purple-500",
    bgGradient: "from-indigo-50 to-purple-50",
    delay: "0.6s"
  },
  { 
    icon: Gem, 
    title: "Premium Rewards", 
    description: "Exclusive prizes and bonus opportunities",
    gradient: "from-cyan-500 to-blue-500",
    bgGradient: "from-cyan-50 to-blue-50",
    delay: "0.7s"
  },
  { 
    icon: Clock, 
    title: "24/7 Availability", 
    description: "Play anytime, anywhere at your convenience",
    gradient: "from-slate-500 to-gray-500",
    bgGradient: "from-slate-50 to-gray-50",
    delay: "0.8s"
  },
];

export default function Trust() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-purple-200/30 to-pink-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-100/20 rounded-full blur-3xl" />
        
        {/* Geometric Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0 L40 20 L20 40 L0 20 Z' fill='none' stroke='%234f46e5' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '30px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-6 shadow-lg">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-white font-bold text-sm uppercase tracking-wider">Trusted by Thousands</span>
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Why Players
            </span>
            <span className="text-gray-800 ml-3">
              Choose Us
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Join thousands of satisfied players who trust MKK Ludo for their gaming experience
          </p>
        </div>

        {/* Trust Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="group relative animate-scale-up"
                style={{ animationDelay: point.delay }}
              >
                {/* Card */}
                <div className={`relative bg-gradient-to-br ${point.bgGradient} rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                    <Icon className="w-full h-full" />
                  </div>
                  
                  {/* Icon Container */}
                  <div className={`relative mb-4 inline-flex p-3 rounded-xl bg-gradient-to-br ${point.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                      {point.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </div>

                  {/* Decorative Ribbon */}
                  <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${point.gradient} group-hover:w-full transition-all duration-500`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Banner - Modern Design */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-3xl">50,000+</p>
                <p className="text-white/90 text-sm">Active Players</p>
                <p className="text-white/70 text-xs mt-1">And growing every day</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-3xl">4.9/5</p>
                <p className="text-white/90 text-sm">Rating</p>
                <p className="text-white/70 text-xs mt-1">From 10,000+ reviews</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                <ThumbsUp className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-white font-bold text-3xl">98%</p>
                <p className="text-white/90 text-sm">Satisfaction</p>
                <p className="text-white/70 text-xs mt-1">Players recommend us</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <div className="px-5 py-2.5 bg-white rounded-full shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
            <span className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Verified Platform
            </span>
          </div>
          <div className="px-5 py-2.5 bg-white rounded-full shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
            <span className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <Shield className="w-4 h-4 text-blue-500" />
              100% Secure
            </span>
          </div>
          <div className="px-5 py-2.5 bg-white rounded-full shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
            <span className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-500" />
              Instant Payouts
            </span>
          </div>
          <div className="px-5 py-2.5 bg-white rounded-full shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300">
            <span className="text-sm font-semibold text-gray-700 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-purple-500" />
              Fair Play
            </span>
          </div>
        </div>

        {/* Additional Trust Indicator */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-md">
            <Medal className="w-5 h-5 text-indigo-500" />
            <span className="text-gray-700 font-medium">Trusted by players across 50+ countries</span>
            <Medal className="w-5 h-5 text-indigo-500" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scaleUp {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-scale-up {
          animation: scaleUp 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}