"use client";
import { useState } from "react";
import { Heart, ArrowRight, ArrowLeft } from "lucide-react";

export default function PreferencePage() {
  const [selectedPreference, setSelectedPreference] = useState(null);

  const handleContinue = () => {
    // Here you would navigate to the next step or process the selection
    console.log("Selected preference:", selectedPreference);
    // Add navigation logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900 text-white">
      {/* Header */}
      <div className="pt-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center" style={{ marginTop: "80px" }}>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Tell us what you're{" "}
            <span className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
              looking for
            </span>
          </h1>
          <p className="text-lg text-gray-300 mb-10">
            Select your preferences to help us find your perfect matches
          </p>
        </div>
      </div>

      {/* Preference Cards */}
      <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Straight Card */}
          <div
            className={`bg-white/5 backdrop-blur-sm border rounded-xl overflow-hidden transition-all duration-300 cursor-pointer hover:transform hover:scale-105 ${
              selectedPreference === "straight"
                ? "border-2 border-pink-500 shadow-lg shadow-pink-500/20"
                : "border-white/10"
            }`}
            onClick={() => setSelectedPreference("straight")}
          >
            <div className="h-40 bg-gradient-to-br from-pink-500/40 to-purple-600/40 flex items-center justify-center">
              <Heart className="h-16 w-16 text-pink-400" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Straight</h3>
              <p className="text-gray-300 mb-4">
                Find matches with people of the opposite gender
              </p>
              <div
                className={`rounded-full h-1 w-full bg-gray-700 ${
                  selectedPreference === "straight"
                    ? "bg-gradient-to-r from-pink-500 to-purple-600"
                    : ""
                }`}
              ></div>
            </div>
          </div>

          {/* LGBTQ+ Card */}
          <div
            className={`bg-white/5 backdrop-blur-sm border rounded-xl overflow-hidden transition-all duration-300 cursor-pointer hover:transform hover:scale-105 ${
              selectedPreference === "lgbtq"
                ? "border-2 border-blue-500 shadow-lg shadow-blue-500/20"
                : "border-white/10"
            }`}
            onClick={() => setSelectedPreference("lgbtq")}
          >
            <div className="h-40 bg-gradient-to-br from-blue-500/40 to-purple-600/40 flex items-center justify-center">
              <div className="flex flex-wrap gap-1">
                <div className="h-3 w-12 rounded-sm bg-red-500"></div>
                <div className="h-3 w-12 rounded-sm bg-orange-500"></div>
                <div className="h-3 w-12 rounded-sm bg-yellow-500"></div>
                <div className="h-3 w-12 rounded-sm bg-green-500"></div>
                <div className="h-3 w-12 rounded-sm bg-blue-500"></div>
                <div className="h-3 w-12 rounded-sm bg-purple-500"></div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">LGBTQ+</h3>
              <p className="text-gray-300 mb-4">
                Find matches across the entire LGBTQ+ spectrum
              </p>
              <div
                className={`rounded-full h-1 w-full bg-gray-700 ${
                  selectedPreference === "lgbtq"
                    ? "bg-gradient-to-r from-blue-500 to-purple-600"
                    : ""
                }`}
              ></div>
            </div>
          </div>

          {/* Open to All Card */}
          <div
            className={`bg-white/5 backdrop-blur-sm border rounded-xl overflow-hidden transition-all duration-300 cursor-pointer hover:transform hover:scale-105 ${
              selectedPreference === "all"
                ? "border-2 border-purple-500 shadow-lg shadow-purple-500/20"
                : "border-white/10"
            }`}
            onClick={() => setSelectedPreference("all")}
          >
            <div className="h-40 bg-gradient-to-br from-purple-500/40 to-indigo-600/40 flex items-center justify-center">
              <div className="relative">
                <div className="absolute -left-6 top-0">
                  <Heart className="h-10 w-10 text-pink-400" />
                </div>
                <div className="absolute -right-6 top-0">
                  <Heart className="h-10 w-10 text-blue-400" />
                </div>
                <div className="absolute left-0 -bottom-4">
                  <Heart className="h-10 w-10 text-purple-400" />
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Open to All</h3>
              <p className="text-gray-300 mb-4">
                Show me everyone regardless of gender or orientation
              </p>
              <div
                className={`rounded-full h-1 w-full bg-gray-700 ${
                  selectedPreference === "all"
                    ? "bg-gradient-to-r from-indigo-500 to-purple-600"
                    : ""
                }`}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Detail Selection (shows only after a card is selected) */}
      {selectedPreference && (
        <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
          <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10">
            <h3 className="text-xl font-bold mb-4">Additional Information</h3>

            {selectedPreference === "straight" && (
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2">I am a:</label>
                  <div className="flex flex-wrap gap-3">
                    <button className="bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 border border-white/10">
                      Man
                    </button>
                    <button className="bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 border border-white/10">
                      Woman
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">
                    Looking for:
                  </label>
                  <div className="flex flex-wrap gap-3">
                    <button className="bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 border border-white/10">
                      Men
                    </button>
                    <button className="bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 border border-white/10">
                      Women
                    </button>
                  </div>
                </div>
              </div>
            )}

            {selectedPreference === "lgbtq" && (
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2">
                    I identify as:
                  </label>
                  <div className="flex flex-wrap gap-3">
                    <button className="bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 border border-white/10">
                      Man
                    </button>
                    <button className="bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 border border-white/10">
                      Woman
                    </button>
                    <button className="bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 border border-white/10">
                      Non-binary
                    </button>
                    <button className="bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 border border-white/10">
                      Transgender
                    </button>
                    <button className="bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 border border-white/10">
                      Other
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">
                    Interested in:
                  </label>
                  <div className="flex flex-wrap gap-3">
                    <button className="bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 border border-white/10">
                      Men
                    </button>
                    <button className="bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 border border-white/10">
                      Women
                    </button>
                    <button className="bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 border border-white/10">
                      Non-binary
                    </button>
                    <button className="bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 border border-white/10">
                      Everyone
                    </button>
                  </div>
                </div>
              </div>
            )}

            {selectedPreference === "all" && (
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 mb-2">
                    I identify as:
                  </label>
                  <div className="flex flex-wrap gap-3">
                    <button className="bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 border border-white/10">
                      Man
                    </button>
                    <button className="bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 border border-white/10">
                      Woman
                    </button>
                    <button className="bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 border border-white/10">
                      Non-binary
                    </button>
                    <button className="bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 border border-white/10">
                      Other
                    </button>
                  </div>
                </div>
                <p className="text-gray-300">
                  With "Open to All" selected, we'll show you profiles across
                  all genders and orientations
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between">
          <button className="flex items-center gap-2 text-gray-300 hover:text-white transition">
            <ArrowLeft className="h-4 w-4" /> Back
          </button>

          <button
            onClick={handleContinue}
            disabled={!selectedPreference}
            className={`bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 rounded-full text-white font-medium flex items-center gap-2 transition ${
              !selectedPreference
                ? "opacity-50 cursor-not-allowed"
                : "hover:opacity-90"
            }`}
          >
            Continue <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed -top-24 -right-24 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl z-0"></div>
      <div className="fixed -bottom-24 -left-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl z-0"></div>
    </div>
  );
}
