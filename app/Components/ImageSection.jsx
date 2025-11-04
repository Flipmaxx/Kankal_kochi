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
        xl:h-[98vh]       /* Extra large screens */
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
 
        <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
      </div>

      <div>
        <h1 className="absolute max-w-xl right-7 bottom-10">THE BLEND CREATIVITY AND TECHNOLOGY TO CRAFT IMPACTFUL DIGITAL EXPERIENCE</h1>
      </div>
    </section>
  );
}
