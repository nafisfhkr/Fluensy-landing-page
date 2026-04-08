"use client";
import { Check, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#F7F9FC] py-20 px-6">
      {/* BACK BUTTON */}
      <Link
        href="/"
        className="absolute top-6 left-6 flex text-black items-center gap-2 text-sm hover:opacity-70 transition"
      >
        <ArrowLeft size={20} />
        Back
      </Link>

      {/* HEADER */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-black">
          Simple, transparent pricing
        </h1>
        <p className="text-gray-500 mt-3">No contracts. No surprise fees.</p>
      </div>

      {/* PRICING CARDS */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 items-center">
        {/* FREE */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-black">
            Rp0<span className="text-sm font-normal"> /month</span>
          </h2>
          <h3 className="mt-4 text-lg text-gray-800 font-semibold">Free</h3>
          <p className="text-gray-500 text-sm mt-2">
            Great for individuals and small brands exploring influencer
            campaigns at no cost.
          </p>

          <ul className="mt-6 space-y-3 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <Check size={16} className="text-[#006FFF]" />
              15 Coin Free
            </li>
            <li className="flex items-center gap-2">
              <Check size={16} className="text-[#006FFF]" />
              Campaign Management
            </li>
            <li className="flex items-center gap-2">
              <Check size={16} className="text-[#006FFF]" />
              Normal Search
            </li>
            <li className="flex items-center gap-2">
              <Check size={16} className="text-[#006FFF]" />
              30-days Free
            </li>
          </ul>

          <Link 
            href="/checkout?plan=free"
            className="block text-center mt-8 w-full bg-gray-100 text-gray-600 py-3 rounded-xl cursor-pointer hover:bg-gray-200 transition-colors duration-200"
          >
            Get Started
          </Link>
        </div>

        {/* BASE / TIER 1 */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-black">
            Rp89,000<span className="text-sm font-normal"> /month</span>
          </h2>
          <h3 className="mt-4 text-lg text-gray-800 font-semibold">Tier 1</h3>
          <p className="text-gray-500 text-sm mt-2">
            Perfect for small brands starting with influencer campaigns.
          </p>

          <ul className="mt-6 space-y-3 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <Check size={16} className="text-[#006FFF]" />
              60 Coin Free
            </li>
            <li className="flex items-center gap-2">
              <Check size={16} className="text-[#006FFF]" />
              financial Statements
            </li>
            <li className="flex items-center gap-2">
              <Check size={16} className="text-[#006FFF]" />
              Campaign Management
            </li>
            <li className="flex items-center gap-2">
              <Check size={16} className="text-[#006FFF]" />
              Normal Search
            </li>
            <li className="flex items-center gap-2">
              <Check size={16} className="text-[#006FFF]" />
              30-days Free
            </li>
          </ul>

          <Link 
            href="/checkout?plan=tier1"
            className="block text-center mt-8 w-full bg-gray-100 text-gray-600 py-3 rounded-xl cursor-pointer hover:bg-gray-200 transition-colors duration-200"
          >
            Upgrade
          </Link>
        </div>

        {/* PRO (POPULAR) / TIER 2 */}
        <div className="relative rounded-2xl p-8 text-white shadow-xl bg-gradient-to-b from-[#006FFF] to-[#4DA3FF] scale-105">
          {/* LABEL */}
          <div className="absolute top-4 right-4 text-xs bg-white/20 px-3 py-1 rounded-full">
            MOST POPULAR
          </div>

          <h2 className="text-3xl font-bold">
            Rp119,000<span className="text-sm font-normal"> /month</span>
          </h2>
          <h3 className="mt-4 text-lg font-semibold">Tier 2</h3>
          <p className="text-white/80 text-sm mt-2">
            Ideal for growing brands managing multiple creators and campaigns.
          </p>

          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Check size={16} className="text-white" />
              120 Coin Free
            </li>
            <li className="flex items-center gap-2">
              <Check size={16} className="text-white" />
              Campaign Tracking
            </li>
            <li className="flex items-center gap-2">
              <Check size={16} className="text-white" />
              Financial Statements
            </li>
            <li className="flex items-center gap-2">
              <Check size={16} className="text-white" />
              Campaign Management
            </li>
            <li className="flex items-center gap-2">
              <Check size={16} className="text-white" />
              Normal Search
            </li>
            <li className="flex items-center gap-2">
              <Check size={16} className="text-white" />
              30-days Free
            </li>
          </ul>

          <Link 
            href="/checkout?plan=tier2"
            className="block text-center mt-8 w-full bg-white text-[#006FFF] py-3 rounded-xl font-semibold cursor-pointer hover:bg-gray-100 transition-colors duration-200"
          >
            Upgrade
          </Link>
        </div>

        {/* ENTERPRISE / TIER 3 */}
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-3xl font-bold text-black">
            Rp249,000<span className="text-sm font-normal"> /month</span>
          </h2>
          <h3 className="mt-4 text-lg text-gray-800 font-semibold">Tier 3</h3>
          <p className="text-gray-500 text-sm mt-2">
            For large teams needing full control and deep campaign insights.
          </p>

          <ul className="mt-6 space-y-3 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <Check size={16} className="text-[#006FFF]" />
              200 Coin Free
            </li>
            <li className="flex items-center gap-2">
              <Check size={16} className="text-[#006FFF]" />
              Budget Optimation
            </li>
            <li className="flex items-center gap-2">
              <Check size={16} className="text-[#006FFF]" />
              Campaign Tracking
            </li>
            <li className="flex items-center gap-2">
              <Check size={16} className="text-[#006FFF]" />
              Financial Statements
            </li>
            <li className="flex items-center gap-2">
              <Check size={16} className="text-[#006FFF]" />
              Campaign Management
            </li>
            <li className="flex items-center gap-2">
              <Check size={16} className="text-[#006FFF]" />
              Normal Search
            </li>
          </ul>

          <Link 
            href="/checkout?plan=tier3"
            className="block text-center mt-8 w-full bg-gray-100 text-gray-600 py-3 rounded-xl cursor-pointer hover:bg-gray-200 transition-colors duration-200"
          >
            Upgrade
          </Link>
        </div>
      </div>
    </div>
  );
}