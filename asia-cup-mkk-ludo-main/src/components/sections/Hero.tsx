"use client";

import Button from "@/components/ui/Button";
import { Play, Award, Info, Trophy, Star, Sparkles, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('error', (e) => {
        console.error('Video failed to load:', e);
        setVideoError(true);
      });
      
      videoElement.addEventListener('loadeddata', () => {
        console.log('Video loaded successfully');
        setVideoError(false);
        videoElement.play().catch(err => {
          console.log('Autoplay prevented:', err);
        });
      });
    }
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (videoElement) {
        videoElement.removeEventListener('error', () => {});
        videoElement.removeEventListener('loadeddata', () => {});
      }
    };
  }, []);

  const handleJoinNow = () => {
    router.push('/join');
  };

  const handleViewPrizes = () => {
    router.push('/prizes');
  };

  const handleLearnMore = () => {
    router.push('/learn');
  };

  const handleWatchTrailer = () => {
    router.push('/trailer');
  };

  return (
    <>
      <section 
        id="home" 
        className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      >
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          {!videoError ? (
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/tournament-trailer.mp4" type="video/mp4" />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
            </video>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
          )}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600 rounded-full blur-[100px] animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px] opacity-20" />
        </div>

        {/* Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(255,255,255,0.03)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}
        />

        {/* Floating Stars */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(30)].map((_, i) => {
            const size = Math.random() * 4 + 2;
            const duration = 15 + Math.random() * 20;
            const delay = Math.random() * 10;
            const startX = Math.random() * 100;
            const startY = Math.random() * 100;
            
            return (
              <div
                key={i}
                className="absolute"
                style={{
                  left: `${startX}%`,
                  top: `${startY}%`,
                  animation: `floatStar ${duration}s linear infinite`,
                  animationDelay: `${delay}s`,
                  opacity: 0.3 + Math.random() * 0.5,
                }}
              >
                <Star 
                  className="text-yellow-400" 
                  style={{ 
                    width: `${size}px`, 
                    height: `${size}px`,
                    filter: 'drop-shadow(0 0 2px rgba(255,255,0,0.5))'
                  }} 
                  fill="currentColor" 
                />
              </div>
            );
          })}
        </div>

        {/* Sparkle Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(50)].map((_, i) => {
            const size = Math.random() * 2 + 1;
            const duration = 8 + Math.random() * 12;
            const delay = Math.random() * 15;
            
            return (
              <div
                key={`sparkle-${i}`}
                className="absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `twinkle ${duration}s ease-in-out infinite`,
                  animationDelay: `${delay}s`,
                  opacity: 0.2 + Math.random() * 0.6,
                }}
              >
                <div 
                  className="rounded-full bg-yellow-300"
                  style={{ 
                    width: `${size}px`, 
                    height: `${size}px`,
                    boxShadow: '0 0 4px rgba(255,255,0,0.8)'
                  }} 
                />
              </div>
            );
          })}
        </div>

        {/* Animated Gradient Border */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent animate-shine" />
        </div>

        <div className="container mx-auto px-4 md:px-6 py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-slide-up">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-white font-semibold text-sm">MKK Ludo Presents</span>
                <Sparkles className="w-4 h-4 text-yellow-400" />
              </div>

              {/* Main Heading */}
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
  <span className="text-white">Asia Cup </span>
  <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
    Tournament
  </span>
</h2>

              {/* Tagline */}
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="w-8 h-8 text-yellow-400" />
                <p className="text-xl md:text-2xl font-semibold text-yellow-400">
                  Play. Compete. Win.
                </p>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-lg mb-8 max-w-lg leading-relaxed">
                India's biggest Ludo competition experience with exciting rewards, 
                competitive gameplay, and a chance to become a champion.
              </p>

              {/* Watch Trailer Button */}
              <button
                onClick={handleWatchTrailer}
                className="mb-6 inline-flex items-center gap-2 px-5 py-2 bg-red-600/80 hover:bg-red-600 rounded-full text-white font-semibold transition-all duration-300 backdrop-blur-sm border border-red-400/50 cursor-pointer"
              >
                <Play className="w-4 h-4" fill="white" />
                Watch Trailer
              </button>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="primary" 
                  size="lg"
                  onClick={handleJoinNow}
                  className="group relative overflow-hidden bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-yellow-500/25 cursor-pointer"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Join Now
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={handleViewPrizes}
                  className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm cursor-pointer"
                >
                  View Prizes
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg"
                  onClick={handleLearnMore}
                  className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 cursor-pointer"
                >
                  Learn More
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 flex items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>10,000+ Active Players</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>₹15 Cr Prize Pool</span>
                </div>
              </div>
            </div>

            {/* Right Content - Stats Cards */}
            <div className="relative">
              <div 
                className="absolute -inset-4 bg-gradient-to-r from-yellow-500/20 to-purple-600/20 rounded-3xl blur-2xl"
                style={{
                  transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
                }}
              />
              
              <div className="grid grid-cols-2 gap-6 relative">
                <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Play className="w-14 h-14 text-yellow-400 mb-4 group-hover:scale-110 transition-transform" />
                    <p className="text-4xl font-bold text-white mb-2">10K+</p>
                    <p className="text-gray-300">Active Players</p>
                    <div className="mt-4 h-1 w-0 bg-gradient-to-r from-yellow-500 to-orange-500 group-hover:w-full transition-all duration-500" />
                  </div>
                </div>

                <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl mt-8 lg:mt-12">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Award className="w-14 h-14 text-yellow-400 mb-4 group-hover:scale-110 transition-transform" />
                    <p className="text-4xl font-bold text-white mb-2">₹15 Cr</p>
                    <p className="text-gray-300">Total Prizes</p>
                    <div className="mt-4 h-1 w-0 bg-gradient-to-r from-yellow-500 to-orange-500 group-hover:w-full transition-all duration-500" />
                  </div>
                </div>

                <div className="group bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Info className="w-14 h-14 text-yellow-400 mb-4 group-hover:scale-110 transition-transform" />
                    <p className="text-4xl font-bold text-white mb-2">192+</p>
                    <p className="text-gray-300">Winners</p>
                    <div className="mt-4 h-1 w-0 bg-gradient-to-r from-yellow-500 to-orange-500 group-hover:w-full transition-all duration-500" />
                  </div>
                </div>

                <div className="group bg-gradient-to-br from-yellow-500/20 to-purple-600/20 backdrop-blur-md rounded-2xl p-6 border border-yellow-500/30 hover:border-yellow-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl mt-8 lg:mt-12">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/30 to-transparent rounded-xl blur-xl" />
                    <Trophy className="w-14 h-14 text-yellow-400 mb-4 group-hover:rotate-12 transition-transform" />
                    <p className="text-2xl font-bold text-white mb-2">Grand Finale</p>
                    <p className="text-gray-300 text-sm">Coming Soon</p>
                    <div className="mt-4 h-1 w-full bg-gradient-to-r from-yellow-500 to-orange-500" />
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full px-4 py-2 shadow-lg animate-bounce-slow">
                <span className="text-white font-bold text-sm">Limited Slots!</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-scroll" />
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes floatStar {
          0% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.8;
          }
          50% {
            transform: translateY(0px) translateX(20px);
            opacity: 0.5;
          }
          75% {
            transform: translateY(20px) translateX(10px);
            opacity: 0.8;
          }
          100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
        }
        
        @keyframes twinkle {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.5);
          }
        }
        
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes scroll {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(10px);
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        
        .animate-shine {
          animation: shine 3s linear infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
        
        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}