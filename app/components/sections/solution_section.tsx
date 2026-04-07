"use client";
import { Users, CircleDollarSign, TrendingUp } from "lucide-react";

export default function SolutionSection() {
  return (
    <section className="w-full py-24 bg-greyground">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#898989] mb-4">
            AI-Powered Solution
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Mengoptimalkan Kampanye Influencer
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold mt-2 
        bg-[linear-gradient(to_right,#006FFF,#004299)] 
        bg-clip-text text-transparent">
            dengan Analitik Cerdas
          </h3>

          <p className="mt-6 max-w-2xl mx-auto text-[#898989]">
            Platform kami mengintegrasikan analitik audiens, simulasi anggaran,
            dan evaluasi performa dalam satu sistem terpadu.
          </p>
        </div>

        {/* CONTENT */}
        <div className="flex items-stretch gap-12">
          {/* LEFT IMAGE */}
          <div className="w-1/2 -ml-24 flex">
            <div className="bg-main-blue rounded-xl p-6 shadow-2xl w-full h-full">
              <img
                src="/img/system-optimation.png"
                alt="AI System"
                className="rounded-lg w-full h-full object-cover shadow-2xl"
              />
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className="w-1/2 flex flex-col gap-6">
            {/* CARD 1 */}
            <div className="bg-[#10324F] p-6 rounded-xl shadow-lg">
              <div className="text-white text-2xl mb-3"><Users /></div>
              <h4 className="text-white font-semibold mb-2">
                Analisis Insight Audiens
              </h4>
              <p className="text-[#83aac6]">
                Menganalisis kualitas audiens secara mendalam berdasarkan
                demografi dan engagement autentik.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-[#10324F] p-6 rounded-xl shadow-lg">
              <div className="text-white text-2xl mb-3"><CircleDollarSign /></div>
              <h4 className="text-white font-semibold mb-2">
                Smart Budget Recommendation
              </h4>
              <p className="text-[#83aac6]">
                Memberikan simulasi distribusi anggaran berdasarkan performa
                historis dan prediksi AI.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="bg-[#10324F] p-6 rounded-xl shadow-lg">
              <div className="text-white text-2xl mb-3"><TrendingUp /></div>
              <h4 className="text-white font-semibold mb-2">
                Real-Time Performance Tracking
              </h4>
              <p className="text-[#83aac6]">
                Menyediakan dashboard analitik untuk mengukur ROI secara
                komprehensif.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}