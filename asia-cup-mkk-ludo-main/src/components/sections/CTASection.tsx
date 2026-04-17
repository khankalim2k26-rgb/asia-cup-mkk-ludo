"use client";

import Button from "@/components/ui/Button";
import { Trophy, ArrowRight, Headphones, Sparkles, Shield, Users, Zap, Rocket, Gift } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with fresh teal/cyan gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-cyan-600 to-emerald-600" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-400/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-[100px] animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-400/20 rounded-full blur-[120px] animate-pulse delay-2000" />
        </div>
        
        {/* Dot Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated rocket icon */}
          <div className="relative mb-8">
            <div className="animate-float">
              <div className="inline-flex p-5 bg-white/20 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/30">
                <Rocket className="w-14 h-14 text-white" />
              </div>
            </div>
          </div>
          
          {/* Main heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
  <span>Start Your Journey </span>
  <span className="bg-gradient-to-r from-teal-200 via-cyan-200 to-emerald-200 bg-clip-text text-transparent">
    Today!
  </span>
</h2>
          
          {/* Description */}
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join the biggest Ludo tournament in Asia. Compete with thousands of players and win amazing prizes worth ₹15 Crore+.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Button 
              variant="primary" 
              size="lg" 
              className="group bg-white text-teal-600 hover:bg-gray-100 hover:text-teal-700 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-bold"
            >
              <Gift className="w-5 h-5 mr-2 inline" />
              Register Now - Free Entry
              <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white/40 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-teal-600 hover:border-white transition-all duration-300"
            >
              <Headphones className="w-5 h-5 mr-2 inline" />
              Need Help?
            </Button>
          </div>
          
          {/* Trust indicators with fresh design */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2.5 border border-white/20 hover:bg-white/20 transition-all">
              <Trophy className="w-4 h-4 text-teal-200" />
              <span className="text-white/90 text-sm font-medium">₹15Cr+ Prize</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2.5 border border-white/20 hover:bg-white/20 transition-all">
              <Users className="w-4 h-4 text-cyan-200" />
              <span className="text-white/90 text-sm font-medium">10K+ Players</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2.5 border border-white/20 hover:bg-white/20 transition-all">
              <Zap className="w-4 h-4 text-emerald-200" />
              <span className="text-white/90 text-sm font-medium">Instant Payout</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2.5 border border-white/20 hover:bg-white/20 transition-all">
              <Shield className="w-4 h-4 text-teal-200" />
              <span className="text-white/90 text-sm font-medium">100% Secure</span>
            </div>
          </div>

          {/* Countdown timer */}
          <div className="mt-10">
            <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/30">
              <Sparkles className="w-5 h-5 text-teal-200 animate-pulse" />
              <span className="text-white font-semibold">Registration closes in:</span>
              <div className="flex gap-2">
                <div className="bg-white/20 rounded-lg px-3 py-1">
                  <span className="text-white font-bold text-lg">05</span>
                  <span className="text-white/80 text-xs ml-1">Days</span>
                </div>
                <div className="bg-white/20 rounded-lg px-3 py-1">
                  <span className="text-white font-bold text-lg">12</span>
                  <span className="text-white/80 text-xs ml-1">Hrs</span>
                </div>
                <div className="bg-white/20 rounded-lg px-3 py-1">
                  <span className="text-white font-bold text-lg">30</span>
                  <span className="text-white/80 text-xs ml-1">Mins</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320" 
          className="w-full"
          preserveAspectRatio="none"
        >
          <path 
            fill="#ffffff" 
            fillOpacity="0.1" 
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
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