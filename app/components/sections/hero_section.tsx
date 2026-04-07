"use client";
import Image from "next/image";

// HERO SECTION
function HeroSection() {
  return (
    <section className="min-h-screen w-full pt-32 pb-20 bg-foreground text-center relative overflow-hidden">
      {/* BADGE */}
      <div className="flex justify-center mb-6">
        <div className="p-[1.5px] rounded-full bg-[linear-gradient(to_right,#1C80F0,#5A64F7,#7855FB,#FF9DE8)]">
            <span className="flex items-center gap-2 px-6 py-3 text-sm font-medium bg-foreground text-black rounded-full">
            🤖 AI-Powered Platform
            </span>
        </div>
      </div>

      {/* TITLE */}
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
        Temukan Influencer yang Tepat.
      </h1>
      <h2 className="text-4xl md:text-6xl font-bold mt-2 
        bg-[linear-gradient(to_right,#006FFF,#004299)] 
        bg-clip-text text-transparent">
        Maksimalkan ROI dengan AI.
      </h2>

      {/* SUBTEXT */}
      <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg">
        Platform AI yang membantu UMKM terhindar dari fake followers dan
        mengoptimalkan anggaran promosi secara otomatis.
      </p>

      {/* BUTTONS */}
      <div className="flex justify-center gap-4 mt-8">
        <a
          href="#"
          className="px-6 py-3 rounded-xl bg-main-blue text-white font-semibold hover:bg-blue-700 transition"
        >
          Coba Gratis Sekarang
        </a>

        <a
          href="#"
          className="px-6 py-3 rounded-xl border border-main-blue text-main-blue font-semibold hover:bg-main-blue hover:text-white transition"
        >
          Lihat Demo
        </a>
      </div>

      {/* IMAGE */}
      <div className="relative mt-16 flex justify-center">
        <div className="relative">
          <Image
            src="/img/system-preview.png"
            alt="System Preview"
            width={900}
            height={500}
            className="rounded-xl shadow-2xl"
          />

          
        </div>
      </div>
      {/* GRADIENT FADE BOTTOM */}
          <div className="absolute bottom-0 left-0 w-full h-100 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

export default HeroSection;



