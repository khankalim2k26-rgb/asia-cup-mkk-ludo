import Link from "next/link";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight, 
  Trophy, 
  Shield, 
  Award,
  Sparkles
} from "lucide-react";
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube 
} from "react-icons/fa";

const footerLinks = {
  company: [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Tournament", href: "/#tournament" },
    { name: "Prizes", href: "/#prizes" },
    { name: "How It Works", href: "/#how-it-works" },
  ],
  support: [
    { name: "FAQ", href: "/#faq" },
    { name: "Contact", href: "/#contact" },
    { name: "Terms", href: "/terms" },
    { name: "Privacy", href: "/privacy" },
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "Community", href: "/community" },
    { name: "Leaderboard", href: "/leaderboard" },
    { name: "Support Center", href: "/support" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-12 pb-6 overflow-hidden">
      {/* Simple Sparkle Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              background: `radial-gradient(circle, rgba(255,${Math.random() * 100 + 155},0,0.6) 0%, transparent 80%)`,
              borderRadius: '50%',
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-6">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Trophy className="w-6 h-6 text-yellow-500" />
              <h3 className="text-lg font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                MKK Ludo
              </h3>
            </div>
            <p className="text-gray-400 text-xs mb-3 leading-relaxed">
              Asia's biggest Ludo tournament with ₹15 Cr+ prize pool.
            </p>
            <div className="flex space-x-2">
              <a href="#" className="bg-white/10 hover:bg-yellow-500 rounded-lg p-1.5 transition-all">
                <FaFacebook className="w-3.5 h-3.5 text-gray-400 hover:text-white" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-yellow-500 rounded-lg p-1.5 transition-all">
                <FaTwitter className="w-3.5 h-3.5 text-gray-400 hover:text-white" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-yellow-500 rounded-lg p-1.5 transition-all">
                <FaInstagram className="w-3.5 h-3.5 text-gray-400 hover:text-white" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-yellow-500 rounded-lg p-1.5 transition-all">
                <FaYoutube className="w-3.5 h-3.5 text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-yellow-500">Quick Links</h4>
            <ul className="space-y-1.5">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-yellow-500 text-xs transition-colors flex items-center gap-1 group"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-yellow-500">Support</h4>
            <ul className="space-y-1.5">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-yellow-500 text-xs transition-colors flex items-center gap-1 group"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-yellow-500">Resources</h4>
            <ul className="space-y-1.5">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-yellow-500 text-xs transition-colors flex items-center gap-1 group"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-3 text-yellow-500">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-400 text-xs">
                <Mail className="w-3.5 h-3.5 text-yellow-500" />
                <span>support@mkkludo.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-xs">
                <Phone className="w-3.5 h-3.5 text-yellow-500" />
                <span>+91 8409199953</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-xs">
                <MapPin className="w-3.5 h-3.5 text-yellow-500" />
                <span>India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-4 py-3 border-t border-white/10">
          <div className="flex items-center gap-1.5">
            <Shield className="w-3 h-3 text-green-500" />
            <span className="text-gray-500 text-xs">100% Secure</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Award className="w-3 h-3 text-yellow-500" />
            <span className="text-gray-500 text-xs">Verified</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 flex items-center justify-center text-green-500 text-xs">✓</div>
            <span className="text-gray-500 text-xs">Fair Play</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-yellow-500" />
            <span className="text-gray-500 text-xs">24/7 Support</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-3 border-t border-white/10">
          <p className="text-gray-600 text-xs">
            © 2026 MKK Ludo. All rights reserved.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 0.6; transform: scale(1); }
        }
        .animate-twinkle {
          animation: twinkle ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}