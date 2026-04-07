// INDUSTRY CHALLENGES SECTION
"use client";
import { Users, CircleDollarSign, TrendingUp } from "lucide-react";

export default function ChallengesSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-white text-center">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* SMALL LABEL */}
        <p className="text-xs md:text-sm font-semibold text-[#898989] mb-4">
          Tantangan Industri
        </p>

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
          Influencer Marketing
        </h2>
        <h3
          className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 
        bg-[linear-gradient(to_right,#006FFF,#004299)] 
        bg-clip-text text-transparent"
        >
          Tidak Seindah yang Terlihat
        </h3>

        {/* SUBTEXT */}
        <p className="mt-4 md:mt-6 max-w-2xl mx-auto text-[#898989] text-sm md:text-base px-2">
          Tanpa analitik yang tepat dan pendekatan berbasis data, keputusan
          promosi sering kali bergantung pada asumsi, bukan performa yang
          terukur.
        </p>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
          {/* CARD 1 */}
          <div className="p-6 md:p-8 rounded-xl bg-white shadow-[0_10px_30px_rgba(59,130,246,0.15)] text-left">
            <div className="text-blue-600 text-3xl md:text-4xl mb-4">
              <Users />
            </div>
            <h4 className="font-semibold text-black mb-2 text-base md:text-lg">
              Kurangnya Transparansi Audience
            </h4>
            <p className="text-[#4b5563] text-sm md:text-base">
              Data pengikut dan tingkat engagement sering kali tidak
              mencerminkan kualitas audients yang sebenarnya.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="p-6 md:p-8 rounded-xl bg-white shadow-[0_10px_30px_rgba(59,130,246,0.15)] text-left">
            <div className="text-blue-600 text-3xl md:text-4xl mb-4">
              <CircleDollarSign />
            </div>
            <h4 className="font-semibold text-black mb-2 text-base md:text-lg">
              Alokasi Anggaran yang Kurang Efisien
            </h4>
            <p className="text-[#4b5563] text-sm md:text-base">
              Tanpa simulasi berbasis data, sulit menentukan strategi yang
              paling efektif antara mega maupun micro influencer.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="p-6 md:p-8 rounded-xl bg-white shadow-[0_10px_30px_rgba(59,130,246,0.15)] text-left">
            <div className="text-blue-600 text-3xl md:text-4xl mb-4">
              <TrendingUp />
            </div>
            <h4 className="font-semibold text-black mb-2 text-base md:text-lg">
              Keterbatasan Pengukuran ROI
            </h4>
            <p className="text-[#4b5563] text-sm md:text-base">
              Banyak pelaku usaha belum memiliki sistem analitik terintegrasi
              untuk mengevaluasi performa kampanye secara menyeluruh.
            </p>
          </div>
        </div>

        {/* FOOTER TEXT */}
        <p className="mt-12 text-[#898989] max-w-2xl mx-auto">
          Tantangan ini mendorong perlunya pendekatan berbasis Artificial
          Intelligence.
        </p>
      </div>
    </section>
  );
}
