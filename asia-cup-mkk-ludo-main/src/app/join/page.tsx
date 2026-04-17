"use client";

import { Trophy, Gift, Users, Clock, ArrowLeft, CheckCircle, CreditCard, Shield } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function JoinPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", city: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        router.push('/');
      }, 2000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <div className="container mx-auto px-4 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors mb-8">
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        {showSuccess && (
          <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
            Registration Successful! Redirecting...
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Join the Tournament</h1>
              <p className="text-gray-300">Register now to secure your spot</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white mb-2 font-semibold">Full Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-yellow-400"
                  placeholder="Enter your full name" />
              </div>
              <div>
                <label className="block text-white mb-2 font-semibold">Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-yellow-400"
                  placeholder="Enter your email" />
              </div>
              <div>
                <label className="block text-white mb-2 font-semibold">Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-yellow-400"
                  placeholder="Enter your phone number" />
              </div>
              <div>
                <label className="block text-white mb-2 font-semibold">City</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-yellow-400"
                  placeholder="Enter your city" />
              </div>
              <button type="submit" disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-all disabled:opacity-50">
                {isSubmitting ? "Registering..." : "Register Now - ₹499"}
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Why Join?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Gift className="w-6 h-6 text-yellow-400" />
                  <div><h3 className="text-white font-semibold">₹15 Crore Prize Pool</h3><p className="text-gray-300 text-sm">Compete for the biggest prize</p></div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-yellow-400" />
                  <div><h3 className="text-white font-semibold">10,000+ Players</h3><p className="text-gray-300 text-sm">Join India's largest Ludo community</p></div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-yellow-400" />
                  <div><h3 className="text-white font-semibold">Flexible Schedule</h3><p className="text-gray-300 text-sm">Play at your convenience</p></div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-4">What's Included?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-300"><CheckCircle className="w-5 h-5 text-green-500" /> Tournament Entry Pass</li>
                <li className="flex items-center gap-3 text-gray-300"><CheckCircle className="w-5 h-5 text-green-500" /> Exclusive Player Dashboard</li>
                <li className="flex items-center gap-3 text-gray-300"><CheckCircle className="w-5 h-5 text-green-500" /> Live Match Tracking</li>
              </ul>
            </div>

            <div className="flex items-center justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2"><CreditCard className="w-4 h-4" /><span>Secure Payment</span></div>
              <div className="flex items-center gap-2"><Shield className="w-4 h-4" /><span>100% Safe</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}