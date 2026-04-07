"use client";

export default function FlexibleAccess2Section() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <p className="text-sm font-semibold text-[#898989] mb-4">
            Flexible Access Model
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-blue-600">
            Fitur Unggulan Platform
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-[#898989]">
            Dirancang untuk membantu pelaku usaha dan brand mengoptimalkan kampanye influencer secara strategis dan terukur.
          </p>
        </div>

        {/* FEATURE 1 */}
        <div className="flex items-center gap-12 mb-24">
          {/* TEXT */}
          <div className="w-1/2">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              AI Influencer Matching
            </h3>
            <p className="text-black">
              Algoritma menganalisis niche, demografi audiens, serta tingkat engagement untuk merekomendasikan influencer yang paling relevan.
            </p>
          </div>

          {/* IMAGE */}
          <div className="w-1/2">
            <div className="bg-[#10324F] rounded-xl p-6 shadow-2xl">
              <img
                src="/img/system-preview.png"
                alt="Feature 1"
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>

        {/* FEATURE 2 (REVERSE) */}
        <div className="flex items-center gap-12 mb-24">
          {/* IMAGE */}
          <div className="w-1/2">
            <div className="bg-[#10324F] rounded-xl p-6 shadow-2xl">
              <img
                src="/img/system-optimation.png"
                alt="Feature 2"
                className="rounded-lg w-full"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="w-1/2">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Budget Simulation Engine
            </h3>
            <p className="text-black">
              Sistem memberikan rekomendasi distribusi anggaran yang optimal berdasarkan data historis dan performa influencer.
            </p>
          </div>
        </div>

        {/* FEATURE 3 */}
        <div className="flex items-center gap-12">
          {/* TEXT */}
          <div className="w-1/2">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Performance Analytics Dashboard
            </h3>
            <p className="text-black">
              Dashboard interaktif untuk memantau performa kampanye secara real-time dan mengevaluasi ROI dengan lebih akurat.
            </p>
          </div>

          {/* IMAGE */}
          <div className="w-1/2">
            <div className="bg-[#10324F] rounded-xl p-6 shadow-2xl">
              <img
                src="/img/system-payment-tracking.png"
                alt="Feature 3"
                className="rounded-lg w-full"
              />
            </div>
          </div>
        </div>

        {/* BUTTON */}
        <div className="mt-12">
          <a
            href="#"
            className="px-8 py-3 rounded-xl bg-main-blue text-white font-semibold hover:bg-blue-700 transition"
          >
            Jelajahi Fitur Lengkap
          </a>
        </div>

      </div>
    </section>
  );
}