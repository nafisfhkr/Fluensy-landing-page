"use client";

export default function CTASection() {
  return (
    <section className="w-full py-16 md:py-24 bg-greyground px-4 md:px-6">
      <div className="max-w-5xl mx-auto">
        {/* CARD */}
        <div
          className="
          bg-white
          rounded-2xl
          p-8 md:p-12
          text-center

          shadow-[0_30px_80px_rgba(0,0,0,0.25)]
        "
        >
          {/* TITLE */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
            Siap Mengoptimalkan Kampanye
          </h2>
          <h3
            className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2 
        bg-[linear-gradient(to_right,#006FFF,#004299)] 
        bg-clip-text text-transparent"
          >
            Influencer Anda?
          </h3>

          {/* SUBTEXT */}
          <p className="mt-4 md:mt-6 text-[#4b5563] max-w-2xl mx-auto text-sm md:text-base px-2">
            Dorong pertumbuhan brand Anda melalui kampanye influencer yang lebih
            relevan, efisien, dan berdampak nyata.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 md:mt-10 flex justify-center gap-3 md:gap-4 flex-wrap">
            {/* PRIMARY BUTTON */}
            <a
              href="/register"
              className="
                px-6 md:px-8 py-2 md:py-3 rounded-xl text-sm md:text-base
                bg-main-blue text-white font-semibold
                hover:bg-blue-700
                transition
              "
            >
              Mulai Sekarang
            </a>

            {/* SECONDARY BUTTON */}
            {/* <a
              href="#"
              className="
                px-6 md:px-8 py-2 md:py-3 rounded-xl text-sm md:text-base
                border border-main-blue
                text-main-blue font-semibold
                hover:bg-main-blue hover:text-white
                transition
              "
            >
              Lihat Demo
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}
