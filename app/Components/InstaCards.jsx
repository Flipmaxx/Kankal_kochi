"use client";
import Image from "next/image";

export default function KochiMedia() {
  const cards = [1, 2, 3, 4];

  return (
    <div className="bg-black text-white py-10 px-6 md:px-12 flex justify-center">
      <div className="border border-[#00b7ff] rounded-md p-6 w-full  relative">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold">
              Exclusive from kankal kochi media
            </h2>
            <p className="text-sm text-gray-300 mt-1 max-w-2xl">
              Exclusive from Kankal Kochi Media: Bringing you untold stories,
              vibrant events, and real voices that define the true spirit of
              Kochi.
            </p>
          </div>
          <button className="mt-4 md:mt-0 border border-gray-400 hover:bg-[#00b7ff] hover:text-black transition-all text-sm px-5 py-2 rounded">
            View All
          </button>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {cards.map((item) => (
            <div
              key={item}
              className="bg-black border border-gray-700 rounded-md overflow-hidden hover:scale-[1.02] transition-all duration-300"
            >
              <div className="relative w-full h-96">
                <Image
                  src=""
                  alt="Kochi"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3">
                <p className="text-sm text-gray-200">
                  Lorem Ipsum is simply dummy text of the printing.
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <Image
                    src=""
                    width={24}
                    height={24}
                    alt="icon"
                    className="rounded-full"
                  />
                  <span className="text-xs text-gray-400">Kankal.kochi</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Glow effect (optional aesthetic) */}
        <div className="absolute inset-0 border border-[#00b7ff]/40 rounded-md blur-[1px] pointer-events-none" />
      </div>
    </div>
  );
}
  