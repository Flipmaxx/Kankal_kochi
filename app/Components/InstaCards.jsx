"use client";

import Image from "next/image";

export default function InstagramReels() {
  const shorts = [
    {
      id: 1,
      title: "Kankalkochi",
      user: "Kankalkochi",
      link: "https://youtube.com/shorts/EREaRi7G06I?si=OHhNTeZ2Fz4uo7SW",
      thumbnail: "/Images/LG2.png",
    },
    {
      id: 2,
      title: "Kankalkochi",
      user: "Kankalkochi",
      link: "https://youtube.com/shorts/fBt9ngxWO6E?si=9T8AUUPPqAVj_SFk",
      thumbnail: "/Images/LG2.png",
    },
    {
      id: 3,
      title: "Kankalkochi",
      user: "Kankalkochi",
      link: "https://www.youtube.com/shorts/XyCSnzGTAcw?feature=share",
      thumbnail: "/Images/LG2.png",
    },
    {
      id: 4,
      title: "Kankalkochi",
      user: "Kankalkochi",
      link: "https://www.youtube.com/shorts/afbQfWKrMJY?feature=share",
      thumbnail: "/Images/LG2.png",
    },
    {
      id: 5,
      title: "Kankalkochi",
      user: "Kankalkochi",
      link: "https://www.youtube.com/shorts/JGN7vtcYE6Y?feature=share",
      thumbnail: "/Images/LG2.png",
    },
    {
      id: 6,
      title: "Kankalkochi",
      user: "Kankalkochi",
      link: "https://www.youtube.com/shorts/MoG9hD_Dfgc?feature=share",
      thumbnail: "/Images/LG2.png",
    },
    {
      id: 7,
      title: "Kankalkochi",
      user: "Kankalkochi",
      link: "https://www.youtube.com/shorts/Ta_RlUJRSHI?feature=share",
      thumbnail: "/Images/LG2.png",
    },
    {
      id: 8,
      title: "Kankalkochi",
      user: "Kankalkochi",
      link: "https://www.youtube.com/shorts/oyZdVvqyers?feature=share",
      thumbnail: "/Images/LG2.png",
    },
       {
      id: 9,
      title: "Kankalkochi",
      user: "Kankalkochi",
      link: "https://www.youtube.com/shorts/CjdDkvMECkE?feature=share",
      thumbnail: "/Images/LG2.png",
    },
           {
      id: 10,
      title: "Kankalkochi",
      user: "Kankalkochi",
      link: "https://www.youtube.com/shorts/B1-KYwI23Qw?feature=share",
      thumbnail: "/Images/LG2.png",
    },
           {
      id: 11,
      title: "Kankalkochi",
      user: "Kankalkochi",
      link: "https://www.youtube.com/shorts/gn31sxr1LoY?feature=share",
      thumbnail: "/Images/LG2.png",
    },
           {
      id: 12,
      title: "Kankalkochi",
      user: "Kankalkochi",
      link: "https://www.youtube.com/shorts/8sLNsnFkbbw?feature=share",
      thumbnail: "/Images/LG2.png",
    },
  ];

  const getYouTubeID = (url) => {
    const parts = url.split("/shorts/");
    return parts[1]?.split("?")[0];
  };

  return (
    <div
      className="w-full bg-[#020202] bg-cover bg-center px-6 py-16"
      style={{ backgroundImage: "url('/Images/space-bg.png')" }}
    >
      {/* HEADER */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between mb-8">
        <div>
          <h2 className="text-white text-xl md:text-4xl font-bold">
            Exclusive YouTube Shorts
          </h2>
          <p className="text-gray-300 mt-2 max-w-2xl text-sm">
            Curated video shorts from Kanakal creators.
          </p>
        </div>

        <a href="https://www.youtube.com/@kankalkochi" target="_blank">
          <button className="text-white border mt-2 border-gray-500 px-4 py-2 rounded-lg hover:bg-white hover:text-black transition">
            View All
          </button>
        </a>
      </div>

      {/* GRID */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {shorts.map((short) => {
          const id = getYouTubeID(short.link);

          const embedUrl = `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&controls=0&playlist=${id}`;

          return (
            <div
              key={short.id}
              className="group relative rounded-xl overflow-hidden shadow-lg bg-black cursor-pointer"
              onClick={() => window.open(short.link, "_blank")}
            >
              {/* AUTOPLAY PREVIEW */}
              <iframe
                src={embedUrl}
                className="w-full h-100 xl:h-130 pointer-events-none"
                allow="autoplay; encrypted-media"
              ></iframe>

              {/* CLICK OVERLAY */}
              <div className="absolute inset-0 z-30"></div>

              {/* GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>

              {/* BOTTOM INFO */}
              <div className="absolute bottom-4 left-4 right-4 text-white z-20">
                <p className="text-sm mb-3">{short.title}</p>

                <div className="flex items-center gap-2">
                  <Image
                    src={short.thumbnail}
                    alt="profile"
                    width={32}
                    height={32}
                    className="rounded-full bg-cover"
                  />
                  <span className="text-sm">@{short.user}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
