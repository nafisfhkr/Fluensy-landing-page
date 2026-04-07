// INDUSTRY CHALLENGES SECTION
"use client";
import { Users, CircleDollarSign, TrendingUp } from "lucide-react";

export default function ChallengesSection() {
  return (
    <section className="w-full py-24 bg-white text-center">
      <div className="max-w-6xl mx-auto px-6">
        {/* SMALL LABEL */}
        <p className="text-sm font-semibold text-[#898989] mb-4">
          Tantangan Industri
        </p>

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-bold text-black">
          Influencer Marketing
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold mt-2 
        bg-[linear-gradient(to_right,#006FFF,#004299)] 
        bg-clip-text text-transparent">
          Tidak Seindah yang Terlihat
        </h3>

        {/* SUBTEXT */}
        <p className="mt-6 max-w-2xl mx-auto text-[#898989]">
          Tanpa analitik yang tepat dan pendekatan berbasis data, keputusan promosi sering kali bergantung pada asumsi, bukan performa yang terukur.
        </p>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {/* CARD 1 */}
          <div className="p-8 rounded-xl bg-white shadow-[0_10px_30px_rgba(59,130,246,0.15)] text-left">
            <div className="text-main-blue text-3xl mb-4"><Users /></div>
            <h4 className="font-semibold text-black mb-2">
              Kurangnya Transparansi Audience
            </h4>
            <p className="text-[#4b5563]">
              Data pengikut dan tingkat engagement sering kali tidak mencerminkan kualitas audients yang sebenarnya.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="p-8 rounded-xl bg-white shadow-[0_10px_30px_rgba(59,130,246,0.15)] text-left">
            <div className="text-main-blue text-3xl mb-4"><CircleDollarSign /></div>
            <h4 className="font-semibold text-black mb-2">
              Alokasi Anggaran yang Kurang Efisien
            </h4>
            <p className="text-[#4b5563]">
              Tanpa simulasi berbasis data, sulit menentukan strategi yang paling efektif antara mega maupun micro influencer.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="p-8 rounded-xl bg-white shadow-[0_10px_30px_rgba(59,130,246,0.15)] text-left">
            <div className="text-main-blue text-3xl mb-4"><TrendingUp /></div>
            <h4 className="font-semibold text-black mb-2">
              Keterbatasan Pengukuran ROI
            </h4>
            <p className="text-[#4b5563]">
              Banyak pelaku usaha belum memiliki sistem analitik terintegrasi untuk mengevaluasi performa kampanye secara menyeluruh.
            </p>
          </div>
        </div>

        {/* FOOTER TEXT */}
        <p className="mt-12 text-[#898989] max-w-2xl mx-auto">
          Tantangan ini mendorong perlunya pendekatan berbasis Artificial Intelligence.
        </p>
      </div>
    </section>
  );
}