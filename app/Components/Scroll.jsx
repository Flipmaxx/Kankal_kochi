"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    gsap.set(zoomOverlayRef.current, { opacity: 1 });
    gsap.set(finalSectionRef.current, { opacity: 0 });
    gsap.set(".final-content", { y: 50, opacity: 0 });

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

    
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Main scroll animation timeline
    const mainTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: spacerRef.current,
        start: "top top", // When top of spacer hits top of viewport
        end: "bottom top", // When bottom of spacer hits top of viewport
        scrub: true, // Smooth scrubbing
        pin: true, // Pin the container
        anticipatePin: 1,
        markers: true, // Add markers for debugging (remove in production)
      }
    });

    // Phase 1: Zoom animation (0% to 50% of scroll)
    mainTimeline
      // Zoom the entire "INTO" text
      .to(intoRef.current, {
        scale: 25,
        ease: "power2.inOut",
      })
      // Zoom the "O" even more
      .to(oLetterRef.current, {
        scale: 40,
        ease: "power2.inOut",
      }, 0) // Start at same time
      // Fade out other elements
      .to(zoomTextRef.current, {
        scale: 1.5,
        opacity: 0,
        ease: "power2.in",
      }, 0)
      .to(extraOrdinaryRef.current, {
        scale: 1.3,
        opacity: 0,
        ease: "power2.in",
      }, 0);

    // Phase 2: Transition to final section (50% to 100% of scroll)
    mainTimeline
      // Hide zoom overlay
      .to(zoomOverlayRef.current, {
        opacity: 0,
        ease: "power2.in",
      })
      // Show final section
      .to(finalSectionRef.current, {
        opacity: 1,
        ease: "power2.out",
      })
      // Animate final content in
      .to(".final-content", {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        ease: "power2.out",
      });

    // Alternative approach: Separate ScrollTriggers for better control
    ScrollTrigger.create({
      trigger: spacerRef.current,
      start: "top top",
      end: "+=400%", // 400% of viewport height
      scrub: true,
      pin: true,
      markers: true,
      onUpdate: (self) => {
        const progress = self.progress;
        
        // Manual control based on scroll progress
        if (progress < 0.5) {
          // First half: Zoom animation
          const zoomProgress = progress * 2; // 0 to 1
          gsap.to(intoRef.current, { scale: 1 + (zoomProgress * 24), duration: 0 });
          gsap.to(oLetterRef.current, { scale: 1 + (zoomProgress * 39), duration: 0 });
          gsap.to(zoomTextRef.current, { opacity: 1 - (zoomProgress * 2), duration: 0 });
          gsap.to(extraOrdinaryRef.current, { opacity: 1 - (zoomProgress * 2), duration: 0 });
        } else {
          // Second half: Transition to final section
          const transitionProgress = (progress - 0.5) * 2; // 0 to 1
          gsap.to(zoomOverlayRef.current, { opacity: 1 - transitionProgress, duration: 0 });
          gsap.to(finalSectionRef.current, { opacity: transitionProgress, duration: 0 });
          
          if (transitionProgress > 0.3) {
            gsap.to(".final-content", { 
              y: 50 * (1 - ((transitionProgress - 0.3) / 0.7)), 
              opacity: ((transitionProgress - 0.3) / 0.7),
              duration: 0 
            });
          }
        }
      }
    });

    // Cleanup
    return () => {
      window.removeEventListener("resize", setTransformOrigin);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-screen relative">
      {/* Background Video */}
      <video
        src="./Videos/S.mp4"
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Scroll Spacer - Creates the scrollable area */}
      <div ref={spacerRef} className="h-[100vh] bg-transparent" />

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
            ZOOM
          </h1>
          
          <h1
            ref={intoRef}
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-white inline-block origin-center"
            style={{ transformOrigin: "center" }}
          >
            INT
            <span
              ref={oLetterRef}
              className="inline-block origin-center"
              style={{ transformOrigin: "center" }}
            >
              O
            </span>
          </h1>
          
          <h1
            ref={extraOrdinaryRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white"
          >
            THE EXTRA ORDINARY
          </h1>
        </div>
      </div>

      {/* Final Reveal Section */}
      <div
        ref={finalSectionRef}
        className="fixed top-0 left-0 w-full h-full bg-white z-50 opacity-0 pointer-events-none"
      >
        <div className="w-full h-full flex flex-col items-center justify-center px-4 space-y-8">
          <div className="final-content text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Welcome to Our World
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl">
              Where extraordinary experiences begin
            </p>
          </div>

          <div className="final-content w-full max-w-6xl aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="https://videos.pexels.com/video-files/6611947/6611947-uhd_2560_1440_25fps.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="final-content text-center">
            <button className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}