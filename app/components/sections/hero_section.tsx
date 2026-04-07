"use client";
import Image from "next/image";

// HERO SECTION
function HeroSection() {
  return (
    <section className="min-h-screen w-full pt-16 md:pt-24 lg:pt-32 pb-12 md:pb-16 lg:pb-20 bg-foreground text-center relative overflow-hidden px-4">
      {/* BADGE */}
      <div className="flex justify-center mb-4 md:mb-6">
        <div className="p-[1.5px] rounded-full bg-[linear-gradient(to_right,#1C80F0,#5A64F7,#7855FB,#FF9DE8)]">
          <span className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 text-xs md:text-sm font-medium bg-foreground text-black rounded-full">
            🤖 AI-Powered Platform
          </span>
        </div>
      </div>

      {/* TITLE */}
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
        Temukan Influencer yang Tepat.
      </h1>
      <h2
        className="text-2xl md:text-4xl lg:text-6xl font-bold mt-2 
        bg-[linear-gradient(to_right,#006FFF,#004299)] 
        bg-clip-text text-transparent"
      >
        Maksimalkan ROI dengan AI.
      </h2>

      {/* SUBTEXT */}
      <p className="mt-4 md:mt-6 max-w-2xl mx-auto text-gray-600 text-xs md:text-sm lg:text-lg px-2">
        Platform AI yang membantu UMKM terhindar dari fake followers dan
        mengoptimalkan anggaran promosi secara otomatis.
      </p>

      {/* BUTTONS */}
      <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mt-6 md:mt-8">
        <a
          href="#"
          className="px-6 py-2 md:py-3 rounded-xl bg-blue-600 text-white text-sm md:text-base font-semibold hover:bg-blue-700 transition"
        >
          Coba Gratis Sekarang
        </a>

        <a
          href="#"
          className="px-6 py-2 md:py-3 rounded-xl border border-main-blue text-main-blue text-sm md:text-base font-semibold hover:bg-main-blue hover:text-white transition"
        >
          Lihat Demo
        </a>
      </div>

      {/* IMAGE */}
      <div className="relative mt-8 md:mt-12 lg:mt-16 flex justify-center">
        <div className="relative w-full max-w-sm md:max-w-2xl lg:max-w-4xl">
          <Image
            src="/img/system-preview.png"
            alt="System Preview"
            width={900}
            height={500}
            className="rounded-xl shadow-2xl w-full h-auto"
          />
        </div>
      </div>
      {/* GRADIENT FADE BOTTOM */}
      <div className="absolute bottom-0 left-0 w-full h-32 md:h-64 lg:h-100 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

export default HeroSection;
