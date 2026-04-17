"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TrailerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <div className="container mx-auto px-4 py-16">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors mb-8">
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">Tournament Trailer</h1>
          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
            <video controls autoPlay className="w-full h-full">
              <source src="/videos/ludo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-center text-gray-400 mt-4 p-2">Add your trailer video to /public/videos/ludo.mp4</p>
          </div>
        </div>
      </div>
    </div>
  );
}