"use client";

import { Info, Calendar, Trophy, Clock, Medal, ArrowLeft, Sparkles, Gamepad2, Target, Zap, Shield, ChevronRight, CheckCircle, Star } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function LearnPage() {
  const router = useRouter();
  const learnMoreRef = useRef<HTMLDivElement>(null);

  const features = [
    { icon: Gamepad2, title: "Professional Gameplay", description: "Experience Ludo like never before with professional rules and fair play mechanisms" },
    { icon: Target, title: "Skill-Based Matches", description: "Compete with players of similar skill levels for fair and competitive matches" },
    { icon: Zap, title: "Real-time Updates", description: "Live score updates, match tracking, and instant notifications" },
    { icon: Shield, title: "Secure Platform", description: "100% secure gameplay with anti-cheat technology and fair play guarantee" }
  ];

  const schedule = [
    { stage: "Registration Opens", date: "January 15, 2025", status: "active" },
    { stage: "Registration Closes", date: "March 1, 2025", status: "upcoming" },
    { stage: "Group Stage", date: "March 10-20, 2025", status: "upcoming" },
    { stage: "Knockout Rounds", date: "March 21-25, 2025", status: "upcoming" },
    { stage: "Grand Finals", date: "March 28, 2025", status: "upcoming" }
  ];

  const prizes = [
    { rank: "1st Place", prize: "₹5,00,00,000", icon: Trophy, color: "text-yellow-500" },
    { rank: "2nd Place", prize: "₹3,00,00,000", icon: Medal, color: "text-gray-400" },
    { rank: "3rd Place", prize: "₹1,00,00,000", icon: Medal, color: "text-amber-600" }
  ];

  const rules = [
    "Standard Ludo rules apply with professional tournament guidelines",
    "Each match consists of 4 players playing simultaneously",
    "Players get 2 minutes per move, 3 timeouts per game",
    "First player to get all 4 tokens home wins the match"
  ];

  const handleJoinNow = () => router.push('/join');
  const handleViewPrize = () => router.push('/prizes');
  const handleLearnMore = () => {
    learnMoreRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const handleWatchTrailer = () => router.push('/trailer');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 pt-20">
      <div className="container mx-auto px-4 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors mb-8">
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Learn More</h1>
          <p className="text-xl text-gray-300">Everything about Ludo Grand Championship 2025</p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:scale-105 transition-all">
              <feature.icon className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Schedule */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="w-8 h-8 text-yellow-500" />
            <h2 className="text-3xl font-bold text-white">Tournament Schedule</h2>
          </div>
          <div className="space-y-4">
            {schedule.map((item, index) => (
              <div key={index} className="flex flex-wrap justify-between items-center p-4 bg-white/5 rounded-lg">
                <span className="text-white font-semibold">{item.stage}</span>
                <span className="text-gray-300">{item.date}</span>
                <span className={`px-3 py-1 rounded-full text-sm ${item.status === 'active' ? 'bg-green-500' : 'bg-gray-500'}`}>
                  {item.status === 'active' ? 'Active' : 'Upcoming'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Rules */}
        <div ref={learnMoreRef} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 scroll-mt-20">
          <div className="flex items-center gap-3 mb-8">
            <Gamepad2 className="w-8 h-8 text-yellow-500" />
            <h2 className="text-3xl font-bold text-white">Tournament Rules</h2>
          </div>
          <ul className="space-y-3">
            {rules.map((rule, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}