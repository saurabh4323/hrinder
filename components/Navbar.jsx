"use client";
import { useState } from "react";
import { Heart, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black/30 backdrop-blur-md border-b border-white/10 fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-2">
                <Heart className="h-8 w-8 text-pink-500 fill-pink-500" />
                <span className="text-2xl font-bold bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
                  Hrinder
                </span>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <Link
                  href="/"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition text-white"
                >
                  Home
                </Link>
                <Link
                  href="/browse"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition text-white"
                >
                  Browse
                </Link>
                <Link
                  href="/messages"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition text-white"
                >
                  Messages
                </Link>
                <Link
                  href="/about"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition text-white"
                >
                  About
                </Link>
                <Link
                  href="/safety"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition text-white"
                >
                  Safety
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 rounded-full text-white font-medium mr-3 hover:opacity-90 transition">
                Sign Up
              </button>
              <button className="bg-white/10 px-4 py-2 rounded-full text-white font-medium border border-white/20 hover:bg-white/20 transition">
                Log In
              </button>
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/50 backdrop-blur-md">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10 text-white"
            >
              Home
            </Link>
            <Link
              href="/browse"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10 text-white"
            >
              Browse
            </Link>
            <Link
              href="/messages"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10 text-white"
            >
              Messages
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10 text-white"
            >
              About
            </Link>
            <Link
              href="/safety"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-white/10 text-white"
            >
              Safety
            </Link>
            <div className="mt-4 flex flex-col gap-2 pb-2">
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 rounded-full text-white font-medium hover:opacity-90 transition">
                Sign Up
              </button>
              <button className="bg-white/10 px-4 py-2 rounded-full text-white font-medium border border-white/20 hover:bg-white/20 transition">
                Log In
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
