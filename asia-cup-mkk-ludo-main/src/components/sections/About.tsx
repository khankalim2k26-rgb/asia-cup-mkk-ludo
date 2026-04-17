import Link from "next/link";
import { CheckCircle2, Sparkles, TrendingUp, Users, Trophy, Award, Shield, Zap, Star, Crown, Gem, Rocket } from "lucide-react";

const highlights = [
  {
    text: "Open participation",
    icon: Users,
    color: "from-cyan-400 to-blue-400"
  },
  {
    text: "Competitive match structure",
    icon: TrendingUp,
    color: "from-blue-400 to-indigo-400"
  },
  {
    text: "Reward-based gameplay",
    icon: Award,
    color: "from-indigo-400 to-purple-400"
  },
  {
    text: "Smooth registration process",
    icon: Zap,
    color: "from-purple-400 to-pink-400"
  },
  {
    text: "Engaging tournament experience",
    icon: Sparkles,
    color: "from-pink-400 to-rose-400"
  },
];

const tournamentStats = [
  { label: "Total Players", value: "10,000+", icon: Users },
  { label: "Prize Pool", value: "₹15 Cr+", icon: Trophy },
  { label: "Winners", value: "192", icon: Crown },
  { label: "Fair Play", value: "100%", icon: Shield },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50">
      {/* Sparkle/Firecracker Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Bursting Sparkles */}
        {[...Array(80)].map((_, i) => {
          const size = Math.random() * 8 + 3;
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const duration = 1.5 + Math.random() * 2;
          const delay = Math.random() * 8;
          return (
            <div
              key={`burst-${i}`}
              className="absolute"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: `${size}px`,
                height: `${size}px`,
                animation: `burstSpark ${duration}s ease-out forwards`,
                animationDelay: `${delay}s`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full shadow-lg" style={{ boxShadow: '0 0 15px rgba(34,211,238,0.8)' }} />
              <div className="absolute inset-0 bg-white/50 rounded-full animate-ping" style={{ animationDuration: '0.6s' }} />
            </div>
          );
        })}
        
        {/* Twinkling Stars */}
        {[...Array(120)].map((_, i) => {
          const size = Math.random() * 4 + 2;
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const duration = 2 + Math.random() * 3;
          const delay = Math.random() * 10;
          return (
            <div
              key={`star-${i}`}
              className="absolute animate-twinkle"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: `${size}px`,
                height: `${size}px`,
                background: `radial-gradient(circle, rgba(255,${200 + Math.random() * 55},${100 + Math.random() * 100},1) 0%, rgba(255,255,255,0) 80%)`,
                borderRadius: '50%',
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
                boxShadow: `0 0 ${size * 2}px rgba(34,211,238,0.6)`,
              }}
            />
          );
        })}
        
        {/* Floating Glitter */}
        {[...Array(150)].map((_, i) => {
          const size = Math.random() * 3 + 1;
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const duration = 4 + Math.random() * 6;
          const delay = Math.random() * 12;
          return (
            <div
              key={`glitter-${i}`}
              className="absolute animate-float-glitter"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: `${size}px`,
                height: `${size}px`,
                background: `radial-gradient(circle, ${i % 3 === 0 ? 'rgba(34,211,238,0.9)' : i % 3 === 1 ? 'rgba(59,130,246,0.9)' : 'rgba(99,102,241,0.9)'} 0%, rgba(255,255,255,0) 80%)`,
                borderRadius: '50%',
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}
        
        {/* Shooting Stars */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`shooting-${i}`}
            className="absolute animate-shooting-star"
            style={{
              top: `${Math.random() * 50}%`,
              left: `-10%`,
              width: '80px',
              height: '2px',
              background: 'linear-gradient(90deg, rgba(34,211,238,0.8), rgba(59,130,246,0.4), transparent)',
              borderRadius: '50%',
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: '1.2s',
              transform: `rotate(${Math.random() * 60 - 30}deg)`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-6 border border-cyan-200 shadow-sm">
            <Rocket className="w-4 h-4 text-cyan-600" />
            <span className="text-cyan-700 font-semibold text-sm">What Makes Us Special</span>
            <Rocket className="w-4 h-4 text-blue-600" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-gray-800">About the </span>
            <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Tournament
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 mx-auto rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <p className="text-gray-700 text-lg leading-relaxed">
                The <span className="text-cyan-600 font-semibold">MKK Ludo Asia Cup</span> is an online tournament platform built for Ludo players 
                who want to compete at a higher level. The tournament brings together players 
                from different places on one competitive stage where skill, consistency, and 
                performance matter.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <p className="text-gray-700 text-lg leading-relaxed">
                Whether you are a casual player or a serious competitor, the Asia Cup offers 
                a simple registration process, structured rounds, and exciting rewards for top performers.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${highlight.color} shadow-md group-hover:scale-110 transition-transform`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium group-hover:text-cyan-600 transition-colors">
                        {highlight.text}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Right Content - Tournament Highlights Card */}
          <div className="relative">
            {/* Animated Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-300/30 to-blue-300/30 rounded-2xl blur-xl animate-pulse" />
            
            <div className="relative bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-6">
                <div className="flex items-center gap-3">
                  <Trophy className="w-8 h-8 text-white" />
                  <h3 className="text-2xl font-bold text-white">Tournament Highlights</h3>
                </div>
                <p className="text-cyan-100 mt-2">Everything you need to know about the Asia Cup</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 p-6 border-b border-gray-100">
                {tournamentStats.map((stat, index) => {
                  const StatIcon = stat.icon;
                  return (
                    <div key={index} className="text-center group cursor-pointer">
                      <div className="inline-flex p-3 rounded-full bg-cyan-50 group-hover:bg-cyan-100 transition-all duration-300 mb-2">
                        <StatIcon className="w-6 h-6 text-cyan-600" />
                      </div>
                      <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                      <p className="text-gray-500 text-sm">{stat.label}</p>
                    </div>
                  );
                })}
              </div>

              {/* Features List */}
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3 group cursor-pointer">
                  <div className="p-1 rounded-full bg-cyan-100 group-hover:bg-cyan-200 transition-all duration-300 mt-1">
                    <Trophy className="w-4 h-4 text-cyan-600" />
                  </div>
                  <div>
                    <p className="text-gray-800 font-semibold">192 Players Will Be Rewarded</p>
                    <p className="text-gray-500 text-sm">Top performers get amazing prizes</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 group cursor-pointer">
                  <div className="p-1 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-all duration-300 mt-1">
                    <Gem className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-800 font-semibold">Exciting Prize Pool Worth ₹15 Crore+</p>
                    <p className="text-gray-500 text-sm">Biggest Ludo tournament in India</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 group cursor-pointer">
                  <div className="p-1 rounded-full bg-indigo-100 group-hover:bg-indigo-200 transition-all duration-300 mt-1">
                    <TrendingUp className="w-4 h-4 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-gray-800 font-semibold">Multiple Rounds of Competition</p>
                    <p className="text-gray-500 text-sm">Qualifiers, semifinals, and finals</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 group cursor-pointer">
                  <div className="p-1 rounded-full bg-purple-100 group-hover:bg-purple-200 transition-all duration-300 mt-1">
                    <Shield className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-gray-800 font-semibold">Fair Play & Transparent System</p>
                    <p className="text-gray-500 text-sm">Anti-cheat technology and real-time monitoring</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 group cursor-pointer">
                  <div className="p-1 rounded-full bg-pink-100 group-hover:bg-pink-200 transition-all duration-300 mt-1">
                    <Zap className="w-4 h-4 text-pink-600" />
                  </div>
                  <div>
                    <p className="text-gray-800 font-semibold">Live Leaderboard Updates</p>
                    <p className="text-gray-500 text-sm">Real-time rankings and progress tracking</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="p-6 bg-gray-50 border-t border-gray-100">
                <Link href="/register">
                  <button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md">
                    Register Now
                  </button>
                </Link>
              </div>
            </div>

            {/* Floating Decoration */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-cyan-200/30 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-200/30 rounded-full blur-2xl" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes burstSpark {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }
        
        @keyframes twinkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0.5);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes float-glitter {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0;
          }
          25% {
            opacity: 0.8;
          }
          75% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-80px) translateX(40px);
            opacity: 0;
          }
        }
        
        @keyframes shooting-star {
          0% {
            transform: translateX(0) translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateX(300px) translateY(60px);
            opacity: 0;
          }
        }
        
        .animate-twinkle {
          animation: twinkle ease-in-out infinite;
        }
        
        .animate-float-glitter {
          animation: float-glitter linear infinite;
        }
        
        .animate-shooting-star {
          animation: shooting-star linear forwards;
        }
      `}</style>
    </section>
  );
}