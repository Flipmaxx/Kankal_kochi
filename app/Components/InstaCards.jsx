"use client";

import { motion } from "framer-motion";

export default function KochiMedia() {
  const reels = [
    {
      id: 1,
      embedUrl: "https://www.instagram.com/reel/DQZKxGIkulA/embed",
    },
    {
      id: 2,
      embedUrl: "https://www.instagram.com/reel/DQmDobyEiPg/embed",
    },
  ];

  return (
    <section className="relative bg-black text-white py-16 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/Images/BG3.png')] bg-cover bg-center opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />

      <div className="relative z-10 container mx-auto">
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-2">
              Exclusive from Kankal Kochi Media
            </h2>
            <p className="text-sm md:text-base text-gray-300 max-w-2xl">
              Bringing you untold stories, vibrant events, and real voices that define the true spirit of Kochi.
            </p>
          </div>
          <button className="mt-6 md:mt-0 border border-gray-400 hover:bg-white hover:text-black transition-all text-sm px-6 py-2 rounded">
            View All
          </button>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        >
          {reels.map((reel) => (
            <motion.div
              key={reel.id}
              className="rounded-xl overflow-hidden shadow-lg bg-black/40 backdrop-blur-sm border border-gray-800 hover:border-[#00b7ff] transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-[11/12] w-full">
                <iframe
                  src={reel.embedUrl}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
