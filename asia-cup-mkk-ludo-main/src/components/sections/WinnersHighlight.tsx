import { Users, Trophy, Award, Sparkles, Star, Crown, Gift, Zap, Medal, Gem, Diamond } from "lucide-react";

export default function WinnersHighlight() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Sparkle Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Bursting Sparks */}
        {[...Array(60)].map((_, i) => {
          const size = Math.random() * 6 + 2;
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const duration = 1 + Math.random() * 2;
          const delay = Math.random() * 3;
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
              <div className="absolute inset-0 bg-cyan-400 rounded-full shadow-lg" style={{ boxShadow: '0 0 15px rgba(34,211,238,0.9)' }} />
              <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping" style={{ animationDuration: '0.5s' }} />
            </div>
          );
        })}
        
        {/* Shooting Sparks */}
        {[...Array(30)].map((_, i) => {
          const angle = Math.random() * 360;
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const duration = 0.8 + Math.random() * 1.2;
          const delay = Math.random() * 5;
          return (
            <div
              key={`shoot-${i}`}
              className="absolute"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: '4px',
                height: '4px',
                animation: `shootSpark ${duration}s linear forwards`,
                animationDelay: `${delay}s`,
                transform: `rotate(${angle}deg)`,
              }}
            >
              <div className="w-full h-full bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full" />
            </div>
          );
        })}
        
        {/* Floating Glitter */}
        {[...Array(100)].map((_, i) => {
          const size = Math.random() * 4 + 1;
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const duration = 3 + Math.random() * 4;
          const delay = Math.random() * 8;
          return (
            <div
              key={`glitter-${i}`}
              className="absolute"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: `${size}px`,
                height: `${size}px`,
                animation: `floatGlitter ${duration}s ease-in-out infinite`,
                animationDelay: `${delay}s`,
              }}
            >
              <div className={`w-full h-full rounded-full ${i % 3 === 0 ? 'bg-cyan-400' : i % 3 === 1 ? 'bg-blue-500' : 'bg-indigo-500'} shadow-lg`} 
                style={{ boxShadow: '0 0 8px rgba(34,211,238,0.8)' }} />
            </div>
          );
        })}
        
        {/* Firecracker Trails */}
        {[...Array(20)].map((_, i) => {
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const duration = 1 + Math.random() * 1.5;
          const delay = Math.random() * 4;
          return (
            <div
              key={`trail-${i}`}
              className="absolute h-0.5 bg-gradient-to-r from-cyan-400 to-blue-600"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: '0px',
                animation: `trailExpand ${duration}s ease-out forwards`,
                animationDelay: `${delay}s`,
                borderRadius: '2px',
              }}
            />
          );
        })}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-8 shadow-lg border border-cyan-400 animate-pulse">
            <Sparkles className="w-4 h-4 text-white animate-spin" style={{ animationDuration: '2s' }} />
            <span className="text-white font-bold text-sm tracking-wide">WINNER'S CIRCLE</span>
            <Sparkles className="w-4 h-4 text-white animate-spin" style={{ animationDuration: '2s' }} />
          </div>

          {/* Main Card */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 rounded-2xl blur-xl opacity-75 animate-pulse" />
            <div className="relative bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 md:p-12 border border-blue-200 shadow-2xl">
              
              {/* Trophy Icon */}
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 mb-6 animate-bounce">
                <Trophy className="w-16 h-16 text-white drop-shadow-lg" />
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="group text-center cursor-pointer transform transition-all duration-300 hover:scale-110">
                  <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-2 shadow-lg group-hover:shadow-xl">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-3xl font-bold text-gray-800 group-hover:text-cyan-600 transition-colors">192</p>
                  <p className="text-gray-600 text-sm">Total Winners</p>
                </div>
                <div className="group text-center cursor-pointer transform transition-all duration-300 hover:scale-110">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-2 shadow-lg group-hover:shadow-xl">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-3xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">₹15 Cr+</p>
                  <p className="text-gray-600 text-sm">Prize Pool</p>
                </div>
                <div className="group text-center cursor-pointer transform transition-all duration-300 hover:scale-110">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-2 shadow-lg group-hover:shadow-xl">
                    <Crown className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-3xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">100%</p>
                  <p className="text-gray-600 text-sm">Guaranteed</p>
                </div>
              </div>

              {/* Title */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-gray-800">192 Players Will Be </span>
                <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
                  Rewarded
                </span>
              </h2>

              {/* Description */}
              <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mb-6">
                A large number of participants will have the opportunity to win major rewards through the MKK Ludo Asia Cup.
                This tournament is designed to create a memorable competitive experience for players aiming for big achievements.
              </p>

              {/* Divider */}
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 mx-auto mb-6 rounded-full" />

              {/* Info Badges */}
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 border border-cyan-200 hover:scale-105 transition-all cursor-pointer group shadow-md">
                  <Gift className="w-3 h-3 text-cyan-600 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-700 group-hover:text-cyan-700">Top 192 ranks guaranteed prizes</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 border border-blue-200 hover:scale-105 transition-all cursor-pointer group shadow-md">
                  <Star className="w-3 h-3 text-blue-600 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-700 group-hover:text-blue-700">Additional rewards for performers</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 border border-indigo-200 hover:scale-105 transition-all cursor-pointer group shadow-md">
                  <Zap className="w-3 h-3 text-indigo-600 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-700 group-hover:text-indigo-700">Instant payouts</span>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-blue-200">
                <div className="flex items-center justify-center gap-2">
                  <Medal className="w-4 h-4 text-cyan-500 animate-pulse" />
                  <p className="text-gray-600 text-xs">Every participant gets a chance to win amazing prizes</p>
                  <Medal className="w-4 h-4 text-blue-500 animate-pulse" />
                </div>
              </div>
            </div>
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
            transform: scale(3);
            opacity: 0;
          }
        }
        
        @keyframes shootSpark {
          0% {
            transform: translateX(0) translateY(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateX(80px) translateY(-80px) scale(0);
            opacity: 0;
          }
        }
        
        @keyframes floatGlitter {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0;
          }
          25% {
            opacity: 1;
          }
          75% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) translateX(50px);
            opacity: 0;
          }
        }
        
        @keyframes trailExpand {
          0% {
            width: 0px;
            opacity: 1;
          }
          100% {
            width: 100px;
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}