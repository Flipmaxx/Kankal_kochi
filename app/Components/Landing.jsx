"use client";
import React from "react";
import Image from "next/image";

export default function AutoScrollPosterWall() {
  const posterColumns = [
    [
      "/Images/TVM.jpg",
      "/Images/KLM.jpg",
       "/Images/PTA.jpg",
      
   
    ],
    [
      "/Images/ALP.jpg",
      "/Images/KTM.jpg",
      "/Images/IDK.jpg",
      
    ],
     [
      "/Images/EKM.jpg",
      "/Images/TSR.jpg",
       "/Images/PLK.jpg",
     
   
    ],
 [
      "/Images/MLP.jpg",
      "/Images/KZD.jpg",
      "/Images/WAD.jpg",
    
    ],
     [
      "/Images/KNR.jpg",
      "/Images/KAD.jpg",
       "/Images/KNR.jpg",
       "/Images/KAD.jpg",
      
   
    ],
  ];
  const colSpeeds = [27, 35, 30, 38, 32];

  return (
    <div className="relative h-screen xl:h-[130vh] w-full bg-black flex justify-center items-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent z-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-40 pointer-events-none" />
      <div className="w-full h-full grid grid-cols-3 lg:grid-cols-5 gap-3  md:gap-8 px-4 py-2 md:py-10 z-20">
        {posterColumns.map((posters, idx) => (
          <div
            key={idx}
            className={`relative overflow-hidden rounded-2xl ${
              idx >= 3 ? "hidden lg:block" : ""
            }`}
          >
            <div
              className="scroll-column"
              style={{
                animation: `scrollUp ${colSpeeds[idx]}s linear infinite`,
              }}
            >
              {[...posters, ...posters].map((src, i) => (
      <Image
  key={`${idx}-${i}`}
  src={src}
  alt={`poster-${idx}-${i}`}
  width={300}
  height={450}
  className="w-full rounded-lg md:rounded-2xl mt-3 mb-4 shadow-lg object-cover"
/>


              ))}
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .scroll-column {
          display: flex;
          flex-direction: column;
        }

        @keyframes scrollUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
      `}</style>
    </div>
  );
}
