"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle, Mail, Phone, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Who can participate?",
    answer: "Any eligible player who completes registration can participate, subject to platform rules and terms. Players must be 18 years or older and from regions where online gaming is permitted.",
    category: "General",
    icon: "👥"
  },
  {
    question: "How do I register?",
    answer: "You can register using the Register Now button and complete the required details on the registration form. The process takes less than 5 minutes and requires basic personal information.",
    category: "Registration",
    icon: "📝"
  },
  {
    question: "How will winners be announced?",
    answer: "Winners will be announced through the platform dashboard, email notifications, and official social media channels after tournament completion. Results are updated in real-time.",
    category: "Winners",
    icon: "🏆"
  },
  {
    question: "Can I track my progress?",
    answer: "Yes, players can follow tournament updates, live rankings, and match progress through the interactive platform dashboard with real-time statistics.",
    category: "Tracking",
    icon: "📊"
  },
  {
    question: "Is there a support team?",
    answer: "Yes, 24/7 dedicated support is available for player queries, registration help, technical issues, and tournament guidance via live chat and email.",
    category: "Support",
    icon: "💬"
  },
  {
    question: "What are the prizes?",
    answer: "Total prize pool of ₹15 Crore+ with rewards for top 192 players. Winners receive cash prizes, trophies, and exclusive merchandise.",
    category: "Prizes",
    icon: "💰"
  },
  {
    question: "Is the platform secure?",
    answer: "100% secure platform with advanced encryption, anti-cheat technology, and fair play certification. Your data and transactions are fully protected.",
    category: "Security",
    icon: "🔒"
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const categories = ["All", ...new Set(faqs.map(faq => faq.category))];
  
  const filteredFaqs = activeCategory === "All" 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <section id="faq" className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-800 via-indigo-900 to-purple-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-[100px] animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-[120px] animate-pulse delay-2000" />
        </div>
        
        {/* Circuit Board Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10 L50 10 M30 10 L30 50 M10 30 L50 30' stroke='white' stroke-width='0.5' fill='none'/%3E%3Ccircle cx='10' cy='10' r='2' fill='white'/%3E%3Ccircle cx='50' cy='10' r='2' fill='white'/%3E%3Ccircle cx='30' cy='50' r='2' fill='white'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '40px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
            <HelpCircle className="w-4 h-4 text-purple-300" />
            <span className="text-purple-200 font-semibold text-sm uppercase tracking-wider">Got Questions?</span>
            <HelpCircle className="w-4 h-4 text-purple-300" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
  <span className="text-white">Frequently Asked </span>
  <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
    Questions
  </span>
</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 mx-auto rounded-full mb-6" />
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Everything you need to know about the tournament. Can't find what you're looking for?
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300",
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 backdrop-blur-sm border border-white/10"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500" />
              
              {/* FAQ Card */}
              <div className="relative bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 overflow-hidden">
                <button
                  className="w-full px-6 py-5 text-left flex justify-between items-center group"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="text-2xl">{faq.icon}</div>
                    <div className="flex-1">
                      <span className="text-xs font-semibold text-purple-300 uppercase tracking-wider">
                        {faq.category}
                      </span>
                      <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                        {faq.question}
                      </h3>
                    </div>
                  </div>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-purple-400 transition-all duration-300 flex-shrink-0",
                      openIndex === index && "rotate-180"
                    )}
                  />
                </button>
                
                <div
                  className={cn(
                    "px-6 overflow-hidden transition-all duration-500 ease-in-out",
                    openIndex === index ? "max-h-40 pb-5" : "max-h-0"
                  )}
                >
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Support Banner */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-purple-500/20 p-3 rounded-full">
                  <MessageCircle className="w-8 h-8 text-purple-300" />
                </div>
                <div>
                  <p className="text-white font-bold text-lg">Still have questions?</p>
                  <p className="text-gray-300 text-sm">Our support team is here to help you 24/7</p>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all duration-300 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Email Us
                </button>
                <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg">
                  <Phone className="w-4 h-4" />
                  Live Chat
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a href="#" className="text-gray-400 hover:text-purple-300 text-sm transition-colors flex items-center gap-1">
            Terms & Conditions <ExternalLink className="w-3 h-3" />
          </a>
          <span className="text-gray-600">•</span>
          <a href="#" className="text-gray-400 hover:text-purple-300 text-sm transition-colors flex items-center gap-1">
            Privacy Policy <ExternalLink className="w-3 h-3" />
          </a>
          <span className="text-gray-600">•</span>
          <a href="#" className="text-gray-400 hover:text-purple-300 text-sm transition-colors flex items-center gap-1">
            Tournament Rules <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
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