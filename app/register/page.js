"use client";
import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import axios from "axios";

export default function AuthPages() {
  const [isLogin, setIsLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    privacyPolicy: false,
    termsConditions: false,
    ageVerification: false,
    selfConsent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", form); // Log form data before sending

    try {
      const res = await axios.post("/api/register", form);
      console.log("Server Response:", res.data);

      if (res.status === 201) {
        window.location.href = "/choose"; // Redirect only on success
      } else {
        console.error("Error creating user:", res.data.message);
      }
    } catch (err) {
      console.error("Request failed:", err.response?.data || err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900 text-white flex flex-col justify-center">
      <div className="fixed -top-64 -right-64 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl z-0"></div>
      <div className="fixed -bottom-64 -left-64 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl z-0"></div>

      <div className="container mx-auto px-4 py-8 max-w-md relative z-10">
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6 md:p-8 shadow-xl">
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 rounded-full p-1 inline-flex">
                <button
                  type="button"
                  onClick={() => setIsLogin(false)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    !isLogin
                      ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  Sign Up
                </button>
                <button
                  type="button"
                  onClick={() => setIsLogin(true)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    isLogin
                      ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  Login
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {!isLogin && (
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="bg-white/10 border border-white/10 text-white rounded-lg block w-full pl-10 p-2.5 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                      placeholder="John Doe"
                      required={!isLogin}
                    />
                  </div>
                </div>
              )}

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="bg-white/10 border border-white/10 text-white rounded-lg block w-full pl-10 p-2.5 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                    placeholder="name@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    className="bg-white/10 border border-white/10 text-white rounded-lg block w-full pl-10 pr-10 p-2.5 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              {!isLogin && (
                <div>
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="bg-white/10 border border-white/10 text-white rounded-lg block w-full pl-10 p-2.5 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                      placeholder="+1 (123) 456-7890"
                      required={!isLogin}
                    />
                  </div>
                </div>
              )}
            </div>

            {!isLogin && (
              <div className="space-y-2 pt-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="privacyPolicy"
                    name="privacyPolicy"
                    checked={form.privacyPolicy}
                    onChange={handleChange}
                    className="mr-2 w-4 h-4 rounded bg-white/10 border border-white/10 focus:ring-purple-500"
                    required
                  />
                  <label
                    htmlFor="privacyPolicy"
                    className="text-sm text-gray-300"
                  >
                    I accept the{" "}
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="termsConditions"
                    name="termsConditions"
                    checked={form.termsConditions}
                    onChange={handleChange}
                    className="mr-2 w-4 h-4 rounded bg-white/10 border border-white/10 focus:ring-purple-500"
                    required
                  />
                  <label
                    htmlFor="termsConditions"
                    className="text-sm text-gray-300"
                  >
                    I agree to the{" "}
                    <Link href="/terms-and-conditions">Terms & Conditions</Link>
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="ageVerification"
                    name="ageVerification"
                    checked={form.ageVerification}
                    onChange={handleChange}
                    className="mr-2 w-4 h-4 rounded bg-white/10 border border-white/10 focus:ring-purple-500"
                    required
                  />
                  <label
                    htmlFor="ageVerification"
                    className="text-sm text-gray-300"
                  >
                    I confirm I am at least 18 years old.
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="selfConsent"
                    name="selfConsent"
                    checked={form.selfConsent}
                    onChange={handleChange}
                    className="mr-2 w-4 h-4 rounded bg-white/10 border border-white/10 focus:ring-purple-500"
                  />
                  <label
                    htmlFor="selfConsent"
                    className="text-sm text-gray-300"
                  >
                    I consent to receiving promotional emails.
                  </label>
                </div>
              </div>
            )}

            <div className="pt-4">
              <button
                type="submit"
                className="bg-gradient-to-r from-pink-500 to-purple-600 w-full py-3 rounded-lg text-white font-medium flex items-center justify-center gap-2 hover:opacity-90 transition shadow-lg"
              >
                {isLogin ? "Log In" : "Create Account"}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
