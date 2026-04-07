"use client";
import { LayoutDashboard, CircleDollarSign, TrendingUp } from "lucide-react";

export default function FlexibleAccess1Section() {
  return (
    <section className="w-full py-12 md:py-24 bg-greyground">
      <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
        {/* HEADER */}
        <p className="text-xs md:text-sm font-semibold text-[#898989] mb-4">
          Flexible Access Model
        </p>

        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black">
          Model Akses Berbasis
        </h2>
        <h3
          className="text-2xl md:text-4xl lg:text-5xl font-bold mt-2 
        bg-[linear-gradient(to_right,#006FFF,#004299)] 
        bg-clip-text text-transparent"
        >
          Langganan dan Kredit
        </h3>

        <p className="mt-4 md:mt-6 max-w-2xl mx-auto text-xs md:text-sm text-[#898989] px-2">
          Platform menyediakan sistem berlangganan dengan dukungan kredit (coin)
          untuk membuka fitur analitik lanjutan sesuai kebutuhan kampanye.
        </p>

        {/* TOP CARDS + + = */}
        <div className="mt-12 md:mt-16 bg-[#F9FAFB] p-4 md:p-10 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-4 md:gap-6">
            {/* CARD 1 */}
            <div className="p-4 md:p-8 bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
              <div className="text-blue-600 text-2xl md:text-3xl mb-4 flex justify-center">
                <LayoutDashboard />
              </div>
              <h4 className="font-semibold text-sm md:text-base text-black mb-2">
                Base Subscription
              </h4>
              <p className="text-xs md:text-sm text-[#4b5563]">
                Akses fitur dasar seperti dashboard dan pencarian influencer.
              </p>
            </div>

            {/* PLUS */}
            <div className="hidden md:flex justify-center items-center text-3xl font-bold text-black">
              +
            </div>

            {/* CARD 2 */}
            <div className="p-4 md:p-8 bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
              <div className="text-blue-600 text-2xl md:text-3xl mb-4 flex justify-center">
                <CircleDollarSign />
              </div>
              <h4 className="font-semibold text-sm md:text-base text-black mb-2">
                Credits (Coin)
              </h4>
              <p className="text-xs md:text-sm text-[#4b5563]">
                Gunakan kredit untuk membuka analitik lanjutan dan fitur
                premium.
              </p>
            </div>

            {/* EQUAL */}
            <div className="hidden md:flex justify-center items-center text-3xl font-bold text-black">
              =
            </div>

            {/* CARD 3 */}
            <div className="p-4 md:p-8 bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
              <div className="text-blue-600 text-2xl md:text-3xl mb-4 flex justify-center">
                <TrendingUp />
              </div>
              <h4 className="font-semibold text-sm md:text-base text-black mb-2">
                Flexible Access
              </h4>
              <p className="text-xs md:text-sm text-[#4b5563]">
                Kombinasi fleksibel sesuai kebutuhan bisnis dan skala kampanye.
              </p>
            </div>
          </div>
        </div>

        {/* BOTTOM CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-12 md:mt-16">
          {/* CARD 1 */}
          <div className="bg-[#10324F] p-4 md:p-6 rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.35)]">
            <h4 className="text-white font-semibold text-sm md:text-base mb-2">
              1. Akses Dasar Terstruktur
            </h4>
            <p className="text-xs md:text-sm text-[#83aac6]">
              Memberikan fondasi penggunaan platform melalui sistem berlangganan
              yang stabil dan terjangkau.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-[#10324F] p-4 md:p-6 rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.35)]">
            <h4 className="text-white font-semibold text-sm md:text-base mb-2">
              2. Pembukaan Fitur Secara Selektif
            </h4>
            <p className="text-xs md:text-sm text-[#83aac6]">
              Pengguna dapat menggunakan kredit untuk mengakses fitur lanjutan
              tanpa harus meningkatkan paket secara permanen.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-[#10324F] p-4 md:p-6 rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.35)]">
            <h4 className="text-white font-semibold text-sm md:text-base mb-2">
              3. Biaya Sesuai Skala Kampanye
            </h4>
            <p className="text-xs md:text-sm text-[#83aac6]">
              Model ini memungkinkan penyesuaian penggunaan berdasarkan
              kebutuhan dan kompleksitas kampanye.
            </p>
          </div>
        </div>

        {/* BUTTON */}
        <div className="mt-8 md:mt-12">
          <a
            href="#"
            className="inline-block px-6 md:px-8 py-2 md:py-3 rounded-xl bg-main-blue text-white text-sm md:text-base font-semibold hover:bg-blue-700 transition"
          >
            Lihat Detail Paket
          </a>
        </div>
      </div>
    </section>
  );
}
