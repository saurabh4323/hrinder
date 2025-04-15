"use client";
import { useState } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Phone,
  ArrowRight,
  ChevronLeft,
} from "lucide-react";

export default function AuthPages() {
  const [isLogin, setIsLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission - add your authentication logic here
    console.log(
      isLogin ? "Login form submitted" : "Signup form submitted",
      form
    );
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900 text-white flex flex-col justify-center">
      {/* Decorative Elements */}
      <div className="fixed -top-64 -right-64 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl z-0"></div>
      <div className="fixed -bottom-64 -left-64 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl z-0"></div>

      <div
        className="container mx-auto px-4 py-8 max-w-md relative z-10"
        style={{ marginTop: "3rem", zIndex: "1" }}
      >
        {/* Auth Card */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6 md:p-8 shadow-xl">
          <form onSubmit={handleSubmit}>
            {/* Toggle between Login and Signup */}
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

            {/* Form Fields */}
            <div className="space-y-4">
              {/* Name - only for signup */}
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

              {/* Email */}
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

              {/* Password */}
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

              {/* Phone Number - only for signup */}
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
                      id="phoneNumber"
                      name="phoneNumber"
                      value={form.phoneNumber}
                      onChange={handleChange}
                      className="bg-white/10 border border-white/10 text-white rounded-lg block w-full pl-10 p-2.5 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
                      placeholder="+1 (123) 456-7890"
                      required={!isLogin}
                    />
                  </div>
                </div>
              )}

              {/* Checkboxes - only for signup */}
              {!isLogin && (
                <div className="space-y-3 mt-6">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="privacyPolicy"
                        name="privacyPolicy"
                        type="checkbox"
                        checked={form.privacyPolicy}
                        onChange={handleChange}
                        className="w-4 h-4 bg-purple-900 rounded border-gray-600 focus:ring-purple-500"
                        required
                      />
                    </div>
                    <label
                      htmlFor="privacyPolicy"
                      className="ml-2 text-sm text-gray-300"
                    >
                      I agree to the{" "}
                      <a
                        href="#"
                        className="text-purple-400 hover:text-purple-300"
                      >
                        Privacy Policy
                      </a>
                    </label>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="termsConditions"
                        name="termsConditions"
                        type="checkbox"
                        checked={form.termsConditions}
                        onChange={handleChange}
                        className="w-4 h-4 bg-purple-900 rounded border-gray-600 focus:ring-purple-500"
                        required
                      />
                    </div>
                    <label
                      htmlFor="termsConditions"
                      className="ml-2 text-sm text-gray-300"
                    >
                      I agree to the{" "}
                      <a
                        href="#"
                        className="text-purple-400 hover:text-purple-300"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="ageVerification"
                        name="ageVerification"
                        type="checkbox"
                        checked={form.ageVerification}
                        onChange={handleChange}
                        className="w-4 h-4 bg-purple-900 rounded border-gray-600 focus:ring-purple-500"
                        required
                      />
                    </div>
                    <label
                      htmlFor="ageVerification"
                      className="ml-2 text-sm text-gray-300"
                    >
                      I confirm that I am 18 years or older
                    </label>
                  </div>

                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="selfConsent"
                        name="selfConsent"
                        type="checkbox"
                        checked={form.selfConsent}
                        onChange={handleChange}
                        className="w-4 h-4 bg-purple-900 rounded border-gray-600 focus:ring-purple-500"
                        required
                      />
                    </div>
                    <label
                      htmlFor="selfConsent"
                      className="ml-2 text-sm text-gray-300"
                    >
                      I am using this service of my own consent
                    </label>
                  </div>
                </div>
              )}

              {/* Forgot Password - only for login */}
              {isLogin && (
                <div className="text-right">
                  <a
                    href="#"
                    className="text-sm text-purple-400 hover:text-purple-300"
                  >
                    Forgot password?
                  </a>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 w-full py-3 rounded-lg text-white font-medium flex items-center justify-center gap-2 hover:opacity-90 transition shadow-lg"
                >
                  {isLogin ? "Log In" : "Create Account"}{" "}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </form>

          {/* Social Login Options */}
          {isLogin && (
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-transparent text-gray-400">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="bg-white/10 py-2 px-4 rounded-lg border border-white/10 flex items-center justify-center hover:bg-white/20 transition"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className="bg-white/10 py-2 px-4 rounded-lg border border-white/10 flex items-center justify-center hover:bg-white/20 transition"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M13.119 20.94a.251.251 0 0 1-.245.06 11.493 11.493 0 0 1-6.992-6.96.249.249 0 0 1 .062-.245l2.5-2.5a.25.25 0 0 1 .316-.036 6.855 6.855 0 0 0 5.879 5.879.25.25 0 0 1 .154.09.248.248 0 0 1 .037.195l-.711 3.517z"
                      fill="#0866FF"
                    />
                    <path
                      d="M17.051 10.6a6.966 6.966 0 0 0-10.1-3.9.25.25 0 0 1-.3-.05L4.15 4.15a.25.25 0 0 1 .067-.365A11.5 11.5 0 0 1 24 12a.5.5 0 0 1-.5.5h-5.998a.5.5 0 0 1-.488-.407c-.126-.71-.236-1.429-.329-2.148a.25.25 0 0 1 .366-.345z"
                      fill="#0866FF"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Switch between Login and Signup */}
        <div className="text-center mt-6">
          <p className="text-gray-300">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              type="button"
              onClick={toggleAuthMode}
              className="ml-1 text-purple-400 hover:text-purple-300 font-medium"
            >
              {isLogin ? "Sign up" : "Log in"}
            </button>
          </p>
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <a
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-white"
          >
            <ChevronLeft className="h-4 w-4 mr-1" /> Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
