import { Award, Car, Home, Bike, Trophy, Sparkles, Star, Crown, Gift, Zap, Diamond, Gem } from "lucide-react";

const prizes = [
  {
    rank: "First Prize",
    items: [
      { icon: Trophy, label: "2 Kg Gold Trophy" },
      { icon: Award, label: "₹15 Crore Cash" },
      { icon: Home, label: "5 BHK Flat" },
      { icon: Car, label: "Audi Car" },
      { icon: Bike, label: "Harley Davidson Bike" },
    ],
    color: "from-purple-50 to-pink-50",
    border: "border-purple-200",
    iconColor: "text-purple-600",
    gradient: "from-purple-400 to-pink-500",
    badge: "bg-purple-100 text-purple-700 border border-purple-300",
  },
  {
    rank: "Second Prize",
    items: [
      { icon: Trophy, label: "1 Kg Gold Trophy" },
      { icon: Award, label: "₹12 Crore Cash" },
      { icon: Home, label: "4 BHK Flat" },
      { icon: Car, label: "BMW Car" },
      { icon: Bike, label: "Royal Enfield Bike" },
    ],
    color: "from-rose-50 to-red-50",
    border: "border-rose-200",
    iconColor: "text-rose-600",
    gradient: "from-rose-400 to-red-500",
    badge: "bg-rose-100 text-rose-700 border border-rose-300",
  },
  {
    rank: "Third Prize",
    items: [
      { icon: Trophy, label: "500 gm Gold Trophy" },
      { icon: Award, label: "₹10 Crore Cash" },
      { icon: Home, label: "3 BHK Flat" },
      { icon: Car, label: "Mercedes Car" },
      { icon: Bike, label: "Kawasaki Bike" },
    ],
    color: "from-yellow-50 to-amber-50",
    border: "border-yellow-200",
    iconColor: "text-amber-600",
    gradient: "from-yellow-400 to-amber-500",
    badge: "bg-yellow-100 text-amber-700 border border-yellow-300",
  },
];

export default function Prizes() {
  return (
    <section id="prizes" className="relative py-24 overflow-hidden bg-gradient-to-br from-white via-purple-50 to-pink-50">
      {/* Background Effects - Light and Airy */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(139,92,246,0.1)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}
        />
        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-pink-200/40 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-100/30 rounded-full blur-[120px]" />
      </div>

      {/* Floating Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 20}s`,
            }}
          >
            <Diamond className={`w-3 h-3 ${i % 3 === 0 ? 'text-purple-300' : i % 3 === 1 ? 'text-pink-300' : 'text-yellow-300'} opacity-40`} />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6 shadow-sm">
            <Sparkles className="w-5 h-5 text-purple-500" />
            <span className="text-purple-700 font-semibold text-sm tracking-wide">PRIZE POOL</span>
            <Sparkles className="w-5 h-5 text-pink-500" />
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gray-800">
            Top <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">Rewards</span>
          </h2>

          <div className="w-28 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 mx-auto mb-6 rounded-full" />

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Exciting rewards and premium prize opportunities for top participants worth ₹15 Crore+
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {prizes.map((prize, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${prize.color} rounded-3xl p-9 border ${prize.border} shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl`}
            >
              {/* Subtle Hover Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${prize.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />

              <div className="relative z-10">
                {/* Rank Badge */}
                <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-2xl ${prize.badge} mb-10 mx-auto shadow-sm`}>
                  <Crown className={`w-5 h-5 ${prize.iconColor}`} />
                  <span className="font-semibold text-base tracking-wide">{prize.rank}</span>
                </div>

                {/* Prize Items */}
                <div className="space-y-5">
                  {prize.items.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center gap-4 group/item hover:translate-x-1 transition-all duration-300"
                    >
                      <div className={`p-2.5 rounded-xl bg-white shadow-sm group-hover/item:shadow-md transition-all duration-300`}>
                        <item.icon className={`w-5 h-5 ${prize.iconColor}`} />
                      </div>
                      <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors font-medium">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Decorative Line */}
                <div className={`mt-8 pt-5 border-t ${prize.border}`}>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <Gift className="w-4 h-4" />
                    <span>Including all taxes</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Banner */}
        <div className="mt-16 bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 border border-purple-100 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-2xl">
                <Star className="w-6 h-6 text-purple-500" />
              </div>
              <span className="text-gray-700">
                All prizes are guaranteed and will be distributed as per tournament rules
              </span>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <Zap className="w-5 h-5 text-pink-500" />
              <span className="text-gray-500 font-medium">Terms & Conditions Apply</span>
            </div>
          </div>
        </div>

        {/* Prize Distribution Info */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full border border-purple-200 shadow-sm">
            <Trophy className="w-4 h-4 text-purple-500" />
            <span className="text-gray-600 text-sm">Top 192 players will be rewarded with exciting prizes</span>
            <Trophy className="w-4 h-4 text-pink-500" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-15px) translateX(8px);
            opacity: 0.6;
          }
        }
        .animate-float {
          animation: float ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}