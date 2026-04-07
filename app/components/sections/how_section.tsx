// INDUSTRY CHALLENGES SECTION
"use client";
// import { Users, CircleDollarSign, TrendingUp } from "lucide-react";

export default function HowSection() {
  return (
    <section className="w-full py-24 bg-white text-center">
      <div className="max-w-6xl mx-auto px-6">
        {/* SMALL LABEL */}
        <p className="text-sm font-semibold text-[#898989] mb-4">
          Cara Kerja
        </p>

        {/* TITLE */}
        <h3 className="text-4xl md:text-5xl font-bold mt-2 
        bg-[linear-gradient(to_right,#006FFF,#004299)] 
        bg-clip-text text-transparent">
          Bagaimana Platform Kami Bekerja
        </h3>

        {/* SUBTEXT */}
        <p className="mt-6 max-w-2xl mx-auto text-[#898989]">
          Dari pencarian influencer hingga evaluasi performa, seluruh proses terintegrasi dalam satu sistem.
        </p>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {/* CARD 1 */}
          <div className="p-8 rounded-xl bg-main-blue [0_20px_50px_rgba(0,0,0,0.35),
          inset_0_3px_6px_rgba(0,0,0,0.35),
          inset_0_-6px_14px_rgba(0,0,0,0.7)] text-left">
            <div className="text-white text-3xl mb-4">01</div>
            <h4 className="font-semibold text-white mb-2">
              Analisis Kebutuhan Kampanye
            </h4>
            <p className="text-[#C2E6F7]">
              Pengguna menentukan tujuan promosi, target audiens, dan estimasi anggaran.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="p-8 rounded-xl bg-main-blue [0_20px_50px_rgba(0,0,0,0.35),
          inset_0_3px_6px_rgba(0,0,0,0.35),
          inset_0_-6px_14px_rgba(0,0,0,0.7)] text-left">
            <div className="text-white text-3xl mb-4">02</div>
            <h4 className="font-semibold text-white mb-2">
              Rekomendasi Influencer Berbasis AI
            </h4>
            <p className="text-[#C2E6F7]">
              Sistem menganalisis data dan memberikan daftar influencer yang sesuai dengan objektif kampanye.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="p-8 rounded-xl bg-main-blue [0_20px_50px_rgba(0,0,0,0.35),
          inset_0_3px_6px_rgba(0,0,0,0.35),
          inset_0_-6px_14px_rgba(0,0,0,0.7)] text-left">
            <div className="text-white text-3xl mb-4">03</div>
            <h4 className="font-semibold text-white mb-2">
              Evaluasi & Optimasi Performa
            </h4>
            <p className="text-[#C2E6F7]">
              Dashboard analitik membantu pengguna memantau ROI dan melakukan penyesuaian strategi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}