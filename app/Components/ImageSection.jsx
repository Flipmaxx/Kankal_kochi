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
        xl:h-[95vh]       /* Extra large screens */
      "
    >
      {/* Image container */}
      <div className="relative h-full w-full">
        <Image
          src="/Images/BG1.jpg"
          alt="Background"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover rounded-2xl"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 rounded-2xl"></div>
      </div>
    </section>
  );
}
