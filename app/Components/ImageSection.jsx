"use client";

import Image from "next/image";

export default function ImageSection() {
  return (
    <section
      className="
        relative w-full overflow-hidden px-4
        h-[30vh]          /* Default height for mobile */
        sm:h-[30vh]       /* Small screens */
        md:h-[30vh]       /* Medium screens */
        lg:h-[40vh]       /* Large screens */
        xl:h-auto       /* Extra large screens */
      "
    >
      <div className="relative h-full w-full">
    <Image
  src="/Images/BG1.jpg"
  alt="Background"
  width={1920}
  height={1080}
  quality={100}
  priority
  className="w-full h-full rounded-2xl object-cover"
/>
 
        <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>
      </div>

     <div className="absolute bottom-10 right-8 z-20 text-start">
        <h1 className="text-white font-semibold text-sm sm:text-lg md:text-xl lg:text-4xl leading-snug max-w-[700px]">
          WE BLEND CREATIVITY AND<br />
          TECHNOLOGY TO CRAFT<br />
          IMPACTFUL DIGITAL EXPERIENCES.
        </h1>
      </div>
    </section>
  );
}
