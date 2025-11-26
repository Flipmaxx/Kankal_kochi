'use client'

import BottomSection from "./Components/BottomSection"
import Cards from "./Components/Cards"
import ImageSection from "./Components/ImageSection"
import InstagramReels from "./Components/InstaCards"
import AutoScrollPosters from "./Components/Landing"
import Scroll from "./Components/Scroll"
import Videoo from "./Components/video"
import Footer from "./Footer/Footer"

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
        <section className="h-full overflow-hidden z-10 relative">
           <Scroll/>
        </section>

         <section className="bg-black h-full overflow-hidden z-30 relative">
   <InstagramReels/>
        </section>

         <section className="bg-black h-full overflow-hidden z-30 relative">
    <BottomSection/>
        </section>
            <section className="bg-black h-full overflow-hidden z-30 relative">
     {/* <Footer/> */}
        </section>
         
     

    </div>
  )
}