'use client';

export default function BottomSection() {
  return (
    <section className="w-full h-full md:h-[40vh] flex flex-col items-center justify-center text-center py-12 bg-transparent  border border-black">
      <h1 className="text-lg md:text-2xl lg:text-[35px] font-bold text-white">
        LET&apos;S TALK IDEAS AND
      </h1>
      <h2 className="text-lg mt-2 md:text-2xl lg:text-[35px] font-bold text-white">
        INNOVATION
      </h2>
<button
  className="
    relative w-35 h-12 text-lg font-semibold text-white rounded-xl mt-8
    bg-gradient-to-r from-violet-500 to-violet-700
    shadow-[0_0_15px_rgba(139,92,246,0.6),0_0_30px_rgba(139,92,246,0.5)]
    hover:shadow-[0_0_25px_rgba(139,92,246,0.8),0_0_50px_rgba(139,92,246,0.7)]
    transition-all duration-300 ease-in-out
    overflow-hidden
  "
>
  <span className="relative z-10">Contact Us</span>

  <span
    className="
      absolute inset-0 bg-gradient-to-r from-violet-800 to-violet-600
      opacity-0 hover:opacity-100 blur-lg transition-opacity duration-500
    "
  ></span>
</button>


    </section>
  );
}
