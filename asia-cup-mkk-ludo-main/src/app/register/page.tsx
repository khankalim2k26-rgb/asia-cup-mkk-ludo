"use client";

import Link from "next/link";
import { ArrowLeft, Trophy } from "lucide-react";
import RegistrationForm from "@/components/sections/RegistrationForm";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header - Moved up */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-3 rounded-full shadow-lg animate-pulse">
              <Trophy className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Tournament Registration
          </h1>
          <p className="text-lg text-gray-600">
            Join the MKK Ludo Championship and win exciting prizes worth ₹1,00,000+!
          </p>
        </div>

        {/* Back Button - Moved down with more spacing */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center text-gray-600 hover:text-yellow-600 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>

        {/* Registration Form */}
        <RegistrationForm />
      </div>
    </div>
  );
}