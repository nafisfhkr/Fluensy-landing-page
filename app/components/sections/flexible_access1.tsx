"use client";
import { LayoutDashboard, CircleDollarSign, TrendingUp } from "lucide-react";

export default function FlexibleAccess1Section() {
  return (
    <section className="w-full py-24 bg-greyground">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* HEADER */}
        <p className="text-sm font-semibold text-[#898989] mb-4">
          Flexible Access Model
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-black">
          Model Akses Berbasis
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold mt-2 
        bg-[linear-gradient(to_right,#006FFF,#004299)] 
        bg-clip-text text-transparent">
          Langganan dan Kredit
        </h3>

        <p className="mt-6 max-w-2xl mx-auto text-[#898989]">
          Platform menyediakan sistem berlangganan dengan dukungan kredit
          (coin) untuk membuka fitur analitik lanjutan sesuai kebutuhan kampanye.
        </p>

        {/* TOP CARDS + + = */}
        <div className="mt-16 bg-[#F9FAFB] p-10 rounded-2xl">
            <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-6">

                {/* CARD 1 */}
                <div className="p-8 bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
                    <div className="text-main-blue text-3xl mb-4">
                        <LayoutDashboard />
                    </div>
                    <h4 className="font-semibold text-black mb-2">Base Subscription</h4>
                    <p className="text-sm text-[#4b5563]">
                        Akses fitur dasar seperti dashboard dan pencarian influencer.
                    </p>
                </div>

                {/* PLUS */}
                <div className="flex justify-center items-center text-3xl font-bold text-black">
                +
                </div>

                {/* CARD 2 */}
                <div className="p-8 bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
                    <div className="text-main-blue text-3xl mb-4">
                        <CircleDollarSign />
                    </div>
                    <h4 className="font-semibold text-black mb-2">Credits (Coin)</h4>
                    <p className="text-sm text-[#4b5563]">
                        Gunakan kredit untuk membuka analitik lanjutan dan fitur premium.
                    </p>
                </div>

                {/* EQUAL */}
                <div className="flex justify-center items-center text-3xl font-bold text-black">
                =
                </div>

                {/* CARD 3 */}
                <div className="p-8 bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
                    <div className="text-main-blue text-3xl mb-4">
                        <TrendingUp />
                    </div>
                    <h4 className="font-semibold text-black mb-2">Flexible Access</h4>
                    <p className="text-sm text-[#4b5563]">
                        Kombinasi fleksibel sesuai kebutuhan bisnis dan skala kampanye.
                    </p>
                </div>

            </div>
        </div>

        {/* BOTTOM CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {/* CARD 1 */}
          <div className="bg-[#10324F] p-6 rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.35)]">
            <h4 className="text-white font-semibold mb-2">
              1. Akses Dasar Terstruktur
            </h4>
            <p className="text-[#83aac6]">
              Memberikan fondasi penggunaan platform melalui sistem berlangganan yang stabil dan terjangkau.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-[#10324F] p-6 rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.35)]">
            <h4 className="text-white font-semibold mb-2">
              2. Pembukaan Fitur Secara Selektif
            </h4>
            <p className="text-[#83aac6]">
              Pengguna dapat menggunakan kredit untuk mengakses fitur lanjutan tanpa harus meningkatkan paket secara permanen.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-[#10324F] p-6 rounded-xl shadow-[0_15px_40px_rgba(0,0,0,0.35)]">
            <h4 className="text-white font-semibold mb-2">
              3. Biaya Sesuai Skala Kampanye
            </h4>
            <p className="text-[#83aac6]">
              Model ini memungkinkan penyesuaian penggunaan berdasarkan kebutuhan dan kompleksitas kampanye.
            </p>
          </div>
        </div>

        {/* BUTTON */}
        <div className="mt-12">
          <a
            href="#"
            className="px-8 py-3 rounded-xl bg-main-blue text-white font-semibold hover:bg-blue-700 transition"
          >
            Lihat Detail Paket
          </a>
        </div>
      </div>
    </section>
  );
}