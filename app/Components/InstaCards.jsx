"use client";
import Image from "next/image";

export default function KochiMedia() {
  const cards = [
    {
      id: 1,
      img: "/Images/sample1.jpg",
      authorImg: "/Images/profile1.jpg",
    },
    {
      id: 2,
      img: "/Images/sample2.jpg",
      authorImg: "/Images/profile2.jpg",
    },
    {
      id: 3,
      img: "/Images/sample3.jpg",
      authorImg: "/Images/profile3.jpg",
    },
    {
      id: 4,
      img: "/Images/sample4.jpg",
      authorImg: "/Images/profile4.jpg",
    },
  ];

  return (
    <div className="bg-black text-white py-10 px-6 md:px-12 flex justify-center">
      <div className="border border-[#00b7ff] rounded-md p-6 w-full relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold">
              Exclusive from Kankal Kochi Media
            </h2>
            <p className="text-sm text-gray-300 mt-1 max-w-2xl">
              Bringing you untold stories, vibrant events, and real voices that define the true spirit of Kochi.
            </p>
          </div>
          <button className="mt-4 md:mt-0 border border-gray-400 hover:bg-[#00b7ff] hover:text-black transition-all text-sm px-5 py-2 rounded">
            View All
          </button>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-black border border-gray-700 rounded-md overflow-hidden hover:scale-[1.02] transition-all duration-300"
            >
              <div className="relative w-full h-64">
                <Image
                  src={card.img || "/Images/placeholder.jpg"}
                  alt="Kochi"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-3">
                <p className="text-sm text-gray-200">
                  Lorem Ipsum is simply dummy text of the printing industry.
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <Image
                    src={card.authorImg || "/Images/userPlaceholder.png"}
                    width={24}
                    height={24}
                    alt="author"
                    className="rounded-full"
                  />
                  <span className="text-xs text-gray-400">Kankal.kochi</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Glow border effect */}
        <div className="absolute inset-0 border border-[#00b7ff]/40 rounded-md blur-[1px] pointer-events-none" />
      </div>
    </div>
  );
}
