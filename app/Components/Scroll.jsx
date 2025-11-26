"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ImageSection from "./ImageSection";

gsap.registerPlugin(ScrollTrigger);

export default function Scroll() {
  const containerRef = useRef(null);
  const spacerRef = useRef(null);
  const zoomOverlayRef = useRef(null);
  const intoRef = useRef(null);
  const oLetterRef = useRef(null);
  const zoomTextRef = useRef(null);
  const extraOrdinaryRef = useRef(null);
  const finalSectionRef = useRef(null);

  useEffect(() => {
    // Set initial states
    gsap.set(zoomOverlayRef.current, { opacity: 1 });
    gsap.set(finalSectionRef.current, { opacity: 0, display: "none" });
    gsap.set(".final-content", { y: 30, opacity: 0 });

    const setTransformOrigin = () => {
      if (!oLetterRef.current || !intoRef.current) return;
      
      const oRect = oLetterRef.current.getBoundingClientRect();
      const intoRect = intoRef.current.getBoundingClientRect();
      
      const originX = ((oRect.left + oRect.width / 2 - intoRect.left) / intoRect.width) * 100;
      const originY = ((oRect.top + oRect.height / 2 - intoRect.top) / intoRect.height) * 100;
      
      intoRef.current.style.transformOrigin = `${originX}% ${originY}%`;
    };

    setTransformOrigin();
    window.addEventListener("resize", setTransformOrigin);

    // Kill any existing ScrollTriggers
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Create a single, clean ScrollTrigger
    const scrollTrigger = ScrollTrigger.create({
      trigger: spacerRef.current,
      start: "top top",
      end: "+=130%", // Reduced from 400% to 200%
      scrub: 0.5, // Smoother scrubbing
      pin: containerRef.current,
      anticipatePin: 1,
      markers: true, // Remove in production
      onEnter: () => {
        gsap.set(finalSectionRef.current, { display: "flex" });
      },
      onLeaveBack: () => {
        gsap.set(finalSectionRef.current, { display: "none" });
      },
      onUpdate: (self) => {
        const progress = self.progress;
        
        if (progress < 0.6) {
          // First 60%: Zoom animation
          const zoomProgress = progress / 0.6; // 0 to 1
          const intoScale = 1 + (zoomProgress * 20); // Reduced scale
          const oScale = 1 + (zoomProgress * 35); // Reduced scale
          
          // Smooth fade out starting at 40% of zoom progress
          const fadeProgress = zoomProgress > 0.4 ? (zoomProgress - 0.4) / 0.6 : 0;

          gsap.to(intoRef.current, { 
            scale: intoScale,
            overwrite: "auto"
          });
          gsap.to(oLetterRef.current, { 
            scale: oScale,
            overwrite: "auto"
          });
          gsap.to([zoomTextRef.current, extraOrdinaryRef.current], { 
            opacity: 1 - fadeProgress,
            scale: 1 + (zoomProgress * 0.2),
            overwrite: "auto"
          });
        } else {
          // Last 40%: Transition to final section
          const transitionProgress = (progress - 0.6) / 0.4; // 0 to 1
          
          // Smooth crossfade between sections
          gsap.to(zoomOverlayRef.current, { 
            opacity: 1 - transitionProgress,
            scale: 1 + (transitionProgress * 0.1), // Slight scale for depth
            overwrite: "auto"
          });
          gsap.to(finalSectionRef.current, { 
            opacity: transitionProgress,
            overwrite: "auto"
          });
          
          // Stagger the final content animation with better timing
          if (transitionProgress > 0.3) {
            const contentProgress = Math.min((transitionProgress - 0.3) / 0.7, 1);
            gsap.to(".final-content", { 
              y: 30 * (1 - contentProgress),
              opacity: contentProgress,
              stagger: 0.1, // Faster stagger
              overwrite: "auto"
            });
          }
        }
      }
    });

    // Cleanup
    return () => {
      window.removeEventListener("resize", setTransformOrigin);
      scrollTrigger.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-screen bg-yellow-600 relative overflow-hidden">
      {/* Background Video */}
      <video
        src="./Videos/VED.mp4"
        className="fixed top-0 left-0 w-full h-full object-cover z-0 "
        autoPlay
        muted
        loop
        playsInline
      />
       <div className="bg-violet-500 w-full absolute inset-0 opacity-30"></div>

      {/* Scroll Spacer - Reduced height */}
      <div ref={spacerRef} className="h-[200vh] bg-transparent" />

      {/* Zoom Overlay Section */}
      <div
        ref={zoomOverlayRef}
        className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-10 pointer-events-none"
      >
        <div className="text-center space-y-4">
          <h1 
            ref={zoomTextRef}
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-white"
          >
            {/* ZOOM */}
          </h1>
          
          <h1
            ref={intoRef}
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-white inline-block origin-center"
            style={{ transformOrigin: "center" }}
          >
            EXPL
            <span
              ref={oLetterRef}
              className="inline-block origin-center"
              style={{ transformOrigin: "center" }}
            >
              O
            </span>
            RE
          </h1>
          
       
        </div>
      </div>

      {/* Final Reveal Section */}
      <div
        ref={finalSectionRef}
        className="fixed top-0 left-0 w-full h-full bg-black z-50 opacity-0 pointer-events-none hidden flex-col items-center justify-center px-4 space-y-6"
      >
       <ImageSection/>
      </div>
    </div>
  );
}