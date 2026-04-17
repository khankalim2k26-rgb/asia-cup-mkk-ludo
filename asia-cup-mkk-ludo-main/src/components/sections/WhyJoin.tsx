import { Trophy, Gift, Rocket, Shield, Users, Star, Sparkles, Crown, Zap, Heart } from "lucide-react";

const reasons = [
  {
    icon: Trophy,
    title: "Competitive Experience",
    description: "Test your skills against a large pool of players in a structured tournament environment.",
    color: "from-indigo-400 to-purple-400",
    gradient: "from-indigo-500/10 to-purple-500/10",
    stat: "10,000+",
    statLabel: "Players"
  },
  {
    icon: Gift,
    title: "Exciting Rewards",
    description: "Top-performing players get access to premium rewards and recognition.",
    color: "from-amber-400 to-orange-400",
    gradient: "from-amber-500/10 to-orange-500/10",
    stat: "₹15 Cr",
    statLabel: "Prize Pool"
  },
  {
    icon: Rocket,
    title: "Easy Registration",
    description: "A quick and simple sign-up process helps players join without confusion.",
    color: "from-blue-400 to-cyan-400",
    gradient: "from-blue-500/10 to-cyan-500/10",
    stat: "2 Min",
    statLabel: "Registration"
  },
  {
    icon: Shield,
    title: "Fair Play Focus",
    description: "Matches are designed to support transparent competition and a better player experience.",
    color: "from-emerald-400 to-teal-400",
    gradient: "from-emerald-500/10 to-teal-500/10",
    stat: "100%",
    statLabel: "Transparent"
  },
  {
    icon: Users,
    title: "Community & Recognition",
    description: "Be part of a growing gaming community and earn recognition through performance.",
    color: "from-rose-400 to-pink-400",
    gradient: "from-rose-500/10 to-pink-500/10",
    stat: "50K+",
    statLabel: "Community"
  },
  {
    icon: Crown,
    title: "Win Big Prizes",
    description: "Compete for massive rewards and become a champion in the biggest Ludo tournament.",
    color: "from-amber-400 to-yellow-400",
    gradient: "from-amber-500/10 to-yellow-500/10",
    stat: "192",
    statLabel: "Winners"
  },
];

const features = [
  { label: "Live Leaderboard", icon: Star },
  { label: "Real-time Updates", icon: Zap },
  { label: "Expert Support", icon: Heart },
  { label: "Secure Platform", icon: Shield },
];

export default function WhyJoin() {
  return (
    <section id="tournament" className="relative py-24 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(255,255,255,0.03)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}
        />
        <div className="absolute top-1/3 -left-48 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 -right-48 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full mb-6 border border-white/10">
            <Star className="w-4 h-4 text-amber-400" />
            <span className="text-gray-300 font-semibold text-sm">Why Choose Us</span>
            <Star className="w-4 h-4 text-amber-400" />
          </div>
         <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
  <span className="text-white">Why Join </span>
  <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-rose-400 bg-clip-text text-transparent">
    MKK Ludo Asia Cup
  </span>
</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mb-6" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience the thrill of competitive Ludo with amazing benefits and become part of India's biggest gaming community
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { value: "10,000+", label: "Active Players", icon: Users },
            { value: "₹15 Cr", label: "Prize Pool", icon: Trophy },
            { value: "192", label: "Winners", icon: Crown },
            { value: "24/7", label: "Support", icon: Shield },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10 hover:border-amber-500/30 transition-all duration-300 group">
              <div className="inline-flex p-2 rounded-lg bg-white/5 group-hover:bg-amber-500/10 transition-all duration-300 mb-2">
                <stat.icon className="w-5 h-5 text-amber-400" />
              </div>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-amber-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with Gradient */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${reason.color} opacity-90 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {reason.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {reason.description}
                  </p>
                  
                  {/* Stat Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    <Star className="w-3 h-3 text-amber-400" />
                    <span className="text-xs text-gray-400">{reason.stat} {reason.statLabel}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Strip */}
        <div className="mt-16 bg-white/5 rounded-2xl p-8 border border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, idx) => {
              const FeatureIcon = feature.icon;
              return (
                <div key={idx} className="flex items-center justify-center gap-2 group cursor-pointer">
                  <div className="p-1 rounded-full bg-amber-500/10 group-hover:bg-amber-500/20 transition-all duration-300">
                    <FeatureIcon className="w-4 h-4 text-amber-400" />
                  </div>
                  <span className="text-gray-400 group-hover:text-white transition-colors">{feature.label}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700" />
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='rgba(255,255,255,0.1)' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat'
            }}
          />
          
          <div className="relative z-10 p-8 md:p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Begin Your Journey?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of players and compete for your share of ₹15 Crore+ prize pool
            </p>
            <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-xl border border-white/20 transition-all duration-300 hover:scale-105">
              Register Now - It's Free!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}