"use client";

import { Trophy, Award, Medal, Crown, Gift, ArrowLeft, TrendingUp, ChevronRight, Car, Home, Bike, Smartphone, Tablet, Watch } from "lucide-react";
import Link from "next/link";

export default function PrizesPage() {
  const topPrizes = [
    { 
      rank: "First Prize", 
      icon: Crown, 
      color: "from-yellow-500 to-amber-500", 
      bgColor: "bg-gradient-to-br from-amber-50 to-yellow-50",
      borderColor: "border-amber-200",
      rewards: [
        { name: "2 Kg Gold Trophy", icon: Trophy },
        { name: "₹15 Crore Cash", icon: Gift },
        { name: "5 BHK Flat", icon: Home },
        { name: "Audi Car", icon: Car },
        { name: "Harley Davidson Bike", icon: Bike }
      ]
    },
    { 
      rank: "Second Prize", 
      icon: Medal, 
      color: "from-gray-400 to-gray-300", 
      bgColor: "bg-gradient-to-br from-slate-50 to-gray-100",
      borderColor: "border-slate-200",
      rewards: [
        { name: "1 Kg Gold Trophy", icon: Trophy },
        { name: "₹12 Crore Cash", icon: Gift },
        { name: "5 BHK Flat", icon: Home },
        { name: "Audi Car", icon: Car },
        { name: "Harley Davidson Bike", icon: Bike }
      ]
    },
    { 
      rank: "Third Prize", 
      icon: Award, 
      color: "from-orange-500 to-amber-600", 
      bgColor: "bg-gradient-to-br from-orange-50 to-amber-50",
      borderColor: "border-orange-200",
      rewards: [
        { name: "500 gm Gold Trophy", icon: Trophy },
        { name: "₹10 Crore Cash", icon: Gift },
        { name: "5 BHK Flat", icon: Home },
        { name: "Audi Car", icon: Car },
        { name: "Harley Davidson Bike", icon: Bike }
      ]
    }
  ];

  const additionalRewards = [
    { name: "Smart Watch", icon: Watch, color: "bg-blue-50", textColor: "text-blue-600" },
    { name: "iPad", icon: Tablet, color: "bg-purple-50", textColor: "text-purple-600" },
    { name: "iPhone", icon: Smartphone, color: "bg-zinc-100", textColor: "text-zinc-700" },
    { name: "Android Phone", icon: Smartphone, color: "bg-green-50", textColor: "text-green-600" },
    { name: "KTM Bike", icon: Bike, color: "bg-orange-50", textColor: "text-orange-600" },
    { name: "Scooty", icon: Bike, color: "bg-pink-50", textColor: "text-pink-600" },
    { name: "BMW Bike", icon: Bike, color: "bg-cyan-50", textColor: "text-cyan-600" },
    { name: "Pulsar 125 CC", icon: Bike, color: "bg-red-50", textColor: "text-red-600" },
    { name: "Maruti Brezza", icon: Car, color: "bg-emerald-50", textColor: "text-emerald-600" },
    { name: "Tata Altroz", icon: Car, color: "bg-indigo-50", textColor: "text-indigo-600" },
    { name: "2 BHK Flat", icon: Home, color: "bg-yellow-50", textColor: "text-yellow-600" },
    { name: "3 BHK Flat", icon: Home, color: "bg-amber-50", textColor: "text-amber-600" }
  ];

  const features = [
    { title: "Fast Registration", description: "A smooth onboarding flow for players." },
    { title: "Tournament Dashboard", description: "View your progress, match details, and updates in one place." },
    { title: "Prize Updates", description: "Keep track of rewards, announcements, and event highlights." },
    { title: "Secure Platform", description: "A structured platform experience for participants." },
    { title: "Support Access", description: "Get help for registration, participation, and general questions." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50">
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-amber-600 transition-colors mb-8">
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <Trophy className="w-24 h-24 text-amber-500 mx-auto mb-4 animate-pulse" />
            <div className="absolute inset-0 bg-amber-400/20 blur-3xl rounded-full"></div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-4 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
            Prize Distribution
          </h1>
          <p className="text-2xl text-slate-700 mb-4">Total Prize Pool: ₹37+ Crore + Luxury Assets</p>
          <div className="inline-flex items-center gap-2 mt-2 px-6 py-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full border border-green-200">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <span className="text-green-700 font-semibold text-lg">Biggest Prize Pool in Gaming History!</span>
          </div>
        </div>

        {/* Top Prizes Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
            Top Rewards
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {topPrizes.map((prize, index) => {
              const Icon = prize.icon;
              return (
                <div 
                  key={index} 
                  className={`relative overflow-hidden ${prize.bgColor} rounded-3xl p-8 border ${prize.borderColor} hover:scale-105 hover:shadow-2xl transition-all duration-500 group shadow-sm`}
                >
                  {/* Subtle Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/60 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  
                  {/* Prize Header */}
                  <div className="text-center mb-8">
                    <Icon className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-r ${prize.color} bg-clip-text text-transparent`} />
                    <h3 className={`text-3xl font-bold bg-gradient-to-r ${prize.color} bg-clip-text text-transparent`}>
                      {prize.rank}
                    </h3>
                  </div>

                  {/* Rewards List */}
                  <div className="space-y-3">
                    {prize.rewards.map((reward, idx) => {
                      const RewardIcon = reward.icon;
                      return (
                        <div key={idx} className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm">
                          <RewardIcon className="w-6 h-6 text-amber-600 flex-shrink-0" />
                          <span className="text-slate-800 font-medium">{reward.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Winners Highlight */}
        <div className="mb-20 bg-white rounded-3xl p-12 text-center border border-amber-200 shadow-sm">
          <div className="inline-flex items-center gap-4 mb-6">
            <Trophy className="w-14 h-14 text-amber-500" />
            <h2 className="text-4xl font-bold text-slate-900">192 Players Will Be Rewarded!</h2>
          </div>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            A large number of participants will have the opportunity to win major rewards through the MKK Ludo Asia Cup.
            This tournament is designed to create a memorable competitive experience for players aiming for big achievements.
          </p>
        </div>

        {/* Additional Rewards */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
            Additional Rewards
          </h2>
          <p className="text-center text-slate-600 mb-10 text-lg">
            Apart from the top prizes, many more players can receive exciting rewards, including:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {additionalRewards.map((reward, index) => {
              const RewardIcon = reward.icon;
              return (
                <div 
                  key={index} 
                  className={`${reward.color} rounded-2xl p-6 text-center hover:scale-105 hover:shadow-md transition-all duration-300 border border-white shadow-sm group`}
                >
                  <RewardIcon className={`w-12 h-12 mx-auto mb-4 ${reward.textColor} group-hover:scale-110 transition-transform`} />
                  <p className="text-slate-800 font-semibold">{reward.name}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: "01", title: "Register", desc: "Create your account and complete the tournament registration." },
              { step: "02", title: "Join Tournament", desc: "Enter the Asia Cup competition and get access to match participation details." },
              { step: "03", title: "Play Matches", desc: "Compete in matches according to the tournament schedule and format." },
              { step: "04", title: "Move Up the Rankings", desc: "Perform consistently to improve your position and stay in contention." },
              { step: "05", title: "Win Rewards", desc: "Top players and selected winners receive rewards based on tournament outcomes." }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 text-center hover:scale-105 transition-all shadow-sm border border-slate-100 group">
                <div className="w-14 h-14 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-2xl shadow-md">
                  {item.step}
                </div>
                <h3 className="text-slate-900 font-semibold text-xl mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-12">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 text-center hover:scale-105 transition-all shadow-sm border border-slate-100">
                <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Trophy className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="text-slate-900 font-semibold text-lg mb-3">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link href="/join">
            <button className="px-12 py-6 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold rounded-2xl text-xl transition-all duration-300 shadow-xl hover:shadow-amber-500/40 inline-flex items-center gap-4 group">
              Register Now to Win Big!
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
          <p className="text-slate-500 text-sm mt-6">Limited slots available! Register before March 1, 2025</p>
        </div>
      </div>
    </div>
  );
}