// INDUSTRY CHALLENGES SECTION
"use client";
// import { Users, CircleDollarSign, TrendingUp } from "lucide-react";

export default function HowSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-white text-center">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* SMALL LABEL */}
        <p className="text-xs md:text-sm font-semibold text-[#898989] mb-4">
          Cara Kerja
        </p>

        {/* TITLE */}
        <h3
          className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 
        bg-[linear-gradient(to_right,#006FFF,#004299)] 
        bg-clip-text text-transparent"
        >
          Bagaimana Platform Kami Bekerja
        </h3>

        {/* SUBTEXT */}
        <p className="mt-4 md:mt-6 max-w-2xl mx-auto text-[#898989] text-sm md:text-base px-2">
          Dari pencarian influencer hingga evaluasi performa, seluruh proses
          terintegrasi dalam satu sistem.
        </p>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
          {/* CARD 1 */}
          <div className="p-6 md:p-8 rounded-xl bg-main-blue shadow-[0_20px_50px_rgba(0,0,0,0.35)] text-left">
            <div className="text-white text-3xl md:text-4xl mb-4">01</div>
            <h4 className="font-semibold text-white mb-2 text-base md:text-lg">
              Analisis Kebutuhan Kampanye
            </h4>
            <p className="text-[#C2E6F7] text-sm md:text-base">
              Pengguna menentukan tujuan promosi, target audiens, dan estimasi
              anggaran.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="p-6 md:p-8 rounded-xl bg-main-blue shadow-[0_20px_50px_rgba(0,0,0,0.35)] text-left">
            <div className="text-white text-3xl md:text-4xl mb-4">02</div>
            <h4 className="font-semibold text-white mb-2 text-base md:text-lg">
              Rekomendasi Influencer Berbasis AI
            </h4>
            <p className="text-[#C2E6F7] text-sm md:text-base">
              Sistem menganalisis data dan memberikan daftar influencer yang
              sesuai dengan objektif kampanye.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="p-6 md:p-8 rounded-xl bg-main-blue shadow-[0_20px_50px_rgba(0,0,0,0.35)] text-left">
            <div className="text-white text-3xl md:text-4xl mb-4">03</div>
            <h4 className="font-semibold text-white mb-2 text-base md:text-lg">
              Evaluasi & Optimasi Performa
            </h4>
            <p className="text-[#C2E6F7] text-sm md:text-base">
              Dashboard analitik membantu pengguna memantau ROI dan melakukan
              penyesuaian strategi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
