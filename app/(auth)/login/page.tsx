"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../../lib/firebase";
import type { FirebaseError } from "firebase/app";
export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [googleLoading, setGoogleLoading] = useState(false);

  useEffect(() => {
    // Check for success message from registration
    const urlParams = new URLSearchParams(window.location.search);
    const message = urlParams.get("message");
    if (message) {
      setSuccessMessage(message);
    }
  }, []);

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
    if (!formData.password) {
      setError("Password is required");
      return false;
    }
    return true;
  };

  const handleGoogleSignIn = async () => {
    setError("");
    setSuccessMessage("");
    setGoogleLoading(true);

    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({
        prompt: "select_account",
      });

      const result = await signInWithPopup(auth, provider);
      console.log("Google sign-in successful:", result.user.email);

      // Redirect to search page after successful login
      router.push("/pilih-role");
    } catch (err: unknown) {
      console.error("Google sign-in error:", err);

      if (err instanceof Error && "code" in err) {
        const firebaseError = err as FirebaseError;
        if (firebaseError.code === "auth/popup-closed-by-user") {
          setError("Sign-in cancelled. Please try again.");
        } else if (firebaseError.code === "auth/popup-blocked") {
          setError(
            "Popup blocked by browser. Please allow popups and try again.",
          );
        } else if (
          firebaseError.code === "auth/account-exists-with-different-credential"
        ) {
          setError(
            "Account already exists with different sign-in method. Please use email/password.",
          );
        } else {
          setError("Google sign-in failed. Please try again.");
        }
      } else {
        setError("Google sign-in failed. Please try again.");
      }
    } finally {
      setGoogleLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    if (!validateForm()) return;

    setLoading(true);

    try {
      // Sign in with Firebase Authentication
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password,
      );

      console.log("Login successful:", userCredential.user.email);

      // Redirect to search page after successful login
      router.push("/pilih-role");
    } catch (err: unknown) {
      console.error("Login error:", err);

      // Handle Firebase errors
      if (err instanceof Error && "code" in err) {
        const firebaseError = err as FirebaseError;
        if (firebaseError.code === "auth/user-not-found") {
          setError("No account found with this email. Please register first.");
        } else if (firebaseError.code === "auth/wrong-password") {
          setError("Incorrect password. Please try again.");
        } else if (firebaseError.code === "auth/invalid-email") {
          setError("Invalid email format.");
        } else if (firebaseError.code === "auth/too-many-requests") {
          setError("Too many failed attempts. Please try again later.");
        } else {
          setError("Login failed. Please try again.");
        }
      } else {
        setError("Login failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* LEFT SIDE */}
      <div className="hidden md:flex w-1/2 bg-foreground text-[#10324F] flex-col justify-center items-center px-12">
        <button
          onClick={() => router.push("/")}
          className="absolute top-6 left-6 flex items-center gap-2 text-sm hover:opacity-70 transition"
        >
          <ArrowLeft size={20} />
          Back
        </button>

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
          <h1 className="text-4xl font-bold text-black mb-3">Welcome</h1>

          {/* Subtitle */}
          <p className="text-gray-500 mb-8">
            Sign in to continue managing creator partnerships and campaign
            insights.
          </p>

          {/* Google Button */}
          <button
            onClick={handleGoogleSignIn}
            disabled={googleLoading}
            className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-xl shadow-md hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FaGoogle className="text-main-blue" />
            <span className="text-sm text-black font-medium">
              {googleLoading ? "Signing in..." : "Continue with Google"}
            </span>
          </button>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-3 text-gray-400 text-sm">or</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Success Message */}
          {successMessage && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-xl text-green-600 text-sm">
              {successMessage}
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <label
              htmlFor="email"
              className="block text-sm font-medium text-black"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="youremail@gmail.com"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={loading}
            />

            {/* Password */}
            <label
              htmlFor="password"
              className="block text-sm font-medium text-black"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="yourpassword"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={loading}
            />

            {/* Continue Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-main-blue text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Signing In..." : "Continue"}
            </button>
          </form>

          <p className="text-gray-500 text-sm mt-4 text-center">
            Are you a new user?{" "}
            <Link
              href="/register"
              className="text-main-blue font-medium hover:underline"
            >
              Sign Up
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
