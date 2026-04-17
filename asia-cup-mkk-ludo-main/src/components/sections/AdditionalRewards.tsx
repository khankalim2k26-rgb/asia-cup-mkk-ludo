import { Smartphone, Tablet, Phone, Bike, Car, Home, Watch, Sparkles, Gift, Zap, Star, Trophy } from "lucide-react";

const rewards = [
  { icon: Watch, name: "Smart Watch", category: "Electronics" },
  { icon: Tablet, name: "iPad", category: "Electronics" },
  { icon: Smartphone, name: "iPhone", category: "Electronics" },
  { icon: Phone, name: "Android Phone", category: "Electronics" },
  { icon: Bike, name: "KTM Bike", category: "Vehicles" },
  { icon: Bike, name: "Scooty", category: "Vehicles" },
  { icon: Bike, name: "BMW Bike", category: "Vehicles" },
  { icon: Bike, name: "Pulsar 125 CC", category: "Vehicles" },
  { icon: Car, name: "Maruti Brezza", category: "Vehicles" },
  { icon: Car, name: "Tata Altroz", category: "Vehicles" },
  { icon: Home, name: "2 BHK Flat", category: "Property" },
  { icon: Home, name: "3 BHK Flat", category: "Property" },
];

export default function AdditionalRewards() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950">
      {/* Background Effects - Slightly Lighter */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(255,255,255,0.06)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}
        />
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20">
            <Gift className="w-5 h-5 text-amber-400" />
            <span className="text-amber-300 font-semibold text-sm">More Prizes</span>
            <Gift className="w-5 h-5 text-amber-400" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white">Additional </span>
            <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Rewards
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mb-6" />

          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Apart from the top prizes, many more players can receive exciting rewards worth millions
          </p>
        </div>

        {/* Stats Summary - Slightly Lighter */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="bg-white/10 rounded-2xl p-6 text-center border border-white/20 hover:bg-white/15 transition-colors">
            <Trophy className="w-7 h-7 text-amber-400 mx-auto mb-3" />
            <p className="text-3xl font-bold text-white">192+</p>
            <p className="text-gray-400 text-sm mt-1">Total Winners</p>
          </div>
          <div className="bg-white/10 rounded-2xl p-6 text-center border border-white/20 hover:bg-white/15 transition-colors">
            <Star className="w-7 h-7 text-amber-400 mx-auto mb-3" />
            <p className="text-3xl font-bold text-white">12+</p>
            <p className="text-gray-400 text-sm mt-1">Prize Categories</p>
          </div>
          <div className="bg-white/10 rounded-2xl p-6 text-center border border-white/20 hover:bg-white/15 transition-colors">
            <Zap className="w-7 h-7 text-amber-400 mx-auto mb-3" />
            <p className="text-3xl font-bold text-white">100%</p>
            <p className="text-gray-400 text-sm mt-1">Guaranteed</p>
          </div>
        </div>

        {/* Rewards Grid - Improved Hover */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {rewards.map((reward, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center border border-white/20 
                         hover:border-amber-400/50 hover:bg-white/15 transition-all duration-300 
                         hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/10"
            >
              {/* Icon Container */}
              <div className="inline-flex p-4 rounded-2xl bg-white/5 mb-4 group-hover:bg-amber-500/10 transition-all duration-300">
                <reward.icon className="w-9 h-9 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              
              {/* Reward Name */}
              <p className="text-gray-200 font-medium text-base mb-1.5 group-hover:text-white transition-colors">
                {reward.name}
              </p>
              
              {/* Category Badge */}
              <span className="text-xs px-3 py-1 bg-white/5 rounded-full text-gray-400 group-hover:text-amber-300 transition-colors">
                {reward.category}
              </span>
            </div>
          ))}
        </div>

        {/* Info Banner - Slightly Lighter */}
        <div className="mt-12 bg-white/5 rounded-3xl p-7 border border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span className="text-gray-300 text-sm">
                All additional rewards will be distributed to winners based on their final rankings
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
              <span className="text-xs text-gray-400">More prizes to be announced</span>
            </div>
          </div>
        </div>

        {/* Call to Action - Slightly Brighter */}
        <div className="mt-12 text-center">
          <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3.5 px-9 rounded-2xl border border-white/30 
                           transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-400" />
            View Full Prize Structure
            <Zap className="w-4 h-4 text-amber-400" />
          </button>
        </div>
      </div>
    </section>
  );
}