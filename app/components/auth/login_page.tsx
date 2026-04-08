"use client";

import Image from "next/image";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";



export default function LoginPage() {

    const router = useRouter();

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
          <h1 className="text-4xl font-bold text-black mb-3">
            Welcome
          </h1>

          {/* Subtitle */}
          <p className="text-gray-500 mb-8">
            Sign in to continue managing creator partnerships and campaign insights.
          </p>

          {/* Google Button */}
          <button className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-xl shadow-md hover:shadow-lg transition">
            <FaGoogle className="text-main-blue" />
            <span className="text-sm text-black font-medium">
              Continue with Google
            </span>
          </button>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-3 text-gray-400 text-sm">or</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Form */}
          <form className="space-y-4">
            
            {/* Email */}
            <label htmlFor="email" className="block text-sm font-medium text-black">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="youremail@gmail.com"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Password */}
            <label htmlFor="password" className="block text-sm font-medium text-black">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="yourpassword"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Continue Button */}
            <button
              type="submit"
              className="w-full bg-main-blue text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition"
            >
              Continue
            </button>
          </form>

          <p className="text-gray-500 text-sm mt-4 text-center">
                Are you a new user?{" "}
                <Link href="/register" className="text-main-blue font-medium hover:underline">
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