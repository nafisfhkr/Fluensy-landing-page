"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Briefcase, Star } from "lucide-react";

export default function RoleSelection() {
  const router = useRouter();

  const handleBrandSelect = () => {
    router.push("/search");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center"
      // Memanggil gambar dari folder public
      style={{ backgroundImage: "url('/img/background/influencer.jpg')" }}
    >
      {/* Overlay Gelap & Blur untuk Background */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>

      {/* Main Card Modal */}
      <div className="relative z-10 bg-white rounded-2xl w-[90%] max-w-4xl p-10 md:p-14 shadow-2xl">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0057FF] mb-4 tracking-tight">
            Pilih peran Anda
          </h1>
          <p className="text-slate-500 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
            Pilih peran Anda untuk mempersonalisasi
            <br className="hidden md:block" /> pengalaman dan akses dasbor Anda.
          </p>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Card 1: Pemilik Usaha */}
          <div className="flex flex-col items-center text-center p-8 border border-slate-200 rounded-2xl hover:border-blue-300 hover:shadow-sm transition-all duration-200 bg-white">
            <div className="mb-4 text-[#0057FF]">
              <Briefcase size={32} strokeWidth={2.5} />
            </div>
            <h2 className="text-lg font-bold text-slate-800 mb-3">
              Saya Pemilik Usaha
            </h2>
            <p className="text-sm text-slate-500 mb-8 px-2 flex-grow leading-relaxed">
              Kelola kampanye, temukan influencer, lacak kinerja, dan tangani
              pembayaran.
            </p>
            <button
              onClick={handleBrandSelect}
              className="bg-[#0057FF] hover:bg-blue-700 text-white font-semibold text-sm px-8 py-2.5 rounded-full transition-colors w-max"
            >
              Continue as Brand
            </button>
          </div>

          {/* Card 2: Influencers & Creators */}
          <div className="flex flex-col items-center text-center p-8 border border-slate-200 rounded-2xl hover:border-blue-300 hover:shadow-sm transition-all duration-200 bg-white">
            <div className="mb-4 text-[#0057FF]">
              <Star size={32} strokeWidth={2.5} className="fill-[#0057FF]" />
            </div>
            <h2 className="text-lg font-bold text-slate-800 mb-3">
              For Influencers & Creators
            </h2>
            <p className="text-sm text-slate-500 mb-8 px-2 flex-grow leading-relaxed">
              Temukan kolaborasi merek, lacak kemitraan, dan kelola penghasilan
              Anda.
            </p>
            <button className="bg-[#0057FF] hover:bg-blue-700 text-white font-semibold text-sm px-8 py-2.5 rounded-full transition-colors w-max">
              Continue as Creator
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
