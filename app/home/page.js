"use client";
import { useState } from "react";
import {
  Heart,
  Menu,
  X,
  User,
  MessageCircle,
  Search,
  ChevronRight,
} from "lucide-react";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900 text-white">
      {/* Hero Section */}
      <div className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div
          className="flex flex-col md:flex-row items-center gap-12 py-12"
          style={{ marginTop: "-40px" }}
        >
          <div className="md:w-1/2">
            <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Find Your{" "}
                <span className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
                  Perfect Match
                </span>{" "}
                for Everyone
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Hrinder is a safe, inclusive platform designed for everyone -
                LGBTQ+ and straight individuals alike - to connect, date, and
                build meaningful relationships in a respectful environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 rounded-full text-white font-medium text-lg hover:opacity-90 transition flex items-center justify-center gap-2">
                  Join Now <ChevronRight className="h-5 w-5" />
                </button>
                <button className="bg-white/10 px-6 py-3 rounded-full text-white font-medium text-lg border border-white/20 hover:bg-white/20 transition">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
              <div className="relative bg-black/30 backdrop-blur-sm rounded-3xl border border-white/10 p-6 shadow-xl">
                <img
                  src="https://i.pinimg.com/736x/b0/3e/46/b03e46471e541f6edcdf063e34d4b06e.jpg"
                  alt="Diverse couples using the Hrinder app"
                  className="w-full h-auto rounded-lg mb-6"
                />
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    <div className="h-2 w-2 rounded-full bg-red-500"></div>
                    <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                    <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                    <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                  </div>
                  <div className="text-sm text-gray-400">
                    5,000+ matches today
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <button className="bg-white/10 p-2 rounded-full hover:bg-white/20">
                      <X className="h-6 w-6 text-red-500" />
                    </button>
                    <button className="bg-white/10 p-2 rounded-full hover:bg-white/20">
                      <MessageCircle className="h-6 w-6 text-blue-500" />
                    </button>
                    <button className="bg-white/10 p-2 rounded-full hover:bg-white/20">
                      <Heart className="h-6 w-6 text-pink-500" />
                    </button>
                  </div>
                  <button className="bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 rounded-full text-sm font-medium">
                    Match Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose{" "}
          <span className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
            Hrinder
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition">
            <div className="bg-gradient-to-br from-pink-500 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <User className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Inclusive Profiles</h3>
            <p className="text-gray-300">
              Customize your profile with pronouns, gender identity, and
              orientation. Express yourself authentically whether you are LGBTQ+
              or straight.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition">
            <div className="bg-gradient-to-br from-purple-500 to-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Search className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Smart Matching</h3>
            <p className="text-gray-300">
              Our algorithm understands dating preferences across all
              orientations and helps you find compatible connections based on
              what matters to you.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition">
            <div className="bg-gradient-to-br from-blue-500 to-green-500 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <MessageCircle className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Safe Communication</h3>
            <p className="text-gray-300">
              Secure messaging with privacy controls, allowing everyone to
              connect safely in a respectful, inclusive environment.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-90"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>

          <div className="relative py-12 px-6 md:py-16 md:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to find meaningful connections?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Join thousands of people who have found friendship, love, and
              community on Hrinder - an inclusive space for everyone.
            </p>
            <button className="bg-white text-purple-700 px-8 py-3 rounded-full text-lg font-medium hover:bg-white/90 transition">
              Start Your Journey Today
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
    </div>
  );
}
