"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../../lib/firebase";
import type { FirebaseError } from "firebase/app";
export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (error) setError("");
  };

  const validateForm = () => {
    if (!formData.email) {
      setError("Email is required");
      return false;
    }
    if (!formData.email.includes("@")) {
      setError("Please enter a valid email");
      return false;
    }
    if (!formData.password) {
      setError("Password is required");
      return false;
    }
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return false;
    }
    return true;
  };

  const handleGoogleSignUp = async () => {
    setError("");
    setGoogleLoading(true);

    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({
        prompt: "select_account",
      });

      const result = await signInWithPopup(auth, provider);
      console.log("Google sign-up successful:", result.user.email);

      // Redirect to login page after successful registration
      router.push("/login?message=Registration successful! Please sign in.");
    } catch (err: unknown) {
      console.error("Google sign-up error:", err);

      if (err instanceof Error && "code" in err) {
        const firebaseError = err as FirebaseError;
        if (firebaseError.code === "auth/popup-closed-by-user") {
          setError("Sign-up cancelled. Please try again.");
        } else if (firebaseError.code === "auth/popup-blocked") {
          setError(
            "Popup blocked by browser. Please allow popups and try again.",
          );
        } else if (
          firebaseError.code === "auth/account-exists-with-different-credential"
        ) {
          setError("Account already exists. Please sign in instead.");
        } else {
          setError("Google sign-up failed. Please try again.");
        }
      } else {
        setError("Google sign-up failed. Please try again.");
      }
    } finally {
      setGoogleLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) return;

    setLoading(true);

    try {
      // Create user with Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password,
      );

      console.log("Registration successful:", userCredential.user.email);

      // Redirect to login page after successful registration
      router.push("/login?message=Registration successful! Please sign in.");
    } catch (err: unknown) {
      console.error("Registration error:", err);

      // Handle Firebase errors
      if (err instanceof Error && "code" in err) {
        const firebaseError = err as FirebaseError;
        if (firebaseError.code === "auth/email-already-in-use") {
          setError("Email already registered. Please use a different email.");
        } else if (firebaseError.code === "auth/weak-password") {
          setError("Password is too weak. Please choose a stronger password.");
        } else if (firebaseError.code === "auth/invalid-email") {
          setError("Invalid email format.");
        } else {
          setError("Registration failed. Please try again.");
        }
      } else {
        setError("Registration failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* LEFT SIDE */}
      <div className="hidden md:flex w-1/2 bg-foreground text-[#10324F] flex-col justify-center items-center px-12 relative">
        {/* BACK BUTTON */}
        <Link
          href="/"
          className="absolute top-6 left-6 flex items-center gap-2 text-sm hover:opacity-70 transition"
        >
          <ArrowLeft size={20} />
          Back
        </Link>

        <div className="max-w-md text-center">
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <Image
              src="img/logo/logo fluensy dark.svg"
              alt="Fluensy Logo"
              width={200}
              height={200}
            />
          </div>

          {/* Text */}
          <h2 className="text-2xl font-semibold leading-snug">
            AI-powered campaign management platform.
          </h2>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6">
        <div className="w-full max-w-md">
          {/* Title */}
          <h1 className="text-4xl font-bold text-black mb-3">Create Account</h1>

          {/* Subtitle */}
          <p className="text-gray-500 mb-8">
            Sign up to start managing creator partnerships and campaign
            insights.
          </p>

          {/* Google Button */}
          <button
            onClick={handleGoogleSignUp}
            disabled={googleLoading}
            className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-xl shadow-md hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaGoogle className="text-main-blue" />
            <span className="text-sm text-black font-medium">
              {googleLoading ? "Creating Account..." : "Continue with Google"}
            </span>
          </button>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-3 text-gray-400 text-sm">or</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <label className="block text-sm font-medium text-black">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="youremail@gmail.com"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={loading}
            />

            {/* Password */}
            <label className="block text-sm font-medium text-black">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="yourpassword"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={loading}
            />

            {/* Confirm Password */}
            <label className="block text-sm font-medium text-black">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="confirm your password"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={loading}
            />

            {/* Continue Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-main-blue text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Creating Account..." : "Sign Up"}
            </button>
          </form>

          {/* Login Redirect */}
          <p className="text-gray-500 text-sm mt-4 text-center">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-main-blue font-medium hover:underline"
            >
              Sign In
            </Link>
          </p>

          {/* Terms */}
          <p className="text-gray-400 text-sm mt-6 text-center">
            By signing up, you agree to Fluensy’s{" "}
            <span className="underline cursor-pointer">Privacy policy</span> &{" "}
            <span className="underline cursor-pointer">Terms of service</span>
          </p>
        </div>
      </div>
    </div>
  );
}
