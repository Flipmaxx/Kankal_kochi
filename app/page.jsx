'use client'

import AutoScrollPosters from "./Components/Landing"
import Scroll from "./Components/Scroll"
import Videoo from "./Components/video"

export default function Home(){
  return(
    <div className="relative">
        {/* Section 1 - Full viewport height */}
        <section className="bg-black h-full overflow-hidden z-30 relative">
           <AutoScrollPosters/>
        </section>
     
        {/* Section 2 - Full viewport height */}
        <section className="h-screen overflow-hidden z-20 relative">
           <Videoo/>
        </section>

        {/* Section 3 - Scroll animation section */}
        <section className="h-screen overflow-hidden z-10 relative">
           <Scroll/>
        </section>

        {/* Section 2 - Full viewport height */}
        <section className="h-screen overflow-hidden z-40  bg-transparent relative">
        
        </section>

         <section className="bg-black h-full overflow-hidden z-30 relative">
           <AutoScrollPosters/>
        </section>

         <section className="bg-black h-full overflow-hidden z-30 relative">
           <AutoScrollPosters/>
        </section>
         
     

    </div>
  )
}